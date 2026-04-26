"use client"

import * as React from "react"
import { Box, Files, FileText, Menu, User } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

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
    <nav className="px-0 py-6">
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

export default function Hero04() {
  return (
    <header style={{ backgroundColor: "#fff" }}>
      <div className="container mx-auto px-4">
        <Nav />
      </div>
      <div
        className="container mx-auto px-4 py-8 md:py-16 lg:py-24"
        style={{ paddingBottom: "0px" }}
      >
        <div>
          <div className="mb-4 flex justify-center">
            <Badge variant="secondary" className="text-sm">
              Our Mission
            </Badge>
          </div>
          <h1 className="mx-auto mb-6 max-w-4xl scroll-m-20 text-center text-4xl !leading-tight font-bold tracking-tight [text-wrap:_balance] md:text-5xl lg:text-6xl">
            Empowering Innovation Through Design Excellence
          </h1>
          <p className="text-muted-foreground mx-auto mb-12 max-w-2xl text-center text-lg leading-relaxed [text-wrap:_balance] md:text-xl">
            We are committed to transforming the digital landscape by delivering
            exceptional component libraries that enable developers and designers
            to build remarkable user experiences.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="w-full sm:w-auto">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
      <div className="h-[40vh] w-full sm:h-[50vh] md:h-[60vh] lg:h-[70vh]">
        <img
          src="https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/creative-ai/bg-1.jpg"
          alt="Creative workspace with modern design"
          className="h-full w-full object-cover"
          style={{ backgroundPosition: "top center" }}
        />
      </div>
    </header>
  )
}
