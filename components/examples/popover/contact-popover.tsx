import { Building2, Mail, Phone } from "lucide-react"

import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export default function ContactPopover() {
  return (
    <div className="min-h-60">
      <Popover>
        <PopoverTrigger asChild>
          <Button>Contact Info</Button>
        </PopoverTrigger>
        <PopoverContent className="max-w-sm p-1">
          <div className="space-y-1">
            <div className="flex items-center gap-3 p-2">
              <Avatar>
                <AvatarImage
                  src="https://images.unsplash.com/photo-1750223642533-1b74b17edae8?auto=format&fit=crop&q=80&w=400&h=400"
                  alt="profile-picture"
                />
              </Avatar>
              <div>
                <p className="text-foreground font-semibold">Alex Andrew</p>
                <p className="text-muted-foreground text-sm">General Manager</p>
              </div>
            </div>
            <hr className="border-border" />
            <div className="flex items-center gap-3 p-2">
              <Building2 className="text-muted-foreground h-[18px] w-[18px]" />
              <p className="text-foreground text-sm">ABC Construction</p>
            </div>
            <div className="flex items-center gap-3 p-2">
              <Phone className="text-muted-foreground h-[18px] w-[18px]" />
              <p className="text-foreground text-sm">00 123 456 789</p>
            </div>
            <div className="flex items-center gap-3 p-2">
              <Mail className="text-muted-foreground h-[18px] w-[18px]" />
              <p className="text-foreground text-sm">someone@example.com</p>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
