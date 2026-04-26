import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function DialogMessage() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Message</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>New message to @</DialogTitle>
          <DialogDescription>
            Write the message and then click button.
          </DialogDescription>
        </DialogHeader>
        <form action="#" className="mt-6">
          <div className="mt-2 mb-4 space-y-1.5">
            <Label htmlFor="username" className="font-semibold">
              Username
            </Label>
            <Input
              id="username"
              type="text"
              placeholder="Username"
              className="w-full"
            />
          </div>
          <div className="w-full space-y-1.5">
            <Label htmlFor="message" className="font-medium">
              Message
            </Label>
            <Textarea id="message" placeholder="Your message..." />
          </div>
          <DialogFooter className="mt-4">
            <Button type="button" variant="secondary">
              Cancel
            </Button>
            <Button type="submit">Send Message</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
