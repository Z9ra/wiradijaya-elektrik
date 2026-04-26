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

export default function SpeedDialHorizontal() {
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
                "h-[18px] w-[18px] transition-transform",
                open && "rotate-45"
              )}
            />
          </Button>
        </TooltipTrigger>
        <TooltipContent
          side="right"
          sideOffset={8}
          className="flex gap-2 border-0 bg-transparent p-0 shadow-none [&>svg]:hidden"
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="icon"
                  variant="secondary"
                  className="rounded-full"
                >
                  <Home className="h-[18px] w-[18px]" />
                </Button>
              </TooltipTrigger>
              <TooltipContent sideOffset={8} className="[&>svg]:hidden">
                Home
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="icon"
                  variant="secondary"
                  className="rounded-full"
                >
                  <Settings className="h-[18px] w-[18px]" />
                </Button>
              </TooltipTrigger>
              <TooltipContent sideOffset={8} className="[&>svg]:hidden">
                Settings
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="icon"
                  variant="secondary"
                  className="rounded-full"
                >
                  <LayoutDashboard className="h-[18px] w-[18px]" />
                </Button>
              </TooltipTrigger>
              <TooltipContent sideOffset={8} className="[&>svg]:hidden">
                Dashboard
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
