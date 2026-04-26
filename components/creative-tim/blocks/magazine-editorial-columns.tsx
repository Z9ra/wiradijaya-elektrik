"use client"

import { useEffect, useRef, useState } from "react"
import {
  layoutNextLine,
  prepareWithSegments,
  type LayoutCursor,
} from "@chenglou/pretext"

const FONT_SIZE = 16
const LINE_HEIGHT = 26
const FONT = `${FONT_SIZE}px Georgia, serif`

// Single gap between the two columns
const COL_GAP = 32
// Maximum width for the silhouette image; height is derived from aspect ratio
const IMG_MAX_W = 292
// Extra pixels to push image lower than the natural text bottom
const IMG_LOWER = 120
// Breathing room between text and silhouette edge
const H_PAD = 8
const V_PAD = 3

const WOMAN_PNG = "/ui/lance-reis-unsplash.png"

const COL1_TEXT = `The golden ratio appears throughout nature in the spiral of a nautilus shell, the arrangement of seeds in a sunflower, the branching of trees against winter sky. Designers have long borrowed this proportion — 1 to 1.618 — as a guide for composing pages that feel effortlessly balanced to the eye. But proportion alone cannot account for the full mystery of a beautiful spread. There is also rhythm: the breathing space between columns, the margin that frames text like a mount frames a painting. Early typographers called this the "river of white," the invisible current that runs vertically through a justified paragraph when spaces between words align across lines. Skilled compositors worked to eliminate rivers; they were considered a mark of carelessness, a failure to serve the reader's eye.`

const COL2_TEXT = `Every typeface carries within it the ghost of the hand that first drew it. Garamond is inseparable from sixteenth-century Paris, from the smell of oak-gall ink and the weight of a cold composing stick. Caslon belongs to a colonial printing office, oil-lamp lit, the click of type on a composing frame. Even our digital faces — designed on screens, hinted for pixels — carry this historical weight. The designer who chooses a typeface is not merely picking a style; they are invoking a lineage, borrowing authority from centuries of readers who have encountered those particular curves and accepted them as trustworthy. This is why font pairing matters so deeply: a clash of typefaces is a clash of eras, a collision of incompatible credibilities. Ink and paper have given way to phosphor and pixel, yet the fundamental challenge remains unchanged: how do you move a mind from one sentence to the next without losing it? Attention is fragile. The eye needs a path. Hierarchy — the system of sizes and weights that tells the reader which words matter most — is the designer's primary tool for managing this journey through a page.`

// ── Geometry types ────────────────────────────────────────────────────────────

type Point = { x: number; y: number }
type Interval = { left: number; right: number }
type LineData = { text: string; x: number; y: number }

// ── Hull building (ported from pretext/pages/demos/wrap-geometry.ts) ──────────

type HullData = { points: Point[]; naturalWidth: number; naturalHeight: number }
// Version tag — increment when hull-building logic changes to bust stale cache
const HULL_V = "v3"
const hullCache = new Map<string, HullData>()

