import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function MenuWithScrollingContent() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="max-h-72 overflow-y-auto">
        <DropdownMenuItem>Menu Item 1</DropdownMenuItem>
        <DropdownMenuItem>Menu Item 2</DropdownMenuItem>
        <DropdownMenuItem>Menu Item 3</DropdownMenuItem>
        <DropdownMenuItem>Menu Item 4</DropdownMenuItem>
        <DropdownMenuItem>Menu Item 5</DropdownMenuItem>
        <DropdownMenuItem>Menu Item 6</DropdownMenuItem>
        <DropdownMenuItem>Menu Item 7</DropdownMenuItem>
        <DropdownMenuItem>Menu Item 8</DropdownMenuItem>
        <DropdownMenuItem>Menu Item 9</DropdownMenuItem>
        <DropdownMenuItem>Menu Item 10</DropdownMenuItem>
        <DropdownMenuItem>Menu Item 11</DropdownMenuItem>
        <DropdownMenuItem>Menu Item 12</DropdownMenuItem>
        <DropdownMenuItem>Menu Item 13</DropdownMenuItem>
        <DropdownMenuItem>Menu Item 14</DropdownMenuItem>
        <DropdownMenuItem>Menu Item 15</DropdownMenuItem>
        <DropdownMenuItem>Menu Item 16</DropdownMenuItem>
        <DropdownMenuItem>Menu Item 17</DropdownMenuItem>
        <DropdownMenuItem>Menu Item 18</DropdownMenuItem>
        <DropdownMenuItem>Menu Item 19</DropdownMenuItem>
        <DropdownMenuItem>Menu Item 20</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
