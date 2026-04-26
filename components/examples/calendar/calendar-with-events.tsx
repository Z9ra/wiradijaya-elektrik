"use client"

import * as React from "react"
import { format } from "date-fns"
import { DayButton, getDefaultClassNames } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// Generate events for current month dynamically
const generateEventsForCurrentMonth = (): Record<
  string,
  Array<{ title: string; time: string; description: string; type?: string }>
> => {
  const now = new Date()
  const currentYear = now.getFullYear()
  const currentMonth = now.getMonth()
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()

  // Generate events for some days in the current month
  const eventDays = [5, 8, 12, 15, 18, 20, 22, 25, 28]
  const events: Record<
    string,
    Array<{ title: string; time: string; description: string; type?: string }>
  > = {}

  eventDays.forEach((day) => {
    if (day <= daysInMonth) {
      const dateKey = format(
        new Date(currentYear, currentMonth, day),
        "yyyy-MM-dd"
      )
      const dayEvents: Array<{
        title: string
        time: string
        description: string
        type?: string
      }> = []

      // Add different events based on day
      if (day === 5) {
        dayEvents.push({
          title: "Project Kickoff",
          time: "9:00 AM",
          description: "Starting a new project with the development team",
          type: "meeting",
        })
      } else if (day === 8) {
        dayEvents.push(
          {
            title: "Design Review",
            time: "2:00 PM",
            description: "Reviewing the latest design mockups",
            type: "review",
          },
          {
            title: "Client Call",
            time: "4:00 PM",
            description: "Weekly sync with key clients",
            type: "call",
          }
        )
      } else if (day === 12) {
        dayEvents.push({
          title: "Sprint Planning",
          time: "10:00 AM",
          description: "Planning the next sprint tasks",
          type: "planning",
        })
      } else if (day === 15) {
        dayEvents.push(
          {
            title: "Team Meeting",
            time: "10:00 AM",
            description: "Quarterly planning session with the team",
            type: "meeting",
          },
          {
            title: "Client Presentation",
            time: "2:00 PM",
            description: "Presenting the new product features to key clients",
            type: "presentation",
          }
        )
      } else if (day === 18) {
        dayEvents.push({
          title: "Code Review",
          time: "11:00 AM",
          description: "Reviewing pull requests from the team",
          type: "review",
        })
      } else if (day === 20) {
        dayEvents.push(
          {
            title: "Workshop",
            time: "9:00 AM",
            description: "Design system workshop for the development team",
            type: "workshop",
          },
          {
            title: "Team Lunch",
            time: "12:30 PM",
            description: "Monthly team lunch gathering",
            type: "social",
          }
        )
      } else if (day === 22) {
        dayEvents.push({
          title: "Demo Day",
          time: "3:00 PM",
          description: "Showcasing new features to stakeholders",
          type: "demo",
        })
      } else if (day === 25) {
        dayEvents.push(
          {
            title: "Product Launch",
            time: "11:00 AM",
            description: "Launch event for the new product line",
            type: "launch",
          },
          {
            title: "Networking Event",
            time: "6:00 PM",
            description: "Industry networking event at the convention center",
            type: "networking",
          }
        )
      } else if (day === 28) {
        dayEvents.push({
          title: "Retrospective",
          time: "2:00 PM",
          description: "Sprint retrospective meeting",
          type: "meeting",
        })
      }

      if (dayEvents.length > 0) {
        events[dateKey] = dayEvents
      }
    }
  })

  return events
}

const TIME_OPTIONS = [
  "12:00 AM",
  "12:30 AM",
  "01:00 AM",
  "01:30 AM",
  "02:00 AM",
  "02:30 AM",
  "03:00 AM",
  "03:30 AM",
  "04:00 AM",
  "04:30 AM",
  "05:00 AM",
  "05:30 AM",
  "06:00 AM",
  "06:30 AM",
  "07:00 AM",
  "07:30 AM",
  "08:00 AM",
  "08:30 AM",
  "09:00 AM",
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "01:00 PM",
  "01:30 PM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
  "04:00 PM",
  "04:30 PM",
  "05:00 PM",
  "05:30 PM",
  "06:00 PM",
  "06:30 PM",
  "07:00 PM",
  "07:30 PM",
  "08:00 PM",
  "08:30 PM",
  "09:00 PM",
  "09:30 PM",
  "10:00 PM",
  "10:30 PM",
  "11:00 PM",
  "11:30 PM",
]

