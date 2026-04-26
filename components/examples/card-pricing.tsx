"use client"

import { Check } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function CardPricing() {
  return (
    <Card className="bg-primary text-primary-foreground w-full max-w-xs">
      <CardHeader className="py-6 text-center">
        <Badge variant="secondary" className="mx-auto w-fit">
          Standard
        </Badge>
        <div className="mt-3 flex items-baseline justify-center gap-1">
          <span className="text-4xl">$</span>
          <span className="text-7xl font-bold">29</span>
          <span className="text-4xl">/mo</span>
        </div>
      </CardHeader>
      <Separator className="bg-primary-foreground/20" />
      <CardContent className="space-y-3 px-8 pt-8 pb-6">
        <div className="flex items-center gap-4 text-white">
          <Check className="h-5 w-5" />
          <p className="text-sm">5 team members</p>
        </div>
        <div className="flex items-center gap-4 text-white">
          <Check className="h-5 w-5" />
          <p className="text-sm">200+ components</p>
        </div>
        <div className="flex items-center gap-4 text-white">
          <Check className="h-5 w-5" />
          <p className="text-sm">40+ built-in pages</p>
        </div>
        <div className="flex items-center gap-4 text-white">
          <Check className="h-5 w-5" />
          <p className="text-sm">1 year free updates</p>
        </div>
        <div className="flex items-center gap-4 text-white">
          <Check className="h-5 w-5" />
          <p className="text-sm">Life time technical support</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full border-white bg-white text-black hover:bg-white/90 hover:text-black"
          variant="outline"
        >
          Buy Now
        </Button>
      </CardFooter>
    </Card>
  )
}
