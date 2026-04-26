"use client"

import { Card, CardContent } from "@/components/ui/card"

const STATS = [
  {
    count: "1,200+",
    title: "Projects",
  },
  {
    count: "1,000+",
    title: "Components",
  },
  {
    count: "500+",
    title: "Sections",
  },
  {
    count: "24/7",
    title: "Support",
  },
]

export default function SimpleStatsBlockWithTitles() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="mb-20 text-center">
          <p className="text-primary block text-sm font-semibold">
            Our Activity
          </p>
          <h1 className="my-4 text-4xl font-bold">
            Your life will be much easier
          </h1>
          <p className="text-foreground mx-auto max-w-xl text-lg [text-wrap:_balance]">
            We&apos;re constantly trying to express ourselves and actualize our
            dreams. If you have the opportunity to play
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map(({ count, title }, index) => (
            <Card key={index} className="border-0 text-center">
              <CardContent className="pt-6">
                <h2 className="text-4xl font-bold">{count}</h2>
                <h6 className="mt-6 text-lg font-semibold">{title}</h6>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
