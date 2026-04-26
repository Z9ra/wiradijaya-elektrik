"use client"

import { useState } from "react"
import {
  ChevronDown,
  Home,
  Inbox,
  LayoutDashboard,
  LifeBuoy,
  Paperclip,
  Search,
  Send,
  Settings,
  User,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
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

const teamMembers = [
  {
    name: "Brooklyn Alice",
    image: "https://v3.material-tailwind.com/woman-profile-1.jpg",
    online: true,
  },
  {
    name: "John Michael",
    image: "https://v3.material-tailwind.com/man-profile-1.jpg",
    online: true,
  },
  {
    name: "Alexa Liras",
    image: "https://v3.material-tailwind.com/woman-profile-2.jpg",
    online: false,
  },
  {
    name: "Laurent Perrier",
    image: "https://v3.material-tailwind.com/man-profile-2.jpg",
    online: false,
  },
  {
    name: "Michael Levi",
    image: "https://v3.material-tailwind.com/man-profile-3.jpg",
    online: true,
  },
]

export default function DoubleSidebarWithChat() {
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

      <aside className="bg-background flex h-screen w-72 flex-col overflow-y-scroll border-r">
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

        <div className="flex-1 space-y-4 overflow-y-auto px-6 py-2.5 pt-0 pb-6">
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

          <div className="pt-2">
            <small className="text-muted-foreground mb-3 block text-xs font-bold tracking-wide uppercase">
              Team Members
            </small>
            <div className="space-y-1">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="text-muted-foreground hover:text-foreground hover:bg-secondary flex cursor-pointer items-center justify-between rounded-md px-2.5 py-2 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="relative">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={member.image} alt={member.name} />
                        <AvatarFallback>
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <Badge
                        variant="secondary"
                        className={`border-background absolute -right-0.5 -bottom-0.5 h-2.5 w-2.5 rounded-full border-2 p-0 ${
                          member.online ? "bg-green-500" : "bg-gray-300"
                        }`}
                      >
                        <span className="sr-only">
                          {member.online ? "Online" : "Offline"}
                        </span>
                      </Badge>
                    </div>
                    <span className="text-sm font-medium">{member.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Separator />

        <div className="bg-background p-4">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-secondary h-9 w-9 shrink-0"
            >
              <Paperclip className="h-4 w-4" />
            </Button>
            <Input placeholder="Type a message..." className="flex-1" />
            <Button size="icon" className="h-9 w-9 shrink-0">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </aside>
    </div>
  )
}
