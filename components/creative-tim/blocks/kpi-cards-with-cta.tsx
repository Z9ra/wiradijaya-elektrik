import { ChevronRight, Database, DollarSign, Send, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardFooter } from "@/components/ui/card"

export default function KpiCardsWithCta() {
  return (
    <div>
      <div className="flex flex-col flex-wrap gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="mb-0.5 text-base font-semibold">Reports Snapshot</p>
          <p className="text-muted-foreground text-sm">
            Upward arrow indicating an increase in revenue compared to the
            previous period.
          </p>
        </div>
        <Button variant="outline" className="w-full sm:w-auto">
          View Report
        </Button>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="overflow-hidden">
          <div className="p-4">
            <div className="mb-2 grid h-12 w-12 place-items-center rounded border stroke-2 shadow-sm">
              <DollarSign className="h-6 w-6" />
            </div>
          </div>
          <div className="px-4 pt-0 pb-4">
            <p className="text-muted-foreground mb-2 block text-xs font-semibold">
              Sales Revenue
            </p>
            <p className="mb-1 block text-lg font-semibold md:text-xl lg:text-2xl">
              $50,846.90
            </p>
          </div>
          <CardFooter className="flex items-center gap-1.5 border-t p-4">
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground text-xs font-semibold transition-colors"
            >
              Get Report
              <ChevronRight className="ml-0.5 inline-block h-3.5 w-3.5 -translate-y-px stroke-2 transition-colors" />
            </a>
          </CardFooter>
        </Card>
        <Card className="overflow-hidden">
          <div className="p-4">
            <div className="mb-2 grid h-12 w-12 place-items-center rounded border stroke-2 shadow-sm">
              <Send className="h-6 w-6" />
            </div>
          </div>
          <div className="px-4 pt-0 pb-4">
            <p className="text-muted-foreground mb-2 block text-xs font-semibold">
              Website Traffic
            </p>
            <p className="mb-1 block text-lg font-semibold md:text-xl lg:text-2xl">
              250,000
            </p>
          </div>
          <CardFooter className="flex items-center gap-1.5 border-t p-4">
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground text-xs font-semibold transition-colors"
            >
              Get Report
              <ChevronRight className="ml-0.5 inline-block h-3.5 w-3.5 -translate-y-px stroke-2 transition-colors" />
            </a>
          </CardFooter>
        </Card>
        <Card className="overflow-hidden">
          <div className="p-4">
            <div className="mb-2 grid h-12 w-12 place-items-center rounded border stroke-2 shadow-sm">
              <Database className="h-6 w-6" />
            </div>
          </div>
          <div className="px-4 pt-0 pb-4">
            <p className="text-muted-foreground mb-2 block text-xs font-semibold">
              Coupon Sales
            </p>
            <p className="mb-1 block text-lg font-semibold md:text-xl lg:text-2xl">
              $10,982.10
            </p>
          </div>
          <CardFooter className="flex items-center gap-1.5 border-t p-4">
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground text-xs font-semibold transition-colors"
            >
              Get Report
              <ChevronRight className="ml-0.5 inline-block h-3.5 w-3.5 -translate-y-px stroke-2 transition-colors" />
            </a>
          </CardFooter>
        </Card>
        <Card className="overflow-hidden">
          <div className="p-4">
            <div className="mb-2 grid h-12 w-12 place-items-center rounded border stroke-2 shadow-sm">
              <Users className="h-6 w-6" />
            </div>
          </div>
          <div className="px-4 pt-0 pb-4">
            <p className="text-muted-foreground mb-2 block text-xs font-semibold">
              User Engagement
            </p>
            <p className="mb-1 block text-lg font-semibold md:text-xl lg:text-2xl">
              90%
            </p>
          </div>
          <CardFooter className="flex items-center gap-1.5 border-t p-4">
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground text-xs font-semibold transition-colors"
            >
              Get Report
              <ChevronRight className="ml-0.5 inline-block h-3.5 w-3.5 -translate-y-px stroke-2 transition-colors" />
            </a>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
