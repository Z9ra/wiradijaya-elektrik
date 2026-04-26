import { Avatar, AvatarImage } from "@/components/ui/avatar"

export default function AvatarStack() {
  return (
    <div className="flex items-center -space-x-4">
      <Avatar className="border-secondary border-2 hover:z-10 focus:z-10">
        <AvatarImage
          src="https://images.unsplash.com/photo-1750223642533-1b74b17edae8?auto=format&fit=crop&q=80&w=400&h=400"
          alt="user 1"
        />
      </Avatar>
      <Avatar className="border-secondary border-2 hover:z-10 focus:z-10">
        <AvatarImage
          src="https://images.unsplash.com/photo-1750223642533-1b74b17edae8?auto=format&fit=crop&q=80&w=400&h=400"
          alt="user 2"
        />
      </Avatar>
      <Avatar className="border-secondary border-2 hover:z-10 focus:z-10">
        <AvatarImage
          src="https://images.unsplash.com/photo-1750223642533-1b74b17edae8?auto=format&fit=crop&q=80&w=400&h=400"
          alt="user 3"
        />
      </Avatar>
      <Avatar className="border-secondary border-2 hover:z-10 focus:z-10">
        <AvatarImage
          src="https://images.unsplash.com/photo-1750223642533-1b74b17edae8?auto=format&fit=crop&q=80&w=400&h=400"
          alt="user 4"
        />
      </Avatar>
      <Avatar className="border-secondary border-2 hover:z-10 focus:z-10">
        <AvatarImage
          src="https://images.unsplash.com/photo-1750223642533-1b74b17edae8?auto=format&fit=crop&q=80&w=400&h=400"
          alt="user 5"
        />
      </Avatar>
    </div>
  )
}
