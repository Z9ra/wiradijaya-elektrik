import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"

export default function InputSizes() {
  return (
    <div className="w-72 space-y-4">
      <Input placeholder="Input Small" className={cn("h-8 text-sm")} />
      <Input placeholder="Input Medium" className={cn("h-9")} />
      <Input placeholder="Input Large" className={cn("h-10 text-base")} />
    </div>
  )
}
