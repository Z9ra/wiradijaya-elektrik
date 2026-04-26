"use client"

import { RotateCw } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const FILTER_OPTIONS = [
  "Blazers",
  "Casual Shirts",
  "Formal Shirts",
  "Jeans",
  "T-Shirts",
  "Trousers",
]

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

export default function ProductListWithFilters() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <small className="block text-sm font-semibold">
            Tailored Product Search
          </small>
          <h2 className="my-4 text-2xl font-bold md:text-3xl lg:text-4xl">
            Find What You Need
          </h2>
          <p className="text-muted-foreground mx-auto max-w-3xl text-base [text-wrap:_balance] md:text-lg">
            Simplify your shopping experience with our intuitive filter system.
            Whether you're looking for specific features, price ranges, or
            brands, our filters help you quickly narrow down options, so you can
            find exactly what you need with ease!
          </p>
        </div>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 p-4">
            <p className="text-base font-semibold md:text-lg">Refine</p>
            <Button variant="ghost" size="icon" className="h-[38px] w-[38px]">
              <RotateCw className="h-4 w-4 stroke-2" />
            </Button>
          </CardHeader>
          <CardContent className="px-4 py-2.5 pt-0 pb-4">
            <div className="mb-8 flex flex-col gap-4 md:flex-row">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="electronics">Electronics</SelectItem>
                  <SelectItem value="fashion">Fashion</SelectItem>
                  <SelectItem value="home">Home</SelectItem>
                  <SelectItem value="sports">Sports</SelectItem>
                  <SelectItem value="toys">Toys</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sub Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="phones">Phones</SelectItem>
                  <SelectItem value="laptops">Laptops</SelectItem>
                  <SelectItem value="clothing">Clothing</SelectItem>
                  <SelectItem value="furniture">Furniture</SelectItem>
                  <SelectItem value="fitness">Fitness</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Color" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="red">Red</SelectItem>
                  <SelectItem value="blue">Blue</SelectItem>
                  <SelectItem value="green">Green</SelectItem>
                  <SelectItem value="yellow">Yellow</SelectItem>
                  <SelectItem value="black">Black</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">$0 - $50</SelectItem>
                  <SelectItem value="medium">$50 - $200</SelectItem>
                  <SelectItem value="high">$200 - $500</SelectItem>
                  <SelectItem value="premium">$500+</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sort" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popularity">Popularity</SelectItem>
                  <SelectItem value="low-high">Price: Low to High</SelectItem>
                  <SelectItem value="high-low">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="rating">Highest Rating</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-wrap gap-x-12 gap-y-6">
              {FILTER_OPTIONS.map((option) => (
                <div
                  key={option}
                  className="inline-flex items-center space-x-2"
                >
                  <Checkbox id={option} />
                  <Label
                    htmlFor={option}
                    className="text-muted-foreground cursor-pointer text-sm"
                  >
                    {option}
                  </Label>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product) => (
            <Card key={product.id} className="text-center">
              <CardContent className="p-0">
                <img
                  src={product.image}
                  alt={product.name}
                  className="m-2 mx-auto my-0 h-64 w-auto rounded"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <p className="text-base font-semibold md:text-lg">
                      {product.name}
                    </p>
                    <p className="text-base font-semibold md:text-lg">
                      {product.price}
                    </p>
                  </div>
                  <div className="mt-4 flex gap-2">
                    {product.colors.map((colorClass, index) => (
                      <div
                        key={index}
                        className={`h-5 w-5 rounded ${colorClass}`}
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
