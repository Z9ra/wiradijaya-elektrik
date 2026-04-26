"use client"

import * as React from "react"
import { AlertTriangle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function SimpleRequestPopup() {
  return (
    <Card className="mx-auto max-w-xl p-8">
      <CardContent className="p-0">
        <div className="mb-8">
          <AlertTriangle className="h-10 w-10 fill-current text-black" />
          <h2 className="my-4 text-2xl font-semibold">
            Account Deletion Request
          </h2>
          <p className="text-foreground text-lg [text-wrap:balance]">
            Please be aware that deleting your account is irreversible and will
            result in the permanent removal of all your data, preferences, and
            history with our service.
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Step 1</h3>
          <p className="text-foreground text-lg [text-wrap:balance]">
            Review and understand the consequences of account deletion to ensure
            you have a clear understanding of what you are deleting.
          </p>
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-semibold">Step 2</h3>
          <p className="text-foreground text-lg [text-wrap:balance]">
            If you have any subscriptions or ongoing services, ensure they are
            canceled to avoid future charges.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="destructive">Delete Account</Button>
          <Button variant="secondary">Cancel</Button>
        </div>
      </CardContent>
    </Card>
  )
}
