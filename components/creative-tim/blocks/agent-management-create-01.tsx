"use client"

import * as React from "react"
import {
  BarChart3,
  Bot,
  CheckCircle2,
  ChevronRight,
  Code2,
  Database,
  FileText,
  Globe,
  Image,
  LayoutDashboard,
  ListChecks,
  MessageSquare,
  Settings,
  Terminal,
  Zap,
} from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import { Textarea } from "@/components/ui/textarea"

const NAV_ITEMS = [
  { icon: LayoutDashboard, label: "Dashboard", active: false },
  { icon: Bot, label: "Agents", active: true },
  { icon: ListChecks, label: "Tasks", active: false },
  { icon: BarChart3, label: "Analytics", active: false },
  { icon: Settings, label: "Settings", active: false },
]

const STEPS = [
  { id: 1, label: "Basic Info", icon: FileText },
  { id: 2, label: "Capabilities", icon: Zap },
  { id: 3, label: "Limits", icon: Settings },
  { id: 4, label: "Review", icon: CheckCircle2 },
]

const MODELS = ["Claude 3.5 Sonnet", "GPT-4o", "Gemini 1.5 Pro", "GPT-4o Mini"]
const AGENT_TYPES = [
  { value: "general", label: "General", desc: "Versatile agent for any task" },
  {
    value: "code",
    label: "Code",
    desc: "Specialized for software development",
  },
  {
    value: "research",
    label: "Research",
    desc: "Deep web research and analysis",
  },
  { value: "support", label: "Support", desc: "Customer support & triage" },
]

