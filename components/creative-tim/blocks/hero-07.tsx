"use client"

import * as React from "react"
import { Box, Files, FileText, Menu, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

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
    <ul className="mt-4 flex flex-col gap-x-3 gap-y-1.5 lg:mt-0 lg:flex-row lg:items-center">
      {NAV_LIST.map(({ icon: Icon, label }) => (
        <li key={label}>
          <a
            href="#"
            className="text-muted-foreground hover:text-primary flex items-center gap-x-2 p-1 text-sm"
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
    <nav className="px-0">
      <div className="relative flex items-center">
        <a href="#" className="block py-1 text-lg font-bold">
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
          className="ml-auto grid lg:hidden"
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

export default function Hero07() {
  return (
    <header>
      <div className="container mx-auto py-6">
        <Nav />
      </div>
      <div className="container mx-auto grid h-full w-full grid-cols-1 items-center gap-12 py-8 md:py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div className="row-start-2 lg:row-auto">
          <h1 className="mb-6 scroll-m-20 text-4xl !leading-tight font-bold tracking-tight md:text-5xl lg:text-6xl">
            Create Exceptional
            <br /> User Experiences
          </h1>
          <p className="text-muted-foreground mb-8 max-w-xl text-lg leading-relaxed [text-wrap:_balance] md:text-xl">
            Build beautiful, responsive applications with our comprehensive
            component library. Join thousands of developers creating remarkable
            digital experiences.
          </p>
          <form action="#">
            <div className="mb-4 max-w-md space-y-4">
              <div>
                <Label
                  htmlFor="email"
                  className="mb-2 inline-block text-sm font-medium"
                >
                  Your Email
                </Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="someone@example.com"
                  className="h-11"
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                Get Started Free
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="checkbox-link" />
              <label
                htmlFor="checkbox-link"
                className="text-foreground flex gap-1 text-sm select-none"
              >
                I agree with the
                <a href="#" className="text-primary hover:underline">
                  terms and conditions
                </a>
              </label>
            </div>
          </form>
        </div>
        <div className="relative h-[400px] w-full lg:h-[600px]">
          <img
            alt="Modern web development workspace"
            src="https://images.unsplash.com/photo-1635668422708-11c28ca70419?auto=format&w=2000&q=85&fit=max"
            className="h-full w-full rounded-2xl object-cover shadow-2xl"
          />
        </div>
      </div>
    </header>
  )
}
