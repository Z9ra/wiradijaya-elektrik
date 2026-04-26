"use client"

import * as React from "react"
import { Activity } from "lucide-react"
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

const CHART_DATA = {
  2024: {
    value: 87982,
    chart: [
      { month: "Apr", views: 50 },
      { month: "May", views: 40 },
      { month: "Jun", views: 300 },
      { month: "Jul", views: 220 },
      { month: "Aug", views: 500 },
      { month: "Sep", views: 250 },
      { month: "Oct", views: 400 },
      { month: "Nov", views: 230 },
      { month: "Dec", views: 500 },
    ],
  },
  2023: {
    value: 112455,
    chart: [
      { month: "Apr", views: 24 },
      { month: "May", views: 55 },
      { month: "Jun", views: 200 },
      { month: "Jul", views: 450 },
      { month: "Aug", views: 500 },
      { month: "Sep", views: 400 },
      { month: "Oct", views: 400 },
      { month: "Nov", views: 500 },
      { month: "Dec", views: 250 },
    ],
  },
  2022: {
    value: 887652,
    chart: [
      { month: "Apr", views: 100 },
      { month: "May", views: 150 },
      { month: "Jun", views: 150 },
      { month: "Jul", views: 180 },
      { month: "Aug", views: 100 },
      { month: "Sep", views: 250 },
      { month: "Oct", views: 350 },
      { month: "Nov", views: 400 },
      { month: "Dec", views: 500 },
    ],
  },
}

function renderLegendText(value: string) {
  return (
    <span className="text-muted-foreground ml-1 text-sm font-medium capitalize select-none">
      {value}
    </span>
  )
}

function CustomTooltip({ active, payload, label }: any) {
  if (active && payload && payload.length) {
    return (
      <Card className="border-border bg-card shadow-lg">
        <CardContent className="p-3">
          <p className="text-muted-foreground mb-1 text-xs font-medium">
            {label}
          </p>
          <Separator className="my-1.5" />
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-gray-600" />
            <span className="text-sm font-semibold">
              {payload[0].value.toLocaleString()}
            </span>
          </div>
        </CardContent>
      </Card>
    )
  }
  return null
}

export default function SingleLineChart() {
  const [date, setDate] = React.useState("2024")
  const [selectedDate, setSelectedDate] = React.useState(date)

  return (
    <Card className="overflow-hidden shadow-sm transition-all hover:shadow-lg">
      <CardContent className="p-6">
        <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row">
          <div className="flex items-start gap-3">
            <div className="bg-muted rounded-lg p-2.5">
              <Activity className="text-muted-foreground h-5 w-5" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Website Views Traffic</h3>
              <p className="text-muted-foreground mt-1 text-sm">
                Unique Views Breakdown
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col items-stretch gap-2 sm:w-auto sm:max-w-sm sm:flex-row">
            <Select value={date} onValueChange={setDate}>
              <SelectTrigger className="hover:bg-muted transition-all">
                <SelectValue placeholder="Select Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2024">2024</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2022">2022</SelectItem>
              </SelectContent>
            </Select>
            <Button
              onClick={() => setSelectedDate(date)}
              className="shrink-0 transition-all"
            >
              View Report
            </Button>
          </div>
        </div>

        <Separator className="mb-6" />

        <div className="relative">
          <div className="bg-background/80 absolute z-10 rounded-lg px-3 py-2 shadow-sm backdrop-blur-sm">
            <p className="text-2xl font-bold">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(
                CHART_DATA[selectedDate as unknown as keyof typeof CHART_DATA]
                  .value
              )}
            </p>
          </div>
          <div className="h-96 md:h-[32rem]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={
                  CHART_DATA[selectedDate as unknown as keyof typeof CHART_DATA]
                    .chart
                }
                margin={{ top: 60, right: 30, left: 0, bottom: 5 }}
              >
                <CartesianGrid
                  vertical={false}
                  strokeDasharray="3 3"
                  stroke="#e5e7eb"
                />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={10}
                  tick={{ fill: "#6b7280", fontSize: 11 }}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tickMargin={10}
                  width={40}
                  tick={{ fill: "#6b7280", fontSize: 11 }}
                />
                <Tooltip
                  content={
                    <CustomTooltip
                      active={undefined}
                      payload={undefined}
                      label={undefined}
                    />
                  }
                />
                <Legend
                  height={50}
                  iconSize={12}
                  align="right"
                  iconType="circle"
                  verticalAlign="top"
                  formatter={renderLegendText}
                />
                <Line
                  dot={false}
                  type="monotone"
                  strokeWidth={3}
                  dataKey="views"
                  stroke="#4b5563"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
