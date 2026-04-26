"use client"

import * as React from "react"
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  Download,
  FileText,
  Search,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

const TABLE_ROW = [
  {
    number: "#MS-415646",
    customer: "Viking Burrito",
    amount: "$14,000",
    issued: "Jan 31, 2024",
    date: "Feb 28, 2024",
    status: "Paid",
  },
  {
    number: "#RV-126749",
    customer: "Stone Tech Zone",
    amount: "$3,000",
    issued: "Feb 15, 2024",
    date: "Mar 15, 2024",
    status: "Pending",
  },
  {
    number: "#QW-103578",
    customer: "Fiber Notion",
    amount: "$20,000",
    issued: "Mar 01, 2024",
    date: "Apr 01, 2024",
    status: "Overdue",
  },
  {
    number: "#MS-415688",
    customer: "Blue Bird",
    amount: "$5,000",
    issued: "Mar 20, 2024",
    date: "Apr 20, 2024",
    status: "Paid",
  },
  {
    number: "#RV-126300",
    customer: "Code Space",
    amount: "$2,000",
    issued: "Mar 27, 2024",
    date: "Apr 27, 2024",
    status: "Paid",
  },
]

const TABLE_HEAD = [
  "Customer",
  "Amount",
  "Issued",
  "Payment Date",
  "Status",
  "",
]

export default function InvoicesTable() {
  return (
    <Card className="h-full w-full overflow-hidden shadow-sm transition-all hover:shadow-lg">
      <CardHeader className="m-0 flex w-full flex-wrap items-start justify-between gap-4 rounded-none p-6">
        <div className="flex items-start gap-3">
          <div className="bg-muted rounded-lg p-2.5">
            <FileText className="text-muted-foreground h-5 w-5" />
          </div>
          <div>
            <h3 className="mb-1 text-xl font-semibold">Invoices</h3>
            <p className="text-muted-foreground text-sm">
              <strong className="text-foreground font-semibold">30 done</strong>{" "}
              this month
            </p>
          </div>
        </div>
        <div className="flex w-full shrink-0 flex-col items-center gap-3 sm:flex-row md:w-max">
          <div className="relative w-full sm:w-72">
            <Input
              placeholder="Search here..."
              className="pl-9 transition-all focus:ring-2"
            />
            <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
          </div>
          <Button className="w-full transition-all sm:w-auto">
            New Invoice
          </Button>
        </div>
      </CardHeader>

      <Separator />

      <CardContent className="overflow-scroll rounded-none p-0">
        <table className="w-full min-w-max table-auto">
          <thead>
            <tr className="bg-muted/30">
              <th className="border-border border-b p-4">
                <div className="flex items-center gap-2">
                  <Checkbox id="number" />
                  <label
                    htmlFor="number"
                    className="cursor-pointer text-sm font-semibold"
                  >
                    Number
                  </label>
                </div>
              </th>
              {TABLE_HEAD.map((el) => (
                <th key={el} className="border-border border-b p-4 text-start">
                  <p className="text-sm font-semibold">{el}</p>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROW.map(
              ({ number, date, status, customer, issued, amount }) => (
                <tr
                  key={customer}
                  className="group hover:bg-muted/20 transition-colors"
                >
                  <td className="border-border border-b p-4 group-last:border-0">
                    <div className="flex items-center gap-2">
                      <Checkbox id={number} />
                      <label
                        htmlFor={number}
                        className="cursor-pointer text-sm font-medium"
                      >
                        {number}
                      </label>
                    </div>
                  </td>
                  <td className="border-border border-b p-4 group-last:border-0">
                    <p className="text-sm font-semibold">{customer}</p>
                  </td>
                  <td className="border-border border-b p-4 group-last:border-0">
                    <p className="text-sm font-semibold">{amount}</p>
                  </td>
                  <td className="border-border border-b p-4 group-last:border-0">
                    <p className="text-muted-foreground text-sm">{issued}</p>
                  </td>
                  <td className="border-border border-b p-4 group-last:border-0">
                    <p className="text-muted-foreground text-sm">{date}</p>
                  </td>
                  <td className="border-border border-b p-4 group-last:border-0">
                    <Badge
                      variant="secondary"
                      className={`w-max ${
                        status === "Paid"
                          ? "bg-green-100 text-green-700 hover:bg-green-100 dark:bg-green-900/30 dark:text-green-400"
                          : status === "Pending"
                            ? "bg-blue-100 text-blue-700 hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400"
                            : "bg-red-100 text-red-700 hover:bg-red-100 dark:bg-red-900/30 dark:text-red-400"
                      }`}
                    >
                      {status}
                    </Badge>
                  </td>
                  <td className="border-border border-b p-4 text-end group-last:border-0">
                    <div className="flex justify-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="hover:bg-muted h-8 w-8 transition-all hover:shadow-sm"
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="hover:bg-muted h-8 w-8 transition-all hover:shadow-sm"
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </CardContent>

      <Separator />

      <CardFooter className="bg-muted/20 flex flex-wrap items-center justify-between gap-4 p-4">
        <p className="text-sm font-medium">
          Page 2{" "}
          <span className="text-muted-foreground font-normal">of 10</span>
        </p>
        <div className="flex items-center gap-2">
          <Button
            size="sm"
            variant="outline"
            className="hover:bg-background flex items-center gap-1.5 transition-all"
          >
            <ChevronLeft className="h-4 w-4 stroke-2" />
            Prev
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="hover:bg-background flex items-center gap-1.5 transition-all"
          >
            Next
            <ChevronRight className="h-4 w-4 stroke-2" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
