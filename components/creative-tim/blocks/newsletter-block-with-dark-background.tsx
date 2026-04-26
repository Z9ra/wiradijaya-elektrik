"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function NewsletterBlockWithDarkBackground() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <Card className="bg-primary text-primary-foreground border-0 shadow-none">
          <CardContent className="grid justify-center px-6 py-12 text-center">
            <h2 className="text-2xl font-bold">
              Be the first who see the news
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-balance">
              Your company may not be in the software business, but eventually,
              a software company will be in your business.
            </p>
            <form className="mx-auto mt-10 flex w-full max-w-sm flex-col gap-x-2 gap-y-4 sm:flex-row">
              <Input
                type="email"
                id="email"
                placeholder="someone@example.com"
                className="placeholder:text-primary-foreground/60 text-primary-foreground h-11 border-white/20 bg-white/10 focus-visible:ring-white/30"
              />
              <Button
                type="submit"
                size="lg"
                variant="secondary"
                className="shrink-0"
              >
                Subscribe
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
