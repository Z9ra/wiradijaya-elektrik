import { X } from "lucide-react"

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

export default function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Creative Tim UI</DialogTitle>
        </DialogHeader>
        <DialogDescription className="mt-2 mb-6">
          Creative Tim UI is an open-source library that uses the power of
          Tailwind CSS and React to help you build unique web projects faster
          and easier. The stunning design inspired by Material Design is a
          bonus! Get Creative Tim UI and take advantage of its free components
          and features that will help you set up your web project quickly.
        </DialogDescription>
        <DialogFooter>
          <Button variant="ghost" className="text-destructive">
            Cancel
          </Button>
          <Button>Get Started</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
