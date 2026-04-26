"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SubscribeToNewsletterModal() {
  return (
    <section className="px-4 py-16">
      <div className="bg-card mx-auto max-w-md rounded-lg border p-6 shadow-lg">
        <div className="mb-4">
          <h2 className="text-xl font-bold">Be the first who see the news</h2>
          <p className="text-foreground mt-2 max-w-lg text-balance">
            Your company may not be in the software business, but eventually, a
            software company will be in your business.
          </p>
        </div>
        <form action="#" className="mt-4 w-full">
          <div className="flex w-full flex-col items-center gap-x-2 gap-y-4 sm:flex-row">
            <Input
              type="email"
              id="email"
              placeholder="someone@example.com"
              className="h-11"
            />
            <Button size="lg" className="w-full shrink-0 sm:w-auto">
              Subscribe
            </Button>
          </div>
          <div className="mt-3 flex items-center gap-2">
            <Checkbox id="checkbox-link" />
            <Label
              htmlFor="checkbox-link"
              className="text-foreground cursor-pointer text-sm font-normal"
            >
              I agree with the{" "}
              <a href="#" className="text-primary inline hover:underline">
                terms and conditions
              </a>
            </Label>
          </div>
        </form>
      </div>
    </section>
  )
}
