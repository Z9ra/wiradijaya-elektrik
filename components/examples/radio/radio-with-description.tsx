import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function RadioWithDescription() {
  return (
    <RadioGroup defaultValue="html" className="gap-4">
      <div className="flex gap-2">
        <RadioGroupItem value="html" id="radio-description-html" />
        <label
          htmlFor="radio-description-html"
          className="flex -translate-y-1 cursor-pointer flex-col items-start text-left"
        >
          <span className="font-semibold">HTML Version</span>
          <span className="text-foreground text-sm">
            Creative Tim UI HTML, packed with rich components and widgets.
          </span>
        </label>
      </div>
      <div className="flex gap-2">
        <RadioGroupItem value="react" id="radio-description-react" />
        <label
          htmlFor="radio-description-react"
          className="flex -translate-y-1 cursor-pointer flex-col items-start text-left"
        >
          <span className="font-semibold">React Version</span>
          <span className="text-foreground text-sm">
            Creative Tim UI React, packed with rich components and widgets.
          </span>
        </label>
      </div>
    </RadioGroup>
  )
}
