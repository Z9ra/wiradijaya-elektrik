import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function AccordionDemo() {
  return (
    <Accordion type="single" collapsible defaultValue="react">
      <AccordionItem value="react">
        <AccordionTrigger>Creative Tim UI React</AccordionTrigger>
        <AccordionContent>
          Creative Tim UI is an open-source library crafted in Tailwind CSS. Get
          Creative Tim UI and take advantage of its free components and features
          that will help you set up your web project quickly.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="html">
        <AccordionTrigger>Creative Tim UI HTML</AccordionTrigger>
        <AccordionContent>
          Creative Tim UI is an open-source library crafted in Tailwind CSS. Get
          Creative Tim UI and take advantage of its free components and features
          that will help you set up your web project quickly.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="vue">
        <AccordionTrigger>Creative Tim UI Vue</AccordionTrigger>
        <AccordionContent>
          Creative Tim UI is an open-source library crafted in Tailwind CSS. Get
          Creative Tim UI and take advantage of its free components and features
          that will help you set up your web project quickly.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
