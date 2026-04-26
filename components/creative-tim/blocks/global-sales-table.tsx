"use client"

import * as React from "react"
import dynamic from "next/dynamic"
import { Globe } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const VectorMap = dynamic(
  () => import("@react-jvectormap/core").then((m) => m.VectorMap),
  { ssr: false }
)

const worldMerc =
  typeof window !== "undefined"
    ? require("@react-jvectormap/world/worldMerc.json")
    : null

const TABLE_HEAD = ["Country", "Sales", "Value", "Bounce"]

const TABLE_DATA = [
  {
    country: {
      icon: "🇺🇸",
      name: "United State",
    },
    sales: 2500,
    value: "$230,900",
    bounce: "29.9%",
  },
  {
    country: {
      icon: "🇩🇪",
      name: "Germany",
    },
    sales: "3.900",
    value: "$440,000",
    bounce: "40.22%",
  },
  {
    country: {
      icon: "🇬🇧",
      name: "Great Britain",
    },
    sales: "1.400",
    value: "$190,700",
    bounce: "23.44%",
  },
  {
    country: {
      icon: "🇧🇷",
      name: "Brasil",
    },
    sales: 562,
    value: "$143.960",
    bounce: "32.14%",
  },
]

const MAP_CONFIG = {
  map: worldMerc,
  zoomOnScroll: false,
  zoomButtons: false,
  markersSelectable: true,
  backgroundColor: "transparent",
  selectedMarkers: [1, 3],
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
      fill: "rgb(var(--color-surface))",
      "fill-opacity": 1,
      stroke: "none",
      "stroke-width": 0,
      "stroke-opacity": 0,
    },
  },
  markerStyle: {
    initial: {
      fill: "rgb(var(--color-primary))",
      stroke: "rgb(var(--color-white))",
      "stroke-width": 5,
      "stroke-opacity": 0.5,
      r: 7,
    },
    hover: {
      fill: "rgb(var(--color-primary))",
      stroke: "rgb(var(--color-white))",
      "stroke-width": 5,
      "stroke-opacity": 0.5,
    },
    selected: {
      fill: "rgb(var(--color-primary))",
      stroke: "rgb(var(--color-white))",
      "stroke-width": 5,
      "stroke-opacity": 0.5,
    },
  },
  onRegionTipShow: () => false,
  onMarkerTipShow: () => false,
}

interface TableData {
  country: {
    icon: string
    name: string
  }
  sales: string | number
  value: string
  bounce: string
}

interface TableProps {
  data: TableData[]
}

function Table({ data }: TableProps) {
  return (
    <table className="w-full max-w-2xl table-auto">
      <thead>
        <tr className="bg-muted/30">
          {TABLE_HEAD.map((head) => (
            <th key={head} className="border-border border-b py-4 text-left">
              <p className="text-sm font-semibold">{head}</p>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map(({ country, sales, value, bounce }, key) => (
          <tr
            key={key}
            className="border-border hover:bg-muted/20 border-b transition-colors last:border-0"
          >
            <td className="py-4">
              <div className="flex items-center gap-3">
                <div className="bg-muted flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-xl">
                  {country.icon}
                </div>
                <p className="text-sm font-medium">{country.name}</p>
              </div>
            </td>
            <td>
              <p className="text-muted-foreground text-sm">{sales}</p>
            </td>
            <td>
              <p className="text-sm font-semibold">{value}</p>
            </td>
            <td>
              <p className="text-muted-foreground text-sm">{bounce}</p>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default function GlobalSalesTable() {
  return (
    <Card className="overflow-hidden shadow-sm transition-all hover:shadow-lg">
      <CardHeader className="m-0 flex w-full flex-wrap items-start justify-between gap-4 rounded-none p-6">
        <div className="flex items-start gap-3">
          <div className="bg-muted rounded-lg p-2.5">
            <Globe className="text-muted-foreground h-5 w-5" />
          </div>
          <div>
            <h3 className="mb-1 text-xl font-semibold">
              Global Sales by Country
            </h3>
            <p className="text-muted-foreground text-sm">
              Geographical impact and identifying key markets.
            </p>
          </div>
        </div>
        <Button
          size="sm"
          variant="outline"
          className="hover:bg-muted transition-all"
        >
          View Report
        </Button>
      </CardHeader>

      <Separator />

      <CardContent className="grid grid-cols-1 items-center justify-between gap-6 p-6 md:grid-cols-2">
        <div className="overflow-scroll">
          <Table data={TABLE_DATA} />
        </div>
        <div className="bg-muted/30 h-full min-h-max w-full rounded-lg p-4">
          {worldMerc && <VectorMap {...(MAP_CONFIG as any)} />}
        </div>
      </CardContent>
    </Card>
  )
}
