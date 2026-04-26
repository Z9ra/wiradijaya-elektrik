import { HelpCircle, LogOut, Settings, UserCircle } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function ProfileMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="cursor-pointer outline-none">
          <Avatar>
            <AvatarImage
              src="https://images.unsplash.com/photo-1574015974293-817f0ebebb74?auto=format&fit=crop&q=80&w=400&h=400"
              alt="profile-picture"
            />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <UserCircle className="mr-2 h-[18px] w-[18px]" /> My Profile
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings className="mr-2 h-[18px] w-[18px]" /> Edit Profile
        </DropdownMenuItem>
        <DropdownMenuItem>
          <HelpCircle className="mr-2 h-[18px] w-[18px]" /> Support
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <LogOut className="mr-2 h-[18px] w-[18px]" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
