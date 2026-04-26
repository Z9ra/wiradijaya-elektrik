"use client"

import * as React from "react"
import { Box, Home, Info, Mail, Menu } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

// Load Instrument Serif font
if (typeof window !== "undefined") {
  const link = document.createElement("link")
  link.href =
    "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap"
  link.rel = "stylesheet"
  if (!document.querySelector(`link[href="${link.href}"]`)) {
    document.head.appendChild(link)
  }
}

const NAV_LIST = [
  {
    label: "Home",
    icon: Home,
  },
  {
    label: "Services",
    icon: Box,
  },
  {
    label: "About Us",
    icon: Info,
  },
  {
    label: "Contact Us",
    icon: Mail,
  },
]

function NavList() {
  return (
    <ul className="mt-4 flex flex-col gap-x-3 gap-y-1.5 lg:mt-0 lg:flex-row lg:items-center">
      {NAV_LIST.map(({ icon: Icon, label }) => (
        <li key={label} className="text-white">
          <a
            href="#"
            className="text-muted-foreground flex items-center gap-x-2 p-1 text-sm"
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
    <nav className="border-transparent bg-transparent px-0 shadow-none">
      <div className="relative flex items-center">
        <a href="#" className="block py-1 text-lg font-bold text-white">
          Creative Tim UI
        </a>
        <div className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
          <NavList />
        </div>
        <div className="hidden items-center gap-2 lg:ml-auto lg:flex">
          <Button size="sm" variant="ghost" className="text-white">
            Sign In
          </Button>
          <Button size="sm">Get Started</Button>
        </div>
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
          <div className="mt-4 flex items-center gap-2">
            <Button size="sm" variant="ghost" className="w-full text-white">
              Sign In
            </Button>
            <Button size="sm" className="w-full">
              Get Started
            </Button>
          </div>
        </>
      )}
    </nav>
  )
}

export default function Hero06() {
  return (
    <header
      className="relative flex h-full min-h-screen flex-col bg-cover bg-center after:absolute after:inset-0 after:h-full after:w-full after:bg-black/50 after:content-['']"
      style={{
        backgroundImage:
          "url('https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/creative-ai/bg-2.jpg')",
      }}
    >
      <div className="relative z-10 container mx-auto h-max py-6">
        <Nav />
      </div>
      <div className="relative z-10 container mx-auto flex h-full flex-grow flex-col items-center justify-center py-8 text-center md:py-16 lg:py-24">
        <Badge>Our pricing plans</Badge>
        <h1
          className="mt-8 mb-4 scroll-m-20 text-5xl !leading-[1.125] font-bold tracking-tight [text-wrap:_balance] text-white md:text-6xl lg:text-7xl"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Work with the rockets
        </h1>
        <p className="text-muted-foreground mb-8 max-w-xl text-xl font-normal text-white/90">
          Wealth creation is an evolutionarily recent positive-sum game. Status
          is an old zero-sum game. Those attacking wealth creation are often
          just seeking status.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="w-full sm:w-auto">
            Get Started
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full bg-white/10 text-white hover:bg-white/20 sm:w-auto"
          >
            Learn More
          </Button>
        </div>
      </div>
    </header>
  )
}
