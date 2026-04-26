"use client"

import {
  CreditCard,
  Search,
  Settings as SettingsIcon,
  User,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group"

export default function SidebarWithCards() {
  return (
    <div className="bg-background h-screen w-full max-w-xs overflow-y-scroll rounded-lg border shadow-sm">
      <div className="p-4">
        <div className="mb-4 space-y-2">
          <p className="text-base font-semibold md:text-lg">
            Complete Your Profile Information
          </p>
          <p className="text-muted-foreground text-base">
            Keep track of your progress as you fill out your profile details.
          </p>
        </div>
        <div className="relative">
          <Search className="text-muted-foreground absolute top-1/2 left-2.5 h-5 w-5 -translate-y-1/2" />
          <Input type="search" placeholder="Search here..." className="pl-9" />
        </div>
      </div>

      <div className="space-y-4 px-4 pb-4">
        <Card className="bg-transparent p-4">
          <Badge
            variant="secondary"
            className="bg-green-500/10 text-green-500 hover:bg-green-500/20"
          >
            Completed
          </Badge>
          <small className="mt-4 mb-2 flex items-center text-sm font-semibold">
            <User className="mr-2 inline-block h-4 w-4" />
            Profile Information
          </small>
          <small className="text-muted-foreground mb-4 block text-sm">
            All essential personal details have been filled out.
          </small>
          <RadioGroup defaultValue="email" className="space-y-2">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="name" id="name" />
              <Label
                htmlFor="name"
                className="text-muted-foreground cursor-pointer text-sm"
              >
                Name
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="email" id="email" />
              <Label
                htmlFor="email"
                className="text-muted-foreground cursor-pointer text-sm"
              >
                Email Address
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="phone" id="phone" />
              <Label
                htmlFor="phone"
                className="text-muted-foreground cursor-pointer text-sm"
              >
                Phone Number
              </Label>
            </div>
          </RadioGroup>
        </Card>

        <Card className="bg-transparent p-4">
          <Badge variant="secondary">Needs Completion</Badge>
          <small className="mt-4 mb-2 flex items-center text-sm font-semibold">
            <CreditCard className="mr-2 inline-block h-4 w-4" />
            Billing Information
          </small>
          <small className="text-muted-foreground mb-4 block text-sm">
            All essential personal details have been filled out.
          </small>
          <RadioGroup defaultValue="tax-id" className="space-y-2">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="payment-method" id="payment-method" />
              <Label
                htmlFor="payment-method"
                className="text-muted-foreground cursor-pointer text-sm"
              >
                Payment Method
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="billing-address" id="billing-address" />
              <Label
                htmlFor="billing-address"
                className="text-muted-foreground cursor-pointer text-sm"
              >
                Billing Address
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="tax-id" id="tax-id" />
              <Label
                htmlFor="tax-id"
                className="text-muted-foreground cursor-pointer text-sm"
              >
                Tax ID
              </Label>
            </div>
          </RadioGroup>
        </Card>

        <Card className="bg-transparent p-4">
          <Badge variant="secondary">Needs Completion</Badge>
          <small className="mt-4 mb-2 flex items-center text-sm font-semibold">
            <SettingsIcon className="mr-2 inline-block h-4 w-4" />
            Preferences
          </small>
          <small className="text-muted-foreground mb-4 block text-sm">
            Set your preferences for communication and notifications.
          </small>
          <RadioGroup defaultValue="language" className="space-y-2">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="communication" id="communication" />
              <Label
                htmlFor="communication"
                className="text-muted-foreground cursor-pointer text-sm"
              >
                Communication
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="notification" id="notification" />
              <Label
                htmlFor="notification"
                className="text-muted-foreground cursor-pointer text-sm"
              >
                Notification
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="language" id="language" />
              <Label
                htmlFor="language"
                className="text-muted-foreground cursor-pointer text-sm"
              >
                Language
              </Label>
            </div>
          </RadioGroup>
        </Card>
      </div>
    </div>
  )
}
