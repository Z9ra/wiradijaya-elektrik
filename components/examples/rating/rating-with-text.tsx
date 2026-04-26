"use client"

import * as React from "react"

import { Rating } from "@/components/ui/rating"

export default function RatingWithText() {
  const [rated, setRated] = React.useState(4)

  return (
    <div className="flex items-center gap-2">
      <span className="text-primary font-semibold">{rated}</span>
      <Rating value={rated} onValueChange={(value) => setRated(value)} />
      <span className="text-foreground font-semibold">
        Based on 134 Reviews
      </span>
    </div>
  )
}
