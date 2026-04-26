"use client"

import * as React from "react"
import { ArrowRight, Calendar, Users } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const AVATARS = [
  {
    src: "https://v3.material-tailwind.com/woman-profile-1.jpg",
    alt: "Team member 1",
    fallback: "JD",
    x: 0,
    y: -90,
  },
  {
    src: "https://v3.material-tailwind.com/man-profile-1.jpg",
    alt: "Team member 2",
    fallback: "AK",
    x: 85.6,
    y: -27.8,
  },
  {
    src: "https://v3.material-tailwind.com/woman-profile-2.jpg",
    alt: "Team member 3",
    fallback: "SM",
    x: 52.9,
    y: 72.8,
  },
  {
    src: "https://v3.material-tailwind.com/man-profile-2.jpg",
    alt: "Team member 4",
    fallback: "MJ",
    x: -52.9,
    y: 72.8,
  },
  {
    src: "https://v3.material-tailwind.com/woman-profile-3.jpg",
    alt: "Team member 5",
    fallback: "LC",
    x: -85.6,
    y: -27.8,
  },
]

export default function Widgets07() {
  return (
    <Card className="overflow-hidden transition-shadow hover:shadow-lg">
      <CardContent className="p-0">
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {/* Left Content */}
          <div className="space-y-6 p-8 md:p-10">
            <div className="space-y-4">
              <Badge variant="secondary" className="gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                Upcoming Events
              </Badge>

              <div className="space-y-3">
                <h2 className="text-3xl font-bold md:text-4xl">
                  Tech Summit: Shaping Tomorrow
                </h2>
                <p className="text-muted-foreground text-base md:text-lg">
                  Prepare to be part of dynamic conversations that will redefine
                  the boundaries of innovation and technology.
                </p>
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <div className="text-muted-foreground flex items-center gap-2 text-sm">
                <Users className="h-4 w-4" />
                <span>
                  Join{" "}
                  <span className="text-foreground font-semibold">500+</span>{" "}
                  attendees
                </span>
              </div>

              <Button size="lg" className="group/btn w-full md:w-auto">
                Join Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* Right Avatars with Animation */}
          <div className="bg-muted/30 relative flex items-center justify-center p-8 md:p-10">
            <div className="relative h-64 w-64">
              {/* Decorative Background Circle */}
              <div className="bg-muted/50 absolute inset-0 animate-pulse rounded-full" />

              {/* Animated Avatars */}
              {AVATARS.map((avatar, index) => (
                <div
                  key={index}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    animation: `float ${3 + index * 0.5}s ease-in-out infinite`,
                    animationDelay: `${index * 0.2}s`,
                  }}
                >
                  <div
                    className="absolute"
                    style={{
                      transform: `translate(${avatar.x}px, ${avatar.y}px)`,
                    }}
                  >
                    <Avatar className="border-background h-16 w-16 border-4 shadow-lg transition-all hover:scale-125 hover:shadow-xl">
                      <AvatarImage src={avatar.src} alt={avatar.alt} />
                      <AvatarFallback>{avatar.fallback}</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
              ))}

              {/* Center Avatar */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Avatar className="border-background h-20 w-20 border-4 shadow-xl">
                  <div className="bg-muted text-muted-foreground flex h-full w-full items-center justify-center text-2xl font-bold">
                    +
                  </div>
                </Avatar>
              </div>
            </div>

            {/* Keyframes for floating animation */}
            <style jsx>{`
              @keyframes float {
                0%,
                100% {
                  transform: translateY(0px);
                }
                50% {
                  transform: translateY(-10px);
                }
              }
            `}</style>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
