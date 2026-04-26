import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function SwitchWithLink() {
  return (
    <div className="flex items-center gap-2">
      <Switch id="switch-link" />
      <Label htmlFor="switch-link" className="text-foreground cursor-pointer">
        I agree with the{" "}
        <a href="#" className="text-primary inline underline">
          terms and conditions
        </a>
      </Label>
    </div>
  )
}
