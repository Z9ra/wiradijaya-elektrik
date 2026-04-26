import { Skeleton } from "@/components/ui/skeleton"

export default function SkeletonBlock() {
  return (
    <div className="w-full max-w-md space-y-4">
      <Skeleton className="h-[125px] w-full rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
    </div>
  )
}
