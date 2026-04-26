"use client"

import * as React from "react"
import { Copy, Search, TrendingUp } from "lucide-react"
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

const CHART_DATA = [
  { month: "Apr", results: 30 },
  { month: "May", results: 40 },
  { month: "Jun", results: 500 },
  { month: "Jul", results: 420 },
  { month: "Aug", results: 700 },
  { month: "Sep", results: 350 },
  { month: "Oct", results: 500 },
  { month: "Nov", results: 330 },
  { month: "Dec", results: 900 },
]

const TABLE_ROW = [
  {
    img: "https://v3.material-tailwind.com/icon/bitcoin.svg",
    digitalAsset: "BTC",
    detail: "Bitcoin",
    price: "$46,727.30",
    change: "+2.92%",
    volume: "$45.31B",
    market: "$915.61B",
    isPositive: true,
    trend: 4,
  },
  {
    img: "https://v3.material-tailwind.com/icon/eth.svg",
    digitalAsset: "ETH",
    detail: "Ethereum",
    price: "$2,609.30",
    change: "+6.80%",
    volume: "$23.42B",
    market: "$313.58B",
    isPositive: true,
  },
  {
    img: "https://v3.material-tailwind.com/icon/solana.svg",
    digitalAsset: "USDT",
    detail: "TetherUS",
    price: "$1.00",
    change: "-0.01%",
    volume: "$94.37B",
    market: "$40,600",
    isPositive: false,
  },
  {
    img: "https://v3.material-tailwind.com/icon/usdt.svg",
    digitalAsset: "SOL",
    detail: "Solana",
    price: "$1.00",
    change: "+6.35%",
    volume: "$3.48B",
    market: "$43.26B",
    isPositive: true,
  },
]

const TABLE_HEAD = [
  "Digital Asset",
  "Price",
  "Change",
  "Volume",
  "Market Cap",
  "Trend",
  "",
]

interface CustomTooltipProps {
  active?: boolean
  payload?: any[]
  label?: string
  isPositive?: boolean
}