const CAPABILITIES = [
  {
    id: "web_search",
    label: "Web Search",
    desc: "Search the web for real-time info",
    icon: Globe,
  },
  {
    id: "code_exec",
    label: "Code Execution",
    desc: "Run Python, JS, and shell scripts",
    icon: Terminal,
  },
  {
    id: "file_access",
    label: "File Access",
    desc: "Read and write files in workspace",
    icon: FileText,
  },
  {
    id: "database",
    label: "Database Query",
    desc: "Execute SQL and NoSQL queries",
    icon: Database,
  },
  {
    id: "api_calls",
    label: "API Calls",
    desc: "Make HTTP requests to external APIs",
    icon: Code2,
  },
  {
    id: "image",
    label: "Image Analysis",
    desc: "Understand and analyze images",
    icon: Image,
  },
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

export default function AgentManagementCreate01() {
  const [step, setStep] = React.useState(1)
  const [name, setName] = React.useState("")
  const [description, setDescription] = React.useState("")
  const [model, setModel] = React.useState("Claude 3.5 Sonnet")
  const [agentType, setAgentType] = React.useState("general")
  const [capabilities, setCapabilities] = React.useState<string[]>([
    "web_search",
    "file_access",
  ])
  const [tokenLimit, setTokenLimit] = React.useState([500000])
  const [maxCost, setMaxCost] = React.useState("5.00")
  const [maxConcurrent, setMaxConcurrent] = React.useState([3])
  const [timeout, setTimeout] = React.useState("15min")
  const [created, setCreated] = React.useState(false)

  const toggleCapability = (id: string) => {
    setCapabilities((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    )
  }

  const progress = ((step - 1) / (STEPS.length - 1)) * 100

  if (created) {
    return (
      <div className="bg-background flex h-screen overflow-hidden">
        <AgentSidebar />
        <div className="flex flex-1 items-center justify-center">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
              <CheckCircle2 className="h-8 w-8 text-emerald-600" />
            </div>
            <h2 className="text-xl font-semibold">Agent Created!</h2>
            <p className="text-muted-foreground mt-1 text-sm">
              <strong>{name || "New Agent"}</strong> is being deployed…
            </p>
            <Button className="mt-6" onClick={() => setCreated(false)}>
              Back to Agents
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-background flex h-screen overflow-hidden">
      <AgentSidebar />

      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-background flex items-center justify-between border-b px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground text-sm">Agents</span>
            <ChevronRight className="text-muted-foreground h-3 w-3" />
            <span className="text-sm font-medium">New Agent</span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="h-8 text-sm">
              Cancel
            </Button>
            <Button size="sm" className="h-8 text-sm">
              Create Agent
            </Button>
          </div>
        </header>

        <ScrollArea className="flex-1">
          <div className="mx-auto max-w-2xl space-y-6 p-6">
            {/* Step indicator */}
            <div className="space-y-3">
              <Progress value={progress} className="h-1.5" />
              <div className="flex justify-between">
                {STEPS.map((s) => {
                  const Icon = s.icon
                  const isDone = step > s.id
                  const isCurrent = step === s.id
                  return (
                    <div
                      key={s.id}
                      className="flex flex-col items-center gap-1"
                    >
                      <div
                        className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold transition-colors ${
                          isDone
                            ? "bg-emerald-500 text-white"
                            : isCurrent
                              ? "bg-orange-600 text-white"
                              : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {isDone ? (
                          <CheckCircle2 className="h-4 w-4" />
                        ) : (
                          <Icon className="h-3.5 w-3.5" />
                        )}
                      </div>
                      <span
                        className={`text-sm font-medium ${isCurrent ? "text-foreground" : "text-muted-foreground"}`}
                      >
                        {s.label}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Step content */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">
                  {STEPS[step - 1].label}
                </CardTitle>
                <CardDescription className="text-sm">
                  {step === 1 && "Set the agent's name, description, and model"}
                  {step === 2 && "Choose which tools the agent can use"}
                  {step === 3 && "Configure usage limits and budget"}
                  {step === 4 && "Review your configuration before creating"}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Step 1 */}
                {step === 1 && (
                  <>
                    <div className="space-y-1.5">
                      <Label className="text-sm">Agent Name</Label>
                      <Input
                        placeholder="e.g. Research Agent Alpha"
                        className="h-8 text-sm"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label className="text-sm">Description</Label>
                      <Textarea
                        placeholder="Describe what this agent does…"
                        className="min-h-18 resize-none text-sm"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label className="text-sm">Model</Label>
                      <Select value={model} onValueChange={setModel}>
                        <SelectTrigger className="h-8 text-sm">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {MODELS.map((m) => (
                            <SelectItem key={m} value={m} className="text-sm">
                              {m}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-sm">Agent Type</Label>
                      <div className="grid grid-cols-2 gap-2">
                        {AGENT_TYPES.map((t) => (
                          <button
                            key={t.value}
                            onClick={() => setAgentType(t.value)}
                            className={`rounded-lg border p-3 text-left transition-colors ${
                              agentType === t.value
                                ? "border-orange-500 bg-orange-50"
                                : "hover:bg-muted/50"
                            }`}
                          >
                            <p
                              className={`text-sm font-semibold ${agentType === t.value ? "text-orange-700" : ""}`}
                            >
                              {t.label}
                            </p>
                            <p className="text-muted-foreground mt-0.5 text-sm">
                              {t.desc}
                            </p>
                          </button>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {/* Step 2 */}
                {step === 2 && (
                  <div className="space-y-2">
                    {CAPABILITIES.map((cap) => {
                      const Icon = cap.icon
                      const checked = capabilities.includes(cap.id)
                      return (
                        <div
                          key={cap.id}
                          onClick={() => toggleCapability(cap.id)}
                          className={`flex cursor-pointer items-center gap-3 rounded-lg border p-3 transition-colors ${
                            checked
                              ? "border-orange-500 bg-orange-50"
                              : "hover:bg-muted/40"
                          }`}
                        >
                          <Checkbox
                            checked={checked}
                            onCheckedChange={() => toggleCapability(cap.id)}
                            className="pointer-events-none"
                          />
                          <div
                            className={`flex h-7 w-7 items-center justify-center rounded-md ${checked ? "bg-orange-100" : "bg-muted"}`}
                          >
                            <Icon
                              className={`h-3.5 w-3.5 ${checked ? "text-orange-600" : "text-muted-foreground"}`}
                            />
                          </div>
                          <div>
                            <p className="text-sm font-medium">{cap.label}</p>
                            <p className="text-muted-foreground text-sm">
                              {cap.desc}
                            </p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                )}

                {/* Step 3 */}
                {step === 3 && (
                  <div className="space-y-5">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label className="text-sm">Monthly Token Limit</Label>
                        <span className="text-sm font-medium text-orange-600">
                          {(tokenLimit[0] / 1000).toFixed(0)}K tokens
                        </span>
                      </div>
                      <Slider
                        min={0}
                        max={1000000}
                        step={10000}
                        value={tokenLimit}
                        onValueChange={setTokenLimit}
                        className="w-full"
                      />
                      <div className="text-muted-foreground flex justify-between text-sm">
                        <span>0</span>
                        <span>1M</span>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label className="text-sm">Max Cost Per Task ($)</Label>
                      <Input
                        type="number"
                        className="h-8 text-sm"
                        value={maxCost}
                        onChange={(e) => setMaxCost(e.target.value)}
                        placeholder="5.00"
                      />
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label className="text-sm">Max Concurrent Tasks</Label>
                        <span className="text-sm font-medium text-orange-600">
                          {maxConcurrent[0]}
                        </span>
                      </div>
                      <Slider
                        min={1}
                        max={10}
                        step={1}
                        value={maxConcurrent}
                        onValueChange={setMaxConcurrent}
                        className="w-full"
                      />
                      <div className="text-muted-foreground flex justify-between text-sm">
                        <span>1</span>
                        <span>10</span>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label className="text-sm">Task Timeout</Label>
                      <Select value={timeout} onValueChange={setTimeout}>
                        <SelectTrigger className="h-8 text-sm">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {[
                            { value: "5min", label: "5 minutes" },
                            { value: "15min", label: "15 minutes" },
                            { value: "1hr", label: "1 hour" },
                            { value: "unlimited", label: "Unlimited" },
                          ].map((t) => (
                            <SelectItem
                              key={t.value}
                              value={t.value}
                              className="text-xs"
                            >
                              {t.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}

                {/* Step 4 — Review */}
                {step === 4 && (
                  <div className="space-y-3">
                    <div className="bg-muted/20 space-y-2 rounded-lg border p-4">
                      {[
                        { label: "Agent Name", value: name || "Unnamed Agent" },
                        { label: "Description", value: description || "—" },
                        { label: "Model", value: model },
                        {
                          label: "Type",
                          value:
                            AGENT_TYPES.find((t) => t.value === agentType)
                              ?.label ?? "—",
                        },
                        {
                          label: "Capabilities",
                          value:
                            capabilities.length > 0
                              ? capabilities
                                  .map(
                                    (c) =>
                                      CAPABILITIES.find((x) => x.id === c)
                                        ?.label
                                  )
                                  .join(", ")
                              : "None",
                        },
                        {
                          label: "Token Limit",
                          value: `${(tokenLimit[0] / 1000).toFixed(0)}K / month`,
                        },
                        { label: "Max Cost/Task", value: `$${maxCost}` },
                        {
                          label: "Concurrent Tasks",
                          value: maxConcurrent[0].toString(),
                        },
                        { label: "Timeout", value: timeout },
                      ].map((row) => (
                        <div key={row.label} className="flex justify-between">
                          <span className="text-muted-foreground text-sm">
                            {row.label}
                          </span>
                          <span className="max-w-1/2 truncate text-right text-sm font-medium">
                            {row.value}
                          </span>
                        </div>
                      ))}
                    </div>
                    <Button
                      className="w-full gap-2"
                      onClick={() => setCreated(true)}
                    >
                      <Bot className="h-4 w-4" />
                      Create Agent
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Navigation */}
            {step < 4 && (
              <div className="flex justify-between">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs"
                  onClick={() => setStep((s) => Math.max(1, s - 1))}
                  disabled={step === 1}
                >
                  Back
                </Button>
                <Button
                  size="sm"
                  className="text-xs"
                  onClick={() => setStep((s) => Math.min(4, s + 1))}
                >
                  Next
                </Button>
              </div>
            )}
            {step === 4 && (
              <div className="flex justify-start">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs"
                  onClick={() => setStep(3)}
                >
                  Back
                </Button>
              </div>
            )}
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}
