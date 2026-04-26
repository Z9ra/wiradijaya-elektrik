"use client"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Card, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function UserProfileWithTabs() {
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
          </div>
          <Separator className="my-6" />
          <Tabs defaultValue="general" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="billing">Billing</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </CardHeader>
    </Card>
  )
}
