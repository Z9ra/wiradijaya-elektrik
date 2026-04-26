"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Star } from "lucide-react"

import { cn } from "@/lib/utils"

export default function CheckboxWithCustomIcon() {
  const [checked, setChecked] = React.useState(false)

  return (
    <CheckboxPrimitive.Root
      checked={checked}
      onCheckedChange={(value) => setChecked(value === true)}
      className={cn(
        "peer size-5 shrink-0 rounded-[4px] border-0 shadow-none transition-all outline-none hover:shadow-none focus-visible:ring-0 data-[state=checked]:bg-transparent"
      )}
    >
      <Star
        className={cn(
          "stroke-primary size-5 transition-all",
          checked ? "fill-primary" : "fill-transparent"
        )}
      />
    </CheckboxPrimitive.Root>
  )
}
