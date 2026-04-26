"use client"

import * as React from "react"
import {
  CheckCircle2,
  Link2,
  ShieldCheck,
  SlidersHorizontal,
} from "lucide-react"

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

const STEPS = [
  {
    id: 0,
    title: "Connect",
    description: "Link your provider",
    icon: Link2,
  },
  {
    id: 1,
    title: "Configure",
    description: "Set permissions",
    icon: SlidersHorizontal,
  },
  {
    id: 2,
    title: "Complete",
    description: "Finish setup",
    icon: CheckCircle2,
  },
]

export default function IntegrationSetupWizard() {
  const [activeStep, setActiveStep] = React.useState(0)
  const [provider, setProvider] = React.useState("github")
  const [token, setToken] = React.useState("")
  const [sandbox, setSandbox] = React.useState(true)
  const [repoRead, setRepoRead] = React.useState(true)
  const [deployWrite, setDeployWrite] = React.useState(false)
  const [alerts, setAlerts] = React.useState(true)

  const goNext = () => setActiveStep((prev) => Math.min(prev + 1, 2))
  const goBack = () => setActiveStep((prev) => Math.max(prev - 1, 0))

  const canContinue =
    activeStep === 0
      ? Boolean(provider && token.trim())
      : activeStep === 1
        ? repoRead || deployWrite || alerts
        : true

  const maskedToken = token
    ? `${token.slice(0, 4)}...${token.slice(-3)}`
    : "Not set"

  return (
    <div className="mx-auto max-w-5xl p-6">
      <Card className="bg-card border p-8">
        <div className="flex flex-wrap items-start justify-between gap-4 border-b pb-6">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
              <ShieldCheck className="text-primary h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                Integration Setup Wizard
              </h2>
              <p className="text-muted-foreground mt-1 text-sm">
                Connect your tools in three guided steps.
              </p>
            </div>
          </div>
          <Badge variant="outline" className="text-muted-foreground">
            3 steps total
          </Badge>
        </div>

        <div className="mt-6">
          <Stepper value={activeStep} onChange={setActiveStep}>
            <StepperHeader className="w-full gap-3">
              {STEPS.map((step, index) => {
                const Icon = step.icon
                const isActive = activeStep === index
                const isCompleted = activeStep > index
                return (
                  <StepperItem key={step.id} value={index}>
                    <div className="flex items-center gap-3">
                      <StepperIcon
                        className={
                          isActive || isCompleted
                            ? "border-primary bg-primary text-primary-foreground"
                            : "bg-muted border-muted"
                        }
                      >
                        <Icon className="h-4 w-4" />
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
                        className={isCompleted ? "bg-primary" : "bg-muted"}
                      />
                    ) : null}
                  </StepperItem>
                )
              })}
            </StepperHeader>
          </Stepper>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.4fr,1fr]">
          <Card className="bg-muted/30 border p-6">
            {activeStep === 0 && (
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">Connect provider</h3>
                  <p className="text-muted-foreground text-sm">
                    Choose a provider and generate your access token.
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="provider">Provider</Label>
                  <Select value={provider} onValueChange={setProvider}>
                    <SelectTrigger id="provider">
                      <SelectValue placeholder="Select provider" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="github">GitHub</SelectItem>
                      <SelectItem value="slack">Slack</SelectItem>
                      <SelectItem value="notion">Notion</SelectItem>
                      <SelectItem value="linear">Linear</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="token">Access token</Label>
                  <Input
                    id="token"
                    placeholder="Paste your token"
                    value={token}
                    onChange={(event) => setToken(event.target.value)}
                  />
                </div>
                <div className="bg-background flex items-center justify-between rounded-lg border p-3">
                  <div>
                    <p className="text-sm font-medium">Sandbox mode</p>
                    <p className="text-muted-foreground text-xs">
                      Test the integration before going live.
                    </p>
                  </div>
                  <Switch
                    id="sandbox"
                    checked={sandbox}
                    onCheckedChange={setSandbox}
                  />
                </div>
              </div>
            )}

            {activeStep === 1 && (
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">Configure access</h3>
                  <p className="text-muted-foreground text-sm">
                    Grant the minimum scopes your team needs.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="bg-background flex items-center justify-between rounded-lg border p-3">
                    <div>
                      <p className="text-sm font-medium">Read repositories</p>
                      <p className="text-muted-foreground text-xs">
                        Sync issues, commits, and releases.
                      </p>
                    </div>
                    <Switch
                      id="repo-read"
                      checked={repoRead}
                      onCheckedChange={setRepoRead}
                    />
                  </div>
                  <div className="bg-background flex items-center justify-between rounded-lg border p-3">
                    <div>
                      <p className="text-sm font-medium">Write deployments</p>
                      <p className="text-muted-foreground text-xs">
                        Trigger automated deploys on release.
                      </p>
                    </div>
                    <Switch
                      id="deploy-write"
                      checked={deployWrite}
                      onCheckedChange={setDeployWrite}
                    />
                  </div>
                  <div className="bg-background flex items-center justify-between rounded-lg border p-3">
                    <div>
                      <p className="text-sm font-medium">Notifications</p>
                      <p className="text-muted-foreground text-xs">
                        Receive alerts for failed builds.
                      </p>
                    </div>
                    <Switch
                      id="alerts"
                      checked={alerts}
                      onCheckedChange={setAlerts}
                    />
                  </div>
                </div>
              </div>
            )}

            {activeStep === 2 && (
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">Connection ready</h3>
                  <p className="text-muted-foreground text-sm">
                    Your integration is live and syncing data.
                  </p>
                </div>
                <div className="bg-background rounded-lg border p-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-lg">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">
                        {provider.charAt(0).toUpperCase() + provider.slice(1)}{" "}
                        Connected
                      </p>
                      <p className="text-muted-foreground text-xs">
                        Token {maskedToken} •{" "}
                        {sandbox ? "Sandbox mode" : "Production"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-background rounded-lg border p-4">
                  <p className="text-sm font-medium">Next steps</p>
                  <ul className="text-muted-foreground mt-2 space-y-1 text-xs">
                    <li>Invite teammates to use shared workflows.</li>
                    <li>Enable deployment alerts in Slack.</li>
                    <li>Review audit logs weekly.</li>
                  </ul>
                </div>
              </div>
            )}
          </Card>

          <Card className="bg-muted/30 border p-6">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Setup details</h3>
              <p className="text-muted-foreground text-sm">
                Configure defaults once and reuse across projects.
              </p>
              <div className="bg-background rounded-lg border p-3">
                <p className="text-sm font-medium">Environment</p>
                <p className="text-muted-foreground text-xs">
                  {sandbox ? "Sandbox workspace" : "Production workspace"}
                </p>
              </div>
              <div className="bg-background rounded-lg border p-3">
                <p className="text-sm font-medium">Ownership</p>
                <p className="text-muted-foreground text-xs">
                  Managed by Emma Rodriguez
                </p>
              </div>
              <div className="bg-background rounded-lg border p-3">
                <p className="text-sm font-medium">Alerts</p>
                <p className="text-muted-foreground text-xs">
                  {alerts ? "Send failure alerts to #devops" : "Alerts off"}
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t pt-6">
          <Button
            variant="outline"
            onClick={goBack}
            disabled={activeStep === 0}
          >
            Back
          </Button>
          <div className="flex items-center gap-3">
            <Button variant="ghost">Save as draft</Button>
            <Button onClick={goNext} disabled={!canContinue}>
              {activeStep === 2 ? "Finish setup" : "Continue"}
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
