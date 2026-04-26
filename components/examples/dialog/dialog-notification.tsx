import { Bell } from "lucide-react"

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

export default function DialogNotification() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Notification</Button>
      </DialogTrigger>
      <DialogContent className="p-8 sm:max-w-md">
        <DialogHeader className="text-center">
          <DialogTitle className="text-center">
            Your Attention is Required!
          </DialogTitle>
          <DialogDescription className="text-center">
            Choose which card you want to connect
          </DialogDescription>
        </DialogHeader>
        <div className="mt-12 flex flex-col items-center text-center">
          <Bell className="mb-6 h-24 w-24" />
          <h6 className="text-lg font-semibold">You should read this!</h6>
          <p className="text-muted-foreground mt-2 text-center">
            Many people limit themselves by their own self-doubt, slowing their
            progress. Fortunately, I was raised with the belief that I could
            achieve anything.
          </p>
        </div>
        <DialogFooter className="mt-8 mb-1">
          <Button variant="ghost" className="text-destructive">
            Cancel
          </Button>
          <Button>Got it</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
