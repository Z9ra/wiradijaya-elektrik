"use client"

import * as React from "react"

import { Calendar } from "@/components/ui/calendar"

export default function CalendarMultipleMonths() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      numberOfMonths={3}
      className="rounded-md border"
    />
  )
}
