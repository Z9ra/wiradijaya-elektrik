"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon, Menu, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent } from "@/components/ui/card"
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

const NAV_LIST = ["Home", "Services", "About", "Contact"]
const COUNTRIES = [
  "United States",
  "United Kingdom",
  "Germany",
  "France",
  "Canada",
]

function NavList() {
  return (
    <ul className="mt-4 flex flex-col gap-x-3 gap-y-1.5 lg:mt-0 lg:flex-row lg:items-center">
      {NAV_LIST.map((el) => (
        <li key={el}>
          <a href="#" className="p-1 text-sm text-white">
            {el}
          </a>
        </li>
      ))}
    </ul>
  )
}

function Nav() {
  const [openNav, setOpenNav] = React.useState(false)

  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 960) {
        setOpenNav(false)
      }
    }

    window.addEventListener("resize", () => handleResize)

    return () => {
      window.removeEventListener("resize", () => handleResize)
    }
  }, [])

  return (
    <nav className="border-transparent bg-transparent px-0 shadow-none">
      <div className="relative flex items-center">
        <a href="#" className="block py-1 text-lg font-bold text-white">
          Creative Tim UI
        </a>
        <div className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
          <NavList />
        </div>
        <Button size="sm" className="hidden lg:ml-auto lg:inline-block">
          Sign In
        </Button>
        <Button
          size="icon"
          variant="ghost"
          className="ml-auto grid text-white lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          <Menu className="h-4 w-4" />
        </Button>
      </div>
      {openNav && (
        <>
          <NavList />
          <Button className="mt-4 w-full" size="sm">
            Sign In
          </Button>
        </>
      )}
    </nav>
  )
}

export default function Hero11() {
  const [date, setDate] = React.useState<Date>()
  const [departureCountry, setDepartureCountry] = React.useState<string>()
  const [arrivalCountry, setArrivalCountry] = React.useState<string>()

  return (
    <header className="relative flex h-full min-h-screen flex-col bg-[url('https://images.unsplash.com/photo-1540974677286-406c4d54d09b?auto=format&w=2000&q=85&fit=max')] bg-cover bg-center after:absolute after:inset-0 after:h-full after:w-full after:bg-black/70 after:content-['']">
      <div className="relative z-10 container mx-auto h-max py-6">
        <Nav />
      </div>
      <div className="relative z-10 container mx-auto flex h-full flex-grow flex-col pt-8 md:pt-16 lg:pt-24">
        <div className="mt-auto mb-12 text-center">
          <div className="mb-2 flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="h-5 w-5 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
          <p className="mb-6 text-sm font-medium text-white/90">
            30,000+ Happy Travelers Worldwide
          </p>
          <h1 className="mx-auto mb-6 max-w-4xl scroll-m-20 text-center text-4xl !leading-tight font-bold tracking-tight [text-wrap:_balance] text-white md:text-5xl lg:text-6xl">
            Discover Your Perfect Destination
          </h1>
          <p className="text-muted-foreground mx-auto mb-12 max-w-2xl text-center text-lg leading-relaxed [text-wrap:_balance] text-white/95 md:text-xl">
            Plan your dream vacation with ease. Search from thousands of
            destinations worldwide and create unforgettable memories with our
            seamless booking experience.
          </p>
        </div>
        <Card className="mt-auto mb-6 rounded-2xl shadow-2xl">
          <CardContent className="grid grid-cols-1 items-end gap-6 px-6 py-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="w-full space-y-2">
              <label
                htmlFor="leave-from"
                className="text-foreground text-sm font-semibold"
              >
                Departure
              </label>
              <Select
                value={departureCountry}
                onValueChange={setDepartureCountry}
              >
                <SelectTrigger id="leave-from" className="h-11 w-full">
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  {COUNTRIES.map((country) => (
                    <SelectItem key={country} value={country}>
                      {country}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="w-full space-y-2">
              <label
                htmlFor="leave-to"
                className="text-foreground text-sm font-semibold"
              >
                Destination
              </label>
              <Select value={arrivalCountry} onValueChange={setArrivalCountry}>
                <SelectTrigger id="leave-to" className="h-11 w-full">
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  {COUNTRIES.map((country) => (
                    <SelectItem key={country} value={country}>
                      {country}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="w-full space-y-2">
              <label
                htmlFor="date"
                className="text-foreground text-sm font-semibold"
              >
                Travel Date
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    id="date"
                    variant="outline"
                    className="h-11 w-full justify-start text-left font-normal"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
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
              <Button className="h-11 w-full" size="lg">
                Search Trips
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </header>
  )
}
