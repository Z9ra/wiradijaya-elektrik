"use client"

import * as React from "react"
import {
  ChevronLeft,
  ChevronRight,
  Download,
  Filter,
  MoreVertical,
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
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const TABLE_ROW = [
  {
    id: "#10421",
    img: "https://v3.material-tailwind.com/woman-profile-1.jpg",
    date: "01 Nov 2023, 10:20 AM",
    status: "Paid",
    customer: "emma@mail.com",
    product: "Nike Sport 2",
    revenue: "$140,20",
    refunds: 13,
  },
  {
    id: "#10422",
    img: "https://v3.material-tailwind.com/man-profile-1.jpg",
    date: "01 Nov 2023, 10:53 AM",
    status: "Paid",
    customer: "andrew@mail.com",
    product: "Valvet T-Shirt",
    revenue: "$42,00",
    refunds: 40,
  },
  {
    id: "#10423",
    img: "https://v3.material-tailwind.com/man-profile-2.jpg",
    date: "01 Nov 2023, 11:13 AM",
    status: "Refunded",
    customer: "alice@mail.com",
    product: "Leather Wallet",
    revenue: "$25,50",
    refunds: 54,
  },
  {
    id: "#10424",
    img: "https://v3.material-tailwind.com/woman-profile-2.jpg",
    date: "01 Nov 2023, 12:20 AM",
    status: "Paid",
    customer: "sebastian@mail.com",
    product: "Bracelet Onu-Lino",
    revenue: "$190,40",
    refunds: 25,
  },
  {
    id: "#10425",
    img: "https://v3.material-tailwind.com/woman-profile-3.jpg",
    date: "01 Nov 2023, 1:40 PM",
    status: "Cancel",
    customer: "arrias@mail.com",
    product: "Phone Case Pink x2",
    revenue: "$200,90",
    refunds: 11,
  },
]

const TABLE_HEAD = ["Date", "Status", "Customer", "Product", "Revenue", ""]

export default function OrdersTable() {
  return (
    <Card>
      <CardHeader className="m-0 flex w-full flex-wrap items-start justify-between gap-4 rounded-none p-4">
        <div>
          <p className="text-default mb-1 text-lg leading-relaxed font-medium font-semibold">
            Orders Table
          </p>
          <p className="text-foreground block text-sm">All status 2024</p>
        </div>
        <div className="flex w-full items-center gap-3 sm:w-max">
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
      </CardHeader>
      <CardContent className="mt-4 overflow-scroll rounded-none p-0">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              <th className="border-surface border-b p-4">
                <div className="flex items-center gap-2">
                  <Checkbox id="id" />
                  <label
                    htmlFor="id"
                    className="text-default block text-sm font-medium"
                  >
                    ID
                  </label>
                </div>
              </th>
              {TABLE_HEAD.map((el) => (
                <th key={el} className="border-surface border-b p-4">
                  <p className="text-default block text-sm font-medium">{el}</p>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROW.map(
              ({ id, img, date, status, customer, product, revenue }) => (
                <tr key={id}>
                  <td className="border-surface border-b p-4">
                    <div className="flex items-center gap-2">
                      <Checkbox id={id} />
                      <label
                        htmlFor={id}
                        className="text-foreground block text-sm font-medium"
                      >
                        {id}
                      </label>
                    </div>
                  </td>
                  <td className="border-surface border-b p-4">
                    <p className="text-foreground block text-sm">{date}</p>
                  </td>
                  <td className="border-surface border-b p-4">
                    <Badge
                      size="sm"
                      variant="ghost"
                      className="w-max"
                      color={
                        status === "Paid"
                          ? "success"
                          : status === "Refunded"
                            ? "primary"
                            : "error"
                      }
                    >
                      {status}
                    </Badge>
                  </td>
                  <td className="border-surface border-b p-4">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={img} alt={product} />
                      </Avatar>
                      <p className="text-foreground block text-sm">
                        {customer}
                      </p>
                    </div>
                  </td>
                  <td className="border-surface border-b p-4">
                    <p className="text-foreground block text-sm">{product}</p>
                  </td>
                  <td className="border-surface border-b p-4">
                    <p className="text-foreground block text-sm">{revenue}</p>
                  </td>
                  <td className="border-surface border-b p-4 text-end">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" color="secondary" size="icon">
                          <MoreVertical className="h-5 w-5 stroke-2" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </CardContent>
      <CardFooter className="flex flex-wrap items-center justify-between gap-4 p-4">
        <p className="text-default block text-sm">
          Page 2 <span className="text-foreground font-normal">of 10</span>
        </p>
        <div className="flex items-center gap-2">
          <Button
            size="sm"
            variant="outline"
            color="secondary"
            className="flex items-center gap-1.5"
          >
            <ChevronLeft className="h-4 w-4 stroke-2" />
            Prev
          </Button>
          <Button
            size="sm"
            variant="outline"
            color="secondary"
            className="flex items-center gap-1.5"
          >
            Next
            <ChevronRight className="h-4 w-4 stroke-2" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