async function buildWrapHull(src: string): Promise<HullData> {
  const response = await fetch(src)
  const blob = await response.blob()
  const bitmap = await createImageBitmap(blob)

  const maxDim = 320
  const aspect = bitmap.width / bitmap.height
  const w = aspect >= 1 ? maxDim : Math.max(64, Math.round(maxDim * aspect))
  const h = aspect >= 1 ? Math.max(64, Math.round(maxDim / aspect)) : maxDim

  // Save natural dimensions before close() zeroes them out
  const naturalWidth = bitmap.width
  const naturalHeight = bitmap.height

  const canvas = new OffscreenCanvas(w, h)
  const ctx = canvas.getContext("2d")
  if (!ctx) throw new Error("2d context unavailable")
  ctx.clearRect(0, 0, w, h)
  ctx.drawImage(bitmap, 0, 0, w, h)
  bitmap.close()

  const { data } = ctx.getImageData(0, 0, w, h)
  const lefts: Array<number | null> = new Array(h).fill(null)
  const rights: Array<number | null> = new Array(h).fill(null)

  for (let y = 0; y < h; y++) {
    let l = -1,
      r = -1
    for (let x = 0; x < w; x++) {
      if (data[(y * w + x) * 4 + 3]! < 12) continue
      if (l === -1) l = x
      r = x
    }
    if (l !== -1) {
      lefts[y] = l
      rights[y] = r + 1
    }
  }

  const rows: number[] = []
  for (let y = 0; y < h; y++) if (lefts[y] !== null) rows.push(y)
  if (rows.length === 0) return { points: [], naturalWidth, naturalHeight }

  const bTop = rows[0]!
  const bBot = rows[rows.length - 1]!
  let bL = Infinity,
    bR = -Infinity
  for (let i = 0; i < rows.length; i++) {
    const y = rows[i]!
    if (lefts[y]! < bL) bL = lefts[y]!
    if (rights[y]! > bR) bR = rights[y]!
  }
  const bW = Math.max(1, bR - bL)
  const bH = Math.max(1, bBot - bTop)

  const R = 6
  const sL: number[] = new Array(h).fill(0)
  const sR: number[] = new Array(h).fill(0)
  for (let i = 0; i < rows.length; i++) {
    const y = rows[i]!
    let ls = 0,
      rs = 0,
      n = 0
    for (let o = -R; o <= R; o++) {
      const sy = y + o
      if (sy < 0 || sy >= h || lefts[sy] == null) continue
      ls += lefts[sy]!
      rs += rights[sy]!
      n++
    }
    sL[y] = n ? ls / n : 0
    sR[y] = n ? rs / n : w
  }

  const step = Math.max(1, Math.floor(rows.length / 52))
  const sampled: number[] = []
  for (let i = 0; i < rows.length; i += step) sampled.push(rows[i]!)
  const lastRow = rows[rows.length - 1]!
  if (sampled[sampled.length - 1] !== lastRow) sampled.push(lastRow)

  // Normalize to full image dimensions so the hull maps 1-to-1 with the
  // rendered image rectangle — avoids stretching when the subject doesn't
  // fill the entire PNG frame (transparent padding above/below/sides).
  const pts: Point[] = []
  for (let i = 0; i < sampled.length; i++) {
    const y = sampled[i]!
    pts.push({ x: sL[y]! / w, y: (y + 0.5) / h })
  }
  for (let i = sampled.length - 1; i >= 0; i--) {
    const y = sampled[i]!
    pts.push({ x: sR[y]! / w, y: (y + 0.5) / h })
  }
  return { points: pts, naturalWidth, naturalHeight }
}

function transformHull(
  pts: Point[],
  x: number,
  y: number,
  width: number,
  height: number
): Point[] {
  return pts.map((p) => ({ x: x + p.x * width, y: y + p.y * height }))
}

function polyXsAtY(pts: Point[], y: number): number[] {
  const xs: number[] = []
  let a = pts[pts.length - 1]!
  for (let i = 0; i < pts.length; i++) {
    const b = pts[i]!
    if ((a.y <= y && y < b.y) || (b.y <= y && y < a.y))
      xs.push(a.x + ((y - a.y) * (b.x - a.x)) / (b.y - a.y))
    a = b
  }
  return xs.sort((a, b) => a - b)
}

function getBlockedInterval(
  pts: Point[],
  top: number,
  bottom: number,
  hPad: number,
  vPad: number
): Interval | null {
  let l = Infinity,
    r = -Infinity
  const startY = Math.floor(top - vPad)
  const endY = Math.ceil(bottom + vPad)
  for (let y = startY; y <= endY; y++) {
    const xs = polyXsAtY(pts, y + 0.5)
    for (let i = 0; i + 1 < xs.length; i += 2) {
      if (xs[i]! < l) l = xs[i]!
      if (xs[i + 1]! > r) r = xs[i + 1]!
    }
  }
  return isFinite(l) ? { left: l - hPad, right: r + hPad } : null
}

function carveSlots(base: Interval, blocked: Interval[]): Interval[] {
  let slots: Interval[] = [base]
  for (let bi = 0; bi < blocked.length; bi++) {
    const iv = blocked[bi]!
    const next: Interval[] = []
    for (let si = 0; si < slots.length; si++) {
      const slot = slots[si]!
      if (iv.right <= slot.left || iv.left >= slot.right) {
        next.push(slot)
        continue
      }
      if (iv.left > slot.left) next.push({ left: slot.left, right: iv.left })
      if (iv.right < slot.right)
        next.push({ left: iv.right, right: slot.right })
    }
    slots = next
  }
  return slots.filter((s) => s.right - s.left >= 24)
}

// ── Column text flow ──────────────────────────────────────────────────────────

