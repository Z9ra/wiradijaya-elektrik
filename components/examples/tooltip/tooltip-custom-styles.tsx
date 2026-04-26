import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function TooltipCustomStyles() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button>Hover</Button>
        </TooltipTrigger>
        <TooltipContent
          side="bottom"
          className="border-border bg-background text-foreground w-80 border px-3 py-2.5"
        >
          <p className="font-semibold">Creative Tim UI</p>
          <p className="text-sm opacity-80">
            Creative Tim UI is an easy to use components library for Tailwind
            CSS and shadcn/ui.
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
