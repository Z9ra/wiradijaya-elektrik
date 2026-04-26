"use client"

import * as React from "react"
import { X } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function Banner01() {
  const [showFirst, setShowFirst] = React.useState(true)
  const [showSecond, setShowSecond] = React.useState(true)

  return (
    <>
      {showFirst && (
        <div className="relative w-full rounded-none border-0 bg-transparent">
          <div className="container mx-auto flex w-full flex-col items-center justify-between gap-6 gap-x-4 px-4 py-3 pt-1 leading-normal font-normal text-black sm:pt-0 md:flex-row">
            <span className="flex items-center gap-2">
              <Badge variant="secondary" className="shrink-0">
                NEW
              </Badge>
              Creative Tim UI, a comprehensive compilation of 200+ sections, now
              available for your use!
            </span>
            <div className="ml-auto flex items-center gap-4 md:ml-0">
              <Button size="sm">Check Out</Button>
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
        <div className="bg-primary text-primary-foreground relative mt-2 w-full rounded-none">
          <div className="container mx-auto flex w-full flex-col items-center justify-between gap-6 gap-x-4 px-4 py-3 pt-1 leading-normal font-normal sm:pt-0 md:flex-row">
            <span className="flex items-center gap-2">
              <Badge
                variant="secondary"
                className="bg-primary-foreground text-primary shrink-0"
              >
                NEW
              </Badge>
              Creative Tim UI, a comprehensive compilation of 200+ sections, now
              available for your use!
            </span>
            <div className="ml-auto flex items-center gap-4 md:ml-0">
              <Button
                size="sm"
                className="shrink-0 border-white bg-white text-black hover:border-white hover:bg-white"
              >
                Check Out
              </Button>
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
        </div>
      )}
    </>
  )
}
