"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

const FEATURES = [
  {
    img: "https://v3.material-tailwind.com/icon/coinbase.svg",
    title: "Payment vendor",
    description:
      "Check out our proven methods, guides, and exercises that help make work better, and people happier.",
  },
  {
    img: "https://v3.material-tailwind.com/icon/google.svg",
    title: "Organize your team",
    description:
      "Check out our proven methods, guides, and exercises that help make work better, and people happier.",
  },
  {
    img: "https://v3.material-tailwind.com/icon/amazon.svg",
    title: "E-commerce",
    description:
      "Check out our proven methods, guides, and exercises that help make work better, and people happier.",
  },
  {
    img: "https://v3.material-tailwind.com/icon/spotify.svg",
    title: "Digital Product Design",
    description:
      "Check out our proven methods, guides, and exercises that help make work better, and people happier.",
  },
  {
    img: "https://v3.material-tailwind.com/icon/discord.svg",
    title: "Better Communication",
    description:
      "Check out our proven methods, guides, and exercises that help make work better, and people happier.",
  },
  {
    img: "https://v3.material-tailwind.com/icon/figma.svg",
    title: "Logo design",
    description:
      "Check out our proven methods, guides, and exercises that help make work better, and people happier.",
  },
]

export default function FeaturesBlockWithCtaButtonAndLogos() {
  return (
    <section className="py-16">
      <div className="container mx-auto mb-10 text-center lg:mb-20">
        <h2 className="text-foreground mb-4 text-3xl font-bold">
          Everything you get with Material Tailwind
        </h2>
        <p className="text-foreground mx-auto max-w-3xl text-lg">
          Check out our proven methods, guides, and exercises that help make
          work better, and people happier.
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map(({ img, title, description }) => (
          <Card key={title} className="border-0 bg-transparent shadow-none">
            <CardHeader className="mx-0 mt-0 mb-6">
              <img src={img} alt={title} className="h-12 w-12" />
            </CardHeader>
            <CardContent className="p-0">
              <h6 className="text-foreground mb-2 text-lg font-semibold">
                {title}
              </h6>
              <p className="text-foreground mb-8">{description}</p>
              <Button variant="outline">Learn more</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
