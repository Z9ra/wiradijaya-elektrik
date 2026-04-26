"use client"

import * as React from "react"
import { format } from "date-fns"
import { ArrowDown, ArrowUp, Calendar as CalendarIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card } from "@/components/ui/card"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"

export default function KpiCardsWithArrow() {
  const [date, setDate] = React.useState<Date>()

  return (
    <section>
      <div className="flex flex-col flex-wrap gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="mb-0.5 text-xl font-semibold">Overall Performance</p>
          <p className="text-muted-foreground text-sm">
            Upward arrow indicating an increase in revenue compared to the
            previous period.
          </p>
        </div>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="w-full justify-start text-left font-normal sm:w-60"
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
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
      </div>
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="overflow-hidden transition-all hover:shadow-md">
          <div className="flex items-center justify-between gap-4 p-4">
            <p className="text-muted-foreground text-sm font-semibold">
              Revenue
            </p>
            <div className="flex items-center gap-1 rounded-lg bg-green-500/10 px-2 py-1">
              <ArrowUp className="h-3.5 w-3.5 text-green-500" />
              <span className="text-xs font-semibold text-green-500">14%</span>
            </div>
          </div>
          <Separator />
          <div className="bg-muted/20 px-4 py-3">
            <p className="text-lg font-bold md:text-xl lg:text-2xl">
              $50,846.90
            </p>
          </div>
        </Card>
        <Card className="overflow-hidden transition-all hover:shadow-md">
          <div className="flex items-center justify-between gap-4 p-4">
            <p className="text-muted-foreground text-sm font-semibold">
              Coupon Sales
            </p>
            <div className="flex items-center gap-1 rounded-lg bg-green-500/10 px-2 py-1">
              <ArrowUp className="h-3.5 w-3.5 text-green-500" />
              <span className="text-xs font-semibold text-green-500">12%</span>
            </div>
          </div>
          <Separator />
          <div className="bg-muted/20 px-4 py-3">
            <p className="text-lg font-bold md:text-xl lg:text-2xl">$10,342</p>
          </div>
        </Card>
        <Card className="overflow-hidden transition-all hover:shadow-md">
          <div className="flex items-center justify-between gap-4 p-4">
            <p className="text-muted-foreground text-sm font-semibold">
              Total Audience
            </p>
            <div className="flex items-center gap-1 rounded-lg bg-red-500/10 px-2 py-1">
              <ArrowDown className="h-3.5 w-3.5 text-red-500" />
              <span className="text-xs font-semibold text-red-500">10%</span>
            </div>
          </div>
          <Separator />
          <div className="bg-muted/20 px-4 py-3">
            <p className="text-lg font-bold md:text-xl lg:text-2xl">19,720</p>
          </div>
        </Card>
        <Card className="overflow-hidden transition-all hover:shadow-md">
          <div className="flex items-center justify-between gap-4 p-4">
            <p className="text-muted-foreground text-sm font-semibold">
              Website Traffic
            </p>
            <div className="flex items-center gap-1 rounded-lg bg-green-500/10 px-2 py-1">
              <ArrowUp className="h-3.5 w-3.5 text-green-500" />
              <span className="text-xs font-semibold text-green-500">1.4%</span>
            </div>
          </div>
          <Separator />
          <div className="bg-muted/20 px-4 py-3">
            <p className="text-lg font-bold md:text-xl lg:text-2xl">20,000</p>
          </div>
        </Card>
      </div>
    </section>
  )
}
