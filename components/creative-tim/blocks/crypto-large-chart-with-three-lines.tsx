"use client"

import * as React from "react"
import { Activity, DollarSign, TrendingUp, Wallet } from "lucide-react"
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
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const CHART_DATA = [
  {
    month: "Jan",
    transactions: 285000,
    staking: 178000,
    volume: 245000,
  },
  {
    month: "Feb",
    transactions: 312000,
    staking: 195000,
    volume: 268000,
  },
  {
    month: "Mar",
    transactions: 298000,
    staking: 188000,
    volume: 252000,
  },
  {
    month: "Apr",
    transactions: 335000,
    staking: 210000,
    volume: 285000,
  },
  {
    month: "May",
    transactions: 358000,
    staking: 225000,
    volume: 298000,
  },
  {
    month: "Jun",
    transactions: 372000,
    staking: 238000,
    volume: 312000,
  },
  {
    month: "Jul",
    transactions: 365000,
    staking: 232000,
    volume: 305000,
  },
  {
    month: "Aug",
    transactions: 395000,
    staking: 248000,
    volume: 328000,
  },
  {
    month: "Sep",
    transactions: 388000,
    staking: 242000,
    volume: 318000,
  },
  {
    month: "Oct",
    transactions: 410000,
    staking: 258000,
    volume: 342000,
  },
  {
    month: "Nov",
    transactions: 425000,
    staking: 268000,
    volume: 355000,
  },
  {
    month: "Dec",
    transactions: 416180,
    staking: 260500,
    volume: 348850,
  },
]

function CustomTooltip({ active, payload, label }: any) {
  if (active && payload && payload.length) {
    return (
      <div className="border-border bg-background rounded-lg border px-3 py-2.5 shadow-lg">
        <p className="text-foreground mb-2 text-sm font-semibold">{label}</p>
        <div className="space-y-1.5">
          {payload.map(({ name, value, color }: any, key: number) => (
            <div key={key} className="flex items-center gap-2">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: color }}
              />
              <span className="text-muted-foreground text-xs">{name}:</span>
              <span className="text-foreground text-xs font-bold">
                {value.toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return null
}

export default function CryptoLargeChartWithThreeLines() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-6">
        <div className="flex items-center gap-2">
          <Activity className="h-5 w-5 text-blue-600" />
          <h3 className="text-xl font-bold">Network Activity Overview</h3>
        </div>
        <Select defaultValue="Last 24H">
          <SelectTrigger className="h-9 w-[130px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Last 6H">Last 6H</SelectItem>
            <SelectItem value="Last 12H">Last 12H</SelectItem>
            <SelectItem value="Last 24H">Last 24H</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="grid grid-cols-1 gap-6 lg:grid-cols-4">
        <div className="col-span-1 flex flex-col gap-4">
          <Card className="border-l-4 border-l-green-500 shadow-sm">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-green-500/10 p-2.5">
                  <Activity className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-muted-foreground text-xs font-medium">
                    Total Transactions
                  </p>
                  <div className="flex items-baseline gap-2">
                    <h4 className="text-2xl font-bold">416,180</h4>
                    <Badge
                      variant="secondary"
                      className="gap-1 bg-green-500/10 text-green-600"
                    >
                      <TrendingUp className="h-3 w-3" />
                      +12%
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-500 shadow-sm">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-blue-500/10 p-2.5">
                  <DollarSign className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-muted-foreground text-xs font-medium">
                    24h Volume
                  </p>
                  <div className="flex items-baseline gap-2">
                    <h4 className="text-2xl font-bold">348,850</h4>
                    <Badge
                      variant="secondary"
                      className="gap-1 bg-blue-500/10 text-blue-600"
                    >
                      <TrendingUp className="h-3 w-3" />
                      +8%
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-500 shadow-sm">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-purple-500/10 p-2.5">
                  <Wallet className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-muted-foreground text-xs font-medium">
                    Users Staking
                  </p>
                  <div className="flex items-baseline gap-2">
                    <h4 className="text-2xl font-bold">260,500</h4>
                    <Badge
                      variant="secondary"
                      className="gap-1 bg-purple-500/10 text-purple-600"
                    >
                      <TrendingUp className="h-3 w-3" />
                      +15%
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="col-span-1 lg:col-span-3">
          <div className="h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={CHART_DATA}
                margin={{ top: 5, right: 20, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis
                  dataKey="month"
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend
                  wrapperStyle={{ paddingTop: "20px" }}
                  iconType="circle"
                  formatter={(value) => (
                    <span className="text-muted-foreground text-sm font-medium">
                      {value}
                    </span>
                  )}
                />
                <Line
                  type="monotone"
                  dataKey="transactions"
                  name="Transactions"
                  stroke="#10b981"
                  strokeWidth={2.5}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="volume"
                  name="Volume"
                  stroke="#3b82f6"
                  strokeWidth={2.5}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="staking"
                  name="Staking"
                  stroke="#a855f7"
                  strokeWidth={2.5}
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
