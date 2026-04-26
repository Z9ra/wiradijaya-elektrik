"use client"

import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { Star } from "lucide-react"

import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"
import { RadioGroup } from "@/components/ui/radio-group"

export default function RadioWithCustomIcon() {
  return (
    <RadioGroup defaultValue="html">
      <div className="flex items-center gap-2">
        <RadioGroupPrimitive.Item
          value="html"
          id="custom-icon-html"
          className={cn(
            "border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 group relative flex aspect-square size-5 shrink-0 items-center justify-center rounded-full border bg-transparent shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-transparent"
          )}
        >
          <Star className="text-primary pointer-events-none absolute top-1/2 left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 opacity-100 transition-opacity group-data-[state=checked]:opacity-0" />
          <RadioGroupPrimitive.Indicator className="relative flex items-center justify-center">
            <Star className="text-primary fill-primary absolute top-1/2 left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2" />
          </RadioGroupPrimitive.Indicator>
        </RadioGroupPrimitive.Item>
        <Label
          htmlFor="custom-icon-html"
          className="text-foreground cursor-pointer"
        >
          HTML
        </Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupPrimitive.Item
          value="react"
          id="custom-icon-react"
          className={cn(
            "border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 group relative flex aspect-square size-5 shrink-0 items-center justify-center rounded-full border bg-transparent shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-transparent"
          )}
        >
          <Star className="text-primary pointer-events-none absolute top-1/2 left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 opacity-100 transition-opacity group-data-[state=checked]:opacity-0" />
          <RadioGroupPrimitive.Indicator className="relative flex items-center justify-center">
            <Star className="text-primary fill-primary absolute top-1/2 left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2" />
          </RadioGroupPrimitive.Indicator>
        </RadioGroupPrimitive.Item>
        <Label
          htmlFor="custom-icon-react"
          className="text-foreground cursor-pointer"
        >
          React
        </Label>
      </div>
    </RadioGroup>
  )
}
