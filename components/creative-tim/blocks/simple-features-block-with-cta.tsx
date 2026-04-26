"use client"

import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const FEATURES = [
  {
    title: "Components",
    description: "We get insulted by others, lose trust for those We get back.",
  },
  {
    title: "Mix and Match",
    description: "We get insulted by others, lose trust for those We get back.",
  },
  {
    title: "Design",
    description: "We get insulted by others, lose trust for those We get back.",
  },
  {
    title: "Payment",
    description: "We get insulted by others, lose trust for those We get back.",
  },
]

export default function SimpleFeaturesBlockWithCta() {
  return (
    <section className="py-16">
      <div className="container mx-auto mb-10 text-center lg:mb-20">
        <h2 className="text-foreground mb-4 text-3xl font-bold">
          Turn your idea into a startup
        </h2>
        <p className="text-foreground mx-auto max-w-lg text-lg">
          We&apos;re constantly trying to express ourselves and actualize our
          dreams. If you have the opportunity to play
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map(({ title, description }) => (
          <Card key={title} className="border-0 bg-transparent shadow-none">
            <CardContent className="p-0">
              <h6 className="text-foreground mb-2 text-lg font-semibold">
                {title}
              </h6>
              <p className="text-foreground max-w-xs">{description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="container mx-auto mt-12 text-center">
        <Button variant="outline">
          Get Started
          <ArrowRight className="ml-2 h-3.5 w-3.5 stroke-2" />
        </Button>
      </div>
    </section>
  )
}
