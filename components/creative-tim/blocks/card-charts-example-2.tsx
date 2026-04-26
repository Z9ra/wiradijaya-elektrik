"use client"

import { Clock, TrendingUp } from "lucide-react"
import {
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

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const CHART_DATA = [
  { month: "Apr", views: 50 },
  { month: "May", views: 40 },
  { month: "Jun", views: 300 },
  { month: "Jul", views: 220 },
  { month: "Aug", views: 500 },
  { month: "Sep", views: 250 },
  { month: "Oct", views: 400 },
  { month: "Nov", views: 230 },
  { month: "Dec", views: 500 },
]

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

export default function CardChartsExample2() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <Card className="overflow-hidden transition-all hover:shadow-lg">
        <CardContent className="p-6">
          <div className="mb-4 flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold">Website Views</h3>
              <p className="text-muted-foreground mt-1 text-sm">
                Last Campaign Performance
              </p>
            </div>
            <div className="bg-muted rounded-lg p-2">
              <TrendingUp className="text-muted-foreground h-5 w-5" />
            </div>
          </div>

          <Separator className="mb-4" />

          <div className="bg-muted/30 h-56 rounded-lg p-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={CHART_DATA}>
                <CartesianGrid
                  vertical={false}
                  strokeDasharray="3 3"
                  stroke="#e5e7eb"
                />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tick={{ fill: "#6b7280", fontSize: 11 }}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  width={35}
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
                <Line
                  type="monotone"
                  dot={false}
                  dataKey="views"
                  strokeWidth={2.5}
                  stroke="#4b5563"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>

        <CardFooter className="bg-muted/20 border-t px-6 py-4">
          <div className="text-muted-foreground flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <p className="text-sm">Campaign sent 2 days ago</p>
          </div>
        </CardFooter>
      </Card>

      <Card className="overflow-hidden transition-all hover:shadow-lg">
        <CardContent className="p-6">
          <div className="mb-4 flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold">Daily Sales</h3>
              <p className="text-muted-foreground mt-1 text-sm">
                15% increase in today sales
              </p>
            </div>
            <div className="bg-muted rounded-lg p-2">
              <TrendingUp className="text-muted-foreground h-5 w-5" />
            </div>
          </div>

          <Separator className="mb-4" />

          <div className="bg-muted/30 h-56 rounded-lg p-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={CHART_DATA}>
                <CartesianGrid
                  vertical={false}
                  strokeDasharray="3 3"
                  stroke="#e5e7eb"
                />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tick={{ fill: "#6b7280", fontSize: 11 }}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  width={35}
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
                <Bar
                  radius={[6, 6, 0, 0]}
                  barSize={14}
                  dataKey="views"
                  fill="#4b5563"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>

        <CardFooter className="bg-muted/20 border-t px-6 py-4">
          <div className="text-muted-foreground flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <p className="text-sm">Campaign sent 2 days ago</p>
          </div>
        </CardFooter>
      </Card>

      <Card className="overflow-hidden transition-all hover:shadow-lg">
        <CardContent className="p-6">
          <div className="mb-4 flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold">Completed Tasks</h3>
              <p className="text-muted-foreground mt-1 text-sm">
                Last Campaign Performance
              </p>
            </div>
            <div className="bg-muted rounded-lg p-2">
              <TrendingUp className="text-muted-foreground h-5 w-5" />
            </div>
          </div>

          <Separator className="mb-4" />

          <div className="bg-muted/30 h-56 rounded-lg p-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={CHART_DATA}>
                <CartesianGrid
                  vertical={false}
                  strokeDasharray="3 3"
                  stroke="#e5e7eb"
                />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tick={{ fill: "#6b7280", fontSize: 11 }}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  width={35}
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
                <Line
                  dot={false}
                  type="monotone"
                  dataKey="views"
                  strokeWidth={2.5}
                  stroke="#4b5563"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>

        <CardFooter className="bg-muted/20 border-t px-6 py-4">
          <div className="text-muted-foreground flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <p className="text-sm">Campaign sent 2 days ago</p>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
