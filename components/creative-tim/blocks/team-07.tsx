"use client"

import * as React from "react"
import { Users } from "lucide-react"

import { Card, CardContent, CardHeader } from "@/components/ui/card"

const DATA = [
  {
    image:
      "https://images.unsplash.com/photo-1716662318479-a9c0f1cd1a0e?auto=format&fit=crop&q=80&w=400&h=400",
    name: "Sarah Johnson",
    position: "Chief Executive Officer",
    about:
      "Passionate leader with expertise in digital transformation and strategic growth. Building innovative solutions for tomorrow's challenges.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1623853434105-8e7a72898180?auto=format&fit=crop&q=80&w=400&h=400",
    name: "Michael Chen",
    position: "VP of Engineering",
    about:
      "Tech visionary specializing in scalable architecture and team leadership. Committed to engineering excellence and innovation.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1574015974293-817f0ebebb74?auto=format&fit=crop&q=80&w=400&h=400",
    name: "Emma Williams",
    position: "Creative Director",
    about:
      "Design expert crafting beautiful, user-centric experiences. Bridging creativity and functionality to deliver exceptional products.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1750223642533-1b74b17edae8?auto=format&fit=crop&q=80&w=400&h=400",
    name: "Alex Rivera",
    position: "Head of Strategy",
    about:
      "Strategic thinker driving business growth and market expansion. Transforming vision into actionable roadmaps for success.",
  },
]

export default function Team07() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="mb-20">
          <Card className="mb-8 grid h-16 w-16 place-items-center rounded-xl border-0 bg-neutral-900 shadow-lg">
            <Users className="h-8 w-8 text-white" />
          </Card>
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            The Executive Team
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed [text-wrap:_balance]">
            Experienced leaders committed to excellence and innovation.
            Together, we drive our vision forward and create meaningful impact
            in everything we do.
          </p>
        </div>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          {DATA.map(({ image, name, position, about }, key) => (
            <Card
              key={key}
              className="group grid grid-cols-1 items-center gap-6 border-0 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:grid-cols-12"
            >
              <CardHeader className="m-0 p-0 sm:col-span-4">
                <div className="relative mx-auto overflow-hidden rounded-xl">
                  <img
                    src={image}
                    alt={`${name} image`}
                    className="h-40 w-40 object-cover object-center transition-transform duration-500 group-hover:scale-110 sm:h-48 sm:w-48"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </CardHeader>
              <CardContent className="p-0 text-center sm:col-span-8 sm:text-left">
                <p className="text-2xl font-bold">{name}</p>
                <p className="text-muted-foreground mt-2 mb-4 text-sm font-semibold tracking-wide uppercase">
                  {position}
                </p>
                <p className="text-muted-foreground leading-relaxed [text-wrap:_balance]">
                  {about}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
