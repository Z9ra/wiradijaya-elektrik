import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function SelectDisabled() {
  return (
    <Select disabled>
      <SelectTrigger className="w-72">
        <SelectValue placeholder="Select Version" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="react">Creative Tim UI React</SelectItem>
        <SelectItem value="html">Creative Tim UI HTML</SelectItem>
        <SelectItem value="vue">Creative Tim UI Vue</SelectItem>
        <SelectItem value="svelte">Creative Tim UI Svelte</SelectItem>
      </SelectContent>
    </Select>
  )
}
