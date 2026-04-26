"use client"

import * as React from "react"
import { Box, Files, FileText, Info, Menu, User, X } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

const NAV_LIST = [
  {
    label: "Pages",
    icon: Files,
  },
  {
    label: "Account",
    icon: User,
  },
  {
    label: "Blocks",
    icon: Box,
  },
  {
    label: "Docs",
    icon: FileText,
  },
]

function NavList() {
  return (
    <ul className="mt-4 flex flex-col gap-1 lg:mt-0 lg:flex-row lg:items-center lg:gap-1">
      {NAV_LIST.map(({ icon: Icon, label }) => (
        <li key={label}>
          <a
            href="#"
            className="text-muted-foreground hover:text-foreground hover:bg-secondary flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors"
          >
            <Icon className="h-4 w-4" />
            {label}
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
      if (window.innerWidth >= 1024) {
        setOpenNav(false)
      }
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <nav className="px-0 py-4">
      <div className="relative flex items-center">
        <a href="#" className="block text-lg font-bold">
          Creative Tim UI
        </a>
        <div className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
          <NavList />
        </div>
        <div className="ml-auto hidden items-center gap-2 lg:flex">
          <Button size="sm" variant="ghost">
            Sign In
          </Button>
          <Button size="sm">Get Started</Button>
        </div>
        <Button
          size="sm"
          variant="ghost"
          className="ml-auto grid lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>
      {openNav && (
        <div className="mt-4 lg:hidden">
          <NavList />
          <Separator className="my-4" />
          <div className="flex items-center gap-2">
            <Button size="sm" variant="ghost" className="w-full">
              Sign In
            </Button>
            <Button size="sm" className="w-full">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default function Hero01() {
  return (
    <header className="relative">
      <div className="container mx-auto px-4">
        <Nav />
      </div>
      <div className="container mx-auto px-4 py-12 md:py-20 lg:py-28">
        <div className="mb-16 text-center">
          <Badge variant="secondary" className="mb-6 gap-1.5 px-3 py-1.5">
            <Info className="h-3.5 w-3.5" />
            Exciting News! Introducing our latest innovation
          </Badge>
          <h1 className="mx-auto mb-6 max-w-4xl scroll-m-20 text-center text-4xl !leading-tight font-bold tracking-tight [text-wrap:_balance] md:text-5xl lg:text-6xl">
            Get ready to experience a new level of{" "}
            <span className="text-primary">performance</span> and{" "}
            <span className="text-primary">functionality</span>.
          </h1>
          <p className="text-muted-foreground mx-auto mb-10 max-w-2xl text-center text-base leading-relaxed md:text-lg lg:text-xl">
            The time is now for it to be okay to be great. For being a bright
            color. For standing out.
          </p>
          <form action="#" className="mx-auto w-full max-w-lg">
            <div className="flex w-full flex-col items-center gap-3 sm:flex-row">
              <Input
                type="email"
                id="email"
                placeholder="someone@example.com"
                className="h-11 w-full"
              />
              <Button
                type="submit"
                size="lg"
                className="w-full shrink-0 sm:w-auto"
              >
                Get Started
              </Button>
            </div>
          </form>
        </div>
        <div className="relative h-[40vh] w-full overflow-hidden rounded-2xl shadow-2xl sm:h-[50vh] md:h-[60vh] lg:h-[70vh]">
          <img
            src="https://images.unsplash.com/photo-1573588028698-f4759befb09a?auto=format&w=2000&q=85"
            alt="Modern architecture and design"
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
    </header>
  )
}
