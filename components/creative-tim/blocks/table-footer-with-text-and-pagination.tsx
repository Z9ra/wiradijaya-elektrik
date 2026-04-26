"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export function TableFooterWithTextAndPagination() {
  return (
    <div className="space-y-4">
      <Separator />
      <div className="bg-muted/20 flex items-center justify-end gap-6 rounded-lg p-4">
        <p className="text-sm font-medium">
          <span className="text-foreground font-semibold">5 - 10</span> of{" "}
          <span className="text-foreground font-semibold">200</span>
        </p>
        <Separator orientation="vertical" className="h-6" />
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="hover:bg-background transition-all"
          >
            <ChevronLeft className="h-4 w-4 stroke-2" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="hover:bg-background transition-all"
          >
            <ChevronRight className="h-4 w-4 stroke-2" />
          </Button>
        </div>
      </div>
    </div>
  )
}
