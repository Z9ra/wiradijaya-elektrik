import { Button } from "@/components/ui/button"

export default function ButtonPill() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <Button variant="ghost" className="rounded-full">
        Ghost
      </Button>
      <Button variant="outline" className="rounded-full">
        Outline
      </Button>
      <Button className="rounded-full">Default</Button>
      <Button variant="secondary" className="rounded-full">
        Secondary
      </Button>
    </div>
  )
}
