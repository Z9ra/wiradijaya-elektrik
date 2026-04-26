"use client"

import { useState } from "react"
import { Bell, Menu, Package } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function SimpleNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="w-full overflow-visible rounded-lg border border-transparent p-2 shadow-transparent">
      <div className="relative flex items-center gap-8">
        <a href="#" className="mr-8 block text-base leading-tight font-bold">
          Creative Tim UI
        </a>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full lg:relative lg:flex lg:flex-row lg:items-center`}
        >
          <ul className="mt-4 flex flex-col gap-y-1.5 p-4 lg:mt-0 lg:flex-row lg:items-center lg:gap-x-4 lg:p-0">
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
            <li>
              <Button
                variant="secondary"
                className="w-full shadow-sm hover:shadow-md md:w-1/3 lg:hidden"
              >
                Logout
              </Button>
            </li>
          </ul>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="hidden hover:bg-gray-100 lg:grid"
          >
            <Bell className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="mr-1 hidden hover:bg-gray-100 lg:grid"
          >
            <Package className="h-5 w-5" />
          </Button>
          <div className="w-full max-w-sm min-w-[200px]">
            <Select defaultValue="project-1">
              <SelectTrigger className="border-gray-300">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="project-1">Project #1</SelectItem>
                <SelectItem value="project-2">Project #2</SelectItem>
                <SelectItem value="project-3">Project #3</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button className="hidden bg-neutral-900 hover:bg-neutral-800 lg:inline-flex">
            Logout
          </Button>
          <Button
            size="icon"
            className="grid bg-neutral-900 hover:bg-neutral-800 lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </nav>
  )
}
