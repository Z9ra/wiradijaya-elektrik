import { Gift, Send } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function ComplexKpiCards() {
  return (
    <div>
      <div className="flex flex-col flex-wrap gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="mb-0.5 text-base font-semibold">Reports Snapshot</p>
          <p className="text-muted-foreground text-sm">
            Upward arrow indicating an increase in revenue compared to the
            previous period.
          </p>
        </div>
        <div className="flex flex-col items-center gap-2 sm:flex-row">
          <Input
            type="date"
            placeholder="Select a date"
            className="w-full sm:w-48"
          />
          <Button variant="outline" className="w-full sm:w-auto">
            View Report
          </Button>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card className="overflow-hidden">
          <div className="flex items-center gap-3 p-4">
            <div className="grid h-12 w-12 place-items-center rounded border shadow-sm">
              <Gift className="h-5 w-5" />
            </div>
            <div className="space-y-0.5">
              <p className="text-sm font-semibold">Black Friday Campaign</p>
              <p className="text-muted-foreground text-sm">
                Important metrics from last campaign
              </p>
            </div>
          </div>
          <div className="flex items-start divide-x px-4 pt-2 pb-4">
            <div className="pr-4 lg:pr-8">
              <Badge
                variant="secondary"
                className="bg-green-500/10 text-green-500 hover:bg-green-500/10"
              >
                +$6.8
              </Badge>
              <p className="mt-2 mb-3 text-base font-bold md:text-lg lg:text-xl">
                $50,846.90
              </p>
              <p className="text-muted-foreground text-sm font-semibold">
                Revenue
              </p>
            </div>
            <div className="px-4 lg:px-8">
              <Badge
                variant="secondary"
                className="bg-green-500/10 text-green-500 hover:bg-green-500/10"
              >
                +$10
              </Badge>
              <p className="mt-2 mb-3 text-base font-bold md:text-lg lg:text-xl">
                10,342
              </p>
              <p className="text-muted-foreground text-sm font-semibold">
                Outbound Clicks
              </p>
            </div>
            <div className="pl-4 lg:pl-8">
              <Badge
                variant="secondary"
                className="bg-green-500/10 text-green-500 hover:bg-green-500/10"
              >
                +$2
              </Badge>
              <p className="mt-2 mb-3 text-base font-bold md:text-lg lg:text-xl">
                19,720
              </p>
              <p className="text-muted-foreground text-sm font-semibold">
                Total Audience
              </p>
            </div>
          </div>
        </Card>
        <Card className="overflow-hidden">
          <div className="flex items-center gap-3 p-4">
            <div className="grid h-12 w-12 place-items-center rounded border shadow-sm">
              <Send className="h-5 w-5" />
            </div>
            <div className="space-y-0.5">
              <p className="text-sm font-semibold">Cyber Monday Campaign</p>
              <p className="text-muted-foreground text-sm">
                Important metrics from last campaign
              </p>
            </div>
          </div>
          <div className="flex items-start divide-x px-4 pt-2 pb-4">
            <div className="pr-4 lg:pr-8">
              <Badge
                variant="secondary"
                className="bg-green-500/10 text-green-500 hover:bg-green-500/10"
              >
                +$6.8
              </Badge>
              <p className="mt-2 mb-3 text-base font-bold md:text-lg lg:text-xl">
                $10,846.00
              </p>
              <p className="text-muted-foreground text-sm font-semibold">
                Revenue
              </p>
            </div>
            <div className="px-4 lg:px-8">
              <Badge
                variant="secondary"
                className="bg-green-500/10 text-green-500 hover:bg-green-500/10"
              >
                +$10
              </Badge>
              <p className="mt-2 mb-3 text-base font-bold md:text-lg lg:text-xl">
                3,874
              </p>
              <p className="text-muted-foreground text-sm font-semibold">
                Outbound Clicks
              </p>
            </div>
            <div className="pl-4 lg:pl-8">
              <Badge
                variant="secondary"
                className="bg-red-500/10 text-red-500 hover:bg-red-500/10"
              >
                -$2
              </Badge>
              <p className="mt-2 mb-3 text-base font-bold md:text-lg lg:text-xl">
                5,930
              </p>
              <p className="text-muted-foreground text-sm font-semibold">
                Total Audience
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
