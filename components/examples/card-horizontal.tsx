"use client"

import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"

export default function CardHorizontal() {
  return (
    <Card className="flex w-full max-w-[48rem] flex-row overflow-hidden py-0">
      <div className="w-2/5 shrink-0">
        <img
          src="https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/creative-ai/bg-3.jpg"
          alt="Startups"
          className="h-full w-full object-cover"
        />
      </div>
      <CardContent className="flex flex-col justify-center p-6">
        <p className="text-muted-foreground mb-4 text-xs font-bold uppercase">
          startups
        </p>
        <CardTitle className="mb-2 text-xl">
          Lyft launching cross-platform service this week
        </CardTitle>
        <p className="text-muted-foreground mb-8 text-sm">
          Like so many organizations these days, Autodesk is a company in
          transition. It was until recently a traditional boxed software company
          selling licenses. Yet its own business model disruption is only part
          of the story
        </p>
        <Button variant="default" className="flex w-fit items-center gap-2">
          Learn More
          <ArrowRight className="h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  )
}
