"use client"

import { Grid3x3, Heart, Lightbulb, MessageCircle } from "lucide-react"

import { Card, CardContent, CardHeader } from "@/components/ui/card"

const FEATURES = [
  {
    icon: MessageCircle,
    title: "Modular Components",
    description:
      "The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever.",
  },
  {
    icon: Heart,
    title: "Awesome Support",
    description:
      "The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color.",
  },
  {
    icon: Grid3x3,
    title: "Great Features",
    description:
      "People are so scared to lose that they don't even try. Like, one thing people can't say is that I'm not trying, and I'm not trying my hardest.",
  },
  {
    icon: Lightbulb,
    title: "Modern Interface",
    description:
      "If everything I did failed - which it doesn't, it actually succeeds - just the fact that I'm willing to fail is an inspiration.",
  },
]

export default function IconEnhancedFeaturesBlockWithBackground() {
  return (
    <section className="py-16">
      <div className="container mx-auto mb-12">
        <p className="text-primary font-semibold">co-working</p>
        <h2 className="text-foreground my-4 text-3xl font-bold">
          Full-Funnel Social Analytics
        </h2>
        <p className="text-foreground max-w-3xl text-lg">
          The time is now for it be okay to be great. People in this world shun
          people for being great. For being a bright color. For standing out.
          But the time is now to be okay to be the greatest you.
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map(({ icon: Icon, title, description }) => (
          <Card key={title} className="bg-surface-light border-0 shadow-none">
            <CardHeader className="mx-0 mt-0 mb-6">
              <div className="bg-primary text-primary-foreground grid h-12 w-12 place-items-center rounded-lg">
                <Icon className="h-6 w-6" />
              </div>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <h6 className="text-foreground mb-2 text-lg font-semibold">
                {title}
              </h6>
              <p className="text-foreground">{description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
