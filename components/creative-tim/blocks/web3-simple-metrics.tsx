"use client"

import { Coins, Percent, TrendingDown, TrendingUp, Wallet } from "lucide-react"
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

import { Badge } from "@/components/ui/badge"

const APR_DATA = [
  { month: "Jan", value: 32.5 },
  { month: "Feb", value: 34.2 },
  { month: "Mar", value: 33.8 },
  { month: "Apr", value: 35.6 },
  { month: "May", value: 36.4 },
  { month: "Jun", value: 37.1 },
  { month: "Jul", value: 36.8 },
  { month: "Aug", value: 37.5 },
  { month: "Sep", value: 37.9 },
  { month: "Oct", value: 38.2 },
  { month: "Nov", value: 38.5 },
  { month: "Dec", value: 38.03 },
]

const STAKING_DATA = [
  { month: "Jan", value: 4850000 },
  { month: "Feb", value: 4920000 },
  { month: "Mar", value: 5050000 },
  { month: "Apr", value: 5180000 },
  { month: "May", value: 5290000 },
  { month: "Jun", value: 5380000 },
  { month: "Jul", value: 5450000 },
  { month: "Aug", value: 5520000 },
  { month: "Sep", value: 5600000 },
  { month: "Oct", value: 5670000 },
  { month: "Nov", value: 5710000 },
  { month: "Dec", value: 5735538 },
]

const FEES_DATA = [
  { month: "Jan", value: 48500 },
  { month: "Feb", value: 47800 },
  { month: "Mar", value: 46200 },
  { month: "Apr", value: 45600 },
  { month: "May", value: 44900 },
  { month: "Jun", value: 44200 },
  { month: "Jul", value: 43800 },
  { month: "Aug", value: 43400 },
  { month: "Sep", value: 43100 },
  { month: "Oct", value: 42950 },
  { month: "Nov", value: 42940 },
  { month: "Dec", value: 42934 },
]

function CustomTooltip({ active, payload, label, suffix = "" }: any) {
  if (active && payload && payload.length) {
    return (
      <div className="border-border bg-background rounded-lg border px-3 py-2 shadow-md">
        <p className="text-muted-foreground text-xs font-medium">{label}</p>
        <p className="text-foreground text-sm font-bold">
          {payload[0].value.toLocaleString()}
          {suffix}
        </p>
      </div>
    )
  }

  return null
}

export default function Web3SimpleMetrics() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {/* Average APR Card */}
      <div className="bg-card flex flex-col gap-4 rounded-xl border p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-green-100 p-2.5 dark:bg-green-900/20">
              <Percent className="h-5 w-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <p className="text-muted-foreground text-sm font-medium">
                Average APR
              </p>
              <h3 className="text-2xl font-bold">38.03%</h3>
            </div>
          </div>
          <Badge
            variant="secondary"
            className="gap-1 bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400"
          >
            <TrendingUp className="h-3 w-3" />
            +5.5%
          </Badge>
        </div>
        <div className="h-[180px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={APR_DATA}
              margin={{ top: 5, right: 10, left: 10, bottom: 0 }}
            >
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
                tickFormatter={(value) => `${value}%`}
              />
              <Tooltip content={<CustomTooltip suffix="%" />} />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#10b981"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Total Staking Card */}
      <div className="bg-card flex flex-col gap-4 rounded-xl border p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-blue-100 p-2.5 dark:bg-blue-900/20">
              <Wallet className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-muted-foreground text-sm font-medium">
                Total Staking
              </p>
              <h3 className="text-2xl font-bold">5.74M</h3>
            </div>
          </div>
          <Badge
            variant="secondary"
            className="gap-1 bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400"
          >
            <TrendingUp className="h-3 w-3" />
            +18%
          </Badge>
        </div>
        <div className="h-[180px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={STAKING_DATA}
              margin={{ top: 5, right: 10, left: 10, bottom: 0 }}
            >
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
                tickFormatter={(value) => `${(value / 1000000).toFixed(1)}M`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#3b82f6"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Network Fees Card */}
      <div className="bg-card flex flex-col gap-4 rounded-xl border p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-red-100 p-2.5 dark:bg-red-900/20">
              <Coins className="h-5 w-5 text-red-600 dark:text-red-400" />
            </div>
            <div>
              <p className="text-muted-foreground text-sm font-medium">
                Network Fees
              </p>
              <h3 className="text-2xl font-bold">42.9K SOL</h3>
            </div>
          </div>
          <Badge
            variant="secondary"
            className="gap-1 bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400"
          >
            <TrendingDown className="h-3 w-3" />
            -11%
          </Badge>
        </div>
        <div className="h-[180px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={FEES_DATA}
              margin={{ top: 5, right: 10, left: 10, bottom: 0 }}
            >
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
                tickFormatter={(value) => `${(value / 1000).toFixed(0)}K`}
              />
              <Tooltip content={<CustomTooltip suffix=" SOL" />} />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#ef4444"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
