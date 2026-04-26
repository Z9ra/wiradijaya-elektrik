"use client"

import * as React from "react"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

const DATA = [
  {
    image:
      "https://images.unsplash.com/photo-1716662318479-a9c0f1cd1a0e?auto=format&fit=crop&q=80&w=400&h=400",
    name: "Sarah Johnson",
    location: "San Francisco, CA",
    options: [
      {
        value: 323,
        title: "Projects",
      },
      {
        value: "500+",
        title: "Hours",
      },
      {
        value: "24/7",
        title: "Support",
      },
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1623853434105-8e7a72898180?auto=format&fit=crop&q=80&w=400&h=400",
    name: "Michael Chen",
    location: "New York, NY",
    options: [
      {
        value: 450,
        title: "Projects",
      },
      {
        value: "500+",
        title: "Hours",
      },
      {
        value: "24/7",
        title: "Support",
      },
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1574015974293-817f0ebebb74?auto=format&fit=crop&q=80&w=400&h=400",
    name: "Emma Williams",
    location: "Austin, TX",
    options: [
      {
        value: 750,
        title: "Projects",
      },
      {
        value: "800+",
        title: "Hours",
      },
      {
        value: "24/7",
        title: "Support",
      },
    ],
  },
]

export default function Team01() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="mb-20 text-center">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Meet Our Expert Team
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg leading-relaxed [text-wrap:_balance]">
            Dedicated professionals committed to delivering exceptional results.
            Our team combines expertise with passion to bring your vision to
            life.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {DATA.map(({ image, name, location, options }, key) => (
            <Card
              key={key}
              className="group overflow-hidden border-0 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <CardHeader className="m-0 p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={image}
                    alt={`${name} image`}
                    className="h-80 w-full object-cover object-center transition-transform duration-500 group-hover:scale-110 md:h-96"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </CardHeader>
              <CardContent className="p-6 text-center">
                <p className="text-xl font-bold">{name}</p>
                <p className="text-muted-foreground mt-1 text-sm font-medium">
                  📍 {location}
                </p>
              </CardContent>
              <CardFooter className="bg-muted/30 flex items-center justify-center gap-8 border-t px-6 pt-4 pb-6">
                {options.map(({ value, title }, key) => (
                  <div key={key} className="text-center">
                    <p className="text-xl font-bold text-neutral-900">
                      {value}
                    </p>
                    <p className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
                      {title}
                    </p>
                  </div>
                ))}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
