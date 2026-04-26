"use client"

import { ArrowDown, ArrowUp, CheckCircle, DollarSign, Eye } from "lucide-react"
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const CHART_DATA = [
  { month: "Apr", value: 50 },
  { month: "May", value: 40 },
  { month: "Jun", value: 300 },
  { month: "Jul", value: 220 },
  { month: "Aug", value: 500 },
  { month: "Sep", value: 250 },
  { month: "Oct", value: 400 },
  { month: "Nov", value: 230 },
  { month: "Dec", value: 500 },
]

function CustomTooltip({ active, payload, label }: any) {
  if (active && payload && payload.length) {
    return (
      <Card className="border-border p-2.5 shadow-lg">
        <div className="space-y-1">
          <p className="text-foreground text-xs font-medium">{label}</p>
          <Separator className="my-1" />
          <div className="flex items-center gap-2">
            <div className="bg-foreground h-2 w-2 rounded-full" />
            <span className="text-muted-foreground text-xs">
              {payload[0].value.toLocaleString()}
            </span>
          </div>
        </div>
      </Card>
    )
  }
  return null
}

export default function CardChartsExample1() {
  const totalViews = 2490
  const totalSales = 2490
  const totalTasks = 2490

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {/* Website Views Card - Area Chart */}
      <Card className="p-6 transition-shadow hover:shadow-lg">
        <div className="space-y-4">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-muted flex h-11 w-11 items-center justify-center rounded-lg">
                <Eye className="text-muted-foreground h-5 w-5" />
              </div>
              <div className="space-y-0.5">
                <p className="text-muted-foreground text-sm font-medium">
                  Website Views
                </p>
                <p className="text-2xl font-bold">
                  {totalViews.toLocaleString()}
                </p>
              </div>
            </div>
            <Badge
              variant="secondary"
              className="gap-1 bg-green-100 text-green-700 hover:bg-green-100 dark:bg-green-900/20 dark:text-green-400"
            >
              <ArrowUp className="h-3 w-3" />
              <span className="text-xs font-semibold">12.5%</span>
            </Badge>
          </div>

          <Separator />

          <div className="h-44 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={CHART_DATA}
                margin={{ top: 10, right: 10, left: 0, bottom: 5 }}
              >
                <defs>
                  <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6b7280" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#6b7280" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tick={{ fontSize: 11 }}
                  tickMargin={8}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tick={{ fontSize: 11 }}
                  tickMargin={8}
                  width={40}
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
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#6b7280"
                  strokeWidth={2}
                  fill="url(#areaGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </Card>

      {/* Daily Sales Card - Bar Chart */}
      <Card className="p-6 transition-shadow hover:shadow-lg">
        <div className="space-y-4">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-muted flex h-11 w-11 items-center justify-center rounded-lg">
                <DollarSign className="text-muted-foreground h-5 w-5" />
              </div>
              <div className="space-y-0.5">
                <p className="text-muted-foreground text-sm font-medium">
                  Daily Sales
                </p>
                <p className="text-2xl font-bold">
                  ${totalSales.toLocaleString()}
                </p>
              </div>
            </div>
            <Badge
              variant="secondary"
              className="gap-1 bg-green-100 text-green-700 hover:bg-green-100 dark:bg-green-900/20 dark:text-green-400"
            >
              <ArrowUp className="h-3 w-3" />
              <span className="text-xs font-semibold">8.2%</span>
            </Badge>
          </div>

          <Separator />

          <div className="h-44 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={CHART_DATA}
                margin={{ top: 10, right: 10, left: 0, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tick={{ fontSize: 11 }}
                  tickMargin={8}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tick={{ fontSize: 11 }}
                  tickMargin={8}
                  width={40}
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
                <Bar
                  dataKey="value"
                  fill="#6b7280"
                  radius={[4, 4, 0, 0]}
                  maxBarSize={32}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </Card>

      {/* Completed Tasks Card - Line Chart */}
      <Card className="p-6 transition-shadow hover:shadow-lg">
        <div className="space-y-4">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-muted flex h-11 w-11 items-center justify-center rounded-lg">
                <CheckCircle className="text-muted-foreground h-5 w-5" />
              </div>
              <div className="space-y-0.5">
                <p className="text-muted-foreground text-sm font-medium">
                  Completed Tasks
                </p>
                <p className="text-2xl font-bold">
                  {totalTasks.toLocaleString()}
                </p>
              </div>
            </div>
            <Badge
              variant="secondary"
              className="gap-1 bg-red-100 text-red-700 hover:bg-red-100 dark:bg-red-900/20 dark:text-red-400"
            >
              <ArrowDown className="h-3 w-3" />
              <span className="text-xs font-semibold">3.1%</span>
            </Badge>
          </div>

          <Separator />

          <div className="h-44 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={CHART_DATA}
                margin={{ top: 10, right: 10, left: 0, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tick={{ fontSize: 11 }}
                  tickMargin={8}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tick={{ fontSize: 11 }}
                  tickMargin={8}
                  width={40}
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
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#6b7280"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </Card>
    </div>
  )
}
