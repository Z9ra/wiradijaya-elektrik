import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"

export default function BlockLevelButtonGroup() {
  return (
    <div className="flex w-full flex-col gap-4">
      <ButtonGroup variant="ghost" fullWidth>
        <Button variant="ghost" className="flex-1">
          React
        </Button>
        <Button variant="ghost" className="flex-1">
          Vue
        </Button>
        <Button variant="ghost" className="flex-1">
          Svelte
        </Button>
      </ButtonGroup>
      <ButtonGroup variant="outline" fullWidth>
        <Button variant="outline" className="flex-1">
          React
        </Button>
        <Button variant="outline" className="flex-1">
          Vue
        </Button>
        <Button variant="outline" className="flex-1">
          Svelte
        </Button>
      </ButtonGroup>
      <ButtonGroup variant="solid" fullWidth>
        <Button className="flex-1">React</Button>
        <Button className="flex-1">Vue</Button>
        <Button className="flex-1">Svelte</Button>
      </ButtonGroup>
      <ButtonGroup variant="gradient" fullWidth>
        <Button className="from-primary to-primary/80 flex-1 bg-gradient-to-r">
          React
        </Button>
        <Button className="from-primary to-primary/80 flex-1 bg-gradient-to-r">
          Vue
        </Button>
        <Button className="from-primary to-primary/80 flex-1 bg-gradient-to-r">
          Svelte
        </Button>
      </ButtonGroup>
    </div>
  )
}
