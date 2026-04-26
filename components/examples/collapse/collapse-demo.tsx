"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Collapse, CollapseContent } from "@/components/ui/collapse"
import { List, ListItem, ListItemEnd } from "@/components/ui/list"

export default function CollapseDemo() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <List>
      <ListItem
        onClick={() => setIsOpen((cur) => !cur)}
        className="cursor-pointer"
      >
        Components
        <ListItemEnd>
          <ChevronDown
            className={cn(
              "h-5 w-5 transition-transform duration-200",
              isOpen && "rotate-180"
            )}
          />
        </ListItemEnd>
      </ListItem>
      <Collapse open={isOpen}>
        <CollapseContent>
          <List>
            <ListItem>Avatar</ListItem>
            <ListItem>Button</ListItem>
            <ListItem>Input</ListItem>
            <ListItem>Checkbox</ListItem>
            <ListItem>Select</ListItem>
          </List>
        </CollapseContent>
      </Collapse>
    </List>
  )
}
