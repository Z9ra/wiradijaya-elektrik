import { Star } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function IconButtonDemo() {
  return (
    <Button size="icon" variant="default">
      <Star className="h-4 w-4" />
    </Button>
  )
}
