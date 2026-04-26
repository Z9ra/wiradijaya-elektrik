"use client"

import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"
import { RadioGroup } from "@/components/ui/radio-group"

export default function CustomRadio() {
  return (
    <RadioGroup defaultValue="html">
      <div className="flex items-center gap-2">
        <RadioGroupPrimitive.Item
          value="html"
          id="custom-html"
          className={cn(
            "border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50"
          )}
        >
          <RadioGroupPrimitive.Indicator className="relative flex items-center justify-center">
            <Check className="h-4 w-4 stroke-2" />
          </RadioGroupPrimitive.Indicator>
        </RadioGroupPrimitive.Item>
        <Label htmlFor="custom-html" className="text-foreground cursor-pointer">
          HTML
        </Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupPrimitive.Item
          value="react"
          id="custom-react"
          className={cn(
            "border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50"
          )}
        >
          <RadioGroupPrimitive.Indicator className="relative flex items-center justify-center">
            <Check className="h-4 w-4 stroke-2" />
          </RadioGroupPrimitive.Indicator>
        </RadioGroupPrimitive.Item>
        <Label
          htmlFor="custom-react"
          className="text-foreground cursor-pointer"
        >
          React
        </Label>
      </div>
    </RadioGroup>
  )
}
