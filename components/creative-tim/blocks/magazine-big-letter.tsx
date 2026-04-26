"use client"

import { useEffect, useRef, useState } from "react"
import {
  layoutNextLine,
  prepareWithSegments,
  type LayoutCursor,
} from "@chenglou/pretext"

// ── Constants ─────────────────────────────────────────────────────────────────

const BODY_FONT_SIZE = 16
const LINE_HEIGHT = 27
const BODY_FONT = `${BODY_FONT_SIZE}px Georgia, serif`
const H_PAD = 22
const V_PAD = 4

// Canvas dimensions for letter hull rasterization
const CANVAS_W = 280
const CANVAS_H = 380
// Font size used inside the canvas — "B" in bold Georgia fits comfortably
const CANVAS_FONT_SIZE = 310
// Extra clearance kept below the B's bottom ink edge
const LETTER_BOTTOM_PAD = 25

const BODY_TEXT = `The letter as form. Before it was a sound, before it carried meaning, the letterform existed as pure geometry: the pressure of a reed against clay, the arc of a chisel into stone. Designers who understand this prehistory approach typography differently. They see not symbols but structures, not text but architecture. The Bauhaus masters of the nineteen-twenties were perhaps the first to make this understanding explicit. When Herbert Bayer reduced the alphabet to its geometric essentials, circles, squares, and lines, he was not simplifying language but clarifying it, stripping away centuries of ornament to reveal the structural logic that had always been there. The revival of these principles in contemporary editorial design is not nostalgia but necessity. In an age of information abundance, the letterform that communicates through its presence, its mass, its angle, its negative space, carries a signal that mere words cannot. Legibility is the beginning, not the end. The great typographers have always understood that a letter at sufficient scale ceases to be read and begins to be inhabited. It becomes architecture. It becomes a place the eye enters and explores before it extracts meaning. This is the paradox at the heart of display typography: the larger the letter grows, the less it says and the more it becomes.`

// ── Geometry types ────────────────────────────────────────────────────────────

type Point = { x: number; y: number }
type Interval = { left: number; right: number }
type LineData = { text: string; x: number; y: number }

// ── Letter hull — rasterize "B" on OffscreenCanvas and extract alpha hull ─────

let letterHullPromise: Promise<Point[]> | null = null

async function buildLetterHull(): Promise<Point[]> {
  const canvas = new OffscreenCanvas(CANVAS_W, CANVAS_H)
  const ctx = canvas.getContext("2d")
  if (!ctx) return []

  ctx.clearRect(0, 0, CANVAS_W, CANVAS_H)
  ctx.fillStyle = "#000"
  ctx.font = `bold ${CANVAS_FONT_SIZE}px Georgia, serif`
  ctx.textBaseline = "top"
  ctx.fillText("B", 0, 0)

  const { data } = ctx.getImageData(0, 0, CANVAS_W, CANVAS_H)
  const lefts: Array<number | null> = new Array(CANVAS_H).fill(null)
  const rights: Array<number | null> = new Array(CANVAS_H).fill(null)

  for (let y = 0; y < CANVAS_H; y++) {
    let l = -1,
      r = -1
    for (let x = 0; x < CANVAS_W; x++) {
      if (data[(y * CANVAS_W + x) * 4 + 3]! < 12) continue
      if (l === -1) l = x
      r = x
    }
    if (l !== -1) {
      lefts[y] = l
      rights[y] = r + 1
    }
  }

  const rows: number[] = []
  for (let y = 0; y < CANVAS_H; y++) if (lefts[y] !== null) rows.push(y)
  if (rows.length === 0) return []

  // Smooth edges with a small rolling window
  const R = 4
  const sL: number[] = new Array(CANVAS_H).fill(0)
  const sR: number[] = new Array(CANVAS_H).fill(0)
  for (let i = 0; i < rows.length; i++) {
    const y = rows[i]!
    let ls = 0,
      rs = 0,
      n = 0
    for (let o = -R; o <= R; o++) {
      const sy = y + o
      if (sy < 0 || sy >= CANVAS_H || lefts[sy] == null) continue
      ls += lefts[sy]!
      rs += rights[sy]!
      n++
    }
    sL[y] = n ? ls / n : 0
    sR[y] = n ? rs / n : CANVAS_W
  }

  const step = Math.max(1, Math.floor(rows.length / 52))
  const sampled: number[] = []
  for (let i = 0; i < rows.length; i += step) sampled.push(rows[i]!)
  const last = rows[rows.length - 1]!
  if (sampled[sampled.length - 1] !== last) sampled.push(last)

  // Normalize to full canvas dimensions — hull maps 1:1 with the display rect
  const pts: Point[] = []
  for (let i = 0; i < sampled.length; i++) {
    const y = sampled[i]!
    pts.push({ x: sL[y]! / CANVAS_W, y: (y + 0.5) / CANVAS_H })
  }
  for (let i = sampled.length - 1; i >= 0; i--) {
    const y = sampled[i]!
    pts.push({ x: sR[y]! / CANVAS_W, y: (y + 0.5) / CANVAS_H })
  }
  return pts
}

