"use client"

import * as React from "react"
import { Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SubscribeToNewsletterPopupWithImage() {
  return (
    <section className="px-4 py-16">
      <div className="bg-card hover:shadow-3xl mx-auto max-w-4xl overflow-hidden rounded-2xl border shadow-2xl transition-all">
        <div className="relative h-64 w-full overflow-hidden md:h-80">
          <img
            src="https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/creative-ai/bg-2.jpg"
            alt="Newsletter background"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute right-6 bottom-6 left-6">
            <div className="flex items-center gap-2">
              <div className="rounded-lg bg-white/10 p-2 backdrop-blur-sm">
                <Mail className="h-5 w-5 text-white" />
              </div>
              <span className="text-base font-bold text-white">
                Creative Tim UI
              </span>
            </div>
          </div>
        </div>

        <div className="p-8 md:p-10">
          <div className="mb-8 text-center">
            <h2 className="mb-3 text-3xl font-bold [text-wrap:balance] md:text-4xl">
              Stay Updated with Latest News
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-base [text-wrap:balance] md:text-lg">
              Join our newsletter to receive the latest updates, exclusive
              content, and insights delivered straight to your inbox.
            </p>
          </div>

          <form action="#" className="mx-auto max-w-xl">
            <div className="space-y-4">
              <div className="flex w-full flex-col gap-3 sm:flex-row">
                <Input
                  type="email"
                  id="email"
                  placeholder="Enter your email address"
                  className="h-12 flex-1 border-2 transition-all focus:border-neutral-900"
                />
                <Button
                  type="submit"
                  size="lg"
                  className="h-12 shrink-0 bg-neutral-900 px-8 text-base font-semibold transition-all hover:bg-neutral-800 sm:w-auto"
                >
                  Subscribe
                </Button>
              </div>

              <div className="flex items-start gap-3 pt-2">
                <Checkbox id="checkbox-link" className="mt-1" />
                <Label
                  htmlFor="checkbox-link"
                  className="text-muted-foreground cursor-pointer text-sm leading-relaxed font-normal"
                >
                  I agree to receive marketing emails and accept the{" "}
                  <a
                    href="#"
                    className="text-foreground font-medium underline decoration-2 underline-offset-2 transition-colors hover:text-neutral-900"
                  >
                    terms and conditions
                  </a>
                </Label>
              </div>
            </div>

            <p className="text-muted-foreground mt-6 text-center text-xs">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
