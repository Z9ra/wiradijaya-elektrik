"use client"

import { useEffect, useState } from "react"
import { Archive, CheckCircle, Home, Pencil, Truck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

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

export default function OrderWithMap() {
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
        <h2 className="text-3xl font-bold">Order Details</h2>
        <p className="text-muted-foreground mt-2">
          Order placed on <span className="font-semibold">April 1, 2024</span>
        </p>
        <div className="relative my-6 h-80">
          <img
            src="https://v3.material-tailwind.com/map.png"
            alt="map"
            className="absolute inset-0 h-full w-full rounded-lg object-cover object-center"
          />
          <Card className="!relative top-4 left-4 w-60 !rounded-md">
            <CardContent className="p-4">
              <p className="mb-1 block text-sm font-semibold">Shipping to</p>
              <p className="text-muted-foreground text-sm">
                John Doe, Suite 567 Los <br /> Angeles, CA 90001
              </p>
            </CardContent>
          </Card>
        </div>
        <Card className="my-6 w-full px-4 pt-4 pb-4 md:pt-8">
          <CardContent className="p-0">
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
        <Card className="my-6">
          <CardContent className="space-y-6 p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="text-lg font-semibold">Product List</p>
              <Button variant="outline" size="icon">
                <Pencil className="h-4 w-4" />
              </Button>
            </div>
            {SUITS.map(({ product, image, code, size, price }, key) => (
              <div key={key} className="flex justify-between border-b pb-6">
                <div className="flex gap-4">
                  <img src={image} alt={`${image} product`} className="h-32" />
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
        </Card>
        <Card className="my-6 grid grid-cols-1 gap-10 md:grid-cols-2">
          <CardContent className="space-y-6 p-6">
            <div className="flex items-center justify-between gap-4">
              <p className="font-semibold">Billing Address</p>
              <Button variant="outline" size="icon">
                <Pencil className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-muted-foreground">
              362 Ridgewood Dr, Soldotna, Alaska 99669, USA
            </p>
          </CardContent>
          <CardContent className="space-y-6 p-6">
            <div className="flex items-center justify-between gap-4">
              <p className="font-semibold">Shipping Address</p>
              <Button variant="outline" size="icon">
                <Pencil className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-muted-foreground">
              362 Ridgewood Dr, Soldotna, Alaska 99669, USA
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
