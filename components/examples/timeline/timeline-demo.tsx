import {
  Timeline,
  TimelineBody,
  TimelineHeader,
  TimelineIcon,
  TimelineItem,
  TimelineSeparator,
} from "@/components/ui/timeline"

export default function TimelineDemo() {
  return (
    <Timeline color="secondary" orientation="vertical">
      <TimelineItem>
        <TimelineHeader>
          <TimelineSeparator />
          <TimelineIcon className="h-3 w-3" />
        </TimelineHeader>
        <TimelineBody className="-translate-y-1.5">
          <div className="space-y-1">
            <h3 className="text-base leading-none font-semibold">
              Project Kickoff
            </h3>
            <p className="text-muted-foreground text-xs">January 15, 2024</p>
          </div>
          <p className="text-muted-foreground mt-3 text-sm">
            Successfully launched the initial project phase with all team
            members aligned on goals and objectives. The foundation has been set
            for future milestones.
          </p>
        </TimelineBody>
      </TimelineItem>
      <TimelineItem>
        <TimelineHeader>
          <TimelineSeparator />
          <TimelineIcon className="h-3 w-3" />
        </TimelineHeader>
        <TimelineBody className="-translate-y-1.5">
          <div className="space-y-1">
            <h3 className="text-base leading-none font-semibold">
              First Milestone Achieved
            </h3>
            <p className="text-muted-foreground text-xs">March 22, 2024</p>
          </div>
          <p className="text-muted-foreground mt-3 text-sm">
            Completed the first major milestone ahead of schedule. The team
            demonstrated exceptional collaboration and delivered high-quality
            results that exceeded expectations.
          </p>
        </TimelineBody>
      </TimelineItem>
      <TimelineItem>
        <TimelineHeader>
          <TimelineIcon className="h-3 w-3" />
        </TimelineHeader>
        <TimelineBody className="-translate-y-1.5">
          <div className="space-y-1">
            <h3 className="text-base leading-none font-semibold">
              Project Completion
            </h3>
            <p className="text-muted-foreground text-xs">June 10, 2024</p>
          </div>
          <p className="text-muted-foreground mt-3 text-sm">
            Successfully completed the project with all deliverables met. The
            final review showed outstanding results and positive feedback from
            all stakeholders.
          </p>
        </TimelineBody>
      </TimelineItem>
    </Timeline>
  )
}
