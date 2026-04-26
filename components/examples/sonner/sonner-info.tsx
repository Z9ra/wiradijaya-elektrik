"use client"

import { toast } from "sonner"

import { Button } from "@/components/ui/button"

export default function SonnerInfo() {
  return (
    <Button
      onClick={() => {
        toast.info("Information Notification", {
          description:
            "You can use this to inform users about important updates, changes, or general information.",
        })
      }}
    >
      Show Info Toast
    </Button>
  )
}
