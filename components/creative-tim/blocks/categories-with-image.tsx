"use client"

import * as React from "react"
import { ArrowRight, CheckCircle, Ruler, Truck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

const DATA = [
  {
    image: "https://v3.material-tailwind.com/mackbook-mockup.png",
    title: "Laptop",
    description: "Powerful and Versatile Laptops.",
    content: "For work, study, or play, find the perfect laptop.",
  },
  {
    image: "https://v3.material-tailwind.com/iphone-16-mockup.png",
    title: "Smartphone",
    description: "Cutting-edge Smartphones",
    content: "Innovative features to keep you connected on the go.",
  },
  {
    image: "https://v3.material-tailwind.com/apple-watch-mockup.png",
    title: "watch",
    description: "Stylish and Functional Watches",
    content: "From smartwatches to traditional timepieces.",
  },
]

const OPTIONS = [
  {
    icon: Ruler,
    title: "Quick Refunds",
    description: "Easily return products within 30 days of purchase.",
  },
  {
    icon: Truck,
    title: "Fast Shipping",
    description: "Get your products delivered within 2-5 business days.",
  },
  {
    icon: CheckCircle,
    title: "Comprehensive Coverage",
    description: "Enjoy up to 2 years of warranty on select products.",
  },
]

export default function CategoriesWithImage() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">
            Our Product Categories
          </h2>
          <p className="text-muted-foreground max-w-2xl text-base [text-wrap:_balance] md:text-lg">
            Browse through our extensive selection and find exactly what
            you&apos;re looking for.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DATA.map(({ image, title, description, content }, key) => (
            <Card
              key={key}
              className="group overflow-hidden text-center transition-all hover:shadow-lg"
            >
              <CardHeader className="m-0 p-6">
                <img
                  className="mx-auto h-52 w-auto transition-transform group-hover:scale-105"
                  src={image}
                  alt={`${title} image`}
                />
              </CardHeader>
              <CardContent className="space-y-3 px-6 py-6">
                <h3 className="text-lg font-bold capitalize">{title}</h3>
                <p className="text-base font-semibold">{description}</p>
                <p className="text-muted-foreground mx-auto max-w-xs text-sm [text-wrap:_balance]">
                  {content}
                </p>
                <Button
                  variant="ghost"
                  className="group/btn mx-auto flex items-center gap-2"
                >
                  Explore All
                  <ArrowRight className="h-4 w-4 stroke-2 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {OPTIONS.map(({ icon: Icon, title, description }, key) => (
            <div key={key} className="space-y-3">
              <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                <Icon className="text-primary h-6 w-6" />
              </div>
              <h4 className="text-lg font-semibold">{title}</h4>
              <p className="text-muted-foreground max-w-xs text-sm [text-wrap:_balance]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
