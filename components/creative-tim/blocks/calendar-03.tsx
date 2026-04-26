"use client"

import * as React from "react"
import { format } from "date-fns"
import { CalendarIcon, Plus, Upload } from "lucide-react"

import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

function TextField({ label, ...props }: TextFieldProps) {
  const id = React.useId()

  return (
    <div className="w-full space-y-2">
      <Label htmlFor={id} className="block text-sm font-semibold">
        {label}
      </Label>
      <Input {...props} id={id} />
    </div>
  )
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

export default function Calendar03() {
  const [date, setDate] = React.useState<Date>()
  const [fromTime, setFromTime] = React.useState<string>("09:00 AM")
  const [toTime, setToTime] = React.useState<string>("10:00 AM")

  return (
    <Card className="mx-auto max-w-xl border">
      <CardHeader className="m-0 w-full p-6">
        <CardTitle className="mb-2 text-xl font-semibold">
          Create New Event
        </CardTitle>
        <p className="text-muted-foreground">
          Use this card to quickly set up new events, invite participants, and
          manage all the details
        </p>
      </CardHeader>
      <CardContent className="space-y-6 px-6 py-0">
        <TextField
          label="Add Title"
          name="meeting-link"
          placeholder="Event name"
        />
        <div className="flex flex-col gap-4 sm:flex-row">
          <div>
            <Label htmlFor="date" className="mb-2 block text-sm font-semibold">
              Date
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal sm:w-48",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : "Select a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="w-full">
            <Label htmlFor="from" className="mb-2 block text-sm font-semibold">
              From
            </Label>
            <Select value={fromTime} onValueChange={setFromTime}>
              <SelectTrigger id="from" className="w-full">
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
          <div className="w-full">
            <Label htmlFor="to" className="mb-2 block text-sm font-semibold">
              To
            </Label>
            <Select value={toTime} onValueChange={setToTime}>
              <SelectTrigger id="to" className="w-full">
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
        <div className="flex flex-col gap-4 sm:flex-row">
          <div>
            <Label
              htmlFor="frequency"
              className="mb-2 block text-sm font-semibold"
            >
              Frequency
            </Label>
            <Select>
              <SelectTrigger id="frequency" className="w-full shrink-0 sm:w-48">
                <SelectValue placeholder="Select Frequency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="hour">Every Hour</SelectItem>
                <SelectItem value="day">Every Day</SelectItem>
                <SelectItem value="week">Every Week</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <TextField label="Link" name="link" placeholder="https://" />
        </div>
        <div className="space-y-3">
          <TextField
            label="Guests"
            name="guests"
            placeholder="Email, comma separated"
          />
          <div className="flex items-center gap-1">
            <div className="flex items-center -space-x-3">
              <Avatar className="border-background h-8 w-8 border-2 hover:z-10 focus:z-10">
                <AvatarImage
                  src="https://v3.material-tailwind.com/man-profile-1.jpg"
                  alt="user 1"
                />
                <AvatarFallback>U1</AvatarFallback>
              </Avatar>
              <Avatar className="border-background h-8 w-8 border-2 hover:z-10 focus:z-10">
                <AvatarImage
                  src="https://v3.material-tailwind.com/man-profile-2.jpg"
                  alt="user 2"
                />
                <AvatarFallback>U2</AvatarFallback>
              </Avatar>
              <Avatar className="border-background h-8 w-8 border-2 hover:z-10 focus:z-10">
                <AvatarImage
                  src="https://v3.material-tailwind.com/man-profile-3.jpg"
                  alt="user 3"
                />
                <AvatarFallback>U3</AvatarFallback>
              </Avatar>
            </div>
            <Button
              size="icon"
              variant="outline"
              className="h-8 w-8 rounded-full"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="w-full space-y-2">
          <Label htmlFor="description" className="block text-sm font-semibold">
            Meeting Description
          </Label>
          <Input
            name="description"
            id="description"
            placeholder="Add meeting description"
          />
        </div>
        <div>
          <Label className="mb-2 block text-sm font-semibold">
            Attachments
          </Label>
          <label
            htmlFor="upload"
            className="flex items-center gap-4 rounded-md border border-dashed p-3"
          >
            <input type="file" id="upload" className="hidden" />
            <Upload className="ml-1 h-6 w-6" />
            <div>
              <p className="block text-sm font-semibold">
                Drag and Drop or{" "}
                <a href="#" className="underline">
                  Choose a Local File
                </a>
              </p>
              <p className="text-muted-foreground block text-sm">
                Supported formats: .png, .jpg, .svg
              </p>
            </div>
          </label>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end gap-2 p-6">
        <Button size="sm" variant="outline">
          Cancel
        </Button>
        <Button size="sm">Create event</Button>
      </CardFooter>
    </Card>
  )
}
