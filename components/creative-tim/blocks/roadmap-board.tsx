"use client"

import * as React from "react"
import { ChevronUp, Plus, Sparkles } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const COLUMNS = [
  {
    id: "now",
    title: "Now",
    description: "In progress this sprint",
    color: "border-emerald-500/40 bg-emerald-50 text-emerald-700",
    items: [
      {
        id: "saml-sso",
        title: "SAML SSO Support",
        detail: "Enterprise-ready authentication rollout.",
        votes: 128,
        tag: "Security",
      },
      {
        id: "usage-billing",
        title: "Usage-based Billing",
        detail: "Real-time usage sync and proration.",
        votes: 96,
        tag: "Billing",
      },
    ],
  },
  {
    id: "next",
    title: "Next",
    description: "Coming up soon",
    color: "border-blue-500/40 bg-blue-50 text-blue-700",
    items: [
      {
        id: "ai-release-notes",
        title: "AI release notes",
        detail: "Generate summaries for every deploy.",
        votes: 64,
        tag: "AI",
      },
      {
        id: "workspace-templates",
        title: "Workspace templates",
        detail: "Ship preconfigured dashboards faster.",
        votes: 52,
        tag: "Workflow",
      },
    ],
  },
  {
    id: "later",
    title: "Later",
    description: "Ideas in discovery",
    color: "border-amber-500/40 bg-amber-50 text-amber-700",
    items: [
      {
        id: "data-residency",
        title: "Multi-region data residency",
        detail: "Choose EU or US primary data storage.",
        votes: 41,
        tag: "Compliance",
      },
      {
        id: "mobile-admin",
        title: "Mobile admin",
        detail: "Manage ops on the go.",
        votes: 29,
        tag: "Mobile",
      },
    ],
  },
]

export default function RoadmapBoard() {
  const [columns, setColumns] = React.useState(COLUMNS)
  const [votedItems, setVotedItems] = React.useState<Record<string, boolean>>(
    {}
  )

  const handleVote = (columnId: string, itemId: string) => {
    setColumns((prev) =>
      prev.map((column) =>
        column.id === columnId
          ? {
              ...column,
              items: column.items.map((item) => {
                if (item.id !== itemId) return item
                const voted = votedItems[itemId]
                return {
                  ...item,
                  votes: voted ? item.votes - 1 : item.votes + 1,
                }
              }),
            }
          : column
      )
    )
    setVotedItems((prev) => ({ ...prev, [itemId]: !prev[itemId] }))
  }

  return (
    <div className="mx-auto max-w-6xl p-6">
      <Card className="bg-card border p-8">
        <div className="flex flex-wrap items-start justify-between gap-4 border-b pb-6">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
              <Sparkles className="text-primary h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                Product Roadmap
              </h2>
              <p className="text-muted-foreground mt-1 text-sm">
                Vote on features and track what is shipping next.
              </p>
            </div>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Submit idea
          </Button>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {columns.map((column) => (
            <Card key={column.id} className="bg-muted/30 border p-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{column.title}</h3>
                  <Badge variant="outline" className={column.color}>
                    {column.items.length} items
                  </Badge>
                </div>
                <p className="text-muted-foreground text-sm">
                  {column.description}
                </p>
              </div>
              <div className="mt-4 space-y-3">
                {column.items.map((item) => (
                  <Card key={item.id} className="bg-background border p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-semibold">{item.title}</p>
                        <p className="text-muted-foreground mt-1 text-sm">
                          {item.detail}
                        </p>
                        <Badge variant="secondary" className="mt-3">
                          {item.tag}
                        </Badge>
                      </div>
                      <Button
                        size="sm"
                        variant={votedItems[item.id] ? "secondary" : "outline"}
                        onClick={() => handleVote(column.id, item.id)}
                      >
                        <ChevronUp className="mr-1 h-4 w-4" />
                        {item.votes}
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Card>
    </div>
  )
}
