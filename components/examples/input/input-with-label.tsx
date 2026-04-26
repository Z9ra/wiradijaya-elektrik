import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function InputWithLabel() {
  return (
    <div className="w-72 space-y-1">
      <Label htmlFor="email" className="font-semibold">
        Email
      </Label>
      <Input id="email" type="email" placeholder="someone@example.com" />
    </div>
  )
}
