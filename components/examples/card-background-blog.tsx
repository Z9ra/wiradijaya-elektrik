"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardTitle } from "@/components/ui/card"

if (typeof window !== "undefined") {
  const link = document.createElement("link")
  link.href =
    "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap"
  link.rel = "stylesheet"
  if (!document.querySelector(`link[href="${link.href}"]`)) {
    document.head.appendChild(link)
  }
}

export default function CardBackgroundBlog() {
  return (
    <Card className="relative flex h-[40rem] w-full max-w-[28rem] flex-col items-center justify-end overflow-hidden border-0 text-center">
      <div className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/creative-ai/bg-2.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50 to-black/10 dark:from-black/90 dark:via-black/60 dark:to-black/20" />
      </div>
      <CardContent className="relative z-10 flex flex-col items-center justify-end px-6 py-14 md:px-12">
        <CardTitle
          className="mb-4 text-2xl text-white md:text-3xl"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          How we design and code open-source projects?
        </CardTitle>
        <p className="mb-6 text-lg text-white/80">Tania Andrew</p>
        <Avatar className="h-20 w-20 border-2 border-white">
          <AvatarImage
            src="https://images.unsplash.com/photo-1716662318479-a9c0f1cd1a0e?auto=format&fit=crop&q=80&w=400&h=400"
            alt="Tania Andrew"
          />
          <AvatarFallback>TA</AvatarFallback>
        </Avatar>
      </CardContent>
    </Card>
  )
}