function flowColumn(
  text: string,
  colStart: number,
  colWidth: number,
  hullPts: Point[] | null
): { lines: LineData[]; totalHeight: number } {
  if (colWidth <= 0) return { lines: [], totalHeight: 0 }

  const prepared = prepareWithSegments(text, FONT)
  const result: LineData[] = []
  let cursor: LayoutCursor = { segmentIndex: 0, graphemeIndex: 0 }
  let y = 0
  const base: Interval = { left: colStart, right: colStart + colWidth }

  while (true) {
    let slot: Interval

    if (hullPts !== null) {
      // Image is on the left of col1 — text flows to the right of silhouette
      const iv = getBlockedInterval(hullPts, y, y + LINE_HEIGHT, H_PAD, V_PAD)
      const slots = carveSlots(base, iv ? [iv] : [])
      if (slots.length === 0) {
        y += LINE_HEIGHT
        continue
      }
      // Left obstacle → pick rightmost slot
      slot = slots[slots.length - 1]!
    } else {
      slot = base
    }

    const slotWidth = slot.right - slot.left
    if (slotWidth < 24) {
      y += LINE_HEIGHT
      continue
    }

    const line = layoutNextLine(prepared, cursor, slotWidth)
    if (line === null) break

    result.push({ text: line.text, x: Math.round(slot.left - colStart), y })
    cursor = line.end
    y += LINE_HEIGHT
  }

  return { lines: result, totalHeight: y }
}

// ── Hooks ─────────────────────────────────────────────────────────────────────

type Col1State = {
  lines: LineData[]
  totalHeight: number
  imgTop: number
  imgW: number
  imgH: number
}

// Single effect: loads hull + runs both passes so wrapping is ready on first
// render after containerWidth is set — no two-hook dependency gap.
function useCol1(text: string, colWidth: number): Col1State {
  const [state, setState] = useState<Col1State>({
    lines: [],
    totalHeight: 0,
    imgTop: 0,
    imgW: IMG_MAX_W,
    imgH: IMG_MAX_W,
  })

  useEffect(() => {
    if (colWidth <= 0) return
    let cancelled = false

    async function run() {
      // Pass 1 — full width, establishes natural column height
      const pass1 = flowColumn(text, 0, colWidth, null)

      // Get or build hull (includes natural image dimensions)
      const cacheKey = `${HULL_V}:${WOMAN_PNG}`
      let hullData = hullCache.get(cacheKey)
      if (!hullData) {
        try {
          hullData = await buildWrapHull(WOMAN_PNG)
          hullCache.set(cacheKey, hullData)
        } catch (e) {
          console.error(e)
          return
        }
      }
      if (cancelled) return

      // Derive display size from actual aspect ratio — no vertical stretching
      const imgW = IMG_MAX_W
      const imgH = Math.round(
        IMG_MAX_W * (hullData.naturalHeight / hullData.naturalWidth)
      )
      const imgTop = Math.max(0, pass1.totalHeight - imgH + IMG_LOWER)

      // Pass 2 — hull anchored at bottom-left (x=0, y=imgTop)
      const hullPts = transformHull(hullData.points, 0, imgTop, imgW, imgH)
      const pass2 = flowColumn(text, 0, colWidth, hullPts)

      if (!cancelled) setState({ ...pass2, imgTop, imgW, imgH })
    }

    run()
    return () => {
      cancelled = true
    }
  }, [text, colWidth])

  return state
}

function useCol2Flow(text: string, colStart: number, colWidth: number) {
  const [result, setResult] = useState({
    lines: [] as LineData[],
    totalHeight: 0,
  })
  useEffect(() => {
    if (colWidth <= 0) return
    setResult(flowColumn(text, colStart, colWidth, null))
  }, [text, colStart, colWidth])
  return result
}

// ── ColLines renderer ─────────────────────────────────────────────────────────

function ColLines({
  lines,
  totalHeight,
  colWidth,
}: {
  lines: LineData[]
  totalHeight: number
  colWidth: number
}) {
  return (
    <div
      className="relative"
      style={{
        width: colWidth,
        height: totalHeight > 0 ? totalHeight : undefined,
        minHeight: LINE_HEIGHT * 3,
      }}
    >
      {lines.map((line, i) => (
        <span
          key={i}
          className="absolute text-neutral-700 select-text"
          style={{
            left: line.x,
            top: line.y,
            font: FONT,
            lineHeight: `${LINE_HEIGHT}px`,
          }}
        >
          {line.text}
        </span>
      ))}
    </div>
  )
}

// ── Responsive breakpoint hook ────────────────────────────────────────────────

