import { List, ListItem } from "@/components/ui/list"

export default function ListWithDisabledItem() {
  return (
    <List>
      <ListItem disabled>Inbox</ListItem>
      <ListItem>Trash</ListItem>
      <ListItem>Settings</ListItem>
    </List>
  )
}
