"use client"

import * as React from "react"
import {
  Box,
  CircleDollarSign,
  DollarSign,
  TrendingUp,
  Users,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const DATA = [
  {
    icon: CircleDollarSign,
    title: "Sales",
    value: "$230,300",
    change: "+3%",
    period: "than last month",
  },
  {
    icon: Users,
    title: "Customers",
    value: "3,200",
    change: "+12%",
    period: "than last month",
  },
  {
    icon: DollarSign,
    title: "Avg. Revenue",
    value: "$1,200",
    change: "+213%",
    period: "than last month",
  },
  {
    icon: Box,
    title: "Orders",
    value: "1,388",
    change: "+11%",
    period: "than last month",
  },
]

export default function Widgets04() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      {DATA.map(({ icon: Icon, title, value, change, period }) => (
        <Card key={title} className="transition-shadow hover:shadow-lg">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="bg-muted flex h-12 w-12 items-center justify-center rounded-lg">
                <Icon className="text-muted-foreground h-6 w-6" />
              </div>
              <Badge variant="secondary" className="gap-1">
                <TrendingUp className="h-3 w-3" />
                {change}
              </Badge>
            </div>
          </CardHeader>

          <CardContent className="space-y-3">
            <div>
              <p className="text-muted-foreground text-sm">{title}</p>
              <p className="text-3xl font-bold tracking-tight">{value}</p>
            </div>
          </CardContent>

          <Separator />

          <CardFooter className="pt-3">
            <p className="text-muted-foreground text-sm">{period}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
