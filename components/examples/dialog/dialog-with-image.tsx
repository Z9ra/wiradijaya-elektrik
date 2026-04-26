import { Heart, Share2 } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

export default function DialogWithImage() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="cursor-pointer outline-none">
          <img
            alt="nature"
            src="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&w=2000&q=85"
            className="h-64 w-auto rounded-lg object-cover object-center"
          />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-4xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage
                src="https://images.unsplash.com/photo-1574015974293-817f0ebebb74?auto=format&fit=crop&q=80&w=400&h=400"
                alt="alex andrew"
              />
              <AvatarFallback>AA</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="font-semibold">Alex Andrew</span>
              <span className="text-muted-foreground text-sm">@alexandrew</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button size="sm" variant="ghost" className="text-destructive">
              <Heart className="h-4 w-4" />
            </Button>
            <Button size="sm">Free Download</Button>
          </div>
        </div>
        <div className="my-4">
          <img
            alt="nature"
            src="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&w=2000&q=85"
            className="h-[48rem] w-full rounded-lg object-cover object-center"
          />
        </div>
        <div className="flex items-end justify-between">
          <div className="flex items-center gap-16">
            <div>
              <p className="text-muted-foreground text-sm">Views</p>
              <p className="font-semibold">44,082,044</p>
            </div>
            <div>
              <p className="text-muted-foreground text-sm">Downloads</p>
              <p className="font-semibold">553,031</p>
            </div>
          </div>
          <Button size="sm" variant="ghost">
            <Share2 className="mr-1.5 h-4 w-4" /> Share
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
