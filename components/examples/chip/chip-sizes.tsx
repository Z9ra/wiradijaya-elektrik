import { Chip } from "@/components/ui/chip"

export default function ChipSizes() {
  return (
    <div className="flex items-end gap-2">
      <Chip size="sm">Small</Chip>
      <Chip size="md">Medium</Chip>
      <Chip size="lg">Large</Chip>
    </div>
  )
}
