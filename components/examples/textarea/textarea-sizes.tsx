import { Textarea } from "@/components/ui/textarea"

export default function TextareaSizes() {
  return (
    <div className="w-full space-y-4">
      <Textarea
        placeholder="Textarea Small"
        className="min-h-12 py-1.5 text-sm"
      />
      <Textarea placeholder="Textarea Medium" className="min-h-16" />
      <Textarea
        placeholder="Textarea Large"
        className="min-h-20 py-3 text-base"
      />
    </div>
  )
}
