"use client"

import * as React from "react"
import { Linkedin, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

const DATA = [
  {
    image:
      "https://images.unsplash.com/photo-1716662318479-a9c0f1cd1a0e?auto=format&fit=crop&q=80&w=400&h=400",
    name: "Sarah Johnson",
    position: "Co-Founder & CEO",
    about:
      "Visionary leader with 15+ years of experience building innovative tech companies and driving growth.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1623853434105-8e7a72898180?auto=format&fit=crop&q=80&w=400&h=400",
    name: "Michael Chen",
    position: "Chief Technology Officer",
    about:
      "Technology enthusiast specializing in scalable architectures and cutting-edge development practices.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1574015974293-817f0ebebb74?auto=format&fit=crop&q=80&w=400&h=400",
    name: "Emma Williams",
    position: "Head of Design",
    about:
      "Award-winning designer passionate about creating intuitive and beautiful user experiences.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1750223642533-1b74b17edae8?auto=format&fit=crop&q=80&w=400&h=400",
    name: "Alex Rivera",
    position: "Marketing Director",
    about:
      "Strategic marketer driving brand growth through data-driven campaigns and creative storytelling.",
  },
]

export default function Team05() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="mb-20 text-center">
          <p className="text-primary mb-3 block text-sm font-bold tracking-wide uppercase">
            Our Team
          </p>
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            The Executive Team
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg leading-relaxed [text-wrap:_balance]">
            Meet the leadership team driving innovation and excellence.
            Together, we're building the future with passion and expertise.
          </p>
        </div>
        <div className="grid grid-cols-1 items-start gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {DATA.map(({ image, name, position, about }, key) => (
            <Card
              key={key}
              className="group border-0 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={image}
                    alt={`${name} image`}
                    className="h-64 w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-xl font-bold">{name}</p>
                <p className="text-muted-foreground mt-1 mb-3 text-sm font-semibold tracking-wide uppercase">
                  {position}
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed [text-wrap:_balance]">
                  {about}
                </p>
                <div className="flex items-center gap-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
                  >
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
                  >
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
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
