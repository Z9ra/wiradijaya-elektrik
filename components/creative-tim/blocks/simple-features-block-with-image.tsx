"use client"

import { Award, Code2, Sparkles } from "lucide-react"

const FEATURES = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Well-structured, maintainable code following industry best practices and standards.",
  },
  {
    icon: Sparkles,
    title: "Modern Design",
    description:
      "Beautiful interfaces crafted with attention to detail and user experience.",
  },
  {
    icon: Award,
    title: "Quality First",
    description:
      "Thoroughly tested components ensuring reliability and consistent performance.",
  },
]

export default function SimpleFeaturesBlockWithImage() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
          <div className="relative h-[400px] w-full overflow-hidden rounded-2xl lg:h-auto">
            <img
              src="https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/creative-ai/bg-3.jpg"
              alt="Creative background"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          <div className="col-span-2 w-full">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-neutral-100 px-4 py-1.5 text-sm font-medium dark:bg-neutral-800">
              <span>Our Values</span>
            </div>

            <h2 className="mb-4 text-3xl font-bold [text-wrap:balance] md:text-4xl lg:text-5xl">
              Built with Excellence in Mind
            </h2>

            <p className="text-muted-foreground mb-10 max-w-2xl text-base [text-wrap:balance] md:text-lg lg:mb-12">
              Every component is crafted with precision and care, ensuring you
              get the best tools to build exceptional digital experiences.
            </p>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              {FEATURES.map(({ icon: Icon, title, description }) => (
                <div key={title} className="group">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-900 text-white transition-transform group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mb-2 text-lg font-semibold">{title}</h3>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
