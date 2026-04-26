"use client"

import * as React from "react"
import { Box, Files, FileText, Menu, User } from "lucide-react"

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

export default function Hero12() {
  return (
    <header>
      <div className="container mx-auto py-6">
        <Nav />
      </div>
      <div className="container mx-auto grid h-full w-full grid-cols-1 items-center gap-8 py-12 md:grid-cols-2 md:py-20 lg:py-36">
        <div>
          <h1 className="mb-6 scroll-m-20 text-4xl !leading-tight font-bold tracking-tight [text-wrap:_balance] md:text-5xl lg:text-6xl">
            Create Unforgettable Digital Experiences
          </h1>
          <p className="text-muted-foreground mb-12 max-w-2xl text-lg leading-relaxed [text-wrap:_balance] md:text-xl">
            Build stunning, modern applications with our comprehensive component
            library. Stand out with professional designs that engage and inspire
            your users.
          </p>
          <div className="mb-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Button size="lg" className="w-full sm:w-auto">
              Get Started Free
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              View Documentation
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-8 border-t pt-8">
            <div>
              <div className="mb-1 text-3xl font-bold">10,000+</div>
              <div className="text-muted-foreground text-sm">Active Users</div>
            </div>
            <div>
              <div className="mb-1 text-3xl font-bold">50+</div>
              <div className="text-muted-foreground text-sm">Countries</div>
            </div>
            <div>
              <div className="mb-1 text-3xl font-bold">99%</div>
              <div className="text-muted-foreground text-sm">Satisfaction</div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 items-center gap-4 md:grid-cols-4">
          <div className="mt-8 hidden md:block">
            <img
              src="https://v3.material-tailwind.com/3d-obj-1.jpg"
              alt="3d illustration"
              className="h-full w-full rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-4">
            <img
              src="https://v3.material-tailwind.com/3d-obj-2.jpg"
              alt="3d illustration"
              className="h-full w-full rounded-lg"
            />
            <img
              src="https://v3.material-tailwind.com/3d-obj-3.jpg"
              alt="3d illustration"
              className="h-full w-full rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-4 md:mt-24">
            <img
              src="https://v3.material-tailwind.com/3d-obj-4.jpg"
              alt="3d illustration"
              className="h-full w-full rounded-lg"
            />
            <img
              src="https://v3.material-tailwind.com/3d-obj-5.jpg"
              alt="3d illustration"
              className="h-full w-full rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-4 md:mt-8">
            <img
              src="https://v3.material-tailwind.com/3d-obj-6.jpg"
              alt="3d illustration"
              className="h-full w-full rounded-lg"
            />
            <img
              src="https://v3.material-tailwind.com/3d-obj-7.jpg"
              alt="3d illustration"
              className="h-full w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </header>
  )
}
