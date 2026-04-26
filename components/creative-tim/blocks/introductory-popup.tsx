"use client"

import * as React from "react"
import { X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group"

export default function IntroductoryPopup() {
  return (
    <Card className="mx-auto max-w-xl p-8">
      <CardContent className="p-0">
        <div className="mb-8">
          <h2 className="mb-2 text-2xl font-semibold">
            Welcome! How Can We Assist You?
          </h2>
          <p className="text-foreground text-lg [text-wrap:balance]">
            We&apos;re here to help you get started smoothly. Please select the
            option that best describes your onboarding needs:
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
          <RadioGroup className="gap-4">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option-1" id="option-1" />
              <Label htmlFor="option-1" className="text-foreground">
                I&apos;m new and need help with account setup.
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option-2" id="option-2" />
              <Label htmlFor="option-2" className="text-foreground">
                I want to explore product features and tutorials.
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option-3" id="option-3" />
              <Label htmlFor="option-3" className="text-foreground">
                I have questions about billing and pricing.
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option-4" id="option-4" />
              <Label htmlFor="option-4" className="text-foreground">
                I need assistance with technical issues.
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option-5" id="option-5" />
              <Label htmlFor="option-5" className="text-foreground">
                None
              </Label>
            </div>
          </RadioGroup>
          <Button className="mt-6">Get Started</Button>
        </form>
      </CardContent>
    </Card>
  )
}
