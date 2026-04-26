import { X } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

export default function DrawerDemo() {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button>Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Creative Tim UI</DrawerTitle>
          <DrawerDescription className="mt-2">
            A collection of open-source UI Components, Blocks & AI Agents by
            Creative Tim on top of shadcn/ui. Integrate them in v0, Lovable,
            Claude, or your application.
          </DrawerDescription>
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
        <DrawerFooter className="px-4">
          <Button>Get Started</Button>
          <Button variant="secondary">Documentation</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
