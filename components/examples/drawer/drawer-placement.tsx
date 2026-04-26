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

export default function DrawerPlacement() {
  return (
    <div className="flex gap-4">
      <Drawer direction="top">
        <DrawerTrigger asChild>
          <Button className="w-auto">Open Drawer Top</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader className="px-4 text-left">
            <DrawerTitle className="text-left">Creative Tim UI</DrawerTitle>
            <DrawerDescription className="mt-2 text-left">
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
          <DrawerFooter className="flex-row gap-2 px-4">
            <Button className="w-auto">Get Started</Button>
            <Button variant="secondary" className="w-auto">
              Documentation
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <Drawer direction="right">
        <DrawerTrigger asChild>
          <Button>Open Drawer Right</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Creative Tim UI</DrawerTitle>
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
          <DrawerDescription className="mt-2 mb-6 px-4">
            A collection of open-source UI Components, Blocks & AI Agents by
            Creative Tim on top of shadcn/ui. Integrate them in v0, Lovable,
            Claude, or your application.
          </DrawerDescription>
          <DrawerFooter className="px-4">
            <Button>Get Started</Button>
            <Button variant="secondary">Documentation</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <Drawer direction="bottom">
        <DrawerTrigger asChild>
          <Button className="w-auto">Open Drawer Bottom</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader className="px-4 text-left">
            <DrawerTitle className="text-left">Creative Tim UI</DrawerTitle>
            <DrawerDescription className="mt-2 text-left">
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
          <DrawerFooter className="flex-row gap-2 px-4">
            <Button className="w-auto">Get Started</Button>
            <Button variant="secondary" className="w-auto">
              Documentation
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <Drawer direction="left">
        <DrawerTrigger asChild>
          <Button>Open Drawer Left</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Creative Tim UI</DrawerTitle>
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
          <DrawerDescription className="mt-2 mb-6 px-4">
            A collection of open-source UI Components, Blocks & AI Agents by
            Creative Tim on top of shadcn/ui. Integrate them in v0, Lovable,
            Claude, or your application.
          </DrawerDescription>
          <DrawerFooter className="px-4">
            <Button>Get Started</Button>
            <Button variant="secondary">Documentation</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
