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

export default function StatsBlockWithLeftCenteredHeadline() {
  return (
    <section className="py-16">
      <div className="container mx-auto grid grid-cols-1 justify-items-center gap-10 lg:grid-cols-2">
        <div className="w-full">
          <p className="text-primary block text-sm font-semibold">Our Stats</p>
          <h2 className="mt-4 mb-2 max-w-sm text-4xl !leading-snug font-bold [text-wrap:_balance]">
            Your life will be much easier
          </h2>
          <p className="text-foreground max-w-md text-lg [text-wrap:_balance]">
            The moment you know youve never felt anything like it. With a single
            use, this powerfull UI Kit lets you do more than ever before.
          </p>
        </div>
        <div className="grid w-full grid-cols-2 gap-10">
          {STATS.map(({ count, title }, index) => (
            <Card key={index} className="border-0">
              <CardContent className="pt-6">
                <h1 className="text-4xl font-bold">{count}</h1>
                <h6 className="mt-4 text-lg font-semibold">{title}</h6>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
