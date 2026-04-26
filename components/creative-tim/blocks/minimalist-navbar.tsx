"use client"

import { useState } from "react"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function MinimalistNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="w-full overflow-hidden rounded-none border-0 border-transparent bg-transparent p-2 py-3 shadow-lg shadow-transparent">
      <div className="container mx-auto">
        <div className="relative flex items-center">
          <a href="#" className="block py-1 text-base font-bold md:text-lg">
            Creative Tim UI
          </a>
          <div className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
            <ul className="mt-4 flex flex-col gap-x-6 gap-y-1.5 lg:mt-0 lg:flex-row lg:items-center">
              <li>
                <a href="#" className="p-1 text-base">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="p-1 text-base">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="p-1 text-base">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <Button
            variant="secondary"
            className="ml-auto hidden shadow-sm hover:shadow-md lg:inline-block"
          >
            Sign In
          </Button>
          <Button
            variant="secondary"
            size="icon"
            className="ml-auto grid shadow-sm hover:shadow-md lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
        <div
          className={`${isMenuOpen ? "block" : "hidden"} mt-2 rounded-md lg:hidden`}
        >
          <ul className="flex flex-col gap-y-1.5 p-4 pl-0">
            <li>
              <a href="#" className="p-1 text-base">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="p-1 text-base">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="p-1 text-base">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
