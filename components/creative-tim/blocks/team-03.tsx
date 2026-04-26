"use client"

import * as React from "react"

import { Card, CardContent, CardHeader } from "@/components/ui/card"

const DATA = [
  {
    image:
      "https://images.unsplash.com/photo-1716662318479-a9c0f1cd1a0e?auto=format&fit=crop&q=80&w=400&h=400",
    name: "Sarah Johnson",
    position: "Chief Technology Officer",
    about:
      "Passionate about building scalable solutions and leading innovative teams. Over 10 years of experience in tech leadership.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1623853434105-8e7a72898180?auto=format&fit=crop&q=80&w=400&h=400",
    name: "Michael Chen",
    position: "Lead Developer",
    about:
      "Full-stack developer specializing in modern web technologies. Dedicated to creating exceptional user experiences.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1574015974293-817f0ebebb74?auto=format&fit=crop&q=80&w=400&h=400",
    name: "Emma Williams",
    position: "UI/UX Designer",
    about:
      "Award-winning designer with a focus on user-centered design. Creating beautiful and intuitive digital experiences.",
  },
]

export default function Team03() {
  return (
    <section className="grid min-h-screen place-items-center bg-neutral-900 py-20">
      <div className="container mx-auto">
        <div className="mb-20">
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            The Executive Team
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed [text-wrap:_balance] text-white/80">
            Meet the visionaries behind our success. Our leadership team brings
            together decades of experience and a shared passion for innovation.
          </p>
        </div>
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
          {DATA.map(({ image, name, position, about }, key) => (
            <Card
              key={key}
              className="group flex flex-col gap-6 border-0 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:shadow-xl sm:flex-row sm:items-center"
            >
              <CardHeader className="m-0 shrink-0 p-0">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={image}
                    alt={`${name} image`}
                    className="h-40 w-40 object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </CardHeader>
              <CardContent className="flex-1 p-0">
                <h6 className="mb-2 text-xl font-bold text-white">{name}</h6>
                <p className="mb-4 text-sm font-semibold tracking-wide text-white/60 uppercase">
                  {position}
                </p>
                <p className="leading-relaxed [text-wrap:_balance] text-white/70">
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
