"use client"

import { Clock, TrendingUp } from "lucide-react"

import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"

export function TableFooterWithUpdateAndProgressBar() {
  return (
    <div className="space-y-4">
      <Separator />
      <div className="bg-muted/20 flex flex-wrap items-center justify-between gap-6 rounded-lg p-4">
        <div className="flex items-center gap-3">
          <div className="bg-muted rounded-lg p-2">
            <Clock className="text-muted-foreground h-4 w-4" />
          </div>
          <div>
            <p className="text-muted-foreground text-xs">Last Updated</p>
            <p className="text-sm font-semibold">2 Days Ago</p>
          </div>
        </div>
        <div className="w-full max-w-sm space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TrendingUp className="text-muted-foreground h-4 w-4" />
              <span className="text-sm font-semibold">Progress</span>
            </div>
            <span className="text-foreground text-sm font-semibold">50%</span>
          </div>
          <Progress value={50} className="h-2.5" />
          <p className="text-muted-foreground text-xs">
            5 of 10 items completed
          </p>
        </div>
      </div>
    </div>
  )
}
