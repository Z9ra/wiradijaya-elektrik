"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const PLAN_ONE = {
  title: {
    freelancer: "Standard",
    startup: "Gold",
  },
  price: {
    freelancer: 25,
    startup: 100,
  },
  options: {
    freelancer: ["20GB File Storage", "15 Users", "Standard Support"],
    startup: ["200GB File Storage", "Unlimited Users", "Premium Support"],
  },
}

const PLAN_TWO = {
  title: {
    freelancer: "Premium",
    startup: "Platinum",
  },
  price: {
    freelancer: 59,
    startup: 135,
  },
  options: {
    freelancer: ["50GB File Storage", "100 Users", "Premium Support"],
    startup: ["500GB File Storage", "Unlimited Users", "No time Tracking"],
  },
}

export default function PricingBlockWithSwitcher() {
  const [type, setType] = React.useState<"freelancer" | "startup">("freelancer")

  return (
    <section className="container mx-auto py-16">
      <div className="grid grid-cols-1 items-center justify-between gap-x-12 lg:grid-cols-2">
        <div className="max-w-md py-10">
          <h2 className="text-foreground mb-4 text-3xl font-bold tracking-tight [text-wrap:balance]">
            Choose a plan for your next project
          </h2>
          <p className="text-muted-foreground text-lg">
            You have Free Unlimited Updates and Premium Support on each package.
            You also have 20 days to request a refund.
          </p>
          <Tabs
            value={type}
            onValueChange={(value) =>
              setType(value as "freelancer" | "startup")
            }
            className="mt-8 w-72"
          >
            <TabsList className="w-full">
              <TabsTrigger className="w-full" value="freelancer">
                Freelancer
              </TabsTrigger>
              <TabsTrigger className="w-full" value="startup">
                Startup
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <Card className="flex flex-col justify-between">
              <CardHeader className="m-0 w-full p-6 text-center">
                <h3 className="text-foreground text-lg font-semibold">
                  {PLAN_ONE.title[type]}
                </h3>
              </CardHeader>
              <CardContent className="p-6">
                <div className="mb-6 text-center">
                  <h4 className="text-foreground text-5xl font-bold">
                    ${PLAN_ONE.price[type]}
                  </h4>
                  <p className="text-muted-foreground mt-2">per month</p>
                </div>
                <ul className="space-y-2 text-center">
                  {PLAN_ONE.options[type].map((option, key) => (
                    <li key={key} className="text-foreground">
                      {option}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-6">
                <Button size="lg" className="w-full">
                  Request a demo
                </Button>
              </CardFooter>
            </Card>
            <Card className="bg-primary flex flex-col justify-between">
              <CardHeader className="m-0 w-full p-6 text-center">
                <h3 className="text-lg font-semibold text-white">
                  {PLAN_TWO.title[type]}
                </h3>
              </CardHeader>
              <CardContent className="p-6">
                <div className="mb-6 text-center">
                  <h4 className="text-5xl font-bold text-white">
                    ${PLAN_TWO.price[type]}
                  </h4>
                  <p className="mt-2 text-white/80">per month</p>
                </div>
                <ul className="space-y-2 text-center">
                  {PLAN_TWO.options[type].map((option, key) => (
                    <li key={key} className="text-white">
                      {option}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-6">
                <Button
                  size="lg"
                  className="w-full border-white bg-white text-black hover:border-white hover:bg-white"
                >
                  Request a demo
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
