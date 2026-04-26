"use client"

import * as React from "react"
import { Home, LayoutDashboard, Plus, Settings } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function SpeedDialWithLabel() {
  const [open, setOpen] = React.useState(false)

  return (
    <TooltipProvider>
      <Tooltip open={open} onOpenChange={setOpen}>
        <TooltipTrigger asChild>
          <Button
            size="icon"
            className="rounded-full"
            onClick={() => setOpen(!open)}
          >
            <Plus
              className={cn(
                "h-[18px] w-[18px] transition-transform duration-200",
                open && "rotate-45"
              )}
            />
          </Button>
        </TooltipTrigger>
        <TooltipContent
          side="left"
          sideOffset={8}
          className="flex flex-col gap-3 border-0 bg-transparent p-0 shadow-none [&>svg]:hidden"
        >
          <div className="animate-in fade-in-0 slide-in-from-right-2 flex items-center gap-3 transition-all duration-200">
            <Button
              size="icon"
              variant="secondary"
              className="shrink-0 rounded-full"
            >
              <Home className="h-[18px] w-[18px]" />
            </Button>
            <span className="bg-background text-foreground rounded-md border px-3 py-1.5 text-sm font-medium whitespace-nowrap shadow-sm">
              Home
            </span>
          </div>
          <div className="animate-in fade-in-0 slide-in-from-right-2 flex items-center gap-3 transition-all delay-75 duration-200">
            <Button
              size="icon"
              variant="secondary"
              className="shrink-0 rounded-full"
            >
              <Settings className="h-[18px] w-[18px]" />
            </Button>
            <span className="bg-background text-foreground rounded-md border px-3 py-1.5 text-sm font-medium whitespace-nowrap shadow-sm">
              Settings
            </span>
          </div>
          <div className="animate-in fade-in-0 slide-in-from-right-2 flex items-center gap-3 transition-all delay-150 duration-200">
            <Button
              size="icon"
              variant="secondary"
              className="shrink-0 rounded-full"
            >
              <LayoutDashboard className="h-[18px] w-[18px]" />
            </Button>
            <span className="bg-background text-foreground rounded-md border px-3 py-1.5 text-sm font-medium whitespace-nowrap shadow-sm">
              Dashboard
            </span>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
