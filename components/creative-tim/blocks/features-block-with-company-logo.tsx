"use client"

import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

const FEATURES = [
  {
    img: "https://v3.material-tailwind.com/logo/coinbase.svg",
    description:
      "We get insulted by others, lose trust for those others. We get back here to follow my dreams",
  },
  {
    img: "https://v3.material-tailwind.com/logo/pinterest.svg",
    description:
      "We get insulted by others, lose trust for those others. We get back here to follow my dreams.",
  },
  {
    img: "https://v3.material-tailwind.com/logo/netflix.svg",
    description:
      "We get insulted by others, lose trust for those others. We get back here to follow my dreams.",
  },
]

export default function FeaturesBlockWithCompanyLogo() {
  return (
    <section className="py-16">
      <div className="container mx-auto mb-24 text-center">
        <h2 className="text-foreground mb-4 text-3xl font-bold">
          Get your own app
        </h2>
        <p className="text-foreground mx-auto max-w-xl text-lg">
          The Arctic Ocean freezes every winter and much of the sea-ice then
          thaws every summer, and that process will continue whatever.
        </p>
      </div>
      <div className="container mx-auto grid w-full grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3">
        {FEATURES.map(({ img, description }, key) => (
          <Card key={key} className="border-0 bg-transparent shadow-none">
            <CardHeader className="mx-0 mt-0 w-full">
              <img src={img} alt="image" className="mx-auto h-16" />
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-foreground mb-8 text-center">{description}</p>
              <Button
                variant="ghost"
                className="mx-auto flex h-auto p-0 hover:bg-transparent"
              >
                Read more
                <ArrowRight className="ml-2 h-3.5 w-3.5" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
