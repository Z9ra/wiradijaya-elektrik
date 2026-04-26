import { Avatar, AvatarImage } from "@/components/ui/avatar"

export default function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage
        src="https://images.unsplash.com/photo-1750223642533-1b74b17edae8?auto=format&fit=crop&q=80&w=400&h=400"
        alt="profile-picture"
      />
    </Avatar>
  )
}
