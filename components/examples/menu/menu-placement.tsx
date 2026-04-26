import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function MenuPlacement() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-3">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button>Top</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="top">
            <DropdownMenuItem>Add Team</DropdownMenuItem>
            <DropdownMenuItem>Add Project</DropdownMenuItem>
            <DropdownMenuItem>My Profile</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button>Top Start</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="top" align="start">
            <DropdownMenuItem>Add Team</DropdownMenuItem>
            <DropdownMenuItem>Add Project</DropdownMenuItem>
            <DropdownMenuItem>My Profile</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button>Top End</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="top" align="end">
            <DropdownMenuItem>Add Team</DropdownMenuItem>
            <DropdownMenuItem>Add Project</DropdownMenuItem>
            <DropdownMenuItem>My Profile</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex gap-3">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button>Right</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="right">
            <DropdownMenuItem>Add Team</DropdownMenuItem>
            <DropdownMenuItem>Add Project</DropdownMenuItem>
            <DropdownMenuItem>My Profile</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button>Right Start</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="right" align="start">
            <DropdownMenuItem>Add Team</DropdownMenuItem>
            <DropdownMenuItem>Add Project</DropdownMenuItem>
            <DropdownMenuItem>My Profile</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button>Right End</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="right" align="end">
            <DropdownMenuItem>Add Team</DropdownMenuItem>
            <DropdownMenuItem>Add Project</DropdownMenuItem>
            <DropdownMenuItem>My Profile</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex gap-3">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button>Bottom</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="bottom">
            <DropdownMenuItem>Add Team</DropdownMenuItem>
            <DropdownMenuItem>Add Project</DropdownMenuItem>
            <DropdownMenuItem>My Profile</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button>Bottom Start</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="bottom" align="start">
            <DropdownMenuItem>Add Team</DropdownMenuItem>
            <DropdownMenuItem>Add Project</DropdownMenuItem>
            <DropdownMenuItem>My Profile</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button>Bottom End</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="bottom" align="end">
            <DropdownMenuItem>Add Team</DropdownMenuItem>
            <DropdownMenuItem>Add Project</DropdownMenuItem>
            <DropdownMenuItem>My Profile</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex gap-3">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button>Left</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="left">
            <DropdownMenuItem>Add Team</DropdownMenuItem>
            <DropdownMenuItem>Add Project</DropdownMenuItem>
            <DropdownMenuItem>My Profile</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button>Left Start</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="left" align="start">
            <DropdownMenuItem>Add Team</DropdownMenuItem>
            <DropdownMenuItem>Add Project</DropdownMenuItem>
            <DropdownMenuItem>My Profile</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button>Left End</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="left" align="end">
            <DropdownMenuItem>Add Team</DropdownMenuItem>
            <DropdownMenuItem>Add Project</DropdownMenuItem>
            <DropdownMenuItem>My Profile</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
