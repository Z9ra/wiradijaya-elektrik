"use client"

import * as React from "react"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const DATA = [
  {
    title: "Electronics",
    content: "Smartphones, Laptops, Cameras, Accessories",
  },
  {
    title: "Fashion",
    content: "Men's Clothing, Women's Clothing, Shoes",
  },
  {
    title: "Home & Kitchen",
    content: "Furniture, Appliances, Cookware, Home Décor",
  },
  {
    title: "Beauty & Personal Care",
    content: "Skincare, Makeup, Hair Care, Fragrances",
  },
  {
    title: "Sports & Outdoors",
    content: "Fitness Equipment, Gears, Sports Accessories",
  },
  {
    title: "Toys & Games",
    content: "Puzzles, Board Games, Educational Toys",
  },
]

export default function SimpleCategories() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-wrap items-center justify-between gap-6">
          <div>
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">
              Our Product Categories
            </h2>
            <p className="text-muted-foreground max-w-2xl text-base [text-wrap:_balance] md:text-lg">
              Browse through our extensive selection and find exactly what
              you&apos;re looking for.
            </p>
          </div>
          <Button
            variant="ghost"
            className="group flex w-fit items-center gap-2"
          >
            Explore Other Categories
            <ArrowRight className="h-4 w-4 stroke-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {DATA.map(({ title, content }, key) => (
            <Card
              key={key}
              className="hover:border-primary cursor-pointer border p-5 transition-all hover:shadow-md"
            >
              <CardContent className="space-y-1 p-0">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-muted-foreground text-sm [text-wrap:_balance]">
                  {content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
