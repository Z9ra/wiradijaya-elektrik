"use client"

import { useState } from "react"
import {
  ChevronDown,
  Home,
  Inbox,
  LayoutDashboard,
  LifeBuoy,
  LogOut,
  Search,
  Settings,
  User,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

const iconNavItems = [
  { icon: Home, label: "Dashboard" },
  { icon: Inbox, label: "Inbox" },
  { icon: User, label: "Profile" },
  { icon: Settings, label: "Settings" },
]

const menuItems = [
  { label: "Dashboard", href: "#", icon: Home },
  { label: "E-Commerce", href: "#", icon: Inbox },
  { label: "Settings", href: "#", icon: Settings },
]

export default function DoubleSidebar() {
  const [isProfileOpen, setIsProfileOpen] = useState(false)

  return (
    <div className="flex h-screen w-max overflow-hidden">
      <aside className="bg-background h-screen w-16 overflow-y-scroll border-r">
        <div className="flex h-full flex-col items-center gap-4 py-6">
          <div className="bg-muted mb-2 rounded-lg p-2">
            <LayoutDashboard className="text-muted-foreground h-5 w-5" />
          </div>
          <nav className="flex flex-1 flex-col items-center gap-2">
            {iconNavItems.map((item, index) => (
              <button
                key={index}
                className="text-muted-foreground hover:text-foreground hover:bg-secondary grid h-10 w-10 place-items-center rounded-md transition-colors"
                title={item.label}
              >
                <item.icon className="h-5 w-5" />
              </button>
            ))}
          </nav>
          <Separator className="w-8" />
          <div className="mt-auto">
            <button
              className="text-muted-foreground hover:text-foreground hover:bg-secondary grid h-10 w-10 place-items-center rounded-md transition-colors"
              title="Help"
            >
              <LifeBuoy className="h-5 w-5" />
            </button>
          </div>
        </div>
      </aside>

      <aside className="bg-background h-screen w-72 overflow-y-scroll border-r">
        <div className="p-6">
          <div className="mb-4 flex items-center gap-3 border-b pb-4">
            <p className="text-xl font-semibold">Creative Tim UI</p>
          </div>
          <div className="relative">
            <Search className="text-muted-foreground absolute top-1/2 left-2.5 h-5 w-5 -translate-y-1/2" />
            <Input
              type="search"
              placeholder="Search here..."
              className="pl-10"
            />
          </div>
        </div>

        <div className="space-y-4 px-6 py-2.5 pt-0 pb-6">
          <div className="flex min-w-60 flex-col gap-0.5">
            <Collapsible open={isProfileOpen} onOpenChange={setIsProfileOpen}>
              <CollapsibleTrigger className="text-muted-foreground hover:text-foreground hover:bg-secondary flex w-full items-center rounded-md px-2.5 py-2 transition-colors">
                <span className="mr-2.5 grid shrink-0 place-items-center">
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src="https://v3.material-tailwind.com/woman-profile-1.jpg"
                      alt="Brooklyn Alice"
                    />
                    <AvatarFallback>BA</AvatarFallback>
                  </Avatar>
                </span>
                <span className="font-medium">Brooklyn Alice</span>
                <span className="ml-auto grid shrink-0 place-items-center pl-2.5">
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${isProfileOpen ? "rotate-180" : ""}`}
                  />
                </span>
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-2 space-y-1">
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground hover:bg-secondary block rounded-md px-4 py-2 text-sm font-medium transition-colors"
                >
                  My Profile
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground hover:bg-secondary block rounded-md px-4 py-2 text-sm font-medium transition-colors"
                >
                  Settings
                </a>
              </CollapsibleContent>
            </Collapsible>
          </div>

          <Separator />

          <nav className="flex flex-col gap-0.5 pt-2">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-muted-foreground hover:text-foreground hover:bg-secondary flex items-center gap-3 rounded-md px-2.5 py-2 transition-colors"
              >
                <item.icon className="h-5 w-5" />
                <span className="font-medium">{item.label}</span>
              </a>
            ))}
          </nav>

          <Separator />

          <div className="pt-2">
            <button className="text-muted-foreground hover:text-foreground hover:bg-secondary flex w-full items-center gap-3 rounded-md px-2.5 py-2 transition-colors">
              <LogOut className="h-5 w-5" />
              <span className="font-medium">Log Out</span>
            </button>
          </div>
        </div>
      </aside>
    </div>
  )
}
