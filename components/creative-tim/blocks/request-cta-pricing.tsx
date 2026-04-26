"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export default function RequestCtaPricing() {
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
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-12 md:grid-cols-2">
          <Card className="flex flex-col justify-between">
            <CardHeader className="m-0 w-full p-6 text-center">
              <h3 className="text-foreground text-lg font-semibold">
                Standard
              </h3>
            </CardHeader>
            <CardContent className="p-6">
              <div className="text-foreground mb-6 flex justify-center text-center text-5xl font-bold">
                $25
                <span className="text-muted-foreground self-end text-lg font-normal">
                  /month
                </span>
              </div>
              <ul className="divide-border divide-y text-center">
                <li className="text-foreground py-4">20GB File Storage</li>
                <li className="text-foreground py-4">15 Users</li>
                <li className="text-foreground py-4">Standard Support</li>
              </ul>
            </CardContent>
            <CardFooter className="p-6">
              <Button size="lg" className="w-full">
                Request a demo
              </Button>
            </CardFooter>
          </Card>
          <Card className="bg-primary flex flex-col justify-between">
            <CardHeader className="m-0 w-full p-6 text-center">
              <h3 className="text-lg font-semibold text-white">Premium</h3>
            </CardHeader>
            <CardContent className="p-6">
              <div className="mb-6 flex justify-center text-center text-5xl font-bold text-white">
                $59
                <span className="self-end text-lg font-normal text-white/80">
                  /month
                </span>
              </div>
              <ul className="divide-border divide-y text-center">
                <li className="py-4 text-white">50GB File Storage</li>
                <li className="py-4 text-white">100 Users</li>
                <li className="py-4 text-white">Premium Support</li>
              </ul>
            </CardContent>
            <CardFooter className="p-6">
              <Button
                size="lg"
                className="w-full border-white bg-white text-black hover:border-white hover:bg-white"
              >
                Request a demo
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
