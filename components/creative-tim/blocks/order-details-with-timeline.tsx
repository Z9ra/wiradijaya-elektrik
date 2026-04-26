"use client"

import { useEffect, useState } from "react"
import {
  Archive,
  CheckCircle,
  Download,
  Home,
  Pencil,
  Truck,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"

const SUITS = [
  {
    image: "https://v3.material-tailwind.com/coat-1.png",
    product: "Premium Suit",
    detail: "Premium Wool Blend (80% Wool, 20% Polyester)",
    size: "M",
    price: 790.0,
  },
  {
    image: "https://v3.material-tailwind.com/coat-2.png",
    product: "Classic Leather Jacket",
    detail: "Premium Leather (100% Genuine Leather)",
    size: "M",
    price: 990.0,
  },
]

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

const SHIPPING_OPTIONS = [
  "John Doe",
  "1234 Elm Street",
  "Suite 567",
  "Los Angeles, CA 90001",
  "United States",
  "+1 (555) 123-4567",
]

export default function OrderDetailsWithTimeline() {
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
        <h2 className="text-3xl font-bold md:text-4xl">Order Details</h2>
        <p className="text-muted-foreground mt-2 text-sm md:text-base">
          Order placed on <span className="font-semibold">April 1, 2025</span>
        </p>
        <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-6 lg:grid-cols-12">
          <div className="col-span-8 space-y-6">
            <Card className="flex flex-wrap items-center justify-between gap-4 p-6">
              <div>
                <p className="text-muted-foreground text-sm font-medium">
                  Date Ordered
                </p>
                <p className="mt-1 font-semibold">April 1, 2025</p>
              </div>
              <div>
                <p className="text-muted-foreground text-sm font-medium">
                  Order Number
                </p>
                <p className="mt-1 font-semibold">#123456789</p>
              </div>
              <Button
                variant="outline"
                className="group flex w-full items-center gap-2 sm:max-w-fit"
              >
                Download Invoice
                <Download className="h-4 w-4 stroke-2 transition-transform group-hover:translate-y-0.5" />
              </Button>
            </Card>
            <Card>
              <CardHeader className="m-0 w-full space-y-6 rounded-none border-b p-6">
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
                        <div className="bg-muted flex h-10 w-10 items-center justify-center rounded-full">
                          <Archive className="text-muted-foreground h-5 w-5" />
                        </div>
                        <div className="bg-muted my-2 w-0.5 flex-1" />
                      </div>
                      <div className="pb-6">
                        <p className="font-semibold">Shipped</p>
                        <p className="text-muted-foreground mt-2 text-sm">
                          Not yet shipped
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="bg-muted flex h-10 w-10 items-center justify-center rounded-full">
                          <Truck className="text-muted-foreground h-5 w-5" />
                        </div>
                        <div className="bg-muted my-2 w-0.5 flex-1" />
                      </div>
                      <div className="pb-6">
                        <p className="font-semibold">Out for Delivery</p>
                        <p className="text-muted-foreground mt-2 text-sm">
                          Pending
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
                        <div className="bg-muted flex h-10 w-10 items-center justify-center rounded-full">
                          <Archive className="text-muted-foreground h-5 w-5" />
                        </div>
                        <div className="bg-muted h-0.5 flex-1" />
                      </div>
                      <div className="text-center">
                        <p className="font-semibold">Shipped</p>
                        <p className="text-muted-foreground mt-2 text-sm">
                          Not yet shipped
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col items-center gap-4">
                      <div className="flex w-full items-center">
                        <div className="bg-muted h-0.5 flex-1" />
                        <div className="bg-muted flex h-10 w-10 items-center justify-center rounded-full">
                          <Truck className="text-muted-foreground h-5 w-5" />
                        </div>
                        <div className="bg-muted h-0.5 flex-1" />
                      </div>
                      <div className="text-center">
                        <p className="font-semibold">Out for Delivery</p>
                        <p className="text-muted-foreground mt-2 text-sm">
                          Pending
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col items-center gap-4">
                      <div className="flex w-full items-center">
                        <div className="bg-muted h-0.5 flex-1" />
                        <div className="bg-muted flex h-10 w-10 items-center justify-center rounded-full">
                          <Home className="text-muted-foreground h-5 w-5" />
                        </div>
                        <div className="h-0.5 flex-1" />
                      </div>
                      <div className="text-center">
                        <p className="font-semibold">Delivered</p>
                        <p className="text-muted-foreground mt-2 text-sm">
                          Estimated date: April 9, 2025
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </CardHeader>
              <CardContent className="space-y-6 p-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <h3 className="text-xl font-bold">Product List</h3>
                  <Button variant="outline" size="icon">
                    <Pencil className="h-4 w-4" />
                  </Button>
                </div>
                <div className="space-y-4">
                  {SUITS.map(({ product, image, detail, size, price }, key) => (
                    <div
                      key={key}
                      className="flex items-center justify-between gap-4 rounded-lg border p-4 transition-all hover:shadow-md"
                    >
                      <div className="flex items-center gap-4">
                        <div className="bg-muted/50 flex h-32 w-24 items-center justify-center overflow-hidden rounded-lg">
                          <img
                            src={image}
                            alt={product}
                            className="h-full w-auto object-cover"
                          />
                        </div>
                        <div className="space-y-1">
                          <p className="font-semibold">{product}</p>
                          <p className="text-muted-foreground text-sm">
                            {detail}
                          </p>
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
              </CardContent>
            </Card>
          </div>
          <div className="col-span-4 space-y-6">
            <Card>
              <CardHeader className="m-0 flex w-full items-center justify-between p-6">
                <h3 className="text-lg font-semibold">Shipping Address</h3>
                <Button variant="outline" size="icon">
                  <Pencil className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent className="space-y-1 px-6 pt-0 pb-6">
                {SHIPPING_OPTIONS.map((option, key) => (
                  <p key={key} className="text-muted-foreground text-sm">
                    {option}
                  </p>
                ))}
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="m-0 flex w-full items-center justify-between p-6">
                <h3 className="text-lg font-semibold">Billing Address</h3>
                <Button variant="outline" size="icon">
                  <Pencil className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent className="px-6 pt-0 pb-6">
                <p className="text-muted-foreground text-sm">
                  Same as shipping address
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="space-y-4 p-6">
                <h3 className="text-xl font-bold">Order Summary</h3>
                {OPTIONS.map(({ title, value }, key) => (
                  <div key={key} className="flex justify-between text-sm">
                    <p className="text-muted-foreground">{title}</p>
                    <p className="text-muted-foreground">{value}</p>
                  </div>
                ))}
              </CardContent>
              <CardFooter className="border-t p-6">
                <div className="flex w-full justify-between">
                  <p className="font-semibold">Order Total</p>
                  <p className="text-xl font-bold">$1,785.00</p>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
