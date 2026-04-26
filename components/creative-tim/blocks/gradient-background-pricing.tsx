"use client"

import * as React from "react"
import { ArrowRight, Check, Minus } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const DATA = [
  {
    title: "Starter",
    price: {
      monthly: 59,
      annual: 119,
    },
    options: [
      { feature: "2 team members", included: true },
      { feature: "20GB Cloud storage", included: true },
      { feature: "Integration help", included: false },
      { feature: "Sketch Files", included: false },
      { feature: "API Access", included: false },
      { feature: "Complete documentation", included: true },
    ],
  },
  {
    title: "premium",
    price: {
      monthly: 89,
      annual: 159,
    },
    options: [
      { feature: "10 team members", included: true },
      { feature: "40GB Cloud storage", included: true },
      { feature: "Integration help", included: true },
      { feature: "Sketch Files", included: true },
      { feature: "API Access", included: true },
      { feature: "Complete documentation", included: true },
    ],
  },
  {
    title: "enterprise",
    price: {
      monthly: 99,
      annual: 399,
    },
    options: [
      { feature: "Unlimited team members", included: true },
      { feature: "100GB Cloud storage", included: true },
      { feature: "Integration help", included: true },
      { feature: "Sketch Files", included: true },
      { feature: "API Access", included: true },
      { feature: "Complete documentation", included: true },
    ],
  },
]

export default function GradientBackgroundPricing() {
  const [type, setType] = React.useState("monthly")

  return (
    <section className="p-4">
      <div className="min-h-[50vh] rounded-xl bg-gradient-to-b from-neutral-900 to-neutral-950 px-8 py-24">
        <div className="container mx-auto text-center">
          <p className="text-sm font-medium tracking-wider text-white/60 uppercase">
            Pricing
          </p>
          <h2 className="my-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
            See Our Pricing
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-base [text-wrap:_balance] text-white/70 md:text-lg">
            Creative Tim UI has got you covered. With our awesome plans it has
            never been easier to design beautiful interfaces.
          </p>
          <Tabs
            value={type}
            onValueChange={setType}
            className="mx-auto w-full max-w-xs"
          >
            <TabsList className="grid w-full grid-cols-2 bg-white/10">
              <TabsTrigger
                className="text-white data-[state=active]:bg-white data-[state=active]:text-neutral-900"
                value="monthly"
              >
                Monthly
              </TabsTrigger>
              <TabsTrigger
                className="text-white data-[state=active]:bg-white data-[state=active]:text-neutral-900"
                value="annual"
              >
                Annual
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>
      <div className="-mt-32 px-8 pt-8 pb-16">
        <div className="container mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {DATA.map(({ title, price, options }, key) => (
            <Card
              key={key}
              className={`overflow-visible transition-all hover:shadow-xl ${
                title === "premium" ? "scale-105 shadow-lg" : ""
              }`}
            >
              <CardHeader className="relative m-0 w-full px-6 py-12">
                <Badge
                  variant={title === "premium" ? "default" : "secondary"}
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  <span className="capitalize">{title}</span>
                </Badge>
                <div className="flex justify-center text-center text-5xl font-bold">
                  <span className="text-muted-foreground text-xl">$</span>
                  {price[type as keyof typeof price]}
                  <span className="text-muted-foreground -translate-y-1 self-end text-xl">
                    /{type === "monthly" ? "mo" : "yr"}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="px-6 py-6">
                <ul className="flex flex-col gap-4">
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
                        <Minus className="h-4 w-4 shrink-0 stroke-2 text-black" />
                      )}
                      <p>{feature}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button
                  className="group w-full"
                  size="lg"
                  variant={title === "premium" ? "default" : "outline"}
                >
                  {title === "premium" ? "Try Premium" : "Get Started"}
                  <ArrowRight className="ml-2 h-4 w-4 stroke-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
