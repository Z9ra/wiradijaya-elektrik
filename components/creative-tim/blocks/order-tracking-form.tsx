"use client"

import { useEffect, useState } from "react"
import { CheckCircle, Download, Home, Truck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function TextField({ label, ...props }: { label: string; [key: string]: any }) {
  return (
    <div className="w-full space-y-2">
      <Label className="text-sm font-semibold">{label}</Label>
      <Input {...props} />
    </div>
  )
}

const SUITS = [
  {
    image: "https://v3.material-tailwind.com/coat-1.png",
    product: "Premium Suit",
    code: "CLTH-4567-MN",
    size: "M",
    price: 790.0,
  },
  {
    image: "https://v3.material-tailwind.com/coat-2.png",
    product: "Classic Leather Jacket",
    code: "JKT-8923-BLK",
    size: "M",
    price: 990.0,
  },
]

export default function OrderTrackingForm() {
  const [step, setStep] = useState(1)
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
      <div className="container mx-auto px-4">
        <Card className="mx-auto max-w-3xl">
          <CardContent className="p-6 md:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold md:text-3xl">
                  Order Details #123456789
                </h2>
                <p className="text-muted-foreground mt-2 text-sm">
                  Order placed on{" "}
                  <span className="font-semibold">April 1, 2025</span>
                </p>
              </div>
              <Button
                variant="outline"
                className="group flex items-center gap-2"
              >
                Download Invoice
                <Download className="h-4 w-4 stroke-2 transition-transform group-hover:translate-y-0.5" />
              </Button>
            </div>
            <div className="mt-16 mb-10 w-full">
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
                        10:00 PM April 1, 2025
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
                      <p className="font-semibold">Delivered to the Courier</p>
                      <p className="text-muted-foreground mt-2 text-sm">
                        11:00 PM April 3, 2025
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
                      <p className="font-semibold">Delivery</p>
                      <p className="text-muted-foreground mt-2 text-sm">
                        Estimated date: April 9, 2025
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
                        10:00 PM April 1, 2025
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
                      <p className="font-semibold">Delivered to the Courier</p>
                      <p className="text-muted-foreground mt-2 text-sm">
                        11:00 PM April 3, 2025
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
                      <p className="font-semibold">Delivery</p>
                      <p className="text-muted-foreground mt-2 text-sm">
                        Estimated date: April 9, 2025
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="mb-6 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
              <TextField label="Carrier Name" placeholder="Shipped with DHL" />
              <TextField label="Shipment ID" placeholder="SHIP-1234567" />
            </div>
            <TextField
              label="Tracking Link"
              placeholder="https://dhl.com/track/ship1234567"
            />
            <div className="mt-10">
              <h3 className="mb-6 text-xl font-bold">Items</h3>
              <div className="space-y-4">
                {SUITS.map(({ product, image, code, size, price }, key) => (
                  <div
                    key={key}
                    className="flex items-center justify-between gap-4 rounded-lg border p-4 transition-all hover:shadow-md"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-muted/50 flex h-32 w-24 items-center justify-center overflow-hidden rounded-lg">
                        <img
                          src={image}
                          alt={`${product}`}
                          className="h-full w-auto object-cover"
                        />
                      </div>
                      <div className="space-y-1">
                        <p className="font-semibold">{product}</p>
                        <p className="text-muted-foreground text-sm">{code}</p>
                        <p className="text-muted-foreground text-sm">
                          Size: {size}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <p className="text-muted-foreground text-sm">1x</p>
                      <p className="min-w-[80px] text-right font-semibold">
                        ${price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 ml-auto max-w-sm space-y-3 rounded-lg border p-6">
                <div className="flex justify-between text-sm">
                  <p className="text-muted-foreground">Subtotal</p>
                  <p className="text-muted-foreground">$1,780.00</p>
                </div>
                <div className="flex justify-between text-sm">
                  <p className="text-muted-foreground">Shipping estimate</p>
                  <p className="text-muted-foreground">$0.00</p>
                </div>
                <div className="flex justify-between border-t pt-3">
                  <p className="font-semibold">Order Total</p>
                  <p className="text-xl font-bold">$1,780.00</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
