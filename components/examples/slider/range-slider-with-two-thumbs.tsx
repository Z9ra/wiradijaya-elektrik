"use client"

import * as React from "react"

import { Slider } from "@/components/ui/slider"

export default function RangeSliderWithTwoThumbs() {
  const [value, setValue] = React.useState([20, 80])

  return (
    <div className="w-80">
      <Slider
        value={value}
        onValueChange={setValue}
        max={100}
        min={0}
        step={1}
      />
    </div>
  )
}
