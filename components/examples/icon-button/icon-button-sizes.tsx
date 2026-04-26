import { Star } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function IconButtonSizes() {
  return (
    <div className="flex items-end gap-4">
      <Button size="icon" className="h-6 w-6">
        <Star className="h-3.5 w-3.5" />
      </Button>
      <Button size="icon" className="h-8 w-8">
        <Star className="h-4 w-4" />
      </Button>
      <Button size="icon">
        <Star className="h-4 w-4" />
      </Button>
      <Button size="icon" className="h-10 w-10">
        <Star className="h-5 w-5" />
      </Button>
      <Button size="icon" className="h-12 w-12">
        <Star className="h-6 w-6" />
      </Button>
    </div>
  )
}
