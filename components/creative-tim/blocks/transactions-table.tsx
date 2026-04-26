"use client"

import * as React from "react"
import {
  ChevronLeft,
  ChevronRight,
  Download,
  Filter,
  MoreVertical,
  Receipt,
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
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

const TABLE_ROW = [
  {
    id: "#MS-415646",
    logo: "https://v3.material-tailwind.com/icon/figma.svg",
    title: "Figma INC",
    amount: "$14,000",
    date: "Jan 31, 2024, 3:00 PM",
    account: "visa",
    accountNumber: "1234",
    expiry: "Expiry 06/2026",
    status: "completed",
  },
  {
    id: "#MS-415697",
    logo: "https://v3.material-tailwind.com/icon/github.svg",
    title: "Medium",
    amount: "$2,500",
    date: "Feb 01, 2024, 1:00 PM",
    account: "master-card",
    accountNumber: "1234",
    expiry: "Expiry 06/2026",
    status: "completed",
  },
  {
    id: "#MS-415698",
    logo: "https://v3.material-tailwind.com/icon/spotify.svg",
    title: "Spotify",
    amount: "$5,000",
    date: "Feb 02, 2024, 3:00 PM",
    account: "visa",
    accountNumber: "1234",
    expiry: "Expiry 06/2026",
    status: "pending",
  },
  {
    id: "#MS-415699",
    logo: "https://v3.material-tailwind.com/icon/discord.svg",
    title: "Discord",
    amount: "$3,4,00",
    date: "Feb 02, 2024, 4:40 PM",
    account: "visa",
    accountNumber: "1234",
    expiry: "Expiry 06/2026",
    status: "completed",
  },
  {
    id: "#MS-415700",
    logo: "https://v3.material-tailwind.com/icon/google.svg",
    title: "Google Cloud",
    amount: "$1,000",
    date: "Feb 02, 2024, 5:10 PM",
    account: "master-card",
    accountNumber: "1234",
    expiry: "Expiry 06/2026",
    status: "failed",
  },
]

const TABLE_HEAD = ["Transaction", "Amount", "Date", "Account", "Status", ""]

export default function TransactionsTable() {
  return (
    <Card className="overflow-hidden shadow-sm transition-all hover:shadow-lg">
      <CardHeader className="m-0 flex w-full flex-wrap items-start justify-between gap-4 rounded-none p-6">
        <div className="flex items-start gap-3">
          <div className="bg-muted rounded-lg p-2.5">
            <Receipt className="text-muted-foreground h-5 w-5" />
          </div>
          <div>
            <h3 className="mb-1 text-xl font-semibold">Transactions Table</h3>
            <p className="text-muted-foreground text-sm">
              These are details about the last transactions
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
          <div className="flex w-full gap-3 sm:w-max">
            <Button
              variant="outline"
              className="hover:bg-muted flex w-full items-center gap-2 transition-all sm:w-auto"
            >
              Filter
              <Filter className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="hover:bg-muted flex w-full items-center gap-2 transition-all sm:w-auto"
            >
              Export
              <Download className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>

      <Separator />

      <CardContent className="overflow-scroll rounded-none p-0">
        <table className="w-full min-w-max table-auto">
          <thead>
            <tr className="bg-muted/30">
              <th className="border-border border-b p-4">
                <div className="flex items-center gap-2">
                  <Checkbox id="id" />
                  <label
                    htmlFor="id"
                    className="cursor-pointer text-sm font-semibold"
                  >
                    ID
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
              ({
                id,
                logo,
                title,
                date,
                status,
                expiry,
                account,
                accountNumber,
                amount,
              }) => (
                <tr
                  key={id}
                  className="group hover:bg-muted/20 transition-colors"
                >
                  <td className="border-border border-b p-4 group-last:border-0">
                    <div className="flex items-center gap-2">
                      <Checkbox id={id} />
                      <label
                        htmlFor={id}
                        className="cursor-pointer text-sm font-medium"
                      >
                        {id}
                      </label>
                    </div>
                  </td>
                  <td className="border-border border-b p-4 group-last:border-0">
                    <div className="flex items-center gap-3">
                      <div className="border-border bg-muted/50 group-hover:border-primary/50 group-hover:bg-muted rounded-lg border p-2 transition-all">
                        <Avatar className="h-5 w-5">
                          <AvatarImage src={logo} alt={title} />
                        </Avatar>
                      </div>
                      <p className="text-sm font-semibold">{title}</p>
                    </div>
                  </td>
                  <td className="border-border border-b p-4 group-last:border-0">
                    <p className="text-sm font-semibold">{amount}</p>
                  </td>
                  <td className="border-border border-b p-4 group-last:border-0">
                    <p className="text-muted-foreground text-sm">{date}</p>
                  </td>
                  <td className="border-border border-b p-4 group-last:border-0">
                    <div className="flex items-center gap-3">
                      <div className="border-border dark:bg-muted h-10 w-14 overflow-hidden rounded-lg border bg-white p-1.5 shadow-sm">
                        <Avatar className="h-full w-full rounded-none object-contain">
                          <AvatarImage
                            src={
                              account === "visa"
                                ? "https://v3.material-tailwind.com/visa.webp"
                                : "https://v3.material-tailwind.com/mastercard.webp"
                            }
                            alt={account}
                          />
                        </Avatar>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-sm font-semibold capitalize">
                          {account.split("-").join(" ")} {accountNumber}
                        </p>
                        <p className="text-muted-foreground text-xs">
                          {expiry}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="border-border border-b p-4 group-last:border-0">
                    <Badge
                      variant="secondary"
                      className={`w-max capitalize ${
                        status === "completed"
                          ? "bg-green-100 text-green-700 hover:bg-green-100 dark:bg-green-900/30 dark:text-green-400"
                          : status === "pending"
                            ? "bg-blue-100 text-blue-700 hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400"
                            : "bg-red-100 text-red-700 hover:bg-red-100 dark:bg-red-900/30 dark:text-red-400"
                      }`}
                    >
                      {status}
                    </Badge>
                  </td>
                  <td className="border-border border-b p-4 text-end group-last:border-0">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          className="hover:bg-muted h-8 w-8 transition-all"
                        >
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600 dark:text-red-400">
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
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