function useIsMd(): boolean {
  // Default true so SSR/first paint shows wide layout on desktop
  const [isMd, setIsMd] = useState(true)
  useEffect(() => {
    const check = () => setIsMd(window.innerWidth >= 768)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])
  return isMd
}

// ── Narrow-layout col1: hull-based wrapping for single-column mode ────────────
// Image sits top-right; text carves around the silhouette polygon line-by-line.

type NarrowCol1State = {
  lines: LineData[]
  totalHeight: number
  imgX: number
  imgY: number
  imgW: number
  imgH: number
}

function useNarrowCol1(text: string, colWidth: number): NarrowCol1State {
  const [state, setState] = useState<NarrowCol1State>({
    lines: [],
    totalHeight: 0,
    imgX: 0,
    imgY: 0,
    imgW: 0,
    imgH: 0,
  })

  useEffect(() => {
    if (colWidth <= 0) return
    let cancelled = false

    async function run() {
      const cacheKey = `${HULL_V}:${WOMAN_PNG}`
      let hullData = hullCache.get(cacheKey)
      if (!hullData) {
        try {
          hullData = await buildWrapHull(WOMAN_PNG)
          hullCache.set(cacheKey, hullData)
        } catch (e) {
          console.error(e)
          return
        }
      }
      if (cancelled) return

      // Image: 42% of column width, anchored top-right
      const imgW = Math.min(IMG_MAX_W, Math.round(colWidth * 0.42))
      const imgH = Math.round(
        imgW * (hullData.naturalHeight / hullData.naturalWidth)
      )
      const imgX = colWidth - imgW
      const imgY = 0

      const hullPts = transformHull(hullData.points, imgX, imgY, imgW, imgH)

      const prepared = prepareWithSegments(text, FONT)
      const result: LineData[] = []
      let cursor: LayoutCursor = { segmentIndex: 0, graphemeIndex: 0 }
      let y = 0
      const base: Interval = { left: 0, right: colWidth }

      while (true) {
        const iv = getBlockedInterval(hullPts, y, y + LINE_HEIGHT, H_PAD, V_PAD)
        const slots = carveSlots(base, iv ? [iv] : [])

        if (slots.length === 0) {
          y += LINE_HEIGHT
          continue
        }

        // Image is on the right → leftmost slot is text area to the left of image
        const slot = slots[0]!
        const slotWidth = slot.right - slot.left
        if (slotWidth < 24) {
          y += LINE_HEIGHT
          continue
        }

        const line = layoutNextLine(prepared, cursor, slotWidth)
        if (line === null) break

        result.push({ text: line.text, x: Math.round(slot.left), y })
        cursor = line.end
        y += LINE_HEIGHT
      }

      if (!cancelled)
        setState({ lines: result, totalHeight: y, imgX, imgY, imgW, imgH })
    }

    run()
    return () => {
      cancelled = true
    }
  }, [text, colWidth])

  return state
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function MagazineEditorialColumns() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = useState(0)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const ro = new ResizeObserver(([entry]) =>
      setContainerWidth(entry.contentRect.width)
    )
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const isMd = useIsMd()

  // Wide layout (>= md): two columns with silhouette wrapping
  const colWidth =
    isMd && containerWidth > 0 ? Math.floor((containerWidth - COL_GAP) / 2) : 0
  const col2Start = colWidth + COL_GAP
  const sep = colWidth > 0 ? colWidth + Math.floor(COL_GAP / 2) : 0

  const col1 = useCol1(COL1_TEXT, colWidth)
  const col2 = useCol2Flow(COL2_TEXT, col2Start, colWidth)
  const totalHeight = Math.max(col1.totalHeight, col2.totalHeight)

  // Narrow layout (< md): single column, hull-based wrapping for col1
  const narrowWidth = !isMd && containerWidth > 0 ? containerWidth : 0
  const narrowCol1 = useNarrowCol1(COL1_TEXT, narrowWidth)
  const narrowCol2 = useCol2Flow(COL2_TEXT, 0, narrowWidth)

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-5xl px-6">
        {/* Masthead */}
        <div className="mb-8 flex items-center justify-between border-y-2 border-black py-2">
          <span className="font-sans text-xs font-bold tracking-[0.25em] uppercase">
            The Editorial Review
          </span>
          <span className="font-sans text-xs tracking-widest text-neutral-500 uppercase">
            Spring 2026
          </span>
        </div>

        {/* Title */}
        <div className="relative mb-8 overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0 flex items-end select-none"
            aria-hidden
          >
            <span className="block font-sans text-[clamp(4rem,15vw,10rem)] leading-none font-black tracking-tighter text-black/[0.05]">
              FORM
            </span>
          </div>
          <div className="relative">
            <h2 className="mb-2 font-sans text-[11px] font-bold tracking-[0.3em] text-neutral-500 uppercase">
              Essay
            </h2>
            <h1 className="font-serif text-[clamp(1.8rem,4.5vw,3rem)] leading-[1.1] font-bold text-black">
              On Proportion, Rhythm,
              <br />
              and the Weight of Type
            </h1>
            <p className="mt-3 font-sans text-sm text-neutral-500">
              By Marcus Veldtman &nbsp;·&nbsp; Photography: Arno Brisse
            </p>
          </div>
        </div>

        {/* Pull quote */}
        <div className="mb-8 border-t-4 border-black" />

        {/* Drop cap intro */}
        <div className="mb-8 font-serif text-lg leading-relaxed text-neutral-800">
          <span className="float-left mt-1 mr-2 font-serif text-[4.5rem] leading-[0.75] font-black text-black">
            T
          </span>
          he golden ratio appears throughout nature — and throughout the history
          of typographic design, designers have borrowed this ancient proportion
          as a guide for composing pages that feel effortlessly balanced,
          drawing the eye along invisible currents of white space.
        </div>

        {/* Measurement wrapper — containerRef always present regardless of layout mode */}
        <div ref={containerRef}>
          {/* ── Narrow layout (< md): single column, hull wrapping ───────────── */}
          {!isMd && containerWidth > 0 && (
            <>
              {/* Hull-based wrapping: image absolutely positioned top-right,
                  text lines carve around the silhouette polygon */}
              <div
                className="relative"
                style={{
                  height:
                    narrowCol1.totalHeight > 0
                      ? narrowCol1.totalHeight
                      : undefined,
                  minHeight: LINE_HEIGHT * 3,
                }}
              >
                <img
                  src={WOMAN_PNG}
                  alt="Portrait"
                  className="pointer-events-none absolute z-10"
                  style={{
                    top: narrowCol1.imgY,
                    left: narrowCol1.imgX,
                    width: narrowCol1.imgW,
                    height: narrowCol1.imgH,
                  }}
                />
                {narrowCol1.lines.map((line, i) => (
                  <span
                    key={i}
                    className="absolute text-neutral-700 select-text"
                    style={{
                      left: line.x,
                      top: line.y,
                      font: FONT,
                      lineHeight: `${LINE_HEIGHT}px`,
                    }}
                  >
                    {line.text}
                  </span>
                ))}
              </div>
              <div className="mt-8">
                <ColLines
                  lines={narrowCol2.lines}
                  totalHeight={narrowCol2.totalHeight}
                  colWidth={narrowWidth}
                />
              </div>
            </>
          )}

          {/* ── Wide layout (>= lg): two columns with silhouette wrapping ──────
              Col 1: text wraps around PNG silhouette anchored bottom-left.
              Col 2: full-width text, no obstacle.
          ────────────────────────────────────────────────────────────────── */}
          {isMd && containerWidth > 0 && (
            <>
              <div
                className="relative flex gap-8"
                style={{ minHeight: totalHeight || undefined }}
              >
                {/* Decorative separator */}
                <div
                  className="absolute top-0 bottom-0 w-px bg-neutral-200"
                  style={{ left: sep }}
                />

                {/* Silhouette image — bottom-left of col1 */}
                <img
                  src={WOMAN_PNG}
                  alt="Portrait"
                  className="pointer-events-none absolute z-10"
                  style={{
                    top: col1.imgTop,
                    left: -20,
                    width: col1.imgW,
                    height: col1.imgH,
                  }}
                />

                {/* Column I */}
                <div className="flex-1" style={{ minWidth: 0 }}>
                  <ColLines
                    lines={col1.lines}
                    totalHeight={col1.totalHeight}
                    colWidth={colWidth}
                  />
                </div>

                {/* Column II */}
                <div className="flex-1" style={{ minWidth: 0 }}>
                  <ColLines
                    lines={col2.lines}
                    totalHeight={col2.totalHeight}
                    colWidth={colWidth}
                  />
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="mt-10 border-t border-neutral-200 pt-4 font-sans">
          <div className="flex items-center justify-between text-[11px] text-neutral-400">
            <span className="tracking-widest uppercase">Arts & Letters</span>
            <span>Page 14 of 48</span>
            <span className="tracking-widest uppercase">
              The Editorial Review
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
