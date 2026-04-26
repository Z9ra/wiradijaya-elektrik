"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Stepper,
  StepperHeader,
  StepperIcon,
  StepperItem,
  StepperSeparator,
} from "@/components/ui/stepper"

export default function StepperDemo() {
  const [step, setStep] = React.useState(0)

  return (
    <div className="w-full">
      <Stepper
        value={step}
        onChange={setStep}
        className="relative flex items-center"
      >
        <StepperItem value={0} disabled={step < 0} className="flex-1">
          <StepperHeader className="flex w-full items-center">
            <StepperIcon
              className={cn(
                "relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border-2 transition-colors",
                step >= 0
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-muted bg-background text-muted-foreground"
              )}
            >
              1
            </StepperIcon>
            <StepperSeparator
              className={cn(
                "mx-2 h-0.5 flex-1 transition-colors",
                step > 0 ? "bg-primary" : "bg-muted"
              )}
            />
          </StepperHeader>
        </StepperItem>
        <StepperItem value={1} disabled={step < 1} className="flex-1">
          <StepperHeader className="flex w-full items-center">
            <StepperIcon
              className={cn(
                "relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border-2 transition-colors",
                step >= 1
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-muted bg-background text-muted-foreground"
              )}
            >
              2
            </StepperIcon>
            <StepperSeparator
              className={cn(
                "mx-2 h-0.5 flex-1 transition-colors",
                step > 1 ? "bg-primary" : "bg-muted"
              )}
            />
          </StepperHeader>
        </StepperItem>
        <StepperItem value={2} disabled={step < 2} className="flex-1">
          <StepperHeader className="flex w-full items-center">
            <StepperIcon
              className={cn(
                "relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border-2 transition-colors",
                step >= 2
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-muted bg-background text-muted-foreground"
              )}
            >
              3
            </StepperIcon>
          </StepperHeader>
        </StepperItem>
      </Stepper>

      <div className="mt-14 flex w-full justify-between gap-4">
        <Button disabled={step === 0} onClick={() => setStep(step - 1)}>
          Previous
        </Button>
        <Button disabled={step === 2} onClick={() => setStep(step + 1)}>
          Next
        </Button>
      </div>
    </div>
  )
}
