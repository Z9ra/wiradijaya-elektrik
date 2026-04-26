"use client"

import * as React from "react"
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  MapPin,
  MoreVertical,
  Plus,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface EventsCardProps {
  title: string
  img: string
  name: string
  time: string
  location: string
}

function EventsCard({ title, img, name, time, location }: EventsCardProps) {
  return (
    <Card className="rounded-md border p-4">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
            <div className="mt-2 flex items-center gap-2">
              <Avatar className="h-4 w-4">
                <AvatarImage src={img} alt={name} />
                <AvatarFallback>{name[0]}</AvatarFallback>
              </Avatar>
              <p className="text-muted-foreground text-sm">{name}</p>
            </div>
            <div className="mt-2 flex items-center gap-2">
              <Clock className="text-muted-foreground h-4 w-4" />
              <p className="text-muted-foreground text-sm">{time}</p>
            </div>
            <div className="mt-2 flex items-center gap-2">
              <MapPin className="text-muted-foreground h-4 w-4" />
              <p className="text-muted-foreground text-sm">{location}</p>
            </div>
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="icon" variant="ghost" className="h-8 w-8">
              <MoreVertical className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </Card>
  )
}

const EVENTS = [
  {
    title: "Content Strategy Workshop",
    img: "https://v3.material-tailwind.com/woman-profile-1.jpg",
    name: "Emma Roberts",
    time: "09:00 AM - 11:00 AM",
    location: "Online",
  },
  {
    title: "UX Design Review",
    img: "https://v3.material-tailwind.com/man-profile-1.jpg",
    name: "Lucian Eurel",
    time: "3:00 PM - 4:30 PM",
    location: "Design Studio, Room 203",
  },
  {
    title: "New Campaign Kickoff Meeting",
    img: "https://v3.material-tailwind.com/woman-profile-2.jpg",
    name: "Misha Stam",
    time: "09:00 AM - 11:00 AM",
    location: "Client HQ",
  },
  {
    title: "Team Goals Alignment",
    img: "https://v3.material-tailwind.com/woman-profile-3.jpg",
    name: "Marcel Glock",
    time: "1:00 PM - 2:00 PM",
    location: "Online",
  },
  {
    title: "Product Launch Planning",
    img: "https://v3.material-tailwind.com/man-profile-2.jpg",
    name: "Mike Devis",
    time: "3:00 PM - 4:00 PM",
    location: "Online",
  },
]

export default function Calendar02() {
  return (
    <Card className="mx-auto max-w-3xl border">
      <CardHeader className="m-0 w-full flex-wrap items-start justify-between gap-6 p-6">
        <div>
          <CardTitle className="mb-2 text-xl font-semibold">
            Upcoming Events and Activities
          </CardTitle>
          <p className="text-muted-foreground">
            Stay on top of your schedule with our detailed events.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
          <Button variant="outline">Today</Button>
          <Button variant="outline" size="icon">
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="px-6 pt-2 pb-6">
        <div className="flex flex-col items-stretch gap-4 sm:flex-row">
          <Card className="shrink-0 rounded-md border p-4 sm:basis-32">
            <p className="mb-1 font-semibold">Monday</p>
            <p className="text-muted-foreground text-sm">Aug 29</p>
          </Card>
          <div className="grow space-y-4">
            {EVENTS.slice(0, 2).map((props, key) => (
              <EventsCard key={key} {...props} />
            ))}
          </div>
        </div>
        <div className="mt-4 flex flex-col items-stretch gap-4 sm:flex-row">
          <Card className="shrink-0 rounded-md border p-4 sm:basis-32">
            <p className="mb-1 font-semibold">Tuesday</p>
            <p className="text-muted-foreground text-sm">Aug 30</p>
          </Card>
          <div className="grow space-y-4">
            {EVENTS.slice(2, 3).map((props, key) => (
              <EventsCard key={key} {...props} />
            ))}
          </div>
        </div>
        <div className="mt-4 flex flex-col items-stretch gap-4 sm:flex-row">
          <Card className="shrink-0 rounded-md border p-4 sm:basis-32">
            <p className="mb-1 font-semibold">Wednesday</p>
            <p className="text-muted-foreground text-sm">Aug 31</p>
          </Card>
          <div className="grow space-y-4">
            {EVENTS.slice(3, 5).map((props, key) => (
              <EventsCard key={key} {...props} />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
