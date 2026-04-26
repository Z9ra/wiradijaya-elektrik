"use client"

import * as React from "react"
import { ArrowDown, ArrowUp, Filter, Package, Star } from "lucide-react"

import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const TABLE_ROW = [
  {
    img: "https://v3.material-tailwind.com/3d-obj-1.jpg",
    product: "Nike v22 Runnings",
    detail: "ID: 1001",
    category: "Fitness",
    orders: "1,500",
    stock: "302",
    ratings: 4,
    revenue: "$450,000",
    isPositive: true,
    refunds: 13,
  },
  {
    img: "https://v3.material-tailwind.com/3d-obj-2.jpg",
    product: "Business Kit",
    detail: "ID: 2077",
    category: "Accessory",
    orders: "12,821",
    stock: "100",
    ratings: 5,
    revenue: "$80,250",
    isPositive: false,
    refunds: 40,
  },
  {
    img: "https://v3.material-tailwind.com/3d-obj-3.jpg",
    product: "Black Chair",
    detail: "ID: 7620",
    category: "Furniture",
    orders: "2,421",
    stock: "391",
    ratings: 2,
    revenue: "$40,600",
    isPositive: false,
    refunds: 54,
  },
  {
    img: "https://v3.material-tailwind.com/3d-obj-4.jpg",
    product: "Wireless Charger",
    detail: "ID: 3501",
    category: "Accessory",
    orders: "5,921",
    stock: "725",
    ratings: 4,
    revenue: "$91,300",
    isPositive: false,
    refunds: 25,
  },
  {
    img: "https://v3.material-tailwind.com/3d-obj-5.jpg",
    product: "Mountain Trip Kit",
    detail: "ID: 8629",
    category: "Travel",
    orders: "921",
    stock: "891",
    ratings: 4,
    revenue: "$140,925",
    isPositive: true,
    refunds: 11,
  },
]

const TABLE_HEAD = [
  "Product",
  "Category",
  "Orders",
  "Stock",
  "Revenue",
  "Customer Ratings",
  "Refunds",
]

export default function TopSellingProductsTable() {
  return (
    <Card className="overflow-hidden shadow-sm transition-all hover:shadow-lg">
      <CardHeader className="m-0 flex w-full flex-wrap items-start justify-between gap-4 rounded-none p-6">
        <div className="flex items-start gap-3">
          <div className="bg-muted rounded-lg p-2.5">
            <Package className="text-muted-foreground h-5 w-5" />
          </div>
          <div>
            <h3 className="mb-1 text-xl font-semibold">Product Inventory</h3>
            <p className="text-muted-foreground text-sm">
              These are details about all products.
            </p>
          </div>
        </div>
        <div className="flex w-full items-center gap-3 sm:w-auto">
          <Button
            variant="outline"
            className="hover:bg-muted flex w-full shrink-0 items-center gap-2 transition-all sm:w-auto"
          >
            View Report
          </Button>
          <Button
            variant="outline"
            className="hover:bg-muted flex w-full shrink-0 items-center gap-2 transition-all sm:w-auto"
          >
            Filter
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>

      <Separator />

      <CardContent className="overflow-scroll rounded-none p-0">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr className="bg-muted/30">
              {TABLE_HEAD.map((head) => (
                <th key={head} className="border-border border-b p-4">
                  <p className="text-sm font-semibold">{head}</p>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROW.map(
              (
                {
                  img,
                  product,
                  detail,
                  orders,
                  category,
                  stock,
                  revenue,
                  ratings,
                  isPositive,
                  refunds,
                },
                index
              ) => (
                <tr
                  key={product}
                  className="group hover:bg-muted/20 transition-colors"
                >
                  <td className="border-border border-b p-4 group-last:border-none">
                    <div className="flex items-center gap-3">
                      <Avatar className="border-border bg-muted/50 h-12 w-12 rounded-lg border">
                        <AvatarImage
                          src={img}
                          alt={product}
                          className="object-cover"
                        />
                      </Avatar>
                      <div className="space-y-1">
                        <p className="text-sm font-semibold">{product}</p>
                        <p className="text-muted-foreground text-xs">
                          {detail}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="border-border border-b p-4 group-last:border-none">
                    <Badge
                      variant="secondary"
                      className="bg-muted w-max text-xs"
                    >
                      {category}
                    </Badge>
                  </td>
                  <td className="border-border border-b p-4 group-last:border-none">
                    <p className="text-muted-foreground text-sm">{orders}</p>
                  </td>
                  <td className="border-border border-b p-4 group-last:border-none">
                    <p className="text-muted-foreground text-sm">{stock}</p>
                  </td>
                  <td className="border-border border-b p-4 group-last:border-none">
                    <p className="text-sm font-semibold">{revenue}</p>
                  </td>
                  <td className="border-border border-b p-4 group-last:border-none">
                    <div className="flex flex-wrap items-center gap-2">
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < ratings
                                ? "fill-yellow-500 text-yellow-500"
                                : "fill-muted text-muted-foreground"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-muted-foreground inline-block text-sm">
                        {ratings}.0
                      </p>
                    </div>
                  </td>
                  <td className="border-border border-b p-4 group-last:border-none">
                    <div className="flex flex-wrap items-center gap-2">
                      <div
                        className={`rounded-full p-1 ${isPositive ? "bg-green-100 dark:bg-green-900/30" : "bg-red-100 dark:bg-red-900/30"}`}
                      >
                        {isPositive ? (
                          <ArrowUp className="h-4 w-4 stroke-2 text-green-600 dark:text-green-400" />
                        ) : (
                          <ArrowDown className="h-4 w-4 stroke-2 text-red-600 dark:text-red-400" />
                        )}
                      </div>
                      <p className="inline-block text-sm font-medium">
                        {refunds}
                      </p>
                    </div>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </CardContent>
    </Card>
  )
}
