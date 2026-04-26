import { Bell, Check } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function BadgeCustomStyles() {
  return (
    <div className="relative inline-flex">
      <Button variant="secondary" size="icon">
        <Bell className="h-4 w-4" />
      </Button>
      <Badge className="absolute -top-2 -right-2 flex size-5 items-center justify-center rounded-full border-2 border-white bg-black px-1 py-1 text-white shadow-lg shadow-black/25">
        <Check className="h-3 w-3" />
      </Badge>
    </div>
  )
}
