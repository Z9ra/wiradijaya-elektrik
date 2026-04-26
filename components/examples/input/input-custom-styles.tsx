import { User } from "lucide-react"

import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"

export default function InputCustomStyles() {
  return (
    <div className="w-72">
      <div className="relative">
        <User className="text-muted-foreground absolute top-1/2 left-1 h-4 w-4 -translate-y-1/2" />
        <Input
          placeholder="Username"
          className={cn(
            "rounded-none border-0 border-b border-gray-400 pr-0.5 pl-[26px] shadow-none ring-0 hover:border-gray-900 focus:border-gray-900 dark:border-gray-600 dark:hover:border-gray-50 dark:focus:border-gray-50"
          )}
        />
      </div>
    </div>
  )
}
