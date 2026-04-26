import { Checkbox } from "@/components/ui/checkbox"

export default function CheckboxDemo() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Checkbox id="default-checkbox" />
        <label
          htmlFor="default-checkbox"
          className="text-foreground cursor-pointer text-sm"
        >
          Default Checkbox
        </label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox defaultChecked id="checked-checkbox" />
        <label
          htmlFor="checked-checkbox"
          className="text-foreground cursor-pointer text-sm"
        >
          Checked Checkbox
        </label>
      </div>
    </div>
  )
}
