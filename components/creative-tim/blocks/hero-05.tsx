"use client"

import * as React from "react"
import { Box, Files, FileText, Menu, Star, User } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"

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
        <div className="hidden items-center gap-2 lg:ml-auto lg:flex">
          <Button size="sm" variant="outline">
            Sign In
          </Button>
          <Button size="sm">Sign Up</Button>
        </div>
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
          <div className="mt-4 flex items-center gap-2">
            <Button size="sm" variant="outline" className="w-full">
              Sign In
            </Button>
            <Button size="sm" className="w-full">
              Sign Up
            </Button>
          </div>
        </>
      )}
    </nav>
  )
}

export default function Hero05() {
  return (
    <header>
      <div className="container mx-auto py-6">
        <Nav />
      </div>
      <div className="container mx-auto py-8 md:py-16 lg:py-24">
        <div className="mb-12 md:mb-24">
          <div className="mb-4 flex justify-center">
            <Badge variant="secondary" className="text-sm">
              Launch Event 2025
            </Badge>
          </div>
          <h1 className="mx-auto mb-6 max-w-4xl scroll-m-20 text-center text-4xl !leading-tight font-bold tracking-tight [text-wrap:_balance] md:text-5xl lg:text-6xl">
            Join the Future of Modern Web Development
          </h1>
          <p className="text-muted-foreground mx-auto mb-12 max-w-2xl text-center text-lg leading-relaxed [text-wrap:_balance] md:text-xl">
            Experience the next generation of component libraries built for
            developers who demand excellence. Sign up today and be part of the
            innovation.
          </p>
          <form action="#" className="mx-auto w-full max-w-lg">
            <div className="flex w-full flex-col items-center gap-2 sm:flex-row">
              <Input
                type="email"
                id="email"
                placeholder="someone@example.com"
                className="h-11"
              />
              <Button
                type="submit"
                size="lg"
                className="w-full shrink-0 sm:w-auto"
              >
                Get Started
              </Button>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <Checkbox id="checkbox-link" />
              <label
                htmlFor="checkbox-link"
                className="text-foreground flex gap-1 text-sm select-none"
              >
                I agree with the
                <a href="#" className="text-primary">
                  terms and conditions
                </a>
              </label>
            </div>
            <div className="mt-4 flex items-center justify-center gap-2">
              <p className="text-muted-foreground text-sm">
                Trusted by 10,000+ developers
              </p>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
            </div>
          </form>
        </div>
        <div className="h-[40vh] w-full sm:h-[50vh] md:h-[60vh] lg:h-[70vh]">
          <img
            src="https://images.unsplash.com/photo-1576666735065-b24beb27b939?auto=format&w=1800&q=85&fit=max"
            alt="Modern web development workspace"
            className="h-full w-full rounded-xl object-cover object-center"
          />
        </div>
      </div>
    </header>
  )
}
