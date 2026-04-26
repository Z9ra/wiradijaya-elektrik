import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export default function PopoverDemo() {
  return (
    <div className="min-h-28">
      <Popover>
        <PopoverTrigger asChild>
          <Button>Open</Button>
        </PopoverTrigger>
        <PopoverContent className="max-w-sm">
          <p className="text-foreground text-sm">
            This is a very beautiful popover, show some love.
          </p>
        </PopoverContent>
      </Popover>
    </div>
  )
}
