import { cn } from "@/lib/utils"
import { Progress } from "@/components/ui/progress"

export default function ProgressSizes() {
  return (
    <div className="w-full space-y-6">
      <Progress value={50} className={cn("h-1")} />
      <Progress value={50} className={cn("h-2")} />
      <Progress value={50} className={cn("h-3")} />
    </div>
  )
}
