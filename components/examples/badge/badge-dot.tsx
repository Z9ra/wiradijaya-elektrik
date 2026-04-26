import { Bell } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function BadgeDot() {
  return (
    <div className="relative inline-flex">
      <Button variant="secondary" size="icon">
        <Bell className="h-4 w-4" />
      </Button>
      <Badge className="absolute -top-1 -right-1 size-2 rounded-full p-0" />
    </div>
  )
}
