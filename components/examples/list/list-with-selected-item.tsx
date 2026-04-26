"use client"

import * as React from "react"

import { List, ListItem } from "@/components/ui/list"

export default function ListWithSelectedItem() {
  const [selected, setSelected] = React.useState("inbox")

  return (
    <List>
      <ListItem
        selected={selected === "inbox"}
        onClick={() => setSelected("inbox")}
      >
        Inbox
      </ListItem>
      <ListItem
        selected={selected === "trash"}
        onClick={() => setSelected("trash")}
      >
        Trash
      </ListItem>
      <ListItem
        selected={selected === "settings"}
        onClick={() => setSelected("settings")}
      >
        Settings
      </ListItem>
    </List>
  )
}
