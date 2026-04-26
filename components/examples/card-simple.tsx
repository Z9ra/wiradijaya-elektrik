"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function CardSimple() {
  return (
    <Card className="w-full max-w-xs">
      <CardHeader>
        <CardTitle>UI/UX Review Check</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm">
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to "Naviglio" where you can enjoy the main night life in
          Barcelona.
        </p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Read More</Button>
      </CardFooter>
    </Card>
  )
}
