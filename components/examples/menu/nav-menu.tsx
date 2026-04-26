import { ChevronDown, Rocket } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function NavMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center gap-1">
          Versions <ChevronDown className="h-3.5 w-3.5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="grid max-w-lg grid-cols-5 gap-1 p-2">
        <Card className="bg-primary text-primary-foreground col-span-2 grid place-items-center rounded-[5px] px-8 py-4 shadow-none">
          <div>
            <Rocket className="mx-auto h-12 w-12" />
            <h6 className="mt-5 text-center text-base leading-snug font-semibold">
              Creative Tim UI PRO
            </h6>
          </div>
        </Card>
        <ul className="col-span-3 m-0 space-y-1">
          <DropdownMenuItem className="flex-col items-start">
            <span className="font-semibold">@creative-tim/ui</span>
            <span className="text-muted-foreground text-xs">
              Learn how to use @creative-tim/ui, packed with rich components and
              widgets.
            </span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex-col items-start">
            <span className="font-semibold">Creative Tim UI</span>
            <span className="text-muted-foreground text-xs">
              Learn how to use Creative Tim UI, packed with rich components for
              React.
            </span>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex-col items-start">
            <span className="font-semibold">Creative Tim UI PRO</span>
            <span className="text-muted-foreground text-xs">
              A complete set of UI Elements for building faster websites in less
              time.
            </span>
          </DropdownMenuItem>
        </ul>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
