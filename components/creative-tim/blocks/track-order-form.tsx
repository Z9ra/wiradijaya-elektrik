"use client"

import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
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

const DATA = [
  {
    image: "https://v3.material-tailwind.com/coat-1.png",
    collection: "Permanent Collection",
    name: "Premium Suit",
    price: ["", "$490"],
  },
  {
    image: "https://v3.material-tailwind.com/coat-2.png",
    collection: "Permanent Collection",
    name: "Premium Suit",
    price: ["", "$490"],
  },
  {
    image: "https://v3.material-tailwind.com/coat-3.png",
    collection: "Permanent Collection",
    name: "Wool Suit",
    price: ["", "$490"],
  },
  {
    image: "https://v3.material-tailwind.com/coat-4.png",
    collection: "Sale",
    name: "Cotton Suit",
    price: ["$1,300", "$1,300"],
  },
]

export default function TrackOrderForm() {
  return (
    <section className="container mx-auto py-16">
      <div className="grid min-h-[24rem] bg-[url('/map.jpg')] bg-cover bg-center bg-no-repeat sm:min-h-[44rem] md:min-h-[54rem]">
        <div>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Track Your Order</h2>
            <p className="text-muted-foreground mx-auto max-w-3xl text-lg [text-wrap:balance]">
              Stay updated on the status of your order every step of the way.
              Simply enter your order details to see where your package is and
              when it&apos;s expected to arrive.
            </p>
          </div>
          <Card className="mx-auto max-w-2xl">
            <CardContent className="p-6">
              <p className="mb-2 font-semibold">Enter Your Order Details</p>
              <p className="text-muted-foreground mb-6 [text-wrap:balance]">
                To track your order, please provide your order number and email
                address associated with the purchase.
              </p>
              <TextField label="Tracking No." placeholder="#1234567" />
              <div className="my-6 flex items-center gap-2">
                <span className="bg-border h-[1px] w-full" />
                <p className="text-muted-foreground/60 font-semibold">Or</p>
                <span className="bg-border h-[1px] w-full" />
              </div>
              <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                <TextField label="Order No." placeholder="1234567L" />
                <TextField
                  label="Email Address"
                  placeholder="someone@example.com"
                />
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="mt-20 mb-10 flex items-center justify-between gap-4">
          <h3 className="text-xl font-semibold">Featured Products</h3>
          <Button variant="outline" className="flex items-center gap-2">
            See All
            <ArrowRight className="h-3.5 w-3.5 stroke-2" />
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-6 pb-16 sm:grid-cols-2 lg:grid-cols-4">
          {DATA.map(({ image, collection, name, price }, key) => (
            <Card key={key} className="pb-4 text-center">
              <CardHeader className="mx-auto h-60 w-auto p-0">
                <img
                  src={image}
                  alt={`${collection} collection`}
                  className="h-full w-full object-contain"
                />
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-semibold">
                  {collection}
                </p>
                <p className="mt-1 text-lg font-semibold">{name}</p>
                <div className="my-6 flex justify-center gap-2">
                  <div className="h-5 w-5 rounded bg-black" />
                  <div className="border-border h-5 w-5 rounded-[4px] border bg-white" />
                  <div className="bg-muted border-border h-5 w-5 rounded-[4px] border" />
                </div>
                <div className="mt-1 flex items-center justify-center gap-2">
                  <p className="font-semibold line-through">{price[0]}</p>
                  <p className="text-lg font-semibold">{price[1]}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
