import { cn } from "@/lib/utils"
import { Slider } from "@/components/ui/slider"

export default function SliderSizes() {
  return (
    <div className="flex w-64 flex-col gap-8">
      <Slider
        defaultValue={[50]}
        max={100}
        step={1}
        className={cn(
          "[&_[data-slot=slider-thumb]]:size-3 [&_[data-slot=slider-track]]:h-1"
        )}
      />
      <Slider
        defaultValue={[50]}
        max={100}
        step={1}
        className={cn(
          "[&_[data-slot=slider-thumb]]:size-4 [&_[data-slot=slider-track]]:h-1.5"
        )}
      />
      <Slider
        defaultValue={[50]}
        max={100}
        step={1}
        className={cn(
          "[&_[data-slot=slider-thumb]]:size-5 [&_[data-slot=slider-track]]:h-2"
        )}
      />
    </div>
  )
}
