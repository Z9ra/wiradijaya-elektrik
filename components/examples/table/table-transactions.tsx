import { Download, Pencil, Search } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const TABLE_HEAD = ["Transaction", "Amount", "Date", "Status", "Account", ""]

const TABLE_ROWS = [
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-spotify.svg",
    name: "Spotify",
    amount: "$2,500",
    date: "Wed 3:00pm",
    status: "paid",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-amazon.svg",
    name: "Amazon",
    amount: "$5,000",
    date: "Wed 1:00pm",
    status: "paid",
    account: "master-card",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-pinterest.svg",
    name: "Pinterest",
    amount: "$3,400",
    date: "Mon 7:40pm",
    status: "pending",
    account: "master-card",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-google.svg",
    name: "Google",
    amount: "$1,000",
    date: "Wed 5:00pm",
    status: "paid",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-netflix.svg",
    name: "netflix",
    amount: "$14,000",
    date: "Wed 3:30am",
    status: "cancelled",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
]

export default function TableTransactions() {
  return (
    <div className="w-full px-2">
      <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
        <div>
          <h6 className="text-base font-semibold">Recent Transactions</h6>
          <p className="text-muted-foreground mt-1 text-sm">
            These are details about the last transactions
          </p>
        </div>
        <div className="flex w-full shrink-0 gap-2 md:w-max">
          <div className="relative w-full md:w-72">
            <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
            <Input placeholder="Search" className="pl-9" />
          </div>
          <Button size="sm">
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
        </div>
      </div>

      <div className="border-border w-full overflow-hidden rounded-lg border">
        <table className="w-full text-left">
          <thead className="border-border bg-muted border-b text-sm font-medium">
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className="px-2.5 py-2 text-start font-medium">
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(
              (
                {
                  img,
                  name,
                  amount,
                  date,
                  status,
                  account,
                  accountNumber,
                  expiry,
                },
                index
              ) => {
                const isLast = index === TABLE_ROWS.length - 1
                const classes = isLast ? "p-4" : "p-4 border-b border-border"

                return (
                  <tr key={name}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <Avatar className="border-border bg-muted h-10 w-10 rounded-md border p-1">
                          <AvatarImage
                            src={img}
                            alt={name}
                            className="object-contain"
                          />
                          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <span className="text-sm font-bold">{name}</span>
                      </div>
                    </td>
                    <td className={classes}>
                      <span className="text-sm">{amount}</span>
                    </td>
                    <td className={classes}>
                      <span className="text-sm">{date}</span>
                    </td>
                    <td className={classes}>
                      <Badge
                        variant={
                          status === "paid"
                            ? "default"
                            : status === "pending"
                              ? "secondary"
                              : "destructive"
                        }
                      >
                        {status}
                      </Badge>
                    </td>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <div className="border-border h-9 w-12 rounded-md border p-1">
                          <Avatar className="h-full w-full rounded-none">
                            <AvatarImage
                              src={
                                account === "visa"
                                  ? "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/visa.png"
                                  : "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/mastercard.png"
                              }
                              alt={account}
                              className="h-full w-full object-contain p-1"
                            />
                            <AvatarFallback className="rounded-none">
                              {account.charAt(0).toUpperCase()}
                            </AvatarFallback>
                          </Avatar>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm capitalize">
                            {account.split("-").join(" ")} {accountNumber}
                          </span>
                          <span className="text-muted-foreground text-xs">
                            {expiry}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <Pencil className="h-4 w-4" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Edit User</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </td>
                  </tr>
                )
              }
            )}
          </tbody>
        </table>
      </div>
      <div className="border-border flex items-center justify-between border-t py-4">
        <Button variant="outline" size="sm">
          Previous
        </Button>
        <div className="flex items-center gap-2">
          <Button size="sm" variant="default">
            1
          </Button>
          <Button variant="ghost" size="sm">
            2
          </Button>
          <Button variant="ghost" size="sm">
            3
          </Button>
          <Button variant="ghost" size="sm">
            ...
          </Button>
          <Button variant="ghost" size="sm">
            8
          </Button>
          <Button variant="ghost" size="sm">
            9
          </Button>
          <Button variant="ghost" size="sm">
            10
          </Button>
        </div>
        <Button variant="outline" size="sm">
          Next
        </Button>
      </div>
    </div>
  )
}
