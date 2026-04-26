import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function SelectSizes() {
  return (
    <div className="flex w-72 flex-col items-center gap-4">
      <Select>
        <SelectTrigger size="sm" className="w-72">
          <SelectValue placeholder="Size. e.g. small" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="small">Size Small</SelectItem>
          <SelectItem value="medium">Size Medium</SelectItem>
          <SelectItem value="large">Size Large</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className="w-72">
          <SelectValue placeholder="Size. e.g. medium" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="small">Size Small</SelectItem>
          <SelectItem value="medium">Size Medium</SelectItem>
          <SelectItem value="large">Size Large</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className="h-10 w-72">
          <SelectValue placeholder="Size. e.g. large" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="small">Size Small</SelectItem>
          <SelectItem value="medium">Size Medium</SelectItem>
          <SelectItem value="large">Size Large</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
