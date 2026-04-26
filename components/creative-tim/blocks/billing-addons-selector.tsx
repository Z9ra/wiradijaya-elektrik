"use client"

import * as React from "react"
import { CreditCard, Plus, Shield, Zap } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"

type AddOn = {
  id: string
  name: string
  description: string
  price: number
  badge?: string
}

const ADD_ONS: AddOn[] = [
  {
    id: "audit-logs",
    name: "Audit logs",
    description: "Track every admin change with searchable logs.",
    price: 19,
    badge: "Popular",
  },
  {
    id: "priority-support",
    name: "Priority support",
    description: "Dedicated Slack channel and 2-hour response time.",
    price: 39,
  },
  {
    id: "extra-automation",
    name: "Automation pack",
    description: "Add 10 more automation workflows per month.",
    price: 25,
  },
  {
    id: "compliance",
    name: "Compliance exports",
    description: "SOC2 reports and data export assistance.",
    price: 29,
  },
]

const BASE_PLAN_PRICE = 79

export default function BillingAddonsSelector() {
  const [selectedAddons, setSelectedAddons] = React.useState<string[]>([
    "audit-logs",
    "priority-support",
  ])
  const [annualBilling, setAnnualBilling] = React.useState(false)
  const [autoRenew, setAutoRenew] = React.useState(true)
  const [invoiceFinance, setInvoiceFinance] = React.useState(false)

  const toggleAddon = (id: string, checked: boolean) => {
    setSelectedAddons((prev) =>
      checked ? [...prev, id] : prev.filter((item) => item !== id)
    )
  }

  const addonsTotal = ADD_ONS.filter((addon) =>
    selectedAddons.includes(addon.id)
  ).reduce((sum, addon) => sum + addon.price, 0)

  const monthlyTotal = BASE_PLAN_PRICE + addonsTotal
  const yearlyTotal = Math.round(monthlyTotal * 12 * 0.85)

  const formatPrice = (value: number) =>
    value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    })

  return (
    <div className="mx-auto max-w-6xl p-6">
      <Card className="bg-card border p-8">
        <div className="flex flex-wrap items-start justify-between gap-4 border-b pb-6">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
              <CreditCard className="text-primary h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                Billing Add-ons
              </h2>
              <p className="text-muted-foreground mt-1 text-sm">
                Customize your plan with flexible add-ons and live totals.
              </p>
            </div>
          </div>
          <Badge
            variant="outline"
            className="border-blue-500/50 bg-blue-50 text-blue-700"
          >
            Growth Plan
          </Badge>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.4fr,1fr]">
          <div className="space-y-4">
            {ADD_ONS.map((addon) => {
              const isChecked = selectedAddons.includes(addon.id)
              return (
                <Card
                  key={addon.id}
                  className="bg-muted/30 flex flex-wrap items-start justify-between gap-4 border p-4"
                >
                  <div className="flex items-start gap-4">
                    <Checkbox
                      id={addon.id}
                      checked={isChecked}
                      onCheckedChange={(checked) =>
                        toggleAddon(addon.id, Boolean(checked))
                      }
                    />
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <Label htmlFor={addon.id} className="font-semibold">
                          {addon.name}
                        </Label>
                        {addon.badge ? (
                          <Badge variant="secondary">{addon.badge}</Badge>
                        ) : null}
                      </div>
                      <p className="text-muted-foreground mt-1 text-sm">
                        {addon.description}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold">
                      {formatPrice(addon.price)} / mo
                    </p>
                    <p className="text-muted-foreground text-xs">
                      per workspace
                    </p>
                  </div>
                </Card>
              )
            })}

            <Card className="bg-muted/30 border p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold">Annual billing</p>
                  <p className="text-muted-foreground text-xs">
                    Save 15% when billed yearly.
                  </p>
                </div>
                <Switch
                  id="annual-billing"
                  checked={annualBilling}
                  onCheckedChange={setAnnualBilling}
                />
              </div>
            </Card>
          </div>

          <Card className="bg-muted/30 border p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Order summary</h3>
              <Shield className="text-primary h-5 w-5" />
            </div>
            <div className="mt-4 space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Base plan</span>
                <span className="font-medium">
                  {formatPrice(BASE_PLAN_PRICE)} / mo
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Selected add-ons</span>
                <span className="font-medium">
                  {formatPrice(addonsTotal)} / mo
                </span>
              </div>
              <Separator />
              <div className="flex items-center justify-between text-base font-semibold">
                <span>Total</span>
                <span>
                  {annualBilling
                    ? `${formatPrice(yearlyTotal)} / yr`
                    : `${formatPrice(monthlyTotal)} / mo`}
                </span>
              </div>
              {annualBilling ? (
                <p className="text-muted-foreground text-xs">
                  You save {formatPrice(monthlyTotal * 12 - yearlyTotal)}{" "}
                  yearly.
                </p>
              ) : null}
            </div>

            <div className="mt-6 space-y-3">
              <div className="bg-background flex items-center justify-between rounded-lg border p-3">
                <div>
                  <p className="text-sm font-medium">Auto-renew add-ons</p>
                  <p className="text-muted-foreground text-xs">
                    Keep add-ons active on renewals.
                  </p>
                </div>
                <Switch
                  id="auto-renew"
                  checked={autoRenew}
                  onCheckedChange={setAutoRenew}
                />
              </div>
              <div className="bg-background flex items-center justify-between rounded-lg border p-3">
                <div>
                  <p className="text-sm font-medium">Invoice to finance</p>
                  <p className="text-muted-foreground text-xs">
                    Send a summary invoice to billing.
                  </p>
                </div>
                <Switch
                  id="invoice-finance"
                  checked={invoiceFinance}
                  onCheckedChange={setInvoiceFinance}
                />
              </div>
            </div>

            <Button className="mt-5 w-full">
              <Plus className="mr-2 h-4 w-4" />
              Confirm add-ons
            </Button>
            <div className="text-muted-foreground mt-3 flex items-center gap-2 text-xs">
              <Zap className="h-4 w-4" />
              Changes apply immediately to your workspace.
            </div>
          </Card>
        </div>
      </Card>
    </div>
  )
}
