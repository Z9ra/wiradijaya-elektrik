"use client"

import * as React from "react"
import { Calendar, TrendingUp, Users } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"

const DATA = [
  {
    icon: "https://v3.material-tailwind.com/icon/github.svg",
    avatars: [
      "https://v3.material-tailwind.com/woman-profile-1.jpg",
      "https://v3.material-tailwind.com/woman-profile-2.jpg",
      "https://v3.material-tailwind.com/man-profile-1.jpg",
    ],
    title: "GitHub project for new version control and collaborative features.",
    completed: 50,
    lastUpdated: "14 Dec, 2023",
  },
  {
    icon: "https://v3.material-tailwind.com/icon/figma.svg",
    avatars: [
      "https://v3.material-tailwind.com/man-profile-2.jpg",
      "https://v3.material-tailwind.com/woman-profile-3.jpg",
      "https://v3.material-tailwind.com/woman-profile-2.jpg",
    ],
    title: "Redesign app, prototype, and iterate on stunning UI/UX designs.",
    completed: 50,
    lastUpdated: "20 Jan, 2024",
  },
  {
    icon: "https://v3.material-tailwind.com/icon/discord.svg",
    avatars: [
      "https://v3.material-tailwind.com/man-profile-1.jpg",
      "https://v3.material-tailwind.com/man-profile-2.jpg",
      "https://v3.material-tailwind.com/woman-profile-3.jpg",
    ],
    title:
      "Create, organized channels and private groups ensure our discussions.",
    completed: 100,
    lastUpdated: "24 Jan, 2024",
  },
]

export default function Widgets03() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {DATA.map(({ icon, title, avatars, completed, lastUpdated }) => (
        <Card key={title} className="transition-shadow hover:shadow-lg">
          <CardHeader className="pb-4">
            <div className="flex items-start justify-between">
              <div className="bg-muted flex h-14 w-14 items-center justify-center rounded-lg">
                <img src={icon} alt="icon" className="h-7 w-7" />
              </div>
              <div className="flex items-center gap-2">
                <div className="text-muted-foreground flex items-center gap-1 text-sm">
                  <Users className="h-3.5 w-3.5" />
                  <span className="text-xs">{avatars.length}</span>
                </div>
                <div className="flex -space-x-2">
                  {avatars.map((avatar, key) => (
                    <Avatar
                      key={key}
                      className="border-background h-8 w-8 border-2 transition-transform hover:z-10 hover:scale-110"
                    >
                      <AvatarImage src={avatar} alt={`avatar-${key + 1}`} />
                      <AvatarFallback className="text-xs">
                        A{key + 1}
                      </AvatarFallback>
                    </Avatar>
                  ))}
                </div>
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-4">
            <div>
              <p className="text-foreground text-sm leading-relaxed">{title}</p>
            </div>

            <Separator />

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="text-muted-foreground flex items-center gap-2 text-sm">
                  <TrendingUp className="h-4 w-4" />
                  <span className="font-medium">Progress</span>
                </div>
                <Badge
                  variant={completed === 100 ? "default" : "secondary"}
                  className={
                    completed === 100
                      ? "bg-muted text-foreground hover:bg-muted/80"
                      : ""
                  }
                >
                  {completed}%
                </Badge>
              </div>
              <Progress value={completed} className="h-2" />
            </div>
          </CardContent>

          <CardFooter className="pt-0">
            <div className="text-muted-foreground flex w-full items-center gap-2 text-sm">
              <Calendar className="h-4 w-4" />
              <span>Updated {lastUpdated}</span>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
