"use client"

import { Card, CardContent } from "@/components/ui/card"

const FEATURES = [
  {
    title: "323",
    description:
      "Of 'high-performing' level are led by a certified project manager",
  },
  {
    title: "500+",
    description: "That meets quality standards required by our users",
  },
  {
    title: "24/7",
    description: "Actively engage team members that finishes on time",
  },
  {
    title: "70",
    description: "Team members that finishes on time every project",
  },
]

export default function FeaturesBlockWithStats() {
  return (
    <section className="py-16">
      <div className="container mx-auto grid grid-cols-1 place-items-center gap-y-12 lg:grid-cols-3">
        <div className="col-span-full lg:col-span-1">
          <img
            src="https://v3.material-tailwind.com/mobile-mockup.png"
            alt="mobile mockup"
            className="max-h-96 w-full scale-x-[-1] sm:max-h-[34rem]"
          />
        </div>
        <div className="col-span-2 mx-auto max-w-xl">
          <h2 className="text-foreground mb-2 text-2xl font-bold">
            Free Material Design Resources
          </h2>
          <p className="text-foreground mb-12 text-lg">
            We&apos;re constantly trying to express ourselves and actualize our
            dreams.
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12">
            {FEATURES.map(({ title, description }) => (
              <Card key={title} className="border-0 bg-transparent shadow-none">
                <CardContent className="grid p-0">
                  <h5 className="text-foreground text-3xl font-bold">
                    {title}
                  </h5>
                  <p className="text-foreground">{description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
