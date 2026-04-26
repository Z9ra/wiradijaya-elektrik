"use client"

import * as React from "react"
import {
  BarChart3,
  Bot,
  Clock,
  Coins,
  LayoutDashboard,
  ListChecks,
  Settings,
  TrendingDown,
  TrendingUp,
  Zap,
} from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const NAV_ITEMS = [
  { icon: LayoutDashboard, label: "Dashboard", active: false },
  { icon: Bot, label: "Agents", active: false },
  { icon: ListChecks, label: "Tasks", active: false },
  { icon: BarChart3, label: "Analytics", active: true },
  { icon: Settings, label: "Settings", active: false },
]

type Range = "7D" | "30D" | "90D"

interface RangeData {
  totalTokens: string
  totalCost: string
  tasksCompleted: number
  avgResponseTime: string
  tokenTrend: string
  costTrend: string
  tasksTrend: string
  timeTrend: string
  tokenTrendUp: boolean
  costTrendUp: boolean
  tasksTrendUp: boolean
  timeTrendUp: boolean
  dailyBars: { label: string; input: number; output: number }[]
  agentRows: {
    name: string
    tasks: number
    inputTokens: string
    outputTokens: string
    cost: string
    share: number
  }[]
}

const DATA: Record<Range, RangeData> = {
  "7D": {
    totalTokens: "284K",
    totalCost: "$12.40",
    tasksCompleted: 87,
    avgResponseTime: "2.4s",
    tokenTrend: "+12%",
    costTrend: "+8%",
    tasksTrend: "+21%",
    timeTrend: "-0.3s",
    tokenTrendUp: true,
    costTrendUp: true,
    tasksTrendUp: true,
    timeTrendUp: false,
    dailyBars: [
      { label: "Mon", input: 28000, output: 18000 },
      { label: "Tue", input: 42000, output: 26000 },
      { label: "Wed", input: 35000, output: 22000 },
      { label: "Thu", input: 54000, output: 31000 },
      { label: "Fri", input: 48000, output: 27000 },
      { label: "Sat", input: 22000, output: 14000 },
      { label: "Sun", input: 14000, output: 8000 },
    ],
    agentRows: [
      {
        name: "Support Agent Pro",
        tasks: 28,
        inputTokens: "92K",
        outputTokens: "64K",
        cost: "$4.20",
        share: 34,
      },
      {
        name: "Research Agent Alpha",
        tasks: 21,
        inputTokens: "68K",
        outputTokens: "44K",
        cost: "$3.10",
        share: 25,
      },
      {
        name: "Content Writer",
        tasks: 18,
        inputTokens: "52K",
        outputTokens: "38K",
        cost: "$2.60",
        share: 21,
      },
      {
        name: "Code Review Bot",
        tasks: 14,
        inputTokens: "34K",
        outputTokens: "22K",
        cost: "$1.70",
        share: 14,
      },
      {
        name: "Data Analyst",
        tasks: 6,
        inputTokens: "14K",
        outputTokens: "8K",
        cost: "$0.80",
        share: 6,
      },
    ],
  },
  "30D": {
    totalTokens: "1.2M",
    totalCost: "$48.20",
    tasksCompleted: 342,
    avgResponseTime: "2.7s",
    tokenTrend: "+18%",
    costTrend: "+15%",
    tasksTrend: "+34%",
    timeTrend: "+0.2s",
    tokenTrendUp: true,
    costTrendUp: true,
    tasksTrendUp: true,
    timeTrendUp: true,
    dailyBars: [
      { label: "W1", input: 240000, output: 160000 },
      { label: "W2", input: 310000, output: 200000 },
      { label: "W3", input: 280000, output: 185000 },
      { label: "W4", input: 370000, output: 240000 },
    ],
    agentRows: [
      {
        name: "Support Agent Pro",
        tasks: 112,
        inputTokens: "380K",
        outputTokens: "250K",
        cost: "$16.80",
        share: 35,
      },
      {
        name: "Research Agent Alpha",
        tasks: 84,
        inputTokens: "290K",
        outputTokens: "178K",
        cost: "$12.40",
        share: 26,
      },
      {
        name: "Content Writer",
        tasks: 71,
        inputTokens: "210K",
        outputTokens: "148K",
        cost: "$10.20",
        share: 21,
      },
      {
        name: "Code Review Bot",
        tasks: 52,
        inputTokens: "142K",
        outputTokens: "84K",
        cost: "$6.40",
        share: 13,
      },
      {
        name: "Data Analyst",
        tasks: 23,
        inputTokens: "58K",
        outputTokens: "32K",
        cost: "$2.40",
        share: 5,
      },
    ],
  },
  "90D": {
    totalTokens: "3.8M",
    totalCost: "$148.60",
    tasksCompleted: 1024,
    avgResponseTime: "2.9s",
    tokenTrend: "+42%",
    costTrend: "+38%",
    tasksTrend: "+67%",
    timeTrend: "+0.5s",
    tokenTrendUp: true,
    costTrendUp: true,
    tasksTrendUp: true,
    timeTrendUp: true,
    dailyBars: [
      { label: "M1", input: 900000, output: 600000 },
      { label: "M2", input: 1200000, output: 800000 },
      { label: "M3", input: 1100000, output: 750000 },
    ],
    agentRows: [
      {
        name: "Support Agent Pro",
        tasks: 340,
        inputTokens: "1.2M",
        outputTokens: "780K",
        cost: "$52.00",
        share: 35,
      },
      {
        name: "Research Agent Alpha",
        tasks: 254,
        inputTokens: "900K",
        outputTokens: "560K",
        cost: "$38.40",
        share: 26,
      },
      {
        name: "Content Writer",
        tasks: 211,
        inputTokens: "640K",
        outputTokens: "450K",
        cost: "$31.20",
        share: 21,
      },
      {
        name: "Code Review Bot",
        tasks: 158,
        inputTokens: "420K",
        outputTokens: "260K",
        cost: "$19.60",
        share: 13,
      },
      {
        name: "Data Analyst",
        tasks: 61,
        inputTokens: "180K",
        outputTokens: "100K",
        cost: "$7.40",
        share: 5,
      },
    ],
  },
}

