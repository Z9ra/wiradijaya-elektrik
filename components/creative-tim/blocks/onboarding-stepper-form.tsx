"use client"

import * as React from "react"
import { CheckCircle2, Sparkles } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Stepper,
  StepperBody,
  StepperHeader,
  StepperIcon,
  StepperItem,
  StepperSeparator,
} from "@/components/ui/stepper"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"

const STEPS = [
  { id: 0, title: "Profile", description: "Company info" },
  { id: 1, title: "Workspace", description: "Team setup" },
  { id: 2, title: "Finish", description: "Review" },
]

export default function OnboardingStepperForm() {
  const [activeStep, setActiveStep] = React.useState(0)
  const [company, setCompany] = React.useState("")
  const [website, setWebsite] = React.useState("")
  const [industry, setIndustry] = React.useState("saas")
  const [teamSize, setTeamSize] = React.useState("10-25")
  const [goal, setGoal] = React.useState("")
  const [aiSuggestions, setAiSuggestions] = React.useState(true)

  const isProfileComplete = Boolean(company.trim() && website.trim())
  const isWorkspaceComplete = Boolean(teamSize && goal.trim())
  const canContinue =
    activeStep === 0
      ? isProfileComplete
      : activeStep === 1
        ? isWorkspaceComplete
        : true

  return (
    <div className="mx-auto max-w-5xl p-6">
      <Card className="bg-card border p-8">
        <div className="flex flex-wrap items-start justify-between gap-4 border-b pb-6">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
              <Sparkles className="text-primary h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                Onboarding Stepper
              </h2>
              <p className="text-muted-foreground mt-1 text-sm">
                Collect profile details and configure the workspace.
              </p>
            </div>
          </div>
          <Badge variant="outline" className="text-muted-foreground">
            Step {activeStep + 1} of {STEPS.length}
          </Badge>
        </div>

        <div className="mt-6">
          <Stepper value={activeStep} onChange={setActiveStep}>
            <StepperHeader className="w-full gap-3">
              {STEPS.map((step, index) => (
                <StepperItem key={step.id} value={index}>
                  <div className="flex items-center gap-3">
                    <StepperIcon
                      className={
                        activeStep >= index
                          ? "border-primary bg-primary text-primary-foreground"
                          : "bg-muted border-muted"
                      }
                    >
                      {activeStep > index ? (
                        <CheckCircle2 className="h-4 w-4" />
                      ) : (
                        <span className="text-xs font-semibold">
                          {index + 1}
                        </span>
                      )}
                    </StepperIcon>
                    <StepperBody className="text-left">
                      <p className="text-sm font-semibold">{step.title}</p>
                      <p className="text-muted-foreground text-xs">
                        {step.description}
                      </p>
                    </StepperBody>
                  </div>
                  {index < STEPS.length - 1 ? (
                    <StepperSeparator
                      className={activeStep > index ? "bg-primary" : "bg-muted"}
                    />
                  ) : null}
                </StepperItem>
              ))}
            </StepperHeader>
          </Stepper>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.4fr,1fr]">
          <Card className="bg-muted/30 border p-6">
            {activeStep === 0 && (
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">Company profile</h3>
                  <p className="text-muted-foreground text-sm">
                    Tell us about your organization.
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company name</Label>
                  <Input
                    id="company"
                    placeholder="Creative Tim"
                    value={company}
                    onChange={(event) => setCompany(event.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website">Website</Label>
                  <Input
                    id="website"
                    placeholder="https://"
                    value={website}
                    onChange={(event) => setWebsite(event.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="industry">Industry</Label>
                  <Select value={industry} onValueChange={setIndustry}>
                    <SelectTrigger id="industry">
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="saas">SaaS</SelectItem>
                      <SelectItem value="ecommerce">Ecommerce</SelectItem>
                      <SelectItem value="agency">Agency</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {activeStep === 1 && (
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">Workspace setup</h3>
                  <p className="text-muted-foreground text-sm">
                    Set how your team will collaborate.
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="team-size">Team size</Label>
                  <Select value={teamSize} onValueChange={setTeamSize}>
                    <SelectTrigger id="team-size">
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-5">1-5</SelectItem>
                      <SelectItem value="6-10">6-10</SelectItem>
                      <SelectItem value="10-25">10-25</SelectItem>
                      <SelectItem value="25+">25+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="goal">Primary goal</Label>
                  <Textarea
                    id="goal"
                    placeholder="Ship faster releases..."
                    value={goal}
                    onChange={(event) => setGoal(event.target.value)}
                  />
                </div>
                <div className="bg-background flex items-center justify-between rounded-lg border p-3">
                  <div>
                    <p className="text-sm font-medium">Enable AI suggestions</p>
                    <p className="text-muted-foreground text-xs">
                      Get smart recommendations during setup.
                    </p>
                  </div>
                  <Switch
                    id="ai-suggestions"
                    checked={aiSuggestions}
                    onCheckedChange={setAiSuggestions}
                  />
                </div>
              </div>
            )}

            {activeStep === 2 && (
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">Review and launch</h3>
                  <p className="text-muted-foreground text-sm">
                    Confirm your settings and invite the team.
                  </p>
                </div>
                <div className="bg-background rounded-lg border p-4">
                  <p className="text-sm font-semibold">Workspace ready</p>
                  <p className="text-muted-foreground text-xs">
                    {company || "Your company"} • {teamSize} teammates •{" "}
                    {aiSuggestions ? "AI enabled" : "AI disabled"}
                  </p>
                </div>
                <div className="bg-background rounded-lg border p-4">
                  <p className="text-sm font-semibold">Next steps</p>
                  <ul className="text-muted-foreground mt-2 space-y-1 text-xs">
                    <li>Invite teammates to the workspace.</li>
                    <li>Connect your first integration.</li>
                    <li>Review security policies.</li>
                  </ul>
                </div>
              </div>
            )}
          </Card>

          <Card className="bg-muted/30 border p-6">
            <h3 className="text-lg font-semibold">Setup checklist</h3>
            <p className="text-muted-foreground text-sm">
              Complete these items to launch faster.
            </p>
            <div className="mt-4 space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <span>Complete company profile</span>
                <Badge variant="outline">
                  {isProfileComplete ? "Done" : "Pending"}
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>Invite stakeholders</span>
                <Badge variant="outline">Optional</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>Connect billing</span>
                <Badge variant="outline">
                  {industry === "saas" ? "Recommended" : "Optional"}
                </Badge>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-6 flex items-center justify-between border-t pt-6">
          <Button
            variant="outline"
            onClick={() => setActiveStep((prev) => Math.max(prev - 1, 0))}
            disabled={activeStep === 0}
          >
            Back
          </Button>
          <Button
            onClick={() => setActiveStep((prev) => Math.min(prev + 1, 2))}
            disabled={!canContinue}
          >
            {activeStep === 2 ? "Finish onboarding" : "Continue"}
          </Button>
        </div>
      </Card>
    </div>
  )
}
