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

export default function Hero08() {
  return (
    <header>
      <div className="container mx-auto py-6">
        <Nav />
      </div>
      <div className="container mx-auto grid h-full w-full grid-cols-1 items-center gap-12 py-8 md:py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div className="row-start-2 lg:row-auto">
          <h1 className="mb-6 scroll-m-20 text-4xl !leading-tight font-bold tracking-tight [text-wrap:_balance] md:text-5xl lg:text-6xl">
            Experience Design Excellence on Every Device
          </h1>
          <p className="text-muted-foreground mb-10 max-w-xl text-lg leading-relaxed [text-wrap:_balance] md:text-xl">
            Download our mobile app and take your creative workflow anywhere.
            Build stunning interfaces with powerful tools designed for modern
            developers and designers.
          </p>
          <div className="mb-12 flex flex-col gap-4 sm:flex-row">
            <Button
              variant="outline"
              size="lg"
              className="w-full gap-4 text-start sm:w-auto"
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
              <div className="flex flex-col justify-start">
                <p className="text-muted-foreground text-xs">Download on</p>
                <p className="font-semibold">App Store</p>
              </div>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full gap-4 text-start sm:w-auto"
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
              <div className="flex flex-col justify-start">
                <p className="text-muted-foreground text-xs">Download on</p>
                <p className="font-semibold">Google Play</p>
              </div>
            </Button>
          </div>
          <div>
            <p className="text-foreground mb-4 text-sm font-medium">
              Trusted By Leading AI Platforms
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <img
                src="https://www.creative-tim.com/ui/logo-claude.png"
                alt="Claude AI"
                className="h-8 object-contain grayscale transition-all hover:grayscale-0 dark:brightness-200"
              />
              <img
                src="https://www.creative-tim.com/ui/logo-open-ai.png"
                alt="OpenAI"
                className="h-8 object-contain grayscale transition-all hover:grayscale-0 dark:brightness-200"
              />
              <img
                src="https://www.creative-tim.com/ui/logo-lovable.png"
                alt="Lovable"
                className="h-8 object-contain grayscale transition-all hover:grayscale-0 dark:brightness-200"
              />
            </div>
          </div>
        </div>
        <div className="grid w-full place-items-center">
          <img
            alt="iPhone mockup showcasing Creative Tim UI mobile app"
            src="https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/creative-ai/mockup-iphone.png"
            className="w-full max-w-64 drop-shadow-2xl md:max-w-72 lg:max-w-96 xl:max-w-[440px]"
          />
        </div>
      </div>
    </header>
  )
}
