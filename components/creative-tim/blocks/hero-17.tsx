"use client"

import * as React from "react"
import { Dribbble, Facebook, Instagram, Menu } from "lucide-react"

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

export default function Hero17() {
  return (
    <header className="relative flex h-full min-h-screen flex-col bg-[url('https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/creative-ai/bg-3.jpg')] bg-cover bg-center after:absolute after:inset-0 after:h-full after:w-full after:bg-black/60 after:content-['']">
      <div className="relative z-10 container mx-auto h-max py-6">
        <Nav />
      </div>
      <div className="relative z-10 container mx-auto flex h-full flex-grow flex-col items-center justify-center py-8 text-center md:py-16 lg:py-24">
        <h1 className="mt-8 mb-6 scroll-m-20 text-5xl !leading-[1.125] font-bold tracking-tight [text-wrap:_balance] text-white md:text-6xl lg:text-7xl">
          Connect with Our Creative Community
        </h1>
        <p className="text-muted-foreground mb-16 max-w-3xl text-lg leading-relaxed font-normal text-white/95 md:text-xl">
          Join thousands of designers, developers, and innovators who are
          shaping the future of digital experiences. Let&apos;s build something
          extraordinary together.
        </p>
        <p className="mb-6 text-lg font-semibold text-white">
          Follow us for daily inspiration
        </p>
        <div className="flex items-center justify-center gap-4">
          <Button
            size="icon"
            variant="ghost"
            className="h-14 w-14 rounded-full border-2 border-white/20 bg-white/10 text-white backdrop-blur-sm transition-all hover:scale-110 hover:border-white/40 hover:bg-white/20"
          >
            <Facebook className="h-7 w-7" />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="h-14 w-14 rounded-full border-2 border-white/20 bg-white/10 text-white backdrop-blur-sm transition-all hover:scale-110 hover:border-white/40 hover:bg-white/20"
          >
            <Instagram className="h-7 w-7" />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="h-14 w-14 rounded-full border-2 border-white/20 bg-white/10 text-white backdrop-blur-sm transition-all hover:scale-110 hover:border-white/40 hover:bg-white/20"
          >
            <Dribbble className="h-[26px] w-[26px]" />
          </Button>
        </div>
      </div>
    </header>
  )
}
