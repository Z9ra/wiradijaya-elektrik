"use client"

import * as React from "react"
import { BookOpen, CheckCircle2, Rocket, Wrench } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Timeline,
  TimelineBody,
  TimelineHeader,
  TimelineIcon,
  TimelineItem,
  TimelineSeparator,
} from "@/components/ui/timeline"

const UPDATES = [
  {
    id: "v2.4",
    version: "v2.4",
    date: "Feb 5, 2026",
    title: "Automations Engine",
    description:
      "New workflow builder with reusable templates and live execution logs.",
    tags: ["Workflow", "Automation"],
    icon: Rocket,
    color: "success" as const,
  },
  {
    id: "v2.3",
    version: "v2.3",
    date: "Jan 21, 2026",
    title: "Billing Controls",
    description:
      "Add-on manager, usage alerts, and overage protection toggles.",
    tags: ["Billing", "Usage"],
    icon: Wrench,
    color: "info" as const,
  },
  {
    id: "v2.2",
    version: "v2.2",
    date: "Jan 8, 2026",
    title: "Security & Compliance",
    description: "Audit log exports, MFA enforcement, and session policies.",
    tags: ["Security", "Compliance"],
    icon: CheckCircle2,
    color: "warning" as const,
  },
]

export default function ChangelogTimeline() {
  const [expanded, setExpanded] = React.useState<Record<string, boolean>>({})

  const toggleExpanded = (id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const expandAll = () => {
    setExpanded(
      UPDATES.reduce((acc, update) => ({ ...acc, [update.id]: true }), {})
    )
  }

  const collapseAll = () => {
    setExpanded({})
  }

  return (
    <div className="mx-auto max-w-5xl p-6">
      <Card className="bg-card border p-8">
        <div className="flex flex-wrap items-start justify-between gap-4 border-b pb-6">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
              <BookOpen className="text-primary h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                Changelog Timeline
              </h2>
              <p className="text-muted-foreground mt-1 text-sm">
                Track product updates and release notes by version.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Button variant="outline" onClick={expandAll}>
              Expand all
            </Button>
            <Button variant="outline" onClick={collapseAll}>
              Collapse
            </Button>
            <Button variant="outline">View release archive</Button>
          </div>
        </div>

        <Timeline orientation="vertical" color="primary" className="mt-8">
          {UPDATES.map((update, index) => {
            const Icon = update.icon
            const isExpanded = expanded[update.id]
            return (
              <TimelineItem key={update.id}>
                <TimelineHeader>
                  <TimelineIcon className="bg-primary text-primary-foreground">
                    <Icon className="h-3 w-3" />
                  </TimelineIcon>
                  {index < UPDATES.length - 1 ? <TimelineSeparator /> : null}
                </TimelineHeader>
                <TimelineBody>
                  <Card className="bg-muted/30 border p-4">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">{update.version}</Badge>
                          <span className="text-muted-foreground text-xs">
                            {update.date}
                          </span>
                        </div>
                        <h3 className="mt-2 text-lg font-semibold">
                          {update.title}
                        </h3>
                        <p className="text-muted-foreground mt-2 text-sm">
                          {isExpanded
                            ? update.description
                            : `${update.description.slice(0, 60)}...`}
                        </p>
                      </div>
                      <Badge
                        variant="outline"
                        className="text-muted-foreground"
                      >
                        {update.color}
                      </Badge>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {update.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleExpanded(update.id)}
                      >
                        {isExpanded ? "Show less" : "Show more"}
                      </Button>
                    </div>
                  </Card>
                </TimelineBody>
              </TimelineItem>
            )
          })}
        </Timeline>
      </Card>
    </div>
  )
}
