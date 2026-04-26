"use client"

import { Code, Palette, Rocket, Zap } from "lucide-react"

const FEATURES = [
  {
    icon: Code,
    title: "Developer Friendly",
    description:
      "Clean, well-documented code with TypeScript support and comprehensive API documentation.",
  },
  {
    icon: Palette,
    title: "Customizable Design",
    description:
      "Flexible theming system with Tailwind CSS integration and fully customizable components.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Optimized performance with minimal bundle size and fast render times for better UX.",
  },
  {
    icon: Rocket,
    title: "Production Ready",
    description:
      "Battle-tested components used by thousands of developers in production applications.",
  },
]

export default function SimpleFeaturesBlockWithIcons() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center lg:mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-neutral-100 px-4 py-1.5 text-sm font-medium dark:bg-neutral-800">
            <span>Features</span>
          </div>

          <h2 className="mb-4 text-3xl font-bold [text-wrap:balance] md:text-4xl lg:text-5xl">
            Everything You Need to Build Faster
          </h2>

          <p className="text-muted-foreground mx-auto max-w-2xl text-base [text-wrap:balance] md:text-lg">
            A complete toolkit designed to help you build beautiful, accessible,
            and performant web applications with ease.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group bg-card relative rounded-2xl border p-6 transition-all hover:border-neutral-900 hover:shadow-lg"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-900 text-white transition-transform group-hover:scale-110">
                <Icon className="h-6 w-6" />
              </div>

              <h3 className="mb-2 text-lg font-semibold">{title}</h3>

              <p className="text-muted-foreground text-sm leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
