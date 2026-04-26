"use client"

import { useEffect, useRef, useState } from "react"
import {
  layoutNextLine,
  prepareWithSegments,
  type LayoutCursor,
} from "@chenglou/pretext"

// ── Constants ─────────────────────────────────────────────────────────────────

const FONT_SIZE = 15
const LINE_HEIGHT = 26
const FONT = `${FONT_SIZE}px Georgia, serif`
const H_PAD = 8
const V_PAD = 3
const COL_PAD = 12

const CASTLE_SRC = "/ui/nico-benedickt-castle-unsplash.png"

const BODY_TEXT = `Stone endures where nearly everything else decays. Long after the commanders who ordered their construction have been forgotten, long after the armies that once scaled their walls have returned to the earth, the great fortifications of medieval Europe continue to impose their presence on the landscapes they were built to dominate. A castle is not merely a ruin. It is a demonstration that what is built with sufficient intention outlasts the intentions of its builders entirely. The stone remembers even when the stone-cutter does not.

The history of European fortification is a history of problem and response. Every advance in siege technology demanded a corresponding advance in defensive architecture. When the trebuchet appeared in twelfth-century arsenals, military engineers responded by thickening walls and constructing towers of extraordinary mass. When gunpowder artillery rendered those same walls vulnerable to a new kind of force, the response was equally radical: structures were lowered, widened, and buried behind earthen ramparts capable of absorbing rather than resisting cannon shot. The walls that had dominated the skyline for centuries were driven underground.

What the builders of the medieval period understood above all was the relationship between landscape and defence. The most formidable fortifications were never merely strong in themselves. They were positioned to exploit the natural geography of their sites with a precision that modern engineers continue to study. A promontory above a river bend offered commanding fields of fire in three directions while reducing the perimeter requiring defence. A narrow ridge forced attackers into a confined approach where numerical advantage was neutralized entirely by the terrain.

This intelligence was not the product of formal training in any modern sense. The great military architects of the medieval period learned by observation and by failure. They studied the sieges that had succeeded, analyzed the walls that had been breached, and incorporated those lessons into structures designed for the following generation. It was institutional knowledge accumulated over centuries, refined by each new conflict, and passed down through guilds and courts who understood that security was the precondition for everything else civilization required.

The castle at its most developed was not a single building but a system: a layered series of defensive zones each designed to slow, channel, and ultimately defeat an attacker while conserving the defenders inside. The outer ward absorbed the initial assault. The inner ward provided a fallback position. The keep, the final refuge, was built to withstand indefinitely.`

// ── Geometry ──────────────────────────────────────────────────────────────────

