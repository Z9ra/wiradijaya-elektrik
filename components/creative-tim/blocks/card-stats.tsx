"use client"

import { Card, CardContent } from "@/components/ui/card"

const STATS = [
  {
    image: "https://v3.material-tailwind.com/logo/spotify.svg",
    count: "9,340+",
    title: "Hours of Streaming Content",
  },
  {
    image: "https://v3.material-tailwind.com/logo/netflix.svg",
    count: "4,230+",
    title: "Active User Sessions",
  },
  {
    image: "https://v3.material-tailwind.com/logo/pinterest.svg",
    count: "3,200+",
    title: "Creative Boards Created",
  },
  {
    image: "https://v3.material-tailwind.com/logo/coinbase.svg",
    count: "40%",
    title: "Average Growth Rate",
  },
]

export default function CardStats() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 md:mb-20">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium dark:bg-neutral-800">
            <span>Platform Metrics</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold [text-wrap:balance] md:text-4xl lg:text-5xl">
            Trusted by Industry Leaders Worldwide
          </h2>
          <p className="text-muted-foreground max-w-2xl text-base leading-relaxed md:text-lg">
            Join thousands of successful businesses leveraging our platform to
            drive growth, engagement, and innovation. Our numbers speak for
            themselves—see the impact we're making across industries.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map(({ image, count, title }, index) => (
            <Card
              key={index}
              className="bg-card border p-6 text-center shadow-sm transition-all hover:border-neutral-900 hover:shadow-md"
            >
              <CardContent className="pt-6">
                <img
                  src={image}
                  alt="company logo"
                  className="mx-auto mb-6 h-12 md:h-16"
                />
                <h3 className="mb-2 text-4xl font-bold md:text-5xl">{count}</h3>
                <p className="text-muted-foreground text-sm font-medium">
                  {title}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
