"use client"

import * as React from "react"
import { AlertCircle, X } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Banner04() {
  const [showFirst, setShowFirst] = React.useState(true)
  const [showSecond, setShowSecond] = React.useState(true)

  return (
    <>
      {showFirst && (
        <div className="relative w-full rounded-none border-0 bg-transparent">
          <div className="container mx-auto flex w-full flex-col items-center justify-between gap-6 gap-x-4 px-4 py-3 pt-1 leading-normal font-normal text-black sm:pt-0 md:flex-row">
            <div className="flex flex-1 items-start gap-3">
              <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-black" />
              <span>
                NEW | Creative Tim UI, a comprehensive compilation of 200+
                sections, now available for your use!
              </span>
            </div>
            <div className="ml-auto flex items-center gap-4 md:ml-0">
              <Button variant="ghost" size="sm">
                Dismiss
              </Button>
              <Button size="sm">Get Offer</Button>
            </div>
          </div>
        </div>
      )}
      {showSecond && (
        <div className="bg-primary text-primary-foreground relative mt-2 w-full rounded-none">
          <div className="container mx-auto flex w-full flex-col items-center justify-between gap-6 gap-x-4 px-4 py-3 pt-1 leading-normal font-normal sm:pt-0 md:flex-row">
            <div className="flex flex-1 items-start gap-3">
              <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
              <span>
                NEW | Creative Tim UI, a comprehensive compilation of 200+
                sections, now available for your use!
              </span>
            </div>
            <div className="ml-auto flex items-center gap-4 md:ml-0">
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setShowSecond(false)}
                className="text-primary-foreground hover:text-primary-foreground"
              >
                Dismiss
              </Button>
              <Button
                size="sm"
                className="shrink-0 border-white bg-white text-black hover:border-white hover:bg-white"
              >
                Get Offer
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
