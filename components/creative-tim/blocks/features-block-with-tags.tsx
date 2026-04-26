"use client"

import { Database, FileText, Globe, Shield, Workflow } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const FEATURES = [
  {
    icon: Shield,
    title: "Enterprise Security",
  },
  {
    icon: FileText,
    title: "Detailed Analytics",
  },
  {
    icon: Database,
    title: "Cloud Storage",
  },
  {
    icon: Globe,
    title: "Global CDN",
  },
]

export default function FeaturesBlockWithTags() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center lg:mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-neutral-100 px-4 py-1.5 text-sm font-medium dark:bg-neutral-800">
            <span>Platform Features</span>
          </div>

          <h2 className="mx-auto mb-4 max-w-3xl text-3xl font-bold [text-wrap:balance] md:text-4xl lg:text-5xl">
            Trusted by Developers and Businesses Worldwide
          </h2>

          <p className="text-muted-foreground mx-auto max-w-2xl text-base [text-wrap:balance] md:text-lg">
            Enterprise-grade infrastructure with robust security, real-time
            monitoring, and intuitive tools for seamless data management.
          </p>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="grid gap-6">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {FEATURES.map(({ icon: Icon, title }) => (
                <Card
                  key={title}
                  className="group bg-card rounded-2xl border p-6 transition-all hover:border-neutral-900 hover:shadow-lg"
                >
                  <CardContent className="grid place-items-center p-0">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-100 transition-all group-hover:bg-neutral-900 group-hover:text-white dark:bg-neutral-800">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-center text-base font-semibold sm:text-lg">
                      {title}
                    </h3>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-card rounded-2xl border p-6 shadow-sm">
              <CardContent className="p-0">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-900 text-white">
                  <Workflow className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">
                  Pre-built Components
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Access a comprehensive library of production-ready components
                  to accelerate your development workflow.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card rounded-2xl border shadow-lg">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-4">
                <Avatar className="h-16 w-16 shrink-0 rounded-xl">
                  <AvatarImage
                    src="https://images.unsplash.com/photo-1623853434105-8e7a72898180?auto=format&fit=crop&q=80&w=400&h=400"
                    alt="Sarah Chen"
                    className="h-full w-full object-cover"
                  />
                  <AvatarFallback className="rounded-xl bg-neutral-100 text-xl">
                    SC
                  </AvatarFallback>
                </Avatar>

                <div>
                  <h3 className="mb-1 text-lg font-semibold">Sarah Chen</h3>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge
                      variant="secondary"
                      className="rounded-full bg-neutral-100 text-xs hover:bg-neutral-200"
                    >
                      Product Lead
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="rounded-full bg-neutral-100 text-xs hover:bg-neutral-200"
                    >
                      Engineering
                    </Badge>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed">
                &quot;This platform transformed our development process. The
                comprehensive toolkit and excellent support helped us ship
                features 3x faster while maintaining high quality
                standards.&quot;
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
