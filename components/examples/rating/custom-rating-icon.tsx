"use client"

import * as React from "react"
import { Heart } from "lucide-react"

import { cn } from "@/lib/utils"
import { Rating } from "@/components/ui/rating"

function FilledHeart({
  className,
  ...props
}: React.ComponentProps<typeof Heart>) {
  return <Heart className={cn(className, "fill-current")} {...props} />
}

export default function CustomRatingIcon() {
  return <Rating value={4} unratedIcon={Heart} ratedIcon={FilledHeart} />
}
