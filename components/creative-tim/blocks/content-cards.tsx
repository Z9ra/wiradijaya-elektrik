"use client"

import {
  Facebook,
  Github,
  Linkedin,
  MessageCircle,
  MoreVertical,
  Plus,
  Send,
} from "lucide-react"

import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const DATA = [
  {
    icon: Facebook,
    title: "Facebook Bot",
    desc: "If everything I did failed - which it doesn't, I think that it actually succeeds.",
    images: [
      "/woman-profile-1.jpg",
      "/woman-profile-2.jpg",
      "/woman-profile-3.jpg",
      "/man-profile-1.jpg",
      "/man-profile-2.jpg",
      "/man-profile-3.jpg",
    ],
    date: "02.03.24",
  },
  {
    icon: Linkedin,
    title: "Social Posts",
    desc: "Pink is obviously a better color. Everyone's born confident, and everything's taken away from you.",
    images: [
      "/woman-profile-1.jpg",
      "/woman-profile-2.jpg",
      "/woman-profile-3.jpg",
      "/man-profile-1.jpg",
    ],
    date: "12.06.24",
  },
  {
    icon: Github,
    title: "Web Development",
    desc: "For standing out. But the time is now to be okay to be the greatest you.",
    images: [
      "/woman-profile-1.jpg",
      "/woman-profile-2.jpg",
      "/woman-profile-3.jpg",
    ],
    date: "02.03.23",
  },
  {
    icon: MessageCircle,
    title: "Blog Articles",
    desc: "You have the opportunity to play this game of life you need to appreciate every moment.",
    images: [
      "/woman-profile-1.jpg",
      "/woman-profile-2.jpg",
      "/woman-profile-3.jpg",
      "/man-profile-1.jpg",
    ],
    date: "02.08.24",
  },
  {
    icon: Send,
    title: "Telegram Bot",
    desc: "For standing out. But the time is now to be okay to be the greatest you.",
    images: [
      "/woman-profile-1.jpg",
      "/woman-profile-2.jpg",
      "/woman-profile-3.jpg",
      "/man-profile-1.jpg",
    ],
    date: "10.12.24",
  },
]

export default function ContentCards() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="mb-16">
          <h2 className="text-2xl font-bold">Projects</h2>
          <p className="text-foreground mt-2 text-lg">See all our projects</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DATA.map(({ icon: Icon, title, desc, images, date }, key) => (
            <Card key={key} className="flex flex-col">
              <CardHeader className="m-0 flex w-full flex-row items-end justify-between p-4">
                <div className="flex items-end gap-4">
                  <div className="bg-primary grid h-14 w-14 place-items-center rounded">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <p className="font-semibold">{title}</p>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button size="sm" variant="ghost">
                      <MoreVertical className="h-5 w-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </CardHeader>
              <CardContent className="px-4 pt-2 pb-4">
                <p className="text-foreground max-w-md [text-wrap:_balance]">
                  {desc}
                </p>
              </CardContent>
              <CardFooter className="border-border mt-auto flex justify-between rounded-none border-t p-4">
                <div className="grid gap-2">
                  <div className="flex items-center -space-x-2">
                    {images.map((image, index) => (
                      <Avatar
                        key={index}
                        className="border-background h-6 w-6 border-2 hover:z-10 focus:z-10"
                      >
                        <AvatarImage src={image} alt="avatar" />
                      </Avatar>
                    ))}
                  </div>
                  <p className="text-foreground text-sm">Participants</p>
                </div>
                <div className="grid gap-2">
                  <p className="text-sm font-semibold">{date}</p>
                  <p className="text-foreground text-sm">Due date</p>
                </div>
              </CardFooter>
            </Card>
          ))}
          <Card className="grid h-full place-items-center justify-center">
            <CardContent className="p-0">
              <Plus className="mx-auto h-6 w-6" />
              <p className="text-foreground mt-2 font-semibold">Add New Card</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
