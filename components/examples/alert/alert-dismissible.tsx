"use client"

import { useState } from "react"
import { AlertCircle, X } from "lucide-react"

import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

export default function AlertDismissible() {
  const [isOpen, setIsOpen] = useState(true)

  if (!isOpen) return null

  return (
    <Alert>
      <AlertCircle className="h-4 w-4" />
      <AlertDescription>A simple alert for showing message.</AlertDescription>
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-2 right-2 h-6 w-6"
        onClick={() => setIsOpen(false)}
      >
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </Button>
    </Alert>
  )
}
