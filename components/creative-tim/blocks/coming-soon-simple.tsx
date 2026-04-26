"use client"

import { Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ComingSoonSimple() {
  return (
    <section className="relative grid min-h-screen w-full bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80')] bg-cover bg-center bg-no-repeat opacity-10" />

      <div className="relative container mx-auto flex flex-col justify-center px-4">
        <div className="my-auto text-center">
          <div className="mb-6 flex items-center justify-center gap-2">
            <div className="rounded-lg bg-white/10 p-2 backdrop-blur-sm">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <span className="text-lg font-bold text-white">
              Creative Tim UI
            </span>
          </div>

          <h1 className="mb-6 text-4xl font-bold [text-wrap:balance] text-white md:text-5xl lg:text-6xl">
            Something Extraordinary
            <br />
            is Coming Soon
          </h1>

          <p className="mx-auto mb-4 max-w-2xl text-lg [text-wrap:balance] text-white/80 md:text-xl">
            We're crafting an exceptional experience that will transform the way
            you build modern web applications. Innovative components, seamless
            integration, and unmatched design quality.
          </p>

          <p className="mb-8 text-base font-semibold text-white/90 md:text-lg">
            Join the waitlist to get exclusive early access
          </p>

          <div className="mx-auto flex w-full max-w-lg flex-col gap-3 sm:flex-row">
            <Input
              id="email"
              type="email"
              placeholder="Enter your email address"
              className="h-12 flex-1 border-2 border-white/20 bg-white/5 text-white backdrop-blur-sm transition-all placeholder:text-white/50 focus:border-white/40 focus:bg-white/10"
            />
            <Button className="h-12 shrink-0 bg-white px-8 text-base font-semibold text-neutral-900 transition-all hover:bg-white/90 hover:shadow-xl sm:w-auto">
              Notify Me
            </Button>
          </div>

          <p className="mt-6 text-sm text-white/60">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>

        <div className="mb-20 space-y-2 text-center">
          <div className="flex items-center justify-center gap-6 text-sm text-white/50">
            <a href="#" className="transition-colors hover:text-white/80">
              About
            </a>
            <a href="#" className="transition-colors hover:text-white/80">
              Contact
            </a>
            <a href="#" className="transition-colors hover:text-white/80">
              Privacy
            </a>
          </div>
          <p className="text-sm font-medium text-white/60">
            © 2024 Creative Tim UI. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  )
}
