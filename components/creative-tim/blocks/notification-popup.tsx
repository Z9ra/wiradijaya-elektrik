"use client"

import * as React from "react"
import { X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function NotificationPopup() {
  return (
    <Card className="mx-auto max-w-xl p-8">
      <CardContent className="p-0">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-semibold">Cookies Notification</h2>
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 rounded-full"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
        <p className="text-foreground mb-8 text-center text-lg">
          We use cookies to enhance your browsing experience and provide
          personalized content. By continuing to use this website, you consent
          to our use of cookies in accordance with our Cookie Policy. You can
          manage your cookie preferences by clicking &quot;Settings.&quot;
        </p>
        <div className="mb-1 flex items-center justify-center gap-2">
          <Button variant="secondary">Cookies settings</Button>
          <Button>Accept all cookies</Button>
        </div>
      </CardContent>
    </Card>
  )
}
