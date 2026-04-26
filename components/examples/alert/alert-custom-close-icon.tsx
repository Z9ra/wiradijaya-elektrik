"use client"

import { useState } from "react"
import { AlertCircle, X } from "lucide-react"

import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

export default function AlertCustomCloseIcon() {
  const [isOpen, setIsOpen] = useState(true)

  if (!isOpen) return null

  return (
    <Alert className="items-center">
      <AlertCircle className="h-4 w-4" />
      <AlertDescription>
        Sorry, something went wrong please try again.
      </AlertDescription>
      <Button
        variant="ghost"
        size="sm"
        className="absolute top-2 right-2"
        onClick={() => setIsOpen(false)}
      >
        Close
      </Button>
    </Alert>
  )
}
