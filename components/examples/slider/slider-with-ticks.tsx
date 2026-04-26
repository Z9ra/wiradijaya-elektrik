"use client"

import * as React from "react"

import { Slider } from "@/components/ui/slider"

export default function SliderWithTicks() {
  const [value, setValue] = React.useState([50])

  return (
    <div className="w-80">
      <Slider
        value={value}
        onValueChange={setValue}
        max={100}
        step={10}
        className="mb-6"
      />
      <div className="relative -mt-2 flex justify-between px-1">
        {Array.from({ length: 11 }, (_, i) => (
          <div
            key={i}
            className="flex flex-col items-center"
            style={{ left: `${(i / 10) * 100}%` }}
          >
            <div className="bg-border h-2 w-px" />
            <span className="text-muted-foreground mt-1 text-xs">{i * 10}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
