import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"

export default function ButtonGroupSizes() {
  return (
    <div className="flex flex-col gap-4">
      <ButtonGroup size="sm">
        <Button size="sm">React</Button>
        <Button size="sm">Vue</Button>
        <Button size="sm">Svelte</Button>
      </ButtonGroup>
      <ButtonGroup size="md">
        <Button>React</Button>
        <Button>Vue</Button>
        <Button>Svelte</Button>
      </ButtonGroup>
      <ButtonGroup size="lg">
        <Button size="lg">React</Button>
        <Button size="lg">Vue</Button>
        <Button size="lg">Svelte</Button>
      </ButtonGroup>
    </div>
  )
}
