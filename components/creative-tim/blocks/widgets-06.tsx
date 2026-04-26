"use client"

import * as React from "react"
import { ArrowRight, Calendar, MapPin } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function Widgets06() {
  return (
    <Card className="group relative overflow-hidden border-0 shadow-lg transition-shadow hover:shadow-xl">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1494984858525-798dd0b282f5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"
          alt="Event background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 dark:from-black/90 dark:via-black/70 dark:to-black/50" />
      </div>

      {/* Content */}
      <CardContent className="relative z-10 space-y-6 p-8 md:p-10">
        <div className="space-y-4">
          <Badge
            variant="secondary"
            className="bg-white/20 text-white backdrop-blur-sm hover:bg-white/30"
          >
            <Calendar className="mr-1.5 h-3.5 w-3.5" />
            Upcoming Events
          </Badge>

          <div className="space-y-3">
            <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Tech Summit: Shaping Tomorrow
            </h2>
            <p className="max-w-2xl text-base text-white/90 md:text-lg">
              Prepare to be part of dynamic conversations that will redefine the
              boundaries of innovation and technology.
            </p>
          </div>
        </div>

        <Separator className="bg-white/20" />

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <MapPin className="h-4 w-4" />
            <span>San Francisco, CA</span>
          </div>

          <Button
            size="lg"
            className="group/btn bg-white text-black shadow-md hover:bg-white/90"
          >
            Join Now
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
