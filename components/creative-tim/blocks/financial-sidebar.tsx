"use client"

import { useState } from "react"
import {
  ChevronDown,
  ChevronRight,
  CreditCard,
  Headphones,
  Info,
  LayoutDashboard,
  LayoutGrid,
  Paperclip,
  ShoppingCart,
  Users,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Separator } from "@/components/ui/separator"

export default function FinancialSidebar() {
  const [isInvoicesOpen, setIsInvoicesOpen] = useState(false)

  return (
    <div className="bg-background flex h-screen w-full max-w-xs flex-col overflow-y-scroll rounded-lg border shadow-sm">
      <div className="px-6 pt-6 pb-4">
        <div className="mb-6 flex items-center gap-3 border-b pb-4">
          <div className="bg-muted rounded-lg p-2">
            <LayoutDashboard className="text-muted-foreground h-5 w-5" />
          </div>
          <p className="text-xl font-semibold">Creative Tim UI</p>
        </div>
        <div className="bg-muted/20 rounded-lg border-b pb-6 pl-4">
          <small className="text-muted-foreground mb-2 block text-sm font-semibold">
            Balance
          </small>
          <h4 className="text-xl font-bold md:text-2xl lg:text-3xl">
            $1,452.14
          </h4>
        </div>
      </div>

      <div className="flex-1 px-6 pb-6">
        <small className="text-muted-foreground mb-3 block pl-2.5 text-sm font-semibold">
          Main
        </small>
        <ul className="mb-6 flex min-w-60 flex-col gap-0.5">
          <li className="text-muted-foreground hover:text-foreground hover:bg-secondary flex cursor-pointer items-center rounded-md px-2.5 py-2 transition-colors">
            <span className="mr-2.5 grid shrink-0 place-items-center">
              <LayoutGrid className="h-5 w-5" />
            </span>
            <span className="font-medium">Overview</span>
          </li>
          <li className="text-muted-foreground hover:text-foreground hover:bg-secondary flex cursor-pointer items-center rounded-md px-2.5 py-2 transition-colors">
            <span className="mr-2.5 grid shrink-0 place-items-center">
              <CreditCard className="h-5 w-5" />
            </span>
            <span className="font-medium">Transactions</span>
          </li>
          <li className="text-muted-foreground hover:text-foreground hover:bg-secondary flex cursor-pointer items-center rounded-md px-2.5 py-2 transition-colors">
            <span className="mr-2.5 grid shrink-0 place-items-center">
              <Users className="h-5 w-5" />
            </span>
            <span className="font-medium">Customers</span>
          </li>
        </ul>

        <Separator className="mb-6" />

        <small className="text-muted-foreground mb-3 block pl-2.5 text-sm font-semibold">
          Account
        </small>
        <ul className="mb-6 flex min-w-60 flex-col gap-0.5">
          <li className="text-muted-foreground hover:text-foreground hover:bg-secondary flex cursor-pointer items-center rounded-md px-2.5 py-2 transition-colors">
            <span className="mr-2.5 grid shrink-0 place-items-center">
              <Info className="h-5 w-5" />
            </span>
            <span className="font-medium">Report</span>
          </li>
          <li className="text-muted-foreground hover:text-foreground hover:bg-secondary flex cursor-pointer items-center rounded-md px-2.5 py-2 transition-colors">
            <span className="mr-2.5 grid shrink-0 place-items-center">
              <Paperclip className="h-5 w-5" />
            </span>
            <span className="font-medium">Subscribers</span>
          </li>
          <li>
            <Collapsible open={isInvoicesOpen} onOpenChange={setIsInvoicesOpen}>
              <CollapsibleTrigger className="text-muted-foreground hover:text-foreground hover:bg-secondary flex w-full items-center rounded-md px-2.5 py-2 transition-colors">
                <span className="mr-2.5 grid shrink-0 place-items-center">
                  <ShoppingCart className="h-5 w-5" />
                </span>
                <span className="font-medium">Invoices</span>
                <span className="ml-auto grid shrink-0 place-items-center pl-2.5">
                  {isInvoicesOpen ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </span>
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-1 space-y-1">
                <div className="text-muted-foreground hover:text-foreground hover:bg-secondary/50 cursor-pointer rounded-md px-2.5 py-1.5 pl-10 text-sm font-medium transition-colors">
                  Generate Invoices
                </div>
                <div className="text-muted-foreground hover:text-foreground hover:bg-secondary/50 cursor-pointer rounded-md px-2.5 py-1.5 pl-10 text-sm font-medium transition-colors">
                  Past Invoices
                </div>
              </CollapsibleContent>
            </Collapsible>
          </li>
          <li className="text-muted-foreground hover:text-foreground hover:bg-secondary flex cursor-pointer items-center rounded-md px-2.5 py-2 transition-colors">
            <span className="mr-2.5 grid shrink-0 place-items-center">
              <Headphones className="h-5 w-5" />
            </span>
            <span className="font-medium">Help and Support</span>
          </li>
        </ul>

        <Separator className="mb-3" />

        <small className="text-muted-foreground mb-3 block pl-2.5 text-sm font-semibold">
          Team Members
        </small>
      </div>

      <div className="mt-auto p-6">
        <ul className="mb-6 flex min-w-60 flex-col gap-0.5">
          <li className="text-muted-foreground hover:text-foreground hover:bg-secondary flex cursor-pointer items-center rounded-md px-2.5 py-2 transition-colors">
            <span className="mr-2.5 grid shrink-0 place-items-center">
              <Avatar className="h-8 w-8">
                <AvatarImage
                  src="https://v3.material-tailwind.com/woman-profile-1.jpg"
                  alt="Brooklyn Alice"
                />
                <AvatarFallback>BA</AvatarFallback>
              </Avatar>
            </span>
            <div className="flex-1 leading-none">
              <small className="text-foreground block text-sm font-semibold">
                Brooklyn Alice
              </small>
              <small className="text-muted-foreground text-xs">
                alice@mail.com
              </small>
            </div>
            <span className="ml-auto grid shrink-0 place-items-center pl-2.5">
              <ChevronRight className="h-5 w-5" />
            </span>
          </li>
        </ul>
        <Separator className="my-4" />
        <small className="text-muted-foreground block text-center text-sm">
          © 2024 Creative Tim UI
        </small>
      </div>
    </div>
  )
}
