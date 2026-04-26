"use client"

import * as React from "react"
import {
  AlertCircle,
  Bot,
  CheckCircle2,
  ChevronRight,
  Circle,
  Loader2,
  Play,
  RotateCcw,
  ShieldCheck,
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
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"

type Phase = "idle" | "planning" | "executing" | "verifying" | "done"
type StepStatus = "pending" | "running" | "done" | "error"

interface PlanStep {
  id: number
  label: string
  detail: string
  status: StepStatus
}

const PLAN_STEPS: Omit<PlanStep, "status">[] = [
  {
    id: 1,
    label: "Gather requirements",
    detail: "Analyze task scope and identify dependencies",
  },
  {
    id: 2,
    label: "Research context",
    detail: "Search knowledge base and external sources",
  },
  {
    id: 3,
    label: "Draft solution",
    detail: "Generate initial implementation plan",
  },
  {
    id: 4,
    label: "Execute steps",
    detail: "Run sub-tasks in parallel where possible",
  },
  {
    id: 5,
    label: "Verify output",
    detail: "Cross-check results against acceptance criteria",
  },
]

const VERIFY_RESULTS = [
  { label: "Accuracy", passed: true, score: "98%" },
  { label: "Completeness", passed: true, score: "100%" },
  { label: "Safety check", passed: true, score: "Pass" },
  { label: "Edge cases covered", passed: false, score: "82%" },
]

const PHASE_CONFIG = {
  planning: {
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-50 dark:bg-blue-950/40",
    border: "border-blue-200 dark:border-blue-800",
    badge: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
    icon: Zap,
    label: "Planning",
  },
  executing: {
    color: "text-amber-600 dark:text-amber-400",
    bg: "bg-amber-50 dark:bg-amber-950/40",
    border: "border-amber-200 dark:border-amber-800",
    badge: "bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300",
    icon: Bot,
    label: "Executing",
  },
  verifying: {
    color: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-50 dark:bg-emerald-950/40",
    border: "border-emerald-200 dark:border-emerald-800",
    badge:
      "bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300",
    icon: ShieldCheck,
    label: "Verifying",
  },
}

export default function AiMultiStepAgent01() {
  const [task, setTask] = React.useState(
    "Analyze our Q4 sales data and generate a comprehensive report with actionable insights"
  )
  const [phase, setPhase] = React.useState<Phase>("idle")
  const [steps, setSteps] = React.useState<PlanStep[]>(
    PLAN_STEPS.map((s) => ({ ...s, status: "pending" }))
  )
  const [currentStep, setCurrentStep] = React.useState(0)
  const [progress, setProgress] = React.useState(0)

  const reset = () => {
    setPhase("idle")
    setSteps(PLAN_STEPS.map((s) => ({ ...s, status: "pending" })))
    setCurrentStep(0)
    setProgress(0)
  }

  const runAgent = async () => {
    reset()
    await new Promise((r) => setTimeout(r, 50))

    // Phase 1: Planning
    setPhase("planning")
    await new Promise((r) => setTimeout(r, 1800))

    // Phase 2: Executing
    setPhase("executing")
    for (let i = 0; i < PLAN_STEPS.length; i++) {
      setCurrentStep(i)
      setSteps((prev) =>
        prev.map((s) => (s.id === i + 1 ? { ...s, status: "running" } : s))
      )
      setProgress(Math.round(((i + 0.5) / PLAN_STEPS.length) * 100))
      await new Promise((r) => setTimeout(r, 900))
      setSteps((prev) =>
        prev.map((s) => (s.id === i + 1 ? { ...s, status: "done" } : s))
      )
      setProgress(Math.round(((i + 1) / PLAN_STEPS.length) * 100))
    }

    // Phase 3: Verifying
    setPhase("verifying")
    await new Promise((r) => setTimeout(r, 2000))

    setPhase("done")
  }

  const phaseKey =
    phase === "executing" || phase === "done"
      ? "executing"
      : phase === "verifying"
        ? "verifying"
        : phase === "planning"
          ? "planning"
          : null

  return (
    <div className="container mx-auto py-8">
      <Card className="mx-auto max-w-2xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bot className="h-5 w-5 text-orange-500" />
            Multi-Step AI Agent
            {phase !== "idle" && phase !== "done" && phaseKey && (
              <Badge
                className={`ml-auto text-xs ${PHASE_CONFIG[phaseKey as keyof typeof PHASE_CONFIG].badge}`}
              >
                {PHASE_CONFIG[phaseKey as keyof typeof PHASE_CONFIG].label}
              </Badge>
            )}
            {phase === "done" && (
              <Badge className="ml-auto bg-emerald-100 text-xs text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300">
                Complete
              </Badge>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Task input */}
          <div className="flex gap-2">
            <Input
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="Describe the task for the agent..."
              disabled={phase !== "idle"}
            />
            {phase === "idle" ? (
              <Button onClick={runAgent} disabled={!task.trim()}>
                <Play className="mr-1.5 h-4 w-4" />
                Run Agent
              </Button>
            ) : phase === "done" ? (
              <Button variant="outline" onClick={reset}>
                <RotateCcw className="mr-1.5 h-4 w-4" />
                Reset
              </Button>
            ) : (
              <Button disabled>
                <Loader2 className="mr-1.5 h-4 w-4 animate-spin" />
                Running
              </Button>
            )}
          </div>

          {/* Phase: Planning */}
          {(phase === "planning" ||
            phase === "executing" ||
            phase === "verifying" ||
            phase === "done") && (
            <div
              className={`rounded-lg border p-4 ${PHASE_CONFIG.planning.bg} ${PHASE_CONFIG.planning.border}`}
            >
              <div
                className={`mb-3 flex items-center gap-2 font-medium ${PHASE_CONFIG.planning.color}`}
              >
                <Zap className="h-4 w-4" />
                Phase 1 — Planning
                {phase === "planning" ? (
                  <Loader2 className="ml-auto h-4 w-4 animate-spin" />
                ) : (
                  <CheckCircle2 className="ml-auto h-4 w-4" />
                )}
              </div>
              <ol className="space-y-1.5 text-sm">
                {PLAN_STEPS.map((s, i) => (
                  <li key={s.id} className="flex items-start gap-2">
                    <span className="text-muted-foreground mt-0.5 min-w-5 text-xs">
                      {i + 1}.
                    </span>
                    <div>
                      <span className="font-medium">{s.label}</span>
                      <span className="text-muted-foreground ml-1.5 text-xs">
                        — {s.detail}
                      </span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* Phase: Executing */}
          {(phase === "executing" ||
            phase === "verifying" ||
            phase === "done") && (
            <div
              className={`rounded-lg border p-4 ${PHASE_CONFIG.executing.bg} ${PHASE_CONFIG.executing.border}`}
            >
              <div
                className={`mb-3 flex items-center gap-2 font-medium ${PHASE_CONFIG.executing.color}`}
              >
                <Bot className="h-4 w-4" />
                Phase 2 — Executing
                {phase === "executing" ? (
                  <Loader2 className="ml-auto h-4 w-4 animate-spin" />
                ) : (
                  <CheckCircle2 className="ml-auto h-4 w-4" />
                )}
              </div>
              <div className="mb-3">
                <Progress value={progress} className="h-2" />
              </div>
              <div className="space-y-2">
                {steps.map((step) => (
                  <div
                    key={step.id}
                    className="flex items-center gap-3 text-sm"
                  >
                    {step.status === "done" && (
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
                    )}
                    {step.status === "running" && (
                      <Loader2 className="h-4 w-4 shrink-0 animate-spin text-amber-500" />
                    )}
                    {step.status === "pending" && (
                      <Circle className="text-muted-foreground h-4 w-4 shrink-0" />
                    )}
                    {step.status === "error" && (
                      <AlertCircle className="h-4 w-4 shrink-0 text-red-500" />
                    )}
                    <span
                      className={
                        step.status === "done"
                          ? "text-foreground font-medium"
                          : step.status === "running"
                            ? "font-medium text-amber-700 dark:text-amber-300"
                            : "text-muted-foreground"
                      }
                    >
                      {step.label}
                    </span>
                    {step.status === "running" && (
                      <ChevronRight className="text-muted-foreground ml-auto h-3.5 w-3.5 animate-pulse" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Phase: Verifying */}
          {(phase === "verifying" || phase === "done") && (
            <div
              className={`rounded-lg border p-4 ${PHASE_CONFIG.verifying.bg} ${PHASE_CONFIG.verifying.border}`}
            >
              <div
                className={`mb-3 flex items-center gap-2 font-medium ${PHASE_CONFIG.verifying.color}`}
              >
                <ShieldCheck className="h-4 w-4" />
                Phase 3 — Verifying
                {phase === "verifying" ? (
                  <Loader2 className="ml-auto h-4 w-4 animate-spin" />
                ) : (
                  <CheckCircle2 className="ml-auto h-4 w-4" />
                )}
              </div>
              {phase === "done" && (
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {VERIFY_RESULTS.map((r) => (
                    <div
                      key={r.label}
                      className="bg-background/60 rounded-md border p-2 text-center"
                    >
                      <div className="text-muted-foreground mb-0.5 text-xs">
                        {r.label}
                      </div>
                      <div
                        className={`text-sm font-bold ${r.passed ? "text-emerald-600 dark:text-emerald-400" : "text-amber-600 dark:text-amber-400"}`}
                      >
                        {r.score}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Final result */}
          {phase === "done" && (
            <>
              <Separator />
              <div className="bg-muted/50 rounded-lg p-4 text-sm">
                <p className="mb-1 font-semibold text-emerald-600 dark:text-emerald-400">
                  Agent completed successfully
                </p>
                <p className="text-muted-foreground">
                  All 5 steps executed in 4.7s. Report generated with 3
                  actionable insights, 2 trend analyses, and 1 risk flag. Ready
                  for review.
                </p>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
