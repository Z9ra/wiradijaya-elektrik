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

export default function SpeedDialPlacement() {
  const [open1, setOpen1] = React.useState(false)
  const [open2, setOpen2] = React.useState(false)
  const [open3, setOpen3] = React.useState(false)
  const [open4, setOpen4] = React.useState(false)

  return (
    <div className="relative h-80 w-full">
      <div className="absolute top-0 left-0">
        <TooltipProvider>
          <Tooltip open={open1} onOpenChange={setOpen1}>
            <TooltipTrigger asChild>
              <Button
                size="icon"
                className="rounded-full"
                onClick={() => setOpen1(!open1)}
              >
                <Plus
                  className={cn(
                    "h-[18px] w-[18px] transition-transform",
                    open1 && "rotate-45"
                  )}
                />
              </Button>
            </TooltipTrigger>
            <TooltipContent
              side="bottom"
              sideOffset={8}
              className="flex flex-col gap-2 border-0 bg-transparent p-0 shadow-none [&>svg]:hidden"
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
                  <TooltipContent
                    side="left"
                    sideOffset={8}
                    className="[&>svg]:hidden"
                  >
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
                  <TooltipContent
                    side="left"
                    sideOffset={8}
                    className="[&>svg]:hidden"
                  >
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
                  <TooltipContent
                    side="left"
                    sideOffset={8}
                    className="[&>svg]:hidden"
                  >
                    Dashboard
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="absolute top-0 right-0">
        <TooltipProvider>
          <Tooltip open={open2} onOpenChange={setOpen2}>
            <TooltipTrigger asChild>
              <Button
                size="icon"
                className="rounded-full"
                onClick={() => setOpen2(!open2)}
              >
                <Plus
                  className={cn(
                    "h-[18px] w-[18px] transition-transform",
                    open2 && "rotate-45"
                  )}
                />
              </Button>
            </TooltipTrigger>
            <TooltipContent
              side="left"
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
                  <TooltipContent
                    side="top"
                    sideOffset={8}
                    className="[&>svg]:hidden"
                  >
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
                  <TooltipContent
                    side="top"
                    sideOffset={8}
                    className="[&>svg]:hidden"
                  >
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
                  <TooltipContent
                    side="top"
                    sideOffset={8}
                    className="[&>svg]:hidden"
                  >
                    Dashboard
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="absolute bottom-0 left-0">
        <TooltipProvider>
          <Tooltip open={open3} onOpenChange={setOpen3}>
            <TooltipTrigger asChild>
              <Button
                size="icon"
                className="rounded-full"
                onClick={() => setOpen3(!open3)}
              >
                <Plus
                  className={cn(
                    "h-[18px] w-[18px] transition-transform",
                    open3 && "rotate-45"
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
      </div>
      <div className="absolute right-0 bottom-0">
        <TooltipProvider>
          <Tooltip open={open4} onOpenChange={setOpen4}>
            <TooltipTrigger asChild>
              <Button
                size="icon"
                className="rounded-full"
                onClick={() => setOpen4(!open4)}
              >
                <Plus
                  className={cn(
                    "h-[18px] w-[18px] transition-transform",
                    open4 && "rotate-45"
                  )}
                />
              </Button>
            </TooltipTrigger>
            <TooltipContent
              side="top"
              sideOffset={8}
              className="flex flex-col gap-2 border-0 bg-transparent p-0 shadow-none [&>svg]:hidden"
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
                  <TooltipContent
                    side="left"
                    sideOffset={8}
                    className="[&>svg]:hidden"
                  >
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
                  <TooltipContent
                    side="left"
                    sideOffset={8}
                    className="[&>svg]:hidden"
                  >
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
                  <TooltipContent
                    side="left"
                    sideOffset={8}
                    className="[&>svg]:hidden"
                  >
                    Dashboard
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  )
}
