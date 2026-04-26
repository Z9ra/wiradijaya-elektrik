import { Button } from "@/components/ui/button"

export default function ButtonAsLink() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <Button variant="ghost" asChild>
        <a href="#">Ghost</a>
      </Button>
      <Button variant="outline" asChild>
        <a href="#">Outline</a>
      </Button>
      <Button asChild>
        <a href="#">Default</a>
      </Button>
      <Button variant="secondary" asChild>
        <a href="#">Secondary</a>
      </Button>
    </div>
  )
}
