"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

export default function ProgressLabelInside() {
  const value = 50

  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      value={value}
      className={cn(
        "bg-primary/20 relative h-3 w-full overflow-hidden rounded-full"
      )}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="bg-primary relative flex h-full w-full flex-1 items-center justify-center transition-all"
        style={{ transform: `translateX(-${100 - value}%)` }}
      >
        <span className="text-secondary-foreground absolute text-xs font-medium">
          50% Completed
        </span>
      </ProgressPrimitive.Indicator>
    </ProgressPrimitive.Root>
  )
}
