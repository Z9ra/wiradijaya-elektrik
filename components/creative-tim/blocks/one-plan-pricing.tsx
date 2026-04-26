"use client"

import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

const OPTIONS = [
  "Private code access",
  "Pro member accounts",
  "Free entry to all repositories",
  "Support team full assist",
]

export default function OnePlanPricing() {
  return (
    <section className="container mx-auto py-16">
      <div className="mb-16 text-center">
        <h2 className="text-foreground mb-4 text-3xl font-bold tracking-tight">
          Best no-tricks pricing
        </h2>
        <p className="text-muted-foreground mx-auto max-w-lg text-lg">
          If you are not satisfied, contact us within the first 30 days and we
          will send you a full refund.
        </p>
      </div>
      <Card>
        <CardHeader className="m-0 w-full p-8">
          <h3 className="text-foreground text-2xl font-bold">
            Lifetime Membership
          </h3>
          <p className="text-muted-foreground mt-2 max-w-md">
            You have Free Unlimited Updates and Premium Support on each package.
            You also have 30 days to request a refund.
          </p>
        </CardHeader>
        <CardContent className="grid grid-cols-1 items-center gap-y-16 px-8 pt-0 pb-8 md:grid-cols-2">
          <div>
            <p className="text-foreground text-lg font-semibold">
              What is included
            </p>
            <div className="border-border mt-6 grid grid-cols-1 justify-between gap-x-12 gap-y-2 border-t pt-6 sm:grid-cols-2">
              {OPTIONS.map((option, key) => (
                <div key={key} className="flex items-center gap-4">
                  <Check className="text-foreground h-4 w-4 shrink-0 stroke-2" />
                  <p className="text-muted-foreground">{option}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid justify-start md:place-items-center md:justify-end md:px-6">
            <p className="text-foreground mb-2 text-lg font-semibold">
              Pay once, own it forever
            </p>
            <h4 className="text-foreground mb-4 text-5xl font-bold">$399</h4>
            <Button size="lg" className="w-44">
              Get Access
            </Button>
            <p className="text-muted-foreground mt-4 block text-sm md:text-center">
              Get a free sample (20MB)
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
