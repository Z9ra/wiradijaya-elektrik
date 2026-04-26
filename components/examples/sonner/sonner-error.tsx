"use client"

import { toast } from "sonner"

import { Button } from "@/components/ui/button"

export default function SonnerError() {
  return (
    <Button
      onClick={() => {
        toast.error("An Error Occurred", {
          description:
            "The system encountered an unexpected issue while processing your request. Please try again.",
        })
      }}
    >
      Show Error Toast
    </Button>
  )
}
