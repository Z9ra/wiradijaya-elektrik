"use client"

import * as React from "react"
import { Box, Home, Info, Mail, Menu } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

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
          <Button
            size="sm"
            variant="ghost"
            className="border border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
          >
            Sign In
          </Button>
          <Button size="sm" className="bg-white text-black hover:bg-white/90">
            Get Started
          </Button>
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
            <Button
              size="sm"
              variant="ghost"
              className="w-full border border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
            >
              Sign In
            </Button>
            <Button
              size="sm"
              className="w-full bg-white text-black hover:bg-white/90"
            >
              Get Started
            </Button>
          </div>
        </>
      )}
    </nav>
  )
}

export default function Hero18() {
  return (
    <header className="relative flex h-full min-h-screen flex-col bg-[url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&w=2000&q=85&fit=max')] bg-cover bg-center after:absolute after:inset-0 after:h-full after:w-full after:bg-black/50 after:content-['']">
      <div className="relative z-10 container mx-auto h-max py-6">
        <Nav />
      </div>
      <div className="relative z-10 container mx-auto flex h-full flex-grow flex-col items-center justify-center py-8 text-center md:py-16 lg:py-24">
        <Badge
          variant="outline"
          className="border-white/30 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm"
        >
          ✨ Latest Innovation in UI Design
        </Badge>
        <h1 className="mt-8 mb-6 scroll-m-20 text-5xl !leading-[1.125] font-bold tracking-tight [text-wrap:_balance] text-white md:text-6xl lg:text-7xl">
          Build Something Extraordinary Together
        </h1>
        <p className="text-muted-foreground mb-12 max-w-3xl text-lg leading-relaxed font-normal text-white/95 md:text-xl">
          Empower your creativity with cutting-edge design tools and components.
          Join a community of innovators creating the next generation of digital
          experiences.
        </p>
        <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="w-full bg-white text-black hover:bg-white/90 sm:w-auto"
          >
            Start Building Now
          </Button>
          <Button
            size="lg"
            variant="ghost"
            className="w-full border-2 border-white/30 bg-white/10 text-white backdrop-blur-md hover:border-white/50 hover:bg-white/20 sm:w-auto"
          >
            Explore Features
          </Button>
        </div>
        <div className="rounded-2xl border border-white/20 bg-white/10 px-8 py-6 backdrop-blur-md">
          <p className="mb-3 text-lg font-semibold text-white">
            Limited Time Offer
          </p>
          <p className="mb-4 text-4xl font-bold text-white">
            50% Off Pro Access
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-white/90">
            Claim Your Discount
          </Button>
        </div>
      </div>
    </header>
  )
}
