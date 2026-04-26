import { Checkbox } from "@/components/ui/checkbox"

export default function CheckboxColors() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <Checkbox
        defaultChecked
        className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
      />
      <Checkbox
        defaultChecked
        className="data-[state=checked]:bg-secondary data-[state=checked]:border-secondary"
      />
      <Checkbox
        defaultChecked
        className="data-[state=checked]:border-blue-500 data-[state=checked]:bg-blue-500"
      />
      <Checkbox
        defaultChecked
        className="data-[state=checked]:border-green-500 data-[state=checked]:bg-green-500"
      />
      <Checkbox
        defaultChecked
        className="data-[state=checked]:border-yellow-500 data-[state=checked]:bg-yellow-500"
      />
      <Checkbox
        defaultChecked
        className="data-[state=checked]:border-red-500 data-[state=checked]:bg-red-500"
      />
    </div>
  )
}
