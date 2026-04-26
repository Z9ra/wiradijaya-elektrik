import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export default function SwitchWithDescription() {
  return (
    <div className="flex gap-4">
      <Switch id="switch-description" />
      <Label
        htmlFor="switch-description"
        className="flex -translate-y-0.5 cursor-pointer flex-col items-start text-left"
      >
        <span className="font-semibold">Remember Me</span>
        <span className="text-foreground text-sm font-normal">
          You&apos;ll be able to login without password for 24 hours.
        </span>
      </Label>
    </div>
  )
}
