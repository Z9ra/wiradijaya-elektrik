import { Mail, Settings, Trash2 } from "lucide-react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import {
  List,
  ListItem,
  ListItemEnd,
  ListItemStart,
} from "@/components/ui/list"

export default function ListCustomStyles() {
  return (
    <List>
      <ListItem
        className={cn(
          "group hover:bg-neutral-900 hover:text-white focus:bg-neutral-900 focus:text-white"
        )}
      >
        <ListItemStart>
          <Mail className="h-5 w-5" />
        </ListItemStart>
        Inbox
        <ListItemEnd>
          <Badge
            variant="secondary"
            size="sm"
            className={cn(
              "transition-colors duration-300 group-hover:bg-white"
            )}
          >
            14
          </Badge>
        </ListItemEnd>
      </ListItem>
      <ListItem
        className={cn(
          "group hover:bg-neutral-900 hover:text-white focus:bg-neutral-900 focus:text-white"
        )}
      >
        <ListItemStart>
          <Trash2 className="h-5 w-5" />
        </ListItemStart>
        Trash
        <ListItemEnd>
          <Badge
            variant="secondary"
            size="sm"
            className={cn(
              "transition-colors duration-300 group-hover:bg-white"
            )}
          >
            40
          </Badge>
        </ListItemEnd>
      </ListItem>
      <ListItem
        className={cn(
          "group hover:bg-neutral-900 hover:text-white focus:bg-neutral-900 focus:text-white"
        )}
      >
        <ListItemStart>
          <Settings className="h-5 w-5" />
        </ListItemStart>
        Settings
      </ListItem>
    </List>
  )
}
