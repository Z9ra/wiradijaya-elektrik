"use client"

import * as React from "react"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Banner02() {
  return (
    <div className="grid justify-center text-center">
      <div className="relative w-full rounded-none border-0 bg-transparent">
        <div className="container mx-auto px-4 py-3 leading-normal font-semibold text-black">
          Explore our latest feature that streamlines your workflow. Try it out
          today and supercharge your productivity.
        </div>
      </div>
      <div className="relative w-full rounded-none border-0 bg-transparent">
        <div className="container mx-auto flex flex-col items-center justify-center gap-4 px-4 py-3 leading-normal font-semibold text-black md:flex-row">
          Explore our latest feature that streamlines your workflow. Try it out
          today and supercharge your productivity.
          <Button
            size="icon"
            variant="ghost"
            className="ml-auto h-8 w-8 md:ml-0"
          >
            <ArrowRight className="h-4 w-4 stroke-2" />
          </Button>
        </div>
      </div>
      <div className="relative w-full rounded-none border-0 bg-transparent">
        <div className="container mx-auto flex flex-col items-center justify-center gap-4 px-4 py-3 leading-normal font-semibold text-black md:flex-row">
          <Button size="sm" className="shrink-0">
            Now Update
          </Button>
          Explore our latest feature that streamlines your workflow. Try it out
          today and supercharge your productivity.
        </div>
      </div>
      <div className="relative w-full rounded-none border-0 bg-transparent">
        <div className="container mx-auto flex flex-col items-center justify-center gap-4 px-4 py-3 leading-normal font-semibold text-black md:flex-row">
          <Button size="sm" className="shrink-0">
            Now Update
          </Button>
          Explore our latest feature that streamlines your workflow. Try it out
          today and supercharge your productivity.
          <Button size="sm" variant="outline" className="shrink-0">
            Explore Now
            <ArrowRight className="ml-2 h-3.5 w-3.5 stroke-2" />
          </Button>
        </div>
      </div>
    </div>
  )
}
