"use client"

import { Star } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CardTestimonial() {
  return (
    <Card className="w-full max-w-[26rem] border-none shadow-none">
      <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-4">
        <Avatar className="h-16 w-16 rounded-lg">
          <AvatarImage
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            alt="Tania Andrew"
          />
          <AvatarFallback>TA</AvatarFallback>
        </Avatar>
        <div className="flex w-full flex-col gap-0.5">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base">Tania Andrew</CardTitle>
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
          </div>
          <p className="text-muted-foreground text-sm">
            Frontend Lead @ Google
          </p>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-muted-foreground text-sm">
          "I found solution to all my design needs from Creative Tim. I use them
          as a freelancer in my hobby projects for fun! And its really
          affordable, very humble guys !!!"
        </p>
      </CardContent>
    </Card>
  )
}
