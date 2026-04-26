import { Checkbox } from "@/components/ui/checkbox"

export default function CheckboxWithLink() {
  return (
    <div className="flex items-center gap-2">
      <Checkbox id="checkbox-link" />
      <label
        htmlFor="checkbox-link"
        className="text-foreground cursor-pointer text-sm"
      >
        I agree with the{" "}
        <a href="#" className="text-primary underline underline-offset-4">
          terms and conditions
        </a>
      </label>
    </div>
  )
}