const getEventColor = (type?: string): string => {
  switch (type) {
    case "meeting":
      return "bg-blue-500"
    case "review":
      return "bg-purple-500"
    case "presentation":
    case "demo":
      return "bg-green-500"
    case "workshop":
    case "launch":
      return "bg-orange-500"
    case "social":
    case "networking":
      return "bg-pink-500"
    case "call":
      return "bg-cyan-500"
    case "planning":
      return "bg-indigo-500"
    default:
      return "bg-gray-500"
  }
}

const CustomDayButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof DayButton> & {
    eventsData?: Record<
      string,
      Array<{ title: string; time: string; description: string; type?: string }>
    >
    onEventClick?: (date: Date) => void
  }
>(({ className, day, modifiers, eventsData, onEventClick, ...props }, ref) => {
  const defaultClassNames = getDefaultClassNames()
  const dateKey = format(day.date, "yyyy-MM-dd")
  const dayEvents = (eventsData || {})[dateKey] || []
  const hasEvents = dayEvents.length > 0

  const handleEventClick = (e: React.MouseEvent, clickedDate: Date) => {
    e.stopPropagation()
    if (onEventClick) {
      onEventClick(clickedDate)
    }
  }

  return (
    <div className="relative flex min-h-[56px] w-full flex-col items-center gap-1.5">
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
          "data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring flex aspect-square size-auto h-12 w-full min-w-[48px] cursor-pointer flex-col items-center justify-center rounded-md text-sm font-normal transition-colors focus-visible:ring-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
          modifiers.today &&
            "bg-accent text-accent-foreground data-[selected=true]:bg-primary data-[selected=true]:text-primary-foreground",
          defaultClassNames.day,
          className
        )}
        {...props}
      >
        {day.date.getDate()}
      </button>
      {hasEvents && (
        <div className="absolute bottom-3 flex max-w-full flex-wrap justify-center gap-0.5">
          {dayEvents.slice(0, 2).map((event, index) => (
            <div
              key={index}
              onClick={(e) => handleEventClick(e, day.date)}
              className={cn(
                "flex h-2 w-2 cursor-pointer items-center justify-center rounded-md px-1.5 text-[10px] leading-tight text-white transition-opacity hover:opacity-80",
                getEventColor(event.type)
              )}
            >
              {/* {event.type || "Event"} */}
            </div>
          ))}
          {dayEvents.length > 2 && (
            <div
              onClick={(e) => handleEventClick(e, day.date)}
              className="flex h-2 cursor-pointer items-center justify-center rounded-md bg-gray-500 px-1.5 text-[10px] leading-tight text-white transition-opacity hover:opacity-80"
            >
              +{dayEvents.length - 2}
            </div>
          )}
        </div>
      )}
    </div>
  )
})
CustomDayButton.displayName = "CustomDayButton"

