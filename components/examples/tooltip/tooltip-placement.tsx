import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function TooltipPlacement() {
  return (
    <TooltipProvider>
      <div className="flex flex-col gap-3 px-32 py-16">
        <div className="flex justify-center gap-3">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button>Top</Button>
            </TooltipTrigger>
            <TooltipContent side="top">
              <p>Creative Tim UI</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button>Top Start</Button>
            </TooltipTrigger>
            <TooltipContent side="top" align="start">
              <p>Creative Tim UI</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button>Top End</Button>
            </TooltipTrigger>
            <TooltipContent side="top" align="end">
              <p>Creative Tim UI</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <div className="flex justify-center gap-3">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button>Right</Button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Creative Tim UI</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button>Right Start</Button>
            </TooltipTrigger>
            <TooltipContent side="right" align="start">
              <p>Creative Tim UI</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button>Right End</Button>
            </TooltipTrigger>
            <TooltipContent side="right" align="end">
              <p>Creative Tim UI</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <div className="flex justify-center gap-3">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button>Bottom</Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <p>Creative Tim UI</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button>Bottom Start</Button>
            </TooltipTrigger>
            <TooltipContent side="bottom" align="start">
              <p>Creative Tim UI</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button>Bottom End</Button>
            </TooltipTrigger>
            <TooltipContent side="bottom" align="end">
              <p>Creative Tim UI</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <div className="flex justify-center gap-3">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button>Left</Button>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>Creative Tim UI</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button>Left Start</Button>
            </TooltipTrigger>
            <TooltipContent side="left" align="start">
              <p>Creative Tim UI</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button>Left End</Button>
            </TooltipTrigger>
            <TooltipContent side="left" align="end">
              <p>Creative Tim UI</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </TooltipProvider>
  )
}
