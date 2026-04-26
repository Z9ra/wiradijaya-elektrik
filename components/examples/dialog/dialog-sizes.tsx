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

export default function DialogSizes() {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className="flex items-center justify-center gap-2">
        <Dialog>
          <DialogTrigger asChild>
            <Button>Open XS</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-xs">
            <DialogHeader>
              <DialogTitle>Creative Tim UI</DialogTitle>
            </DialogHeader>
            <DialogDescription className="mt-2 mb-6">
              Creative Tim UI is an open-source library that uses the power of
              Tailwind CSS and React to help you build unique web projects
              faster and easier. The stunning design inspired by Material Design
              is a bonus! Get Creative Tim UI and take advantage of its free
              components and features that will help you set up your web project
              quickly.
            </DialogDescription>
            <DialogFooter>
              <Button variant="ghost" className="text-destructive">
                Cancel
              </Button>
              <Button>Get Started</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Open SM</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Creative Tim UI</DialogTitle>
            </DialogHeader>
            <DialogDescription className="mt-2 mb-6">
              Creative Tim UI is an open-source library that uses the power of
              Tailwind CSS and React to help you build unique web projects
              faster and easier. The stunning design inspired by Material Design
              is a bonus! Get Creative Tim UI and take advantage of its free
              components and features that will help you set up your web project
              quickly.
            </DialogDescription>
            <DialogFooter>
              <Button variant="ghost" className="text-destructive">
                Cancel
              </Button>
              <Button>Get Started</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Open MD</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>Creative Tim UI</DialogTitle>
            </DialogHeader>
            <DialogDescription className="mt-2 mb-6">
              Creative Tim UI is an open-source library that uses the power of
              Tailwind CSS and React to help you build unique web projects
              faster and easier. The stunning design inspired by Material Design
              is a bonus! Get Creative Tim UI and take advantage of its free
              components and features that will help you set up your web project
              quickly.
            </DialogDescription>
            <DialogFooter>
              <Button variant="ghost" className="text-destructive">
                Cancel
              </Button>
              <Button>Get Started</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="flex items-center justify-center gap-2">
        <Dialog>
          <DialogTrigger asChild>
            <Button>Open LG</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-2xl">
            <DialogHeader>
              <DialogTitle>Creative Tim UI</DialogTitle>
            </DialogHeader>
            <DialogDescription className="mt-2 mb-6">
              Creative Tim UI is an open-source library that uses the power of
              Tailwind CSS and React to help you build unique web projects
              faster and easier. The stunning design inspired by Material Design
              is a bonus! Get Creative Tim UI and take advantage of its free
              components and features that will help you set up your web project
              quickly.
            </DialogDescription>
            <DialogFooter>
              <Button variant="ghost" className="text-destructive">
                Cancel
              </Button>
              <Button>Get Started</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Open XL</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-4xl">
            <DialogHeader>
              <DialogTitle>Creative Tim UI</DialogTitle>
            </DialogHeader>
            <DialogDescription className="mt-2 mb-6">
              Creative Tim UI is an open-source library that uses the power of
              Tailwind CSS and React to help you build unique web projects
              faster and easier. The stunning design inspired by Material Design
              is a bonus! Get Creative Tim UI and take advantage of its free
              components and features that will help you set up your web project
              quickly.
            </DialogDescription>
            <DialogFooter>
              <Button variant="ghost" className="text-destructive">
                Cancel
              </Button>
              <Button>Get Started</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Open Screen</Button>
          </DialogTrigger>
          <DialogContent className="sm:h-[95vh] sm:max-w-[95vw]">
            <DialogHeader>
              <DialogTitle>Creative Tim UI</DialogTitle>
            </DialogHeader>
            <DialogDescription className="mt-2 mb-6">
              Creative Tim UI is an open-source library that uses the power of
              Tailwind CSS and React to help you build unique web projects
              faster and easier. The stunning design inspired by Material Design
              is a bonus! Get Creative Tim UI and take advantage of its free
              components and features that will help you set up your web project
              quickly.
            </DialogDescription>
            <DialogFooter>
              <Button variant="ghost" className="text-destructive">
                Cancel
              </Button>
              <Button>Get Started</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
