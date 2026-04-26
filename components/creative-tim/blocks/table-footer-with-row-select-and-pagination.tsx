"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

export function TableFooterWithRowSelectAndPagination() {
  return (
    <div className="space-y-4">
      <Separator />
      <div className="bg-muted/20 flex flex-wrap items-center justify-between gap-6 rounded-lg p-4">
        <div className="flex items-center gap-4">
          <p className="text-sm font-medium">
            Results: <span className="text-foreground font-semibold">40</span>
          </p>
          <Separator orientation="vertical" className="h-6" />
          <div className="flex items-center gap-3">
            <p className="text-sm font-medium">Rows per page:</p>
            <Select defaultValue="10">
              <SelectTrigger className="hover:bg-background w-20 transition-all">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="25">25</SelectItem>
                <SelectItem value="50">50</SelectItem>
                <SelectItem value="100">100</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="icon"
            className="hover:bg-background transition-all"
          >
            <ChevronLeft className="h-4 w-4 stroke-2" />
          </Button>
          <p className="flex items-center gap-1 text-sm font-medium">
            Page <span className="text-foreground font-semibold">2</span> of{" "}
            <span className="text-foreground font-semibold">10</span>
          </p>
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
