"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function CardLogin() {
  return (
    <Card className="w-full max-w-xs pt-0">
      <CardHeader className="bg-primary text-primary-foreground rounded-t-lg py-6">
        <CardTitle className="text-center text-2xl font-bold">
          Sign In
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 pt-6">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-semibold">
            Email
          </Label>
          <Input id="email" type="email" placeholder="someone@example.com" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password" className="text-sm font-semibold">
            Password
          </Label>
          <Input id="password" type="password" placeholder="************" />
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember" className="text-muted-foreground text-sm">
            Remember Me
          </Label>
        </div>
        <Button className="w-full">Sign In</Button>
      </CardContent>
      <CardFooter className="text-center">
        <p className="text-muted-foreground flex items-center justify-center gap-1 text-sm">
          Don't have an account?
          <a href="#" className="text-primary font-bold">
            Sign up
          </a>
        </p>
      </CardFooter>
    </Card>
  )
}
