import { Avatar, AvatarImage } from "@/components/ui/avatar"

export default function AvatarSizes() {
  return (
    <div className="flex items-end gap-2">
      <Avatar className="size-6">
        <AvatarImage
          src="https://images.unsplash.com/photo-1750223642533-1b74b17edae8?auto=format&fit=crop&q=80&w=400&h=400"
          alt="profile-picture"
        />
      </Avatar>
      <Avatar className="size-8">
        <AvatarImage
          src="https://images.unsplash.com/photo-1750223642533-1b74b17edae8?auto=format&fit=crop&q=80&w=400&h=400"
          alt="profile-picture"
        />
      </Avatar>
      <Avatar className="size-10">
        <AvatarImage
          src="https://images.unsplash.com/photo-1750223642533-1b74b17edae8?auto=format&fit=crop&q=80&w=400&h=400"
          alt="profile-picture"
        />
      </Avatar>
      <Avatar className="size-12">
        <AvatarImage
          src="https://images.unsplash.com/photo-1750223642533-1b74b17edae8?auto=format&fit=crop&q=80&w=400&h=400"
          alt="profile-picture"
        />
      </Avatar>
      <Avatar className="size-16">
        <AvatarImage
          src="https://images.unsplash.com/photo-1750223642533-1b74b17edae8?auto=format&fit=crop&q=80&w=400&h=400"
          alt="profile-picture"
        />
      </Avatar>
      <Avatar className="size-20">
        <AvatarImage
          src="https://images.unsplash.com/photo-1750223642533-1b74b17edae8?auto=format&fit=crop&q=80&w=400&h=400"
          alt="profile-picture"
        />
      </Avatar>
    </div>
  )
}
