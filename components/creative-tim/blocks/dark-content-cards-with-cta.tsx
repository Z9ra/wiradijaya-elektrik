"use client"

import { Button } from "@/components/ui/button"

const DATA = [
  {
    caption: "Productivity",
    title: "Search and Discover!",
    description:
      "Insight to help you create, connect, and convert. Understand Your Audience's Interests, Influence, Interactions, and Intent. Discover emerging topics and",
  },
  {
    caption: "Design",
    title: "Find Music and Play!",
    description:
      "Insight to help you create, connect, and convert. Understand Your Audience's Interests, Influence, Interactions, and Intent. Discover emerging topics and",
  },
]

export default function DarkContentCardsWithCta() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <p className="text-primary block text-sm font-semibold uppercase">
            our work
          </p>
          <h2 className="my-4 text-2xl font-bold">
            Some of Our Awesome Projects
          </h2>
          <p className="text-foreground mx-auto max-w-3xl text-lg [text-wrap:_balance]">
            f you can&apos;t decide, the answer is no. If two equally difficult
            paths, choose the one more painful in the short term (pain avoidance
            is creating an illusion of equality).
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {DATA.map(({ caption, title, description }, key) => (
            <div
              key={key}
              className="flex h-[440px] flex-col items-center justify-center rounded-lg bg-black p-8 text-center lg:p-16"
            >
              <p className="font-semibold text-white uppercase">{caption}</p>
              <h3 className="my-4 text-2xl font-bold text-white">{title}</h3>
              <p className="mx-auto mb-8 max-w-md [text-wrap:_balance] text-white">
                {description}
              </p>
              <Button variant="secondary">Button</Button>
            </div>
          ))}
        </div>
        <div className="mt-6 flex h-[440px] flex-col items-center justify-center rounded-lg bg-black p-8 text-center lg:p-16">
          <p className="font-semibold text-white uppercase">website visitors</p>
          <h3 className="my-4 text-2xl font-bold text-white">
            The Best Productivity Apps on Market
          </h3>
          <p className="mx-auto mb-8 max-w-md [text-wrap:_balance] text-white">
            As we live, our hearts turn colder. Cause pain is what we go through
            as we become older. We get insulted by others, lose trust for those
            others.
          </p>
          <Button variant="secondary">Button</Button>
        </div>
      </div>
    </section>
  )
}
