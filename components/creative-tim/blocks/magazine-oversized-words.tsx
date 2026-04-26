"use client"

import { useEffect, useRef, useState } from "react"
import {
  layoutNextLine,
  prepareWithSegments,
  type LayoutCursor,
} from "@chenglou/pretext"

const FONT_SIZE = 17
const LINE_HEIGHT = 28
const FONT = `${FONT_SIZE}px Georgia, serif`

const INTRO_TEXT = `There is a particular kind of courage required to place a word so large that it ceases to be read and begins to be seen — a word that functions simultaneously as image and language, asserting its presence at a scale that overwhelms the intellect and speaks first to the senses. This is the typographer's most radical gesture. The history of display type is a history of transgression: each generation pushes further, crops deeper, bleeds wider. What begins as decoration ends as architecture. The word becomes the room. The letter becomes the wall.`

const BODY_TEXT = `Contemporary editorial designers, freed from the economics of metal type and the physical constraints of the composing room, have embraced scale as a primary expressive tool. A word set at 400 points occupies the same visual weight as a photograph; it can anchor a spread, create drama, or establish a tonal mood with the same authority as a strong image. The challenge is not technical — any design software can scale a character to any size — but conceptual: knowing when a word should be read, and when it should be felt. The great magazine designers of the late twentieth century understood this instinctively. They knew that a reader encountering a page spread reads it first as a landscape, taking in the overall composition before the eye settles on text to decode. By placing enormous words — sometimes cropped, sometimes translucent, sometimes reversed out of image — they created visual entry points that operated at a pre-linguistic level, drawing readers into spreads before a single word of body text had been processed.`

type LineData = {
  text: string
  x: number
  y: number
}

function usePreTextFlow(
  text: string,
  width: number,
  xOffset: number = 0
): { lines: LineData[]; totalHeight: number } {
  const [lines, setLines] = useState<LineData[]>([])
  const [totalHeight, setTotalHeight] = useState(0)

  useEffect(() => {
    if (width <= 0) return
    const prepared = prepareWithSegments(text, FONT)
    const result: LineData[] = []
    let cursor: LayoutCursor = { segmentIndex: 0, graphemeIndex: 0 }
    let y = 0

    while (true) {
      const line = layoutNextLine(prepared, cursor, width)
      if (line === null) break
      result.push({ text: line.text, x: xOffset, y })
      cursor = line.end
      y += LINE_HEIGHT
    }

    setLines(result)
    setTotalHeight(y)
  }, [text, width, xOffset])

  return { lines, totalHeight }
}

function TextBlock({
  lines,
  className = "",
}: {
  lines: LineData[]
  className?: string
}) {
  return (
    <div className={className}>
      {lines.map((line, i) => (
        <div
          key={i}
          className="overflow-hidden whitespace-nowrap text-white/80 select-text"
          style={{
            height: LINE_HEIGHT,
            fontSize: FONT_SIZE,
            fontFamily: "Georgia, serif",
            lineHeight: `${LINE_HEIGHT}px`,
          }}
        >
          {line.text}
        </div>
      ))}
    </div>
  )
}

