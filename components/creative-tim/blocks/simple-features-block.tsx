"use client"

import { ArrowRight, Layers, Palette, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"

const FEATURES = [
  {
    icon: Layers,
    content:
      "Built with modular components that seamlessly integrate with your existing workflow and design system.",
  },
  {
    icon: Palette,
    content:
      "Fully customizable themes and styles to match your brand identity with flexible design tokens.",
  },
  {
    icon: Zap,
    content:
      "Optimized for performance with lightning-fast load times and smooth interactions across all devices.",
  },
]

export default function SimpleFeaturesBlock() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid w-full grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="lg:sticky lg:top-24">
            <div className="inline-flex items-center gap-2 rounded-full bg-neutral-100 px-4 py-1.5 text-sm font-medium dark:bg-neutral-800">
              <span>Why Choose Us</span>
            </div>

            <h2 className="mt-6 text-3xl font-bold [text-wrap:balance] md:text-4xl lg:text-5xl">
              Built for Modern Development
            </h2>

            <p className="text-muted-foreground mt-4 max-w-lg text-base [text-wrap:balance] md:text-lg">
              Experience a comprehensive toolkit designed to accelerate your
              development workflow. Our solution combines powerful features with
              an intuitive interface.
            </p>

            <Button className="mt-8 bg-neutral-900 transition-all hover:bg-neutral-800">
              Explore Features
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid gap-8">
            {FEATURES.map(({ icon: Icon, content }, key) => (
              <div key={key} className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-neutral-100 dark:bg-neutral-800">
                  <Icon className="h-6 w-6 text-neutral-900 dark:text-white" />
                </div>
                <div className="flex-1 pt-1">
                  <p className="text-foreground text-base leading-relaxed md:text-lg">
                    {content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
