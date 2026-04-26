import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function RadioWithLink() {
  return (
    <RadioGroup defaultValue="agree">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="agree" id="radio-link-agree" />
        <Label
          htmlFor="radio-link-agree"
          className="text-foreground flex cursor-pointer gap-1"
        >
          I agree with the{" "}
          <a href="#" className="text-primary underline">
            terms and conditions
          </a>
        </Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="disagree" id="radio-link-disagree" />
        <Label
          htmlFor="radio-link-disagree"
          className="text-foreground flex cursor-pointer gap-1"
        >
          I disagree with the{" "}
          <a href="#" className="text-primary underline">
            terms and conditions
          </a>
        </Label>
      </div>
    </RadioGroup>
  )
}
