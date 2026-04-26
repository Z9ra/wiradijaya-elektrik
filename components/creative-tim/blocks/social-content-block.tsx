"use client"

import { Facebook, Github, Linkedin } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function SocialContentBlock() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between gap-4">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              Stories
            </Button>
            <Button variant="outline" size="sm">
              Design
            </Button>
            <Button variant="outline" size="sm">
              Castle
            </Button>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <Github className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Linkedin className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Facebook className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="mt-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <img
              src="https://v3.material-tailwind.com/woman-profile-1.jpg"
              alt="woman-profile"
              className="m-0 h-20 w-20 rounded-lg object-cover object-center md:h-24 md:w-24"
            />
            <div>
              <h3 className="text-xl font-bold">Emma Roberts</h3>
              <p className="text-foreground mt-2 max-w-xl [text-wrap:_balance]">
                I&apos;ve been trying to figure out the bed design for the
                master bedroom at our Hidden Hills compound...I like good music
                from Youtube.
              </p>
            </div>
          </div>
          <Button className="max-w-fit">Follow</Button>
        </div>
      </div>
    </section>
  )
}
