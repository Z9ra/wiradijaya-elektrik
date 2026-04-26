"use client"

import * as React from "react"
import { X } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Banner06() {
  const [showFirst, setShowFirst] = React.useState(true)
  const [showSecond, setShowSecond] = React.useState(true)

  return (
    <>
      {showFirst && (
        <div className="relative w-full rounded-none border-0 bg-transparent">
          <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-3 leading-normal font-normal text-black">
            <span>
              Discover new features, enhanced performance, and a smoother
              experience.{" "}
              <a href="#" className="text-primary underline">
                Upgrade Now
              </a>{" "}
              to unlock the best of what we have to offer!
            </span>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setShowFirst(false)}
              className="h-5 w-5 shrink-0 text-black"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
      {showSecond && (
        <div className="bg-primary text-primary-foreground relative mt-2 w-full rounded-none">
          <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-3 leading-normal font-normal">
            <span>
              Discover new features, enhanced performance, and a smoother
              experience.{" "}
              <a href="#" className="underline">
                Upgrade Now
              </a>{" "}
              to unlock the best of what we have to offer!
            </span>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setShowSecond(false)}
              className="text-primary-foreground hover:text-primary-foreground h-5 w-5 shrink-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
