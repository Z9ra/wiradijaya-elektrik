"use client"

import { Square } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function DropdownWithFilterByStatus() {
  return (
    <div className="text-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>By Status</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-auto p-2">
          <DropdownMenuItem className="flex cursor-pointer items-center gap-2 p-2">
            <Square className="h-4 w-4 fill-slate-800 text-slate-800" />
            Upcoming
          </DropdownMenuItem>
          <DropdownMenuItem className="flex cursor-pointer items-center gap-2 p-2">
            <Square className="h-4 w-4 fill-blue-500 text-blue-500" />
            In Progress
          </DropdownMenuItem>
          <DropdownMenuItem className="flex cursor-pointer items-center gap-2 p-2">
            <Square className="h-4 w-4 fill-amber-500 text-amber-500" />
            In Review
          </DropdownMenuItem>
          <DropdownMenuItem className="flex cursor-pointer items-center gap-2 p-2">
            <Square className="h-4 w-4 fill-green-500 text-green-500" />
            Completed
          </DropdownMenuItem>
          <DropdownMenuItem className="flex cursor-pointer items-center gap-2 p-2">
            <Square className="h-4 w-4 fill-red-500 text-red-500" />
            Blocked
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
