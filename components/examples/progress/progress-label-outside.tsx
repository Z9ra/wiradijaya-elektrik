import { Progress } from "@/components/ui/progress"

export default function ProgressLabelOutside() {
  return (
    <div className="w-full space-y-2">
      <div className="flex items-center justify-between font-semibold">
        <span>Completed</span>
        <span>50%</span>
      </div>
      <Progress value={50} />
    </div>
  )
}
