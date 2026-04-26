"use client"

import { useState } from "react"
import { ChevronDown, LayoutDashboard, Plus, Search } from "lucide-react"

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

export default function SidebarWithTeamMembers() {
  const [isProfileOpen, setIsProfileOpen] = useState(false)

  return (
    <div className="bg-background h-screen w-full max-w-xs overflow-y-scroll rounded-lg border shadow-sm">
      <div className="p-6">
        <div className="mb-4 flex items-center gap-3 border-b pb-4">
          <div className="bg-muted rounded-lg p-2">
            <LayoutDashboard className="text-muted-foreground h-5 w-5" />
          </div>
          <p className="text-xl font-semibold">Creative Tim UI</p>
        </div>
        <div className="relative">
          <Search className="text-muted-foreground absolute top-1/2 left-2.5 h-5 w-5 -translate-y-1/2" />
          <Input type="search" placeholder="Search here..." className="pl-10" />
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

        <div className="pt-2">
          <div className="mb-3 flex items-center justify-between">
            <small className="text-muted-foreground text-xs font-bold tracking-wide uppercase">
              Team Members
            </small>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-secondary h-6 w-6"
            >
              <Plus className="h-3.5 w-3.5" />
            </Button>
          </div>
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
          <div className="mt-4 flex justify-center">
            <Button variant="link" className="h-auto p-0 text-sm font-semibold">
              View All Members
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
