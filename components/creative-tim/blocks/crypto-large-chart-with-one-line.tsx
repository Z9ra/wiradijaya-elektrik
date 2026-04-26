"use client"

import * as React from "react"
import { DollarSign, Search, TrendingUp, Users } from "lucide-react"
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const CHART_DATA = [
  { month: "Jan", transactions: 12500 },
  { month: "Feb", transactions: 15800 },
  { month: "Mar", transactions: 18200 },
  { month: "Apr", transactions: 21500 },
  { month: "May", transactions: 25800 },
  { month: "Jun", transactions: 28400 },
  { month: "Jul", transactions: 32100 },
  { month: "Aug", transactions: 35600 },
  { month: "Sep", transactions: 38900 },
  { month: "Oct", transactions: 42300 },
  { month: "Nov", transactions: 45100 },
  { month: "Dec", transactions: 48750 },
]

function CustomTooltip({ active, payload, label }: any) {
  if (active && payload && payload.length) {
    return (
      <div className="border-border bg-background rounded-lg border px-3 py-2 shadow-md">
        <p className="text-muted-foreground text-xs font-medium">{label}</p>
        <p className="text-foreground text-sm font-bold">
          {payload[0].value.toLocaleString()} transactions
        </p>
      </div>
    )
  }

  return null
}

export default function CryptoLargeChartWithOneLine() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="relative w-full max-w-sm">
          <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
          <Input placeholder="Search transactions..." className="pl-9" />
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="outline" className="gap-2 px-4 py-2">
            <DollarSign className="h-4 w-4 text-green-600" />
            <span className="font-semibold">$156,091</span>
            <span className="text-muted-foreground">Current Price</span>
          </Badge>
          <Badge variant="outline" className="gap-2 px-4 py-2">
            <Users className="h-4 w-4 text-blue-600" />
            <span className="font-semibold">36,874</span>
            <span className="text-muted-foreground">Active Users</span>
          </Badge>
        </div>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-6">
          <div>
            <h3 className="text-2xl font-bold">Transaction Overview</h3>
            <p className="text-muted-foreground mt-1 text-sm">
              Monthly transaction volume across the network
            </p>
          </div>
          <Select defaultValue="Last 12M">
            <SelectTrigger className="h-9 w-[140px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Last 6M">Last 6M</SelectItem>
              <SelectItem value="Last 12M">Last 12M</SelectItem>
              <SelectItem value="All Time">All Time</SelectItem>
            </SelectContent>
          </Select>
        </CardHeader>
        <CardContent className="grid grid-cols-1 gap-6 lg:grid-cols-4">
          <div className="col-span-1 flex flex-col gap-6">
            <Card className="border-l-4 border-l-green-500">
              <CardContent className="p-4">
                <div className="text-muted-foreground flex items-center gap-2 text-sm">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                  <span>Your Tokens</span>
                </div>
                <p className="mt-2 text-3xl font-bold text-green-600">7,982</p>
                <p className="text-muted-foreground mt-1 text-xs">
                  +12.5% from last month
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-500">
              <CardContent className="p-4">
                <div className="text-muted-foreground flex items-center gap-2 text-sm">
                  <DollarSign className="h-4 w-4 text-blue-600" />
                  <span>Fees Captured</span>
                </div>
                <p className="mt-2 text-2xl font-bold">10,932 SOL</p>
                <p className="text-muted-foreground mt-1 text-xs">
                  ≈ $1.7M USD
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-500">
              <CardContent className="p-4">
                <div className="text-muted-foreground flex items-center gap-2 text-sm">
                  <TrendingUp className="h-4 w-4 text-purple-600" />
                  <span>Rewards</span>
                </div>
                <p className="mt-2 text-2xl font-bold">4,531 SOL</p>
                <p className="text-muted-foreground mt-1 text-xs">
                  ≈ $706K USD
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="col-span-1 lg:col-span-3">
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={CHART_DATA}
                  margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient
                      id="colorTransactions"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    className="stroke-muted"
                    vertical={false}
                  />
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
                  <Area
                    type="monotone"
                    dataKey="transactions"
                    stroke="#10b981"
                    strokeWidth={2}
                    fill="url(#colorTransactions)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
