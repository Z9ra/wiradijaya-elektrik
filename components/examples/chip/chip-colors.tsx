import { Chip } from "@/components/ui/chip"

export default function ChipColors() {
  return (
    <div className="flex items-center gap-2">
      <Chip>Primary</Chip>
      <Chip variant="secondary">Secondary</Chip>
      <Chip className="border-blue-500 bg-blue-500 text-white">Info</Chip>
      <Chip className="border-green-500 bg-green-500 text-white">Success</Chip>
      <Chip className="border-yellow-500 bg-yellow-500 text-white">
        Warning
      </Chip>
      <Chip variant="destructive">Error</Chip>
    </div>
  )
}
