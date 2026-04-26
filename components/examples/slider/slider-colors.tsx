import { cn } from "@/lib/utils"
import { Slider } from "@/components/ui/slider"

export default function SliderColors() {
  return (
    <div className="flex w-64 flex-col gap-8">
      <Slider
        defaultValue={[50]}
        max={100}
        step={1}
        className={cn(
          "[&_[data-slot=slider-range]]:bg-primary [&_[data-slot=slider-thumb]]:border-primary"
        )}
      />
      <Slider
        defaultValue={[50]}
        max={100}
        step={1}
        className={cn(
          "[&_[data-slot=slider-range]]:bg-secondary [&_[data-slot=slider-thumb]]:border-secondary"
        )}
      />
      <Slider
        defaultValue={[50]}
        max={100}
        step={1}
        className={cn(
          "[&_[data-slot=slider-range]]:bg-blue-500 [&_[data-slot=slider-thumb]]:border-blue-500"
        )}
      />
      <Slider
        defaultValue={[50]}
        max={100}
        step={1}
        className={cn(
          "[&_[data-slot=slider-range]]:bg-green-500 [&_[data-slot=slider-thumb]]:border-green-500"
        )}
      />
      <Slider
        defaultValue={[50]}
        max={100}
        step={1}
        className={cn(
          "[&_[data-slot=slider-range]]:bg-yellow-500 [&_[data-slot=slider-thumb]]:border-yellow-500"
        )}
      />
      <Slider
        defaultValue={[50]}
        max={100}
        step={1}
        className={cn(
          "[&_[data-slot=slider-range]]:bg-destructive [&_[data-slot=slider-thumb]]:border-destructive"
        )}
      />
    </div>
  )
}
