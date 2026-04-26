"use client"

import { useState } from "react"
import { CheckCircle, X } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

export default function AlertWithContent() {
  const [isOpen, setIsOpen] = useState(true)

  if (!isOpen) return null

  return (
    <Alert>
      <CheckCircle className="h-4 w-4" />
      <div className="flex-1">
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>
          I don&apos;t know what that word means. I&apos;m happy. But success,
          that goes back to what in somebody&apos;s eyes success means. For me,
          success is inner peace. That&apos;s a good day for me.
        </AlertDescription>
      </div>
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