function CustomTooltip({
  active,
  payload,
  label,
  isPositive = true,
}: CustomTooltipProps) {
  if (active && payload && payload.length) {
    return (
      <div className="animate-in fade-in-0 zoom-in-95 duration-200">
        <Card className="border-border bg-card/95 shadow-xl backdrop-blur-sm">
          <CardContent className="p-3">
            <p className="text-muted-foreground mb-2 text-xs font-semibold tracking-wide uppercase">
              {label}
            </p>
            <Separator className="my-2" />
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <div
                  className={`h-3 w-3 rounded-full shadow-sm ${isPositive ? "bg-green-500 ring-2 ring-green-500/20" : "bg-red-500 ring-2 ring-red-500/20"}`}
                />
                <span className="text-muted-foreground text-xs">Value</span>
              </div>
              <span className="text-lg font-bold">
                {payload[0].value.toLocaleString()}
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }
  return null
}

export default function CryptoTable() {
  const [hoveredRow, setHoveredRow] = React.useState<string | null>(null)

  return (
    <Card className="overflow-hidden shadow-sm transition-all hover:shadow-lg">
      <CardHeader className="m-0 flex w-full flex-wrap items-start justify-between gap-4 rounded-none p-6">
        <div className="flex items-start gap-3">
          <div className="bg-muted rounded-lg p-2.5">
            <TrendingUp className="text-muted-foreground h-5 w-5" />
          </div>
          <div>
            <h3 className="mb-1 text-xl font-semibold">
              Cryptocurrency Market Overview
            </h3>
            <p className="text-muted-foreground text-sm">
              Compare different cryptocurrencies, and make informed investment.
            </p>
          </div>
        </div>
        <div className="flex w-full shrink-0 items-center gap-3 md:w-max">
          <div className="relative w-full sm:w-72">
            <Input
              placeholder="Search here..."
              className="pl-9 transition-all focus:ring-2"
            />
            <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
          </div>
          <Select defaultValue="24 H">
            <SelectTrigger className="hover:bg-muted w-max shrink-0 transition-all">
              <SelectValue placeholder="Select Length" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All</SelectItem>
              <SelectItem value="24 H">24 H</SelectItem>
              <SelectItem value="1 Week">1 Week</SelectItem>
              <SelectItem value="1 Month">1 Month</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>

      <Separator />

      <CardContent className="overflow-scroll rounded-none p-0">
        <table className="w-full min-w-max table-auto">
          <thead>
            <tr className="bg-muted/30">
              {TABLE_HEAD.map((el) => (
                <th key={el} className="border-border border-b p-4 text-start">
                  <p className="text-sm font-semibold">{el}</p>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROW.map(
              ({
                img,
                digitalAsset,
                detail,
                price,
                change,
                volume,
                market,
                isPositive,
              }) => (
                <tr
                  key={digitalAsset}
                  className="group hover:bg-muted/20 transition-colors"
                  onMouseEnter={() => setHoveredRow(digitalAsset)}
                  onMouseLeave={() => setHoveredRow(null)}
                >
                  <td className="border-border border-b p-4 group-last:border-0">
                    <div className="flex items-center gap-3">
                      <Avatar className="border-border bg-muted/50 group-hover:border-primary/50 group-hover:bg-muted rounded border p-2 transition-all">
                        <AvatarImage src={img} alt={detail} />
                      </Avatar>
                      <div className="space-y-0.5">
                        <p className="text-sm font-semibold">{digitalAsset}</p>
                        <p className="text-muted-foreground text-sm">
                          {detail}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="border-border border-b p-4 group-last:border-0">
                    <p className="text-sm font-medium">{price}</p>
                  </td>
                  <td className="border-border border-b p-4 group-last:border-0">
                    <p
                      className={`text-sm font-semibold ${
                        isPositive
                          ? "text-green-600 dark:text-green-400"
                          : "text-red-600 dark:text-red-400"
                      }`}
                    >
                      {change}
                    </p>
                  </td>
                  <td className="border-border border-b p-4 group-last:border-0">
                    <p className="text-muted-foreground text-sm">{volume}</p>
                  </td>
                  <td className="border-border border-b p-4 group-last:border-0">
                    <p className="text-muted-foreground text-sm">{market}</p>
                  </td>
                  <td className="border-border border-b p-4 group-last:border-0">
                    <div
                      className={`h-12 max-w-40 rounded-lg p-2 transition-all ${hoveredRow === digitalAsset ? "bg-muted/50 ring-primary/20 ring-2" : ""}`}
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={CHART_DATA}>
                          <defs>
                            <linearGradient
                              id={`gradient-${digitalAsset}`}
                              x1="0"
                              y1="0"
                              x2="0"
                              y2="1"
                            >
                              <stop
                                offset="0%"
                                stopColor={isPositive ? "#10b981" : "#ef4444"}
                                stopOpacity={0.3}
                              />
                              <stop
                                offset="100%"
                                stopColor={isPositive ? "#10b981" : "#ef4444"}
                                stopOpacity={0}
                              />
                            </linearGradient>
                          </defs>
                          <Tooltip
                            cursor={{
                              stroke: isPositive ? "#10b981" : "#ef4444",
                              strokeWidth: 2,
                              strokeDasharray: "5 5",
                            }}
                            content={
                              <CustomTooltip
                                label={undefined}
                                active={undefined}
                                payload={undefined}
                                isPositive={Boolean(isPositive)}
                              />
                            }
                          />
                          <XAxis hide dataKey="month" />
                          <YAxis hide domain={["dataMin", "dataMax"]} />
                          <Line
                            dot={false}
                            type="monotone"
                            dataKey="results"
                            strokeWidth={hoveredRow === digitalAsset ? 3 : 2}
                            stroke={isPositive ? "#10b981" : "#ef4444"}
                            fill={`url(#gradient-${digitalAsset})`}
                            className="transition-all duration-300"
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </td>
                  <td className="border-border border-b p-4 text-end group-last:border-0">
                    <div className="flex justify-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="hover:bg-muted h-8 w-8 transition-all hover:shadow-sm"
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="hover:bg-muted h-8 w-8 transition-all hover:shadow-sm"
                      >
                        <Search className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </CardContent>
    </Card>
  )
}
