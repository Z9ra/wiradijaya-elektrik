"use client"

import * as React from "react"
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Clock,
  Coins,
  MessageSquare,
  Pause,
  Play,
  RefreshCw,
  Terminal,
  Wrench,
  Zap,
} from "lucide-react"

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
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

type EventType = "task" | "tool" | "token" | "message" | "error"

interface AgentEvent {
  id: string
  type: EventType
  description: string
  timestamp: string
  metadata?: {
    tokens?: number
    cost?: number
    tool?: string
    taskId?: string
  }
}

const EVENT_CONFIGS: Record<
  EventType,
  {
    icon: React.ComponentType<{ className?: string }>
    color: string
    bg: string
    label: string
  }
> = {
  task: {
    icon: CheckCircle2,
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-100 dark:bg-blue-900/50",
    label: "Task",
  },
  tool: {
    icon: Wrench,
    color: "text-orange-600 dark:text-orange-400",
    bg: "bg-orange-100 dark:bg-orange-900/50",
    label: "Tool",
  },
  token: {
    icon: Coins,
    color: "text-amber-600 dark:text-amber-400",
    bg: "bg-amber-100 dark:bg-amber-900/50",
    label: "Tokens",
  },
  message: {
    icon: MessageSquare,
    color: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-100 dark:bg-emerald-900/50",
    label: "Message",
  },
  error: {
    icon: AlertTriangle,
    color: "text-red-600 dark:text-red-400",
    bg: "bg-red-100 dark:bg-red-900/50",
    label: "Error",
  },
}

const MOCK_EVENT_POOL: Omit<AgentEvent, "id" | "timestamp">[] = [
  {
    type: "task",
    description: "New task received: Generate monthly report",
    metadata: { taskId: "task-001" },
  },
  {
    type: "tool",
    description: "Called web_search with query 'Q4 sales data 2025'",
    metadata: { tool: "web_search" },
  },
  {
    type: "token",
    description: "Consumed 312 input tokens (GPT-4o)",
    metadata: { tokens: 312, cost: 0.001 },
  },
  {
    type: "message",
    description: "Sent assistant message to user session #7f2a",
    metadata: {},
  },
  {
    type: "tool",
    description: "Called calculator: SUM(revenue) = $4.2M",
    metadata: { tool: "calculator" },
  },
  {
    type: "token",
    description: "Consumed 847 output tokens",
    metadata: { tokens: 847, cost: 0.003 },
  },
  {
    type: "task",
    description: "Subtask completed: Data extraction phase done",
    metadata: { taskId: "task-001" },
  },
  {
    type: "error",
    description: "Rate limit hit on web_search — retrying in 2s",
    metadata: {},
  },
  {
    type: "tool",
    description: "Called get_weather for location: New York",
    metadata: { tool: "get_weather" },
  },
  {
    type: "message",
    description: "Sent draft report to review queue",
    metadata: {},
  },
  {
    type: "token",
    description: "Consumed 1,204 tokens (context window update)",
    metadata: { tokens: 1204, cost: 0.005 },
  },
  {
    type: "task",
    description: "New task received: Translate document to Spanish",
    metadata: { taskId: "task-002" },
  },
  {
    type: "tool",
    description: "Called translate_text with 3,400 characters",
    metadata: { tool: "translate_text" },
  },
  {
    type: "message",
    description: "Translation complete — delivered to client",
    metadata: {},
  },
  {
    type: "error",
    description: "Invalid API key for external service — falling back",
    metadata: {},
  },
  {
    type: "token",
    description: "Consumed 234 tokens (summarization)",
    metadata: { tokens: 234, cost: 0.001 },
  },
  {
    type: "task",
    description: "Task task-002 marked as complete",
    metadata: { taskId: "task-002" },
  },
]

function nowTimeString() {
  const d = new Date()
  const hh = String(d.getHours()).padStart(2, "0")
  const mm = String(d.getMinutes()).padStart(2, "0")
  const ss = String(d.getSeconds()).padStart(2, "0")
  return `${hh}:${mm}:${ss}`
}

// Static initial timestamps — fixed strings so server and client render identically
const INITIAL_TIMESTAMPS = [
  "10:30:00",
  "10:30:04",
  "10:30:08",
  "10:30:13",
  "10:30:19",
  "10:30:24",
]

