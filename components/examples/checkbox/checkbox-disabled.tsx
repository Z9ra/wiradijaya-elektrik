import { Checkbox } from "@/components/ui/checkbox"

export default function CheckboxDisabled() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Checkbox disabled id="disabled-unchecked" />
        <label
          htmlFor="disabled-unchecked"
          className="text-muted-foreground cursor-not-allowed text-sm"
        >
          Disabled Unchecked
        </label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox disabled defaultChecked id="disabled-checked" />
        <label
          htmlFor="disabled-checked"
          className="text-muted-foreground cursor-not-allowed text-sm"
        >
          Disabled Checked
        </label>
      </div>
    </div>
  )
}
