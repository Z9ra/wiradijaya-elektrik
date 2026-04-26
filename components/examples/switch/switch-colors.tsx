import { Switch } from "@/components/ui/switch"

export default function SwitchColors() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <Switch className="data-[state=checked]:bg-primary" />
      <Switch className="data-[state=checked]:bg-secondary" />
      <Switch className="data-[state=checked]:bg-blue-500" />
      <Switch className="data-[state=checked]:bg-green-500" />
      <Switch className="data-[state=checked]:bg-yellow-500" />
      <Switch className="data-[state=checked]:bg-destructive" />
    </div>
  )
}
