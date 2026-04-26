import { Building2, MapPin } from "lucide-react"

import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export default function ProfileInfoPopover() {
  return (
    <div className="min-h-72">
      <Popover>
        <PopoverTrigger asChild>
          <Button>Profile Info</Button>
        </PopoverTrigger>
        <PopoverContent className="max-w-sm">
          <div className="mb-2 flex items-center justify-between gap-4">
            <Avatar>
              <AvatarImage
                src="https://images.unsplash.com/photo-1750223642533-1b74b17edae8?auto=format&fit=crop&q=80&w=400&h=400"
                alt="profile-picture"
              />
            </Avatar>
            <Button size="sm" className="mr-2">
              Follow
            </Button>
          </div>
          <div className="text-foreground mb-1 flex items-center gap-2 font-bold">
            <span>Alex Andrew</span> •{" "}
            <a href="#profile-info-popover" className="hover:underline">
              @alex
            </a>
          </div>
          <p className="text-foreground text-sm">
            Frontend Developer • Major interest in Web Development: motivated to
            achieve measurable results, to deepen my knowledge and improve my
            skills.
          </p>
          <hr className="border-border my-2.5" />
          <div className="flex items-center gap-8">
            <p className="text-foreground flex items-center gap-1.5 text-xs">
              <MapPin className="h-4 w-4" />
              United Kingdom
            </p>
            <p className="text-foreground flex items-center gap-1.5 text-xs">
              <Building2 className="h-4 w-4" />
              Material Tailwind
            </p>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
