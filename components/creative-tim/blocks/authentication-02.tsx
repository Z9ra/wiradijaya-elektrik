"use client"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Authentication02() {
  return (
    <div className="grid min-h-screen min-w-screen grid-cols-1 items-center gap-4 lg:grid-cols-2">
      <div className="mx-auto w-full max-w-lg p-6 sm:p-16 lg:max-w-md lg:p-0">
        <h2 className="mb-2 text-center text-2xl font-bold tracking-tight">
          Sign In
        </h2>
        <p className="text-muted-foreground mb-16 text-center text-base">
          Enter your email and password to sign in
        </p>
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
          <div className="space-y-2">
            <Label htmlFor="password" className="text-sm font-semibold">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="************"
              className="h-11"
            />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="checkbox-terms" />
            <Label
              htmlFor="checkbox-terms"
              className="text-muted-foreground flex flex-wrap gap-x-1 text-sm font-normal"
            >
              I agree with the
              <a href="#" className="text-primary hover:underline">
                terms and conditions
              </a>
            </Label>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Checkbox id="checkbox-newsletter" />
              <Label
                htmlFor="checkbox-newsletter"
                className="text-muted-foreground flex gap-1 text-sm font-normal"
              >
                Subscribe me to newsletter
              </Label>
            </div>
            <a
              href="#"
              className="text-primary text-sm font-semibold hover:underline"
            >
              Forgot Password?
            </a>
          </div>
          <Button type="submit" size="lg" className="w-full">
            Sign In
          </Button>
        </form>
        <div className="my-6 space-y-4">
          <Button type="button" size="lg" variant="outline" className="w-full">
            <svg
              className="mr-2 h-5 w-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Sign in with Google
          </Button>
          <Button type="button" size="lg" variant="outline" className="w-full">
            <svg
              className="mr-2 h-5 w-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            Sign in with X/Twitter
          </Button>
        </div>
        <p className="text-muted-foreground flex items-center justify-center gap-1 text-center">
          Not registered?
          <a href="#" className="text-primary font-semibold hover:underline">
            Create account
          </a>
        </p>
      </div>
      <img
        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/creative-ai/bg-3.jpg"
        alt="creative background"
        className="hidden h-full min-h-screen w-full object-cover lg:block"
      />
    </div>
  )
}
