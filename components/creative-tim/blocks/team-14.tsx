"use client"

import * as React from "react"

import { Card, CardContent, CardHeader } from "@/components/ui/card"

const DATA = [
  {
    image: "https://v3.material-tailwind.com/woman-profile-3.jpg",
    name: "Ryan Samuel",
    position: "financial examiner",
  },
  {
    image: "https://v3.material-tailwind.com/man-profile-3.jpg",
    name: "Annie Spratt",
    position: "web developer",
  },
  {
    image: "https://v3.material-tailwind.com/man-profile-2.jpg",
    name: "Ryan Samuel",
    position: "ui/ux designer",
  },
]

export default function Team14() {
  return (
    <section className="grid min-h-screen place-items-center bg-black py-16">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <p className="block text-sm font-semibold text-white">Meet Us</p>
          <h2 className="my-4 text-3xl font-bold text-white">
            Our Awesome Team
          </h2>
          <p className="mx-auto max-w-3xl [text-wrap:_balance] text-white/80">
            We&apos;re constantly trying to express ourselves and actualize our
            dreams. If you have the opportunity to play this game of life you
            need to appreciate every moment.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {DATA.map(({ image, name, position }, key) => (
            <Card key={key} className="rounded-xl p-4">
              <CardHeader className="m-0 p-0">
                <img
                  src={image}
                  alt={`${name} image`}
                  className="m-0 h-72 w-full rounded-lg object-cover object-top"
                />
              </CardHeader>
              <CardContent className="mt-4 p-0 text-center">
                <h6 className="text-lg font-semibold">{name}</h6>
                <p className="text-muted-foreground mt-2 text-sm font-semibold uppercase">
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
