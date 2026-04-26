"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight, Filter, MoreVertical } from "lucide-react"

import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Progress } from "@/components/ui/progress"

const TABLE_ROW = [
  {
    logo: "https://v3.material-tailwind.com/icon/figma.svg",
    title: "Material Figma Version",
    imgs: [
      "/woman-profile-1.jpg",
      "/man-profile-1.jpg",
      "/man-profile-2.jpg",
      "/man-profile-3.jpg",
    ],
    budget: "$140,20",
    date: "31 Jan 2024",
    team: "Design",
    value: 50,
  },
  {
    logo: "https://v3.material-tailwind.com/icon/github.svg",
    title: "Add Progress Track",
    imgs: [
      "/man-profile-1.jpg",
      "/man-profile-2.jpg",
      "/man-profile-3.jpg",
      "/woman-profile-1.jpg",
    ],
    budget: "$3,000",
    date: "15 Feb 2024",
    team: "Development",
    value: 100,
  },
  {
    logo: "https://v3.material-tailwind.com/icon/discord.svg",
    title: "Fix Platform Errors",
    imgs: [
      "/man-profile-1.jpg",
      "/man-profile-2.jpg",
      "/woman-profile-3.jpg",
      "/woman-profile-1.jpg",
    ],
    budget: "$20,000",
    date: "01 Mar 2024",
    team: "Back-End",
    value: 100,
  },
  {
    logo: "https://v3.material-tailwind.com/icon/github.svg",
    title: "Launch Mobile App",
    imgs: [
      "/man-profile-1.jpg",
      "/woman-profile-1.jpg",
      "/woman-profile-2.jpg",
      "/woman-profile-3.jpg",
    ],
    budget: "$5,000",
    date: "20 Mar 2024",
    team: "Design",
    value: 50,
  },
  {
    logo: "https://v3.material-tailwind.com/icon/tailwindcss.svg",
    title: "New Pricing Page",
    imgs: [
      "/woman-profile-1.jpg",
      "/woman-profile-2.jpg",
      "/man-profile-2.jpg",
      "/man-profile-3.jpg",
    ],
    budget: "$2,000",
    date: "27 Mar 2024",
    team: "Marketing",
    value: 50,
  },
]

const TABLE_HEAD = [
  "Project",
  "Assignee",
  "Budget",
  "Team",
  "Progress",
  "Due Date",
  " ",
]

export default function ProjectManagementTable() {
  return (
    <Card>
      <CardHeader className="m-0 flex w-full flex-wrap items-start justify-between gap-4 rounded-none p-4">
        <div>
          <p className="text-default mb-1 text-lg leading-relaxed font-medium font-semibold">
            Projects Table
          </p>
          <p className="text-foreground block text-sm">
            <strong>30 done</strong> this month
          </p>
        </div>
        <div className="flex w-full items-center gap-3 sm:w-max">
          <Button
            variant="outline"
            color="secondary"
            className="flex w-full items-center gap-2 sm:w-auto"
          >
            Filter
            <Filter className="h-4 w-4" />
          </Button>
          <Button className="flex w-full items-center gap-2 sm:w-auto">
            New Project
          </Button>
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
              ({ logo, title, imgs, budget, date, team, value }) => (
                <tr key={title}>
                  <td className="border-surface border-b p-4">
                    <div className="flex items-center gap-2">
                      <Checkbox id={title} />
                      <label
                        htmlFor={title}
                        className="flex items-center gap-2"
                      >
                        <Avatar className="h-6 w-6">
                          <AvatarImage src={logo} alt="logo" />
                        </Avatar>
                        <p className="text-foreground block text-sm font-semibold">
                          {title}
                        </p>
                      </label>
                    </div>
                  </td>
                  <td className="border-surface border-b p-4">
                    <div className="flex items-center -space-x-3">
                      {imgs.map((img, key) => (
                        <Avatar
                          key={key}
                          className="border-secondary h-8 w-8 border-2 hover:z-10 focus:z-10"
                        >
                          <AvatarImage src={img} alt={`avatar-${key}`} />
                        </Avatar>
                      ))}
                    </div>
                  </td>
                  <td className="border-surface border-b p-4">
                    <p className="text-foreground block text-sm">{budget}</p>
                  </td>
                  <td className="border-surface border-b p-4">
                    <Badge size="sm" variant="ghost" className="w-max">
                      {team}
                    </Badge>
                  </td>
                  <td className="border-surface border-b p-4">
                    <p className="text-foreground block text-sm font-semibold">
                      {value}%
                    </p>
                    <Progress
                      value={value}
                      className={`mt-1 h-1 ${
                        value === 100 ? "bg-success/20" : "bg-primary/20"
                      }`}
                    >
                      <div
                        className={`h-full ${
                          value === 100 ? "bg-success" : "bg-primary"
                        }`}
                        style={{ width: `${value}%` }}
                      />
                    </Progress>
                  </td>
                  <td className="border-surface border-b p-4">
                    <p className="text-foreground block text-sm">{date}</p>
                  </td>
                  <td className="border-surface border-b p-4 text-end">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" color="secondary" size="icon">
                          <MoreVertical className="h-5 w-5 stroke-2" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
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
            Prev
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
