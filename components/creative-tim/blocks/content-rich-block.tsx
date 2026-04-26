"use client"

import { MessageCircle, Play } from "lucide-react"

import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const DATA = [
  {
    icon: MessageCircle,
    title: "Podcasts",
    description: "An interview with Tesla founder.",
    name: "Alexa Rossa",
  },
  {
    icon: Play,
    title: "Interviews",
    description: "Make $500k through small biz or raise it from family.",
    name: "By Jonathan Silvia",
  },
  {
    icon: MessageCircle,
    title: "Podcasts",
    description: "An interview with Tesla founder.",
    name: "Alexa Rossa",
  },
]

export default function ContentRichBlock() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <Badge variant="outline">Our Work</Badge>
          <h2 className="my-4 text-2xl font-bold">
            A new way to buy your next home
          </h2>
          <p className="text-foreground mx-auto max-w-3xl text-lg [text-wrap:_balance]">
            If you can&apos;t decide, the answer is no. If two equally difficult
            paths, choose the one more painful in the short term (pain avoidance
            is creating an illusion of equality).
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-6 pr-3 pb-3 md:border-r">
            <div className="border-b pb-6">
              <h3 className="mb-4 text-xl leading-snug font-bold">
                Exploring the Role of Epigenetics in Inherited Traits
              </h3>
              <p className="text-foreground [text-wrap:_balance]">
                Investigate the emerging field of epigenetics and its impact on
                understanding how environmental factors can influence gene
                expression and inheritance.
              </p>
              <div className="mt-4 flex items-center gap-3">
                <Avatar className="rounded-lg">
                  <AvatarImage
                    src="https://images.unsplash.com/photo-1750223642533-1b74b17edae8?auto=format&fit=crop&q=80&w=400&h=400"
                    alt="avatar"
                  />
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-semibold">Mathew Glock</p>
                  <p className="text-sm">Marketing Manager</p>
                </div>
              </div>
            </div>
            <div className="border-b pb-6 lg:border-b-0">
              <h3 className="mb-4 text-xl leading-snug font-bold">
                How Gut Bacteria Affect Our Health and Well-being
              </h3>
              <p className="text-foreground [text-wrap:_balance]">
                Dive into the latest research on the human microbiome.
              </p>
              <div className="mt-4 flex items-center gap-3">
                <Avatar className="rounded-lg">
                  <AvatarImage
                    src="https://images.unsplash.com/photo-1716662318479-a9c0f1cd1a0e?auto=format&fit=crop&q=80&w=400&h=400"
                    alt="avatar"
                  />
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-semibold">Mathew Glock</p>
                  <p className="text-sm">Marketing Manager</p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6 pr-6 pb-3 md:border-r">
            <div className="border-b pb-6 lg:border-b-0">
              <img
                src="https://v3.material-tailwind.com/trees.jpg"
                alt="trees"
                className="rounded-lg"
              />
              <h3 className="my-4 text-xl leading-snug font-bold">
                How to Build a $24 Billion Dollar Company in Just 2 Years.
              </h3>
              <p className="text-foreground [text-wrap:_balance]">
                I&apos;ve come to the conclusion that 50% of folks in this world
                don&apos;t even spend enough time alone with their thoughts to
                have their own opinions. They haven&apos;t done the work to
                decide what they think. And that isn&apos;t a rewarding way to
                live.
              </p>
              <div className="mt-4 flex items-center gap-3">
                <Avatar className="rounded-lg">
                  <AvatarImage
                    src="https://images.unsplash.com/photo-1750223642533-1b74b17edae8?auto=format&fit=crop&q=80&w=400&h=400"
                    alt="avatar"
                  />
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-semibold">Andrew Peterson</p>
                  <p className="text-sm">Redactor</p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6 pr-6 pb-3 md:border-r">
            <div className="border-b pb-6">
              <img
                src="https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/creative-ai/bg-3.jpg"
                alt="Mountain landscape"
                className="rounded-lg"
              />
              <h3 className="my-6 text-xl leading-snug font-bold">
                Biomimicry: Nature-Inspired Innovations
              </h3>
              <p className="text-foreground text-sm font-semibold">
                by Mathew Glock
              </p>
            </div>
            <div className="border-b pb-6 lg:border-b-0">
              <img
                src="https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/creative-ai/bg-2.jpg"
                alt="Elegant library interior"
                className="rounded-lg"
              />
              <h3 className="my-6 text-xl leading-snug font-bold">
                Bringing Back Extinct Species
              </h3>
              <p className="text-foreground text-sm font-semibold">
                by Emma Roberts
              </p>
            </div>
          </div>
          <div className="space-y-6">
            {DATA.map(({ icon: Icon, title, description, name }, key) => (
              <div key={key} className={`${key === 2 ? "" : "border-b pb-16"}`}>
                <div className="flex items-center gap-2">
                  <Icon className="h-4 w-4" />
                  <p className="font-semibold">{title}</p>
                </div>
                <p className="text-foreground mt-3 mb-1 [text-wrap:_balance]">
                  {description}
                </p>
                <p className="text-foreground text-sm">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
