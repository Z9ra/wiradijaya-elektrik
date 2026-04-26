"use client"

import * as React from "react"
import { CheckCircle, Dribbble, Github, Twitter, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function SuccessPopup() {
  return (
    <Card className="mx-auto max-w-xl p-8">
      <CardContent className="p-0">
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 rounded-full"
        >
          <X className="h-5 w-5" />
        </Button>
        <CheckCircle className="mx-auto mb-8 h-12 w-12 fill-current text-green-500" />
        <h2 className="mb-4 text-center text-2xl font-semibold">
          Upload Complete!
        </h2>
        <p className="text-foreground mb-8 text-center text-lg [text-wrap:balance]">
          Your file has been successfully uploaded. Thank you for sharing it
          with us.
        </p>
        <p className="text-foreground mb-4 text-center">Follow us:</p>
        <div className="flex items-center justify-center gap-2">
          <Button variant="ghost" size="icon">
            <Twitter className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Dribbble className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Github className="h-5 w-5" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
