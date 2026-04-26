import { Button } from "@/components/ui/button"

export default function ButtonColors() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button className="bg-blue-500 text-white hover:bg-blue-600">Info</Button>
      <Button className="bg-green-500 text-white hover:bg-green-600">
        Success
      </Button>
      <Button className="bg-yellow-500 text-white hover:bg-yellow-600">
        Warning
      </Button>
      <Button variant="destructive">Error</Button>
    </div>
  )
}
