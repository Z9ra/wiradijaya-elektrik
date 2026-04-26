import { Avatar, AvatarImage } from "@/components/ui/avatar"
import {
  Timeline,
  TimelineBody,
  TimelineHeader,
  TimelineIcon,
  TimelineItem,
  TimelineSeparator,
} from "@/components/ui/timeline"

export default function TimelineWithAvatar() {
  return (
    <Timeline color="secondary" orientation="vertical">
      <TimelineItem>
        <TimelineHeader>
          <TimelineSeparator />
          <TimelineIcon className="p-0.5">
            <Avatar className="h-full w-full">
              <AvatarImage
                src="https://images.unsplash.com/photo-1750223642533-1b74b17edae8?auto=format&fit=crop&q=80&w=400&h=400"
                alt="Sarah Johnson"
              />
            </Avatar>
          </TimelineIcon>
        </TimelineHeader>
        <TimelineBody className="-translate-y-1.5">
          <div className="space-y-1">
            <h3 className="text-base leading-none font-semibold">
              Sarah Johnson joined the team
            </h3>
            <p className="text-muted-foreground text-xs">January 20, 2024</p>
          </div>
          <p className="text-muted-foreground mt-3 text-sm">
            Sarah joined as our new Product Manager, bringing over 8 years of
            experience in product development and team leadership. She will be
            leading our product roadmap initiatives.
          </p>
        </TimelineBody>
      </TimelineItem>
      <TimelineItem>
        <TimelineHeader>
          <TimelineSeparator />
          <TimelineIcon className="p-0.5">
            <Avatar className="h-full w-full">
              <AvatarImage
                src="https://images.unsplash.com/photo-1623853434105-8e7a72898180?auto=format&fit=crop&q=80&w=400&h=400"
                alt="Michael Chen"
              />
            </Avatar>
          </TimelineIcon>
        </TimelineHeader>
        <TimelineBody className="-translate-y-1.5">
          <div className="space-y-1">
            <h3 className="text-base leading-none font-semibold">
              Michael Chen promoted to Lead Developer
            </h3>
            <p className="text-muted-foreground text-xs">March 5, 2024</p>
          </div>
          <p className="text-muted-foreground mt-3 text-sm">
            Michael has been promoted to Lead Developer after demonstrating
            exceptional technical skills and leadership. He will be managing our
            development team and architecture decisions.
          </p>
        </TimelineBody>
      </TimelineItem>
      <TimelineItem>
        <TimelineHeader>
          <TimelineIcon className="p-0.5">
            <Avatar className="h-full w-full">
              <AvatarImage
                src="https://images.unsplash.com/photo-1716662318479-a9c0f1cd1a0e?auto=format&fit=crop&q=80&w=400&h=400"
                alt="Emily Rodriguez"
              />
            </Avatar>
          </TimelineIcon>
        </TimelineHeader>
        <TimelineBody className="-translate-y-1.5">
          <div className="space-y-1">
            <h3 className="text-base leading-none font-semibold">
              Emily Rodriguez completed onboarding
            </h3>
            <p className="text-muted-foreground text-xs">May 15, 2024</p>
          </div>
          <p className="text-muted-foreground mt-3 text-sm">
            Emily successfully completed her onboarding process and is now fully
            integrated into the design team. She brings fresh perspectives and
            creative solutions to our projects.
          </p>
        </TimelineBody>
      </TimelineItem>
    </Timeline>
  )
}
