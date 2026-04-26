"use client"

import * as React from "react"
import { format } from "date-fns"
import {
  Calendar as CalendarIcon,
  DollarSign,
  Globe,
  Send,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card } from "@/components/ui/card"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"

export default function KpiCardsWithIcon() {
  const [date, setDate] = React.useState<Date>()

  return (
    <div>
      <div className="flex flex-col flex-wrap gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="mb-0.5 text-xl font-semibold">Performance Snapshot</p>
          <p className="text-muted-foreground text-sm">
            Get a quick overview of key performance indicators with these four
            cards.
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
            <p className="text-base font-semibold md:text-lg lg:text-xl">
              150 / 200
            </p>
            <div className="bg-muted rounded-lg p-2.5">
              <Users className="text-muted-foreground h-5 w-5" />
            </div>
          </div>
          <Separator />
          <div className="bg-muted/20 px-4 py-3">
            <p className="mb-0.5 text-sm font-semibold">New Customers</p>
            <p className="text-muted-foreground text-xs">
              New customers compared to the target.
            </p>
          </div>
        </Card>
        <Card className="overflow-hidden transition-all hover:shadow-md">
          <div className="flex items-center justify-between gap-4 p-4">
            <p className="text-base font-semibold md:text-lg lg:text-xl">
              $350k / $400k
            </p>
            <div className="bg-muted rounded-lg p-2.5">
              <DollarSign className="text-muted-foreground h-5 w-5" />
            </div>
          </div>
          <Separator />
          <div className="bg-muted/20 px-4 py-3">
            <p className="mb-0.5 text-sm font-semibold">Sales Revenue</p>
            <p className="text-muted-foreground text-xs">
              Revenue generated compared to the target.
            </p>
          </div>
        </Card>
        <Card className="overflow-hidden transition-all hover:shadow-md">
          <div className="flex items-center justify-between gap-4 p-4">
            <p className="text-base font-semibold md:text-lg lg:text-xl">
              350 / 400
            </p>
            <div className="bg-muted rounded-lg p-2.5">
              <Send className="text-muted-foreground h-5 w-5" />
            </div>
          </div>
          <Separator />
          <div className="bg-muted/20 px-4 py-3">
            <p className="mb-0.5 text-sm font-semibold">Completed Tasks</p>
            <p className="text-muted-foreground text-xs">
              Tasks completed compared to the target.
            </p>
          </div>
        </Card>
        <Card className="overflow-hidden transition-all hover:shadow-md">
          <div className="flex items-center justify-between gap-4 p-4">
            <p className="text-base font-semibold md:text-lg lg:text-xl">
              25k / 30k
            </p>
            <div className="bg-muted rounded-lg p-2.5">
              <Globe className="text-muted-foreground h-5 w-5" />
            </div>
          </div>
          <Separator />
          <div className="bg-muted/20 px-4 py-3">
            <p className="mb-0.5 text-sm font-semibold">Website Traffic</p>
            <p className="text-muted-foreground text-xs">
              The proportion of visits against the limit.
            </p>
          </div>
        </Card>
      </div>
    </div>
  )
}