function EventRow({ event }: { event: AgentEvent }) {
  const config = EVENT_CONFIGS[event.type]
  const Icon = config.icon

  return (
    <div className="flex items-start gap-3 py-2">
      <div
        className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${config.bg}`}
      >
        <Icon className={`h-3.5 w-3.5 ${config.color}`} />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <Badge
            variant="outline"
            className={`px-1.5 py-0 text-xs font-medium ${config.color}`}
          >
            {config.label}
          </Badge>
          {event.metadata?.tool && (
            <span className="text-muted-foreground font-mono text-xs">
              {event.metadata.tool}
            </span>
          )}
          {event.metadata?.taskId && (
            <span className="text-muted-foreground font-mono text-xs">
              {event.metadata.taskId}
            </span>
          )}
        </div>
        <p className="text-foreground mt-0.5 text-sm leading-relaxed">
          {event.description}
        </p>
        {(event.metadata?.tokens || event.metadata?.cost) && (
          <p className="text-muted-foreground mt-0.5 text-sm">
            {event.metadata.tokens &&
              `${event.metadata.tokens.toLocaleString()} tokens`}
            {event.metadata.tokens && event.metadata.cost && " · "}
            {event.metadata.cost && `$${event.metadata.cost.toFixed(3)}`}
          </p>
        )}
      </div>
      <span className="text-muted-foreground shrink-0 font-mono text-xs">
        {event.timestamp}
      </span>
    </div>
  )
}

export default function AiAgentActivity01() {
  const [events, setEvents] = React.useState<AgentEvent[]>(() =>
    MOCK_EVENT_POOL.slice(0, 6).map((e, i) => ({
      ...e,
      id: `init-${i}`,
      timestamp: INITIAL_TIMESTAMPS[i],
    }))
  )
  const [isLive, setIsLive] = React.useState(true)
  const [eventPoolIdx, setEventPoolIdx] = React.useState(6)
  const scrollRef = React.useRef<HTMLDivElement>(null)

  // Auto-scroll
  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [events])

  // Add new events every 2s
  React.useEffect(() => {
    if (!isLive) return
    const interval = setInterval(() => {
      setEventPoolIdx((idx) => {
        const nextIdx = idx % MOCK_EVENT_POOL.length
        const newEvent: AgentEvent = {
          ...MOCK_EVENT_POOL[nextIdx],
          id: `evt-${Date.now()}`,
          timestamp: nowTimeString(),
        }
        setEvents((prev) => [...prev.slice(-49), newEvent])
        return nextIdx + 1
      })
    }, 2000)
    return () => clearInterval(interval)
  }, [isLive])

  const totalTokens = events.reduce((s, e) => s + (e.metadata?.tokens ?? 0), 0)
  const totalCost = events.reduce((s, e) => s + (e.metadata?.cost ?? 0), 0)
  const activeTasks = new Set(
    events
      .filter((e) => e.type === "task" && !e.description.includes("complete"))
      .map((e) => e.metadata?.taskId)
  ).size
  const errorCount = events.filter((e) => e.type === "error").length

  const filterEvents = (tab: string) => {
    if (tab === "tasks") return events.filter((e) => e.type === "task")
    if (tab === "errors") return events.filter((e) => e.type === "error")
    return events
  }

  return (
    <div className="container mx-auto py-8">
      <Card className="mx-auto max-w-2xl">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-orange-500" />
              Agent Activity Feed
            </CardTitle>
            <div className="flex items-center gap-2">
              {isLive && (
                <span className="flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400">
                  <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                  Live
                </span>
              )}
              <Button
                size="sm"
                variant="outline"
                className="h-7 px-2 text-xs"
                onClick={() => setIsLive((v) => !v)}
              >
                {isLive ? (
                  <>
                    <Pause className="mr-1 h-3 w-3" />
                    Pause
                  </>
                ) : (
                  <>
                    <Play className="mr-1 h-3 w-3" />
                    Resume
                  </>
                )}
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="h-7 px-2 text-xs"
                onClick={() => setEvents([])}
              >
                <RefreshCw className="h-3 w-3" />
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-2 pt-2">
            {[
              {
                label: "Tokens",
                value: totalTokens.toLocaleString(),
                icon: Coins,
                color: "text-amber-600",
              },
              {
                label: "Cost",
                value: `$${totalCost.toFixed(3)}`,
                icon: ArrowRight,
                color: "text-orange-600",
              },
              {
                label: "Active Tasks",
                value: activeTasks.toString(),
                icon: Terminal,
                color: "text-blue-600",
              },
              {
                label: "Errors",
                value: errorCount.toString(),
                icon: AlertTriangle,
                color:
                  errorCount > 0 ? "text-red-600" : "text-muted-foreground",
              },
            ].map((stat) => {
              const StatIcon = stat.icon
              return (
                <div
                  key={stat.label}
                  className="bg-muted/30 rounded-lg border p-2 text-center"
                >
                  <StatIcon
                    className={`mx-auto mb-0.5 h-4 w-4 ${stat.color}`}
                  />
                  <p className="text-sm font-bold">{stat.value}</p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              )
            })}
          </div>
        </CardHeader>

        <Separator />

        <CardContent className="pt-3">
          <Tabs defaultValue="all">
            <TabsList className="h-8 text-sm">
              <TabsTrigger value="all" className="h-6 text-sm">
                All ({events.length})
              </TabsTrigger>
              <TabsTrigger value="tasks" className="h-6 text-sm">
                Tasks ({events.filter((e) => e.type === "task").length})
              </TabsTrigger>
              <TabsTrigger value="errors" className="h-6 text-sm">
                Errors ({errorCount})
              </TabsTrigger>
            </TabsList>

            {["all", "tasks", "errors"].map((tab) => (
              <TabsContent key={tab} value={tab} className="mt-3">
                <ScrollArea
                  className="h-90"
                  ref={tab === "all" ? scrollRef : undefined}
                >
                  <div className="divide-y pr-2">
                    {filterEvents(tab).length === 0 ? (
                      <div className="text-muted-foreground flex h-32 items-center justify-center text-sm">
                        <div className="text-center">
                          <Zap className="mx-auto mb-1 h-5 w-5 opacity-40" />
                          No {tab === "all" ? "events" : tab} yet
                        </div>
                      </div>
                    ) : (
                      filterEvents(tab).map((event) => (
                        <EventRow key={event.id} event={event} />
                      ))
                    )}
                  </div>
                </ScrollArea>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
