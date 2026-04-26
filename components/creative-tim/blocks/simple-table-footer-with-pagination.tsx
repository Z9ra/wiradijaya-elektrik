"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export function SimpleTableFooterWithPagination() {
  return (
    <div className="space-y-4">
      <Separator />
      <div className="bg-muted/20 flex flex-wrap items-center justify-between gap-6 rounded-lg p-4">
        <p className="text-sm font-medium">
          Page <span className="text-foreground font-semibold">2</span> of{" "}
          <span className="text-foreground font-semibold">10</span>
        </p>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="hover:bg-background gap-1.5 transition-all"
          >
            <ChevronLeft className="h-4 w-4 stroke-2" />
            Prev
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="hover:bg-background gap-1.5 transition-all"
          >
            Next
            <ChevronRight className="h-4 w-4 stroke-2" />
          </Button>
        </div>
      </div>
    </div>
  )
}
