"use client"

import { Play } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ComingSoonWithCountdownVideo() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 text-center">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-neutral-100 px-6 py-2 dark:bg-neutral-800">
              <Play className="h-4 w-4" />
              <span className="text-sm font-semibold">Watch Preview</span>
            </div>

            <h1 className="mb-4 text-4xl font-bold [text-wrap:balance] md:text-5xl lg:text-6xl">
              Something Amazing is Coming Soon!
            </h1>

            <p className="text-muted-foreground mx-auto mb-10 max-w-2xl text-lg [text-wrap:balance] md:text-xl">
              Get a sneak peek at what we've been building. Watch the video
              below and join the waitlist to be notified when we launch.
            </p>
          </div>

          <div className="relative mb-10 overflow-hidden rounded-2xl shadow-2xl">
            <div className="relative w-full pt-[56.25%]">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/YCIuEU2y8XI"
                title="Coming Soon Preview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">
              Be the First to Know
            </h2>

            <p className="text-muted-foreground mb-6 text-base md:text-lg">
              Join our exclusive waitlist and get early access when we launch
            </p>

            <form className="mx-auto max-w-xl">
              <div className="flex w-full flex-col gap-3 sm:flex-row">
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  className="h-12 flex-1 border-2 transition-all focus:border-neutral-900"
                />
                <Button
                  type="submit"
                  className="h-12 shrink-0 bg-neutral-900 px-8 text-base font-semibold transition-all hover:bg-neutral-800 sm:w-auto"
                >
                  Join Waitlist
                </Button>
              </div>

              <p className="text-muted-foreground mt-4 text-xs">
                By signing up, you agree to receive updates about our launch.
                Unsubscribe anytime.
              </p>
            </form>

            <div className="text-muted-foreground mt-12 flex flex-wrap items-center justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <span>Free to join</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-blue-500" />
                <span>Exclusive updates</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-purple-500" />
                <span>Early access</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
