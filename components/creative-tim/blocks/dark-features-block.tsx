"use client"

import { Box, CreditCard, Home, Video } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

const FEATURES = [
  {
    icon: Video,
    title: "Fully Integrated",
    description:
      "We get insulted by others, lose trust for those We get back freezes",
  },
  {
    icon: CreditCard,
    title: "Payments Functionality",
    description:
      "We get insulted by others, lose trust for those We get back freezes",
  },
  {
    icon: Box,
    title: "Prebuilt Components",
    description:
      "We get insulted by others, lose trust for those We get back freezes",
  },
  {
    icon: Home,
    title: "Improved Platform",
    description:
      "We get insulted by others, lose trust for those We get back freezes",
  },
]

export default function DarkFeaturesBlock() {
  return (
    <section className="container mx-auto grid grid-cols-1 items-start gap-6 bg-black py-16 md:grid-cols-3 md:items-center">
      <div className="col-span-1 grid grid-cols-1 gap-12 sm:grid-cols-2 md:col-span-2">
        {FEATURES.map(({ icon: Icon, title, description }) => (
          <Card key={title} className="border-0 bg-transparent shadow-none">
            <CardHeader className="mx-0 mt-0 mb-4 w-full text-white">
              <Icon className="h-6 w-6" />
            </CardHeader>
            <CardContent className="p-0">
              <h6 className="mb-2 text-lg font-semibold text-white">{title}</h6>
              <p className="block max-w-xs text-white/80">{description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <Card className="col-span-1 border-0 bg-white/10 shadow-none">
        <CardContent className="grid p-6">
          <h6 className="mb-2 text-lg font-semibold text-white">
            Forget about messy code
          </h6>
          <p className="mb-8 text-white/80">
            You have the opportunity to play this game of life you need to
            appreciate every moment.
          </p>
          <Button variant="secondary">Read more</Button>
        </CardContent>
      </Card>
    </section>
  )
}
