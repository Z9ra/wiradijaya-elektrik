"use client"

import { ArrowRight, Headset, Layers, Rocket } from "lucide-react"

import { Button } from "@/components/ui/button"

const FEATURES = [
  {
    icon: Rocket,
    title: "Fast Deployment",
    description:
      "Launch your projects quickly with streamlined deployment pipelines and automated workflows.",
  },
  {
    icon: Headset,
    title: "24/7 Support",
    description:
      "Get expert assistance anytime with our dedicated support team ready to help you succeed.",
  },
  {
    icon: Layers,
    title: "Flexible Integration",
    description:
      "Seamlessly connect with your existing tools and services through our robust API ecosystem.",
  },
]

export default function FeaturesBlockWithIconsAndCta() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center lg:mb-20">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-neutral-100 px-4 py-1.5 text-sm font-medium dark:bg-neutral-800">
            <span>Why Choose Us</span>
          </div>

          <h2 className="mb-4 text-3xl font-bold [text-wrap:balance] md:text-4xl lg:text-5xl">
            Everything You Need to Succeed
          </h2>

          <p className="text-muted-foreground mx-auto max-w-2xl text-base [text-wrap:balance] md:text-lg">
            Powerful features designed to help you build, deploy, and scale your
            applications with confidence and ease.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {FEATURES.map(({ icon: Icon, title, description }) => (
            <div key={title} className="group">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-neutral-900 text-white transition-transform group-hover:scale-110">
                <Icon className="h-7 w-7" />
              </div>

              <h3 className="mb-3 text-xl font-semibold">{title}</h3>

              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                {description}
              </p>

              <Button
                variant="ghost"
                className="h-auto p-0 text-neutral-900 transition-colors hover:bg-transparent hover:text-neutral-700"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
