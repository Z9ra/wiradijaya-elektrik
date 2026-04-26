"use client"

import { useEffect, useState } from "react"
import { Archive, CheckCircle, Home, Truck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

const OPTIONS = [
  {
    title: "Subtotal",
    value: "$1,780.00",
  },
  {
    title: "Shipping estimate",
    value: "$0",
  },
  {
    title: "Tax estimate",
    value: "$5",
  },
]

export default function OrderTrackingTimeline() {
  const [step, setStep] = useState(2)
  const [isVertical, setIsVertical] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsVertical(window.innerWidth <= 768)
    }

    handleResize()

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="mb-10 flex flex-wrap items-start justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold">Order ID 1234</h2>
            <p className="text-muted-foreground mt-2">
              Order placed on{" "}
              <span className="font-semibold">April 1, 2024</span>
            </p>
          </div>
          <Button>View Invoice</Button>
        </div>
        <Card>
          <CardHeader className="m-0 grid w-full grid-cols-1 gap-10 border-b p-6 md:grid-cols-2">
            <div className="flex gap-4">
              <img
                src="https://v3.material-tailwind.com/coat-2.png"
                alt="coat"
                className="h-32 md:h-48"
              />
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Premium Suit</h3>
                <p className="font-semibold">$790</p>
                <p className="text-muted-foreground [text-wrap:balance]">
                  The time is now for it to be okay to be great. People in this
                  world shun people for being great.
                </p>
                <p className="font-semibold">Size: M</p>
              </div>
            </div>
            <div className="flex justify-between gap-6">
              <div className="space-y-2">
                <p className="font-semibold">Delivery Address</p>
                <p className="text-muted-foreground">
                  362 Ridgewood, Alaska 99669, USA.
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold">Shipping Updates</p>
                <p className="text-muted-foreground">
                  michael@email.com (307) 682-8835
                </p>
                <Button variant="outline">Edit</Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="w-full p-6 sm:mt-4">
            <p className="mb-10 text-center font-semibold">
              Preparing to ship on April 3, 2024
            </p>
            {isVertical ? (
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="bg-primary flex h-10 w-10 items-center justify-center rounded-full">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <div className="bg-primary my-2 w-0.5 flex-1" />
                  </div>
                  <div className="pb-6">
                    <p className="font-semibold">Order Placed</p>
                    <p className="text-muted-foreground mt-2 text-sm">
                      10:00 PM April 1, 2024
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="bg-primary flex h-10 w-10 items-center justify-center rounded-full">
                      <Archive className="h-5 w-5 text-white" />
                    </div>
                    <div className="bg-primary my-2 w-0.5 flex-1" />
                  </div>
                  <div className="pb-6">
                    <p className="font-semibold">Shipped</p>
                    <p className="text-muted-foreground mt-2 text-sm">
                      10:00 PM April 3, 2024
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="bg-primary flex h-10 w-10 items-center justify-center rounded-full">
                      <Truck className="h-5 w-5 text-white" />
                    </div>
                    <div className="bg-primary my-2 w-0.5 flex-1" />
                  </div>
                  <div className="pb-6">
                    <p className="font-semibold">Out for Delivery</p>
                    <p className="text-muted-foreground mt-2 text-sm">
                      11:00 PM April 3, 2024
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="bg-muted flex h-10 w-10 items-center justify-center rounded-full">
                      <Home className="text-muted-foreground h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold">Delivered</p>
                    <p className="text-muted-foreground mt-2 text-sm">
                      Estimated date: April 9, 2024
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-start justify-between">
                <div className="flex flex-1 flex-col items-center gap-4">
                  <div className="flex w-full items-center">
                    <div className="bg-primary h-0.5 flex-1" />
                    <div className="bg-primary flex h-10 w-10 items-center justify-center rounded-full">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <div className="bg-primary h-0.5 flex-1" />
                  </div>
                  <div className="text-center">
                    <p className="font-semibold">Order Placed</p>
                    <p className="text-muted-foreground mt-2 text-sm">
                      10:00 PM April 1, 2024
                    </p>
                  </div>
                </div>

                <div className="flex flex-1 flex-col items-center gap-4">
                  <div className="flex w-full items-center">
                    <div className="bg-primary h-0.5 flex-1" />
                    <div className="bg-primary flex h-10 w-10 items-center justify-center rounded-full">
                      <Archive className="h-5 w-5 text-white" />
                    </div>
                    <div className="bg-primary h-0.5 flex-1" />
                  </div>
                  <div className="text-center">
                    <p className="font-semibold">Shipped</p>
                    <p className="text-muted-foreground mt-2 text-sm">
                      10:00 PM April 3, 2024
                    </p>
                  </div>
                </div>

                <div className="flex flex-1 flex-col items-center gap-4">
                  <div className="flex w-full items-center">
                    <div className="bg-primary h-0.5 flex-1" />
                    <div className="bg-primary flex h-10 w-10 items-center justify-center rounded-full">
                      <Truck className="h-5 w-5 text-white" />
                    </div>
                    <div className="bg-primary h-0.5 flex-1" />
                  </div>
                  <div className="text-center">
                    <p className="font-semibold">Out for Delivery</p>
                    <p className="text-muted-foreground mt-2 text-sm">
                      11:00 PM April 3, 2024
                    </p>
                  </div>
                </div>

                <div className="flex flex-1 flex-col items-center gap-4">
                  <div className="flex w-full items-center">
                    <div className="bg-primary h-0.5 flex-1" />
                    <div className="bg-muted flex h-10 w-10 items-center justify-center rounded-full">
                      <Home className="text-muted-foreground h-5 w-5" />
                    </div>
                    <div className="h-0.5 flex-1" />
                  </div>
                  <div className="text-center">
                    <p className="font-semibold">Delivered</p>
                    <p className="text-muted-foreground mt-2 text-sm">
                      Estimated date: April 9, 2024
                    </p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
        <Card className="mt-6 grid grid-cols-1 gap-10 md:grid-cols-2">
          <CardContent className="flex justify-between gap-6 p-6">
            <div>
              <p className="font-semibold">Billing Address</p>
              <p className="text-muted-foreground mt-4">
                362 Ridgewood Dr, <br />
                Soldotna, Alaska 99669, USA
              </p>
            </div>
            <div>
              <p className="font-semibold">Payment information</p>
              <div className="mt-4 flex flex-wrap items-start gap-4">
                <div className="shrink-0 rounded-md border px-2">
                  <img
                    src="https://v3.material-tailwind.com/visa.webp"
                    alt="visa"
                    className="h-8 w-10"
                  />
                </div>
                <div>
                  <p className="mb-1">Visa 1234</p>
                  <p className="text-muted-foreground">Expiry 06/2026</p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardContent className="w-full space-y-4 p-6 lg:ml-auto lg:max-w-md">
            {OPTIONS.map(({ title, value }, key) => (
              <div key={key} className="flex justify-between">
                <p className="text-muted-foreground">{title}</p>
                <p className="text-muted-foreground">{value}</p>
              </div>
            ))}
            <div className="flex justify-between border-t py-4">
              <p className="font-semibold">Order Total</p>
              <p className="font-semibold">$790</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
