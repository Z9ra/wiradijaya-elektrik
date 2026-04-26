"use client"

import * as React from "react"
import {
  Activity,
  AlertTriangle,
  BarChart3,
  Bot,
  CheckCircle2,
  Clipboard,
  Clock,
  Coins,
  ExternalLink,
  FileText,
  LayoutDashboard,
  ListChecks,
  MessageSquare,
  Pause,
  Settings,
  Terminal,
  TrendingUp,
  Wrench,
  XCircle,
} from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

const NAV_ITEMS = [
  { icon: LayoutDashboard, label: "Dashboard", active: false },
  { icon: Bot, label: "Agents", active: true },
  { icon: ListChecks, label: "Tasks", active: false },
  { icon: BarChart3, label: "Analytics", active: false },
  { icon: Settings, label: "Settings", active: false },
]

const RECENT_TASKS = [
  {
    id: "OC-42",
    title: "Translate product docs to Spanish",
    status: "done",
    duration: "4m 12s",
    time: "2 min ago",
  },
  {
    id: "OC-41",
    title: "Analyze competitor pricing data",
    status: "done",
    duration: "8m 47s",
    time: "18 min ago",
  },
  {
    id: "OC-40",
    title: "Summarize 14 arxiv papers",
    status: "done",
    duration: "12m 03s",
    time: "45 min ago",
  },
  {
    id: "OC-38",
    title: "Generate FAQ from product manual",
    status: "done",
    duration: "2m 58s",
    time: "2 hours ago",
  },
  {
    id: "OC-37",
    title: "Research market trends Q1 2026",
    status: "error",
    duration: "—",
    time: "3 hours ago",
  },
]

const ACTIVITY_EVENTS = [
  {
    type: "task",
    icon: CheckCircle2,
    color: "text-blue-600",
    bg: "bg-blue-100",
    label: "Task",
    desc: "New task received: Translate product docs",
    time: "2 min ago",
  },
  {
    type: "tool",
    icon: Wrench,
    color: "text-orange-600",
    bg: "bg-orange-100",
    label: "Tool",
    desc: "Called web_search: 'Spanish localization best practices'",
    time: "3 min ago",
  },
  {
    type: "token",
    icon: Coins,
    color: "text-amber-600",
    bg: "bg-amber-100",
    label: "Tokens",
    desc: "Consumed 1,240 tokens (context)",
    time: "3 min ago",
  },
  {
    type: "message",
    icon: MessageSquare,
    color: "text-emerald-600",
    bg: "bg-emerald-100",
    label: "Message",
    desc: "Sent draft translation to review queue",
    time: "4 min ago",
  },
  {
    type: "task",
    icon: CheckCircle2,
    color: "text-blue-600",
    bg: "bg-blue-100",
    label: "Task",
    desc: "Task OC-42 marked complete",
    time: "5 min ago",
  },
  {
    type: "tool",
    icon: Wrench,
    color: "text-orange-600",
    bg: "bg-orange-100",
    label: "Tool",
    desc: "Called translate_text with 3,400 chars",
    time: "7 min ago",
  },
  {
    type: "token",
    icon: Coins,
    color: "text-amber-600",
    bg: "bg-amber-100",
    label: "Tokens",
    desc: "Consumed 847 output tokens",
    time: "8 min ago",
  },
  {
    type: "task",
    icon: CheckCircle2,
    color: "text-blue-600",
    bg: "bg-blue-100",
    label: "Task",
    desc: "New task received: Analyze competitor pricing",
    time: "20 min ago",
  },
  {
    type: "error",
    icon: AlertTriangle,
    color: "text-red-600",
    bg: "bg-red-100",
    label: "Error",
    desc: "Rate limit hit on web_search — retrying in 2s",
    time: "25 min ago",
  },
  {
    type: "message",
    icon: MessageSquare,
    color: "text-emerald-600",
    bg: "bg-emerald-100",
    label: "Message",
    desc: "Analysis report delivered to user",
    time: "28 min ago",
  },
]

const CONFIG_ROWS = [
  { key: "Model", value: "Claude 3.5 Sonnet" },
  { key: "Agent Type", value: "Research" },
  { key: "Max Tokens", value: "500,000 / month" },
  { key: "Temperature", value: "0.7" },
  { key: "Max Cost/Task", value: "$5.00" },
  { key: "Concurrent Tasks", value: "3" },
  { key: "Timeout", value: "15 minutes" },
  { key: "Tools Enabled", value: "Web Search, File Access, API Calls" },
  { key: "Budget (Monthly)", value: "$20.00" },
  { key: "Created", value: "Jan 15, 2026" },
]