// ── Geometry helpers ──────────────────────────────────────────────────────────

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

// ── Text flow hook ────────────────────────────────────────────────────────────

// titleZone: vertical band at the top where static title HTML sits.
// Pretext skips this band (both letter and title block all slots),
// then flows body text to the right of the letter below the title.
function useLetterFlow(
  text: string,
  containerWidth: number,
  letterW: number,
  letterH: number,
  titleZone: number
) {
  const [lines, setLines] = useState<LineData[]>([])
  const [totalHeight, setTotalHeight] = useState(0)
  const [inkBottom, setInkBottom] = useState(0)

  useEffect(() => {
    if (containerWidth <= 0 || letterW <= 0) return
    let cancelled = false

    async function run() {
      if (!letterHullPromise) letterHullPromise = buildLetterHull()
      let normalizedHull: Point[]
      try {
        normalizedHull = await letterHullPromise
      } catch {
        normalizedHull = []
      }
      if (cancelled) return

      // Scale normalized hull to actual display rect — B renders at top: 0
      const hullPts = normalizedHull.map((p) => ({
        x: p.x * letterW,
        y: p.y * letterH,
      }))

      // Find where the B's ink actually ends (hull max y) — the glyph does NOT fill
      // the full letterH; it stops at roughly 60% of the canvas height.
      const hullMaxY =
        hullPts.length > 0 ? Math.max(...hullPts.map((p) => p.y)) : letterH

      // Sample the hull near its real bottom to get the correct right-edge extent.
      const bottomSampleBlocker =
        hullPts.length > 0
          ? getBlockedInterval(
              hullPts,
              hullMaxY - LINE_HEIGHT * 2,
              hullMaxY,
              H_PAD,
              V_PAD
            )
          : null
      const bottomPadRight = bottomSampleBlocker
        ? bottomSampleBlocker.right
        : letterW + H_PAD

      const prepared = prepareWithSegments(text, BODY_FONT)
      const result: LineData[] = []
      let cursor: LayoutCursor = { segmentIndex: 0, graphemeIndex: 0 }
      let y = 0
      const base: Interval = { left: 0, right: containerWidth }

      while (true) {
        // Letter silhouette blocker
        const bLetter =
          hullPts.length > 0
            ? getBlockedInterval(hullPts, y, y + LINE_HEIGHT, H_PAD, V_PAD)
            : null

        // Bottom-clearance blocker: keep LETTER_BOTTOM_PAD px of space below the B's ink
        const bBottomPad: Interval | null =
          y + LINE_HEIGHT > hullMaxY && y < hullMaxY + LETTER_BOTTOM_PAD
            ? { left: 0, right: bottomPadRight }
            : null

        // Title zone: block the right column so body text starts below the title
        const bTitle: Interval | null =
          y < titleZone ? { left: letterW + 44, right: containerWidth } : null

        const blocked = [bLetter, bBottomPad, bTitle].filter(
          (b): b is Interval => b !== null
        )
        const slots = carveSlots(base, blocked)

        if (slots.length === 0) {
          y += LINE_HEIGHT
          continue
        }

        // Letter is on the left → rightmost slot is the readable text column
        const slot = slots[slots.length - 1]!
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
        setInkBottom(hullMaxY)
      }
    }

    run()
    return () => {
      cancelled = true
    }
  }, [text, containerWidth, letterW, letterH, titleZone])

  return { lines, totalHeight, inkBottom }
}

