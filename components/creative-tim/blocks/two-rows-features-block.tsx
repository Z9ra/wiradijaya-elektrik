"use client"

import { Eye, Files, Fingerprint, Grid3x3, Hash, Palette } from "lucide-react"

import { Card, CardContent, CardHeader } from "@/components/ui/card"

const FEATURES = [
  {
    icon: Grid3x3,
    title: "Social Conversations",
    description:
      "We get insulted by others, lose trust for those others. We get back stabbed by friends. It becomes harder for us to give others a hand.",
  },
  {
    icon: Fingerprint,
    title: "Analyze Performance",
    description:
      "Don't get your heart broken by people we love, even that we give them all we have. Then we lose family over time. As we live, our hearts turn colder.",
  },
  {
    icon: Palette,
    title: "Measure Conversions",
    description:
      "What else could rust the heart more over time? Blackgold. The time is now for it to be okay to be great. or being a bright color. For standing out.",
  },
  {
    icon: Hash,
    title: "Fully Integrated",
    description:
      "We get insulted by others, lose trust for those others. We get back stabbed by friends. It becomes harder for us to give others a hand.",
  },
  {
    icon: Eye,
    title: "Payments Functionality",
    description:
      "Don't get your heart broken by people we love, even that we give them all we have. Then we lose family over time. As we live, our hearts turn colder.",
  },
  {
    icon: Files,
    title: "Improved Platform",
    description:
      "What else could rust the heart more over time? Blackgold. The time is now for it to be okay to be great. or being a bright color. For standing out.",
  },
]

export default function TwoRowsFeaturesBlock() {
  return (
    <section className="py-16">
      <div className="container mx-auto mb-10 text-center lg:mb-20">
        <h2 className="text-foreground mb-4 text-3xl font-bold">
          Turn your idea into a startup
        </h2>
        <p className="text-foreground mx-auto max-w-xl text-lg">
          We&apos;re constantly trying to express ourselves and actualize our
          dreams. If you have the opportunity to play
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map(({ icon: Icon, title, description }) => (
          <Card key={title} className="border-0 bg-transparent shadow-none">
            <CardHeader className="mx-0 mt-0 mb-6">
              <Icon className="text-foreground h-6 w-6" />
            </CardHeader>
            <CardContent className="p-0">
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
