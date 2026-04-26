"use client"

import * as React from "react"
import { Facebook, Twitter } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

const DATA = [
  {
    image:
      "https://images.unsplash.com/photo-1716662318479-a9c0f1cd1a0e?auto=format&fit=crop&q=80&w=400&h=400",
    name: "Sarah Johnson",
    position: "Product Manager",
  },
  {
    image:
      "https://images.unsplash.com/photo-1623853434105-8e7a72898180?auto=format&fit=crop&q=80&w=400&h=400",
    name: "Michael Chen",
    position: "Senior Developer",
  },
  {
    image:
      "https://images.unsplash.com/photo-1574015974293-817f0ebebb74?auto=format&fit=crop&q=80&w=400&h=400",
    name: "Emma Williams",
    position: "Lead Designer",
  },
  {
    image:
      "https://images.unsplash.com/photo-1750223642533-1b74b17edae8?auto=format&fit=crop&q=80&w=400&h=400",
    name: "Alex Rivera",
    position: "Marketing Director",
  },
  {
    image:
      "https://images.unsplash.com/photo-1716662318479-a9c0f1cd1a0e?auto=format&fit=crop&q=80&w=400&h=400",
    name: "Jessica Martinez",
    position: "DevOps Engineer",
  },
  {
    image:
      "https://images.unsplash.com/photo-1623853434105-8e7a72898180?auto=format&fit=crop&q=80&w=400&h=400",
    name: "David Kim",
    position: "Data Scientist",
  },
]

export default function Team11() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="mb-20 text-center">
          <Card className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-lg bg-neutral-900 shadow-lg">
            <svg
              className="h-7 w-7 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </Card>
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Our Awesome Team
          </h2>
          <p className="text-muted-foreground mx-auto max-w-3xl text-lg leading-relaxed [text-wrap:_balance]">
            Passionate professionals dedicated to excellence. Our diverse team
            brings together expertise across design, development, and strategy
            to deliver exceptional results.
          </p>
        </div>
        <div className="grid grid-cols-1 items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {DATA.map(({ image, name, position }, key) => (
            <Card
              key={key}
              className="group flex items-center gap-4 border-0 p-4 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <CardHeader className="m-0 p-0">
                <div className="relative">
                  <Avatar className="h-24 w-24 shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <AvatarImage src={image} alt={name} />
                    <AvatarFallback className="bg-neutral-900 text-white">
                      {name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-neutral-900/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <p className="mb-1 text-lg font-bold">{name}</p>
                <p className="text-muted-foreground mb-3 text-xs font-semibold tracking-wide uppercase">
                  {position}
                </p>
                <div className="flex items-center gap-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
                  >
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
                  >
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
                  >
                    <svg
                      className="h-4 w-4"
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
