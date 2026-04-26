"use client"

import { Heart, MessageSquare, Reply } from "lucide-react"

import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"

const DATA = [
  {
    image:
      "https://images.unsplash.com/photo-1716662318479-a9c0f1cd1a0e?auto=format&fit=crop&q=80&w=400&h=400",
    name: "Sarah Mitchell",
    time: "7 minutes ago",
    description:
      "This is exactly what I've been looking for! The attention to detail and thoughtful design choices really shine through. Can't wait to implement this in my next project. Thank you for sharing such valuable insights!",
    likes: 243,
  },
  {
    image:
      "https://images.unsplash.com/photo-1750223642533-1b74b17edae8?auto=format&fit=crop&q=80&w=400&h=400",
    name: "Alex Thompson",
    time: "2 hours ago",
    description:
      "Welcome to the platform! We're excited to have you here. There will be lots of amazing updates coming soon. Stay tuned for the latest features and improvements. You're awesome!",
    likes: 156,
  },
]

function CommentCard({
  image,
  name,
  time,
  description,
  likes,
  isReply = false,
}: {
  image: string
  name: string
  time: string
  description: string
  likes: number
  isReply?: boolean
}) {
  return (
    <div className={`group ${isReply ? "ml-12 md:ml-16" : ""}`}>
      <div className="flex gap-4">
        <Avatar className="border-border h-12 w-12 shrink-0 rounded-full border-2">
          <AvatarImage src={image} alt={name} className="object-cover" />
        </Avatar>
        <div className="flex-1 space-y-3">
          <div className="bg-card rounded-xl border p-4 transition-all group-hover:border-neutral-200 dark:group-hover:border-neutral-700">
            <div className="mb-2 flex items-center justify-between">
              <div>
                <p className="text-foreground font-semibold">{name}</p>
                <p className="text-muted-foreground text-xs">{time}</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {description}
            </p>
          </div>

          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="sm"
              className="h-8 gap-1.5 text-xs hover:bg-transparent"
            >
              <Reply className="h-3.5 w-3.5" />
              Reply
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 gap-1.5 text-xs text-red-500 hover:bg-transparent hover:text-red-600"
            >
              <Heart className="h-3.5 w-3.5 fill-current" />
              {likes}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CommentsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto max-w-3xl px-4">
        <div className="mb-8 space-y-2">
          <div className="flex items-center gap-2">
            <MessageSquare className="text-muted-foreground h-5 w-5" />
            <h2 className="text-2xl font-bold md:text-3xl">Discussion (3)</h2>
          </div>
          <p className="text-muted-foreground text-sm">
            Join the conversation and share your thoughts
          </p>
        </div>

        <div className="space-y-6">
          <CommentCard {...DATA[0]} />
          <CommentCard {...DATA[1]} />
          <CommentCard
            image="https://images.unsplash.com/photo-1716662318479-a9c0f1cd1a0e?auto=format&fit=crop&q=80&w=400&h=400"
            name="Sarah Mitchell"
            time="1 hour ago"
            description="Thanks for the warm welcome! Really appreciate the community here. Looking forward to connecting with everyone."
            likes={89}
            isReply={true}
          />
        </div>

        <div className="mt-12 space-y-4">
          <h3 className="text-lg font-bold">Leave a Comment</h3>
          <Card className="border">
            <CardContent className="p-6">
              <div className="flex gap-4">
                <Avatar className="border-border h-12 w-12 shrink-0 rounded-full border-2">
                  <AvatarImage
                    src="https://images.unsplash.com/photo-1750223642533-1b74b17edae8?auto=format&fit=crop&q=80&w=400&h=400"
                    alt="Your profile"
                    className="object-cover"
                  />
                </Avatar>
                <div className="flex-1 space-y-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="comment"
                      className="text-foreground text-sm font-medium"
                    >
                      Your Comment
                    </label>
                    <Textarea
                      id="comment"
                      placeholder="Share your thoughts, questions, or feedback..."
                      className="min-h-[120px] resize-none"
                    />
                    <p className="text-muted-foreground text-xs">
                      Be respectful and constructive in your comments
                    </p>
                  </div>
                  <div className="flex justify-end">
                    <Button className="bg-neutral-900 hover:bg-neutral-800">
                      Post Comment
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
