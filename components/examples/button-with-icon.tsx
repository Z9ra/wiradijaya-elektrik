import { ArrowRight, RefreshCw, Star, Upload } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function ButtonWithIcon() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <Button variant="ghost">
        Read More
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
      <Button variant="outline">
        Refresh
        <RefreshCw className="ml-2 h-4 w-4" />
      </Button>
      <Button>
        <Upload className="mr-2 h-4 w-4" />
        Upload Files
      </Button>
      <Button variant="secondary">
        Give Us Star
        <Star className="ml-2 h-4 w-4" />
      </Button>
    </div>
  )
}
