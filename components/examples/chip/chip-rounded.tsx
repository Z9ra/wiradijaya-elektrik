import { Chip } from "@/components/ui/chip"

export default function ChipRounded() {
  return (
    <div className="flex items-center gap-2">
      <Chip variant="ghost" className="rounded-md">
        Ghost
      </Chip>
      <Chip variant="outline" className="rounded-md">
        Outline
      </Chip>
      <Chip variant="solid" className="rounded-md">
        Solid
      </Chip>
      <Chip className="from-primary to-primary/80 text-primary-foreground rounded-md bg-gradient-to-r">
        Gradient
      </Chip>
    </div>
  )
}
