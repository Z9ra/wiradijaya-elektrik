"use client"

import * as React from "react"
import { Facebook, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

const DATA = [
  {
    image: "https://v3.material-tailwind.com/woman-profile-2.jpg",
    name: "Ryan Samuel",
    position: "Co-founder",
    about:
      "Artist is a term applied to a person who engages in an activity deemed to be an art.",
  },
  {
    image: "https://v3.material-tailwind.com/man-profile-1.jpg",
    name: "Jordan Michael",
    position: "Front-End Developer",
    about:
      "And I love you like Kanye loves Kanye. We need to restart the human foundation.",
  },
]

export default function Team17() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold">The Executive Team</h2>
          <p className="text-muted-foreground mx-auto max-w-xl [text-wrap:_balance]">
            This is the paragraph where you can write more details about your
            team. Keep you user engaged by providing meaningful information.
          </p>
        </div>
        <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-2">
          {DATA.map(({ image, name, position, about }, key) => (
            <Card
              key={key}
              variant="ghost"
              className="grid grid-cols-1 items-end gap-x-2 lg:grid-cols-12"
            >
              <CardHeader className="col-span-5 p-0">
                <img
                  src={image}
                  alt={`${name} image`}
                  className="h-72 rounded-xl object-cover object-center"
                />
              </CardHeader>
              <CardContent className="col-span-7 px-0">
                <p className="text-lg font-semibold">{name}</p>
                <p className="text-muted-foreground my-2 font-semibold">
                  {position}
                </p>
                <p className="text-muted-foreground mb-4 max-w-lg [text-wrap:_balance]">
                  {about}
                </p>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Facebook className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Twitter className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <svg
                      className="h-5 w-5"
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
