"use client"

import { ArrowRight, Code, Layers, Shield, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const FEATURES = [
  {
    icon: Zap,
    title: "Lightning Performance",
    description:
      "Optimized components with minimal overhead for blazing-fast load times.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Built with security best practices to protect your application and data.",
  },
  {
    icon: Layers,
    title: "Modular Architecture",
    description:
      "Flexible components that adapt to your specific needs and workflows.",
  },
  {
    icon: Code,
    title: "Developer Experience",
    description:
      "Intuitive APIs and comprehensive documentation for rapid development.",
  },
]

export default function FeaturesBlockWithCard() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-3 lg:gap-12">
          <div className="order-2 col-span-1 grid grid-cols-1 gap-8 sm:grid-cols-2 md:order-1 md:col-span-2">
            {FEATURES.map(({ icon: Icon, title, description }) => (
              <div key={title} className="group">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-100 transition-all group-hover:bg-neutral-900 group-hover:text-white dark:bg-neutral-800">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mb-2 text-lg font-semibold">{title}</h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>

          <Card className="order-1 col-span-1 rounded-2xl border-2 bg-gradient-to-br from-neutral-50 to-neutral-100 p-8 shadow-lg md:order-2 dark:from-neutral-900 dark:to-neutral-800">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-900 text-white">
              <Layers className="h-6 w-6" />
            </div>

            <h3 className="mb-3 text-2xl font-bold">Ready to Get Started?</h3>

            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
              Discover how our comprehensive component library can accelerate
              your development workflow and help you build better products
              faster.
            </p>

            <Button className="w-full bg-neutral-900 transition-all hover:bg-neutral-800">
              Explore Components
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Card>
        </div>
      </div>
    </section>
  )
}
