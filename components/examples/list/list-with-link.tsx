import { List, ListItem } from "@/components/ui/list"

export default function ListWithLink() {
  return (
    <List>
      <ListItem asChild>
        <a href="#list-with-link">Inbox</a>
      </ListItem>
      <ListItem asChild>
        <a href="#list-with-link">Trash</a>
      </ListItem>
      <ListItem asChild>
        <a href="#list-with-link">Settings</a>
      </ListItem>
    </List>
  )
}
