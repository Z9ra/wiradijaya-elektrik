import { Avatar, AvatarImage } from "@/components/ui/avatar"

export default function AvatarCustomStyles() {
  return (
    <Avatar className="size-12 border border-green-500 ring-4 ring-green-500/20">
      <AvatarImage
        src="https://images.unsplash.com/photo-1750223642533-1b74b17edae8?auto=format&fit=crop&q=80&w=400&h=400"
        alt="avatar"
      />
    </Avatar>
  )
}