const MODELS = [
  { name: "Claude 3.5", share: 60, color: "bg-orange-400" },
  { name: "GPT-4o", share: 30, color: "bg-blue-400" },
  { name: "Gemini 1.5", share: 10, color: "bg-emerald-400" },
]

function AgentSidebar() {
  return (
    <aside className="bg-muted/30 flex h-full w-64 flex-col border-r">
      <div className="flex items-center gap-2.5 border-b px-5 py-4">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-600">
          <Bot className="h-4 w-4 text-white" />
        </div>
        <span className="text-sm font-semibold">Creative Tim UI</span>
      </div>
      <nav className="flex-1 space-y-0.5 p-3">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.label}
            className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
              item.active
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:bg-background/60 hover:text-foreground"
            }`}
          >
            <item.icon className="h-4 w-4" />
            {item.label}
          </button>
        ))}
      </nav>
      <Separator />
      <div className="space-y-1 p-4">
        <p className="text-muted-foreground mb-2 px-1 text-xs font-semibold tracking-wider uppercase">
          Quick Stats
        </p>
        {[
          { label: "This month", value: "$48.20" },
          { label: "Active agents", value: "8" },
          { label: "Tasks today", value: "47" },
        ].map((s) => (
          <div
            key={s.label}
            className="flex items-center justify-between px-2 py-1"
          >
            <span className="text-muted-foreground text-sm">{s.label}</span>
            <span className="text-sm font-semibold">{s.value}</span>
          </div>
        ))}
      </div>
      <Separator />
      <div className="flex items-center gap-3 p-4">
        <Avatar className="h-8 w-8">
          <AvatarFallback className="bg-orange-100 text-xs text-orange-700">
            JD
          </AvatarFallback>
        </Avatar>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium">Jane Doe</p>
          <p className="text-muted-foreground truncate text-sm">
            jane@example.com
          </p>
        </div>
        <Settings className="text-muted-foreground h-3.5 w-3.5 shrink-0" />
      </div>
    </aside>
  )
}

export default function AgentManagementAnalytics01() {
  const [range, setRange] = React.useState<Range>("30D")
  const d = DATA[range]

  const maxBar = Math.max(...d.dailyBars.map((b) => b.input + b.output))

  return (
    <div className="bg-background flex h-screen overflow-hidden">
      <AgentSidebar />

      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-background flex items-center justify-between border-b px-6 py-2">
          <div>
            <h1 className="text-lg font-semibold">Analytics</h1>
            <p className="text-muted-foreground text-sm">
              Usage metrics and cost breakdown
            </p>
          </div>
          <div className="flex items-center gap-1 rounded-lg border p-1">
            {(["7D", "30D", "90D"] as Range[]).map((r) => (
              <button
                key={r}
                onClick={() => setRange(r)}
                className={`rounded-md px-3 py-1 text-sm font-medium transition-colors ${
                  range === r
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        </header>

        <ScrollArea className="flex-1">
          <div className="space-y-5 p-5">
            {/* Summary cards */}
            <div className="grid grid-cols-4 gap-3">
              {[
                {
                  label: "Total Tokens",
                  value: d.totalTokens,
                  trend: d.tokenTrend,
                  up: d.tokenTrendUp,
                  icon: Coins,
                  color: "text-amber-600",
                  bg: "bg-amber-50",
                },
                {
                  label: "Total Cost",
                  value: d.totalCost,
                  trend: d.costTrend,
                  up: d.costTrendUp,
                  icon: Zap,
                  color: "text-orange-600",
                  bg: "bg-orange-50",
                },
                {
                  label: "Tasks Completed",
                  value: d.tasksCompleted.toLocaleString(),
                  trend: d.tasksTrend,
                  up: d.tasksTrendUp,
                  icon: BarChart3,
                  color: "text-blue-600",
                  bg: "bg-blue-50",
                },
                {
                  label: "Avg Response",
                  value: d.avgResponseTime,
                  trend: d.timeTrend,
                  up: !d.timeTrendUp,
                  icon: Clock,
                  color: "text-emerald-600",
                  bg: "bg-emerald-50",
                },
              ].map((card) => (
                <Card key={card.label}>
                  <CardContent className="px-4 py-0">
                    <div className="flex items-start justify-between">
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-lg ${card.bg}`}
                      >
                        <card.icon className={`h-4 w-4 ${card.color}`} />
                      </div>
                      <div
                        className={`flex items-center gap-0.5 text-sm font-medium ${card.up ? "text-emerald-600" : "text-red-500"}`}
                      >
                        {card.up ? (
                          <TrendingUp className="h-2.5 w-2.5" />
                        ) : (
                          <TrendingDown className="h-2.5 w-2.5" />
                        )}
                        {card.trend}
                      </div>
                    </div>
                    <p className="text-muted-foreground mt-2 text-sm">
                      {card.label}
                    </p>
                    <p className="mt-0.5 text-xl font-bold">{card.value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Token usage chart */}
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm">Token Usage</CardTitle>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-sm bg-orange-400" />
                      <span className="text-muted-foreground text-sm">
                        Input tokens
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-sm bg-orange-200" />
                      <span className="text-muted-foreground text-sm">
                        Output tokens
                      </span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex h-36 items-end gap-3">
                  {d.dailyBars.map((bar) => {
                    const totalH = 128
                    const inputH = Math.round((bar.input / maxBar) * totalH)
                    const outputH = Math.round((bar.output / maxBar) * totalH)
                    return (
                      <div
                        key={bar.label}
                        className="flex flex-1 flex-col items-center gap-1"
                      >
                        <div className="flex w-full flex-col-reverse items-center gap-0.5">
                          <div
                            className="w-full rounded-b-sm bg-orange-400"
                            style={{ height: `${inputH}px` }}
                          />
                          <div
                            className="w-full rounded-t-sm bg-orange-200"
                            style={{ height: `${outputH}px` }}
                          />
                        </div>
                        <span className="text-muted-foreground text-sm">
                          {bar.label}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-5 gap-4">
              {/* Cost per agent table */}
              <Card className="col-span-3">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">Cost per Agent</CardTitle>
                </CardHeader>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-sm">Agent</TableHead>
                      <TableHead className="text-sm">Tasks</TableHead>
                      <TableHead className="text-sm">Input</TableHead>
                      <TableHead className="text-sm">Output</TableHead>
                      <TableHead className="text-sm">Cost</TableHead>
                      <TableHead className="text-sm">Share</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {d.agentRows.map((row) => (
                      <TableRow key={row.name}>
                        <TableCell className="text-sm font-medium">
                          {row.name}
                        </TableCell>
                        <TableCell className="text-sm">{row.tasks}</TableCell>
                        <TableCell className="text-sm">
                          {row.inputTokens}
                        </TableCell>
                        <TableCell className="text-sm">
                          {row.outputTokens}
                        </TableCell>
                        <TableCell className="text-sm font-medium">
                          {row.cost}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1.5">
                            <div className="bg-muted h-1.5 flex-1 overflow-hidden rounded-full">
                              <div
                                className="h-full rounded-full bg-orange-400"
                                style={{ width: `${row.share}%` }}
                              />
                            </div>
                            <span className="text-muted-foreground text-sm">
                              {row.share}%
                            </span>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>

              {/* Model distribution */}
              <Card className="col-span-2">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm">Model Distribution</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 pt-0">
                  {MODELS.map((m) => (
                    <div key={m.name} className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span
                            className={`h-2.5 w-2.5 rounded-full ${m.color}`}
                          />
                          <span className="text-muted-foreground text-sm">
                            {m.name}
                          </span>
                        </div>
                        <span className="text-sm font-semibold">
                          {m.share}%
                        </span>
                      </div>
                      <div className="bg-muted h-2 w-full overflow-hidden rounded-full">
                        <div
                          className={`h-full rounded-full ${m.color}`}
                          style={{ width: `${m.share}%` }}
                        />
                      </div>
                    </div>
                  ))}

                  <Separator className="my-2" />

                  <div className="bg-muted/40 rounded-lg p-3">
                    <p className="text-muted-foreground text-sm">
                      Most used model
                    </p>
                    <p className="mt-0.5 text-sm font-semibold">
                      Claude 3.5 Sonnet
                    </p>
                    <p className="text-muted-foreground text-sm">
                      60% of all requests
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}
