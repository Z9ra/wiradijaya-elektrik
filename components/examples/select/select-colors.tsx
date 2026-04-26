import { cn } from "@/lib/utils"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function SelectColors() {
  return (
    <div className="flex w-72 flex-col items-center gap-4">
      <Select>
        <SelectTrigger
          className={cn(
            "border-primary/50 focus-visible:border-primary focus-visible:ring-primary/50 w-72"
          )}
        >
          <SelectValue placeholder="Color. e.g. primary" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="primary">Color Primary</SelectItem>
          <SelectItem value="secondary">Color Secondary</SelectItem>
          <SelectItem value="info">Color Info</SelectItem>
          <SelectItem value="success">Color Success</SelectItem>
          <SelectItem value="warning">Color Warning</SelectItem>
          <SelectItem value="error">Color Error</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger
          className={cn(
            "border-secondary/50 focus-visible:border-secondary focus-visible:ring-secondary/50 w-72"
          )}
        >
          <SelectValue placeholder="Color. e.g. secondary" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="primary">Color Primary</SelectItem>
          <SelectItem value="secondary">Color Secondary</SelectItem>
          <SelectItem value="info">Color Info</SelectItem>
          <SelectItem value="success">Color Success</SelectItem>
          <SelectItem value="warning">Color Warning</SelectItem>
          <SelectItem value="error">Color Error</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger
          className={cn(
            "w-72 border-blue-500/50 focus-visible:border-blue-500 focus-visible:ring-blue-500/50"
          )}
        >
          <SelectValue placeholder="Color. e.g. info" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="primary">Color Primary</SelectItem>
          <SelectItem value="secondary">Color Secondary</SelectItem>
          <SelectItem value="info">Color Info</SelectItem>
          <SelectItem value="success">Color Success</SelectItem>
          <SelectItem value="warning">Color Warning</SelectItem>
          <SelectItem value="error">Color Error</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger
          className={cn(
            "w-72 border-green-500/50 focus-visible:border-green-500 focus-visible:ring-green-500/50"
          )}
        >
          <SelectValue placeholder="Color. e.g. success" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="primary">Color Primary</SelectItem>
          <SelectItem value="secondary">Color Secondary</SelectItem>
          <SelectItem value="info">Color Info</SelectItem>
          <SelectItem value="success">Color Success</SelectItem>
          <SelectItem value="warning">Color Warning</SelectItem>
          <SelectItem value="error">Color Error</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger
          className={cn(
            "w-72 border-yellow-500/50 focus-visible:border-yellow-500 focus-visible:ring-yellow-500/50"
          )}
        >
          <SelectValue placeholder="Color. e.g. warning" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="primary">Color Primary</SelectItem>
          <SelectItem value="secondary">Color Secondary</SelectItem>
          <SelectItem value="info">Color Info</SelectItem>
          <SelectItem value="success">Color Success</SelectItem>
          <SelectItem value="warning">Color Warning</SelectItem>
          <SelectItem value="error">Color Error</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger
          className={cn(
            "border-destructive/50 focus-visible:border-destructive focus-visible:ring-destructive/50 w-72"
          )}
        >
          <SelectValue placeholder="Color. e.g. error" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="primary">Color Primary</SelectItem>
          <SelectItem value="secondary">Color Secondary</SelectItem>
          <SelectItem value="info">Color Info</SelectItem>
          <SelectItem value="success">Color Success</SelectItem>
          <SelectItem value="warning">Color Warning</SelectItem>
          <SelectItem value="error">Color Error</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
