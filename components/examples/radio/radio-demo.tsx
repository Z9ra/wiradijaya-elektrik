import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function RadioDemo() {
  return (
    <RadioGroup defaultValue="html">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="html" id="html" />
        <Label htmlFor="html" className="text-foreground cursor-pointer">
          HTML
        </Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="react" id="react" />
        <Label htmlFor="react" className="text-foreground cursor-pointer">
          React
        </Label>
      </div>
    </RadioGroup>
  )
}
