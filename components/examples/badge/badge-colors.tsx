import { Bell } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function BadgeColors() {
  return (
    <div className="flex w-full justify-center gap-8">
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
        <Badge
          variant="secondary"
          className="absolute -top-2 -right-2 flex size-5 items-center justify-center rounded-full p-0 text-xs"
        >
          5
        </Badge>
      </div>
      <div className="relative inline-flex">
        <Button variant="secondary" size="icon">
          <Bell className="h-4 w-4" />
        </Button>
        <Badge className="absolute -top-2 -right-2 flex size-5 items-center justify-center rounded-full border-blue-500 bg-blue-500 p-0 text-xs text-white">
          5
        </Badge>
      </div>
      <div className="relative inline-flex">
        <Button variant="secondary" size="icon">
          <Bell className="h-4 w-4" />
        </Button>
        <Badge className="absolute -top-2 -right-2 flex size-5 items-center justify-center rounded-full border-green-500 bg-green-500 p-0 text-xs text-white">
          5
        </Badge>
      </div>
      <div className="relative inline-flex">
        <Button variant="secondary" size="icon">
          <Bell className="h-4 w-4" />
        </Button>
        <Badge className="absolute -top-2 -right-2 flex size-5 items-center justify-center rounded-full border-yellow-500 bg-yellow-500 p-0 text-xs text-white">
          5
        </Badge>
      </div>
      <div className="relative inline-flex">
        <Button variant="secondary" size="icon">
          <Bell className="h-4 w-4" />
        </Button>
        <Badge
          variant="destructive"
          className="absolute -top-2 -right-2 flex size-5 items-center justify-center rounded-full p-0 text-xs"
        >
          5
        </Badge>
      </div>
    </div>
  )
}
