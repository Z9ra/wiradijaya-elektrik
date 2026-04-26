"use client"

import { Fingerprint, Flame, MousePointerClick } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const STATS = [
  {
    icon: MousePointerClick,
    percentage: "35%",
    desc: "YoY growth in active users",
    percentage2: "45%",
    desc2: "Increase in project completion rate",
  },
  {
    icon: Fingerprint,
    percentage: "85%",
    desc: "Decrease in churn rate",
    percentage2: "150%",
    desc2: "Growth in user engagement",
  },
  {
    icon: Flame,
    percentage: "70%",
    desc: "Reduction in development time",
    percentage2: "$12M",
    desc2: "Raised in latest funding round",
  },
]

export default function StatsBlockWithDescription2() {
  return (
    <section className="container mx-auto py-16">
      <div className="mb-20">
        <p className="text-primary text-lg font-semibold">Impacts</p>
        <h2 className="my-4 max-w-2xl text-3xl !leading-tight font-bold">
          Trusted by over 5,000 businesses to improve their digital growth with
          us.
        </h2>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <p className="text-foreground max-w-3xl text-lg [text-wrap:_balance]">
            Your commitment to health is inspiring and your stats show it. Your
            contributions have made a significant impact in your community.
          </p>
          <Button variant="outline" className="shrink-0">
            Explore More Success Stories
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {STATS.map(
          ({ icon: Icon, percentage, desc, percentage2, desc2 }, index) => (
            <Card key={index} className="p-4">
              <CardContent className="pt-6">
                <Icon className="h-10 w-10" />
                <h4 className="mt-6 mb-2 text-2xl font-bold">{percentage}</h4>
                <p className="text-foreground">{desc}</p>
                <h4 className="mt-6 mb-2 text-2xl font-bold">{percentage2}</h4>
                <p className="text-foreground">{desc2}</p>
              </CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  )
}
