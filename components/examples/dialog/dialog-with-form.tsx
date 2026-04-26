import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
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

export default function DialogWithForm() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Sign In</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Sign In</DialogTitle>
          <DialogDescription>
            Enter your email and password to Sign In.
          </DialogDescription>
        </DialogHeader>
        <form action="#" className="mt-6">
          <div className="mt-2 mb-4 space-y-1.5">
            <Label htmlFor="email" className="font-semibold">
              Email
            </Label>
            <Input id="email" type="email" placeholder="someone@example.com" />
          </div>
          <div className="mb-4 space-y-1.5">
            <Label htmlFor="password" className="font-semibold">
              Password
            </Label>
            <Input id="password" type="password" placeholder="************" />
          </div>
          <div className="mb-4 flex items-center gap-2">
            <Checkbox id="checkbox" />
            <Label
              htmlFor="checkbox"
              className="cursor-pointer text-sm font-normal"
            >
              Remember Me
            </Label>
          </div>
          <Button type="submit" className="w-full">
            Sign In
          </Button>
        </form>
        <p className="text-muted-foreground mt-3 mb-2 flex items-center justify-center gap-1 text-sm">
          Don&apos;t have an account?{" "}
          <a href="#" className="text-primary font-semibold">
            Sign up
          </a>
        </p>
      </DialogContent>
    </Dialog>
  )
}