const LOG_LINES = [
  {
    level: "INFO",
    msg: "[2026-03-13 14:32:01] Gateway started on port 18789",
    color: "text-blue-400",
  },
  {
    level: "INFO",
    msg: "[2026-03-13 14:32:01] Agent Research Agent Alpha initialized",
    color: "text-blue-400",
  },
  {
    level: "INFO",
    msg: "[2026-03-13 14:32:05] Task OC-42 received from queue",
    color: "text-blue-400",
  },
  {
    level: "INFO",
    msg: "[2026-03-13 14:32:05] Calling web_search: 'Spanish localization'",
    color: "text-blue-400",
  },
  {
    level: "WARN",
    msg: "[2026-03-13 14:32:08] Rate limit approaching: 85% of hourly quota used",
    color: "text-amber-400",
  },
  {
    level: "INFO",
    msg: "[2026-03-13 14:32:12] web_search returned 8 results",
    color: "text-blue-400",
  },
  {
    level: "INFO",
    msg: "[2026-03-13 14:32:14] Calling translate_text with 3400 chars",
    color: "text-blue-400",
  },
  {
    level: "INFO",
    msg: "[2026-03-13 14:33:58] Translation complete, 3820 chars output",
    color: "text-blue-400",
  },
  {
    level: "INFO",
    msg: "[2026-03-13 14:34:00] Task OC-42 marked DONE, tokens: 12,840",
    color: "text-blue-400",
  },
  {
    level: "ERROR",
    msg: "[2026-03-13 14:18:22] Task OC-37 failed: context window exceeded",
    color: "text-red-400",
  },
  {
    level: "WARN",
    msg: "[2026-03-13 14:18:22] Retrying task OC-37 with summarization pre-pass",
    color: "text-amber-400",
  },
  {
    level: "INFO",
    msg: "[2026-03-13 14:19:01] Task OC-38 received from queue",
    color: "text-blue-400",
  },
]

// 7-day token data
const TOKEN_BARS = [
  { day: "Mon", value: 34000 },
  { day: "Tue", value: 52000 },
  { day: "Wed", value: 41000 },
  { day: "Thu", value: 68000 },
  { day: "Fri", value: 45000 },
  { day: "Sat", value: 29000 },
  { day: "Sun", value: 15000 },
]
const maxBar = Math.max(...TOKEN_BARS.map((b) => b.value))

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

