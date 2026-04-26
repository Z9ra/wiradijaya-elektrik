"use client"

import * as React from "react"
import { MessageCircle, ShoppingCart, Star } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const DATA = [
  {
    img: "https://v3.material-tailwind.com/mackbook-mockup.png",
    title: "UltraLaptop Pro 15",
    price: "$2,599",
  },
  {
    img: "https://v3.material-tailwind.com/mackbook-mockup.png",
    title: "WorkStation Elite 14",
    price: "$2,799",
  },
  {
    img: "https://v3.material-tailwind.com/mackbook-mockup.png",
    title: "UltraElite 22",
    price: "$2,899",
  },
]

const TABLE_HEAD = [
  {
    title: "Brand",
    options: ["UltraLaptop Pro 15", "WorkStation Elite 14", "UltraElite 22"],
  },
  {
    title: "Processor",
    options: [
      "Intel Core i7, 10th Gen",
      "AMD Ryzen 9, 5900HX",
      "Intel Core i9, 11th Gen",
    ],
  },
  {
    title: "Battery Life",
    options: ["Up to 12 hours", "Up to 8 hours", "Up to 10 hours"],
  },
  {
    title: "Weight",
    options: ["1.8 kg", "2.9 kg", "1.5 kg"],
  },
  {
    title: "Warranty",
    options: [
      "2 Year Standard Warranty",
      "2 Years Extended Warranty",
      "3 Years Premium Warranty",
    ],
  },
  {
    title: "Price",
    star: true,
    price: [
      <Price key="1" reviews="134" value={4} />,
      <Price key="2" reviews="44" value={4} />,
      <Price key="3" reviews="76" value={5} />,
    ],
    options: ["", "", ""],
  },
  {
    title: "Availability",
    stock: [
      <Availability key={1} />,
      <Availability key={2} />,
      <Availability key={3} />,
    ],
    options: ["", "", ""],
  },
]

interface TableHeadProps {
  title: string
  options?: string[]
  price?: React.ReactNode[]
  stock?: React.ReactNode[]
}

function TableHead({ title, options = [], price, stock }: TableHeadProps) {
  return (
    <div className="border-border hover:bg-muted/30 grid min-w-[64rem] grid-cols-4 place-items-start gap-x-6 border-t px-6 py-4 transition-colors">
      <p className="text-muted-foreground text-sm font-medium">{title}</p>
      {price}
      {stock}
      {options.map((option, key) => (
        <p key={key} className="text-center text-sm font-medium">
          {option}
        </p>
      ))}
    </div>
  )
}

function Availability() {
  return (
    <Badge
      variant="secondary"
      className="bg-green-100 text-green-700 hover:bg-green-100 dark:bg-green-900/30 dark:text-green-400"
    >
      In Stock
    </Badge>
  )
}

interface PriceProps {
  reviews: string
  value: number
}

function Price({ reviews, value }: PriceProps) {
  const [rated] = React.useState(value)

  return (
    <div className="flex flex-wrap items-center gap-2">
      <div className="flex items-center gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < rated
                ? "fill-yellow-500 text-yellow-500"
                : "fill-muted text-muted-foreground"
            }`}
          />
        ))}
      </div>
      <p className="text-muted-foreground inline-block text-sm">
        {rated}.0 ({reviews} Reviews)
      </p>
    </div>
  )
}

export default function AdvancedComparisonTable() {
  return (
    <Card className="overflow-hidden shadow-sm transition-all hover:shadow-lg">
      <div>
        <CardHeader className="m-0 grid w-full grid-cols-1 items-center gap-x-6 gap-y-8 p-6 sm:grid-cols-3 lg:grid-cols-4">
          <div className="col-span-full space-y-4 lg:col-span-1">
            <div className="bg-muted rounded-lg p-3">
              <MessageCircle className="text-muted-foreground h-6 w-6" />
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold">Still undecided?</h3>
              <p className="text-muted-foreground text-sm">
                We are here to help you.
              </p>
            </div>
            <Button
              size="sm"
              variant="outline"
              className="hover:bg-muted w-full transition-all"
            >
              Contact Us
            </Button>
          </div>
          {DATA.map(({ img, title, price }, key) => (
            <div key={key} className="space-y-4">
              <div className="bg-muted/30 overflow-hidden rounded-lg p-4">
                <img src={img} alt={title} className="w-full" />
              </div>
              <div>
                <h4 className="mb-1 text-base leading-tight font-semibold">
                  {title}
                </h4>
                <p className="text-foreground mb-3 text-lg font-bold">
                  {price}
                </p>
                <Button
                  size="sm"
                  variant="outline"
                  className="hover:bg-muted w-full gap-2 transition-all"
                >
                  <ShoppingCart className="h-4 w-4" />
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </CardHeader>

        <Separator />

        <CardContent className="overflow-x-scroll rounded-none p-0">
          {TABLE_HEAD.map((props, key) => (
            <TableHead key={key} {...props} />
          ))}
        </CardContent>
      </div>
    </Card>
  )
}
