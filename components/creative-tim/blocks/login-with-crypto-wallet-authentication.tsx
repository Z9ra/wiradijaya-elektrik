"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoginWithCryptoWalletAuthentication() {
  const [activeTab, setActiveTab] = useState<"email" | "phone">("email")

  return (
    <Card className="mx-auto w-full max-w-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-lg md:text-xl lg:text-2xl">
          One-Click Web3 Access
        </CardTitle>
        <CardDescription className="mx-auto mb-4 max-w-lg [text-wrap:balance]">
          Access your Web3 accounts with just one click using our convenient
          login card.
        </CardDescription>
        <div className="mx-auto mt-6 max-w-[280px]">
          <div className="relative flex w-full rounded-md bg-slate-100 p-1 dark:bg-slate-200">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setActiveTab("email")}
              className={`relative z-10 w-full px-3 py-1.5 text-sm font-medium transition-colors hover:bg-transparent ${
                activeTab === "email" ? "text-foreground" : "text-foreground"
              }`}
              aria-selected={activeTab === "email"}
            >
              Email Address
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setActiveTab("phone")}
              className={`relative z-10 w-full px-3 py-1.5 text-sm font-medium transition-colors hover:bg-transparent ${
                activeTab === "phone" ? "text-foreground" : "text-foreground"
              }`}
              aria-selected={activeTab === "phone"}
            >
              Phone Number
            </Button>
            <span
              className={`absolute top-1 bottom-1 left-1 w-[calc(50%-0.25rem)] rounded-md bg-white shadow-sm shadow-black/10 transition-transform duration-300 ease-in-out ${
                activeTab === "phone" ? "translate-x-full" : "translate-x-0"
              }`}
            />
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 px-8 pt-4 pb-8">
        <div className="space-y-4">
          <div className="w-full space-y-1.5">
            <Label htmlFor="email">Your Email</Label>
            <Input id="email" type="email" placeholder="name@mail.com" />
          </div>
          <Button className="w-full">Connect</Button>
          <Button variant="outline" className="w-full justify-start gap-3">
            <img
              src="https://v3.material-tailwind.com/icon/google.svg"
              alt="google"
              className="h-5 w-5"
            />
            Sign in with Google
          </Button>
        </div>
        <div className="my-8 flex w-full items-center gap-2">
          <hr className="border-border w-full" />
          <small className="text-foreground/70 block shrink-0 text-sm font-semibold dark:text-white">
            Or Wallet Authentication
          </small>
          <hr className="border-border w-full" />
        </div>
        <div className="space-y-4">
          <Button variant="outline" className="w-full justify-start gap-3">
            <img
              src="https://v3.material-tailwind.com/icon/metamask.svg"
              alt="metamask"
              className="h-5 w-5"
            />
            Metamask
          </Button>
          <Button variant="outline" className="w-full justify-start gap-3">
            <img
              src="https://v3.material-tailwind.com/icon/coinbase.svg"
              alt="coinbase"
              className="h-5 w-5"
            />
            Coinbase
          </Button>
          <Button variant="outline" className="w-full justify-start gap-3">
            <img
              src="https://v3.material-tailwind.com/icon/trust.svg"
              alt="trust"
              className="h-5 w-5"
            />
            Trust
          </Button>
        </div>
      </CardContent>
      <CardFooter className="px-8 pt-0 pb-8">
        <p className="text-muted-foreground mx-auto block max-w-xs text-center text-sm">
          Upon signing in, you consent to abide by our{" "}
          <a href="#" className="text-foreground dark:text-white">
            Terms of Service
          </a>{" "}
          &{" "}
          <a href="#" className="text-foreground dark:text-white">
            Privacy Policy.
          </a>
        </p>
      </CardFooter>
    </Card>
  )
}
