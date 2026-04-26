"use client"

import * as React from "react"
import { Dribbble, Facebook, Instagram, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"

const NAV_LIST = ["Home", "Services", "About", "Contact"]

function NavList() {
  return (
    <ul className="mt-4 flex flex-col gap-x-3 gap-y-1.5 lg:mt-0 lg:flex-row lg:items-center">
      {NAV_LIST.map((el) => (
        <li key={el}>
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
        <a href="#" className="block py-1 text-sm font-semibold">
          Material Tailwind
        </a>
        <div className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
          <NavList />
        </div>
        <div className="hidden items-center gap-2 lg:ml-auto lg:flex">
          <Button size="sm" variant="outline">
            Sign In
          </Button>
          <Button size="sm">Get Started</Button>
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
              Get Started
            </Button>
          </div>
        </>
      )}
    </nav>
  )
}

export default function Hero16() {
  return (
    <header className="flex h-full min-h-screen flex-col">
      <div className="relative z-10 container mx-auto h-max py-2">
        <Nav />
      </div>
      <div className="relative z-10 container mx-auto flex h-full flex-grow flex-col items-center justify-center py-8 text-center md:py-16 lg:py-24">
        <h1 className="mt-8 mb-4 scroll-m-20 text-4xl !leading-[1.125] font-bold tracking-tight [text-wrap:_balance] lg:text-5xl">
          Work with an amazing
        </h1>
        <p className="text-muted-foreground mb-16 max-w-xl text-xl font-normal">
          We&apos;re constantly trying to express ourselves and actualize our
          dreams. If you have the opportunity to play this game
        </p>
        <p className="mb-6 font-semibold">Connect with us on</p>
        <div className="flex items-center justify-center gap-4">
          <Button
            size="icon"
            variant="outline"
            className="h-11 w-11 rounded-full"
          >
            <Facebook className="h-6 w-6" />
          </Button>
          <Button
            size="icon"
            variant="outline"
            className="h-11 w-11 rounded-full"
          >
            <Instagram className="h-6 w-6" />
          </Button>
          <Button
            size="icon"
            variant="outline"
            className="h-11 w-11 rounded-full"
          >
            <Dribbble className="h-[22px] w-[22px]" />
          </Button>
        </div>
      </div>
    </header>
  )
}
