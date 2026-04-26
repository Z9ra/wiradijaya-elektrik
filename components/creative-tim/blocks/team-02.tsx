"use client"

import * as React from "react"

import { Card, CardContent, CardHeader } from "@/components/ui/card"

const DATA = [
  {
    image:
      "https://images.unsplash.com/photo-1716662318479-a9c0f1cd1a0e?auto=format&fit=crop&q=80&w=400&h=400",
    name: "Sarah Johnson",
    position: "Chief Technology Officer",
  },
  {
    image:
      "https://images.unsplash.com/photo-1623853434105-8e7a72898180?auto=format&fit=crop&q=80&w=400&h=400",
    name: "Michael Chen",
    position: "Lead Developer",
  },
  {
    image:
      "https://images.unsplash.com/photo-1574015974293-817f0ebebb74?auto=format&fit=crop&q=80&w=400&h=400",
    name: "Emma Williams",
    position: "UI/UX Designer",
  },
]

export default function Team02() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <p className="text-primary block text-sm font-semibold">Meet Us</p>
          <h2 className="my-4 text-3xl font-bold">Our Awesome Team</h2>
          <p className="text-muted-foreground mx-auto max-w-3xl [text-wrap:_balance]">
            We&apos;re constantly trying to express ourselves and actualize our
            dreams. If you have the opportunity to play this game of life you
            need to appreciate every moment.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {DATA.map(({ image, name, position }, key) => (
            <Card key={key} className="border-0 shadow-none">
              <CardHeader className="p-0">
                <img
                  src={image}
                  alt={`${name} image`}
                  className="mx-auto h-80 rounded-xl object-cover object-top sm:h-96"
                />
              </CardHeader>
              <CardContent className="mt-4 text-center">
                <p className="mb-2 text-lg font-semibold">{name}</p>
                <p className="text-muted-foreground text-sm font-semibold uppercase">
                  {position}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
