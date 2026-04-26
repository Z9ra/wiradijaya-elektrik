import { Checkbox } from "@/components/ui/checkbox"

export default function CheckboxWithDescription() {
  return (
    <div className="flex gap-2">
      <Checkbox id="checkbox-description" className="mt-1" />
      <label
        htmlFor="checkbox-description"
        className="cursor-pointer space-y-0.5"
      >
        <div className="text-foreground text-sm font-semibold">Remember Me</div>
        <div className="text-muted-foreground text-xs">
          You&apos;ll be able to login without password for 24 hours.
        </div>
      </label>
    </div>
  )
}
