"use client"

import { toast } from "sonner"

import { Button } from "@/components/ui/button"

export default function SonnerActionable() {
  return (
    <Button
      onClick={() => {
        toast("Changes Applied", {
          description:
            "We’ve applied your changes right away so you can keep moving forward without interruption.",
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        })
      }}
    >
      Show Actionable Toast
    </Button>
  )
}
