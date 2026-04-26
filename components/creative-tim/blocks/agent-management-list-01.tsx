"use client"

import * as React from "react"
import {
  Activity,
  BarChart3,
  Bot,
  ChevronDown,
  Eye,
  LayoutDashboard,
  ListChecks,
  MoreHorizontal,
  Plus,
  RefreshCw,
  Search,
  Settings,
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
import { Input } from "@/components/ui/input"
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

type AgentStatus = "active" | "paused" | "stopped"
type AgentType = "OpenClaw" | "GPT-4o" | "Claude"

interface Agent {
  id: string
  name: string
  initials: string
  type: AgentType
  status: AgentStatus
  tasksCompleted: number
  lastActive: string
  monthlyCost: string
}

const MOCK_AGENTS: Agent[] = [
  {
    id: "1",
    name: "Research Agent Alpha",
    initials: "RA",
    type: "Claude",
    status: "active",
    tasksCompleted: 142,
    lastActive: "2 min ago",
    monthlyCost: "$12.40",
  },
  {
    id: "2",
    name: "Code Review Bot",
    initials: "CR",
    type: "GPT-4o",
    status: "active",
    tasksCompleted: 89,
    lastActive: "5 min ago",
    monthlyCost: "$8.20",
  },
  {
    id: "3",
    name: "Support Agent Pro",
    initials: "SA",
    type: "OpenClaw",
    status: "active",
    tasksCompleted: 312,
    lastActive: "1 min ago",
    monthlyCost: "$21.60",
  },
  {
    id: "4",
    name: "Data Analyst",
    initials: "DA",
    type: "Claude",
    status: "active",
    tasksCompleted: 67,
    lastActive: "12 min ago",
    monthlyCost: "$5.80",
  },
  {
    id: "5",
    name: "Content Writer",
    initials: "CW",
    type: "GPT-4o",
    status: "paused",
    tasksCompleted: 203,
    lastActive: "2 hours ago",
    monthlyCost: "$14.30",
  },
  {
    id: "6",
    name: "SEO Optimizer",
    initials: "SO",
    type: "OpenClaw",
    status: "paused",
    tasksCompleted: 44,
    lastActive: "1 day ago",
    monthlyCost: "$3.10",
  },
  {
    id: "7",
    name: "Email Drafter",
    initials: "ED",
    type: "Claude",
    status: "paused",
    tasksCompleted: 178,
    lastActive: "3 hours ago",
    monthlyCost: "$9.70",
  },
  {
    id: "8",
    name: "Legacy Scraper",
    initials: "LS",
    type: "GPT-4o",
    status: "stopped",
    tasksCompleted: 521,
    lastActive: "5 days ago",
    monthlyCost: "$0.00",
  },
]

const STATUS_CONFIG: Record<
  AgentStatus,
  { label: string; className: string; dot: string }
> = {
  active: {
    label: "Active",
    className: "bg-emerald-50 text-emerald-700 border-emerald-200",
    dot: "bg-emerald-500",
  },
  paused: {
    label: "Paused",
    className: "bg-amber-50 text-amber-700 border-amber-200",
    dot: "bg-amber-500",
  },
  stopped: {
    label: "Stopped",
    className: "bg-red-50 text-red-700 border-red-200",
    dot: "bg-red-500",
  },
}

const TYPE_CONFIG: Record<AgentType, string> = {
  OpenClaw: "bg-orange-50 text-orange-700 border-orange-200",
  "GPT-4o": "bg-blue-50 text-blue-700 border-blue-200",
  Claude: "bg-orange-50 text-orange-700 border-orange-200",
}

const NAV_ITEMS = [
  { icon: LayoutDashboard, label: "Dashboard", active: false },
  { icon: Bot, label: "Agents", active: true },
  { icon: ListChecks, label: "Tasks", active: false },
  { icon: BarChart3, label: "Analytics", active: false },
  { icon: Settings, label: "Settings", active: false },
]

function AgentSidebar() {
  const counts = {
    active: MOCK_AGENTS.filter((a) => a.status === "active").length,
    paused: MOCK_AGENTS.filter((a) => a.status === "paused").length,
    stopped: MOCK_AGENTS.filter((a) => a.status === "stopped").length,
  }

  return (
    <aside className="bg-muted/30 flex h-full w-64 flex-col border-r">
      {/* Logo */}
      <div className="flex items-center gap-2.5 border-b px-5 py-4">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-600">
          <Bot className="h-4 w-4 text-white" />
        </div>
        <span className="text-sm font-semibold">Creative Tim UI</span>
      </div>

      {/* Nav */}
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

      {/* Status counts */}
      <div className="p-4">
        <p className="text-muted-foreground mb-2 px-1 text-xs font-semibold tracking-wider uppercase">
          Agent Status
        </p>
        <div className="space-y-1">
          {[
            { label: "Active", count: counts.active, color: "bg-emerald-500" },
            { label: "Paused", count: counts.paused, color: "bg-amber-500" },
            { label: "Stopped", count: counts.stopped, color: "bg-red-500" },
          ].map((s) => (
            <div
              key={s.label}
              className="flex items-center justify-between rounded px-2 py-1"
            >
              <div className="flex items-center gap-2">
                <span className={`h-2 w-2 rounded-full ${s.color}`} />
                <span className="text-muted-foreground text-sm">{s.label}</span>
              </div>
              <span className="text-sm font-medium">{s.count}</span>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* User */}
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

export default function AgentManagementList01() {
  const [search, setSearch] = React.useState("")
  const [statusFilter, setStatusFilter] = React.useState<AgentStatus | "all">(
    "all"
  )

  const filtered = MOCK_AGENTS.filter((a) => {
    const matchesSearch = a.name.toLowerCase().includes(search.toLowerCase())
    const matchesStatus = statusFilter === "all" || a.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const counts = {
    total: MOCK_AGENTS.length,
    active: MOCK_AGENTS.filter((a) => a.status === "active").length,
    paused: MOCK_AGENTS.filter((a) => a.status === "paused").length,
    stopped: MOCK_AGENTS.filter((a) => a.status === "stopped").length,
  }

  return (
    <div className="bg-background flex h-screen overflow-hidden">
      <AgentSidebar />

      {/* Main content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-background flex items-center justify-between border-b px-6 py-2">
          <div>
            <h1 className="text-lg font-semibold">All Agents</h1>
            <p className="text-muted-foreground text-sm">
              {counts.total} agents total
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="text-muted-foreground absolute top-1/2 left-2.5 h-3.5 w-3.5 -translate-y-1/2" />
              <Input
                placeholder="Search agents..."
                className="h-8 w-56 pl-8 text-sm"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <Button size="sm" className="h-8 gap-1.5 text-sm">
              <Plus className="h-3.5 w-3.5" />
              New Agent
            </Button>
          </div>
        </header>

        <ScrollArea className="flex-1">
          <div className="space-y-5 p-6">
            {/* KPI cards */}
            <div className="grid grid-cols-4 gap-4">
              {[
                {
                  label: "Total Agents",
                  value: counts.total,
                  color: "text-foreground",
                },
                {
                  label: "Active",
                  value: counts.active,
                  color: "text-emerald-700",
                },
                {
                  label: "Paused",
                  value: counts.paused,
                  color: "text-amber-700",
                },
                {
                  label: "Stopped",
                  value: counts.stopped,
                  color: "text-red-700",
                },
              ].map((kpi) => (
                <Card key={kpi.label}>
                  <CardContent className="px-4 py-0">
                    <p className="text-muted-foreground text-sm">{kpi.label}</p>
                    <p className={`mt-1 text-2xl font-bold ${kpi.color}`}>
                      {kpi.value}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Table */}
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium">
                    Agent List
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    {/* Status filter */}
                    <div className="flex gap-1">
                      {(["all", "active", "paused", "stopped"] as const).map(
                        (s) => (
                          <button
                            key={s}
                            onClick={() => setStatusFilter(s)}
                            className={`rounded px-2.5 py-1 text-xs font-medium capitalize transition-colors ${
                              statusFilter === s
                                ? "bg-foreground text-background"
                                : "text-muted-foreground hover:bg-muted"
                            }`}
                          >
                            {s}
                          </button>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-sm">Name</TableHead>
                    <TableHead className="text-sm">Type</TableHead>
                    <TableHead className="text-sm">Status</TableHead>
                    <TableHead className="text-sm">Tasks Completed</TableHead>
                    <TableHead className="text-sm">Last Active</TableHead>
                    <TableHead className="text-sm">Monthly Cost</TableHead>
                    <TableHead className="text-sm">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filtered.map((agent) => {
                    const statusCfg = STATUS_CONFIG[agent.status]
                    return (
                      <TableRow key={agent.id}>
                        <TableCell>
                          <div className="flex items-center gap-2.5">
                            <Avatar className="h-7 w-7">
                              <AvatarFallback className="bg-orange-100 text-xs font-semibold text-orange-700">
                                {agent.initials}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex items-center gap-1.5">
                              <Bot className="text-muted-foreground h-3.5 w-3.5" />
                              <span className="text-sm font-medium">
                                {agent.name}
                              </span>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className={`text-xs font-medium ${TYPE_CONFIG[agent.type]}`}
                          >
                            {agent.type}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div
                            className={`inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-xs font-medium ${statusCfg.className}`}
                          >
                            <span
                              className={`h-1.5 w-1.5 rounded-full ${statusCfg.dot}`}
                            />
                            {statusCfg.label}
                          </div>
                        </TableCell>
                        <TableCell className="text-sm font-medium">
                          {agent.tasksCompleted.toLocaleString()}
                        </TableCell>
                        <TableCell className="text-muted-foreground text-sm">
                          {agent.lastActive}
                        </TableCell>
                        <TableCell className="text-sm font-medium">
                          {agent.monthlyCost}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-6 px-2 text-xs"
                            >
                              <Eye className="mr-1 h-3 w-3" />
                              View
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-6 px-2 text-xs"
                            >
                              <RefreshCw className="mr-1 h-3 w-3" />
                              Restart
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </Card>
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}
