"use client"

import * as React from "react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

export default function AccordionControlled() {
  const [value, setValue] = React.useState("html")

  return (
    <div>
      <div className="mb-4 flex gap-2">
        <Button
          className="flex-1"
          variant={value === "react" ? "default" : "outline"}
          onClick={() => setValue("react")}
        >
          React Version
        </Button>
        <Button
          className="flex-1"
          variant={value === "html" ? "default" : "outline"}
          onClick={() => setValue("html")}
        >
          HTML Version
        </Button>
        <Button
          className="flex-1"
          variant={value === "vue" ? "default" : "outline"}
          onClick={() => setValue("vue")}
        >
          Vue Version
        </Button>
      </div>
      <Accordion
        type="single"
        collapsible
        value={value}
        onValueChange={setValue}
      >
        <AccordionItem value="react">
          <AccordionTrigger>Creative Tim UI React</AccordionTrigger>
          <AccordionContent>
            Creative Tim UI is an open-source library crafted in Tailwind CSS.
            Get Creative Tim UI and take advantage of its free components and
            features that will help you set up your web project quickly.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="html">
          <AccordionTrigger>Creative Tim UI HTML</AccordionTrigger>
          <AccordionContent>
            Creative Tim UI is an open-source library crafted in Tailwind CSS.
            Get Creative Tim UI and take advantage of its free components and
            features that will help you set up your web project quickly.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="vue">
          <AccordionTrigger>Creative Tim UI Vue</AccordionTrigger>
          <AccordionContent>
            Creative Tim UI is an open-source library crafted in Tailwind CSS.
            Get Creative Tim UI and take advantage of its free components and
            features that will help you set up your web project quickly.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
