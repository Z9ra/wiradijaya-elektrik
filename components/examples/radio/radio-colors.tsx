import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function RadioColors() {
  return (
    <div className="flex flex-col gap-4">
      <RadioGroup defaultValue="primary-1" className="flex flex-row gap-4">
        <RadioGroupItem
          value="primary-1"
          className="border-primary/50 data-[state=checked]:border-primary data-[state=checked]:bg-primary/10 [&_[data-slot=radio-group-indicator]_svg]:fill-primary"
        />
        <RadioGroupItem
          value="primary-2"
          className="border-primary/50 data-[state=checked]:border-primary data-[state=checked]:bg-primary/10 [&_[data-slot=radio-group-indicator]_svg]:fill-primary"
        />
      </RadioGroup>
      <RadioGroup defaultValue="secondary-1" className="flex flex-row gap-4">
        <RadioGroupItem
          value="secondary-1"
          className="border-secondary/50 data-[state=checked]:border-secondary data-[state=checked]:bg-secondary/10 [&_[data-slot=radio-group-indicator]_svg]:fill-secondary"
        />
        <RadioGroupItem
          value="secondary-2"
          className="border-secondary/50 data-[state=checked]:border-secondary data-[state=checked]:bg-secondary/10 [&_[data-slot=radio-group-indicator]_svg]:fill-secondary"
        />
      </RadioGroup>
      <RadioGroup defaultValue="info-1" className="flex flex-row gap-4">
        <RadioGroupItem
          value="info-1"
          className="border-blue-500/50 data-[state=checked]:border-blue-500 data-[state=checked]:bg-blue-500/10 [&_[data-slot=radio-group-indicator]_svg]:fill-blue-500"
        />
        <RadioGroupItem
          value="info-2"
          className="border-blue-500/50 data-[state=checked]:border-blue-500 data-[state=checked]:bg-blue-500/10 [&_[data-slot=radio-group-indicator]_svg]:fill-blue-500"
        />
      </RadioGroup>
      <RadioGroup defaultValue="success-1" className="flex flex-row gap-4">
        <RadioGroupItem
          value="success-1"
          className="border-green-500/50 data-[state=checked]:border-green-500 data-[state=checked]:bg-green-500/10 [&_[data-slot=radio-group-indicator]_svg]:fill-green-500"
        />
        <RadioGroupItem
          value="success-2"
          className="border-green-500/50 data-[state=checked]:border-green-500 data-[state=checked]:bg-green-500/10 [&_[data-slot=radio-group-indicator]_svg]:fill-green-500"
        />
      </RadioGroup>
      <RadioGroup defaultValue="warning-1" className="flex flex-row gap-4">
        <RadioGroupItem
          value="warning-1"
          className="border-yellow-500/50 data-[state=checked]:border-yellow-500 data-[state=checked]:bg-yellow-500/10 [&_[data-slot=radio-group-indicator]_svg]:fill-yellow-500"
        />
        <RadioGroupItem
          value="warning-2"
          className="border-yellow-500/50 data-[state=checked]:border-yellow-500 data-[state=checked]:bg-yellow-500/10 [&_[data-slot=radio-group-indicator]_svg]:fill-yellow-500"
        />
      </RadioGroup>
      <RadioGroup defaultValue="error-1" className="flex flex-row gap-4">
        <RadioGroupItem
          value="error-1"
          className="border-destructive/50 data-[state=checked]:border-destructive data-[state=checked]:bg-destructive/10 [&_[data-slot=radio-group-indicator]_svg]:fill-destructive"
        />
        <RadioGroupItem
          value="error-2"
          className="border-destructive/50 data-[state=checked]:border-destructive data-[state=checked]:bg-destructive/10 [&_[data-slot=radio-group-indicator]_svg]:fill-destructive"
        />
      </RadioGroup>
    </div>
  )
}
