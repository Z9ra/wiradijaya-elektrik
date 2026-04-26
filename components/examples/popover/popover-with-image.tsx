import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export default function PopoverWithImage() {
  return (
    <div className="min-h-80">
      <Popover>
        <PopoverTrigger asChild>
          <Button>More Info</Button>
        </PopoverTrigger>
        <PopoverContent className="grid w-[30rem] grid-cols-2 gap-4">
          <div className="pl-1">
            <h3 className="text-foreground mb-1 font-semibold">
              Creative Tim UI
            </h3>
            <p className="text-foreground mb-4 block text-sm">
              Creative Tim UI is an easy to use components library for Tailwind
              CSS and shadcn/ui. It features multiple React and HTML components,
              all written with Tailwind CSS classes and shadcn/ui guidelines.
            </p>
            <Button asChild size="sm">
              <a href="#popover-with-image">
                Read More
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </a>
            </Button>
          </div>
          <img
            src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/ct-assets/mt-demo.jpg"
            alt="image"
            className="h-auto max-h-[220px] w-full rounded-[5px] object-cover"
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
