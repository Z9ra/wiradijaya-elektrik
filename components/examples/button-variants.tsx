import { Button } from "@/components/ui/button"

export default function ButtonVariants() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <Button variant="ghost">Ghost</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
    </div>
  )
}
