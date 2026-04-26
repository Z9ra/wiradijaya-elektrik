import { Bell, CreditCard, DollarSign } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Timeline,
  TimelineBody,
  TimelineHeader,
  TimelineIcon,
  TimelineItem,
} from "@/components/ui/timeline"

export default function ActivitiesTimeline() {
  return (
    <Timeline orientation="vertical" className="max-w-md">
      <div className="flex flex-col gap-3">
        <TimelineItem>
          <Card className="flex w-full items-start gap-3 px-4 py-3 transition-shadow hover:shadow-md">
            <TimelineHeader>
              <TimelineIcon>
                <Bell className="h-4 w-4" />
              </TimelineIcon>
            </TimelineHeader>
            <TimelineBody className="flex-1 !pb-0">
              <div className="space-y-0.5">
                <h3 className="text-sm leading-none font-semibold">
                  $2,400 Design changes
                </h3>
                <p className="text-muted-foreground text-xs">22 DEC 7:20 PM</p>
              </div>
            </TimelineBody>
          </Card>
        </TimelineItem>
        <TimelineItem>
          <Card className="flex w-full items-start gap-3 px-4 py-3 transition-shadow hover:shadow-md">
            <TimelineHeader>
              <TimelineIcon>
                <CreditCard className="h-4 w-4" />
              </TimelineIcon>
            </TimelineHeader>
            <TimelineBody className="flex-1 !pb-0">
              <div className="space-y-0.5">
                <h3 className="text-sm leading-none font-semibold">
                  New order #1832412
                </h3>
                <p className="text-muted-foreground text-xs">21 DEC 11 PM</p>
              </div>
            </TimelineBody>
          </Card>
        </TimelineItem>
        <TimelineItem>
          <Card className="flex w-full items-start gap-3 px-4 py-3 transition-shadow hover:shadow-md">
            <TimelineHeader>
              <TimelineIcon>
                <DollarSign className="h-4 w-4" />
              </TimelineIcon>
            </TimelineHeader>
            <TimelineBody className="flex-1 !pb-0">
              <div className="space-y-0.5">
                <h3 className="text-sm leading-none font-semibold">
                  Payment completed for order #4395133
                </h3>
                <p className="text-muted-foreground text-xs">20 DEC 2:20 AM</p>
              </div>
            </TimelineBody>
          </Card>
        </TimelineItem>
      </div>
    </Timeline>
  )
}
