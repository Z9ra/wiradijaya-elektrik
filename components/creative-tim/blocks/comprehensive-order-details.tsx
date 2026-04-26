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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

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

export default function ComprehensiveOrderDetails() {
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
      <div className="container mx-auto">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold">Order Details #123456789</h2>
            <p className="text-muted-foreground mt-2">
              Order placed on{" "}
              <span className="font-semibold">April 1, 2024</span>
            </p>
            <p className="text-muted-foreground mt-1">
              Status:{" "}
              <span className="font-semibold">Arrived on UPS location</span>
            </p>
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            Download Invoice
            <Download className="h-4 w-4 stroke-2" />
          </Button>
        </div>
        <div className="mt-16 mb-8 w-full md:mb-16">
          {isVertical ? (
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="block md:hidden">
                  <p className="font-semibold">Order Placed</p>
                  <p className="text-muted-foreground mt-2 text-sm">
                    10:00 PM April 1, 2024
                  </p>
                </div>
              </div>
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
                <div className="hidden text-center md:block">
                  <p className="font-semibold">Order Placed</p>
                  <p className="text-muted-foreground mt-2 text-sm">
                    10:00 PM April 1, 2024
                  </p>
                </div>
                <div className="flex w-full items-center">
                  <div className="bg-primary h-0.5 flex-1" />
                  <div className="bg-primary flex h-10 w-10 items-center justify-center rounded-full">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div className="bg-primary h-0.5 flex-1" />
                </div>
                <div className="block text-center md:hidden">
                  <p className="font-semibold">Order Placed</p>
                  <p className="text-muted-foreground mt-2 text-sm">
                    10:00 PM April 1, 2024
                  </p>
                </div>
              </div>

              <div className="flex flex-1 flex-col items-center gap-4">
                <div className="hidden text-center md:block">
                  <p className="font-semibold">Shipped</p>
                  <p className="text-muted-foreground mt-2 text-sm">
                    10:00 PM April 3, 2024
                  </p>
                </div>
                <div className="flex w-full items-center">
                  <div className="bg-primary h-0.5 flex-1" />
                  <div className="bg-primary flex h-10 w-10 items-center justify-center rounded-full">
                    <Archive className="h-5 w-5 text-white" />
                  </div>
                  <div className="bg-primary h-0.5 flex-1" />
                </div>
                <div className="block text-center md:hidden">
                  <p className="font-semibold">Shipped</p>
                  <p className="text-muted-foreground mt-2 text-sm">
                    10:00 PM April 3, 2024
                  </p>
                </div>
              </div>

              <div className="flex flex-1 flex-col items-center gap-4">
                <div className="hidden text-center md:block">
                  <p className="font-semibold">Out for Delivery</p>
                  <p className="text-muted-foreground mt-2 text-sm">
                    11:00 PM April 3, 2024
                  </p>
                </div>
                <div className="flex w-full items-center">
                  <div className="bg-primary h-0.5 flex-1" />
                  <div className="bg-primary flex h-10 w-10 items-center justify-center rounded-full">
                    <Truck className="h-5 w-5 text-white" />
                  </div>
                  <div className="bg-primary h-0.5 flex-1" />
                </div>
                <div className="block text-center md:hidden">
                  <p className="font-semibold">Out for Delivery</p>
                  <p className="text-muted-foreground mt-2 text-sm">
                    11:00 PM April 3, 2024
                  </p>
                </div>
              </div>

              <div className="flex flex-1 flex-col items-center gap-4">
                <div className="hidden text-center md:block">
                  <p className="font-semibold">Delivered</p>
                  <p className="text-muted-foreground mt-2 text-sm">
                    Estimated date: April 9, 2024
                  </p>
                </div>
                <div className="flex w-full items-center">
                  <div className="bg-primary h-0.5 flex-1" />
                  <div className="bg-muted flex h-10 w-10 items-center justify-center rounded-full">
                    <Home className="text-muted-foreground h-5 w-5" />
                  </div>
                  <div className="h-0.5 flex-1" />
                </div>
                <div className="block text-center md:hidden">
                  <p className="font-semibold">Delivered</p>
                  <p className="text-muted-foreground mt-2 text-sm">
                    Estimated date: April 9, 2024
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-6 lg:grid-cols-12">
          <div className="col-span-8 space-y-6">
            <Card>
              <CardContent className="p-0">
                {SUITS.map(({ product, image, code, size, price }, key) => (
                  <div key={key} className="flex justify-between border-b p-4">
                    <div className="flex justify-between gap-4">
                      <img
                        src={image}
                        alt={`${image} product`}
                        className="h-28"
                      />
                      <div className="space-y-2">
                        <p className="font-semibold">{product}</p>
                        <p className="text-muted-foreground">{code}</p>
                        <p className="text-muted-foreground">Size: {size}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">1x</p>
                    <p className="hidden font-semibold sm:block">${price}</p>
                  </div>
                ))}
              </CardContent>
              <CardFooter className="space-y-2 p-4">
                <div className="flex w-full justify-between">
                  <p className="text-muted-foreground">Shipping Tax</p>
                  <p className="text-muted-foreground">$0</p>
                </div>
                <div className="flex w-full justify-between">
                  <p className="font-semibold">Order Total</p>
                  <p className="font-semibold">$1,780</p>
                </div>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="m-0 flex w-full items-center justify-between p-4">
                <p className="font-semibold">Billing</p>
                <Button variant="outline" size="icon">
                  <Pencil className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent className="px-4 pt-0 pb-4">
                <p className="text-muted-foreground">
                  Same as shipping address
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="col-span-4 space-y-6">
            <Card>
              <CardHeader className="m-0 flex w-full items-center justify-between p-4">
                <p className="font-semibold">Shipping Address</p>
                <Button variant="outline" size="icon">
                  <Pencil className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent className="px-4 pt-0 pb-4">
                <p className="text-muted-foreground">John Doe</p>
                <p className="text-muted-foreground my-2">
                  1234 Elm Street, Suite 567, Los Angeles, CA 90001, United
                  States
                </p>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <p className="font-semibold">Stay Informed with Text Alerts</p>
                <p className="text-muted-foreground mt-2 mb-4">
                  Sign up for text notifications to receive updates on your
                  order status instantly. Message and data rates may apply.
                </p>
                <div className="mt-6 mb-4 space-y-2">
                  <Label className="text-sm font-semibold">Phone Number</Label>
                  <Input placeholder="+1 (555) 123-4567" type="tel" />
                </div>
                <Button className="w-full">Subscribe to Text Alerts</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
