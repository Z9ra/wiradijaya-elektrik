import { Skeleton } from "@/components/ui/skeleton"

export default function SkeletonChart() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-4 w-[150px]" />
      </div>
      <div className="space-y-3">
        <div className="flex items-center space-x-4">
          <Skeleton className="h-4 w-12" />
          <Skeleton className="h-4 flex-1" />
        </div>
        <div className="flex items-center space-x-4">
          <Skeleton className="h-4 w-12" />
          <Skeleton className="h-4 flex-1" />
        </div>
        <div className="flex items-center space-x-4">
          <Skeleton className="h-4 w-12" />
          <Skeleton className="h-4 flex-1" />
        </div>
        <div className="flex items-center space-x-4">
          <Skeleton className="h-4 w-12" />
          <Skeleton className="h-4 flex-1" />
        </div>
        <div className="flex items-center space-x-4">
          <Skeleton className="h-4 w-12" />
          <Skeleton className="h-4 flex-1" />
        </div>
      </div>
      <div className="flex h-[200px] items-end justify-between space-x-2">
        <Skeleton className="h-32 w-12" />
        <Skeleton className="h-40 w-12" />
        <Skeleton className="h-24 w-12" />
        <Skeleton className="h-36 w-12" />
        <Skeleton className="h-28 w-12" />
        <Skeleton className="h-44 w-12" />
        <Skeleton className="h-20 w-12" />
      </div>
    </div>
  )
}
