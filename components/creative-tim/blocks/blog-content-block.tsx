"use client"

import { Copy, Facebook, Linkedin, Twitter } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function BlogContentBlock() {
  return (
    <section className="grid min-h-screen place-items-center">
      <div className="mx-auto max-w-screen-md p-4">
        <img
          src="https://v3.material-tailwind.com/trees.jpg"
          alt="nature"
          className="mx-auto mb-2 h-full w-full rounded-lg"
        />
        <p className="text-primary text-sm">
          Photo by Jackson Sophat on &nbsp;
          <a href="#" className="text-sm underline">
            Unsplash
          </a>
        </p>
        <p className="text-foreground mt-8 mb-10">
          Thank you Anna for the invite thank you to the whole Vogue team And I
          love you like Kanye loves Kanye.
        </p>
        <p className="text-foreground">
          The Arctic Ocean freezes every winter and much of the sea-ice then
          thaws every summer, and that process will continue whatever happens
          with climate change. Even if the Arctic continues to be one of the
          fastest-warming regions of the world, it will always be plunged into
          bitterly cold polar dark every winter. And year-by-year, for all kinds
          of natural reasons, there&apos;s huge variety of the state of the ice.
        </p>
        <h2 className="my-10 text-2xl leading-snug font-bold">
          So what does the new record for the lowest level of winter ice
          actually mean
        </h2>
        <p className="text-foreground">
          For a start, it does not automatically follow that a record amount of
          ice will melt this summer. More important for determining the size of
          the annual thaw is the state of the weather as the midnight sun
          approaches and temperatures rise. But over the more than 30 years of
          satellite records, scientists have observed a clear pattern of
          decline, decade-by-decade.
        </p>
        <p className="text-foreground my-8">
          The Arctic Ocean freezes every winter and much of the sea-ice then
          thaws every summer, and that process will continue whatever happens
          with climate change. Even if the Arctic continues to be one of the
          fastest-warming regions of the world, it will always be plunged into
          bitterly cold polar dark every winter. And year-by-year, for all kinds
          of natural reasons, there&apos;s huge variety of the state of the ice.
        </p>
        <p className="text-foreground mb-8">
          Society has put up so many boundaries, so many limitations on
          what&apos;s right and wrong that it&apos;s almost impossible to get a
          pure thought out.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 border-t pt-4 sm:justify-between">
          <div className="flex gap-2">
            <Badge variant="outline">Product</Badge>
            <Badge variant="outline">Design</Badge>
            <Badge variant="outline">UI</Badge>
          </div>
          <div className="flex gap-2">
            <Button
              size="sm"
              variant="outline"
              className="flex items-center gap-2"
            >
              <Copy className="h-4 w-4" />
              Copy Link
            </Button>
            <Button variant="outline" size="icon">
              <Twitter className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Facebook className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Linkedin className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
