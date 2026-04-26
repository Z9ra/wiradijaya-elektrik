"use client"

import { ArrowRight, Sparkles, Users, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const LOGOS = [
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/9ce42b82642fce91f039df10e03229ae39a46f29/material-tailwind-pro/logo/amazon.svg",
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/9ce42b82642fce91f039df10e03229ae39a46f29/material-tailwind-pro/logo/coinbase.svg",
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/9ce42b82642fce91f039df10e03229ae39a46f29/material-tailwind-pro/logo/google.svg",
  "https://www.creative-tim.com/ui/logo-open-ai.png",
  "https://www.creative-tim.com/ui/logo-claude.png",
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/9ce42b82642fce91f039df10e03229ae39a46f29/material-tailwind-pro/logo/netflix.svg",
]

const DATA = [
  {
    icon: Zap,
    title: "Lightning Fast Performance",
    description:
      "Built with modern web technologies and optimized for speed. Experience blazing-fast load times and smooth interactions that keep users engaged.",
  },
  {
    icon: Users,
    title: "Enterprise-Grade Support",
    description:
      "Get dedicated assistance from our expert team. We're committed to helping you succeed with 24/7 support and comprehensive documentation.",
  },
  {
    icon: Sparkles,
    title: "Powerful Features",
    description:
      "Access a complete toolkit of advanced features designed for scalability. From analytics to automation, everything you need in one platform.",
  },
]

export default function ContentBlockWithLogos() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium dark:bg-neutral-800">
              <span>Trusted Worldwide</span>
            </div>
            <h2 className="text-3xl leading-tight font-bold [text-wrap:balance] md:text-4xl lg:text-5xl">
              Powering Innovation for Industry Leaders
            </h2>
            <p className="text-muted-foreground max-w-xl text-base leading-relaxed md:text-lg">
              Join thousands of forward-thinking companies who trust our
              platform to build exceptional digital experiences and drive
              growth.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8 lg:gap-12">
            {LOGOS.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center grayscale transition-all hover:grayscale-0"
              >
                <img
                  src={logo}
                  alt={`Company logo ${index + 1}`}
                  className="h-10 w-auto object-contain opacity-70 transition-opacity hover:opacity-100 md:h-12"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {DATA.map(({ icon: Icon, title, description }, key) => (
            <Card
              key={key}
              className="group border transition-all hover:border-neutral-900 hover:shadow-lg"
            >
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-neutral-900 text-white transition-all group-hover:scale-110">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-xl font-bold">{title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed [text-wrap:balance]">
                  {description}
                </p>
                <Button
                  variant="ghost"
                  className="group/btn h-auto gap-2 p-0 text-sm font-medium transition-all hover:gap-3 hover:bg-transparent"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
