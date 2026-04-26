"use client"

import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const PLANS = [
  {
    title: "Starter",
    desc: "Free access for 2 members",
    price: "$199",
    options: [
      "Complete documentation",
      "Working materials in Sketch",
      "Integration help",
      "40GB Cloud storage",
    ],
  },
  {
    title: "Premium",
    desc: "Free access for 2 members",
    price: "$499",
    options: [
      "Complete documentation",
      "Working materials in Sketch",
      "Integration help",
      "100GB Cloud storage",
    ],
  },
]

export default function HorizontalPricing() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="mb-16">
          <p className="text-primary font-semibold">Pricing Plans</p>
          <h2 className="text-foreground my-4 text-3xl font-bold tracking-tight">
            Choose Your Perfect Plan
          </h2>
          <p className="text-muted-foreground max-w-lg text-lg">
            Compare the benefits and features of each plan below to find the
            ideal match for your business&apos;s budget and ambitions.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
          {PLANS.map(({ title, desc, price, options }, key) => (
            <Card
              key={key}
              className="flex flex-col justify-between gap-y-6 p-6 sm:flex-row sm:items-center"
            >
              <div>
                <h3 className="text-foreground text-xl font-bold">{title}</h3>
                <p className="text-muted-foreground mt-2 mb-4 block text-sm">
                  {desc}
                </p>
                <div className="text-foreground mb-4 text-3xl font-bold">
                  {price}
                  <span className="text-muted-foreground self-end text-lg font-normal">
                    /year
                  </span>
                </div>
                <Button className="w-full sm:w-auto">Buy Now</Button>
              </div>
              <ul className="sm:border-border flex flex-col gap-3 border-0 px-0 sm:border-l sm:px-6">
                {options.map((option, key) => (
                  <li
                    key={key}
                    className="text-muted-foreground flex items-center gap-3 py-1"
                  >
                    <Check className="h-4 w-4 stroke-2 text-inherit" />
                    <p className="text-sm">{option}</p>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        <Card className="mt-6 flex flex-col justify-between gap-y-6 p-6 md:flex-row md:items-center">
          <div className="flex flex-col gap-x-6 md:flex-row">
            <div>
              <h3 className="text-foreground text-xl font-bold">Company</h3>
              <p className="text-muted-foreground mt-2 block text-sm">
                Access for 10+ members.
              </p>
            </div>
            <div className="md:border-border mt-6 border-0 px-0 md:mt-0 md:border-l md:px-6">
              <p className="text-foreground mb-1 block text-sm font-semibold">
                Dedicated account management
              </p>
              <p className="text-muted-foreground block max-w-sm text-sm">
                Custom integrations, and strategic consultations to ensure your
                growth trajectory remains on the steepest curve.
              </p>
            </div>
          </div>
          <div>
            <Button variant="outline" className="w-full md:max-w-fit">
              Contact Us
            </Button>
          </div>
        </Card>
        <p className="text-muted-foreground mt-8 block text-sm">
          You have Free Unlimited Updates and Premium Support on each package.
          You also have 30 days to request a refund.
        </p>
      </div>
    </section>
  )
}
