import { Info } from "lucide-react"

import { Input } from "@/components/ui/input"

export default function InputWithHelperText() {
  return (
    <div className="w-72 space-y-2">
      <Input type="password" placeholder="Password" />
      <div className="text-foreground flex gap-1.5">
        <Info className="h-3.5 w-3.5 shrink-0 translate-y-[3px] stroke-2" />
        <p className="text-sm">
          Use at least 8 characters, one uppercase, one lowercase and one
          number.
        </p>
      </div>
    </div>
  )
}
