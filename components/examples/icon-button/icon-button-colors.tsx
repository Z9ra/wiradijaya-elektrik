import { Star } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function IconButtonColors() {
  return (
    <div className="flex gap-4">
      <Button size="icon" variant="default">
        <Star className="h-4 w-4" />
      </Button>
      <Button size="icon" variant="secondary">
        <Star className="h-4 w-4" />
      </Button>
      <Button
        size="icon"
        className="bg-blue-500 text-white hover:bg-blue-600 focus-visible:ring-blue-500/20"
      >
        <Star className="h-4 w-4" />
      </Button>
      <Button
        size="icon"
        className="bg-green-500 text-white hover:bg-green-600 focus-visible:ring-green-500/20"
      >
        <Star className="h-4 w-4" />
      </Button>
      <Button
        size="icon"
        className="bg-yellow-500 text-white hover:bg-yellow-600 focus-visible:ring-yellow-500/20"
      >
        <Star className="h-4 w-4" />
      </Button>
      <Button size="icon" variant="destructive">
        <Star className="h-4 w-4" />
      </Button>
    </div>
  )
}
