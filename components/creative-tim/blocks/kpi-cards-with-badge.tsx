import { FileText, TrendingDown, TrendingUp } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function KpiCardsWithBadge() {
  return (
    <div>
      <div className="flex flex-col flex-wrap gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="mb-0.5 text-xl font-semibold">Performance Snapshot</p>
          <p className="text-muted-foreground text-sm">
            Get a quick overview of key performance indicators with these four
            cards.
          </p>
        </div>
        <Button variant="outline" className="w-full gap-2 sm:w-auto">
          <FileText className="h-4 w-4" />
          View Report
        </Button>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="overflow-hidden transition-all hover:shadow-md">
          <div className="flex items-center justify-between gap-4 p-4">
            <p className="text-muted-foreground text-sm font-semibold">
              Revenue
            </p>
            <Badge
              variant="secondary"
              className="gap-1 bg-green-500/10 text-green-500 hover:bg-green-500/10"
            >
              <TrendingUp className="h-3 w-3" />
              +14%
            </Badge>
          </div>
          <Separator />
          <div className="bg-muted/20 px-4 py-3">
            <p className="text-lg font-bold md:text-xl lg:text-2xl">
              $50,846.90
            </p>
          </div>
        </Card>
        <Card className="overflow-hidden transition-all hover:shadow-md">
          <div className="flex items-center justify-between gap-4 p-4">
            <p className="text-muted-foreground text-sm font-semibold">
              Coupon Sales
            </p>
            <Badge
              variant="secondary"
              className="gap-1 bg-green-500/10 text-green-500 hover:bg-green-500/10"
            >
              <TrendingUp className="h-3 w-3" />
              +12%
            </Badge>
          </div>
          <Separator />
          <div className="bg-muted/20 px-4 py-3">
            <p className="text-lg font-bold md:text-xl lg:text-2xl">$10,342</p>
          </div>
        </Card>
        <Card className="overflow-hidden transition-all hover:shadow-md">
          <div className="flex items-center justify-between gap-4 p-4">
            <p className="text-muted-foreground text-sm font-semibold">
              Total Audience
            </p>
            <Badge
              variant="secondary"
              className="gap-1 bg-red-500/10 text-red-500 hover:bg-red-500/10"
            >
              <TrendingDown className="h-3 w-3" />
              -10%
            </Badge>
          </div>
          <Separator />
          <div className="bg-muted/20 px-4 py-3">
            <p className="text-lg font-bold md:text-xl lg:text-2xl">19,720</p>
          </div>
        </Card>
        <Card className="overflow-hidden transition-all hover:shadow-md">
          <div className="flex items-center justify-between gap-4 p-4">
            <p className="text-muted-foreground text-sm font-semibold">
              Website Traffic
            </p>
            <Badge
              variant="secondary"
              className="gap-1 bg-green-500/10 text-green-500 hover:bg-green-500/10"
            >
              <TrendingUp className="h-3 w-3" />
              +1.4%
            </Badge>
          </div>
          <Separator />
          <div className="bg-muted/20 px-4 py-3">
            <p className="text-lg font-bold md:text-xl lg:text-2xl">20,000</p>
          </div>
        </Card>
      </div>
    </div>
  )
}