// ── Responsive breakpoint ─────────────────────────────────────────────────────

function useIsMd(): boolean {
  const [isMd, setIsMd] = useState(true)
  useEffect(() => {
    const check = () => setIsMd(window.innerWidth >= 768)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])
  return isMd
}

// Simple full-width flow with no obstacles — used for the narrow layout
function useSimpleFlow(text: string, width: number): LineData[] {
  const [lines, setLines] = useState<LineData[]>([])
  useEffect(() => {
    if (width <= 0) {
      setLines([])
      return
    }
    const prepared = prepareWithSegments(text, BODY_FONT)
    const result: LineData[] = []
    let cursor: LayoutCursor = { segmentIndex: 0, graphemeIndex: 0 }
    while (true) {
      const line = layoutNextLine(prepared, cursor, width)
      if (line === null) break
      result.push({ text: line.text, x: 0, y: 0 })
      cursor = line.end
    }
    setLines(result)
  }, [text, width])
  return lines
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function MagazineBigLetter() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = useState(0)
  const isMd = useIsMd()

  useEffect(() => {
    if (!containerRef.current) return
    const ro = new ResizeObserver(([e]) =>
      setContainerWidth(e.contentRect.width)
    )
    ro.observe(containerRef.current)
    return () => ro.disconnect()
  }, [])

  // Wide layout (>= md): letter dimensions scale with container
  const letterH = isMd ? Math.min(480, Math.floor(containerWidth * 0.6)) : 0
  const letterW = isMd ? Math.round(letterH * (CANVAS_W / CANVAS_H)) : 0
  const displayFontSize = isMd
    ? Math.round(CANVAS_FONT_SIZE * (letterH / CANVAS_H))
    : 0
  const titleZone = isMd ? Math.round(letterH * 0.4) : 0

  const { lines, totalHeight, inkBottom } = useLetterFlow(
    BODY_TEXT,
    containerWidth,
    letterW,
    letterH,
    titleZone
  )
  // inkBottom is the actual y where the B's ink ends (glyph fills ~60% of canvas height).
  // Use that (+ pad) as the minimum container height, not the full letterH.
  const contentHeight = Math.max(
    totalHeight,
    (inkBottom > 0 ? inkBottom : letterH) + LETTER_BOTTOM_PAD
  )

  // Narrow layout (< md): simple full-width flow, no hull
  const narrowWidth = !isMd && containerWidth > 0 ? containerWidth : 0
  const narrowLines = useSimpleFlow(BODY_TEXT, narrowWidth)
  const narrowLetterSize = Math.min(180, Math.floor(containerWidth * 0.38))

  return (
    <section className="bg-[#faf9f6] py-16 font-serif">
      <div className="mx-auto max-w-5xl px-8">
        {/* Masthead */}
        <div className="mb-8 flex items-center justify-between border-b border-neutral-200 pb-3">
          <span className="font-sans text-xs font-bold tracking-[0.3em] text-black uppercase">
            The Design Review
          </span>
          <div className="flex items-center gap-3 font-sans text-[11px] text-neutral-400">
            <span className="tracking-widest uppercase">Vol. III</span>
            <span>·</span>
            <span>Spring 2026</span>
          </div>
        </div>

        {/* Measurement wrapper — always present for containerWidth */}
        <div ref={containerRef}>
          {/* ── Narrow layout (< md): title → B → body stacked ─────────────── */}
          {!isMd && containerWidth > 0 && (
            <>
              {/* Editorial title */}
              <div className="mb-6">
                <p className="mb-3 font-sans text-[10px] font-bold tracking-[0.3em] text-neutral-400 uppercase">
                  Essay · Typography
                </p>
                <h1
                  className="font-serif leading-[0.93] font-bold text-black"
                  style={{ fontSize: "clamp(1.6rem, 6vw, 2.4rem)" }}
                >
                  bauhaus
                  <br />
                  revival
                </h1>
                <p className="mt-4 font-serif text-sm leading-snug text-neutral-500 italic">
                  On geometric letterforms, negative space, and the architecture
                  of the modern alphabet
                </p>
                <div className="mt-3 font-sans text-sm text-neutral-500">
                  By Elena Hofmann &nbsp;·&nbsp; March 2026 &nbsp;·&nbsp; 9 min
                  read
                </div>
              </div>

              <div className="mb-6 border-t border-neutral-200" />

              {/* Decorative B */}
              <div
                className="pointer-events-none mb-4 leading-none select-none"
                aria-hidden
              >
                <span
                  className="font-serif font-bold text-black"
                  style={{ fontSize: narrowLetterSize, lineHeight: 1 }}
                >
                  B
                </span>
              </div>

              {/* Body text — normal flow, no overlap */}
              <div>
                {narrowLines.map((line, i) => (
                  <div
                    key={i}
                    className="overflow-hidden whitespace-nowrap text-neutral-800 select-text"
                    style={{
                      height: LINE_HEIGHT,
                      font: BODY_FONT,
                      lineHeight: `${LINE_HEIGHT}px`,
                    }}
                  >
                    {line.text}
                  </div>
                ))}
              </div>
            </>
          )}

          {/* ── Wide layout (>= md): B + hull-wrapped body + title overlay ──── */}
          {isMd && containerWidth > 0 && (
            <div
              className="relative"
              style={{
                height: contentHeight > 0 ? contentHeight : undefined,
                minHeight: 400,
              }}
            >
              {/* Giant letter B */}
              <span
                className="pointer-events-none absolute top-0 left-0 font-serif font-bold text-black select-none"
                style={{ fontSize: displayFontSize, lineHeight: 1 }}
                aria-hidden
              >
                B
              </span>

              {/* Static editorial title — right of B, upper zone */}
              <div
                className="absolute top-0 pl-[50px]"
                style={{ left: letterW + 44, right: 0 }}
              >
                <p className="mb-3 font-sans text-[10px] font-bold tracking-[0.3em] text-neutral-400 uppercase">
                  Essay · Typography
                </p>
                <h1
                  className="font-serif leading-[0.93] font-bold text-black"
                  style={{ fontSize: "clamp(1.4rem, 3.15vw, 2.1rem)" }}
                >
                  bauhaus
                  <br />
                  revival
                </h1>
                <p className="mt-4 font-serif text-sm leading-snug text-neutral-500 italic">
                  On geometric letterforms, negative space, and the architecture
                  of the modern alphabet
                </p>
                <div className="mt-3 font-sans text-sm text-neutral-500">
                  By Elena Hofmann &nbsp;·&nbsp; March 2026 &nbsp;·&nbsp; 9 min
                  read
                </div>
              </div>

              {/* Rule separating title zone from body zone */}
              <div
                className="absolute bg-neutral-200"
                style={{
                  left: letterW + 64,
                  right: 0,
                  top: titleZone - 10,
                  height: 1,
                }}
              />

              {/* Pretext-flowed body text (hull-wrapped around B) */}
              <div className="absolute inset-0">
                {lines.map((line, i) => (
                  <span
                    key={i}
                    className="absolute text-neutral-800 select-text"
                    style={{
                      left: line.x,
                      top: line.y,
                      font: BODY_FONT,
                      lineHeight: `${LINE_HEIGHT}px`,
                    }}
                  >
                    {line.text}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-10 flex items-center justify-between border-t border-neutral-200 pt-4 font-sans text-[11px] text-neutral-400">
          <span className="tracking-widest uppercase">Arts &amp; Letters</span>
          <span>Continued on page 18 →</span>
        </div>
      </div>
    </section>
  )
}
