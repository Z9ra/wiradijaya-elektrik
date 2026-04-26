"use client"

import * as React from "react"
import {
  CheckCircle,
  Facebook,
  Instagram,
  Menu,
  Sparkles,
  Zap,
} from "lucide-react"

import { Button } from "@/components/ui/button"

const NAV_LIST = ["Home", "Services", "About", "Contact"]

function NavList() {
  return (
    <ul className="mt-4 flex flex-col gap-x-3 gap-y-1.5 lg:mt-0 lg:flex-row lg:items-center">
      {NAV_LIST.map((el) => (
        <li key={el} className="text-white">
          <a href="#" className="text-muted-foreground p-1 text-sm">
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
        <div className="ml-auto flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-white"></Button>
          <Button variant="ghost" size="icon" className="text-white">
            <Facebook className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white">
            <Instagram className="h-4 w-4" />
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
      </div>
      {openNav && <NavList />}
    </nav>
  )
}

export default function Hero13() {
  return (
    <header className="relative flex h-full min-h-screen flex-col bg-[url('https://images.unsplash.com/photo-1676311708279-3fa0627eaf74?auto=format&w=2000&q=85&fit=max')] bg-cover bg-center after:absolute after:inset-0 after:h-full after:w-full after:bg-black/60 after:content-['']">
      <div className="relative z-10 container mx-auto h-max py-6">
        <Nav />
      </div>
      <div className="relative z-10 container mx-auto flex h-full flex-grow flex-col items-center justify-center py-8 text-center md:py-16 lg:py-24">
        <h1
          className="mb-6 scroll-m-20 text-5xl !leading-[1.125] font-bold tracking-tight [text-wrap:_balance] text-white md:text-6xl lg:text-7xl"
          style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}
        >
          Crafting Digital Excellence Through Innovation
        </h1>
        <p className="text-muted-foreground mb-12 max-w-3xl text-lg leading-relaxed font-normal text-white/90 md:text-xl">
          We blend creativity with cutting-edge technology to build exceptional
          digital experiences that inspire, engage, and transform your vision
          into reality.
        </p>
        <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="w-full sm:w-auto">
            Start Your Journey
          </Button>
          <Button
            size="lg"
            variant="ghost"
            className="w-full text-white sm:w-auto"
          >
            Explore Our Work
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
          <div className="flex flex-col items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <p className="text-sm font-medium text-white">
              Lightning Fast Performance
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <p className="text-sm font-medium text-white">
              Beautiful Design Systems
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
              <CheckCircle className="h-6 w-6 text-white" />
            </div>
            <p className="text-sm font-medium text-white">
              Production Ready Code
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}
