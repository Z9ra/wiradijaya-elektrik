"use client"

import * as React from "react"
import { Sparkles, X } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function Banner07() {
  const [showFirst, setShowFirst] = React.useState(true)
  const [showSecond, setShowSecond] = React.useState(true)

  return (
    <>
      {showFirst && (
        <div className="relative w-full rounded-none border-b bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="text-foreground container mx-auto flex w-full flex-col items-center justify-between gap-6 gap-x-4 px-4 py-4 leading-normal font-normal sm:py-3 md:flex-row">
            <div className="flex flex-wrap items-center gap-3">
              <Badge
                variant="secondary"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white"
              >
                <Sparkles className="mr-1 h-3 w-3" />
                NEW
              </Badge>
              <span className="text-sm md:text-base">
                <span className="font-semibold">Creative Tim UI</span> — a
                comprehensive compilation of 200+ sections, now available for
                your use!
              </span>
            </div>
            <div className="ml-auto flex items-center gap-4 md:ml-0">
              <Button
                size="sm"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Explore Now
              </Button>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => setShowFirst(false)}
                className="h-5 w-5 shrink-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
      {showSecond && (
        <div className="relative mt-2 w-full rounded-none border-b bg-gradient-to-r from-slate-900 to-slate-800 text-white">
          <div className="container mx-auto flex w-full flex-col items-center justify-between gap-6 gap-x-4 px-4 py-4 leading-normal font-normal sm:py-3 md:flex-row">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="secondary" className="bg-white text-slate-900">
                <Sparkles className="mr-1 h-3 w-3" />
                NEW
              </Badge>
              <span className="text-sm md:text-base">
                <span className="font-semibold">Creative Tim UI</span> — a
                comprehensive compilation of 200+ sections, now available for
                your use!
              </span>
            </div>
            <div className="ml-auto flex items-center gap-4 md:ml-0">
              <Button
                size="sm"
                className="shrink-0 border-white bg-white text-slate-900 hover:bg-slate-100"
              >
                Explore Now
              </Button>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => setShowSecond(false)}
                className="h-5 w-5 shrink-0 text-white hover:text-white"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
