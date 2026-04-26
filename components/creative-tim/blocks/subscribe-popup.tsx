"use client"

import * as React from "react"
import { X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SubscribePopup() {
  return (
    <Card className="mx-auto max-w-lg p-8">
      <CardContent className="p-0">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-2xl font-semibold">Subscribe for updates</h2>
          <p className="text-foreground text-lg [text-wrap:balance]">
            Join our newsletter to receive exclusive content and special offers
            directly in your inbox.
          </p>
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 rounded-full"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
        <form action="#">
          <div className="mb-4 w-full space-y-1">
            <Label htmlFor="name" className="text-sm font-semibold">
              Name
            </Label>
            <Input id="name" autoComplete="off" placeholder="John Doe" />
          </div>
          <div className="mb-4 w-full space-y-1">
            <Label htmlFor="email" className="text-sm font-semibold">
              Email
            </Label>
            <Input
              type="email"
              id="email"
              autoComplete="off"
              placeholder="someone@example.com"
            />
          </div>
          <Button className="w-full">Subscribe</Button>
        </form>
      </CardContent>
    </Card>
  )
}
