"use client"

import { DollarSign, Flame, Heart, Home, Star, Tv, Wifi } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function CardBooking() {
  return (
    <Card className="w-full max-w-[26rem] overflow-hidden shadow-lg">
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="Wooden House"
          className="h-64 w-full object-cover"
        />
        <div className="absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60" />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 rounded-full text-red-500 hover:bg-red-500/10 hover:text-red-500"
        >
          <Heart className="h-5 w-5 fill-current" />
        </Button>
      </div>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Wooden House, Florida</CardTitle>
          <div className="flex items-center gap-1.5">
            <Star className="h-[18px] w-[18px] fill-yellow-400 text-yellow-400" />
            <span className="text-sm">5.0</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm">
          Enter a freshly updated and thoughtfully furnished peaceful home
          surrounded by ancient trees, stone walls, and open meadows.
        </p>
        <TooltipProvider>
          <div className="group mt-6 inline-flex flex-wrap items-center gap-3">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-secondary h-12 w-12 rounded-full transition-all group-hover:opacity-70 hover:!opacity-100"
                >
                  <DollarSign className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>$129 per night</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-secondary h-12 w-12 rounded-full transition-all group-hover:opacity-70 hover:!opacity-100"
                >
                  <Wifi className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Free wifi</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-secondary h-12 w-12 rounded-full transition-all group-hover:opacity-70 hover:!opacity-100"
                >
                  <Home className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>2 bedrooms</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-secondary h-12 w-12 rounded-full transition-all group-hover:opacity-70 hover:!opacity-100"
                >
                  <Tv className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>65" HDTV</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-secondary h-12 w-12 rounded-full transition-all group-hover:opacity-70 hover:!opacity-100"
                >
                  <Flame className="h-5 w-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Fire alert</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="bg-secondary h-12 w-12 rounded-full transition-all group-hover:opacity-70 hover:!opacity-100"
                >
                  <span className="text-sm font-medium">+20</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>And +20 more</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>
      </CardContent>
      <CardFooter className="pt-3">
        <Button className="w-full">Reserve</Button>
      </CardFooter>
    </Card>
  )
}
