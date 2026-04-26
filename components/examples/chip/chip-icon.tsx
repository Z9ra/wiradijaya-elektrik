import { User } from "lucide-react"

import { Chip } from "@/components/ui/chip"

export default function ChipIcon() {
  return (
    <div className="flex items-center gap-2">
      <Chip variant="ghost">
        <User className="h-4 w-4" />
        Ghost
      </Chip>
      <Chip variant="outline">
        <User className="h-4 w-4" />
        Outline
      </Chip>
      <Chip variant="solid">
        <User className="h-4 w-4" />
        Solid
      </Chip>
      <Chip className="from-primary to-primary/80 text-primary-foreground bg-gradient-to-r">
        <User className="h-4 w-4" />
        Gradient
      </Chip>
    </div>
  )
}
