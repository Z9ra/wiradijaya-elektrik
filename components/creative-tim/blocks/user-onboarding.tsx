"use client"

import { useState } from "react"
import { Check, Settings, User } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function UserOnboarding() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    termsAccepted: true,
    preference: "",
    code: ["", "", "", ""],
  })

  const steps = [
    { id: 1, label: "Account", icon: Settings },
    { id: 2, label: "Profile", icon: User },
    { id: 3, label: "Confirmation", icon: Check },
  ]

  const handleNext = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1)
  }

  const handlePrevious = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const handleCodeInput = (index: number, value: string) => {
    if (value.length <= 1) {
      const newCode = [...formData.code]
      newCode[index] = value
      setFormData({ ...formData, code: newCode })

      if (value && index < 3) {
        const nextInput = document.getElementById(`code-${index + 1}`)
        nextInput?.focus()
      }
    }
  }

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-full w-full md:col-span-7">
        <div className="mx-auto flex h-max w-full max-w-2xl flex-col justify-center px-4 py-16 md:h-screen">
          <div className="mx-auto w-full max-w-2xl py-8">
            <div className="w-full">
              {/* Stepper */}
              <div className="flex w-full items-center justify-between">
                {steps.map((step, index) => {
                  const Icon = step.icon
                  const isActive = currentStep === step.id
                  const isCompleted = currentStep > step.id
                  const isLast = index === steps.length - 1

                  return (
                    <div
                      key={step.id}
                      className="group flex w-full items-center"
                    >
                      <div className="relative">
                        <span
                          className={cn(
                            "relative grid h-10 w-10 place-items-center rounded-full",
                            isActive || isCompleted
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted"
                          )}
                        >
                          <Icon className="h-6 w-6" />
                        </span>
                        <p className="absolute right-0 -bottom-6 left-0 text-sm font-medium whitespace-nowrap">
                          {step.label}
                        </p>
                      </div>
                      {!isLast && (
                        <div
                          className={cn(
                            "h-1 flex-1",
                            isCompleted ? "bg-primary" : "bg-muted"
                          )}
                        />
                      )}
                    </div>
                  )
                })}
              </div>

              {/* Form Section */}
              <div className="mt-8">
                {/* Step 1 Content */}
                {currentStep === 1 && (
                  <div className="step-content">
                    <h2 className="mb-6 text-base font-semibold md:text-lg lg:text-xl">
                      Nice to meet you!
                    </h2>
                    <div className="mb-6 space-y-1.5">
                      <Label htmlFor="name">Your name</Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                      />
                    </div>
                    <div className="mb-6 space-y-1.5">
                      <Label htmlFor="email">Your email</Label>
                      <Input
                        id="email"
                        placeholder="someone@example.com"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                    </div>
                    <div className="mb-6 flex items-center gap-2">
                      <Checkbox
                        id="terms"
                        checked={formData.termsAccepted}
                        onCheckedChange={(checked) =>
                          setFormData({
                            ...formData,
                            termsAccepted: checked as boolean,
                          })
                        }
                      />
                      <Label
                        htmlFor="terms"
                        className="text-muted-foreground cursor-pointer font-light"
                      >
                        I agree with the{" "}
                        <a href="#" className="hover:text-foreground">
                          terms and conditions
                        </a>
                        .
                      </Label>
                    </div>
                  </div>
                )}

                {/* Step 2 Content */}
                {currentStep === 2 && (
                  <div className="step-content">
                    <h2 className="mt-4 mb-6 text-base font-semibold md:text-lg lg:text-xl">
                      Let's get to know each other!
                    </h2>
                    <RadioGroup
                      value={formData.preference}
                      onValueChange={(value) =>
                        setFormData({ ...formData, preference: value })
                      }
                      className="flex flex-col gap-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-1" id="option-1" />
                        <Label
                          htmlFor="option-1"
                          className="text-muted-foreground cursor-pointer font-normal"
                        >
                          I'm new and need help with account setup.
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-2" id="option-2" />
                        <Label
                          htmlFor="option-2"
                          className="text-muted-foreground cursor-pointer font-normal"
                        >
                          I want to explore product features and tutorials.
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-3" id="option-3" />
                        <Label
                          htmlFor="option-3"
                          className="text-muted-foreground cursor-pointer font-normal"
                        >
                          I have questions about billing and pricing.
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-4" id="option-4" />
                        <Label
                          htmlFor="option-4"
                          className="text-muted-foreground cursor-pointer font-normal"
                        >
                          I need assistance with technical issues.
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-5" id="option-5" />
                        <Label
                          htmlFor="option-5"
                          className="text-muted-foreground cursor-pointer font-normal"
                        >
                          Remind me later
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                )}

                {/* Step 3 Content */}
                {currentStep === 3 && (
                  <div className="step-content">
                    <div className="h-max max-w-md">
                      <h2 className="text-base font-semibold md:text-lg lg:text-xl">
                        Confirm your email address
                      </h2>
                      <p className="text-muted-foreground mt-4 text-base [text-wrap:balance]">
                        We have sent a four-digit verification code to the email
                        address associated with your account, name@company.com.
                        To complete the confirmation of your email address,
                        please enter the provided code in the field below.
                      </p>
                      <div className="mt-6 flex gap-2">
                        {[0, 1, 2, 3].map((index) => (
                          <Input
                            key={index}
                            id={`code-${index}`}
                            type="text"
                            maxLength={1}
                            className="h-16 w-16 text-center text-xl"
                            value={formData.code[index]}
                            onChange={(e) =>
                              handleCodeInput(index, e.target.value)
                            }
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Navigation Buttons */}
              <div className="mt-6 flex w-full justify-between gap-4">
                <Button
                  onClick={handlePrevious}
                  disabled={currentStep === 1}
                  className="disabled:opacity-50"
                >
                  Previous
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={currentStep === 3}
                  className="disabled:opacity-50"
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-full md:col-span-5">
        <div className="relative grid min-h-screen bg-[url('https://v3.material-tailwind.com/earth-outer-space.jpg')] bg-cover bg-center p-4">
          <span className="absolute inset-0 h-full w-full bg-black/75"></span>
          <div className="relative z-10 flex h-full items-center justify-center">
            <div className="w-full px-4 py-16">
              <img
                src="https://v3.material-tailwind.com/logo/coinbase.svg"
                alt="company logo"
                className="mx-auto mb-8 h-20"
              />
              <div className="text-center">
                <p className="mb-8 text-base font-medium [text-wrap:balance] text-white md:text-lg">
                  "Knowledge is either from direct experience or from
                  verifiable, falsifiable science. There is knowledge that is
                  transmitted but not verifiable / falsifiable. They're slowed
                  down by their perception of themselves."
                </p>
                <div className="flex items-center justify-center gap-2">
                  <p className="text-center text-base font-medium text-white">
                    John Down
                  </p>
                  <small className="block text-center text-sm text-white/80">
                    CEO @ Coinbase
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
