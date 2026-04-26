import { Bell } from "lucide-react"

import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function BadgeOverlap() {
  return (
    <div className="flex w-full items-center justify-center gap-8">
      <div className="relative inline-flex">
        <Button variant="secondary" size="icon" className="rounded-md">
          <Bell className="h-4 w-4" />
        </Button>
        <Badge className="absolute -top-1 -right-1 flex size-5 items-center justify-center rounded-full p-0 text-xs">
          5
        </Badge>
      </div>
      <div className="relative inline-flex">
        <Button variant="secondary" size="icon" className="rounded-md">
          <Bell className="h-4 w-4" />
        </Button>
        <Badge className="absolute -top-1 -right-1 size-2 rounded-full p-0" />
      </div>
      <div className="relative inline-flex">
        <Avatar>
          <AvatarImage
            src="https://images.unsplash.com/photo-1750223642533-1b74b17edae8?auto=format&fit=crop&q=80&w=400&h=400"
            alt="profile-picture"
          />
        </Avatar>
        <Badge className="absolute -right-1 -bottom-1 flex size-5 items-center justify-center rounded-full p-0 text-xs">
          5
        </Badge>
      </div>
      <div className="relative inline-flex">
        <Avatar>
          <AvatarImage
            src="https://images.unsplash.com/photo-1750223642533-1b74b17edae8?auto=format&fit=crop&q=80&w=400&h=400"
            alt="profile-picture"
          />
        </Avatar>
        <Badge className="absolute -right-1 -bottom-1 size-2 rounded-full p-0" />
      </div>
    </div>
  )
}