export default function CalendarWithEvents() {
  const [currentMonth, setCurrentMonth] = React.useState<Date>(new Date())
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null)
  const [isDialogOpen, setIsDialogOpen] = React.useState(false)
  const [isAddingEvent, setIsAddingEvent] = React.useState(false)
  const [eventName, setEventName] = React.useState("")
  const [eventType, setEventType] = React.useState("")
  const [eventHour, setEventHour] = React.useState("")
  const [eventsState, setEventsState] = React.useState(
    generateEventsForCurrentMonth()
  )

  const handleDateSelect = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      setDate(selectedDate)
      setSelectedDate(selectedDate)
      const dateKey = format(selectedDate, "yyyy-MM-dd")
      const dayEvents = eventsState[dateKey] || []
      setIsAddingEvent(false)
      // Open dialog if there are events
      if (dayEvents.length > 0) {
        setIsDialogOpen(true)
      }
    }
  }

  const handleEventClick = (clickedDate: Date) => {
    setDate(clickedDate)
    setSelectedDate(clickedDate)
    setIsAddingEvent(false)
    setIsDialogOpen(true)
  }

  const selectedDateKey = selectedDate
    ? format(selectedDate, "yyyy-MM-dd")
    : date
      ? format(date, "yyyy-MM-dd")
      : null
  const selectedDateEvents = selectedDateKey
    ? eventsState[selectedDateKey] || []
    : []

  const handleAddEventsClick = () => {
    // If no date is selected, use today's date
    if (!selectedDate && date) {
      setSelectedDate(date)
    } else if (!selectedDate) {
      setSelectedDate(new Date())
    }
    setIsAddingEvent(true)
    setIsDialogOpen(true)
    setEventName("")
    setEventType("")
    setEventHour("")
  }

  const handleSaveEvent = () => {
    if (!selectedDateKey || !eventName || !eventType || !eventHour) {
      return
    }

    const newEvent = {
      title: eventName,
      time: eventHour, // Already in 12-hour format from Select
      description: `Event scheduled for ${eventType}`,
      type: eventType,
    }

    setEventsState((prev) => ({
      ...prev,
      [selectedDateKey]: [...(prev[selectedDateKey] || []), newEvent],
    }))

    setIsAddingEvent(false)
    setEventName("")
    setEventType("")
    setEventHour("")
  }

  const handleDialogClose = (open: boolean) => {
    setIsDialogOpen(open)
    if (!open) {
      setIsAddingEvent(false)
      setEventName("")
      setEventType("")
      setEventHour("")
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Button onClick={handleAddEventsClick}>Add Events</Button>
      </div>
      <Calendar
        mode="single"
        selected={date}
        onSelect={handleDateSelect}
        month={currentMonth}
        onMonthChange={setCurrentMonth}
        defaultMonth={new Date()}
        className="rounded-md border [--cell-size:48px]"
        components={{
          DayButton: (props) => (
            <CustomDayButton
              {...props}
              eventsData={eventsState}
              onEventClick={handleEventClick}
            />
          ),
        }}
      />
      <Dialog open={isDialogOpen} onOpenChange={handleDialogClose}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>
              {selectedDate
                ? format(selectedDate, "EEEE, MMMM d, yyyy")
                : date
                  ? format(date, "EEEE, MMMM d, yyyy")
                  : "Events"}
            </DialogTitle>
            <DialogDescription>
              {isAddingEvent
                ? "Add a new event for this date"
                : selectedDateEvents.length > 0
                  ? `${selectedDateEvents.length} event${selectedDateEvents.length > 1 ? "s" : ""} scheduled`
                  : "No events scheduled for this date"}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            {isAddingEvent ? (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="event-name">Name of Event</Label>
                  <Input
                    id="event-name"
                    placeholder="Enter event name"
                    value={eventName}
                    onChange={(e) => setEventName(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="event-type">Type</Label>
                  <Select value={eventType} onValueChange={setEventType}>
                    <SelectTrigger id="event-type">
                      <SelectValue placeholder="Select event type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="meeting">Meeting</SelectItem>
                      <SelectItem value="review">Review</SelectItem>
                      <SelectItem value="presentation">Presentation</SelectItem>
                      <SelectItem value="demo">Demo</SelectItem>
                      <SelectItem value="workshop">Workshop</SelectItem>
                      <SelectItem value="launch">Launch</SelectItem>
                      <SelectItem value="social">Social</SelectItem>
                      <SelectItem value="networking">Networking</SelectItem>
                      <SelectItem value="call">Call</SelectItem>
                      <SelectItem value="planning">Planning</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="event-hour">Hour</Label>
                  <Select value={eventHour} onValueChange={setEventHour}>
                    <SelectTrigger id="event-hour">
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      {TIME_OPTIONS.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            ) : selectedDateEvents.length > 0 ? (
              <>
                {selectedDateEvents.map((event, index) => (
                  <div key={index} className="space-y-2 rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">{event.title}</h3>
                      <span className="text-muted-foreground text-sm">
                        {event.time}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {event.description}
                    </p>
                  </div>
                ))}
                <div className="pt-2">
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => {
                      setIsAddingEvent(true)
                      setEventName("")
                      setEventType("")
                      setEventHour("")
                    }}
                  >
                    Add Another Event
                  </Button>
                </div>
              </>
            ) : (
              <p className="text-muted-foreground py-4 text-center text-sm">
                No events scheduled. Click "Add Events" to create a new event.
              </p>
            )}
          </div>
          {isAddingEvent && (
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => {
                  setIsAddingEvent(false)
                  setEventName("")
                  setEventType("")
                  setEventHour("")
                }}
              >
                Cancel
              </Button>
              <Button
                onClick={handleSaveEvent}
                disabled={!eventName || !eventType || !eventHour}
              >
                Save Event
              </Button>
            </DialogFooter>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
