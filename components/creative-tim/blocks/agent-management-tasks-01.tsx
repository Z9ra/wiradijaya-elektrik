"use client"

import * as React from "react"
import {
  BarChart3,
  Bot,
  ChevronDown,
  Clock,
  Coins,
  GripVertical,
  LayoutDashboard,
  ListChecks,
  Plus,
  Settings,
} from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

type Priority = "Critical" | "High" | "Medium" | "Low"
type Column = "backlog" | "in-progress" | "in-review" | "done"

interface Task {
  id: string
  title: string
  priority: Priority
  agentName: string
  agentInitials: string
  issueId: string
  tokens: number
  createdAt: string
  column: Column
}

const PRIORITY_CONFIG: Record<Priority, { className: string }> = {
  Critical: { className: "bg-red-50 text-red-700 border-red-200" },
  High: { className: "bg-orange-50 text-orange-700 border-orange-200" },
  Medium: { className: "bg-amber-50 text-amber-700 border-amber-200" },
  Low: { className: "bg-slate-50 text-slate-600 border-slate-200" },
}

const MOCK_TASKS: Task[] = [
  // Backlog
  {
    id: "t1",
    title: "Analyze Q4 sales report and generate insights",
    priority: "High",
    agentName: "Research Agent",
    agentInitials: "RA",
    issueId: "OC-47",
    tokens: 0,
    createdAt: "1 hour ago",
    column: "backlog",
  },
  {
    id: "t2",
    title: "Draft email campaign for product launch",
    priority: "Medium",
    agentName: "Content Writer",
    agentInitials: "CW",
    issueId: "OC-48",
    tokens: 0,
    createdAt: "2 hours ago",
    column: "backlog",
  },
  {
    id: "t3",
    title: "Update customer database records",
    priority: "Low",
    agentName: "Data Analyst",
    agentInitials: "DA",
    issueId: "OC-49",
    tokens: 0,
    createdAt: "3 hours ago",
    column: "backlog",
  },
  // In Progress
  {
    id: "t4",
    title: "Translate product docs to Spanish",
    priority: "Critical",
    agentName: "Research Agent",
    agentInitials: "RA",
    issueId: "OC-42",
    tokens: 12400,
    createdAt: "30 min ago",
    column: "in-progress",
  },
  {
    id: "t5",
    title: "Debug authentication middleware in API",
    priority: "High",
    agentName: "Code Review Bot",
    agentInitials: "CR",
    issueId: "OC-43",
    tokens: 8200,
    createdAt: "45 min ago",
    column: "in-progress",
  },
  {
    id: "t6",
    title: "Generate SEO meta tags for 50 pages",
    priority: "Medium",
    agentName: "SEO Optimizer",
    agentInitials: "SO",
    issueId: "OC-44",
    tokens: 5600,
    createdAt: "1 hour ago",
    column: "in-progress",
  },
  {
    id: "t7",
    title: "Summarize weekly support tickets",
    priority: "High",
    agentName: "Support Agent",
    agentInitials: "SA",
    issueId: "OC-45",
    tokens: 3100,
    createdAt: "20 min ago",
    column: "in-progress",
  },
  // In Review
  {
    id: "t8",
    title: "Write technical spec for new feature",
    priority: "High",
    agentName: "Code Review Bot",
    agentInitials: "CR",
    issueId: "OC-38",
    tokens: 22800,
    createdAt: "2 hours ago",
    column: "in-review",
  },
  {
    id: "t9",
    title: "Competitor analysis report for Q1",
    priority: "Medium",
    agentName: "Research Agent",
    agentInitials: "RA",
    issueId: "OC-39",
    tokens: 31200,
    createdAt: "3 hours ago",
    column: "in-review",
  },
  // Done
  {
    id: "t10",
    title: "Monthly newsletter content draft",
    priority: "Medium",
    agentName: "Content Writer",
    agentInitials: "CW",
    issueId: "OC-35",
    tokens: 15400,
    createdAt: "1 day ago",
    column: "done",
  },
  {
    id: "t11",
    title: "Parse and import 2,000 product listings",
    priority: "High",
    agentName: "Data Analyst",
    agentInitials: "DA",
    issueId: "OC-36",
    tokens: 44200,
    createdAt: "1 day ago",
    column: "done",
  },
  {
    id: "t12",
    title: "Respond to 48 customer support emails",
    priority: "Critical",
    agentName: "Support Agent",
    agentInitials: "SA",
    issueId: "OC-37",
    tokens: 18700,
    createdAt: "2 days ago",
    column: "done",
  },
]

