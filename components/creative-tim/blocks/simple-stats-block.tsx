"use client"

import { Card, CardContent } from "@/components/ui/card"

const STATS = [
  {
    count: "1,200+",
    title: "Projects",
    desc: "Of 'high-performing' level are led by a certified manager",
  },
  {
    count: "500+",
    title: "Sections",
    desc: "That meets quality standards required by our users",
  },
  {
    count: "24/7",
    title: "Support",
    desc: "Actively engage team members that finishes on time",
  },
]

export default function SimpleStatsBlock() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {STATS.map(({ count, title, desc }, index) => (
            <Card key={index} className="border-0 text-center">
              <CardContent className="pt-6">
                <h2 className="text-4xl font-bold">{count}</h2>
                <h6 className="mt-6 mb-2 text-lg font-semibold">{title}</h6>
                <p className="text-foreground mx-auto max-w-sm [text-wrap:_balance]">
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
