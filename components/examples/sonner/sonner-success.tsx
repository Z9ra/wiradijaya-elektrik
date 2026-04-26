"use client"

import { toast } from "sonner"

import { Button } from "@/components/ui/button"

export default function SonnerSuccess() {
  return (
    <Button
      onClick={() => {
        toast.success("Operation Completed Successfully!", {
          description:
            "Your changes have been saved and all data has been updated in the system.",
        })
      }}
    >
      Show Success Toast
    </Button>
  )
}
