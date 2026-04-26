"use client"

import { Star } from "lucide-react"

import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

const DATA = [
  {
    rate: 4,
    desc: "If everything I did failed - which it doesn't, it actually succeeds - just the fact that I'm willing to fail is an inspiration. People are so scared to lose that they don't even try. Like, one thing people can't say is that I'm not trying, and I'm not trying my hardest, and I'm not trying to do the best way I know how.",
    image:
      "https://images.unsplash.com/photo-1750223642533-1b74b17edae8?auto=format&fit=crop&q=80&w=400&h=400",
    name: "Ryan Samuel",
    date: "03 March 2025",
  },
  {
    rate: 5,
    desc: "If everything I did failed - which it doesn't, it actually succeeds - just the fact that I'm willing to fail is an inspiration. People are so scared to lose that they don't even try. Like, one thing people can't say is that I'm not trying, and I'm not trying my hardest, and I'm not trying to do the best way I know how.",
    image:
      "https://images.unsplash.com/photo-1716662318479-a9c0f1cd1a0e?auto=format&fit=crop&q=80&w=400&h=400",
    name: "Emma Roberts",
    date: "14 February 2025",
  },
  {
    rate: 3,
    desc: "If everything I did failed - which it doesn't, it actually succeeds - just the fact that I'm willing to fail is an inspiration. People are so scared to lose that they don't even try. Like, one thing people can't say is that I'm not trying, and I'm not trying my hardest, and I'm not trying to do the best way I know how.",
    image:
      "https://images.unsplash.com/photo-1623853434105-8e7a72898180?auto=format&fit=crop&q=80&w=400&h=400",
    name: "Bruce Mars",
    date: "10 February 2025",
  },
]

function Rating({ value }: { value: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`h-4 w-4 ${
            index < value
              ? "fill-amber-500 text-amber-500"
              : "fill-muted text-muted"
          }`}
        />
      ))}
    </div>
  )
}

export default function CustomerOverviewExample3() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <p className="text-muted-foreground text-sm font-medium tracking-wider uppercase">
            Review
          </p>
          <h2 className="my-4 text-3xl font-bold md:text-4xl">
            Our Customer's Opinion
          </h2>
          <p className="text-muted-foreground mx-auto max-w-3xl text-base [text-wrap:_balance] md:text-lg">
            If you can't decide, the answer is no. If two equally difficult
            paths, choose the one more painful in the short term (pain avoidance
            is creating an illusion of equality).
          </p>
        </div>
        <div className="space-y-6">
          {DATA.map(({ rate, desc, image, name, date }, key) => (
            <Card key={key}>
              <CardContent className="space-y-4 pt-6">
                <Rating value={rate} />
                <p className="text-muted-foreground text-sm [text-wrap:_balance]">
                  {desc}
                </p>
                <div className="flex items-center gap-4 border-t pt-4">
                  <Avatar className="h-12 w-12 rounded-lg">
                    <AvatarImage src={image} alt={name} />
                  </Avatar>
                  <div>
                    <p className="font-semibold">{name}</p>
                    <p className="text-muted-foreground text-sm">{date}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
