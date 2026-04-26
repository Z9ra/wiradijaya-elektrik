"use client"

import * as React from "react"
import { Heart, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

const PRODUCTS = [
  {
    id: 1,
    name: "Linen Suit",
    price: "$2,500",
    rating: 4.7,
    reviews: 150,
    description: "The structured shoulders and sleek detailing.",
    image: "https://v3.material-tailwind.com/coat-1.png",
    sizes: ["XS", "S", "M", "L"],
  },
  {
    id: 2,
    name: "Tweed Suit",
    price: "$2,300",
    rating: 4.7,
    reviews: 150,
    description: "The structured shoulders and sleek detailing.",
    image: "https://v3.material-tailwind.com/coat-2.png",
    sizes: ["XS", "S", "M", "L"],
  },
  {
    id: 3,
    name: "Premium Suit",
    price: "$1,240",
    rating: 4.7,
    reviews: 150,
    description: "The structured shoulders and sleek detailing.",
    image: "https://v3.material-tailwind.com/coat-3.png",
    sizes: ["XS", "S", "M", "L"],
  },
]

function Rating({ value }: { value: number }) {
  const fullStars = Math.floor(value)
  const hasHalfStar = value % 1 !== 0

  return (
    <div className="inline-flex items-center gap-0.5 text-amber-500">
      {[...Array(fullStars)].map((_, index) => (
        <Star key={index} className="h-4 w-4 fill-current" />
      ))}
      {hasHalfStar && <Star className="h-4 w-4 fill-current opacity-50" />}
    </div>
  )
}

export default function ProductListWithRatings() {
  const [selectedSizes, setSelectedSizes] = React.useState<
    Record<number, string>
  >({
    1: "S",
    2: "S",
    3: "S",
  })
  const [favorites, setFavorites] = React.useState<Set<number>>(new Set())

  const toggleFavorite = (productId: number) => {
    setFavorites((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(productId)) {
        newSet.delete(productId)
      } else {
        newSet.add(productId)
      }
      return newSet
    })
  }

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
            brands, our filters help you quickly narrow down options, so you can
            find exactly what you need with ease!
          </p>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                    className="mx-auto h-72 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-4 p-6">
                  <div className="space-y-2">
                    <p className="text-xl font-bold">{product.price}</p>
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                  </div>

                  <div className="flex items-center gap-2">
                    <Rating value={product.rating} />
                    <span className="text-muted-foreground text-sm">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  <p className="text-muted-foreground text-sm [text-wrap:_balance]">
                    {product.description}
                  </p>

                  <div className="space-y-2">
                    <p className="text-sm font-medium">Select Size</p>
                    <div className="flex items-center gap-2">
                      {product.sizes.map((size) => (
                        <Button
                          key={size}
                          variant={
                            size === selectedSizes[product.id]
                              ? "default"
                              : "outline"
                          }
                          size="sm"
                          onClick={() =>
                            setSelectedSizes({
                              ...selectedSizes,
                              [product.id]: size,
                            })
                          }
                          className="min-w-[3rem]"
                        >
                          {size}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex items-center gap-2 border-t p-6">
                <Button className="flex-1">Add to Cart</Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => toggleFavorite(product.id)}
                  className={
                    favorites.has(product.id)
                      ? "border-red-500 bg-red-500 text-white hover:bg-red-600"
                      : "border-red-500 text-red-500 hover:bg-red-50"
                  }
                >
                  <Heart
                    className={`h-4 w-4 ${favorites.has(product.id) ? "fill-current" : ""}`}
                  />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
