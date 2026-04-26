"use client"

import { useEffect, useRef, useState } from "react"
import {
  layoutNextLine,
  prepareWithSegments,
  type LayoutCursor,
} from "@chenglou/pretext"

const ARTICLE_BODY = `Typography in editorial design is not merely the arrangement of letters — it is the architecture of thought itself. The way words breathe on a page, how they cluster into paragraphs and scatter into headlines, how the white space between lines gives rhythm to reading: these are decisions that shape how ideas are received in the minds of readers. Long before the printing press made books accessible to the masses, scribes understood that the visual presentation of language was inseparable from its meaning. A cramped and hurried hand communicated urgency or carelessness; a measured, spacious manuscript conveyed gravity and permanence. Modern designers inherit this tradition and must reckon with its full weight. The column grid, that invisible backbone of every magazine and newspaper, was invented not as a constraint but as a liberation — a structure that paradoxically frees the designer to arrange content with confidence, knowing that proportion and alignment will carry the eye naturally from one element to the next. When text wraps around an image, something magical occurs: the static rectangle of a figure becomes part of the flow of language, an island that the current of words navigates around with the same grace as a river bending past a boulder. This is what Pretext enables — not the crude box-model approximation of CSS float, but a line-by-line precision that knows exactly how many characters fit, accounting for kerning, ligatures, and the subtle irregularities of proportional typefaces. Every line is measured. Every break is deliberate. The discipline of typography is ultimately a discipline of attention — the art of making the reader's eye move where you want it to go, at the pace you intend.`

const FONT_SIZE = 17
const LINE_HEIGHT = 28
const FONT = `${FONT_SIZE}px Georgia, serif`
const H_PAD = 10
const V_PAD = 3

// Static SVG markup for rasterization — transform moved to <g> so it is
// applied as a proper SVG attribute rather than a CSS property on the root.
// matrix(-1,0,0,1,48,0) mirrors the shape around SVG x=24 (viewBox center),
// reproducing the CSS matrix(-1,0,0,1,0,0) that the rendered component uses.
const VIRGO_SVG_STRING = `<svg width="320" height="320" viewBox="-4.8 -4.8 57.60 57.60" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(-1,0,0,1,48,0)" fill="#1a1a1a" opacity="0.82"><path d="M17 46a14.211 14.211 0 0 1-1.952-7.453H20.6a3.086 3.086 0 0 0 3.055-2.65l.65-4.552 4.108-1.645a1.028 1.028 0 0 0 .538-1.415l-3.615-7.23c0-6.454-1.077-10.884-4.506-13.289 0 0-.638 5.058-6.811 9.173A13.292 13.292 0 0 0 7.846 27.23C.387 21.057-.385 12.826 2.7 7.682S11.19.823 17.106 1.337c7.559.658 12.419 8 13.632 18.005C33 38 45 34 45 34s-2 16-28 12z" opacity="0.18"/><path d="M18.681 19.924l3.848 1.924a4.165 4.165 0 0 0 0-3.848z"/><path d="M17 46a14.211 14.211 0 0 1-1.952-7.453H20.6a3.086 3.086 0 0 0 3.055-2.65l.65-4.552 4.108-1.645a1.028 1.028 0 0 0 .538-1.415l-3.615-7.23c0-6.454-1.077-10.884-4.506-13.289 0 0-.638 5.058-6.811 9.173A13.292 13.292 0 0 0 7.846 27.23C.387 21.057-.385 12.826 2.7 7.682S11.19.823 17.106 1.337c7.559.658 12.419 8 13.632 18.005C33 38 45 34 45 34s-2 16-28 12z" fill="none" stroke="#1a1a1a" stroke-linecap="square" stroke-miterlimit="10" stroke-width="0.72"/><circle cx="41" cy="17" r="1"/><path d="M38.719 8.328A9.51 9.51 0 0 1 37 6a9.5 9.5 0 0 1-4 4 9.5 9.5 0 0 1 4 4 9.5 9.5 0 0 1 4-4 9.509 9.509 0 0 1-2.281-1.672z"/><path d="M32.485 26.672c3 2 6.1 1.828 10.1-.172a6.213 6.213 0 0 1-2.166 5.208" fill="none" stroke="#1a1a1a" stroke-miterlimit="10" stroke-width="0.72"/></g></svg>`

// ── Geometry helpers ──────────────────────────────────────────────────────────

type Point = { x: number; y: number }
type Interval = { left: number; right: number }
type LineData = { text: string; x: number; y: number }

let virgoHullPromise: Promise<Point[]> | null = null

