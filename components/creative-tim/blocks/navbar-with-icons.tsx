"use client"

import { useState } from "react"
import { Bell, Home, Menu, MessageCircle, Package } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function NavbarWithIcons() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="w-full overflow-hidden rounded-none p-2 py-3">
      <div className="container mx-auto flex items-center">
        <a href="#" className="block text-base leading-tight font-bold">
          Creative Tim UI
        </a>
        <div className="ml-8 hidden items-center lg:flex">
          <ul className="mt-4 flex flex-col gap-x-4 gap-y-1.5 lg:mt-0 lg:flex-row lg:items-center">
            <li>
              <a href="#" className="flex items-center gap-x-2 p-1 text-sm">
                <Home className="h-4 w-4" />
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-x-2 p-1 text-sm">
                <Package className="h-4 w-4" />
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-x-2 p-1 text-sm">
                <MessageCircle className="h-4 w-4" />
                Messages
              </a>
            </li>
          </ul>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Badge className="mx-1 rounded-full bg-orange-500 text-xs text-slate-50">
            Pro User
          </Badge>
          <Avatar className="h-8 w-8">
            <AvatarImage
              src="https://images.unsplash.com/photo-1716662318479-a9c0f1cd1a0e?auto=format&fit=crop&q=80&w=400&h=400"
              alt="profile-picture"
            />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <Button
            variant="secondary"
            size="icon"
            className="grid shadow-sm lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
      <div className={`${isMenuOpen ? "block" : "hidden"} p-4 pl-12 lg:hidden`}>
        <ul className="mt-4 flex flex-col gap-x-4 gap-y-1.5 lg:mt-0 lg:flex-row lg:items-center">
          <li>
            <a href="#" className="flex items-center gap-x-2 p-1 text-sm">
              <Home className="h-4 w-4" />
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-x-2 p-1 text-sm">
              <Package className="h-4 w-4" />
              Projects
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-x-2 p-1 text-sm">
              <MessageCircle className="h-4 w-4" />
              Messages
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
