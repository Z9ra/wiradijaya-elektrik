import { Button } from "@/components/ui/button"

export default function ButtonSizes() {
  return (
    <div className="flex flex-wrap items-end justify-center gap-4">
      <Button size="sm" className="h-8 px-3 text-xs">
        X Small
      </Button>
      <Button size="sm">Small</Button>
      <Button size="default">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="lg" className="h-12 px-8 text-base">
        X Large
      </Button>
    </div>
  )
}
