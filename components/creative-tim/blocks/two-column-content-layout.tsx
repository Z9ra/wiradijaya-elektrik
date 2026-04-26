"use client"

import {
  Cloud,
  CloudDownload,
  CreditCard,
  Key,
  MousePointerClick,
  Settings,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"

const OPTIONS = [
  {
    icon: Cloud,
    title: "1. Listen to Social Conversations",
    description:
      "Gain access to the demographics, psychographics, and location of unique people who talk about your brand.",
  },
  {
    icon: CreditCard,
    title: "2. Performance Analyzes",
    description:
      "Unify data from Facebook, Instagram, Twitter, LinkedIn, and Youtube to gain rich insights from easy-to-use reports.",
  },
  {
    icon: Settings,
    title: "3. Social Conversions",
    description:
      "Track actions taken on your website that originated from social, and understand the impact on your bottom line.",
  },
  {
    icon: Key,
    title: "1. Always In Sync",
    description:
      "Gain access to the demographics, psychographics, and location of unique people who talk about your brand.",
  },
  {
    icon: Users,
    title: "2. Work With Any Team",
    description:
      "Unify data from Facebook, Instagram, Twitter, LinkedIn, and Youtube to gain rich insights from easy-to-use reports.",
  },
  {
    icon: CloudDownload,
    title: "3. A Productivity Platform",
    description:
      "Track actions taken on your website that originated from social, and understand the impact on your bottom line.",
  },
]

export default function TwoColumnContentLayout() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <div className="bg-primary mx-auto mb-6 grid h-12 w-12 place-items-center rounded-lg">
            <MousePointerClick className="h-6 w-6 text-white" />
          </div>
          <h2 className="my-4 text-2xl font-bold">How To Handle Components</h2>
          <p className="text-foreground mx-auto max-w-3xl text-lg [text-wrap:_balance]">
            We&apos;re constantly trying to express ourselves and actualize our
            dreams. Don&apos;t stop.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-x-20 gap-y-10 md:flex-row">
          <div className="flex h-[440px] max-w-md flex-col items-center justify-center rounded-lg bg-black p-8 text-center lg:p-16">
            <p className="font-semibold text-white uppercase">
              website visitors
            </p>
            <h3 className="my-4 text-xl font-bold text-white">
              The Best Productivity Apps on Market
            </h3>
            <p className="mx-auto mb-8 max-w-xs [text-wrap:_balance] text-white">
              As we live, our hearts turn colder. Cause pain is what we go
              through as we become older. We get insulted by others, lose trust
              for those others.
            </p>
            <Button variant="secondary">Button</Button>
          </div>
          <div className="flex flex-col items-center gap-8">
            {OPTIONS.slice(0, 3).map(({ title, description }, key) => (
              <div key={key}>
                <h3 className="mb-2 text-xl font-bold">{title}</h3>
                <p className="text-foreground max-w-sm [text-wrap:_balance]">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-20 flex flex-col-reverse items-center justify-center gap-x-20 gap-y-10 md:flex-row">
          <div className="flex flex-col items-center gap-8">
            {OPTIONS.slice(3, 6).map(({ title, description }, key) => (
              <div key={key}>
                <h3 className="mb-2 text-xl font-bold">{title}</h3>
                <p className="text-foreground max-w-sm [text-wrap:_balance]">
                  {description}
                </p>
              </div>
            ))}
          </div>
          <div className="flex h-[440px] max-w-md flex-col items-center justify-center rounded-lg bg-black p-8 text-center lg:py-16">
            <p className="font-semibold text-white uppercase">
              social activities
            </p>
            <h3 className="my-4 text-xl font-bold text-white">
              Working on Wallstreet is Not So Easy
            </h3>
            <p className="mx-auto mb-8 max-w-sm [text-wrap:_balance] text-white">
              There&apos;s nothing I really wanted to do in life that I
              wasn&apos;t able to get good at. I&apos;m not really specifically
              talented at anything except for the ability to learn.
            </p>
            <Button variant="secondary">Button</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
