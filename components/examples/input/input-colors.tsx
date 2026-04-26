import { Input } from "@/components/ui/input"

export default function InputColors() {
  return (
    <div className="w-72 space-y-4">
      <Input
        placeholder="Input Primary"
        className="border-primary/50 focus-visible:border-primary focus-visible:ring-primary/50"
      />
      <Input
        placeholder="Input Secondary"
        className="border-secondary/50 focus-visible:border-secondary focus-visible:ring-secondary/50"
      />
      <Input
        placeholder="Input Info"
        className="border-blue-500/50 focus-visible:border-blue-500 focus-visible:ring-blue-500/50"
      />
      <Input
        placeholder="Input Success"
        className="border-green-500/50 focus-visible:border-green-500 focus-visible:ring-green-500/50"
      />
      <Input
        placeholder="Input Warning"
        className="border-yellow-500/50 focus-visible:border-yellow-500 focus-visible:ring-yellow-500/50"
      />
      <Input
        placeholder="Input Error"
        className="border-destructive/50 focus-visible:border-destructive focus-visible:ring-destructive/50"
      />
    </div>
  )
}
