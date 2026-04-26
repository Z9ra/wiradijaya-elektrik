"use client"

import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export default function CardWithCtaButton() {
  return (
    <Card className="group mx-auto max-w-sm transition-all hover:shadow-lg">
      <CardHeader className="p-0">
        <div className="overflow-hidden rounded-t-lg">
          <img
            src="https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/creative-ai/bg-3.jpg"
            alt="Mountain landscape inspirational workspace"
            className="h-64 w-full object-cover object-center transition-transform group-hover:scale-105"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <h6 className="mb-3 text-xl font-bold">Discover Your Next Adventure</h6>
        <p className="text-muted-foreground leading-relaxed [text-wrap:balance]">
          Embark on a journey that transforms your perspective. Our curated
          experiences combine breathtaking natural beauty with modern amenities,
          creating the perfect environment for innovation and growth.
        </p>
      </CardContent>
      <CardFooter className="px-6 pt-0 pb-6">
        <Button
          className="group/btn w-full gap-2 transition-all hover:gap-3"
          size="sm"
        >
          Explore Now
          <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
        </Button>
      </CardFooter>
    </Card>
  )
}
