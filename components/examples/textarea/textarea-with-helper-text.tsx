import { Info } from "lucide-react"

import { Textarea } from "@/components/ui/textarea"

export default function TextareaWithHelperText() {
  return (
    <div className="w-full space-y-2">
      <Textarea placeholder="Your message..." />
      <div className="text-foreground flex gap-1.5">
        <Info className="h-3.5 w-3.5 shrink-0 translate-y-[3px] stroke-2" />
        <p className="text-muted-foreground text-xs">
          Use at least 255 characters and a maximum of 1000 characters.
        </p>
      </div>
    </div>
  )
}
