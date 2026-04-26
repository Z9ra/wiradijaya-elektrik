"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function CardWithBackgroundImage() {
  return (
    <Card className="group relative mx-auto w-full max-w-xl overflow-hidden transition-all hover:shadow-2xl">
      <CardHeader className="p-0">
        <div
          className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center transition-transform group-hover:scale-105"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1573588028698-f4759befb09a?auto=format&w=2000&q=85)",
          }}
        >
          <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
        </div>
      </CardHeader>
      <CardContent className="relative p-8 md:px-12 md:py-20">
        <h3 className="text-3xl leading-tight font-bold text-white md:text-4xl">
          Flexible office space means growing your team.
        </h3>
        <p className="my-6 max-w-xl text-base leading-relaxed [text-wrap:balance] text-white/90 md:text-lg">
          Rather than worrying about switching offices every couple years, you
          can instead stay in the same location and grow-up from your shared
          coworking space to an office that takes up an entire floor.
        </p>
        <div className="flex items-center gap-3">
          <Avatar className="h-11 w-11 border-2 border-white/20">
            <AvatarImage
              src="https://images.unsplash.com/photo-1750223642533-1b74b17edae8?auto=format&fit=crop&q=80&w=400&h=400"
              alt="Mathew Glock"
            />
            <AvatarFallback>MG</AvatarFallback>
          </Avatar>
          <div className="grid gap-0.5">
            <p className="text-sm font-semibold text-white">Mathew Glock</p>
            <p className="text-xs text-white/80">Marketing Manager</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
