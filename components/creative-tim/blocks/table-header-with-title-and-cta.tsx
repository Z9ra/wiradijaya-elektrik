"use client"

import { ListFilter, ShoppingBag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export function TableHeaderWithTitleAndCta() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col flex-wrap gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <div className="bg-muted rounded-lg p-2.5">
            <ShoppingBag className="text-muted-foreground h-5 w-5" />
          </div>
          <div className="space-y-1">
            <h3 className="text-xl font-semibold">Top Selling Products</h3>
            <p className="text-muted-foreground text-sm">
              Products based on their sales performance in the 2024.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            className="hover:bg-muted w-full transition-all sm:w-auto"
          >
            View Report
          </Button>
          <Button
            variant="outline"
            className="hover:bg-muted w-full gap-2 transition-all sm:w-auto"
          >
            Filter
            <ListFilter className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <Separator />
    </div>
  )
}
