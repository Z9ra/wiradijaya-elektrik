import { Info } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function TooltipWithHelperIcon() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost" size="icon">
            <Info className="h-5 w-5" />
          </Button>
        </TooltipTrigger>
        <TooltipContent className="w-80 px-2.5 py-1.5">
          <p className="font-semibold">Creative Tim UI</p>
          <p className="text-sm opacity-90">
            Creative Tim UI is an easy to use components library for Tailwind
            CSS and shadcn/ui.
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
