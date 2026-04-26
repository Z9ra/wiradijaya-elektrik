"use client"

import { Card, CardContent } from "@/components/ui/card"

const STATS = [
  {
    count: "15,000M",
    title: "Marathon Runner Progress",
    desc: "You're racing ahead in your marathon training goals.",
  },
  {
    count: "$10,000+",
    title: "Invested",
    desc: "Your financial acumen is paying off—literally.",
  },
  {
    count: "4,500+",
    title: "Hours of Exercise",
    desc: "Your commitment to health is inspiring and your stats show it.",
  },
  {
    count: "8,200+",
    title: "Volunteer Hours",
    desc: "Your contributions have made an impact in your community.",
  },
]

export default function DefaultStatsBlock() {
  return (
    <section className="container mx-auto py-16">
      <div className="mb-20">
        <h2 className="mb-4 text-3xl font-bold">
          Turn your idea into a startup
        </h2>
        <p className="text-foreground max-w-3xl text-lg [text-wrap:_balance]">
          We&apos;re constantly trying to express ourselves and actualize our
          dreams. If you have the opportunity to play
        </p>
      </div>
      <div className="grid grid-cols-1 justify-items-center gap-x-20 gap-y-10 lg:grid-cols-2">
        <Card className="bg-surface/20 w-full border-0 px-4 py-20 text-center">
          <h2 className="text-primary text-4xl font-bold">1,000Kg</h2>
          <h6 className="mt-6 mb-12 text-lg font-semibold">
            CO2 Emissions Offset
          </h6>
          <h5 className="mb-2 text-xl font-bold">Eco Warrior Achievement</h5>
          <p className="text-foreground mx-auto max-w-md [text-wrap:_balance]">
            Congratulations on reaching a new milestone in environmental
            stewardship!
          </p>
        </Card>
        <div className="grid w-full grid-cols-1 gap-10 sm:grid-cols-2">
          {STATS.map(({ count, title, desc }, index) => (
            <Card key={index} className="max-w-xs border-0">
              <CardContent className="pt-6">
                <h1 className="pb-4 text-3xl font-bold">{count}</h1>
                <h1 className="mb-2 border-t pt-4 text-lg font-semibold">
                  {title}
                </h1>
                <p className="text-foreground max-w-xs [text-wrap:_balance]">
                  {desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
