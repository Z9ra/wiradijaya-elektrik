import { cn } from "@/lib/utils"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function SelectWithValidation() {
  return (
    <div className="flex w-72 flex-col items-center gap-4">
      <div className="w-full">
        <Select>
          <SelectTrigger
            aria-invalid="true"
            className={cn(
              "border-destructive/50 focus-visible:border-destructive focus-visible:ring-destructive/50 w-full"
            )}
          >
            <SelectValue placeholder="Select Version" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="react">Creative Tim UI React</SelectItem>
            <SelectItem value="html">Creative Tim UI HTML</SelectItem>
            <SelectItem value="vue">Creative Tim UI Vue</SelectItem>
            <SelectItem value="svelte">Creative Tim UI Svelte</SelectItem>
          </SelectContent>
        </Select>
        <p className="text-destructive mt-1 block text-sm">
          Something went wrong!
        </p>
      </div>
      <div className="w-full">
        <Select>
          <SelectTrigger
            className={cn(
              "w-full border-green-500/50 focus-visible:border-green-500 focus-visible:ring-green-500/50"
            )}
          >
            <SelectValue placeholder="Select Version" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="react">Creative Tim UI React</SelectItem>
            <SelectItem value="html">Creative Tim UI HTML</SelectItem>
            <SelectItem value="vue">Creative Tim UI Vue</SelectItem>
            <SelectItem value="svelte">Creative Tim UI Svelte</SelectItem>
          </SelectContent>
        </Select>
        <p className="mt-1 block text-sm text-green-500">Congratulations 🎉</p>
      </div>
    </div>
  )
}
