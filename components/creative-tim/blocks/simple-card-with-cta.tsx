"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export default function SimpleCardWithCta() {
  return (
    <Card className="mx-auto max-w-sm">
      <CardContent className="p-6">
        <p className="text-primary text-sm font-semibold">Enterprise</p>
        <p className="mt-2 text-lg leading-7 font-semibold">
          Autodesk looks to future of 3D printing with Project Escher
        </p>
        <p className="text-foreground my-2">
          I will be the leader of a company that ends up being worth billions of
          dollars, because I got the answers. I understand culture. I am the
          nucleus.
        </p>
      </CardContent>
      <CardFooter className="px-6 pt-0 pb-6">
        <Button>Read More</Button>
      </CardFooter>
    </Card>
  )
}
