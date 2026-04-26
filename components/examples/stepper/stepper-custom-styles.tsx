"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"
import {
  Stepper,
  StepperHeader,
  StepperIcon,
  StepperItem,
  StepperSeparator,
} from "@/components/ui/stepper"

export default function StepperCustomStyles() {
  const [step, setStep] = React.useState(0)

  return (
    <Card className="bg-primary mx-auto w-full rounded-full p-6">
      <Stepper value={step} onChange={setStep} className="relative">
        <StepperItem value={0} className="flex-1">
          <StepperHeader className="flex w-full flex-col items-center">
            <div className="flex w-full items-center">
              <StepperIcon
                className={cn(
                  "relative z-10 flex size-4 shrink-0 items-center justify-center rounded-full border-2 transition-colors",
                  step >= 0
                    ? "border-white bg-white"
                    : "border-gray-300 bg-gray-300"
                )}
              />
              {step < 3 && (
                <StepperSeparator
                  className={cn(
                    "mx-2 h-0.5 flex-1 transition-colors",
                    step > 0 ? "bg-white" : "bg-gray-300"
                  )}
                />
              )}
            </div>
          </StepperHeader>
        </StepperItem>
        <StepperItem value={1} className="flex-1">
          <StepperHeader className="flex w-full flex-col items-center">
            <div className="flex w-full items-center">
              <StepperIcon
                className={cn(
                  "relative z-10 flex size-4 shrink-0 items-center justify-center rounded-full border-2 transition-colors",
                  step >= 1
                    ? "border-white bg-white"
                    : "border-gray-300 bg-gray-300"
                )}
              />
              {step < 3 && (
                <StepperSeparator
                  className={cn(
                    "mx-2 h-0.5 flex-1 transition-colors",
                    step > 1 ? "bg-white" : "bg-gray-300"
                  )}
                />
              )}
            </div>
          </StepperHeader>
        </StepperItem>
        <StepperItem value={2} className="flex-1">
          <StepperHeader className="flex w-full flex-col items-center">
            <div className="flex w-full items-center">
              <StepperIcon
                className={cn(
                  "relative z-10 flex size-4 shrink-0 items-center justify-center rounded-full border-2 transition-colors",
                  step >= 2
                    ? "border-white bg-white"
                    : "border-gray-300 bg-gray-300"
                )}
              />
              {step < 3 && (
                <StepperSeparator
                  className={cn(
                    "mx-2 h-0.5 flex-1 transition-colors",
                    step > 2 ? "bg-white" : "bg-gray-300"
                  )}
                />
              )}
            </div>
          </StepperHeader>
        </StepperItem>
        <StepperItem value={3} className="flex-1">
          <StepperHeader className="flex w-full flex-col items-center">
            <StepperIcon
              className={cn(
                "relative z-10 flex size-4 shrink-0 items-center justify-center rounded-full border-2 transition-colors",
                step >= 3
                  ? "border-white bg-white"
                  : "border-gray-300 bg-gray-300"
              )}
            />
          </StepperHeader>
        </StepperItem>
      </Stepper>
    </Card>
  )
}
