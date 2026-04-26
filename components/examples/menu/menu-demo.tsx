import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function MenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Add Team</DropdownMenuItem>
        <DropdownMenuItem>Add Project</DropdownMenuItem>
        <DropdownMenuItem>My Profile</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
