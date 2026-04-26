import { Mail, Settings, Trash2 } from "lucide-react"

import { List, ListItem, ListItemStart } from "@/components/ui/list"

export default function ListWithIcon() {
  return (
    <List>
      <ListItem>
        <ListItemStart>
          <Mail className="h-5 w-5" />
        </ListItemStart>
        Inbox
      </ListItem>
      <ListItem>
        <ListItemStart>
          <Trash2 className="h-5 w-5" />
        </ListItemStart>
        Trash
      </ListItem>
      <ListItem>
        <ListItemStart>
          <Settings className="h-5 w-5" />
        </ListItemStart>
        Settings
      </ListItem>
    </List>
  )
}
