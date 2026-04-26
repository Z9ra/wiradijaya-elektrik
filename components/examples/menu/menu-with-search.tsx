import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"

export default function MenuWithSearch() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <div className="px-2 py-1.5">
          <Input placeholder="Search..." className="mb-1" />
        </div>
        <DropdownMenuItem>Add Team</DropdownMenuItem>
        <DropdownMenuItem>Add Project</DropdownMenuItem>
        <DropdownMenuItem>My Profile</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
