import { Chip } from "@/components/ui/chip"

export default function ChipVariants() {
  return (
    <div className="flex items-center gap-2">
      <Chip variant="ghost">Ghost</Chip>
      <Chip variant="outline">Outline</Chip>
      <Chip variant="solid">Solid</Chip>
      <Chip className="from-primary to-primary/80 text-primary-foreground bg-gradient-to-r">
        Gradient
      </Chip>
    </div>
  )
}
