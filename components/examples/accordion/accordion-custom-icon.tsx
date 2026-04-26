import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { Minus, Plus } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion"

const CustomAccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=closed]>.minus-icon]:hidden [&[data-state=open]>.plus-icon]:hidden",
        className
      )}
      {...props}
    >
      {children}
      <Plus className="plus-icon h-4 w-4 shrink-0" />
      <Minus className="minus-icon h-4 w-4 shrink-0" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
CustomAccordionTrigger.displayName = "CustomAccordionTrigger"

export default function AccordionCustomIcon() {
  return (
    <Accordion type="single" collapsible defaultValue="react">
      <AccordionItem value="react">
        <CustomAccordionTrigger>Creative Tim UI React</CustomAccordionTrigger>
        <AccordionContent>
          Creative Tim UI is an open-source library crafted in Tailwind CSS. Get
          Creative Tim UI and take advantage of its free components and features
          that will help you set up your web project quickly.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="html">
        <CustomAccordionTrigger>Creative Tim UI HTML</CustomAccordionTrigger>
        <AccordionContent>
          Creative Tim UI is an open-source library crafted in Tailwind CSS. Get
          Creative Tim UI and take advantage of its free components and features
          that will help you set up your web project quickly.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="vue">
        <CustomAccordionTrigger>Creative Tim UI Vue</CustomAccordionTrigger>
        <AccordionContent>
          Creative Tim UI is an open-source library crafted in Tailwind CSS. Get
          Creative Tim UI and take advantage of its free components and features
          that will help you set up your web project quickly.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
