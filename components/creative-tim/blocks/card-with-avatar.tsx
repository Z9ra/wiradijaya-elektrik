"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export default function CardWithAvatar() {
  return (
    <Card className="mx-auto max-w-sm transition-all hover:shadow-lg">
      <CardHeader className="p-0">
        <div className="overflow-hidden rounded-t-lg">
          <img
            src="https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/creative-ai/bg-3.jpg"
            alt="Mountain landscape workspace"
            className="h-64 w-full object-cover object-center transition-transform hover:scale-105"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-semibold uppercase dark:bg-neutral-800">
          Featured
        </div>
        <h6 className="mt-3 mb-3 text-xl font-bold">
          Innovative Workspace Solutions
        </h6>
        <p className="text-muted-foreground leading-relaxed [text-wrap:balance]">
          Experience the perfect blend of nature and productivity in our premium
          coworking spaces. Designed for teams who value both inspiration and
          collaboration.
        </p>
      </CardContent>
      <CardFooter className="flex items-center gap-3 px-6 pt-0 pb-6">
        <Avatar className="h-10 w-10">
          <AvatarImage
            src="https://images.unsplash.com/photo-1750223642533-1b74b17edae8?auto=format&fit=crop&q=80&w=400&h=400"
            alt="Lori Bryson"
          />
          <AvatarFallback>LB</AvatarFallback>
        </Avatar>
        <div className="grid gap-0.5">
          <p className="text-sm font-semibold">Lori Bryson</p>
          <p className="text-muted-foreground text-xs">Posted on 28 February</p>
        </div>
      </CardFooter>
    </Card>
  )
}
