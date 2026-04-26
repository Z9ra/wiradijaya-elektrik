"use client"

import * as React from "react"
import { ArrowDown, ArrowUp, BarChart3, TrendingUp } from "lucide-react"
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

const CHART_DATA = {
  2024: [
    { month: "Apr", sales: 50 },
    { month: "May", sales: 40 },
    { month: "Jun", sales: 300 },
    { month: "Jul", sales: 220 },
    { month: "Aug", sales: 500 },
    { month: "Sep", sales: 250 },
    { month: "Oct", sales: 400 },
    { month: "Nov", sales: 230 },
    { month: "Dec", sales: 500 },
  ],
  2023: [
    { month: "Apr", sales: 24 },
    { month: "May", sales: 55 },
    { month: "Jun", sales: 200 },
    { month: "Jul", sales: 450 },
    { month: "Aug", sales: 500 },
    { month: "Sep", sales: 400 },
    { month: "Oct", sales: 400 },
    { month: "Nov", sales: 500 },
    { month: "Dec", sales: 250 },
  ],
  2022: [
    { month: "Apr", sales: 100 },
    { month: "May", sales: 150 },
    { month: "Jun", sales: 150 },
    { month: "Jul", sales: 180 },
    { month: "Aug", sales: 100 },
    { month: "Sep", sales: 250 },
    { month: "Oct", sales: 350 },
    { month: "Nov", sales: 400 },
    { month: "Dec", sales: 500 },
  ],
}

const TOTAL_VALUES = {
  2024: 87982,
  2023: 112455,
  2022: 887652,
}

function CustomTooltip({ active, payload, label }: any) {
  if (active && payload && payload.length) {
    const value = payload[0].value
    const isPositive = value > 200

    return (
      <Card className="border-border p-3 shadow-lg">
        <div className="space-y-2">
          <p className="text-foreground text-sm font-semibold">{label}</p>
          <Separator />
          <div className="flex items-center gap-2">
            <div
              className={`h-2.5 w-2.5 rounded-full ${isPositive ? "bg-green-500" : "bg-red-500"}`}
            />
            <span className="text-muted-foreground text-sm capitalize">
              {payload[0].name}:
            </span>
            <span
              className={`text-sm font-semibold ${isPositive ? "text-green-600 dark:text-green-500" : "text-red-600 dark:text-red-500"}`}
            >
              ${value}
            </span>
          </div>
        </div>
      </Card>
    )
  }

  return null
}

export default function BarChartExample() {
  const [selectedYear, setSelectedYear] = React.useState<
    "2024" | "2023" | "2022"
  >("2024")

  const currentValue = TOTAL_VALUES[selectedYear]
  const previousYear = String(Number(selectedYear) - 1) as
    | "2024"
    | "2023"
    | "2022"
  const previousValue = TOTAL_VALUES[previousYear] || 0
  const changePercent = previousValue
    ? ((currentValue - previousValue) / previousValue) * 100
    : 0
  const isPositive = changePercent > 0
  const chartData = CHART_DATA[selectedYear]

  return (
    <Card className="p-6 transition-shadow hover:shadow-lg">
      <div className="space-y-4 pb-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="bg-muted flex h-10 w-10 items-center justify-center rounded-lg">
                <BarChart3 className="text-muted-foreground h-5 w-5" />
              </div>
              <div>
                <h4 className="text-lg font-semibold">Sales Overview</h4>
                <p className="text-muted-foreground text-sm">
                  Monthly performance metrics
                </p>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:items-center">
            <Select
              value={selectedYear}
              onValueChange={(value) =>
                setSelectedYear(value as "2024" | "2023" | "2022")
              }
            >
              <SelectTrigger className="w-full sm:w-32">
                <SelectValue placeholder="Select Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2024">2024</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2022">2022</SelectItem>
              </SelectContent>
            </Select>
            <Button className="w-full sm:w-auto">
              <TrendingUp className="mr-2 h-4 w-4" />
              View Report
            </Button>
          </div>
        </div>

        <Separator />

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <p className="text-muted-foreground text-sm">Total Balance</p>
            <p className="text-3xl font-bold">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(currentValue)}
            </p>
          </div>

          {previousValue > 0 && (
            <Badge
              variant="secondary"
              className={`gap-1 ${
                isPositive
                  ? "bg-green-100 text-green-700 hover:bg-green-100 dark:bg-green-900/20 dark:text-green-400"
                  : "bg-red-100 text-red-700 hover:bg-red-100 dark:bg-red-900/20 dark:text-red-400"
              }`}
            >
              {isPositive ? (
                <ArrowUp className="h-3.5 w-3.5" />
              ) : (
                <ArrowDown className="h-3.5 w-3.5" />
              )}
              <span className="font-semibold">
                {Math.abs(changePercent).toFixed(1)}%
              </span>
              <span className="text-xs">vs {previousYear}</span>
            </Badge>
          )}
        </div>
      </div>

      <div className="h-96 w-full md:h-[32rem]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid
              vertical={false}
              strokeDasharray="3 3"
              stroke="hsl(var(--border))"
            />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
            />
            <Tooltip
              cursor={{ fill: "hsl(var(--muted))", opacity: 0.3 }}
              content={
                <CustomTooltip
                  active={undefined}
                  payload={undefined}
                  label={undefined}
                />
              }
            />
            <Bar
              dataKey="sales"
              fill="hsl(var(--primary))"
              radius={[4, 4, 0, 0]}
              maxBarSize={48}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}
