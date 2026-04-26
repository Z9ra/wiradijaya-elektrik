import { Avatar, AvatarImage } from "@/components/ui/avatar"

export default function AvatarWithText() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage
            src="https://images.unsplash.com/photo-1750223642533-1b74b17edae8?auto=format&fit=crop&q=80&w=400&h=400"
            alt="avatar"
          />
        </Avatar>
        <div>
          <p className="font-medium">Tania Andrew</p>
          <p className="text-muted-foreground text-sm">Web Developer</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Avatar className="rounded-md">
          <AvatarImage
            src="https://images.unsplash.com/photo-1750223642533-1b74b17edae8?auto=format&fit=crop&q=80&w=400&h=400"
            alt="avatar"
          />
        </Avatar>
        <div>
          <p className="font-medium">Tania Andrew</p>
          <p className="text-muted-foreground text-sm">Web Developer</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Avatar className="rounded-none">
          <AvatarImage
            src="https://images.unsplash.com/photo-1750223642533-1b74b17edae8?auto=format&fit=crop&q=80&w=400&h=400"
            alt="avatar"
          />
        </Avatar>
        <div>
          <p className="font-medium">Tania Andrew</p>
          <p className="text-muted-foreground text-sm">Web Developer</p>
        </div>
      </div>
    </div>
  )
}
