"use client"

import { Calendar, Heart, ShoppingCart, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function CardDemo() {
  return (
    <div className="grid w-full">
      {/* Blog Card */}
      <Card className="overflow-hidden pt-0">
        <div className="aspect-video w-full">
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1617800161096-81981e027982?q=80&w=500&auto=format&fit=crop"
            alt="Blog 1"
          />
        </div>
        <CardContent className="flex flex-col gap-2">
          <div className="text-muted-foreground flex items-center gap-2 text-xs">
            <Calendar className="h-3 w-3" />
            <span>Mar 15, 2025</span>
            <span>•</span>
            <span>5 min read</span>
          </div>
          <CardTitle className="text-xl font-semibold">
            The Future of AI
          </CardTitle>
          <CardDescription className="line-clamp-2">
            AI is changing the world and will continue to do so in the future.
            Check Creative Tim UI for more information.
          </CardDescription>
        </CardContent>
        <CardFooter>
          <Button variant="secondary" size="sm">
            Read More
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
