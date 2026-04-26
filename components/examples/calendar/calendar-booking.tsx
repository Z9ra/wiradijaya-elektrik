"use client"

import * as React from "react"
import {
  DayButton,
  getDefaultClassNames,
  MonthGrid,
  type DateRange,
} from "react-day-picker"

import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"

// Generate random prices for dates
const generatePrice = (date: Date): number => {
  const seed = date.getTime()
  return Math.floor((seed % 100) + 30) // Prices between $30-$129
}

const CustomDayButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof DayButton>
>(({ className, day, modifiers, ...props }, ref) => {
  const defaultClassNames = getDefaultClassNames()
  const price = generatePrice(day.date)

  return (
    <button
      ref={ref}
      data-selected-single={
        modifiers.selected &&
        !modifiers.range_start &&
        !modifiers.range_end &&
        !modifiers.range_middle
      }
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      data-today={modifiers.today}
      data-disabled={modifiers.disabled}
      className={cn(
        "data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring flex aspect-square size-auto w-full min-w-[var(--cell-size)] cursor-pointer flex-col items-center justify-between py-2 text-sm font-normal transition-colors focus-visible:ring-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
        modifiers.today &&
          "bg-accent text-accent-foreground data-[selected=true]:bg-primary data-[selected=true]:text-primary-foreground",
        "data-[range-end=true]:rounded-md data-[range-end=true]:rounded-r-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md data-[range-start=true]:rounded-l-md",
        defaultClassNames.day,
        className
      )}
      {...props}
    >
      <span className="text-sm leading-none">{day.date.getDate()}</span>
      <span className="text-muted-foreground data-[selected-single=true]:text-primary-foreground data-[range-start=true]:text-primary-foreground data-[range-end=true]:text-primary-foreground pt-1 text-[10px] leading-none font-medium">
        ${price}
      </span>
    </button>
  )
})
CustomDayButton.displayName = "CustomDayButton"

export default function CalendarBooking() {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: undefined,
    to: undefined,
  })

  return (
    <div className="space-y-4">
      <div className="text-muted-foreground text-sm">
        {date?.from && date?.to
          ? `Selected: ${date.from.toLocaleDateString()} - ${date.to.toLocaleDateString()}`
          : date?.from
            ? `Select check-out date`
            : "Select check-in date"}
      </div>
      <Calendar
        mode="range"
        selected={date}
        onSelect={setDate}
        numberOfMonths={2}
        className="rounded-md border [--cell-size:--spacing(11)]"
        components={{
          DayButton: (props) => <CustomDayButton {...props} />,
        }}
      />
    </div>
  )
}
