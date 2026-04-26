"use client"

import { useState } from "react"
import { Bell, Home, Menu, Package, Search } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function NavbarWithLinks() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="w-full overflow-visible rounded-lg border border-transparent p-2 shadow-transparent">
      <div className="relative flex items-center gap-8">
        <div>
          <nav className="flex flex-wrap items-center gap-1 p-1">
            <a
              href="#"
              className="hover:text-primary inline-flex items-center gap-1.5 text-sm transition-colors duration-300 ease-in"
            >
              <Home className="h-[18px] w-[18px]" />
            </a>
            <span className="pointer-events-none mx-1 inline-block text-sm opacity-50 select-none">
              /
            </span>
            <a
              href="#"
              className="hover:text-primary inline-flex items-center gap-1.5 text-sm transition-colors duration-300 ease-in"
            >
              <span className="inline-block md:hidden">...</span>
              <span className="hidden md:inline-block">Dashboard</span>
            </a>
            <span className="pointer-events-none mx-1 inline-block text-sm opacity-50 select-none">
              /
            </span>
            <a
              href="#"
              className="hover:text-primary inline-flex items-center gap-1.5 text-sm transition-colors duration-300 ease-in"
            >
              Projects
            </a>
          </nav>
          <p className="mt-1 ml-1 text-base font-semibold">Development</p>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="ghost" size="icon" className="hidden md:grid">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="mr-1 hidden md:grid">
            <Package className="h-5 w-5" />
          </Button>
          <Avatar className="h-8 w-8">
            <AvatarImage
              src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/ct-assets/team-4.jpg"
              alt="profile-picture"
            />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <Button
            variant="secondary"
            size="icon"
            className="grid shadow-sm md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
      <div className="mt-4 flex flex-col items-center md:flex-row">
        <div className={`${isMenuOpen ? "block" : "hidden"} w-full md:block`}>
          <ul className="mt-4 flex flex-col gap-x-4 gap-y-1.5 md:mt-0 md:flex-row md:items-center">
            <li>
              <a href="#" className="p-1 text-sm">
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="p-1 text-sm">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="p-1 text-sm">
                Social
              </a>
            </li>
            <li>
              <a href="#" className="p-1 text-sm">
                Messages
              </a>
            </li>
            <li>
              <a href="#" className="p-1 text-sm">
                Settings
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-4 ml-auto w-full md:mr-0 md:w-72">
          <div className="relative flex items-center">
            <Search className="absolute top-2.5 left-2.5 h-5 w-5 text-slate-600" />
            <Input className="pl-10" placeholder="Search" />
          </div>
        </div>
      </div>
    </nav>
  )
}
