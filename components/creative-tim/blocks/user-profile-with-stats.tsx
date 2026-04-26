"use client"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function UserProfileWithStats() {
  return (
    <Card className="overflow-hidden border">
      <CardHeader className="m-0 w-full p-0">
        <div className="relative h-32 w-full">
          <img
            src="https://v3.material-tailwind.com/dark-bg-pattern.jpg"
            alt="background"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        </div>
        <div className="p-6">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-start sm:text-start">
              <Avatar className="border-background h-24 w-24 shrink-0 border-4 shadow-md">
                <AvatarImage
                  src="https://images.unsplash.com/photo-1716662318479-a9c0f1cd1a0e?auto=format&fit=crop&q=80&w=400&h=400"
                  alt="Emma Roberts"
                />
                <AvatarFallback>ER</AvatarFallback>
              </Avatar>
              <div className="space-y-2">
                <p className="text-xl leading-7 font-semibold">Emma Roberts</p>
                <p className="text-muted-foreground max-w-lg leading-relaxed">
                  Passionate UI/UX designer focused on creating intuitive and
                  engaging digital experiences. Driven by design thinking,
                  creativity, and a love for problem-solving.
                </p>
              </div>
            </div>
            <Button variant="outline" className="mx-auto sm:mx-0">
              View Profile
            </Button>
          </div>
        </div>
      </CardHeader>
      <Separator />
      <CardContent className="flex flex-wrap items-center gap-6 p-6">
        <div className="text-center">
          <p className="text-2xl font-bold">56+</p>
          <p className="text-muted-foreground text-sm">Projects Completed</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold">12+</p>
          <p className="text-muted-foreground text-sm">Workshops</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold">25+</p>
          <p className="text-muted-foreground text-sm">Apps Designed</p>
        </div>
      </CardContent>
    </Card>
  )
}
