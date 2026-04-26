"use client"

import * as React from "react"
import { TrendingDown, TrendingUp } from "lucide-react"
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
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const PRICE_DATA = [
  { month: "Jan", value: 145000 },
  { month: "Feb", value: 148500 },
  { month: "Mar", value: 151200 },
  { month: "Apr", value: 149800 },
  { month: "May", value: 152400 },
  { month: "Jun", value: 154100 },
  { month: "Jul", value: 153600 },
  { month: "Aug", value: 155200 },
  { month: "Sep", value: 154800 },
  { month: "Oct", value: 156500 },
  { month: "Nov", value: 155900 },
  { month: "Dec", value: 156091 },
]

const STAKED_DATA = [
  { month: "Jan", value: 142000 },
  { month: "Feb", value: 145000 },
  { month: "Mar", value: 147500 },
  { month: "Apr", value: 149200 },
  { month: "May", value: 150800 },
  { month: "Jun", value: 152100 },
  { month: "Jul", value: 153400 },
  { month: "Aug", value: 154200 },
  { month: "Sep", value: 154900 },
  { month: "Oct", value: 155400 },
  { month: "Nov", value: 155800 },
  { month: "Dec", value: 156091 },
]

const WALLETS_DATA = [
  {
    img: "https://v3.material-tailwind.com/icon/trust.svg",
    name: "Trust Wallet",
    price: "16,545",
    change: "+12.5%",
    isPositive: true,
  },
  {
    img: "https://v3.material-tailwind.com/icon/metamask.svg",
    name: "MetaMask",
    price: "47,720",
    change: "+8.3%",
    isPositive: true,
  },
  {
    img: "https://v3.material-tailwind.com/icon/coinbase.svg",
    name: "Coinbase",
    price: "32,450",
    change: "-2.1%",
    isPositive: false,
  },
]

function CustomTooltip({ active, payload, label }: any) {
  if (active && payload && payload.length) {
    return (
      <div className="border-border bg-background rounded-lg border px-3 py-2 shadow-md">
        <p className="text-muted-foreground text-xs font-medium">{label}</p>
        <p className="text-foreground text-sm font-bold">
          ${payload[0].value.toLocaleString()}
        </p>
      </div>
    )
  }

  return null
}

export default function CryptoChartWithDetails() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
      <Card className="col-span-1 lg:col-span-2">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <div>
            <p className="text-muted-foreground text-sm font-medium">
              Current Price
            </p>
            <div className="mt-2 flex items-baseline gap-2">
              <h3 className="text-2xl font-bold">$156,091.03</h3>
              <Badge
                variant="secondary"
                className="gap-1 bg-green-500/10 text-green-600"
              >
                <TrendingUp className="h-3 w-3" />
                +2.4%
              </Badge>
            </div>
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
        <CardContent className="pb-2">
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={PRICE_DATA}
                margin={{ top: 5, right: 10, left: 10, bottom: 0 }}
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
                  tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                />
                <Tooltip content={<CustomTooltip />} />
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
        </CardContent>
        <CardFooter className="flex justify-between border-t pt-4">
          <div>
            <p className="text-muted-foreground text-xs">Market Cap</p>
            <p className="text-lg font-bold">$10.93B</p>
          </div>
          <div>
            <p className="text-muted-foreground text-xs">24h Volume</p>
            <p className="text-lg font-bold">$22.12M</p>
          </div>
        </CardFooter>
      </Card>

      <Card className="col-span-1 lg:col-span-2">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <div>
            <p className="text-muted-foreground text-sm font-medium">
              Total Staked
            </p>
            <div className="mt-2 flex items-baseline gap-2">
              <h3 className="text-2xl font-bold">156,091 SOL</h3>
              <Badge
                variant="secondary"
                className="gap-1 bg-blue-500/10 text-blue-600"
              >
                <TrendingUp className="h-3 w-3" />
                +5.2%
              </Badge>
            </div>
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
        <CardContent className="pb-2">
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={STAKED_DATA}
                margin={{ top: 5, right: 10, left: 10, bottom: 0 }}
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
        </CardContent>
        <CardFooter className="flex justify-between border-t pt-4">
          <div>
            <p className="text-muted-foreground text-xs">Users Staking</p>
            <p className="text-lg font-bold">125,850</p>
          </div>
          <div>
            <p className="text-muted-foreground text-xs">Average APR</p>
            <p className="text-lg font-bold">8.35%</p>
          </div>
        </CardFooter>
      </Card>

      <div className="col-span-1 flex flex-col gap-4 sm:flex-row lg:flex-col">
        {WALLETS_DATA.map(({ img, name, price, change, isPositive }) => (
          <Card key={name} className="flex-1">
            <CardContent className="flex items-center gap-4 p-5">
              <div className="bg-muted/50 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg">
                <img src={img} alt={name} className="h-8 w-8 object-contain" />
              </div>
              <div className="flex-1 space-y-1">
                <p className="text-muted-foreground text-sm font-medium">
                  {name}
                </p>
                <p className="text-xl font-bold">{price}</p>
                <div className="flex items-center gap-1">
                  {isPositive ? (
                    <TrendingUp className="h-3 w-3 text-green-600" />
                  ) : (
                    <TrendingDown className="h-3 w-3 text-red-600" />
                  )}
                  <span
                    className={`text-xs font-medium ${
                      isPositive ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {change}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
