import { Bell } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function BadgeDemo() {
  return (
    <div className="relative inline-flex">
      <Button variant="secondary" size="icon">
        <Bell className="h-4 w-4" />
      </Button>
      <Badge className="absolute -top-2 -right-2 flex size-5 items-center justify-center rounded-full p-0 text-xs">
        5
      </Badge>
    </div>
  )
}