export default function MagazineOversizedWords() {
  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)
  const [leftWidth, setLeftWidth] = useState(0)
  const [rightWidth, setRightWidth] = useState(0)

  useEffect(() => {
    const observe = (
      el: HTMLDivElement | null,
      setter: (n: number) => void
    ) => {
      if (!el) return () => {}
      const obs = new ResizeObserver(([e]) => setter(e.contentRect.width))
      obs.observe(el)
      return () => obs.disconnect()
    }
    const d1 = observe(leftRef.current, setLeftWidth)
    const d2 = observe(rightRef.current, setRightWidth)
    return () => {
      d1()
      d2()
    }
  }, [])

  const { lines: introLines } = usePreTextFlow(INTRO_TEXT, leftWidth)
  const { lines: bodyLines } = usePreTextFlow(BODY_TEXT, rightWidth)

  return (
    <section className="overflow-hidden bg-[#0f0f0f] py-16">
      <div className="mx-auto max-w-6xl px-6">
        {/* Top row: Issue tag */}
        <div className="mb-6 flex items-center gap-4">
          <span className="border border-white/20 px-2 py-0.5 font-sans text-[10px] font-bold tracking-[0.25em] text-white/60 uppercase">
            Feature
          </span>
          <div className="h-px flex-1 bg-white/10" />
          <span className="font-sans text-[10px] tracking-widest text-white/40 uppercase">
            No. 07
          </span>
        </div>

        {/* Giant word row 1: "SCALE" split */}
        <div className="relative flex items-end justify-between leading-none select-none">
          <span
            className="font-sans font-black tracking-tighter text-white/10"
            style={{ fontSize: "clamp(4rem, 14.4vw, 10.4rem)" }}
            aria-hidden
          >
            SCALE
          </span>
          <span
            className="font-sans font-black tracking-tighter text-white"
            style={{ fontSize: "clamp(0.8rem, 2.8vw, 1.76rem)" }}
          >
            &amp;
          </span>
          <span
            className="font-sans font-black tracking-tighter text-white/10"
            style={{ fontSize: "clamp(4rem, 14.4vw, 10.4rem)" }}
            aria-hidden
          >
            VOICE
          </span>
        </div>

        {/* Subtitle pinned below the big word */}
        <div className="mt-[-0.5rem] mb-8 border-b border-white/10 pb-6">
          <p className="font-serif text-[clamp(1rem,2.5vw,1.4rem)] text-white/80 italic">
            On the typographer&apos;s most radical gesture
          </p>
          <div className="mt-2 flex items-center gap-3 font-sans text-sm text-white/50">
            <span>Ingrid Kowalczyk</span>
            <span>·</span>
            <span>March 2026</span>
            <span>·</span>
            <span>12 min read</span>
          </div>
        </div>

        {/* Two-column layout: left = intro, right = image + body */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Left: intro + rotated side word */}
          <div className="relative lg:col-span-2" ref={leftRef}>
            <TextBlock lines={introLines} />

            {/* Rotated side word */}
            <div
              className="pointer-events-none absolute bottom-0 left-[-1.5rem] origin-bottom-left -rotate-90 select-none"
              aria-hidden
            >
              <span
                className="font-sans font-black tracking-widest text-white/[0.06] uppercase"
                style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
              >
                LANGUAGE
              </span>
            </div>
          </div>

          {/* Right: photo + body text */}
          <div className="lg:col-span-3">
            {/* Photo with oversized overlaid word */}
            <div className="relative mb-6 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=900&auto=format&fit=crop"
                alt="Typography editorial"
                className="h-56 w-full object-cover object-top brightness-75"
              />
              {/* Word overlaid on image */}
              <div className="absolute inset-0 flex items-end p-4">
                <span
                  className="font-sans leading-none font-black tracking-tighter text-white/80 uppercase"
                  style={{ fontSize: "clamp(3rem, 9vw, 6rem)" }}
                  aria-hidden
                >
                  FORM
                </span>
              </div>
              <div className="absolute top-3 right-3 font-sans text-[9px] tracking-widest text-white/50 uppercase">
                Basel, 1972
              </div>
            </div>

            {/* Pretext-flowed body text */}
            <div ref={rightRef}>
              <TextBlock lines={bodyLines} />
            </div>
          </div>
        </div>

        {/* Bottom big word — ghosted */}
        <div className="mt-8 flex justify-end overflow-hidden">
          <span
            className="font-sans leading-none font-black tracking-tighter text-white/[0.04] select-none"
            style={{ fontSize: "clamp(4rem, 14vw, 10rem)" }}
            aria-hidden
          >
            EDITORIAL
          </span>
        </div>
      </div>
    </section>
  )
}
