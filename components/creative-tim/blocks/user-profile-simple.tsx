"use client"

import { Dribbble, Github, Twitter } from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function UserProfileSimple() {
  return (
    <Card className="overflow-hidden border">
      <CardHeader className="m-0 w-full p-0">
        <div className="relative h-48 w-full">
          <img
            src="https://v3.material-tailwind.com/dark-bg-pattern.jpg"
            alt="background"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        </div>
        <div className="p-6">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <Avatar className="border-background h-16 w-16 shrink-0 border-4 shadow-md">
                <AvatarImage
                  src="https://images.unsplash.com/photo-1716662318479-a9c0f1cd1a0e?auto=format&fit=crop&q=80&w=400&h=400"
                  alt="Emma Roberts"
                />
                <AvatarFallback>ER</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <p className="text-xl font-semibold">Emma Roberts</p>
                <p className="text-muted-foreground text-sm">
                  emma.roberts@mail.com
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Button variant="outline" size="sm">
                <Github className="mr-2 h-4 w-4" />
                Github
              </Button>
              <Button variant="outline" size="sm">
                <Twitter className="mr-2 h-4 w-4" />
                X/Twitter
              </Button>
              <Button variant="outline" size="sm">
                <Dribbble className="mr-2 h-4 w-4" />
                Dribbble
              </Button>
            </div>
          </div>
        </div>
      </CardHeader>
      <Separator />
      <CardContent className="p-6">
        <p className="text-muted-foreground max-w-2xl leading-relaxed">
          Passionate UI/UX designer focused on creating intuitive and engaging
          digital experiences. Driven by design thinking, creativity, and a love
          for problem-solving.
        </p>
      </CardContent>
    </Card>
  )
}
