"use client"

import * as React from "react"
import { Home, Settings, User } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Stepper,
  StepperBody,
  StepperHeader,
  StepperIcon,
  StepperItem,
  StepperSeparator,
} from "@/components/ui/stepper"

export default function StepperWithContent() {
  const [step, setStep] = React.useState(0)

  return (
    <div className="w-full">
      <Stepper value={step} onChange={setStep} className="relative">
        <div className="flex w-full items-start">
          <StepperItem value={0} disabled={step < 0} className="flex-1">
            <div className="flex flex-col items-center">
              <div className="relative w-full">
                <StepperSeparator
                  className={cn(
                    "absolute top-0 left-1/2 h-0.5 w-full -translate-x-1/2 transition-colors",
                    step > 0 ? "bg-primary" : "bg-muted"
                  )}
                />
              </div>
              <StepperHeader className="mt-2 flex w-full items-center">
                <StepperIcon
                  className={cn(
                    "relative z-10 mx-auto flex size-10 shrink-0 items-center justify-center rounded-full border-2 transition-colors",
                    step >= 0
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-muted bg-background text-muted-foreground"
                  )}
                >
                  <Home className="h-6 w-6" />
                </StepperIcon>
              </StepperHeader>
              <StepperBody className="mt-4 text-center">
                <h6
                  className={cn(
                    "text-base font-semibold",
                    step >= 0 ? "text-primary" : "text-foreground"
                  )}
                >
                  Step 1
                </h6>
                <p className="text-muted-foreground mt-1 text-sm">
                  Details about your account.
                </p>
              </StepperBody>
            </div>
          </StepperItem>
          <StepperItem value={1} disabled={step < 1} className="flex-1">
            <div className="flex flex-col items-center">
              <div className="relative w-full">
                <StepperSeparator
                  className={cn(
                    "absolute top-0 left-1/2 h-0.5 w-full -translate-x-1/2 transition-colors",
                    step > 1 ? "bg-primary" : "bg-muted"
                  )}
                />
              </div>
              <StepperHeader className="mt-2 flex w-full items-center">
                <StepperIcon
                  className={cn(
                    "relative z-10 mx-auto flex size-10 shrink-0 items-center justify-center rounded-full border-2 transition-colors",
                    step >= 1
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-muted bg-background text-muted-foreground"
                  )}
                >
                  <User className="h-6 w-6" />
                </StepperIcon>
              </StepperHeader>
              <StepperBody className="mt-4 text-center">
                <h6
                  className={cn(
                    "text-base font-semibold",
                    step >= 1 ? "text-primary" : "text-foreground"
                  )}
                >
                  Step 2
                </h6>
                <p className="text-muted-foreground mt-1 text-sm">
                  Details about your account.
                </p>
              </StepperBody>
            </div>
          </StepperItem>
          <StepperItem value={2} disabled={step < 2} className="flex-1">
            <div className="flex flex-col items-center">
              <StepperHeader className="mt-2 flex w-full items-center">
                <StepperIcon
                  className={cn(
                    "relative z-10 mx-auto flex size-10 shrink-0 items-center justify-center rounded-full border-2 transition-colors",
                    step >= 2
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-muted bg-background text-muted-foreground"
                  )}
                >
                  <Settings className="h-6 w-6" />
                </StepperIcon>
              </StepperHeader>
              <StepperBody className="mt-4 text-center">
                <h6
                  className={cn(
                    "text-base font-semibold",
                    step >= 2 ? "text-primary" : "text-foreground"
                  )}
                >
                  Step 3
                </h6>
                <p className="text-muted-foreground mt-1 text-sm">
                  Details about your account.
                </p>
              </StepperBody>
            </div>
          </StepperItem>
        </div>
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
