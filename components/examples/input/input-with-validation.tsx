import { Input } from "@/components/ui/input"

export default function InputWithValidation() {
  return (
    <div className="w-72 space-y-6">
      <div>
        <Input
          aria-invalid="true"
          placeholder="Input Error"
          className="w-full"
        />
        <p className="text-destructive mt-1 block text-sm">
          Something went wrong!
        </p>
      </div>
      <div>
        <Input
          placeholder="Input Success"
          className="w-full border-green-500/50 focus-visible:border-green-500 focus-visible:ring-green-500/50"
        />
        <p className="mt-1 block text-sm text-green-500">Congratulations 🎉</p>
      </div>
    </div>
  )
}
