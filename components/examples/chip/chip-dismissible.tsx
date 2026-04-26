"use client"

import { useState } from "react"
import { User, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Chip } from "@/components/ui/chip"

export default function ChipDismissible() {
  const [isOpen, setIsOpen] = useState(true)

  if (!isOpen) return null

  return (
    <Chip className="pr-1">
      <User className="h-4 w-4" />
      Creative Tim UI
      <Button
        variant="ghost"
        size="icon"
        className="ml-1 h-5 w-5 rounded-full"
        onClick={() => setIsOpen(false)}
      >
        <X className="h-3 w-3" />
        <span className="sr-only">Dismiss</span>
      </Button>
    </Chip>
  )
}
