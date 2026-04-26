"use client"

import * as React from "react"
import { Menu, Play } from "lucide-react"

import { Badge } from "@/components/ui/badge"
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
            Sign Up
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
              Sign Up
            </Button>
          </div>
        </>
      )}
    </nav>
  )
}

export default function Hero14() {
  return (
    <header className="relative flex h-full min-h-screen flex-col overflow-hidden">
      <div className="absolute inset-0 h-full w-full">
        <iframe
          className="absolute top-1/2 left-1/2 h-[56.25vw] min-h-screen w-[177.77777778vh] min-w-full -translate-x-1/2 -translate-y-1/2"
          src="https://www.youtube.com/embed/Faow3SKIzq0?autoplay=1&mute=1&loop=1&playlist=Faow3SKIzq0&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1"
          title="Background video"
          allow="autoplay; encrypted-media"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative z-10 container mx-auto h-max py-6">
        <Nav />
      </div>
      <div className="relative z-10 container mx-auto flex h-full flex-grow flex-col items-center justify-center py-8 text-center md:py-16 lg:py-24">
        <Badge className="px-4 py-2 text-sm backdrop-blur-sm">
          🚀 Join Our Innovative Team
        </Badge>
        <h1 className="mt-8 mb-6 scroll-m-20 text-5xl !leading-[1.125] font-bold tracking-tight [text-wrap:_balance] text-white md:text-6xl lg:text-7xl">
          Build the Future with Creative Minds
        </h1>
        <p className="text-muted-foreground mb-12 max-w-3xl text-lg leading-relaxed font-normal text-white/95 md:text-xl">
          Join a team of passionate innovators who are redefining what&apos;s
          possible. Together, we create extraordinary digital experiences that
          inspire millions around the world.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="w-full bg-white text-black hover:bg-white/90 sm:w-auto"
          >
            Explore Opportunities
          </Button>
          <Button
            size="lg"
            variant="ghost"
            className="group w-full gap-2 border-2 border-white/30 bg-white/10 text-white backdrop-blur-md hover:border-white/50 hover:bg-white/20 sm:w-auto"
          >
            <Play className="h-4 w-4 transition-transform group-hover:scale-110" />
            Watch Our Story
          </Button>
        </div>
      </div>
    </header>
  )
}
