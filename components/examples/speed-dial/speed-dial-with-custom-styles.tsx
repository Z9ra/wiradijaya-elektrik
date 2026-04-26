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

export default function SpeedDialWithCustomStyles() {
  const [open, setOpen] = React.useState(false)

  return (
    <TooltipProvider>
      <Tooltip open={open} onOpenChange={setOpen}>
        <TooltipTrigger asChild>
          <Button
            size="icon"
            variant="secondary"
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
          side="left"
          sideOffset={8}
          className="bg-background flex flex-col gap-2 rounded-full border p-1 shadow-none [&>svg]:hidden"
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="icon"
                  variant="secondary"
                  className="rounded-full p-3"
                >
                  <Home className="h-[18px] w-[18px]" />
                </Button>
              </TooltipTrigger>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="icon"
                  variant="secondary"
                  className="rounded-full p-3"
                >
                  <Settings className="h-[18px] w-[18px]" />
                </Button>
              </TooltipTrigger>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  size="icon"
                  variant="secondary"
                  className="rounded-full p-3"
                >
                  <LayoutDashboard className="h-[18px] w-[18px]" />
                </Button>
              </TooltipTrigger>
            </Tooltip>
          </TooltipProvider>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
