import { Bell, Clock } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface MenuItemProps {
  img: string
  title: string
  date: string
}

function NotificationMenuItem({ img, title, date }: MenuItemProps) {
  return (
    <DropdownMenuItem className="gap-3">
      <Avatar>
        <AvatarImage src={img} alt="profile-picture" />
        <AvatarFallback>U</AvatarFallback>
      </Avatar>
      <div>
        <p className="mb-1 block text-sm font-semibold">{title}</p>
        <p className="text-muted-foreground flex items-center gap-1 text-xs">
          <Clock className="h-3 w-3" />
          {date}
        </p>
      </div>
    </DropdownMenuItem>
  )
}

export default function NotificationMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm">
          <Bell className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <NotificationMenuItem
          img="https://images.unsplash.com/photo-1574015974293-817f0ebebb74?auto=format&fit=crop&q=80&w=400&h=400"
          title="Tania send you a message"
          date="13 minutes ago"
        />
        <NotificationMenuItem
          img="https://images.unsplash.com/photo-1661327930345-9c6714b603b3?auto=format&fit=crop&q=80&w=400&h=400"
          title="Natali replied to your email."
          date="1 hour ago"
        />
        <NotificationMenuItem
          img="https://images.unsplash.com/photo-1578508637199-240a8f25eff6?auto=format&fit=crop&q=80&w=400&h=400"
          title="You've received a payment."
          date="5 hours ago"
        />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
