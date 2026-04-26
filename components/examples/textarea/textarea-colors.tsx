import { Textarea } from "@/components/ui/textarea"

export default function TextareaColors() {
  return (
    <div className="w-full space-y-4">
      <Textarea
        placeholder="Textarea Primary"
        className="border-primary focus-visible:ring-primary/20"
      />
      <Textarea
        placeholder="Textarea Secondary"
        className="border-secondary focus-visible:ring-secondary/20"
      />
      <Textarea
        placeholder="Textarea Info"
        className="border-blue-500 focus-visible:ring-blue-500/20"
      />
      <Textarea
        placeholder="Textarea Success"
        className="border-green-500 focus-visible:ring-green-500/20"
      />
      <Textarea
        placeholder="Textarea Warning"
        className="border-yellow-500 focus-visible:ring-yellow-500/20"
      />
      <Textarea
        placeholder="Textarea Error"
        className="border-destructive focus-visible:ring-destructive/20"
      />
    </div>
  )
}
