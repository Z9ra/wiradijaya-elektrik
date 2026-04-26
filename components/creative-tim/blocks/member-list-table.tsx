"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight, Pencil, Search } from "lucide-react"

import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const TABLE_ROW = [
  {
    img: "https://v3.material-tailwind.com/woman-profile-1.jpg",
    name: "Emma Roberts",
    detail: "emma@mail.com",
    role: "Manager",
    position: "Organization",
    online: true,
    date: "23/04/18",
  },
  {
    img: "https://v3.material-tailwind.com/man-profile-1.jpg",
    name: "Marcel Glock",
    detail: "marcel@mail.com",
    role: "Executive",
    position: "Projects",
    online: false,
    date: "23/04/18",
  },
  {
    img: "https://v3.material-tailwind.com/man-profile-2.jpg",
    name: "Misha Stam",
    detail: "misha@mail.com",
    role: "Social Media",
    position: "Projects",
    online: true,
    date: "23/04/18",
  },
  {
    img: "https://v3.material-tailwind.com/woman-profile-2.jpg",
    name: "Lucian Eurel",
    detail: "lucian@mail.com",
    role: "Programator",
    position: "Developer",
    online: false,
    date: "23/04/18",
  },
  {
    img: "https://v3.material-tailwind.com/woman-profile-3.jpg",
    name: "Linde Michele",
    detail: "linde@mail.com",
    role: "Manager",
    position: "Organization",
    online: false,
    date: "23/04/18",
  },
  {
    img: "https://v3.material-tailwind.com/man-profile-3.jpg",
    name: "Georg Joshiash",
    detail: "georg@mail.com",
    role: "Designer",
    position: "Projects",
    online: true,
    date: "23/04/18",
  },
]

const TABLE_HEAD = ["Name", "Function", "Status", "Employed", " "]

export default function MemberListTable() {
  return (
    <Card>
      <CardHeader className="m-0 flex w-full flex-wrap items-start justify-between gap-4 rounded-none p-4">
        <div>
          <p className="text-default mb-1 text-lg leading-relaxed font-medium font-semibold">
            Members List
          </p>
          <p className="text-foreground block text-sm">
            See information about all members
          </p>
        </div>
        <div className="flex w-full shrink-0 flex-col items-center gap-3 sm:flex-row md:w-max">
          <div className="relative w-full sm:w-72">
            <Input placeholder="Search here..." className="pl-9" />
            <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
          </div>
          <Button className="w-full sm:w-auto">Add Member</Button>
        </div>
      </CardHeader>
      <CardContent className="mt-4 overflow-scroll rounded-none p-0">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className="border-surface border-b p-4">
                  <p className="text-default block text-sm font-medium">
                    {head}
                  </p>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROW.map(
              ({ img, name, detail, role, position, online, date }) => (
                <tr key={name}>
                  <td className="border-surface border-b p-4">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={img} alt={name} />
                      </Avatar>
                      <div>
                        <p className="text-default block text-sm font-semibold">
                          {name}
                        </p>
                        <p className="text-foreground block text-sm">
                          {detail}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="border-surface border-b p-4">
                    <div>
                      <p className="text-default block text-sm font-semibold">
                        {role}
                      </p>
                      <p className="text-foreground block text-sm">
                        {position}
                      </p>
                    </div>
                  </td>
                  <td className="border-surface border-b p-4">
                    <Badge
                      size="sm"
                      variant="ghost"
                      className="w-max"
                      color={online ? "success" : "error"}
                    >
                      {online ? "Online" : "Offline"}
                    </Badge>
                  </td>
                  <td className="border-surface border-b p-4">
                    <p className="text-foreground block text-sm">{date}</p>
                  </td>
                  <td className="border-surface border-b p-4">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="ghost" color="secondary" size="icon">
                            <Pencil className="h-4 w-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>Edit User</TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </CardContent>
      <CardFooter className="flex flex-wrap items-center justify-between gap-4 p-4">
        <p className="text-default block text-sm">
          Page 2 <span className="text-foreground font-normal">of 10</span>
        </p>
        <div className="flex items-center gap-2">
          <Button
            size="sm"
            variant="outline"
            color="secondary"
            className="flex items-center gap-1.5"
          >
            <ChevronLeft className="h-4 w-4 stroke-2" />
            prev
          </Button>
          <Button
            size="sm"
            variant="outline"
            color="secondary"
            className="flex items-center gap-1.5"
          >
            Next
            <ChevronRight className="h-4 w-4 stroke-2" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
