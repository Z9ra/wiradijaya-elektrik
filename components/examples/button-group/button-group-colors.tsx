import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"

export default function ButtonGroupColors() {
  return (
    <div className="flex flex-col gap-4">
      <ButtonGroup>
        <Button>React</Button>
        <Button>Vue</Button>
        <Button>Svelte</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="secondary">React</Button>
        <Button variant="secondary">Vue</Button>
        <Button variant="secondary">Svelte</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button className="border-blue-500 bg-blue-500 text-white hover:bg-blue-600">
          React
        </Button>
        <Button className="border-blue-500 bg-blue-500 text-white hover:bg-blue-600">
          Vue
        </Button>
        <Button className="border-blue-500 bg-blue-500 text-white hover:bg-blue-600">
          Svelte
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button className="border-green-500 bg-green-500 text-white hover:bg-green-600">
          React
        </Button>
        <Button className="border-green-500 bg-green-500 text-white hover:bg-green-600">
          Vue
        </Button>
        <Button className="border-green-500 bg-green-500 text-white hover:bg-green-600">
          Svelte
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button className="border-yellow-500 bg-yellow-500 text-white hover:bg-yellow-600">
          React
        </Button>
        <Button className="border-yellow-500 bg-yellow-500 text-white hover:bg-yellow-600">
          Vue
        </Button>
        <Button className="border-yellow-500 bg-yellow-500 text-white hover:bg-yellow-600">
          Svelte
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="destructive">React</Button>
        <Button variant="destructive">Vue</Button>
        <Button variant="destructive">Svelte</Button>
      </ButtonGroup>
    </div>
  )
}
