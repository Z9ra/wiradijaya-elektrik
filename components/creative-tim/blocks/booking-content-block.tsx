"use client"

import { MapPin, Star, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const DATA = [
  {
    image:
      "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&w=2000&q=85&fit=max",
    title: "Luxury Beachfront Villa",
    location: "Malibu, California",
    rating: 4.9,
    reviews: 128,
    guests: 6,
    beds: 3,
    price: 450,
    description:
      "Wake up to breathtaking ocean views in this stunning beachfront villa featuring modern amenities, private pool, and direct beach access.",
    badge: "Featured",
  },
  {
    image:
      "https://images.unsplash.com/photo-1650090974911-94b90ea2a833?auto=format&w=2000&q=85&fit=max",
    title: "Modern Downtown Apartment",
    location: "New York City, NY",
    rating: 4.8,
    reviews: 203,
    guests: 4,
    beds: 2,
    price: 280,
    description:
      "Stylish urban retreat in the heart of the city with panoramic skyline views, premium finishes, and walking distance to top attractions.",
    badge: "Popular",
  },
  {
    image:
      "https://images.unsplash.com/photo-1759774310455-80dba1348cbd?auto=format&w=2000&q=85&fit=max",
    title: "Cozy Mountain Cabin",
    location: "Aspen, Colorado",
    rating: 5.0,
    reviews: 95,
    guests: 8,
    beds: 4,
    price: 380,
    description:
      "Escape to this charming mountain retreat surrounded by nature, perfect for ski enthusiasts with cozy fireplaces and stunning alpine views.",
    badge: "New",
  },
]

export default function BookingContentBlock() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center md:mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium dark:bg-neutral-800">
            <span>Discover Your Next Adventure</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold [text-wrap:balance] md:text-4xl lg:text-5xl">
            Exceptional Stays Worldwide
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-base leading-relaxed md:text-lg">
            Handpicked accommodations offering unforgettable experiences. From
            beachfront villas to mountain cabins, find your perfect escape with
            verified reviews and instant booking.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {DATA.map(
            (
              {
                image,
                title,
                location,
                rating,
                reviews,
                guests,
                beds,
                price,
                description,
                badge,
              },
              key
            ) => (
              <Card
                key={key}
                className="group overflow-hidden border transition-all hover:border-neutral-900 hover:shadow-lg"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={image}
                    alt={title}
                    className="h-64 w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute top-3 right-3">
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-neutral-900 shadow-md">
                      {badge}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 backdrop-blur-sm">
                    <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-semibold">{rating}</span>
                    <span className="text-muted-foreground text-xs">
                      ({reviews})
                    </span>
                  </div>
                </div>

                <CardContent className="p-5">
                  <div className="mb-3 flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <h3 className="mb-1 text-lg leading-tight font-bold">
                        {title}
                      </h3>
                      <div className="text-muted-foreground flex items-center gap-1 text-sm">
                        <MapPin className="h-3.5 w-3.5" />
                        <span>{location}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold">${price}</p>
                      <p className="text-muted-foreground text-xs">per night</p>
                    </div>
                  </div>

                  <div className="border-border text-muted-foreground mb-4 flex items-center gap-4 border-y py-3 text-sm">
                    <div className="flex items-center gap-1.5">
                      <Users className="h-4 w-4" />
                      <span>{guests} guests</span>
                    </div>
                    <div className="bg-border h-4 w-px" />
                    <span>{beds} beds</span>
                  </div>

                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {description}
                  </p>

                  <Button className="w-full bg-neutral-900 transition-all hover:bg-neutral-800">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            )
          )}
        </div>
      </div>
    </section>
  )
}
