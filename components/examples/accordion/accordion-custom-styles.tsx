import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function AccordionCustomStyles() {
  return (
    <Accordion type="single" collapsible defaultValue="react">
      <AccordionItem
        value="react"
        className="border-border mb-2 rounded-lg border p-3 last:mb-0"
      >
        <AccordionTrigger className="p-0 hover:no-underline">
          Creative Tim UI React
        </AccordionTrigger>
        <AccordionContent className="pt-3 pb-0">
          Creative Tim UI is an open-source library crafted in Tailwind CSS. Get
          Creative Tim UI and take advantage of its free components and features
          that will help you set up your web project quickly.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="html"
        className="border-border mb-2 rounded-lg border p-3 last:mb-0"
      >
        <AccordionTrigger className="p-0 hover:no-underline">
          Creative Tim UI HTML
        </AccordionTrigger>
        <AccordionContent className="pt-3 pb-0">
          Creative Tim UI is an open-source library crafted in Tailwind CSS. Get
          Creative Tim UI and take advantage of its free components and features
          that will help you set up your web project quickly.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="vue"
        className="border-border rounded-lg border p-3"
      >
        <AccordionTrigger className="p-0 hover:no-underline">
          Creative Tim UI Vue
        </AccordionTrigger>
        <AccordionContent className="pt-3 pb-0">
          Creative Tim UI is an open-source library crafted in Tailwind CSS. Get
          Creative Tim UI and take advantage of its free components and features
          that will help you set up your web project quickly.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
