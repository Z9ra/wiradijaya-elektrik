import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Chip } from "@/components/ui/chip"

export default function ChipWithAvatar() {
  return (
    <Chip>
      <Avatar className="size-5">
        <AvatarImage
          src="https://images.unsplash.com/photo-1750223642533-1b74b17edae8?auto=format&fit=crop&q=80&w=400&h=400"
          alt="profile-picture"
        />
      </Avatar>
      Alex Andrew
    </Chip>
  )
}
