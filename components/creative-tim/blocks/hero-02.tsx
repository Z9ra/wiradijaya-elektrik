"use client"

import * as React from "react"
import { Facebook, Instagram, Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const NAV_LIST = ["Home", "Services", "About", "Contact"]

function NavList() {
  return (
    <ul className="mt-4 flex flex-col gap-x-3 gap-y-1.5 lg:mt-0 lg:flex-row lg:items-center">
      {NAV_LIST.map((el) => (
        <li key={el} className="text-white">
          <a
            href="#"
            className="block p-1.5 text-sm text-white/90 transition-colors hover:text-white"
          >
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
    <nav className="border-transparent bg-transparent px-0 py-4 shadow-none">
      <div className="relative flex items-center">
        <a href="#" className="block py-1 text-lg font-bold text-white">
          Creative Tim UI
        </a>
        <div className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
          <NavList />
        </div>
        <div className="ml-auto flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10"
          >
            <Facebook className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10"
          >
            <Instagram className="h-4 w-4" />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="ml-auto grid text-white hover:bg-white/10 lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      {openNav && (
        <>
          <Separator className="my-3 bg-white/20" />
          <NavList />
        </>
      )}
    </nav>
  )
}

export default function Hero02() {
  return (
    <header>
      <div className="bg-neutral-950">
        <div className="container mx-auto px-4">
          <Nav />
        </div>
        <div className="container mx-auto grid h-full w-full grid-cols-1 items-center gap-12 px-4 py-12 md:py-20 lg:grid-cols-2 lg:gap-16 lg:py-28">
          <div className="row-start-2 lg:row-auto">
            <h1 className="mb-6 scroll-m-20 text-4xl !leading-tight font-bold tracking-tight [text-wrap:_balance] text-white md:text-5xl lg:text-6xl">
              Build Amazing Digital Experiences
            </h1>
            <p className="mb-10 max-w-2xl text-lg leading-relaxed [text-wrap:_balance] text-white/90 md:text-xl">
              Start your development journey with Creative Tim UI. A powerful
              component library designed for modern web applications with
              stunning design and exceptional user experience.
            </p>
            <div className="mb-16 flex flex-col gap-4 sm:flex-row md:mb-24">
              <Button
                size="lg"
                className="w-full gap-4 bg-white text-gray-900 shadow-xl hover:bg-white/90 sm:w-auto"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enableBackground="new 0 0 22.185 27"
                  viewBox="0 0 22.185 27"
                  id="apple"
                  className="h-9 w-9"
                >
                  <path d="M18.436 14.271c0-2.225 1.216-4.166 3.02-5.194-.942-1.156-2.359-2.192-3.921-2.496-2.13-.415-3.345.276-4.131.553-.786.277-1.83.526-1.83.526s-1.043-.249-1.83-.526C8.959 6.857 7.744 6.165 5.614 6.58s-3.99 2.192-4.746 3.776c-1.458 3.057-.858 6.903.172 9.669 1.029 2.767 3.75 6.633 5.86 6.944 1.501.221 2.43-.816 4.674-1.079 2.244.263 3.173 1.3 4.674 1.079 2.11-.311 4.831-4.177 5.86-6.944.025-.068.051-.138.076-.208C19.987 18.935 18.436 16.784 18.436 14.271zM11.041 6.075c0 0 2.087.277 3.982-1.875s1.356-4.188 1.356-4.188-2.087-.277-3.982 1.875S11.041 6.075 11.041 6.075z"></path>
                </svg>
                <div className="flex flex-col text-start">
                  <p className="text-xs text-gray-600">Download on</p>
                  <p className="font-semibold">App Store</p>
                </div>
              </Button>
              <Button
                size="lg"
                className="w-full gap-4 bg-white text-gray-900 shadow-xl hover:bg-white/90 sm:w-auto"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  viewBox="0 0 16 16"
                  id="google-play"
                  className="h-9 w-9"
                >
                  <path
                    fill="#2196F3"
                    d="M8.32 7.68.58 15.42c-.37-.35-.57-.83-.57-1.35V1.93C.01 1.4.22.92.6.56l7.72 7.12z"
                  ></path>
                  <path
                    fill="#FFC107"
                    d="M15.01 8c0 .7-.38 1.32-1.01 1.67l-2.2 1.22-2.73-2.52-.75-.69 2.89-2.89L14 6.33c.63.35 1.01.97 1.01 1.67z"
                  ></path>
                  <path
                    fill="#4CAF50"
                    d="M8.32 7.68.6.56C.7.46.83.37.96.29 1.59-.09 2.35-.1 3 .26l8.21 4.53-2.89 2.89z"
                  ></path>
                  <path
                    fill="#F44336"
                    d="M11.8 10.89 3 15.74c-.31.18-.66.26-1 .26-.36 0-.72-.09-1.04-.29a1.82 1.82 0 0 1-.38-.29l7.74-7.74.75.69 2.73 2.52z"
                  ></path>
                </svg>
                <div className="flex flex-col text-start">
                  <p className="text-xs text-gray-600">Download on</p>
                  <p className="font-semibold">Google Play</p>
                </div>
              </Button>
            </div>
          </div>
          <div className="grid w-full place-items-center">
            <img
              alt="iPhone mockup with Creative Tim UI"
              src="https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/creative-ai/mockup-iphone.png"
              className="h-auto w-full max-w-sm md:max-w-md lg:max-w-lg"
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto -mt-24 px-4 pb-8 md:-mt-28 md:pb-12">
        <Card className="shadow-2xl">
          <CardContent className="px-6 py-8 md:px-12 md:py-10">
            <h2 className="mb-4 scroll-m-20 text-2xl font-bold tracking-tight md:text-3xl">
              Explore Our Showcase
            </h2>
            <p className="text-muted-foreground mb-4 max-w-2xl text-base leading-relaxed [text-wrap:_balance] md:text-lg">
              Discover the power of Creative Tim UI through our curated
              collection of projects. We&apos;re here to help you build
              exceptional digital products. Get in touch with us at{" "}
              <a
                href="mailto:hello@creativetim.com"
                className="text-primary font-medium underline-offset-4 hover:underline"
              >
                hello@creativetim.com
              </a>
            </p>
            <Button size="lg" className="mt-4">
              View Projects
            </Button>
          </CardContent>
        </Card>
      </div>
    </header>
  )
}
