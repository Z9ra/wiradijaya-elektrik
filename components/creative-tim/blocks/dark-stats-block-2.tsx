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

export default function DarkStatsBlock2() {
  return (
    <section className="grid min-h-screen place-items-center bg-black">
      <div className="container mx-auto">
        <div className="mb-20 text-center">
          <p className="text-secondary block text-sm font-semibold">
            Our Activity
          </p>
          <h2 className="text-secondary my-4 text-4xl font-bold">
            Your life will be much easier
          </h2>
          <p className="mx-auto max-w-xl text-lg [text-wrap:_balance] text-white/80">
            We&apos;re constantly trying to express ourselves and actualize our
            dreams. If you have the opportunity to play
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map(({ count, title }, index) => (
            <Card
              key={index}
              className="grid justify-center border-0 bg-transparent"
            >
              <CardContent className="pt-6">
                <h1 className="text-secondary text-5xl font-bold">{count}</h1>
                <h6 className="text-secondary mt-6 text-lg font-semibold">
                  {title}
                </h6>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
