"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PricingWithSwitcher() {
  const [type, setType] = React.useState("monthly")

  const PLANS = [
    {
      title: "Freelance",
      price: type === "monthly" ? 59 : 199,
      options: ["3 Projects", "1 Team Member", "Basic Support", "50 Messages"],
    },
    {
      title: "Startup",
      price: type === "monthly" ? 99 : 299,
      options: [
        "10 Projects",
        "1 Team Member",
        "Basic Support",
        "100 Messages",
      ],
    },
    {
      title: "Company",
      price: type === "monthly" ? 129 : 399,
      options: [
        "50 Projects",
        "10 Team Members",
        "Premium Support",
        "500 Messages",
      ],
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="mb-10 text-center">
          <h2 className="text-foreground mb-4 text-3xl font-bold tracking-tight">
            Choose a plan for your next project
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            You have Free Unlimited Updates and Premium Support on each package.
            You also have 20 days to request a refund.
          </p>
        </div>
        <Tabs value={type} onValueChange={setType} className="mx-auto w-72">
          <TabsList className="w-full">
            <TabsTrigger className="w-full" value="monthly">
              Monthly
            </TabsTrigger>
            <TabsTrigger className="w-full" value="annual">
              Annual
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PLANS.map(({ title, price, options }, key) => (
            <Card key={key}>
              <CardHeader className="m-0 w-full p-4">
                <Card className="bg-primary grid place-items-center rounded p-6 text-center">
                  <div>
                    <p className="text-lg text-white">{title}</p>
                    <h3 className="my-4 text-5xl font-bold text-white">
                      ${price}
                    </h3>
                    <p className="text-lg text-white">
                      per {type === "monthly" ? "month" : "year"}
                    </p>
                  </div>
                </Card>
              </CardHeader>
              <CardContent className="relative z-10 text-center">
                <ul className="divide-border mx-auto max-w-[16rem] divide-y text-center">
                  {options.map((option, key) => (
                    <li key={key} className="text-foreground py-4">
                      {option}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-6">
                <Button size="lg" className="w-full">
                  Request a Demo
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
