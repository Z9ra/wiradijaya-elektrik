"use client"

import {
  Archive,
  CheckCircle,
  Download,
  Home,
  Pencil,
  Truck,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

const OPTIONS = [
  {
    value: "Subtotal",
    price: "$790",
  },
  {
    value: "Shipping estimate",
    price: "$0",
  },
  {
    value: "Tax estimate",
    price: "$5",
  },
]

export default function CompactTrackParcel() {
  return (
    <Card className="mx-auto max-w-md p-2">
      <CardHeader className="m-0 w-full p-4">
        <h2 className="text-3xl font-bold">Track your parcel #123456789</h2>
        <p className="text-muted-foreground my-4">
          Order placed on <strong>April 1, 2024</strong>
        </p>
        <p className="text-muted-foreground">
          Status: <strong>Arrived on UPS location</strong>
        </p>
        <Button
          variant="outline"
          className="my-4 flex w-full items-center gap-2"
        >
          Download Invoice
          <Download className="h-4 w-4 stroke-2" />
        </Button>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="bg-muted flex h-10 w-10 items-center justify-center rounded-full">
                <Home className="text-muted-foreground h-5 w-5" />
              </div>
              <div className="bg-primary my-2 w-0.5 flex-1" />
            </div>
            <div className="pb-6">
              <p className="font-semibold">Delivered</p>
              <p className="text-muted-foreground mt-2 text-sm">
                Estimated date: April 9, 2024
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
                11:00 PM April 4, 2024
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
                <CheckCircle className="h-5 w-5 text-white" />
              </div>
            </div>
            <div>
              <p className="font-semibold">Order Placed</p>
              <p className="text-muted-foreground mt-2 text-sm">
                10:00 PM April 1, 2024
              </p>
            </div>
          </div>
        </div>

        <Card className="my-6 rounded-md p-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <p className="font-semibold">Shipping Address</p>
            <Button size="sm" variant="outline">
              <Pencil className="h-5 w-5" />
            </Button>
          </CardHeader>
          <CardContent className="px-2">
            <p className="text-muted-foreground">John Doe</p>
            <p className="text-muted-foreground my-2">
              1234 Elm Street, Suite 567, Los Angeles, CA 90001, United States
            </p>
            <p className="text-muted-foreground">+1 (555) 123-4567</p>
          </CardContent>
        </Card>

        <Card className="rounded-md p-2">
          <CardHeader>
            <p className="font-semibold">Payment Details</p>
            <div className="mt-4 flex items-center gap-3">
              <div className="rounded-md border px-2">
                <img
                  src="https://v3.material-tailwind.com/visa.webp"
                  alt="visa"
                  className="h-7 w-9"
                />
              </div>
              <p className="text-sm font-semibold">Visa 1234 </p>
              <p className="text-muted-foreground text-sm">Expiry 06/2026</p>
            </div>
          </CardHeader>
          <CardContent className="space-y-3 px-3">
            {OPTIONS.map(({ value, price }, index) => (
              <div key={index} className="flex justify-between">
                <p className="text-muted-foreground">{value}</p>
                <p className="text-muted-foreground">{price}</p>
              </div>
            ))}
            <hr />
            <div className="flex justify-between">
              <p className="font-semibold">Order Total</p>
              <p className="text-muted-foreground">$795</p>
            </div>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  )
}
