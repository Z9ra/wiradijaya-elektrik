"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

const DATA = [
  {
    badge: "Upcoming Events",
    title: "Tech Innovators",
    description:
      "Prepare to be part of dynamic conversations that will redefine the boundaries.",
    img: "https://v3.material-tailwind.com/3d-obj-1.jpg",
  },
  {
    badge: "Performance Metrics",
    title: "System Health",
    description:
      "Digital infrastructure with real-time data on system uptime, load times, and error rates.",
    img: "https://v3.material-tailwind.com/3d-obj-2.jpg",
  },
  {
    badge: "Financial Analytics",
    title: "System Health",
    description:
      "Digital infrastructure with real-time data on system uptime, load times, and error rates.",
    img: "https://v3.material-tailwind.com/3d-obj-4.jpg",
  },
]

export default function Widgets01() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {DATA.map(({ badge, title, description, img }) => (
        <Card key={title} className="border-border border">
          <CardHeader className="m-0 flex w-full flex-row items-center justify-between rounded-none p-4">
            <p className="text-sm">{badge}</p>
            <Button size="sm" className="border-border border">
              Get Details
            </Button>
          </CardHeader>
          <CardContent className="rounded-none px-4 pt-0 pb-4">
            <h4 className="mb-2 text-lg font-semibold">{title}</h4>
            <p className="text-foreground mb-6">{description}</p>
            <img
              src={img}
              alt="image"
              className="h-60 w-full rounded object-cover object-center"
            />
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
