"use client"

import * as React from "react"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import {
  ArrowLeft,
  ArrowRight,
  Box,
  Home,
  Info,
  Mail,
  Menu,
} from "lucide-react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide, useSwiper } from "swiper/react"

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

const SLIDES = [
  {
    img: "https://v3.material-tailwind.com/nature-1.jpg",
    badge: "Save up to 30% on early bookings!",
    title: "Explore Exotic Destinations",
    desc: "Embark on an adventure to the world's most beautiful and exotic locations. Discover breathtaking landscapes and vibrant cultures with our exclusive travel packages.",
    buttonLabel: "Plan Your Trip",
  },
  {
    img: "https://v3.material-tailwind.com/nature-2.jpg",
    badge: "Up to 25% off on all-inclusive packages!",
    title: "Book Your Dream Holiday",
    desc: "Make your dream holiday a reality with our hassle-free booking options. Choose from a variety of destinations and accommodations tailored to your preferences.",
    buttonLabel: "Book Now",
  },
  {
    img: "https://v3.material-tailwind.com/nature-3.jpg",
    badge: "Last-Minute Deals",
    title: "Escape to Paradise",
    desc: "Need a quick escape? Check out our last-minute getaway deals and enjoy spontaneous adventures without breaking the bank. Perfect for your next holiday!",
    buttonLabel: "Find Deals",
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
        <a href="#" className="block py-1 text-sm font-semibold text-white">
          Material Tailwind
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
        <div className="border-surface/20 dark:border-surface mt-2 rounded-xl border bg-black px-4 pb-4">
          <NavList />
          <div className="mt-2 flex items-center gap-2">
            <Button size="sm" variant="ghost" className="w-full text-white">
              Sign In
            </Button>
            <Button size="sm" className="w-full">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}

function CustomNavigation() {
  const swiper = useSwiper()

  return (
    <>
      <Button
        size="icon"
        variant="ghost"
        onClick={() => swiper.slidePrev()}
        className="!absolute top-1/2 left-2 z-10 hidden h-11 w-11 -translate-y-1/2 rounded-full text-white sm:grid"
      >
        <ArrowLeft className="h-7 w-7 -translate-x-0.5 stroke-2" />
      </Button>
      <Button
        size="icon"
        variant="ghost"
        onClick={() => swiper.slideNext()}
        className="!absolute top-1/2 right-2 z-10 hidden h-11 w-11 -translate-y-1/2 rounded-full text-white sm:grid"
      >
        <ArrowRight className="h-7 w-7 translate-x-px stroke-2" />
      </Button>
    </>
  )
}

function customPagination(_: any, className: string) {
  return `<span class="${className} w-4 h-4 [&.swiper-pagination-bullet-active]:!opacity-100 [&.swiper-pagination-bullet-active]:[background:rgb(var(--color-white))] !opacity-50 ![background:rgb(var(--color-white))]"></span>`
}

export default function Hero15() {
  return (
    <header className="h-full w-full">
      <div className="absolute left-1/2 z-10 container mx-auto -translate-x-1/2 py-2">
        <Nav />
      </div>
      <Swiper
        autoplay
        pagination={{
          enabled: true,
          clickable: true,
          dynamicBullets: true,
          renderBullet: customPagination,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="relative h-full w-full"
      >
        {SLIDES.map(({ img, title, badge, desc, buttonLabel }, index) => (
          <SwiperSlide
            key={index}
            className="relative !flex h-full min-h-screen w-full flex-col select-none"
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 h-full w-full bg-black/70" />
            <div className="relative z-10 container mx-auto flex h-full flex-grow flex-col items-center justify-center py-8 text-center md:py-16 lg:py-24">
              <Badge variant="outline" className="text-white">
                Join our talented team
              </Badge>
              <h1 className="mt-8 mb-4 scroll-m-20 text-3xl !leading-[1.125] font-semibold tracking-tight [text-wrap:_balance] text-white">
                {title}
              </h1>
              <p className="text-muted-foreground mb-12 max-w-xl text-xl font-normal text-white/90">
                {desc}
              </p>
              <Button size="lg">{buttonLabel}</Button>
            </div>
          </SwiperSlide>
        ))}
        <CustomNavigation />
      </Swiper>
    </header>
  )
}
