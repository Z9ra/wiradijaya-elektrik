"use client"

import * as React from "react"
import {
  ArrowDown,
  ArrowUp,
  CircleDollarSign,
  DollarSign,
  UserPlus,
  Users,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const DATA = [
  {
    icon: DollarSign,
    title: "Today's Money",
    value: "$53k",
    change: "+55%",
    trend: "up" as const,
    period: "than last week",
  },
  {
    icon: Users,
    title: "Today's Users",
    value: "2,300",
    change: "+3%",
    trend: "up" as const,
    period: "than last week",
  },
  {
    icon: UserPlus,
    title: "New Clients",
    value: "3,462",
    change: "-2%",
    trend: "down" as const,
    period: "than last week",
  },
  {
    icon: CircleDollarSign,
    title: "Overview Sales",
    value: "$103,430",
    change: "+25%",
    trend: "up" as const,
    period: "than last week",
  },
]

export default function Widgets05() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      {DATA.map(({ icon: Icon, title, value, change, trend, period }) => {
        const isPositive = trend === "up"
        const trendColor = isPositive
          ? "text-green-600 dark:text-green-500"
          : "text-red-600 dark:text-red-500"
        const badgeColor = isPositive
          ? "bg-green-100 text-green-700 hover:bg-green-100 dark:bg-green-900/20 dark:text-green-400"
          : "bg-red-100 text-red-700 hover:bg-red-100 dark:bg-red-900/20 dark:text-red-400"

        return (
          <Card key={title} className="transition-shadow hover:shadow-lg">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="bg-muted flex h-12 w-12 items-center justify-center rounded-lg">
                  <Icon className="text-muted-foreground h-6 w-6" />
                </div>
                <Badge variant="secondary" className={`gap-1 ${badgeColor}`}>
                  {isPositive ? (
                    <ArrowUp className="h-3 w-3" />
                  ) : (
                    <ArrowDown className="h-3 w-3" />
                  )}
                  {change}
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="space-y-1">
              <p className="text-muted-foreground text-sm">{title}</p>
              <p className="text-3xl font-bold tracking-tight">{value}</p>
            </CardContent>

            <Separator />

            <CardFooter className="pt-3">
              <p className="text-muted-foreground text-sm">
                <span className={`font-medium ${trendColor}`}>{change}</span>{" "}
                {period}
              </p>
            </CardFooter>
          </Card>
        )
      })}
    </div>
  )
}
