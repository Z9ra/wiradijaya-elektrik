import { Bell, DollarSign, Home } from "lucide-react"

import {
  Timeline,
  TimelineBody,
  TimelineHeader,
  TimelineIcon,
  TimelineItem,
  TimelineSeparator,
} from "@/components/ui/timeline"

export default function TimelineWithIcon() {
  return (
    <Timeline color="secondary" orientation="vertical">
      <TimelineItem>
        <TimelineHeader>
          <TimelineSeparator />
          <TimelineIcon>
            <Home className="h-4 w-4" />
          </TimelineIcon>
        </TimelineHeader>
        <TimelineBody className="-translate-y-1.5">
          <div className="space-y-1">
            <h3 className="text-base leading-none font-semibold">
              Office Setup Complete
            </h3>
            <p className="text-muted-foreground text-xs">February 8, 2024</p>
          </div>
          <p className="text-muted-foreground mt-3 text-sm">
            Successfully established the new office location with all necessary
            equipment and infrastructure in place. The team is ready to begin
            operations.
          </p>
        </TimelineBody>
      </TimelineItem>
      <TimelineItem>
        <TimelineHeader>
          <TimelineSeparator />
          <TimelineIcon>
            <Bell className="h-4 w-4" />
          </TimelineIcon>
        </TimelineHeader>
        <TimelineBody className="-translate-y-1.5">
          <div className="space-y-1">
            <h3 className="text-base leading-none font-semibold">
              Team Announcement
            </h3>
            <p className="text-muted-foreground text-xs">April 12, 2024</p>
          </div>
          <p className="text-muted-foreground mt-3 text-sm">
            Announced the expansion of our team with five new members joining
            across different departments. This strengthens our capabilities and
            accelerates growth.
          </p>
        </TimelineBody>
      </TimelineItem>
      <TimelineItem>
        <TimelineHeader>
          <TimelineIcon>
            <DollarSign className="h-4 w-4" />
          </TimelineIcon>
        </TimelineHeader>
        <TimelineBody className="-translate-y-1.5">
          <div className="space-y-1">
            <h3 className="text-base leading-none font-semibold">
              Funding Secured
            </h3>
            <p className="text-muted-foreground text-xs">May 30, 2024</p>
          </div>
          <p className="text-muted-foreground mt-3 text-sm">
            Successfully secured Series A funding of $5M from leading investors.
            This milestone enables us to scale operations and accelerate product
            development.
          </p>
        </TimelineBody>
      </TimelineItem>
    </Timeline>
  )
}
