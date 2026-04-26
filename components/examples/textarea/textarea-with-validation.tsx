import { Textarea } from "@/components/ui/textarea"

export default function TextareaWithValidation() {
  return (
    <div className="w-full space-y-6">
      <div className="w-full space-y-1">
        <Textarea
          placeholder="Textarea Error"
          className="border-destructive focus-visible:ring-destructive/20"
          aria-invalid="true"
        />
        <p className="text-destructive text-xs">Something went wrong!</p>
      </div>
      <div className="w-full space-y-1">
        <Textarea
          placeholder="Textarea Success"
          className="border-green-500 focus-visible:ring-green-500/20"
        />
        <p className="text-xs text-green-600 dark:text-green-400">
          Congratulations 🎉
        </p>
      </div>
    </div>
  )
}
