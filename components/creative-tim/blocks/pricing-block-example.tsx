"use client"

import { Check, Minus } from "lucide-react"

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
    desc: "Free access for 2 members",
    price: 129,
    options: [
      { label: "Complete documentation", included: true },
      { label: "Working materials in Sketch", included: true },
      { label: "Integration help", included: false },
      { label: "40GB Cloud storage", included: false },
      { label: "Support team full assist", included: false },
    ],
  },
  {
    title: "Premium",
    desc: "Free access for 30 members",
    price: 299,
    options: [
      { label: "Complete documentation", included: true },
      { label: "Working materials in Sketch", included: true },
      { label: "Integration help", included: true },
      { label: "40GB Cloud storage", included: true },
      { label: "Support team full assist", included: false },
    ],
  },
  {
    title: "Company",
    desc: "Free access for 200 members",
    price: 399,
    options: [
      { label: "Complete documentation", included: true },
      { label: "Working materials in Sketch", included: true },
      { label: "Integration help", included: true },
      { label: "40GB Cloud storage", included: true },
      { label: "Support team full assist", included: true },
    ],
  },
]

export default function PricingBlockExample() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <p className="text-muted-foreground text-sm font-medium tracking-wider uppercase">
            Pricing Plans
          </p>
          <h2 className="my-4 max-w-2xl text-3xl font-bold tracking-tight [text-wrap:balance] md:text-4xl">
            Invest in a plan that&apos;s as ambitious as your corporate goals.
          </h2>
          <p className="text-muted-foreground max-w-2xl text-base md:text-lg">
            Compare the benefits and features of each plan below to find the
            ideal match for your business&apos;s budget and ambitions.
          </p>
        </div>
        <div className="grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PLANS.map(({ title, desc, options, price }, key) => (
            <Card key={key} className="transition-all hover:shadow-lg">
              <CardHeader className="m-0 w-full space-y-4 p-6">
                <div>
                  <h3 className="mb-2 text-xl font-bold">{title}</h3>
                  <p className="text-muted-foreground text-sm">{desc}</p>
                </div>
                <div className="text-4xl font-bold">
                  ${price}
                  <span className="text-muted-foreground self-end text-lg font-normal">
                    /year
                  </span>
                </div>
              </CardHeader>
              <CardContent className="px-6 py-6">
                <ul className="flex flex-col gap-3">
                  {options.map(({ label, included }, idx) => (
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
                      <p>{label}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button className="w-full" size="lg">
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <p className="text-muted-foreground mt-8 text-sm">
          You have Free Unlimited Updates and Premium Support on each package.
          You also have 30 days to request a refund.
        </p>
      </div>
    </section>
  )
}
