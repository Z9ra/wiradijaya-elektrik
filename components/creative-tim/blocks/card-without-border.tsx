"use client"

import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export default function CardWithoutBorder() {
  return (
    <Card className="mx-auto max-w-md border-0 shadow-none">
      <CardHeader className="p-0">
        <img
          src="https://v3.material-tailwind.com/nature-1.jpg"
          alt="image"
          className="h-auto w-full rounded-lg"
        />
      </CardHeader>
      <CardContent className="px-2 pt-4">
        <h5 className="mb-2 text-xl font-semibold">
          MateLabs mixes machine learning with IFTTT
        </h5>
        <p className="text-foreground max-w-xl [text-wrap:_balance]">
          If you&apos;ve ever wanted to train a machine learning model and
          integrate it with IFTTT, you now can with ...
        </p>
      </CardContent>
      <CardFooter className="p-2">
        <Button variant="ghost" size="sm" className="px-0">
          Read More
          <ArrowRight className="ml-2 h-3.5 w-3.5" />
        </Button>
      </CardFooter>
    </Card>
  )
}