export default function AgentManagementDetail01() {
  const [autoScroll, setAutoScroll] = React.useState(true)

  return (
    <div className="bg-background flex h-screen overflow-hidden">
      <AgentSidebar />

      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Agent header */}
        <header className="bg-background border-b px-6 py-2">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Avatar className="h-12 w-12">
                  <AvatarFallback className="bg-orange-100 text-sm font-bold text-orange-700">
                    RA
                  </AvatarFallback>
                </Avatar>
                <div className="border-background absolute -right-0.5 -bottom-0.5 flex h-4 w-4 items-center justify-center rounded-full border-2 bg-emerald-500">
                  <Bot className="h-2 w-2 text-white" />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-base font-semibold">
                    Research Agent Alpha
                  </h1>
                  <div className="flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Active
                  </div>
                </div>
                <div className="mt-1 flex items-center gap-2">
                  <Badge
                    variant="outline"
                    className="border-orange-200 bg-orange-50 text-xs text-orange-700"
                  >
                    Claude 3.5 Sonnet
                  </Badge>
                  <span className="text-muted-foreground text-sm">
                    agent-ab3k7
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                className="h-8 gap-1.5 text-sm"
              >
                <Pause className="h-3.5 w-3.5" />
                Pause Agent
              </Button>
              <Button size="sm" className="h-8 gap-1.5 text-sm">
                <ExternalLink className="h-3.5 w-3.5" />
                Open Console
              </Button>
            </div>
          </div>
        </header>

        <ScrollArea className="flex-1">
          <div className="p-5">
            <Tabs defaultValue="overview">
              <TabsList className="h-8">
                <TabsTrigger value="overview" className="h-6 text-sm">
                  Overview
                </TabsTrigger>
                <TabsTrigger value="activity" className="h-6 text-sm">
                  Activity
                </TabsTrigger>
                <TabsTrigger value="configuration" className="h-6 text-sm">
                  Configuration
                </TabsTrigger>
                <TabsTrigger value="logs" className="h-6 text-sm">
                  Logs
                </TabsTrigger>
              </TabsList>

              {/* Overview */}
              <TabsContent value="overview" className="mt-4 space-y-4">
                <div className="grid grid-cols-4 gap-3">
                  {[
                    {
                      label: "Uptime",
                      value: "99.2%",
                      icon: TrendingUp,
                      color: "text-emerald-600",
                      bg: "bg-emerald-50",
                    },
                    {
                      label: "Tasks Today",
                      value: "14",
                      icon: CheckCircle2,
                      color: "text-blue-600",
                      bg: "bg-blue-50",
                    },
                    {
                      label: "Tokens Used",
                      value: "284K",
                      icon: Coins,
                      color: "text-amber-600",
                      bg: "bg-amber-50",
                    },
                    {
                      label: "Monthly Cost",
                      value: "$12.40",
                      icon: Activity,
                      color: "text-orange-600",
                      bg: "bg-orange-50",
                    },
                  ].map((m) => (
                    <Card key={m.label}>
                      <CardContent className="px-4 py-0">
                        <div
                          className={`mb-2 flex h-8 w-8 items-center justify-center rounded-lg ${m.bg}`}
                        >
                          <m.icon className={`h-4 w-4 ${m.color}`} />
                        </div>
                        <p className="text-muted-foreground text-sm">
                          {m.label}
                        </p>
                        <p className="mt-0.5 text-xl font-bold">{m.value}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {/* Recent tasks */}
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">Recent Tasks</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 pt-0">
                      {RECENT_TASKS.map((task) => (
                        <div
                          key={task.id}
                          className="hover:bg-muted/40 flex items-center gap-2 rounded-md px-2 py-1.5"
                        >
                          {task.status === "done" ? (
                            <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-500" />
                          ) : (
                            <XCircle className="h-3.5 w-3.5 shrink-0 text-red-500" />
                          )}
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-medium">
                              {task.title}
                            </p>
                            <p className="text-muted-foreground text-sm">
                              {task.time} · {task.duration}
                            </p>
                          </div>
                          <span className="text-muted-foreground shrink-0 font-mono text-xs">
                            {task.id}
                          </span>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  {/* Token usage chart */}
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">
                        Token Usage (7 days)
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex h-28 items-end gap-1.5">
                        {TOKEN_BARS.map((bar) => (
                          <div
                            key={bar.day}
                            className="flex flex-1 flex-col items-center gap-1"
                          >
                            <div
                              className="w-full rounded-sm bg-orange-400/70 transition-all hover:bg-orange-500"
                              style={{
                                height: `${Math.round((bar.value / maxBar) * 96)}px`,
                              }}
                            />
                            <span className="text-muted-foreground text-sm">
                              {bar.day}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Activity */}
              <TabsContent value="activity" className="mt-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Activity Feed</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="divide-y">
                      {ACTIVITY_EVENTS.map((evt, i) => {
                        const Icon = evt.icon
                        return (
                          <div
                            key={i}
                            className="flex items-start gap-3 py-2.5"
                          >
                            <div
                              className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${evt.bg}`}
                            >
                              <Icon className={`h-3 w-3 ${evt.color}`} />
                            </div>
                            <div className="min-w-0 flex-1">
                              <Badge
                                variant="outline"
                                className={`mb-0.5 px-1.5 py-0 text-xs ${evt.color}`}
                              >
                                {evt.label}
                              </Badge>
                              <p className="text-sm leading-snug">{evt.desc}</p>
                            </div>
                            <span className="text-muted-foreground shrink-0 text-xs">
                              {evt.time}
                            </span>
                          </div>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Configuration */}
              <TabsContent value="configuration" className="mt-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm">
                      Agent Configuration
                    </CardTitle>
                    <Button variant="outline" size="sm" className="h-7 text-xs">
                      Edit Configuration
                    </Button>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="divide-y">
                      {CONFIG_ROWS.map((row) => (
                        <div
                          key={row.key}
                          className="flex items-center justify-between py-2.5"
                        >
                          <span className="text-muted-foreground text-sm">
                            {row.key}
                          </span>
                          <span className="text-right text-sm font-medium">
                            {row.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Logs */}
              <TabsContent value="logs" className="mt-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm">System Logs</CardTitle>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1.5">
                        <Switch
                          checked={autoScroll}
                          onCheckedChange={setAutoScroll}
                          className="h-4 w-7"
                        />
                        <span className="text-muted-foreground text-sm">
                          Auto-scroll
                        </span>
                      </div>
                      <Button variant="ghost" size="sm" className="h-7 text-xs">
                        Clear
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="rounded-lg border bg-zinc-950 p-3">
                      <ScrollArea className="h-64">
                        <div className="space-y-0.5 font-mono text-xs">
                          {LOG_LINES.map((line, i) => (
                            <div key={i} className="flex gap-2">
                              <span
                                className={`shrink-0 font-bold ${line.color}`}
                              >
                                [{line.level}]
                              </span>
                              <span className="text-zinc-300">
                                {line.msg.replace(/^\[\S+\]\s/, "")}
                              </span>
                            </div>
                          ))}
                        </div>
                      </ScrollArea>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}
