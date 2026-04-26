import { Button } from "@/components/ui/button"

export default function ButtonBlockLevel() {
  return (
    <div className="flex w-full flex-col gap-4">
      <Button variant="ghost" className="w-full">
        Ghost Block Level Button
      </Button>
      <Button variant="outline" className="w-full">
        Outline Block Level Button
      </Button>
      <Button className="w-full">Default Block Level Button</Button>
      <Button variant="secondary" className="w-full">
        Secondary Block Level Button
      </Button>
    </div>
  )
}
