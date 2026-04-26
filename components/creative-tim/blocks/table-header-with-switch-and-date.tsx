"use client"

import * as React from "react"
import { format } from "date-fns"
import { CalendarIcon, DollarSign } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"

export function TableHeaderWithSwitchAndDate() {
  const [date, setDate] = React.useState<Date>()

  return (
    <div className="space-y-6">
      <div className="flex flex-col flex-wrap gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-3">
          <div className="bg-muted rounded-lg p-2.5">
            <DollarSign className="text-muted-foreground h-5 w-5" />
          </div>
          <div className="space-y-3">
            <div className="space-y-1">
              <h3 className="text-xl font-semibold">Overview Balance</h3>
              <p className="text-muted-foreground text-sm">
                Here you have details about the balance.
              </p>
            </div>
            <div className="border-border bg-muted/20 hover:bg-muted/30 flex items-center gap-3 rounded-lg border p-3 transition-all">
              <Switch id="refund" />
              <Label
                htmlFor="refund"
                className="cursor-pointer text-sm font-medium"
              >
                Refund Only
              </Label>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 sm:flex-row">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "hover:bg-muted w-full justify-start text-left font-normal transition-all sm:w-60",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : "Pick a date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="end">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <Button
            variant="outline"
            className="hover:bg-muted w-full transition-all sm:w-auto"
          >
            View Report
          </Button>
        </div>
      </div>
      <Separator />
    </div>
  )
}
