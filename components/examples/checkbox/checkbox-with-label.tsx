import { Checkbox } from "@/components/ui/checkbox"

export default function CheckboxWithLabel() {
  return (
    <div className="flex items-center gap-2">
      <Checkbox id="checkbox" />
      <label
        htmlFor="checkbox"
        className="text-foreground cursor-pointer text-sm"
      >
        Remember Me
      </label>
    </div>
  )
}
