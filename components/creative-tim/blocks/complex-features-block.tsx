"use client"

import { ArrowRight, Layers, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function ComplexFeaturesBlock() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto space-y-16 px-4 lg:space-y-24">
        <div className="grid items-center gap-8 md:grid-cols-2 lg:gap-12">
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src="https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/creative-ai/bg-3.jpg"
              alt="Modern workspace"
              className="h-full max-h-[34rem] w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          <div className="space-y-6 md:pl-8">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-neutral-900 text-white">
              <Layers className="h-7 w-7" />
            </div>

            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium dark:bg-neutral-800">
                <span>Workspace</span>
              </div>

              <h2 className="text-3xl font-bold [text-wrap:balance] md:text-4xl lg:text-5xl">
                Collaborative Environment Built for Teams
              </h2>
            </div>

            <p className="text-muted-foreground text-base leading-relaxed md:text-lg">
              Transform your workflow with our integrated workspace designed for
              modern teams. Real-time collaboration, intelligent task
              management, and seamless communication tools help you stay
              productive and connected.
            </p>

            <p className="text-muted-foreground text-sm leading-relaxed">
              Built for scale and flexibility, our platform adapts to your
              team's unique needs while maintaining enterprise-grade security
              and reliability.
            </p>

            <Button className="bg-neutral-900 transition-all hover:bg-neutral-800">
              Explore Workspace
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid items-center gap-8 md:grid-cols-2 lg:gap-12">
          <div className="order-2 space-y-6 md:order-1 md:pr-8">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-neutral-900 text-white">
              <Sparkles className="h-7 w-7" />
            </div>

            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium dark:bg-neutral-800">
                <span>Automation</span>
              </div>

              <h2 className="text-3xl font-bold [text-wrap:balance] md:text-4xl lg:text-5xl">
                Intelligent Automation That Works for You
              </h2>
            </div>

            <p className="text-muted-foreground text-base leading-relaxed md:text-lg">
              Streamline repetitive tasks with smart automation. Our AI-powered
              system learns your patterns, suggests optimizations, and handles
              routine work so you can focus on what matters most.
            </p>

            <p className="text-muted-foreground text-sm leading-relaxed">
              From automated reports to intelligent task assignment, experience
              productivity gains that scale with your organization's growth.
            </p>

            <Button className="bg-neutral-900 transition-all hover:bg-neutral-800">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="relative order-1 overflow-hidden rounded-2xl md:order-2">
            <img
              src="https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/creative-ai/bg-2.jpg"
              alt="Automation dashboard"
              className="h-full max-h-[34rem] w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
