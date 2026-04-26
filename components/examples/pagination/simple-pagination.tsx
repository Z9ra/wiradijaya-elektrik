import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function SimplePagination() {
  return (
    <div className="flex items-center gap-3 rounded-full border px-4 py-2 shadow-sm">
      <Button
        variant="ghost"
        size="icon"
        className="border-border/60 text-muted-foreground hover:text-foreground rounded-full border"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <p className="text-muted-foreground text-sm">
        Page{" "}
        <span className="text-foreground font-semibold" aria-live="polite">
          2
        </span>{" "}
        of <span className="text-foreground font-semibold">10</span>
      </p>
      <Button
        variant="ghost"
        size="icon"
        className="border-border/60 text-muted-foreground hover:text-foreground rounded-full border"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}
