"use client"

import * as React from "react"
import { Facebook, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

const DATA = [
  {
    img: "https://images.unsplash.com/photo-1716662318479-a9c0f1cd1a0e?auto=format&fit=crop&q=80&w=600&h=900",
    name: "Sarah Johnson",
    position: "Product Manager",
  },
  {
    img: "https://images.unsplash.com/photo-1623853434105-8e7a72898180?auto=format&fit=crop&q=80&w=600&h=900",
    name: "Michael Chen",
    position: "Lead Developer",
  },
  {
    img: "https://images.unsplash.com/photo-1574015974293-817f0ebebb74?auto=format&fit=crop&q=80&w=600&h=900",
    name: "Emma Williams",
    position: "UX Designer",
  },
  {
    img: "https://images.unsplash.com/photo-1750223642533-1b74b17edae8?auto=format&fit=crop&q=80&w=600&h=900",
    name: "Alex Rivera",
    position: "Content Strategist",
  },
  {
    img: "https://images.unsplash.com/photo-1716662318479-a9c0f1cd1a0e?auto=format&fit=crop&q=80&w=600&h=900",
    name: "Jessica Martinez",
    position: "Growth Manager",
  },
  {
    img: "https://images.unsplash.com/photo-1623853434105-8e7a72898180?auto=format&fit=crop&q=80&w=600&h=900",
    name: "David Kim",
    position: "Analytics Lead",
  },
]

export default function Team16() {
  return (
    <section className="py-20">
      <div className="container mx-auto grid grid-cols-1 gap-y-12 md:gap-x-16 lg:grid-cols-12">
        <div className="col-span-4">
          <p className="text-primary mb-3 block text-sm font-bold tracking-wide uppercase">
            Meet Us
          </p>
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            The Heart of Our Excellence
          </h2>
          <p className="text-muted-foreground max-w-xl text-lg leading-relaxed [text-wrap:_balance]">
            This section celebrates the unique stories, skills, and passions of
            our team members. From strategic thinkers to creative innovators,
            each person contributes to our vibrant culture.
          </p>
        </div>
        <div className="col-span-8 grid grid-cols-1 items-start gap-6 md:!grid-cols-3 [@media(min-width:480px)]:grid-cols-2">
          {DATA.map(({ img, name, position }, key) => (
            <Card
              key={key}
              className="group relative flex h-[22rem] w-full flex-col items-end justify-center overflow-hidden rounded-xl text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <CardHeader className="relative m-0 h-full w-full p-0">
                <img
                  src={img}
                  alt={`${name} profile`}
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
              </CardHeader>
              <div className="absolute bottom-0 h-2/3 w-full bg-gradient-to-t from-black/90 via-black/60 to-transparent transition-all duration-300 group-hover:from-black/95 group-hover:via-black/70" />
              <CardContent className="absolute bottom-6 flex h-full flex-col items-center justify-end px-4">
                <p className="text-xl font-bold text-white">{name}</p>
                <p className="mt-1 mb-4 text-xs font-semibold tracking-wide text-white/90 uppercase">
                  {position}
                </p>
                <div className="flex items-center gap-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9 transition-colors hover:bg-white/20"
                  >
                    <Facebook className="h-4 w-4 text-white" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9 transition-colors hover:bg-white/20"
                  >
                    <Twitter className="h-4 w-4 text-white" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9 transition-colors hover:bg-white/20"
                  >
                    <svg
                      className="h-4 w-4 text-white"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
