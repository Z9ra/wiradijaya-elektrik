"use client"

import * as React from "react"
import dynamic from "next/dynamic"
import worldMerc from "@react-jvectormap/world/worldMerc.json"
import { DollarSign, Globe, TrendingUp, Users } from "lucide-react"
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

const VectorMap = dynamic(
  () => import("@react-jvectormap/core").then((m) => m.VectorMap),
  { ssr: false }
)

const CHART_DATA = [
  { month: "Jan", price: 145000 },
  { month: "Feb", price: 148500 },
  { month: "Mar", price: 151200 },
  { month: "Apr", price: 149800 },
  { month: "May", price: 152400 },
  { month: "Jun", price: 154100 },
  { month: "Jul", price: 153600 },
  { month: "Aug", price: 155200 },
  { month: "Sep", price: 154800 },
  { month: "Oct", price: 156500 },
  { month: "Nov", price: 155900 },
  { month: "Dec", price: 156091 },
]

const MAP_CONFIG = {
  map: worldMerc,
  zoomOnScroll: false,
  zoomButtons: false,
  markersSelectable: true,
  backgroundColor: "transparent",
  selectedMarkers: [0, 2, 4],
  markers: [
    {
      name: "USA",
      latLng: [40.71296415909766, -74.00437720027804],
    },
    {
      name: "Germany",
      latLng: [51.17661451970939, 10.97947735117339],
    },
    {
      name: "Brazil",
      latLng: [-7.596735421549542, -54.781694323779185],
    },
    {
      name: "Russia",
      latLng: [62.318222797104276, 89.81564777631716],
    },
    {
      name: "China",
      latLng: [22.320178999475512, 114.17161225541399],
    },
  ],
  regionStyle: {
    initial: {
      fill: "#e5e7eb",
      "fill-opacity": 0.8,
      stroke: "#d1d5db",
      "stroke-width": 1,
      "stroke-opacity": 0.5,
    },
  },
  markerStyle: {
    initial: {
      fill: "#3b82f6",
      stroke: "#ffffff",
      "stroke-width": 3,
      "stroke-opacity": 1,
      r: 6,
    },
    hover: {
      fill: "#2563eb",
      stroke: "#ffffff",
      "stroke-width": 3,
      "stroke-opacity": 1,
      r: 8,
      cursor: "pointer",
    },
    selected: {
      fill: "#10b981",
      stroke: "#ffffff",
      "stroke-width": 3,
      "stroke-opacity": 1,
      r: 8,
    },
  },
  onRegionTipShow: () => false,
  onMarkerTipShow: () => false,
}

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

export default function CryptoChartsWithMap() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <Card>
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
                data={CHART_DATA}
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
                  dataKey="price"
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

      <Card>
        <CardHeader className="flex flex-row flex-wrap items-center justify-between space-y-0 pb-4">
          <div className="flex items-center gap-2">
            <Globe className="h-5 w-5 text-blue-600" />
            <h3 className="text-lg font-semibold">Global Node Distribution</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="gap-1.5 px-3 py-1.5">
              <DollarSign className="h-3 w-3 text-green-600" />
              <span className="font-semibold">$156,091</span>
            </Badge>
            <Badge variant="outline" className="gap-1.5 px-3 py-1.5">
              <Users className="h-3 w-3 text-blue-600" />
              <span className="font-semibold">36,874</span>
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="pb-4">
          <div className="bg-muted/30 h-[200px] w-full rounded-lg p-2">
            <VectorMap {...(MAP_CONFIG as any)} />
          </div>
        </CardContent>
        <CardFooter className="grid grid-cols-2 gap-4 border-t pt-4 sm:grid-cols-3 lg:grid-cols-5">
          <div className="space-y-1">
            <p className="text-muted-foreground text-xs font-medium">
              Total Nodes
            </p>
            <p className="text-xl font-bold">41,995</p>
          </div>
          <div className="space-y-1">
            <p className="text-muted-foreground text-xs font-medium">Europe</p>
            <p className="text-xl font-bold">25,850</p>
          </div>
          <div className="space-y-1">
            <p className="text-muted-foreground text-xs font-medium">Asia</p>
            <p className="text-xl font-bold">10,631</p>
          </div>
          <div className="space-y-1">
            <p className="text-muted-foreground text-xs font-medium">America</p>
            <p className="text-xl font-bold">5,394</p>
          </div>
          <div className="space-y-1">
            <p className="text-muted-foreground text-xs font-medium">Others</p>
            <p className="text-xl font-bold">120</p>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
