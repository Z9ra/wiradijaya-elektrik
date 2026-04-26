"use client"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const DATA = [
  {
    title: "Earning Overview",
    value: "$5,120.00",
    date: "+15% from last month",
  },
  {
    title: "Projects Completed",
    value: "501",
    date: "+10% from last month",
  },
  {
    title: "Apps Designed",
    value: "25",
    date: "+10% from last month",
  },
  {
    title: "Workshops",
    value: "25",
    date: "+10% from last month",
  },
]

export default function UserProfileAdvanced() {
  return (
    <Card className="border">
      <CardHeader className="m-0 w-full p-6">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="border-muted h-14 w-14 shrink-0 border-2">
              <AvatarImage
                src="https://images.unsplash.com/photo-1716662318479-a9c0f1cd1a0e?auto=format&fit=crop&q=80&w=400&h=400"
                alt="Emma Roberts"
              />
              <AvatarFallback>ER</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <p className="text-lg font-semibold">Emma Roberts</p>
              <p className="text-muted-foreground text-sm">
                emma.roberts@mail.com
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Button variant="outline" size="sm">
              View More Stats
            </Button>
            <Button variant="outline" size="sm">
              Edit Profile
            </Button>
          </div>
        </div>
      </CardHeader>
      <Separator />
      <CardContent className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-4">
        {DATA.map(({ title, value, date }) => (
          <div key={title} className="space-y-1.5">
            <p className="text-muted-foreground text-sm font-medium">{title}</p>
            <p className="text-3xl font-bold">{value}</p>
            <p className="text-muted-foreground text-xs">{date}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
