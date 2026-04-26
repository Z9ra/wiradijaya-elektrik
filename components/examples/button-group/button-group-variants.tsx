import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"

export default function ButtonGroupVariants() {
  return (
    <div className="flex flex-col gap-4">
      <ButtonGroup variant="ghost">
        <Button variant="ghost">React</Button>
        <Button variant="ghost">Vue</Button>
        <Button variant="ghost">Svelte</Button>
      </ButtonGroup>
      <ButtonGroup variant="outline">
        <Button variant="outline">React</Button>
        <Button variant="outline">Vue</Button>
        <Button variant="outline">Svelte</Button>
      </ButtonGroup>
      <ButtonGroup variant="solid">
        <Button>React</Button>
        <Button>Vue</Button>
        <Button>Svelte</Button>
      </ButtonGroup>
      <ButtonGroup variant="gradient">
        <Button className="from-primary to-primary/80 bg-gradient-to-r">
          React
        </Button>
        <Button className="from-primary to-primary/80 bg-gradient-to-r">
          Vue
        </Button>
        <Button className="from-primary to-primary/80 bg-gradient-to-r">
          Svelte
        </Button>
      </ButtonGroup>
    </div>
  )
}