async function buildVirgoHull(): Promise<Point[]> {
  const blob = new Blob([VIRGO_SVG_STRING], { type: "image/svg+xml" })
  const bitmap = await createImageBitmap(blob)
  const w = bitmap.width || 320
  const h = bitmap.height || 320

  const canvas = new OffscreenCanvas(w, h)
  const ctx = canvas.getContext("2d")
  if (!ctx) {
    bitmap.close()
    return []
  }
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
  if (rows.length === 0) return []

  const R = 4
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

  // Normalize to full raster dimensions (0–1)
  const pts: Point[] = []
  for (let i = 0; i < sampled.length; i++) {
    const y = sampled[i]!
    pts.push({ x: sL[y]! / w, y: (y + 0.5) / h })
  }
  for (let i = sampled.length - 1; i >= 0; i--) {
    const y = sampled[i]!
    pts.push({ x: sR[y]! / w, y: (y + 0.5) / h })
  }
  return pts
}

function transformHull(
  pts: Point[],
  x: number,
  y: number,
  w: number,
  h: number
): Point[] {
  return pts.map((p) => ({ x: x + p.x * w, y: y + p.y * h }))
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
  for (let y = Math.floor(top - vPad); y <= Math.ceil(bottom + vPad); y++) {
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

// ── Text flow ─────────────────────────────────────────────────────────────────

function useTextFlow(text: string, containerWidth: number, svgSize: number) {
  const [lines, setLines] = useState<LineData[]>([])
  const [totalHeight, setTotalHeight] = useState(0)

  useEffect(() => {
    if (containerWidth <= 0) return
    let cancelled = false

    async function run() {
      // Ensure hull is loaded (singleton promise)
      if (!virgoHullPromise) virgoHullPromise = buildVirgoHull()

      let normalizedHull: Point[]
      try {
        normalizedHull = await virgoHullPromise
      } catch {
        normalizedHull = []
      }
      if (cancelled) return

      // SVG is absolutely positioned top-right — transform hull to those coords
      const hullPts =
        normalizedHull.length > 0
          ? transformHull(
              normalizedHull,
              containerWidth - svgSize,
              0,
              svgSize,
              svgSize
            )
          : null

      const prepared = prepareWithSegments(text, FONT)
      const result: LineData[] = []
      let cursor: LayoutCursor = { segmentIndex: 0, graphemeIndex: 0 }
      let y = 0
      const base: Interval = { left: 0, right: containerWidth }

      while (true) {
        let slot: Interval

        if (hullPts !== null) {
          // Per-line silhouette carving — SVG is on the right, text flows left
          const iv = getBlockedInterval(
            hullPts,
            y,
            y + LINE_HEIGHT,
            H_PAD,
            V_PAD
          )
          const slots = carveSlots(base, iv ? [iv] : [])
          if (slots.length === 0) {
            y += LINE_HEIGHT
            continue
          }
          slot = slots[0]! // leftmost slot (text to the left of SVG)
        } else {
          // Rectangular fallback while hull loads
          const inZone = y < svgSize
          slot = inZone
            ? { left: 0, right: containerWidth - svgSize - H_PAD }
            : base
        }

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

      if (!cancelled) {
        setLines(result)
        setTotalHeight(y)
      }
    }

    run()
    return () => {
      cancelled = true
    }
  }, [text, containerWidth, svgSize])

  return { lines, totalHeight }
}

// ── Virgo SVG component ───────────────────────────────────────────────────────

function VirgoSvg({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-4.8 -4.8 57.60 57.60"
      xmlns="http://www.w3.org/2000/svg"
      transform="matrix(-1, 0, 0, 1, 0, 0)"
      aria-hidden
    >
      <g fill="#1a1a1a" opacity="0.82">
        <path
          d="M17 46a14.211 14.211 0 0 1-1.952-7.453H20.6a3.086 3.086 0 0 0 3.055-2.65l.65-4.552 4.108-1.645a1.028 1.028 0 0 0 .538-1.415l-3.615-7.23c0-6.454-1.077-10.884-4.506-13.289 0 0-.638 5.058-6.811 9.173A13.292 13.292 0 0 0 7.846 27.23C.387 21.057-.385 12.826 2.7 7.682S11.19.823 17.106 1.337c7.559.658 12.419 8 13.632 18.005C33 38 45 34 45 34s-2 16-28 12z"
          opacity="0.18"
        />
        <path d="M18.681 19.924l3.848 1.924a4.165 4.165 0 0 0 0-3.848z" />
        <path
          d="M17 46a14.211 14.211 0 0 1-1.952-7.453H20.6a3.086 3.086 0 0 0 3.055-2.65l.65-4.552 4.108-1.645a1.028 1.028 0 0 0 .538-1.415l-3.615-7.23c0-6.454-1.077-10.884-4.506-13.289 0 0-.638 5.058-6.811 9.173A13.292 13.292 0 0 0 7.846 27.23C.387 21.057-.385 12.826 2.7 7.682S11.19.823 17.106 1.337c7.559.658 12.419 8 13.632 18.005C33 38 45 34 45 34s-2 16-28 12z"
          fill="none"
          stroke="#1a1a1a"
          strokeLinecap="square"
          strokeMiterlimit="10"
          strokeWidth="0.72"
        />
        <circle cx="41" cy="17" r="1" />
        <path d="M38.719 8.328A9.51 9.51 0 0 1 37 6a9.5 9.5 0 0 1-4 4 9.5 9.5 0 0 1 4 4 9.5 9.5 0 0 1 4-4 9.509 9.509 0 0 1-2.281-1.672z" />
        <path
          d="M32.485 26.672c3 2 6.1 1.828 10.1-.172a6.213 6.213 0 0 1-2.166 5.208"
          fill="none"
          stroke="#1a1a1a"
          strokeMiterlimit="10"
          strokeWidth="0.72"
        />
      </g>
    </svg>
  )
}

// ── Main component ────────────────────────────────────────────────────────────

export default function MagazineTextWrap() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = useState(0)

  useEffect(() => {
    if (!containerRef.current) return
    const observer = new ResizeObserver(([entry]) => {
      setContainerWidth(entry.contentRect.width)
    })
    observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  // SVG is square and 30% bigger than the original — keep proportional to column width
  const svgSize = Math.min(286, Math.floor(containerWidth * 0.44))

  const { lines, totalHeight } = useTextFlow(
    ARTICLE_BODY,
    containerWidth,
    svgSize
  )

  return (
    <section className="bg-[#faf8f4] py-16 font-serif">
      <div className="mx-auto max-w-4xl px-6">
        {/* Header */}
        <div className="mb-10 border-b-2 border-black pb-6">
          <div className="mb-3 flex items-center gap-3">
            <span className="bg-black px-2 py-0.5 font-sans text-[11px] font-bold tracking-[0.2em] text-white uppercase">
              Design
            </span>
            <span className="font-sans text-[11px] tracking-widest text-neutral-500 uppercase">
              Vol. XII — Issue 4
            </span>
          </div>
          <h1 className="text-[clamp(2.4rem,6vw,4rem)] leading-[1.05] font-bold tracking-tight text-black">
            The Architecture
            <br />
            <em className="font-normal">of the Printed Word</em>
          </h1>
          <div className="mt-4 flex items-center gap-4 font-sans">
            <span className="text-sm text-neutral-600">
              By Eleanor Hartmann
            </span>
            <span className="text-neutral-300">|</span>
            <span className="text-sm text-neutral-500">March 31, 2026</span>
            <span className="text-neutral-300">|</span>
            <span className="text-sm text-neutral-500">8 min read</span>
          </div>
        </div>

        {/* Ghost background word */}
        <div className="pointer-events-none relative mb-[-2.5rem] overflow-hidden select-none">
          <span
            className="block font-sans text-[clamp(4.25rem,15.3vw,9.35rem)] leading-none font-black tracking-tighter text-black/[0.04]"
            aria-hidden
          >
            TYPOGRAPHY
          </span>
        </div>

        {/* Text flow area */}
        <div className="relative" ref={containerRef}>
          {/* Right-side SVG obstacle */}
          {containerWidth > 0 && (
            <div className="absolute top-0 right-0" style={{ width: svgSize }}>
              <VirgoSvg size={svgSize} />
            </div>
          )}

          {/* Pretext-rendered lines flowing around the SVG silhouette */}
          <div
            className="relative"
            style={{ height: totalHeight || "auto", minHeight: 200 }}
          >
            {lines.map((line, i) => (
              <span
                key={i}
                className="absolute text-neutral-800 select-text"
                style={{
                  left: line.x,
                  top: line.y,
                  fontSize: FONT_SIZE,
                  fontFamily: "Georgia, serif",
                  lineHeight: `${LINE_HEIGHT}px`,
                }}
              >
                {line.text}
              </span>
            ))}
          </div>
        </div>

        {/* Footer rule */}
        <div className="mt-10 border-t border-neutral-300 pt-4 font-sans">
          <p className="text-[11px] tracking-widest text-neutral-400 uppercase">
            Continued on page 24 →
          </p>
        </div>
      </div>
    </section>
  )
}
