"use client"

import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const DATA = [
  {
    image:
      "https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/creative-ai/bg-3.jpg",
    title: "Adventure & Exploration",
    category: "Travel",
    desc: "Discover breathtaking landscapes and embark on journeys that transform your perspective. Every adventure starts with a single step into the unknown.",
  },
  {
    image:
      "https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/creative-ai/bg-2.jpg",
    title: "Innovation & Creativity",
    category: "Design",
    desc: "Push boundaries and reimagine possibilities through innovative design thinking. Where technology meets artistry, magic happens.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&w=2000&q=85",
    title: "Nature & Wilderness",
    category: "Environment",
    desc: "Experience the raw beauty of untouched landscapes. Nature's grandeur reminds us of the extraordinary world we call home.",
  },
]

export default function ContentBlockWithImageFilter() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 md:mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium dark:bg-neutral-800">
            <span>Featured Stories</span>
          </div>
          <h2 className="mb-4 text-3xl font-bold [text-wrap:balance] md:text-4xl lg:text-5xl">
            Explore Inspiring Experiences
          </h2>
          <p className="text-muted-foreground max-w-2xl text-base leading-relaxed md:text-lg">
            Dive into curated stories that inspire action, spark creativity, and
            celebrate the beauty of our world. Each journey offers unique
            insights and unforgettable moments.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {DATA.map(({ image, title, category, desc }, key) => (
            <Card
              key={key}
              className="group relative h-[32rem] w-full overflow-hidden border-0 shadow-lg transition-all hover:shadow-2xl"
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-all group-hover:from-black/70" />

              <div className="relative flex h-full flex-col justify-end p-6 text-white">
                <div className="mb-3 inline-flex w-max items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs font-medium backdrop-blur-sm">
                  <span>{category}</span>
                </div>

                <h3 className="mb-2 text-2xl leading-tight font-bold transition-all group-hover:text-white/90">
                  {title}
                </h3>

                <p className="mb-4 text-sm leading-relaxed [text-wrap:balance] text-white/80">
                  {desc}
                </p>

                <Button
                  variant="outline"
                  className="w-max border-white/30 bg-white/10 text-white backdrop-blur-sm transition-all hover:bg-white hover:text-neutral-900"
                >
                  Explore More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
