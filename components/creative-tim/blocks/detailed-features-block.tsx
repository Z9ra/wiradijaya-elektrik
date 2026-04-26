"use client"

import { CheckCircle, Lightbulb, Zap } from "lucide-react"

export default function DetailedFeaturesBlock() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto space-y-16 px-4 lg:space-y-24">
        <div className="grid items-center gap-8 md:grid-cols-2 lg:gap-12">
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1573588028698-f4759befb09a?auto=format&w=2000&q=85"
              alt="Team collaboration"
              className="h-full max-h-[34rem] w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>

          <div className="space-y-6 md:pl-8">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-neutral-900 text-white">
              <Zap className="h-7 w-7" />
            </div>

            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium dark:bg-neutral-800">
                <span>Powerful Features</span>
              </div>

              <h2 className="text-3xl font-bold [text-wrap:balance] md:text-4xl lg:text-5xl">
                Everything You Need to Build Better Products
              </h2>
            </div>

            <p className="text-muted-foreground text-base leading-relaxed md:text-lg">
              Our comprehensive toolkit provides all the resources you need to
              create exceptional digital experiences from start to finish.
            </p>

            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-neutral-900" />
                <span className="text-foreground text-sm">
                  Production-ready components built with accessibility in mind
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-neutral-900" />
                <span className="text-foreground text-sm">
                  Comprehensive documentation with live code examples
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-neutral-900" />
                <span className="text-foreground text-sm">
                  Dedicated support team ready to help you succeed
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid items-center gap-8 md:grid-cols-2 lg:gap-12">
          <div className="order-2 space-y-6 md:order-1 md:pr-8">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-neutral-900 text-white">
              <Lightbulb className="h-7 w-7" />
            </div>

            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium dark:bg-neutral-800">
                <span>Smart Solutions</span>
              </div>

              <h2 className="text-3xl font-bold [text-wrap:balance] md:text-4xl lg:text-5xl">
                Intelligent Features That Adapt to Your Needs
              </h2>
            </div>

            <p className="text-muted-foreground text-base leading-relaxed md:text-lg">
              Experience next-generation features designed to streamline your
              workflow and enhance productivity across your entire team.
            </p>

            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-neutral-900" />
                <span className="text-foreground text-sm">
                  Real-time notifications keeping you updated on what matters
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-neutral-900" />
                <span className="text-foreground text-sm">
                  Advanced analytics providing actionable insights
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-neutral-900" />
                <span className="text-foreground text-sm">
                  Customizable workflows that scale with your business
                </span>
              </li>
            </ul>
          </div>

          <div className="relative order-1 overflow-hidden rounded-2xl md:order-2">
            <img
              src="https://images.unsplash.com/photo-1615221025584-086389c99592?auto=format&w=2000&q=85&fit=max"
              alt="Smart workspace"
              className="h-full max-h-[34rem] w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
