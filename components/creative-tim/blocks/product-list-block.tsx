"use client"

import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"

const PRODUCTS = [
  {
    id: 1,
    name: "Premium Suit",
    price: "$1,200",
    image: "https://v3.material-tailwind.com/coat-1.png",
    colors: [
      "bg-slate-950",
      "bg-white border border-slate-200",
      "bg-slate-200 border border-slate-200",
    ],
  },
  {
    id: 2,
    name: "Wool Suit",
    price: "$1,200",
    image: "https://v3.material-tailwind.com/coat-2.png",
    colors: [
      "bg-slate-950",
      "bg-white border border-slate-200",
      "bg-slate-200 border border-slate-200",
    ],
  },
  {
    id: 3,
    name: "Cotton Suit",
    price: "$1,200",
    image: "https://v3.material-tailwind.com/coat-3.png",
    colors: [
      "bg-slate-950",
      "bg-white border border-slate-200",
      "bg-slate-200 border border-slate-200",
    ],
  },
]

export default function ProductListBlock() {
  const [selectedColors, setSelectedColors] = React.useState<
    Record<number, number>
  >({})

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <p className="text-muted-foreground text-sm font-medium tracking-wider uppercase">
            Tailored Product Search
          </p>
          <h2 className="my-4 text-3xl font-bold md:text-4xl">
            Find What You Need
          </h2>
          <p className="text-muted-foreground mx-auto max-w-3xl text-base [text-wrap:_balance] md:text-lg">
            Simplify your shopping experience with our intuitive filter system.
            Whether you're looking for specific features, price ranges, or
            brands.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product) => (
            <Card
              key={product.id}
              className="group overflow-hidden transition-all hover:shadow-lg"
            >
              <CardContent className="p-0">
                <div className="relative p-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="mx-auto h-64 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-4 border-t p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <p className="text-xl font-bold">{product.price}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {product.colors.map((colorClass, index) => (
                      <button
                        key={index}
                        onClick={() =>
                          setSelectedColors({
                            ...selectedColors,
                            [product.id]: index,
                          })
                        }
                        className={`h-6 w-6 cursor-pointer rounded-full transition-all hover:scale-110 ${colorClass} ${
                          selectedColors[product.id] === index
                            ? "ring-primary ring-2 ring-offset-2"
                            : ""
                        }`}
                        aria-label={`Select color ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
