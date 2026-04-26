"use client"

import { BarChart3 } from "lucide-react"
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

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const CHART_DATA = [
  { month: "Apr", 2024: 0, 2023: 200 },
  { month: "May", 2024: 200, 2023: 160 },
  { month: "Jun", 2024: 180, 2023: 150 },
  { month: "Jul", 2024: 350, 2023: 260 },
  { month: "Aug", 2024: 500, 2023: 600 },
  { month: "Sep", 2024: 680, 2023: 790 },
  { month: "Oct", 2024: 800, 2023: 900 },
  { month: "Nov", 2024: 800, 2023: 660 },
  { month: "Dec", 2024: 680, 2023: 500 },
]

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
          <p className="text-muted-foreground mb-1.5 text-xs font-medium">
            {label}
          </p>
          <Separator className="mb-2" />
          {payload.map((entry: any, index: number) => (
            <div
              key={index}
              className="mb-1 flex items-center justify-between gap-4 last:mb-0"
            >
              <div className="flex items-center gap-2">
                <div
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: entry.stroke }}
                />
                <span className="text-muted-foreground text-xs">
                  {entry.name}
                </span>
              </div>
              <span className="text-sm font-semibold">
                {entry.value.toLocaleString()}
              </span>
            </div>
          ))}
        </CardContent>
      </Card>
    )
  }
  return null
}

export default function ComparisonChartWidget() {
  return (
    <Card className="overflow-hidden shadow-sm transition-all hover:shadow-lg">
      <CardContent className="p-6">
        <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:gap-6">
          <div className="flex items-start gap-3">
            <div className="bg-muted rounded-lg p-2.5">
              <BarChart3 className="text-muted-foreground h-5 w-5" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">
                Team Productivity Tracker
              </h3>
              <p className="text-muted-foreground mt-1 text-sm">
                Tasks completed 2023
              </p>
            </div>
          </div>
          <Button
            variant="outline"
            className="hover:bg-muted w-full shrink-0 transition-all sm:w-auto"
          >
            View Report
          </Button>
        </div>

        <Separator className="mb-6" />

        <div className="relative">
          <div className="bg-background/80 absolute z-10 flex items-center gap-3 rounded-lg px-3 py-2 shadow-sm backdrop-blur-sm">
            <p className="text-2xl font-bold">7,982.80</p>
            <Badge
              variant="secondary"
              className="bg-gray-100 text-gray-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300"
            >
              +30%
            </Badge>
          </div>
          <div className="h-96 md:h-[32rem]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={CHART_DATA}
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
                  type="monotone"
                  strokeWidth={3}
                  dataKey="2024"
                  stroke="#4b5563"
                  dot={false}
                />
                <Line
                  type="monotone"
                  strokeWidth={3}
                  dataKey="2023"
                  stroke="#9ca3af"
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
