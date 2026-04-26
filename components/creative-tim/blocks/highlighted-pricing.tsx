"use client"

import { Check } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export default function HighlightedPricing() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-foreground mb-4 text-3xl font-bold tracking-tight">
            Choose a plan for your next project
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            You have Free Unlimited Updates and Premium Support on each package.
            You also have 20 days to request a refund.
          </p>
        </div>
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardHeader className="border-border m-0 flex w-full flex-row items-start justify-between gap-4 rounded-none border-b p-6">
              <div>
                <h3 className="text-foreground mb-2 text-xl font-bold">
                  Starter
                </h3>
                <p className="text-muted-foreground text-lg">
                  Free access for 2 members
                </p>
              </div>
            </CardHeader>
            <CardContent className="my-2 p-6">
              <ul className="flex flex-col gap-4">
                <li className="text-muted-foreground flex items-center gap-3">
                  <Check className="h-5 w-5 stroke-2" />
                  <p className="block">Complete documentation</p>
                </li>
                <li className="text-muted-foreground flex items-center gap-3">
                  <Check className="h-5 w-5 stroke-2" />
                  <p className="block">Working materials in Sketch</p>
                </li>
                <li className="text-muted-foreground flex items-center gap-3">
                  <Check className="h-5 w-5 stroke-2" />
                  <p className="block">Integration help</p>
                </li>
                <li className="text-muted-foreground flex items-center gap-3">
                  <Check className="h-5 w-5 stroke-2" />
                  <p className="block">40GB Cloud storage</p>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="border-border flex items-center justify-between gap-4 rounded-none border-t p-6">
              <div className="text-foreground flex justify-center text-center text-3xl font-bold">
                $199
                <span className="text-muted-foreground self-end text-lg font-normal">
                  /year
                </span>
              </div>
              <Button>Choose Plan</Button>
            </CardFooter>
          </Card>
          <Card className="bg-primary">
            <CardHeader className="border-primary-dark m-0 flex w-full flex-row items-start justify-between gap-4 rounded-none border-b p-6">
              <div>
                <h3 className="mb-2 text-xl font-bold text-white">Company</h3>
                <p className="text-lg text-white/80">
                  Free access for 10 members
                </p>
              </div>
              <Badge className="border-white bg-white text-black">
                Popular
              </Badge>
            </CardHeader>
            <CardContent className="my-2 p-6">
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-3 text-white/80">
                  <Check className="h-5 w-5 stroke-2" />
                  <p className="block">Complete documentation</p>
                </li>
                <li className="flex items-center gap-3 text-white/80">
                  <Check className="h-5 w-5 stroke-2" />
                  <p className="block">Working materials in Sketch</p>
                </li>
                <li className="flex items-center gap-3 text-white/80">
                  <Check className="h-5 w-5 stroke-2" />
                  <p className="block">Integration help</p>
                </li>
                <li className="flex items-center gap-3 text-white/80">
                  <Check className="h-5 w-5 stroke-2" />
                  <p className="block">40GB Cloud storage</p>
                </li>
              </ul>
            </CardContent>
            <CardFooter className="border-primary-dark flex items-center justify-between gap-4 rounded-none border-t p-6">
              <div className="flex justify-center text-center text-3xl font-bold text-white">
                $199
                <span className="self-end text-lg font-normal text-white/80">
                  /year
                </span>
              </div>
              <Button className="border-white bg-white text-black hover:border-white hover:bg-white">
                Choose Plan
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
