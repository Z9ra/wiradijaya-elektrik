"use client"

import * as React from "react"
import { Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function PopupWithImage() {
  return (
    <Card className="mx-auto max-w-xl p-4">
      <CardContent className="p-0">
        <img
          src="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&w=2000&q=85"
          alt="nature landscape"
          className="h-full max-h-80 w-full rounded-lg object-cover object-center"
        />
        <div className="text-center">
          <Star className="mx-auto my-8 h-12 w-12 fill-current text-gray-500" />
          <h2 className="text-2xl font-semibold">Discover what&apos;s new!</h2>
          <p className="text-foreground text-lg [text-wrap:balance]">
            We&apos;re excited to introduce our latest update, packed with
            exciting features and improvements.
          </p>
        </div>
        <div className="my-6 flex items-center justify-center gap-2">
          <Button>Check updates</Button>
          <Button variant="secondary">Not now</Button>
        </div>
      </CardContent>
    </Card>
  )
}
