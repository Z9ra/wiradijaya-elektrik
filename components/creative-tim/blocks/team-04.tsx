"use client"

import * as React from "react"
import { Facebook, MousePointer2, Twitter } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

const DATA = [
  {
    image: "https://v3.material-tailwind.com/woman-profile-3.jpg",
    name: "Ryan Samuel",
    position: "Financial Examiner",
  },
  {
    image: "https://v3.material-tailwind.com/man-profile-1.jpg",
    name: "Jordan Michael",
    position: "Frond End Developer",
  },
  {
    image: "https://v3.material-tailwind.com/woman-profile-2.jpg",
    name: "Nora Hazel",
    position: "UI Designer",
  },
  {
    image: "https://v3.material-tailwind.com/man-profile-2.jpg",
    name: "Emma Roberts",
    position: "UI Designer",
  },
  {
    image: "https://v3.material-tailwind.com/woman-profile-1.jpg",
    name: "William Pearce",
    position: "Web Developer",
  },
  {
    image: "https://v3.material-tailwind.com/man-profile-3.jpg",
    name: "Bruce Mars",
    position: "UI/UX Designer",
  },
]

export default function Team04() {
  return (
    <section className="grid min-h-screen place-items-center bg-neutral-900 py-20">
      <div className="container mx-auto">
        <div className="mb-20 text-center">
          <Card className="mx-auto mb-8 grid h-16 w-16 place-items-center rounded-xl border-0 bg-white shadow-lg">
            <MousePointer2 className="h-8 w-8 text-neutral-900" />
          </Card>
          <h2 className="my-6 text-4xl font-bold text-white md:text-5xl">
            Our Awesome Team
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed [text-wrap:_balance] text-white/80">
            Talented individuals working together to create exceptional
            experiences. Connect with our team members and explore their
            expertise.
          </p>
        </div>
        <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DATA.map(({ image, name, position }, key) => (
            <Card
              key={key}
              className="group flex items-center gap-6 border-0 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:shadow-xl"
            >
              <CardHeader className="m-0 w-max shrink-0 p-0">
                <Avatar className="h-24 w-24 ring-2 ring-white/20 transition-all duration-300 group-hover:ring-4 group-hover:ring-white/40">
                  <AvatarImage src={image} alt={name} />
                  <AvatarFallback className="bg-neutral-800 text-white">
                    {name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
              </CardHeader>
              <CardContent className="flex-1 p-0">
                <p className="text-lg font-bold text-white">{name}</p>
                <p className="mt-1 mb-3 text-sm font-medium text-white/60">
                  {position}
                </p>
                <div className="-mx-1.5 flex items-center gap-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    <Facebook className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
