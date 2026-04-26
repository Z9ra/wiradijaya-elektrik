import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { List, ListItem, ListItemStart } from "@/components/ui/list"

interface ListItemProps {
  img: string
  title: string
  description: string
}

function ListItemWithAvatar({ img, title, description }: ListItemProps) {
  return (
    <ListItem>
      <ListItemStart>
        <Avatar>
          <AvatarImage src={img} alt="profile-picture" />
          <AvatarFallback>{title.charAt(0)}</AvatarFallback>
        </Avatar>
      </ListItemStart>
      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-foreground text-sm">{description}</p>
      </div>
    </ListItem>
  )
}

export default function ListWithAvatar() {
  return (
    <List>
      <ListItemWithAvatar
        img="https://images.unsplash.com/photo-1750223642533-1b74b17edae8?auto=format&fit=crop&q=80&w=400&h=400"
        title="Alex Andrew"
        description="Software Engineer @ Creative Tim UI"
      />
      <ListItemWithAvatar
        img="https://images.unsplash.com/photo-1750223642533-1b74b17edae8?auto=format&fit=crop&q=80&w=400&h=400"
        title="Alexander"
        description="Backend Developer @ Creative Tim UI"
      />
      <ListItemWithAvatar
        img="https://images.unsplash.com/photo-1750223642533-1b74b17edae8?auto=format&fit=crop&q=80&w=400&h=400"
        title="Emma Willever"
        description="UI/UX Designer @ Creative Tim UI"
      />
    </List>
  )
}
