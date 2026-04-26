"use client"

import { Edit, FileText, Phone, Play } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

const STATS = [
  {
    icon: FileText,
    count: "1,200+",
    title: "Projects",
  },
  {
    icon: Play,
    count: "1,000+",
    title: "Components",
  },
  {
    icon: Edit,
    count: "500+",
    title: "Sections",
  },
  {
    icon: Phone,
    count: "24/7",
    title: "Support",
  },
]

export default function StatsWithIcons() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="mb-20 text-center">
          <h2 className="mb-4 text-3xl font-bold">
            Turn your idea into a startup
          </h2>
          <p className="text-foreground mx-auto max-w-xl text-lg [text-wrap:_balance]">
            We&apos; constantly trying to express ourselves and actualize our
            dreams. If you have the opportunity to play
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map(({ icon: Icon, count, title }, index) => (
            <Card key={index} className="border-0 text-center">
              <CardContent className="pt-6">
                <Icon className="mx-auto h-6 w-6" />
                <h2 className="my-5 text-4xl font-bold">{count}</h2>
                <p className="text-foreground">{title}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
