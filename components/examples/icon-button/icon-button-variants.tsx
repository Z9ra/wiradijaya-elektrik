import { Star } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function IconButtonVariants() {
  return (
    <div className="flex gap-4">
      <Button size="icon" variant="ghost">
        <Star className="h-4 w-4" />
      </Button>
      <Button size="icon" variant="outline">
        <Star className="h-4 w-4" />
      </Button>
      <Button size="icon" variant="default">
        <Star className="h-4 w-4" />
      </Button>
      <Button
        size="icon"
        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 focus-visible:ring-blue-500/20"
      >
        <Star className="h-4 w-4" />
      </Button>
    </div>
  )
}
