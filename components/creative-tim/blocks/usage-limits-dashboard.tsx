"use client"

import * as React from "react"
import { BarChart3, Calendar, ShieldCheck, Zap } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Switch } from "@/components/ui/switch"

type UsageStatus = "Healthy" | "Near limit" | "Over limit"

type UsageItem = {
  id: string
  label: string
  used: string
  limit: string
  percent: number
  status: UsageStatus
  reset: string
}

const USAGE_LIMITS: UsageItem[] = [
  {
    id: "requests",
    label: "API requests",
    used: "820k",
    limit: "1M",
    percent: 82,
    status: "Healthy",
    reset: "Resets in 12 days",
  },
  {
    id: "storage",
    label: "File storage",
    used: "72 GB",
    limit: "100 GB",
    percent: 72,
    status: "Healthy",
    reset: "Renews monthly",
  },
  {
    id: "seats",
    label: "Team seats",
    used: "18",
    limit: "20",
    percent: 90,
    status: "Near limit",
    reset: "Based on active members",
  },
  {
    id: "build-minutes",
    label: "Build minutes",
    used: "2,900",
    limit: "3,000",
    percent: 97,
    status: "Near limit",
    reset: "Resets on Mar 1, 2026",
  },
]

const STATUS_STYLES: Record<UsageStatus, string> = {
  Healthy: "border-emerald-500/50 bg-emerald-50 text-emerald-700",
  "Near limit": "border-amber-500/50 bg-amber-50 text-amber-700",
  "Over limit": "border-rose-500/50 bg-rose-50 text-rose-700",
}

const ADDONS = [
  { name: "Extra build minutes", value: "+5,000 / month", status: "Active" },
  { name: "Dedicated IP", value: "US East region", status: "Active" },
  { name: "SAML SSO", value: "Enterprise security", status: "Trial" },
]

export default function UsageLimitsDashboard() {
  const [limits, setLimits] = React.useState(USAGE_LIMITS)
  const [addons, setAddons] = React.useState(ADDONS)
  const [plan, setPlan] = React.useState("Pro Plan")
  const [overageProtection, setOverageProtection] = React.useState(true)
  const [autoUpgrade, setAutoUpgrade] = React.useState(false)

  const bumpUsage = (id: string) => {
    setLimits((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              percent: Math.min(100, item.percent + 6),
              status:
                item.percent + 6 >= 100
                  ? "Over limit"
                  : item.percent + 6 >= 90
                    ? "Near limit"
                    : "Healthy",
            }
          : item
      )
    )
  }

  const handleUpgrade = () => {
    const upgraded = plan !== "Business Plan"
    setPlan(upgraded ? "Business Plan" : "Pro Plan")
    if (!upgraded) {
      setLimits(USAGE_LIMITS)
      return
    }
    setLimits((prev) =>
      prev.map((item) => ({
        ...item,
        percent: Math.max(10, item.percent - 25),
        status: "Healthy",
      }))
    )
  }

  const toggleAddon = (name: string) => {
    setAddons((prev) =>
      prev.map((addon) =>
        addon.name === name
          ? {
              ...addon,
              status: addon.status === "Active" ? "Paused" : "Active",
            }
          : addon
      )
    )
  }

  return (
    <div className="mx-auto max-w-6xl p-6">
      <Card className="bg-card border p-8">
        <div className="flex flex-wrap items-start justify-between gap-4 border-b pb-6">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
              <BarChart3 className="text-primary h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                Usage Limits Dashboard
              </h2>
              <p className="text-muted-foreground mt-1 text-sm">
                Monitor plan usage and upgrade before you hit limits.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Badge
              variant="outline"
              className="border-blue-500/50 bg-blue-50 text-blue-700"
            >
              {plan}
            </Badge>
            <Button onClick={handleUpgrade}>
              {plan === "Pro Plan" ? "Upgrade Plan" : "Revert plan"}
            </Button>
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.4fr,1fr]">
          <div className="space-y-4">
            {limits.map((item) => (
              <Card key={item.id} className="bg-muted/30 border p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-semibold">{item.label}</p>
                    <p className="text-muted-foreground text-sm">
                      {item.used} of {item.limit}
                    </p>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => bumpUsage(item.id)}
                  >
                    Add usage
                  </Button>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <Badge
                    variant="outline"
                    className={STATUS_STYLES[item.status]}
                  >
                    {item.status}
                  </Badge>
                  <span className="text-muted-foreground text-xs">
                    {item.percent}%
                  </span>
                </div>
                <Progress value={item.percent} className="mt-3" />
                <p className="text-muted-foreground mt-2 text-xs">
                  {item.reset}
                </p>
              </Card>
            ))}
          </div>

          <div className="space-y-4">
            <Card className="bg-muted/30 border p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Plan summary</h3>
                <ShieldCheck className="text-primary h-5 w-5" />
              </div>
              <div className="mt-4 space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Billing cycle</span>
                  <span className="font-medium">
                    {autoUpgrade ? "Flexible" : "Monthly"}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Next reset</span>
                  <span className="flex items-center gap-2 font-medium">
                    <Calendar className="h-4 w-4" />
                    Mar 1, 2026
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Overages</span>
                  <span className="font-medium">$0.03 per 1k requests</span>
                </div>
              </div>

              <div className="mt-4 space-y-3">
                <div className="bg-background flex items-center justify-between rounded-lg border p-3">
                  <div>
                    <Label
                      htmlFor="overage-protection"
                      className="text-sm font-medium"
                    >
                      Overage protection
                    </Label>
                    <p className="text-muted-foreground text-xs">
                      Pause traffic when limits are hit.
                    </p>
                  </div>
                  <Switch
                    id="overage-protection"
                    checked={overageProtection}
                    onCheckedChange={setOverageProtection}
                  />
                </div>
                <div className="bg-background flex items-center justify-between rounded-lg border p-3">
                  <div>
                    <Label
                      htmlFor="auto-upgrade"
                      className="text-sm font-medium"
                    >
                      Auto-upgrade
                    </Label>
                    <p className="text-muted-foreground text-xs">
                      Move to the next plan when needed.
                    </p>
                  </div>
                  <Switch
                    id="auto-upgrade"
                    checked={autoUpgrade}
                    onCheckedChange={setAutoUpgrade}
                  />
                </div>
              </div>

              <Button className="mt-4 w-full">Manage Plan</Button>
            </Card>

            <Card className="bg-muted/30 border p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold">Active add-ons</h3>
                  <p className="text-muted-foreground text-sm">
                    Expand limits with targeted upgrades.
                  </p>
                </div>
                <Zap className="text-primary h-5 w-5" />
              </div>
              <div className="mt-4 space-y-3">
                {addons.map((addon) => (
                  <div
                    key={addon.name}
                    className="bg-background flex items-center justify-between rounded-lg border p-3"
                  >
                    <div>
                      <p className="text-sm font-medium">{addon.name}</p>
                      <p className="text-muted-foreground text-xs">
                        {addon.value}
                      </p>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => toggleAddon(addon.name)}
                    >
                      {addon.status}
                    </Button>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="mt-4 w-full">
                Add more capacity
              </Button>
            </Card>
          </div>
        </div>
      </Card>
    </div>
  )
}
