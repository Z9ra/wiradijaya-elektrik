"use client"

import * as React from "react"
import { Github, Instagram, Twitter, Youtube } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ComingSoonWithCountdownTimer() {
  const [timeLeft, setTimeLeft] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  React.useEffect(() => {
    const targetDate = new Date()
    targetDate.setDate(targetDate.getDate() + 30)

    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="px-6">
      <div className="grid h-full min-h-[calc(100vh-48px)] grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div className="mx-auto grid min-h-screen max-w-lg place-items-center">
          <div>
            <div className="mb-6 flex flex-wrap gap-2">
              <Card className="flex h-20 w-20 flex-col items-center justify-center gap-1 bg-transparent font-semibold">
                <span className="text-2xl font-bold">{timeLeft.days}</span>
                <small className="text-xs">Days</small>
              </Card>
              <Card className="flex h-20 w-20 flex-col items-center justify-center gap-1 bg-transparent font-semibold">
                <span className="text-2xl font-bold">{timeLeft.hours}</span>
                <small className="text-xs">Hours</small>
              </Card>
              <Card className="flex h-20 w-20 flex-col items-center justify-center gap-1 bg-transparent font-semibold">
                <span className="text-2xl font-bold">{timeLeft.minutes}</span>
                <small className="text-xs">Mins</small>
              </Card>
              <Card className="flex h-20 w-20 flex-col items-center justify-center gap-1 bg-transparent font-semibold">
                <span className="text-2xl font-bold">{timeLeft.seconds}</span>
                <small className="text-xs">Secs</small>
              </Card>
            </div>
            <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl">
              Our New Look is Almost Here!
            </h2>
            <p className="mt-4 mb-6 max-w-xl text-base [text-wrap:_balance] md:text-lg">
              We're working hard to bring you a fresh new experience. Our
              updated website will be faster, smarter, and more user-friendly.
              Stay tuned for the big reveal!
            </p>
            <div className="flex w-full max-w-lg items-end gap-2">
              <div className="w-full space-y-2">
                <Label htmlFor="email">Your Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="someone@example.com"
                  className="w-full px-3 py-3"
                />
              </div>
              <Button className="shrink-0 shadow-sm hover:shadow-lg">
                Notify Me
              </Button>
            </div>
            <p className="mt-6 mb-4 text-base font-semibold">
              Connect with us on:
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="transition-opacity hover:opacity-80">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="transition-opacity hover:opacity-80">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="transition-opacity hover:opacity-80">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="transition-opacity hover:opacity-80">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1573588028698-f4759befb09a?auto=format&w=2000&q=85"
          alt="Coming Soon"
          className="hidden h-[calc(100vh-3rem)] w-full rounded-2xl object-cover lg:block"
        />
      </div>
    </section>
  )
}
