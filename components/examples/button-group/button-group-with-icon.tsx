import { Bold, Italic, Underline } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"

export default function ButtonGroupWithIcon() {
  return (
    <div className="flex flex-col gap-4">
      <ButtonGroup variant="ghost">
        <Button variant="ghost">
          <Bold className="mr-1.5 h-4 w-4" />
          Bold
        </Button>
        <Button variant="ghost">
          <Italic className="mr-1.5 h-4 w-4" />
          Italic
        </Button>
        <Button variant="ghost">
          <Underline className="mr-1.5 h-4 w-4" />
          Underline
        </Button>
      </ButtonGroup>
      <ButtonGroup variant="outline">
        <Button variant="outline">
          <Bold className="mr-1.5 h-4 w-4" />
          Bold
        </Button>
        <Button variant="outline">
          <Italic className="mr-1.5 h-4 w-4" />
          Italic
        </Button>
        <Button variant="outline">
          <Underline className="mr-1.5 h-4 w-4" />
          Underline
        </Button>
      </ButtonGroup>
      <ButtonGroup variant="solid">
        <Button>
          <Bold className="mr-1.5 h-4 w-4" />
          Bold
        </Button>
        <Button>
          <Italic className="mr-1.5 h-4 w-4" />
          Italic
        </Button>
        <Button>
          <Underline className="mr-1.5 h-4 w-4" />
          Underline
        </Button>
      </ButtonGroup>
      <ButtonGroup variant="gradient">
        <Button className="from-primary to-primary/80 bg-gradient-to-r">
          <Bold className="mr-1.5 h-4 w-4" />
          Bold
        </Button>
        <Button className="from-primary to-primary/80 bg-gradient-to-r">
          <Italic className="mr-1.5 h-4 w-4" />
          Italic
        </Button>
        <Button className="from-primary to-primary/80 bg-gradient-to-r">
          <Underline className="mr-1.5 h-4 w-4" />
          Underline
        </Button>
      </ButtonGroup>
    </div>
  )
}
