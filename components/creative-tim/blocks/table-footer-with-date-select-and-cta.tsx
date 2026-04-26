"use client"

import { Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function TableFooterWithDateSelectAndCta() {
  return (
    <div className="flex flex-wrap items-end justify-between gap-6">
      <Select defaultValue="last_30_days">
        <SelectTrigger className="w-max">
          <SelectValue placeholder="Select period" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="last_week">Last Week</SelectItem>
          <SelectItem value="last_30_days">Last 30 Days</SelectItem>
        </SelectContent>
      </Select>
      <div className="space-y-3 text-end">
        <p className="text-sm font-semibold text-current">
          <span className="text-slate-600/70">Grand Total:</span> $9,750.00
        </p>
        <Button variant="outline" size="default">
          Export
          <Download className="ml-2 h-4 w-4 stroke-2" />
        </Button>
      </div>
    </div>
  )
}
