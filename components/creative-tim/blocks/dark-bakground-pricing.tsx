"use client"

import { ArrowRight, Check } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

const PLANS = [
  {
    title: "Starter",
    price: 199,
    options: [
      "Complete Documentation",
      "Working materials in Sketch",
      "500MB cloud storage",
      "Life support",
    ],
  },
  {
    title: "PRO",
    price: 299,
    options: [
      "Complete documentation",
      "Working materials in Sketch",
      "100GB cloud storage",
      "500 team members",
      "Premium support",
    ],
  },
  {
    title: "Premium",
    price: 399,
    options: [
      "Complete documentation",
      "Working materials in Sketch",
      "2GB cloud storage",
      "Premium support",
    ],
  },
]

export default function DarkBakgroundPricing() {
  return (
    <section className="p-4">
      <div className="bg-primary min-h-96 rounded-xl px-8 py-24">
        <div className="container mx-auto text-center">
          <Badge className="border-white bg-white text-black">Premium</Badge>
          <h2 className="mt-6 mb-4 text-3xl font-bold tracking-tight text-white">
            See Our Pricing
          </h2>
          <p className="mx-auto mb-8 max-w-lg text-lg text-white/80">
            You have Free Unlimited Updates and Premium Support on each package
          </p>
        </div>
      </div>
      <div className="container mx-auto -mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-0">
        {PLANS.map(({ title, price, options }, key) => (
          <Card
            key={key}
            className={`lg:h-max lg:scale-105 ${
              title === "Starter" || title === "Premium"
                ? "lg:translate-y-6"
                : "z-10 translate-y-0"
            }`}
          >
            <CardHeader className="m-0 w-full p-6">
              <h3 className="text-foreground mt-2 mb-6 flex justify-center text-lg font-semibold">
                {title}
              </h3>
              <div className="text-foreground flex justify-center text-center text-5xl font-bold">
                <span className="text-muted-foreground text-xl">$</span>
                {price}
                <span className="text-muted-foreground -translate-y-1 self-end text-xl">
                  /mo
                </span>
              </div>
            </CardHeader>
            <CardContent className="p-6 text-center">
              <ul className="mb-6 flex flex-col items-center justify-start gap-3">
                {options.map((option, key) => (
                  <li
                    key={key}
                    className="text-muted-foreground flex items-center gap-2 py-1"
                  >
                    <Check className="h-5 w-5 stroke-2 text-inherit" />
                    <p>{option}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="px-6 pt-0 pb-6">
              <Button className="flex w-full items-center justify-center gap-4">
                {title === "premium" ? "Try Premium" : "Join"}{" "}
                <ArrowRight className="h-4 w-4 stroke-2" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
