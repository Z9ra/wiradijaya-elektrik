import { Lock, User } from "lucide-react"

import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"

export default function InputWithIcon() {
  return (
    <div className="w-72 space-y-4">
      <div className="relative">
        <User className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
        <Input placeholder="Username" className={cn("pl-9")} />
      </div>
      <div className="relative">
        <Lock className="text-muted-foreground absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2" />
        <Input placeholder="Password" className={cn("pr-9")} />
      </div>
    </div>
  )
}