type Point = { x: number; y: number }
type Interval = { left: number; right: number }
type LineData = { text: string; x: number; y: number }

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
  for (const iv of blocked) {
    const next: Interval[] = []
    for (const slot of slots) {
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

// ── Hull extraction — one hull per column band ────────────────────────────────
// Same technique as magazine-editorial-columns: alpha-based transparency detection.
// Castle PNG is RGBA with transparent sky (alpha=0), so we skip pixels with alpha < 12.

type ColumnHullData = {
  hulls: [Point[], Point[], Point[]]
  aspectRatio: number
}

let columnHullPromise: Promise<ColumnHullData> | null = null

async function buildColumnHulls(): Promise<ColumnHullData> {
  const res = await fetch(CASTLE_SRC)
  const blob = await res.blob()
  const bitmap = await createImageBitmap(blob)
  const iw = bitmap.width
  const ih = bitmap.height
  const aspectRatio = iw / ih

  // Downsample for performance (same cap as magazine-editorial-columns)
  const maxDim = 320
  const scale = Math.min(1, maxDim / Math.max(iw, ih))
  const sw = Math.max(1, Math.round(iw * scale))
  const sh = Math.max(1, Math.round(ih * scale))

  const canvas = new OffscreenCanvas(sw, sh)
  const ctx = canvas.getContext("2d")
  if (!ctx) {
    bitmap.close()
    return { hulls: [[], [], []], aspectRatio }
  }
  ctx.drawImage(bitmap, 0, 0, sw, sh)
  bitmap.close()

  const { data } = ctx.getImageData(0, 0, sw, sh)
  const hulls: [Point[], Point[], Point[]] = [[], [], []]

  for (let col = 0; col < 3; col++) {
    const xStart = Math.floor((col * sw) / 3)
    const xEnd = Math.floor(((col + 1) * sw) / 3)

    const lefts: Array<number | null> = new Array(sh).fill(null)
    const rights: Array<number | null> = new Array(sh).fill(null)

    for (let y = 0; y < sh; y++) {
      let l = -1,
        r = -1
      for (let x = xStart; x < xEnd; x++) {
        const idx = (y * sw + x) * 4
        if (data[idx + 3]! < 12) continue // transparent sky — skip
        if (l === -1) l = x
        r = x
      }
      if (l !== -1) {
        lefts[y] = l
        rights[y] = r + 1
      }
    }

    const rows: number[] = []
    for (let y = 0; y < sh; y++) if (lefts[y] !== null) rows.push(y)
    if (rows.length === 0) continue

    // Smooth edges (rolling window R=6, same as editorial-columns)
    const R = 6
    const sL: number[] = new Array(sh).fill(0)
    const sR: number[] = new Array(sh).fill(0)
    for (let i = 0; i < rows.length; i++) {
      const y = rows[i]!
      let ls = 0,
        rs = 0,
        n = 0
      for (let o = -R; o <= R; o++) {
        const sy = y + o
        if (sy < 0 || sy >= sh || lefts[sy] == null) continue
        ls += lefts[sy]!
        rs += rights[sy]!
        n++
      }
      sL[y] = n ? ls / n : 0
      sR[y] = n ? rs / n : sw
    }

    const step = Math.max(1, Math.floor(rows.length / 52))
    const sampled: number[] = []
    for (let i = 0; i < rows.length; i += step) sampled.push(rows[i]!)
    const last = rows[rows.length - 1]!
    if (sampled[sampled.length - 1] !== last) sampled.push(last)

    // Normalize to FULL sample width (not column width) so hull coords map
    // correctly to the full display container when scaled up
    const pts: Point[] = []
    for (const y of sampled) pts.push({ x: sL[y]! / sw, y: (y + 0.5) / sh })
    for (let i = sampled.length - 1; i >= 0; i--)
      pts.push({ x: sR[sampled[i]!]! / sw, y: (sampled[i]! + 0.5) / sh })

    hulls[col] = pts
  }

  return { hulls, aspectRatio }
}

// ── Layout hook ───────────────────────────────────────────────────────────────

type LayoutState = {
  cols: [LineData[], LineData[], LineData[]]
  colTextH: [number, number, number] // y reached by last line per column
  castleH: number
  colW: number
}

function useColumnLayout(text: string, containerWidth: number): LayoutState {
  const [layout, setLayout] = useState<LayoutState>({
    cols: [[], [], []],
    colTextH: [0, 0, 0],
    castleH: 0,
    colW: 0,
  })

  useEffect(() => {
    if (containerWidth <= 0) return
    let cancelled = false

    async function run() {
      if (!columnHullPromise) columnHullPromise = buildColumnHulls()
      let meta: ColumnHullData
      try {
        meta = await columnHullPromise
      } catch {
        meta = { hulls: [[], [], []], aspectRatio: 1.5 }
      }
      if (cancelled) return

      const { hulls, aspectRatio } = meta
      const castleH = Math.round(containerWidth / aspectRatio)
      const colW = Math.floor(containerWidth / 3)

      // Scale each column's hull to display coordinates
      const displayHulls = hulls.map((pts) =>
        pts.map((p) => ({
          x: p.x * containerWidth, // normalized to full width
          y: p.y * castleH,
        }))
      ) as [Point[], Point[], Point[]]

      const prepared = prepareWithSegments(text, FONT)
      let cursor: LayoutCursor = { segmentIndex: 0, graphemeIndex: 0 }
      const cols: [LineData[], LineData[], LineData[]] = [[], [], []]
      const colTextH: [number, number, number] = [0, 0, 0]

      for (let ci = 0; ci < 3; ci++) {
        const colStart = ci * colW + COL_PAD
        const colEnd = (ci === 2 ? containerWidth : (ci + 1) * colW) - COL_PAD
        const base: Interval = { left: colStart, right: colEnd }
        const hull = displayHulls[ci]!
        let y = 0

        while (true) {
          const bCastle =
            hull.length > 0
              ? getBlockedInterval(hull, y, y + LINE_HEIGHT, H_PAD, V_PAD)
              : null

          const slots = carveSlots(base, bCastle ? [bCastle] : [])

          // Castle fully covers this column at this y — text stops here
          if (slots.length === 0) break

          // Use rightmost available slot (space to the right of the castle feature
          // within this column — works for left-anchored castle in all three bands)
          const slot = slots[slots.length - 1]!
          const slotWidth = slot.right - slot.left
          if (slotWidth < 24) break

          const line = layoutNextLine(prepared, cursor, slotWidth)
          if (line === null) break

          cols[ci]!.push({ text: line.text, x: slot.left, y })
          cursor = line.end
          y += LINE_HEIGHT
        }

        colTextH[ci] = y
      }

      if (!cancelled) setLayout({ cols, colTextH, castleH, colW })
    }

    run()
    return () => {
      cancelled = true
    }
  }, [text, containerWidth])

  return layout
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function MagazineImageColumns() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = useState(0)

  useEffect(() => {
    if (!containerRef.current) return
    const ro = new ResizeObserver(([e]) =>
      setContainerWidth(e.contentRect.width)
    )
    ro.observe(containerRef.current)
    return () => ro.disconnect()
  }, [])

  const { cols, colTextH, castleH, colW } = useColumnLayout(
    BODY_TEXT,
    containerWidth
  )
  const maxColH = Math.max(...colTextH)

  return (
    <section className="overflow-hidden bg-white font-serif">
      {/* ── Header ── */}
      <div className="mx-auto max-w-5xl px-8 pt-12 pb-8">
        <div className="mb-8 flex items-center justify-between border-b border-neutral-200 pb-3">
          <span className="font-sans text-xs font-bold tracking-[0.3em] text-black uppercase">
            Architecture Today
          </span>
          <div className="flex items-center gap-3 font-sans text-[11px] text-neutral-400">
            <span className="tracking-widest uppercase">Vol. IV</span>
            <span>·</span>
            <span>Summer 2026</span>
          </div>
        </div>

        <div className="border-b border-neutral-200 pb-8">
          <p className="mb-2 font-sans text-[10px] font-bold tracking-[0.3em] text-neutral-400 uppercase">
            Essay · Heritage
          </p>
          <h1
            className="font-serif leading-[0.92] font-bold text-black"
            style={{ fontSize: "clamp(2.2rem, 5.5vw, 4rem)" }}
          >
            Stone &amp; Strategy
          </h1>
          <p className="mt-4 font-serif text-base leading-snug text-neutral-500 italic">
            How the great fortifications of medieval Europe shaped a continent,
            and why their lessons endure into the present age
          </p>
          <div className="mt-3 font-sans text-sm text-neutral-500">
            By Dr. Helena Müller &nbsp;·&nbsp; June 2026 &nbsp;·&nbsp; 11 min
            read
          </div>
        </div>
      </div>

      {/* ── Castle + hull-wrapped columns ── */}
      <div className="mx-auto max-w-5xl px-8 pt-5">
        <div
          ref={containerRef}
          className="relative"
          style={{ height: castleH > 0 ? castleH : undefined, minHeight: 300 }}
        >
          {/* Full-width castle image — fills the entire zone */}
          {castleH > 0 && (
            <img
              src={CASTLE_SRC}
              alt="Medieval castle"
              className="pointer-events-none absolute inset-x-0 bottom-0 w-full select-none"
              style={{ objectFit: "fill", top: 50 }}
            />
          )}

          {/* Pretext text lines — organic wrapping around castle silhouette */}
          {cols.map((colLines, ci) =>
            colLines.map((line, li) => (
              <span
                key={`${ci}-${li}`}
                className="absolute text-neutral-800 select-text"
                style={{
                  left: line.x,
                  top: line.y,
                  font: FONT,
                  lineHeight: `${LINE_HEIGHT}px`,
                  whiteSpace: "nowrap",
                }}
              >
                {line.text}
              </span>
            ))
          )}

          {/* Vertical separator lines between columns */}
          {colW > 0 &&
            [colW, colW * 2].map((x, i) => (
              <div
                key={i}
                className="absolute top-0 w-px bg-neutral-300"
                style={{ left: x, height: maxColH }}
              />
            ))}
        </div>
      </div>
    </section>
  )
}
