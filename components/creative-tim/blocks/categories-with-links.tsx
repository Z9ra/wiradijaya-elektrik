"use client"

import * as React from "react"
import {
  ArrowRight,
  Book,
  Briefcase,
  Building2,
  Cake,
  Eye,
  Fingerprint,
  GraduationCap,
  Music,
  Sun,
  Truck,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const DATA = [
  {
    icon: Book,
    title: "Books & Media",
    options: ["Fiction", "Non-Fiction", "E-books", "Magazines", "Music"],
  },
  {
    icon: Fingerprint,
    title: "Pet Supplies",
    options: [
      "Pet Food",
      "Pet Toys",
      "Grooming Products",
      "Pet Beds",
      "Aquariums",
    ],
  },
  {
    icon: Eye,
    title: "Baby & Kids",
    options: [
      "Baby Gear",
      "Clothing",
      "Toys",
      "Nursery Furniture",
      "Safety Products",
    ],
  },
  {
    icon: Briefcase,
    title: "Travel & Luggage",
    options: [
      "Suitcases",
      "Travel Accessories",
      "Backpacks",
      "Travel Organizers",
      "Luggage Sets",
    ],
  },
  {
    icon: GraduationCap,
    title: "Arts & Crafts",
    options: [
      "Art Supplies",
      "Craft Kits",
      "Sewing & Knitting",
      "Scrapbooking",
      "DIY Projects",
    ],
  },
  {
    icon: Cake,
    title: "Food & Beverages",
    options: [
      "Gourmet Food",
      "Beverages",
      "Snacks",
      "Organic Products",
      "Cooking Ingredients",
    ],
  },
  {
    icon: Truck,
    title: "Automotive",
    options: [
      "Car Accessories",
      "Car Care Products",
      "Tires & Wheels",
      "Car Electronics",
      "Tools & Equipment",
    ],
  },
  {
    icon: Building2,
    title: "Office Supplies",
    options: [
      "Office Furniture",
      "Writing Instruments",
      "Notebooks & Planners",
      "Printers & Ink",
      "Organizational Supplies",
    ],
  },
  {
    icon: Music,
    title: "Music Instruments",
    options: [
      "Guitars & Basses",
      "Keyboards & Pianos",
      "Drums & Percussion",
      "Wind Instruments",
      "Music Accessories",
    ],
  },
  {
    icon: Sun,
    title: "Gardening",
    options: [
      "Plants & Seeds",
      "Gardening Tools",
      "Outdoor Furniture",
      "BBQ & Grilling",
      "Lawn Care",
    ],
  },
]

export default function CategoriesWithLinks() {
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
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {DATA.map(({ icon: Icon, title, options }, key) => (
            <div key={key} className="space-y-4">
              <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-lg">
                <Icon className="text-primary h-5 w-5" />
              </div>
              <h3 className="hover:text-primary cursor-pointer text-lg font-semibold transition-colors">
                {title}
              </h3>
              <div className="space-y-2">
                {options.map((option, idx) => (
                  <p
                    key={idx}
                    className="text-muted-foreground hover:text-foreground cursor-pointer text-sm transition-colors"
                  >
                    {option}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
