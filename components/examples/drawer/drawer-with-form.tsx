import { X } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function DrawerWithForm() {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button>Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Contact Us</DrawerTitle>
        </DrawerHeader>
        <DrawerClose asChild>
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 h-8 w-8 rounded-full"
          >
            <X className="h-5 w-5" />
          </Button>
        </DrawerClose>
        <DrawerDescription className="mt-4 mb-6 px-4">
          Write the message and then click button.
        </DrawerDescription>
        <div className="mt-6 space-y-4 px-4">
          <Input id="email" type="email" placeholder="Email" />
          <Input placeholder="Subject" />
          <Textarea placeholder="Message" />
          <Button className="w-full">Send message</Button>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
