import { cn } from "@/lib/utils"
import { Progress } from "@/components/ui/progress"

export default function ProgressColors() {
  return (
    <div className="w-full space-y-4">
      <Progress
        value={50}
        className={cn(
          "bg-primary/20 [&>[data-slot=progress-indicator]]:bg-primary"
        )}
      />
      <Progress
        value={50}
        className={cn(
          "bg-secondary/20 [&>[data-slot=progress-indicator]]:bg-secondary"
        )}
      />
      <Progress
        value={50}
        className={cn(
          "bg-blue-500/20 [&>[data-slot=progress-indicator]]:bg-blue-500"
        )}
      />
      <Progress
        value={50}
        className={cn(
          "bg-green-500/20 [&>[data-slot=progress-indicator]]:bg-green-500"
        )}
      />
      <Progress
        value={50}
        className={cn(
          "bg-yellow-500/20 [&>[data-slot=progress-indicator]]:bg-yellow-500"
        )}
      />
      <Progress
        value={50}
        className={cn(
          "bg-destructive/20 [&>[data-slot=progress-indicator]]:bg-destructive"
        )}
      />
    </div>
  )
}