const COLUMNS: {
  id: Column
  label: string
  color: string
  headerColor: string
}[] = [
  {
    id: "backlog",
    label: "Backlog",
    color: "border-t-slate-300",
    headerColor: "bg-slate-100 text-slate-700",
  },
  {
    id: "in-progress",
    label: "In Progress",
    color: "border-t-blue-400",
    headerColor: "bg-blue-50 text-blue-700",
  },
  {
    id: "in-review",
    label: "In Review",
    color: "border-t-amber-400",
    headerColor: "bg-amber-50 text-amber-700",
  },
  {
    id: "done",
    label: "Done",
    color: "border-t-emerald-400",
    headerColor: "bg-emerald-50 text-emerald-700",
  },
]

const NAV_ITEMS = [
  { icon: LayoutDashboard, label: "Dashboard", active: false },
  { icon: Bot, label: "Agents", active: false },
  { icon: ListChecks, label: "Tasks", active: true },
  { icon: BarChart3, label: "Analytics", active: false },
  { icon: Settings, label: "Settings", active: false },
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
      <div className="p-4">
        <p className="text-muted-foreground mb-2 px-1 text-xs font-semibold tracking-wider uppercase">
          Summary
        </p>
        {COLUMNS.map((col) => {
          const count = MOCK_TASKS.filter((t) => t.column === col.id).length
          return (
            <div
              key={col.id}
              className="flex items-center justify-between rounded px-2 py-1"
            >
              <span className="text-muted-foreground text-sm">{col.label}</span>
              <span className="text-sm font-medium">{count}</span>
            </div>
          )
        })}
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

function TaskCard({ task }: { task: Task }) {
  const priorityCfg = PRIORITY_CONFIG[task.priority]
  return (
    <Card className="group cursor-grab active:cursor-grabbing">
      <CardContent className="space-y-2.5 px-3 py-0">
        <div className="flex items-start justify-between gap-1">
          <GripVertical className="text-muted-foreground/40 group-hover:text-muted-foreground mt-0.5 h-3.5 w-3.5 shrink-0" />
          <p className="flex-1 text-sm leading-snug font-medium">
            {task.title}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <Badge
            variant="outline"
            className={`px-1.5 text-xs font-medium ${priorityCfg.className}`}
          >
            {task.priority}
          </Badge>
          <span className="text-muted-foreground font-mono text-xs">
            {task.issueId}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Avatar className="h-5 w-5">
              <AvatarFallback className="bg-orange-100 text-xs text-orange-700">
                {task.agentInitials}
              </AvatarFallback>
            </Avatar>
            <span className="text-muted-foreground text-sm">
              {task.agentName}
            </span>
          </div>
          <div className="text-muted-foreground flex items-center gap-2 text-sm">
            {task.tokens > 0 && (
              <span className="flex items-center gap-0.5">
                <Coins className="h-2.5 w-2.5" />
                {(task.tokens / 1000).toFixed(1)}K
              </span>
            )}
            <span className="flex items-center gap-0.5">
              <Clock className="h-2.5 w-2.5" />
              {task.createdAt}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function AgentManagementTasks01() {
  const [agentFilter, setAgentFilter] = React.useState("All Agents")

  return (
    <div className="bg-background flex h-screen overflow-hidden">
      <AgentSidebar />

      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="bg-background flex items-center justify-between border-b px-6 py-2">
          <div>
            <h1 className="text-lg font-semibold">Task Board</h1>
            <p className="text-muted-foreground text-sm">
              {MOCK_TASKS.length} tasks total
            </p>
          </div>
          <div className="flex items-center gap-3">
            {/* Agent filter */}
            <button className="text-muted-foreground hover:bg-muted flex h-8 items-center gap-1.5 rounded-md border px-3 text-sm transition-colors">
              <Bot className="h-3.5 w-3.5" />
              {agentFilter}
              <ChevronDown className="h-3 w-3" />
            </button>
            <Button size="sm" className="h-8 gap-1.5 text-sm">
              <Plus className="h-3.5 w-3.5" />
              New Task
            </Button>
          </div>
        </header>

        {/* Kanban board */}
        <div className="flex flex-1 gap-4 overflow-x-auto p-5">
          {COLUMNS.map((col) => {
            const tasks = MOCK_TASKS.filter((t) => t.column === col.id)
            return (
              <div key={col.id} className="flex w-72 shrink-0 flex-col">
                {/* Column header */}
                <div
                  className={`mb-3 flex items-center justify-between rounded-lg border-t-2 px-3 py-2 ${col.color} ${col.headerColor}`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold">{col.label}</span>
                    <span
                      className={`flex h-4 w-4 items-center justify-center rounded-full text-xs font-bold ${col.headerColor}`}
                    >
                      {tasks.length}
                    </span>
                  </div>
                  <button className="flex h-5 w-5 items-center justify-center rounded transition-colors hover:bg-black/10">
                    <Plus className="h-3 w-3" />
                  </button>
                </div>

                {/* Cards */}
                <ScrollArea className="flex-1">
                  <div className="space-y-2 pb-4">
                    {tasks.map((task) => (
                      <TaskCard key={task.id} task={task} />
                    ))}
                  </div>
                </ScrollArea>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
