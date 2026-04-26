"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function SimpleSubscribeToNewsletterSection() {
  return (
    <div className="container mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 py-8 md:flex-row">
      <p className="text-foreground font-semibold">
        Stay in the Know: Subscribe for Exclusive Updates
      </p>
      <form className="flex w-full max-w-sm flex-col gap-x-2 gap-y-4 sm:flex-row">
        <Input
          type="email"
          id="email"
          placeholder="someone@example.com"
          className="h-11"
        />
        <Button type="submit" size="lg">
          Subscribe
        </Button>
      </form>
    </div>
  )
}
