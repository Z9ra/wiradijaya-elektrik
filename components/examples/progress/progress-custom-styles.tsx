import { cn } from "@/lib/utils"
import { Progress } from "@/components/ui/progress"

export default function ProgressCustomStyles() {
  return (
    <Progress
      value={50}
      className={cn(
        "border border-gray-900/10 bg-gray-900/5 p-1 dark:border-gray-800 dark:bg-gray-900 [&>[data-slot=progress-indicator]]:rounded-full"
      )}
    />
  )
}
