import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export default function PopoverPlacement() {
  return (
    <div className="flex min-h-[600px] w-full items-center justify-center rounded-lg border p-8">
      <div className="flex flex-col items-center gap-6">
        <div className="flex gap-3">
          <Popover>
            <PopoverTrigger asChild>
              <Button>Top</Button>
            </PopoverTrigger>
            <PopoverContent className="max-w-sm" side="top">
              <p className="text-foreground text-sm">
                This is a very beautiful popover, show some love.
              </p>
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger asChild>
              <Button>Top Start</Button>
            </PopoverTrigger>
            <PopoverContent className="max-w-sm" side="top" align="start">
              <p className="text-foreground text-sm">
                This is a very beautiful popover, show some love.
              </p>
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger asChild>
              <Button>Top End</Button>
            </PopoverTrigger>
            <PopoverContent className="max-w-sm" side="top" align="end">
              <p className="text-foreground text-sm">
                This is a very beautiful popover, show some love.
              </p>
            </PopoverContent>
          </Popover>
        </div>

        <div className="flex items-center gap-12">
          <div className="flex flex-col gap-3">
            <Popover>
              <PopoverTrigger asChild>
                <Button>Left</Button>
              </PopoverTrigger>
              <PopoverContent className="max-w-sm" side="left">
                <p className="text-foreground text-sm">
                  This is a very beautiful popover, show some love.
                </p>
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger asChild>
                <Button>Left Start</Button>
              </PopoverTrigger>
              <PopoverContent className="max-w-sm" side="left" align="start">
                <p className="text-foreground text-sm">
                  This is a very beautiful popover, show some love.
                </p>
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger asChild>
                <Button>Left End</Button>
              </PopoverTrigger>
              <PopoverContent className="max-w-sm" side="left" align="end">
                <p className="text-foreground text-sm">
                  This is a very beautiful popover, show some love.
                </p>
              </PopoverContent>
            </Popover>
          </div>

          <div className="flex flex-col gap-3">
            <Popover>
              <PopoverTrigger asChild>
                <Button>Right</Button>
              </PopoverTrigger>
              <PopoverContent className="max-w-sm" side="right">
                <p className="text-foreground text-sm">
                  This is a very beautiful popover, show some love.
                </p>
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger asChild>
                <Button>Right Start</Button>
              </PopoverTrigger>
              <PopoverContent className="max-w-sm" side="right" align="start">
                <p className="text-foreground text-sm">
                  This is a very beautiful popover, show some love.
                </p>
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger asChild>
                <Button>Right End</Button>
              </PopoverTrigger>
              <PopoverContent className="max-w-sm" side="right" align="end">
                <p className="text-foreground text-sm">
                  This is a very beautiful popover, show some love.
                </p>
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <div className="flex gap-3">
          <Popover>
            <PopoverTrigger asChild>
              <Button>Bottom</Button>
            </PopoverTrigger>
            <PopoverContent className="max-w-sm" side="bottom">
              <p className="text-foreground text-sm">
                This is a very beautiful popover, show some love.
              </p>
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger asChild>
              <Button>Bottom Start</Button>
            </PopoverTrigger>
            <PopoverContent className="max-w-sm" side="bottom" align="start">
              <p className="text-foreground text-sm">
                This is a very beautiful popover, show some love.
              </p>
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger asChild>
              <Button>Bottom End</Button>
            </PopoverTrigger>
            <PopoverContent className="max-w-sm" side="bottom" align="end">
              <p className="text-foreground text-sm">
                This is a very beautiful popover, show some love.
              </p>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  )
}
