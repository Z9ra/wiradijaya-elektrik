"use client"

import { ArrowRight, Check, X } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"

const PLANS = [
  {
    title: "Starter",
    price: 199,
    options: [
      { feature: "Complete Documentation", included: true },
      { feature: "Working materials in Sketch", included: true },
      { feature: "500MB cloud storage", included: true },
      { feature: "Premium support", included: false },
      { feature: "500 team members", included: false },
    ],
  },
  {
    title: "PRO",
    price: 299,
    options: [
      { feature: "Complete documentation", included: true },
      { feature: "Working materials in Sketch", included: true },
      { feature: "100GB cloud storage", included: true },
      { feature: "Premium support", included: true },
      { feature: "500 team members", included: true },
    ],
  },
  {
    title: "Premium",
    price: 399,
    options: [
      { feature: "Complete documentation", included: true },
      { feature: "Working materials in Sketch", included: true },
      { feature: "2GB cloud storage", included: true },
      { feature: "Premium support", included: true },
      { feature: "500 team members", included: false },
    ],
  },
]

export default function PricingBlockWithImage() {
  return (
    <section className="p-4">
      <div className="relative min-h-96 overflow-hidden rounded-xl bg-[url(https://images.unsplash.com/photo-1676311708279-3fa0627eaf74?auto=format&w=2000&q=85&fit=max)] bg-cover bg-center px-8 py-24">
        <div className="absolute inset-0 h-full w-full bg-black/60" />
        <div className="relative z-10 container mx-auto text-center">
          <Badge className="border-white bg-white text-black">Premium</Badge>
          <h2 className="my-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
            See Our Pricing
          </h2>
          <p className="mx-auto max-w-2xl text-base [text-wrap:_balance] text-white/90 md:text-lg">
            You have Free Unlimited Updates and Premium Support on each package
          </p>
        </div>
      </div>
      <div className="relative z-10 container mx-auto -mt-16 grid gap-6 px-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-0">
        {PLANS.map(({ title, price, options }, key) => (
          <Card
            key={key}
            className={`transition-all hover:shadow-xl lg:h-max ${
              title === "PRO"
                ? "z-10 translate-y-0 lg:scale-105"
                : "lg:translate-y-6 lg:scale-105"
            }`}
          >
            <CardHeader className="m-0 w-full space-y-4 p-6">
              <div className="flex justify-center">
                <Badge
                  variant={title === "PRO" ? "default" : "secondary"}
                  className="text-sm"
                >
                  {title}
                </Badge>
              </div>
              <div className="flex justify-center text-center text-5xl font-bold">
                <span className="text-muted-foreground text-xl">$</span>
                {price}
                <span className="text-muted-foreground -translate-y-1 self-end text-xl">
                  /mo
                </span>
              </div>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <ul className="mx-auto flex flex-col gap-3">
                {options.map(({ feature, included }, idx) => (
                  <li
                    key={idx}
                    className={`flex items-center gap-3 text-sm ${
                      included ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {included ? (
                      <Check className="h-4 w-4 shrink-0 stroke-2 text-green-600" />
                    ) : (
                      <X className="h-4 w-4 shrink-0 stroke-2 text-black" />
                    )}
                    <p>{feature}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="px-6 pt-4 pb-6">
              <Button
                className="group w-full"
                size="lg"
                variant={title === "PRO" ? "default" : "outline"}
              >
                {title === "PRO" ? "Try PRO" : "Get Started"}
                <ArrowRight className="ml-2 h-4 w-4 stroke-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
