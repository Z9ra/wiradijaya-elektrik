"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function MenuWithCheckbox() {
  const [taskName, setTaskName] = React.useState(false)
  const [dateCreated, setDateCreated] = React.useState(false)
  const [completed, setCompleted] = React.useState(false)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Sort</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          onSelect={(e) => e.preventDefault()}
          className="gap-2 pl-1.5"
        >
          <Checkbox
            id="task-name"
            checked={taskName}
            onCheckedChange={setTaskName}
          />
          <label htmlFor="task-name" className="cursor-pointer">
            Task Name
          </label>
        </DropdownMenuItem>
        <DropdownMenuItem
          onSelect={(e) => e.preventDefault()}
          className="gap-2 pl-1.5"
        >
          <Checkbox
            id="date-created"
            checked={dateCreated}
            onCheckedChange={setDateCreated}
          />
          <label htmlFor="date-created" className="cursor-pointer">
            Date Created
          </label>
        </DropdownMenuItem>
        <DropdownMenuItem
          onSelect={(e) => e.preventDefault()}
          className="gap-2 pl-1.5"
        >
          <Checkbox
            id="completed"
            checked={completed}
            onCheckedChange={setCompleted}
          />
          <label htmlFor="completed" className="cursor-pointer">
            Completed
          </label>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
