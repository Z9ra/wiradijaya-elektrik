"use client"

import * as React from "react"
import { Facebook, Instagram, Menu } from "lucide-react"

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

export default function Hero10() {
  const logos = [
    {
      src: "https://www.creative-tim.com/ui/logo-lovable.png",
      alt: "Lovable",
    },
    {
      src: "https://www.creative-tim.com/ui/logo-open-ai.png",
      alt: "OpenAI",
    },
    {
      src: "https://www.creative-tim.com/ui/logo-claude.png",
      alt: "Claude AI",
    },
  ]

  return (
    <header className="relative flex h-full min-h-screen flex-col bg-[url('https://images.unsplash.com/photo-1573588028698-f4759befb09a?auto=format&w=2000&q=85')] bg-cover bg-center after:absolute after:inset-0 after:h-full after:w-full after:bg-black/60 after:content-['']">
      <div className="relative z-10 container mx-auto h-max py-6">
        <Nav />
      </div>
      <div className="relative z-10 container mx-auto flex h-full flex-grow flex-col justify-center py-8 md:py-16 lg:py-24">
        <h1 className="mb-6 max-w-4xl scroll-m-20 text-4xl !leading-tight font-bold tracking-tight [text-wrap:_balance] text-white md:text-5xl lg:text-6xl">
          Build Beautiful Digital Experiences
        </h1>
        <p className="text-muted-foreground mb-12 max-w-2xl text-lg leading-relaxed font-normal [text-wrap:_balance] text-white/95 md:text-xl">
          Create stunning web applications with our powerful component library.
          Trusted by leading AI companies and developers worldwide to deliver
          exceptional user experiences.
        </p>
        <div className="mb-16 flex flex-col items-start gap-4 sm:flex-row">
          <Button size="lg" className="w-full sm:w-auto">
            Get Started Free
          </Button>
          <Button size="lg" variant="secondary" className="w-full sm:w-auto">
            View Components
          </Button>
        </div>

        <div className="relative w-full overflow-hidden">
          <p className="text-muted-foreground mb-4 text-sm font-medium text-white/90">
            Trusted By Leading AI Platforms
          </p>
          <div className="relative flex overflow-hidden">
            <style jsx>{`
              @keyframes scroll {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
              .animate-scroll {
                animation: scroll 20s linear infinite;
              }
            `}</style>
            <div className="animate-scroll flex shrink-0 items-center gap-12">
              {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
                <img
                  key={index}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-8 w-auto object-contain brightness-0 grayscale invert transition-opacity hover:opacity-70"
                />
              ))}
            </div>
            <div className="animate-scroll flex shrink-0 items-center gap-12">
              {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
                <img
                  key={`duplicate-${index}`}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-8 w-auto object-contain brightness-0 grayscale invert transition-opacity hover:opacity-70"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
