"use client"

import { Check, Minus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

function CheckIcon() {
  return <Check className="mx-auto h-5 w-5 stroke-2 text-green-600" />
}

function MinusIcon() {
  return <Minus className="text-muted-foreground mx-auto h-5 w-5 stroke-2" />
}

function Request() {
  return (
    <p className="text-muted-foreground block text-center text-sm">
      Upon Request
    </p>
  )
}

const PLANS = [
  [
    "Community Support",
    <CheckIcon key={1} />,
    <CheckIcon key={2} />,
    <CheckIcon key={3} />,
  ],
  [
    "100+ Example Pages",
    <CheckIcon key={1} />,
    <CheckIcon key={2} />,
    <CheckIcon key={3} />,
  ],
  [
    "50+ Section Examples",
    <CheckIcon key={1} />,
    <CheckIcon key={2} />,
    <CheckIcon key={3} />,
  ],
  ["Multiple use", "", <Request key={2} />, <Request key={3} />],
  [
    <span key={1} className="text-foreground text-lg font-semibold">
      Developer Tools
    </span>,
    "",
    "",
    "",
  ],
  [
    "Custom messages",
    <MinusIcon key={1} />,
    <CheckIcon key={2} />,
    <CheckIcon key={3} />,
  ],
  [
    "Multiple requests",
    <MinusIcon key={1} />,
    <MinusIcon key={2} />,
    <CheckIcon key={3} />,
  ],
]

export default function PricingComparisonTable() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-foreground mb-4 text-3xl font-bold tracking-tight">
            Pick the best plan for you
          </h2>
          <p className="text-muted-foreground text-lg">
            You have Free Unlimited Updates and Premium Support on each package.
          </p>
        </div>
        <Card className="mt-16 w-full overflow-scroll">
          <table className="w-full min-w-[768px] table-auto">
            <thead>
              <tr className="border-border border-b">
                <th className="px-6 py-3 text-left">
                  <span className="text-foreground text-lg font-semibold">
                    Space Individual
                  </span>
                </th>
                <th className="space-y-1 px-6 py-3 text-center">
                  <span className="text-foreground font-semibold">Team</span>
                  <p className="text-foreground text-lg font-semibold">$39</p>
                </th>
                <th className="space-y-1 px-6 py-3 text-center">
                  <span className="text-foreground font-semibold">Growth</span>
                  <p className="text-foreground text-lg font-semibold">$79</p>
                </th>
                <th className="space-y-1 px-6 py-3 text-center">
                  <span className="text-foreground font-semibold">
                    Enterprise
                  </span>
                  <p className="text-foreground text-lg font-semibold">$99</p>
                </th>
              </tr>
            </thead>
            <tbody>
              {PLANS.map((plan, key) => (
                <tr key={key} className="border-border border-b">
                  <td className="p-6 text-left">
                    <p className="text-muted-foreground">{plan[0]}</p>
                  </td>
                  <td className="p-6 text-center">{plan[1]}</td>
                  <td className="p-6 text-center">{plan[2]}</td>
                  <td className="p-6 text-center">{plan[3]}</td>
                </tr>
              ))}
              <tr>
                <td className="p-6 text-left"></td>
                <td className="p-6 text-center">
                  <Button>Choose Plan</Button>
                </td>
                <td className="p-6 text-center">
                  <Button>Choose Plan</Button>
                </td>
                <td className="p-6 text-center">
                  <Button>Choose Plan</Button>
                </td>
              </tr>
            </tbody>
          </table>
        </Card>
      </div>
    </section>
  )
}
