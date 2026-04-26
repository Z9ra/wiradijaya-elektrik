"use client"

import { LayoutGrid } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function CardWithIcon() {
  return (
    <Card className="w-full max-w-xs">
      <CardHeader>
        <div className="mb-2">
          <LayoutGrid className="text-primary h-16 w-16" />
        </div>
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
        <Button size="sm" className="w-full" asChild>
          <a href="#">Read More</a>
        </Button>
      </CardFooter>
    </Card>
  )
}
