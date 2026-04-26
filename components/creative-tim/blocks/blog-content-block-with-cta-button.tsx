"use client"

import { ArrowRight, Calendar, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function BlogContentBlockWithCtaButton() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium dark:bg-neutral-800">
                <span>Featured Article</span>
              </div>

              <h1 className="text-4xl leading-tight font-bold [text-wrap:balance] md:text-5xl lg:text-6xl">
                Building the Future of Digital Experiences
              </h1>

              <div className="text-muted-foreground flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  <span>Nov 14, 2025</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  <span>8 min read</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-muted-foreground text-base leading-relaxed md:text-lg">
                Discover how modern development practices and cutting-edge
                technologies are reshaping the way we create and deliver digital
                products. From design systems to deployment strategies, learn
                the essential principles that drive success in today's
                fast-paced development landscape.
              </p>

              <p className="text-muted-foreground text-base leading-relaxed">
                Our comprehensive approach combines industry best practices with
                innovative solutions, empowering teams to build scalable,
                maintainable applications that users love. Explore proven
                methodologies and real-world insights from successful projects.
              </p>
            </div>

            <div className="bg-card space-y-4 rounded-xl border p-6">
              <h3 className="text-xl font-bold">Key Takeaways:</h3>
              <ul className="text-muted-foreground space-y-2">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-900" />
                  <span className="text-sm">
                    Implement component-driven development for maximum
                    reusability
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-900" />
                  <span className="text-sm">
                    Leverage design systems to maintain consistency at scale
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-900" />
                  <span className="text-sm">
                    Optimize performance with modern build tools and techniques
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-900" />
                  <span className="text-sm">
                    Foster collaboration through documentation and shared
                    workflows
                  </span>
                </li>
              </ul>
            </div>

            <Button className="bg-neutral-900 text-base transition-all hover:bg-neutral-800">
              Read Full Article
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="relative h-[500px] lg:h-[700px]">
            <div className="absolute inset-0 overflow-hidden rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1449452198679-05c7fd30f416?auto=format&w=2000&q=85&fit=max"
                alt="Modern architecture"
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
            </div>

            <div className="absolute right-6 bottom-6 left-6 rounded-xl bg-white/95 p-4 backdrop-blur-sm dark:bg-neutral-900/95">
              <p className="text-muted-foreground text-xs font-medium">
                Photo by Unsplash
              </p>
              <p className="mt-1 text-sm font-medium">
                Modern architectural design inspiring digital innovation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
