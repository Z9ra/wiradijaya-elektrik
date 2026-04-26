"use client"

import * as React from "react"
import {
  ArrowRight,
  Book,
  Briefcase,
  Monitor,
  Puzzle,
  ShoppingBag,
  Truck,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

const DATA = [
  {
    icon: Monitor,
    title: "Office Supplies",
    content: "Stationery, Office Furniture, Printers & Ink",
  },
  {
    icon: Briefcase,
    title: "Fashion",
    content: "Men's Clothing, Women's Clothing, Shoes",
  },
  {
    icon: Book,
    title: "Books & Media",
    content: "Fiction, Non-Fiction, Music, Movies",
  },
  {
    icon: ShoppingBag,
    title: "Health & Wellness",
    content: "Vitamins, Supplements, Health Foods",
  },
  {
    icon: Truck,
    title: "Automotive",
    content: "Car Accessories, Tools & Equipment, Car Care",
  },
  {
    icon: Puzzle,
    title: "Toys & Games",
    content: "Puzzles, Board Games, Educational Toys",
  },
]

export default function CategoriesWithIcon() {
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
          {DATA.map(({ icon: Icon, title, content }, key) => (
            <Card
              key={key}
              className="group hover:border-primary border p-6 text-center transition-all hover:shadow-lg"
            >
              <CardHeader className="m-0 flex items-center justify-center p-0">
                <div className="bg-muted group-hover:bg-primary/10 flex h-16 w-16 items-center justify-center rounded-lg transition-colors">
                  <Icon className="group-hover:text-primary h-8 w-8 transition-colors" />
                </div>
              </CardHeader>
              <CardContent className="space-y-2 p-0 pt-6">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-muted-foreground text-sm [text-wrap:_balance]">
                  {content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <Button
          variant="ghost"
          size="lg"
          className="group mx-auto mt-12 flex items-center gap-2"
        >
          All Categories
          <ArrowRight className="h-4 w-4 stroke-2 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </section>
  )
}
