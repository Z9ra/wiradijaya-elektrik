import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function TextareaWithLabel() {
  return (
    <div className="w-full space-y-1.5">
      <Label htmlFor="message" className="text-sm font-semibold">
        Message
      </Label>
      <Textarea id="message" placeholder="Your message..." />
    </div>
  )
}
