"use client"

import { toast } from "sonner"

import { Button } from "@/components/ui/button"

export default function SonnerWarning() {
  return (
    <Button
      onClick={() => {
        toast.warning("Warning: Please Review This Action", {
          description:
            "This action may have unintended consequences or could affect other parts of the system.",
        })
      }}
    >
      Show Warning Toast
    </Button>
  )
}
