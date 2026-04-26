import { Mail, Settings, Trash2 } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  List,
  ListItem,
  ListItemEnd,
  ListItemStart,
} from "@/components/ui/list"

export default function ListWithBadge() {
  return (
    <List>
      <ListItem>
        <ListItemStart>
          <Mail className="h-5 w-5" />
        </ListItemStart>
        Inbox
        <ListItemEnd>
          <Badge variant="secondary" size="sm">
            14
          </Badge>
        </ListItemEnd>
      </ListItem>
      <ListItem>
        <ListItemStart>
          <Trash2 className="h-5 w-5" />
        </ListItemStart>
        Trash
        <ListItemEnd>
          <Badge variant="secondary" size="sm">
            40
          </Badge>
        </ListItemEnd>
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
