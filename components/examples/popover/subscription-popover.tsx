import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export default function SubscriptionPopover() {
  return (
    <div className="min-h-40">
      <Popover>
        <PopoverTrigger asChild>
          <Button>Subscribe</Button>
        </PopoverTrigger>
        <PopoverContent className="w-96">
          <h3 className="text-foreground font-bold">Newsletter Subscription</h3>
          <form
            action="#"
            className="mt-3 flex w-full items-center justify-center gap-2"
          >
            <Input type="email" placeholder="someone@example.com" />
            <Button type="submit">Subscribe</Button>
          </form>
        </PopoverContent>
      </Popover>
    </div>
  )
}
