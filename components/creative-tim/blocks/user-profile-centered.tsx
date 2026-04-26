"use client"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function UserProfileCentered() {
  return (
    <Card className="overflow-hidden border">
      <CardHeader className="m-0 w-full p-0">
        <div className="relative h-56 w-full">
          <img
            src="https://v3.material-tailwind.com/dark-bg-pattern.jpg"
            alt="background"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        </div>
        <div className="relative -mt-16 pb-6 text-center">
          <Avatar className="border-background mx-auto mb-4 h-32 w-32 border-4 shadow-lg">
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
      </CardHeader>
      <Separator />
      <CardContent className="flex flex-wrap items-center justify-between gap-6 p-6">
        <div className="flex flex-wrap items-center gap-2">
          <Button variant="ghost" asChild>
            <a href="#">General</a>
          </Button>
          <Button variant="ghost" asChild>
            <a href="#">Billing</a>
          </Button>
          <Button variant="ghost" asChild>
            <a href="#">Invoices</a>
          </Button>
          <Button variant="ghost" asChild>
            <a href="#">Settings</a>
          </Button>
        </div>
        <div className="flex flex-wrap items-center gap-6">
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
        </div>
      </CardContent>
    </Card>
  )
}
