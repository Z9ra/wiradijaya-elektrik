"use client"

import * as React from "react"
import {
  ArrowRight,
  CreditCard,
  Facebook,
  Globe,
  Instagram,
  Menu,
  Users,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

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

function InfoCard({
  icon: Icon,
  isActive = false,
  title,
  desc,
}: {
  icon: any
  isActive?: boolean
  title: string
  desc: string
}) {
  return (
    <Card className={isActive ? "bg-primary text-white" : ""}>
      <CardContent
        className={`flex items-start gap-4 px-4 pt-4 pb-6 ${
          isActive ? "text-white" : "text-black dark:text-white"
        }`}
      >
        <Icon className="h-7 w-7 shrink-0 text-inherit" />
        <div className="grid">
          <h3 className="mb-2 scroll-m-20 text-xl font-semibold tracking-tight text-inherit">
            {title}
          </h3>
          <p className="mb-6 font-normal opacity-80">{desc}</p>
          <a
            href="#"
            className="flex items-center gap-1.5 text-sm font-semibold"
          >
            Read more
            <ArrowRight className="h-4 w-4 stroke-2" />
          </a>
        </div>
      </CardContent>
    </Card>
  )
}

export default function Hero09() {
  return (
    <header>
      <div className="relative flex min-h-[85vh] flex-col bg-[url('https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&w=2000&q=85&fit=max')] bg-cover bg-center after:absolute after:inset-0 after:h-full after:w-full after:bg-black/60 after:content-['']">
        <div className="relative z-10 container mx-auto py-6">
          <Nav />
        </div>
        <div className="relative z-10 container mx-auto flex h-full flex-grow flex-col justify-center pt-8 pb-16 md:pt-16 md:pb-24 lg:pt-24 lg:pb-40">
          <Badge variant="secondary" className="w-max">
            Featured News & Updates
          </Badge>
          <h1 className="mt-8 mb-6 scroll-m-20 text-4xl !leading-tight font-bold tracking-tight [text-wrap:_balance] text-white md:text-5xl lg:text-6xl">
            Innovation That Drives Success
          </h1>
          <p className="text-muted-foreground mb-12 max-w-2xl text-lg leading-relaxed font-normal text-white/95 md:text-xl">
            Discover the latest breakthroughs and success stories from leading
            companies shaping the future of technology. Stay informed with
            cutting-edge innovations and industry trends.
          </p>
        </div>
      </div>
      <div className="relative z-10 mx-auto -mt-32 w-full px-4">
        <Card className="rounded-2xl shadow-2xl">
          <CardContent className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
            <InfoCard
              isActive
              icon={CreditCard}
              title="Seamless Payment Integration"
              desc="Experience lightning-fast transactions with our advanced payment processing system, designed for modern businesses and e-commerce platforms."
            />
            <InfoCard
              icon={Users}
              title="Global Team Collaboration"
              desc="Connect and collaborate with teams worldwide using our powerful real-time communication tools and project management features."
            />
            <InfoCard
              icon={Globe}
              title="Worldwide Network Access"
              desc="Expand your reach with our global content delivery network, ensuring fast and reliable access for users across all continents."
            />
          </CardContent>
        </Card>
      </div>
    </header>
  )
}
