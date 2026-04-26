"use client"

import {
  CloudDownload,
  ListFilter,
  Plus,
  Search,
  TrendingUp,
  X,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

export function TableHeaderWithTagsAndSearch() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col flex-wrap gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <div className="bg-muted rounded-lg p-2.5">
            <TrendingUp className="text-muted-foreground h-5 w-5" />
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
            className="hover:bg-muted w-full gap-2 transition-all sm:w-auto"
          >
            <Plus className="h-4 w-4" />
            Add New
          </Button>
          <Button className="w-full gap-2 transition-all sm:w-auto">
            <CloudDownload className="h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <Separator />

      <div className="flex flex-col flex-wrap justify-between gap-6 sm:flex-row sm:items-center">
        <div className="flex flex-wrap items-center gap-3">
          <Button
            variant="outline"
            className="hover:bg-muted gap-2 transition-all"
          >
            Filter
            <ListFilter className="h-4 w-4" />
          </Button>
          <div className="flex flex-wrap items-center gap-2">
            <Badge
              variant="secondary"
              className="bg-muted/50 hover:bg-muted gap-2 rounded-full transition-all"
            >
              Best Selling
              <button className="hover:bg-background grid h-4 w-4 shrink-0 place-items-center rounded-full transition-all">
                <X className="h-3 w-3" />
              </button>
            </Badge>
            <Badge
              variant="secondary"
              className="bg-muted/50 hover:bg-muted gap-2 rounded-full transition-all"
            >
              Last 30 Days
              <button className="hover:bg-background grid h-4 w-4 shrink-0 place-items-center rounded-full transition-all">
                <X className="h-3 w-3" />
              </button>
            </Badge>
          </div>
        </div>
        <div className="relative w-full sm:w-72">
          <Input
            type="text"
            placeholder="Search products..."
            className="pl-9 transition-all focus:ring-2"
          />
          <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
        </div>
      </div>
    </div>
  )
}
