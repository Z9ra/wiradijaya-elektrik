import { CheckCircle2, Star } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Chip } from "@/components/ui/chip"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export default function PopoverWithDescription() {
  return (
    <div className="min-h-48">
      <Popover>
        <PopoverTrigger asChild>
          <Button>Repository Info</Button>
        </PopoverTrigger>
        <PopoverContent className="max-w-sm">
          <div className="mb-1 flex items-center gap-2">
            <a
              href="#"
              className="text-foreground hover:text-primary font-bold"
            >
              @creative-tim-ui
            </a>
            <Chip size="sm" variant="default">
              Public
            </Chip>
          </div>
          <p className="text-foreground text-sm">
            Creative Tim UI is an easy-to-use components library for Tailwind
            CSS and shadcn/ui.
          </p>
          <div className="mt-4 flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-blue-500" />
              <p className="text-foreground text-xs">TypeScript</p>
            </div>
            <div className="flex items-center gap-1.5">
              <Star className="h-4 w-4 text-yellow-500" />
              <p className="text-foreground text-xs">1,480</p>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              <p className="text-foreground text-xs">Verified</p>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
