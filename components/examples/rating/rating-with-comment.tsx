import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Rating } from "@/components/ui/rating"

export default function RatingWithComment() {
  return (
    <div className="px-8 text-center">
      <p className="mb-6 text-lg font-semibold">
        &quot;This is an excellent product, the documentation is excellent and
        helped me get things done more efficiently.&quot;
      </p>
      <Avatar className="mx-auto h-16 w-16">
        <AvatarImage
          src="https://images.unsplash.com/photo-1750223642533-1b74b17edae8?auto=format&fit=crop&q=80&w=400&h=400"
          alt="image"
        />
      </Avatar>
      <p className="mt-4 font-bold">Tania Andrew</p>
      <p className="text-foreground mb-4 text-sm">Lead Frontend Developer</p>
      <div className="flex justify-center">
        <Rating value={4} color="warning" readonly />
      </div>
    </div>
  )
}
