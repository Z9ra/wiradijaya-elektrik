import { Skeleton } from "@/components/ui/skeleton"

export default function SkeletonPill() {
  return (
    <div className="flex items-center space-x-2">
      <Skeleton className="h-6 w-16 rounded-full" />
      <Skeleton className="h-6 w-20 rounded-full" />
      <Skeleton className="h-6 w-24 rounded-full" />
      <Skeleton className="h-6 w-18 rounded-full" />
    </div>
  )
}
