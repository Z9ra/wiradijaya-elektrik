"use client"

import * as React from "react"
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  Download,
  Filter,
  Search,
} from "lucide-react"

import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"

const TABLE_ROW = [
  {
    img: "https://v3.material-tailwind.com/3d-obj-1.jpg",
    product: "Nike v22 Runnings",
    detail: "ID: 1001",
    category: "Fitness",
    price: "$99.99",
    sku: "WH12345",
    supplier: "SportyFeet",
    date: "2024-07-20",
    status: "25 pcs",
    availabiliy: "40 pcs",
  },
  {
    img: "https://v3.material-tailwind.com/3d-obj-2.jpg",
    product: "Business Kit",
    detail: "ID: 2077",
    category: "Accessory",
    price: "$59.99",
    sku: "BK12345",
    supplier: "TechInnovate",
    date: "2024-07-15",
    status: "15 pcs",
    availabiliy: "17 pcs",
  },
  {
    img: "https://v3.material-tailwind.com/3d-obj-3.jpg",
    product: "Black Chair",
    detail: "ID: 7620",
    category: "Furniture",
    price: "$49.99",
    sku: "BC2345",
    supplier: "HomeEssentials",
    date: "2024-07-22",
    status: "40 pcs",
    availabiliy: "132 pcs",
  },
  {
    img: "https://v3.material-tailwind.com/3d-obj-4.jpg",
    product: "Wireless Charger",
    detail: "ID: 3501",
    category: "Accessory",
    price: "$99.99",
    sku: "WC12345",
    supplier: "TechInnovate",
    date: "2024-07-18",
    status: "8 pcs",
    availabiliy: "80 pcs",
  },
  {
    img: "https://v3.material-tailwind.com/3d-obj-4.jpg",
    product: "Mountain Trip Kit",
    detail: "ID: 8629",
    category: "Travel",
    price: "$149.99",
    sku: "MTK12345",
    supplier: "HomeEssentials",
    date: "2024-07-25",
    status: "5 pcs",
    availabiliy: "76 pcs",
  },
]

const TABLE_HEAD = [
  "Product Name",
  "Category",
  "In-Store Availability",
  "Online Availability",
  "Price",
  "SKU",
  "Supplier",
  "Last Restock Date",
]

export default function ProductInventoryTable() {
  const [active, setActive] = React.useState(1)

  function getItemProps(index) {
    return {
      color: "secondary",
      variant: active === index ? "outline" : "ghost",
      onClick: () => setActive(index),
    }
  }

  function next() {
    if (active === 3) return

    setActive(active + 1)
  }

  function prev() {
    if (active === 1) return

    setActive(active - 1)
  }

  return (
    <Card>
      <CardHeader className="m-0 flex w-full flex-wrap items-start justify-between gap-4 rounded-none p-4">
        <div>
          <p className="text-default mb-1 text-lg leading-relaxed font-medium font-semibold">
            Product Inventory
          </p>
          <p className="text-foreground block text-sm">
            These are details about all products.
          </p>
        </div>
        <div className="flex w-full shrink-0 flex-col items-center gap-3 sm:flex-row md:w-max">
          <div className="relative w-full sm:w-72">
            <Input placeholder="Search here..." className="pl-9" />
            <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
          </div>
          <div className="flex w-full gap-3 sm:w-max">
            <Button
              variant="outline"
              color="secondary"
              className="flex w-full items-center gap-2 sm:w-auto"
            >
              Filter
              <Filter className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              color="secondary"
              className="flex w-full items-center gap-2 sm:w-auto"
            >
              Export
              <Download className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="mt-4 overflow-scroll rounded-none p-0">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className="border-surface border-b p-4">
                  <p className="text-default block text-sm font-medium">
                    {head}
                  </p>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROW.map(
              ({
                img,
                product,
                detail,
                category,
                price,
                sku,
                status,
                availabiliy,
                supplier,
                date,
              }) => (
                <tr key={product}>
                  <td className="border-surface border-b p-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="rounded">
                        <AvatarImage src={img} alt={product} />
                      </Avatar>
                      <div className="space-y-1">
                        <p className="text-default block text-sm font-semibold">
                          {product}
                        </p>
                        <p className="text-foreground block text-sm">
                          {detail}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="border-surface border-b p-4">
                    <Badge size="sm" variant="ghost" className="w-max">
                      {category}
                    </Badge>
                  </td>
                  <td className="border-surface border-b p-4">
                    <Badge
                      size="sm"
                      variant="ghost"
                      className="w-max"
                      color={
                        status === "5 pcs" || status === "8 pcs"
                          ? "error"
                          : status === "25 pcs" || status === "40 pcs"
                            ? "success"
                            : "warning"
                      }
                    >
                      {status}
                    </Badge>
                  </td>
                  <td className="border-surface border-b p-4">
                    <Badge
                      size="sm"
                      variant="ghost"
                      color={
                        availabiliy === "40 pcs" ||
                        availabiliy === "132 pcs" ||
                        availabiliy === "80 pcs" ||
                        availabiliy === "76 pcs"
                          ? "success"
                          : "warning"
                      }
                      className="w-max"
                    >
                      {availabiliy}
                    </Badge>
                  </td>
                  <td className="border-surface border-b p-4">
                    <p className="text-foreground block text-sm">{price}</p>
                  </td>
                  <td className="border-surface border-b p-4">
                    <p className="text-foreground block text-sm">{sku}</p>
                  </td>
                  <td className="border-surface border-b p-4">
                    <p className="text-foreground block text-sm">{supplier}</p>
                  </td>
                  <td className="border-surface border-b p-4">
                    <p className="text-foreground flex items-center gap-2 text-sm">
                      <Clock className="h-3.5 w-3.5" />
                      {date}
                    </p>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </CardContent>
      <CardFooter className="flex flex-wrap items-center justify-between gap-4 p-4">
        <p className="text-default block text-sm">
          <span className="text-foreground font-normal">Showing</span> 1-5{" "}
          <span className="text-foreground font-normal">of</span> 45
        </p>
        <div className="flex items-center gap-2">
          <Button
            size="sm"
            variant="outline"
            color="secondary"
            className="flex items-center gap-1.5"
            onClick={prev}
            disabled={active === 1}
          >
            <ChevronLeft className="h-4 w-4 stroke-2" /> Prev
          </Button>
          <Button size="icon-sm" {...getItemProps(1)}>
            1
          </Button>
          <Button size="icon-sm" {...getItemProps(2)}>
            2
          </Button>
          <Button size="icon-sm" {...getItemProps(3)}>
            3
          </Button>
          <Button
            size="sm"
            variant="outline"
            color="secondary"
            className="flex items-center gap-1.5"
            onClick={next}
            disabled={active === 3}
          >
            Next
            <ChevronRight className="h-4 w-4 stroke-2" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
