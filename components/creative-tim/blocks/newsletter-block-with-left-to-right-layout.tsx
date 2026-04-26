"use client"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function NewsletterBlockWithLeftToRightLayout() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-x-8 gap-y-4 lg:grid-cols-2 lg:px-6">
          <div className="w-full">
            <h2 className="text-2xl font-bold">
              Be the first who see the news
            </h2>
            <p className="text-foreground mt-2 max-w-lg text-balance">
              Your company may not be in the software business, but eventually,
              a software company will be in your business.
            </p>
          </div>
          <form action="#" className="w-full">
            <div className="flex w-full flex-col items-center gap-2 sm:flex-row">
              <Input
                type="email"
                id="email"
                placeholder="someone@example.com"
                className="h-11"
              />
              <Button
                type="submit"
                size="lg"
                className="w-full shrink-0 sm:w-auto"
              >
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
                <a href="#" className="text-primary hover:underline">
                  terms and conditions
                </a>
              </Label>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
