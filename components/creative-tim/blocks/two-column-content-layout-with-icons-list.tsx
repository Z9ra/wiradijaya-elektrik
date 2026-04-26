"use client"

import {
  Cloud,
  CloudDownload,
  CreditCard,
  Key,
  Settings,
  Users,
} from "lucide-react"

const OPTIONS = [
  {
    icon: Cloud,
    title: "Listen to Social Conversations",
    description:
      "Gain access to the demographics, psychographics, and location of unique people who talk about your brand.",
  },
  {
    icon: CreditCard,
    title: "Performance Analyzes",
    description:
      "Unify data from Facebook, Instagram, Twitter, LinkedIn, and Youtube to gain rich insights from easy-to-use reports.",
  },
  {
    icon: Settings,
    title: "Social Conversions",
    description:
      "Track actions taken on your website that originated from social, and understand the impact on your bottom line.",
  },
  {
    icon: Key,
    title: "Always In Sync",
    description:
      "Gain access to the demographics, psychographics, and location of unique people who talk about your brand.",
  },
  {
    icon: Users,
    title: "Work With Any Team",
    description:
      "Unify data from Facebook, Instagram, Twitter, LinkedIn, and Youtube to gain rich insights from easy-to-use reports.",
  },
  {
    icon: CloudDownload,
    title: "A Productivity Platform",
    description:
      "Track actions taken on your website that originated from social, and understand the impact on your bottom line.",
  },
]

export default function TwoColumnContentLayoutWithIconsList() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-2xl font-bold">
            Some of Our Awesome Projects
          </h2>
          <p className="text-foreground mx-auto max-w-2xl text-lg [text-wrap:_balance]">
            This is the paragraph where you can write more details about your
            projects. Keep you user engaged by providing meaningful information.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-x-20 gap-y-10 md:flex-row">
          <div
            className="relative flex h-[440px] max-w-md flex-col items-center justify-center overflow-hidden rounded-xl p-8 text-center shadow-xl lg:p-16"
            style={{
              backgroundImage:
                "url(https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/creative-ai/bg-3.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/60" />
            <div className="relative z-10">
              <h3 className="mb-4 text-2xl font-bold text-white lg:text-3xl">
                Social Analytics
              </h3>
              <p className="mx-auto text-base leading-relaxed [text-wrap:balance] text-white/90 lg:text-lg">
                Insight to help you create, connect, and convert. Understand
                Your Audience&apos;s Interests, Influence, Interactions, and
                Intent. Discover emerging topics and influencers to reach new
                audiences.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-6">
            {OPTIONS.slice(0, 3).map(
              ({ icon: Icon, title, description }, key) => (
                <div key={key} className="flex gap-4">
                  <Icon className="h-6 w-6" />
                  <div>
                    <h3 className="mb-2 text-xl font-bold">{title}</h3>
                    <p className="text-foreground max-w-sm [text-wrap:_balance]">
                      {description}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
        <div className="mt-20 flex flex-col-reverse items-center justify-center gap-x-20 gap-y-10 md:flex-row">
          <div className="flex flex-col items-center gap-6">
            {OPTIONS.slice(3, 6).map(
              ({ icon: Icon, title, description }, key) => (
                <div key={key} className="flex gap-4">
                  <Icon className="h-6 w-6" />
                  <div>
                    <h3 className="mb-2 text-xl font-bold">{title}</h3>
                    <p className="text-foreground max-w-xs [text-wrap:_balance]">
                      {description}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
          <div
            className="relative flex h-[440px] max-w-md flex-col items-center justify-center overflow-hidden rounded-xl p-8 text-center shadow-xl lg:p-16"
            style={{
              backgroundImage:
                "url(https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/creative-ai/bg-2.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/60" />
            <div className="relative z-10">
              <h3 className="mb-4 text-2xl font-bold text-white lg:text-3xl">
                Trello lets you work
              </h3>
              <p className="mx-auto text-base leading-relaxed [text-wrap:balance] text-white/90 lg:text-lg">
                Trello&apos;s boards, lists, and cards enable you to organize
                and prioritize your projects in a fun, flexible and rewarding
                way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
