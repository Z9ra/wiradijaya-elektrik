import { Bell } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function BadgePlacement() {
  return (
    <div className="flex w-full justify-center gap-8">
      <div className="relative inline-flex">
        <Button variant="secondary" size="icon">
          <Bell className="h-4 w-4" />
        </Button>
        <Badge className="absolute -top-2 -left-2 flex size-5 items-center justify-center rounded-full p-0 text-xs">
          5
        </Badge>
      </div>
      <div className="relative inline-flex">
        <Button variant="secondary" size="icon">
          <Bell className="h-4 w-4" />
        </Button>
        <Badge className="absolute -top-2 -right-2 flex size-5 items-center justify-center rounded-full p-0 text-xs">
          5
        </Badge>
      </div>
      <div className="relative inline-flex">
        <Button variant="secondary" size="icon">
          <Bell className="h-4 w-4" />
        </Button>
        <Badge className="absolute -bottom-2 -left-2 flex size-5 items-center justify-center rounded-full p-0 text-xs">
          5
        </Badge>
      </div>
      <div className="relative inline-flex">
        <Button variant="secondary" size="icon">
          <Bell className="h-4 w-4" />
        </Button>
        <Badge className="absolute -right-2 -bottom-2 flex size-5 items-center justify-center rounded-full p-0 text-xs">
          5
        </Badge>
      </div>
    </div>
  )
}
