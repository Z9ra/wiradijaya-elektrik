import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function SwitchWithLabel() {
  return (
    <div className="flex items-center gap-2">
      <Switch id="switch" />
      <Label htmlFor="switch" className="text-foreground cursor-pointer">
        Dark Mode
      </Label>
    </div>
  )
}
