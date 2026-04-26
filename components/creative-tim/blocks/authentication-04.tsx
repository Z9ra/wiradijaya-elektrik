"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Authentication04() {
  return (
    <div className="grid items-center p-4">
      <div className="relative h-full min-h-[calc(50vh-32px)] w-full overflow-hidden rounded-xl bg-[url('https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/creative-ai/bg-3.jpg')] bg-cover bg-center"></div>
      <div className="mx-auto w-full max-w-md -translate-y-1/3 p-4">
        <Card className="bg-card relative mx-auto w-full max-w-max border p-0 shadow-lg">
          <div className="m-0 p-6 sm:p-8">
            <h2 className="mb-2 text-2xl font-bold tracking-tight">
              Reset Password
            </h2>
            <p className="text-muted-foreground text-base">
              You will receive an e-mail in maximum 60 seconds
            </p>
          </div>
          <div className="px-6 pb-6 sm:px-8 sm:pb-8">
            <form action="#" className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-semibold">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="someone@example.com"
                  className="h-11"
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                Reset
              </Button>
            </form>
          </div>
        </Card>
      </div>
    </div>
  )
}
