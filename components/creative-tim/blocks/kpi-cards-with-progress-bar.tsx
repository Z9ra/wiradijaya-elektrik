import { Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardFooter } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function KpiCardsWithProgressBar() {
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
        <Button variant="outline" className="w-full sm:w-auto">
          View Report
        </Button>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="overflow-hidden">
          <div className="p-4">
            <p className="text-muted-foreground mb-2 block text-xs font-semibold">
              Sales Revenue
            </p>
            <p className="mb-1 block text-lg font-semibold md:text-xl lg:text-2xl">
              10,484
            </p>
          </div>
          <div className="px-4 pt-0 pb-4">
            <div className="w-full space-y-2">
              <small className="flex items-center justify-between text-xs font-semibold">
                <div>
                  55%{" "}
                  <span className="text-muted-foreground">
                    of monthly target
                  </span>
                </div>
                <span>20k</span>
              </small>
              <Progress value={55} className="h-2" />
            </div>
          </div>
          <CardFooter className="flex items-center gap-1.5 border-t p-4">
            <Clock className="text-muted-foreground h-3.5 w-3.5 stroke-2" />
            <p className="text-xs font-semibold">
              <span className="text-muted-foreground">Last Update:</span>{" "}
              24.04.2024
            </p>
          </CardFooter>
        </Card>
        <Card className="overflow-hidden">
          <div className="p-4">
            <p className="text-muted-foreground mb-2 block text-xs font-semibold">
              Website Traffic
            </p>
            <p className="mb-1 block text-lg font-semibold md:text-xl lg:text-2xl">
              250,000
            </p>
          </div>
          <div className="px-4 pt-0 pb-4">
            <div className="w-full space-y-2">
              <small className="flex items-center justify-between text-xs font-semibold">
                <div>
                  55%{" "}
                  <span className="text-muted-foreground">
                    of monthly target
                  </span>
                </div>
                <span>400k</span>
              </small>
              <Progress value={55} className="h-2" />
            </div>
          </div>
          <CardFooter className="flex items-center gap-1.5 border-t p-4">
            <Clock className="text-muted-foreground h-3.5 w-3.5 stroke-2" />
            <p className="text-xs font-semibold">
              <span className="text-muted-foreground">Last Update:</span>{" "}
              24.04.2024
            </p>
          </CardFooter>
        </Card>
        <Card className="overflow-hidden">
          <div className="p-4">
            <p className="text-muted-foreground mb-2 block text-xs font-semibold">
              Coupon Sales
            </p>
            <p className="mb-1 block text-lg font-semibold md:text-xl lg:text-2xl">
              $10,982.10
            </p>
          </div>
          <div className="px-4 pt-0 pb-4">
            <div className="w-full space-y-2">
              <small className="flex items-center justify-between text-xs font-semibold">
                <div>
                  55%{" "}
                  <span className="text-muted-foreground">
                    of monthly target
                  </span>
                </div>
                <span>$20k</span>
              </small>
              <Progress value={55} className="h-2" />
            </div>
          </div>
          <CardFooter className="flex items-center gap-1.5 border-t p-4">
            <Clock className="text-muted-foreground h-3.5 w-3.5 stroke-2" />
            <p className="text-xs font-semibold">
              <span className="text-muted-foreground">Last Update:</span>{" "}
              24.04.2024
            </p>
          </CardFooter>
        </Card>
        <Card className="overflow-hidden">
          <div className="p-4">
            <p className="text-muted-foreground mb-2 block text-xs font-semibold">
              Audience
            </p>
            <p className="mb-1 block text-lg font-semibold md:text-xl lg:text-2xl">
              30,845
            </p>
          </div>
          <div className="px-4 pt-0 pb-4">
            <div className="w-full space-y-2">
              <small className="flex items-center justify-between text-xs font-semibold">
                <div>
                  55%{" "}
                  <span className="text-muted-foreground">
                    of monthly target
                  </span>
                </div>
                <span>60k</span>
              </small>
              <Progress value={55} className="h-2" />
            </div>
          </div>
          <CardFooter className="flex items-center gap-1.5 border-t p-4">
            <Clock className="text-muted-foreground h-3.5 w-3.5 stroke-2" />
            <p className="text-xs font-semibold">
              <span className="text-muted-foreground">Last Update:</span>{" "}
              24.04.2024
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
