"use client"

import * as React from "react"
import { Sparkles, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function WelcomePopupWithCta() {
  return (
    <Card className="relative mx-auto max-w-lg overflow-hidden p-8 shadow-xl">
      <CardContent className="p-0">
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 z-10 rounded-full transition-all hover:bg-gray-100"
        >
          <X className="h-5 w-5" />
        </Button>
        <div className="mb-6 text-center">
          <div className="mb-4 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-gray-400 to-gray-600 p-3">
            <Sparkles className="h-8 w-8 text-white" />
          </div>
          <h2 className="mb-3 text-3xl font-bold">
            Welcome to Creative Tim UI!
          </h2>
          <p className="text-muted-foreground mx-auto max-w-md text-lg leading-relaxed [text-wrap:balance]">
            Join thousands of developers creating amazing experiences. Get
            access to exclusive resources, updates, and special offers.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button
            size="lg"
            className="w-full bg-gray-500 hover:bg-gray-600 sm:w-auto"
          >
            Join our community
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto">
            Learn more
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
