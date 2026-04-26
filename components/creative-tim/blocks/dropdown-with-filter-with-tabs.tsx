"use client"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DropdownWithFilterWithTabs() {
  return (
    <div className="text-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>By Category</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-auto p-4">
          <Tabs defaultValue="ratings" className="w-full">
            <TabsList className="mb-4 w-full">
              <TabsTrigger value="ratings" className="flex-1">
                Ratings
              </TabsTrigger>
              <TabsTrigger value="availability" className="flex-1">
                Availability
              </TabsTrigger>
              <TabsTrigger value="color" className="flex-1">
                Color
              </TabsTrigger>
              <TabsTrigger value="technology" className="flex-1">
                Technology
              </TabsTrigger>
            </TabsList>
            <TabsContent value="ratings" className="flex flex-col gap-3">
              <div className="inline-flex items-center">
                <Checkbox id="star-1" />
                <Label
                  htmlFor="star-1"
                  className="ml-2 cursor-pointer text-sm text-slate-600"
                >
                  1 Star & Up
                </Label>
              </div>
              <div className="inline-flex items-center">
                <Checkbox id="star-2" />
                <Label
                  htmlFor="star-2"
                  className="ml-2 cursor-pointer text-sm text-slate-600"
                >
                  2 Star & Up
                </Label>
              </div>
              <div className="inline-flex items-center">
                <Checkbox id="star-3" />
                <Label
                  htmlFor="star-3"
                  className="ml-2 cursor-pointer text-sm text-slate-600"
                >
                  3 Star & Up
                </Label>
              </div>
              <div className="inline-flex items-center">
                <Checkbox id="star-4" />
                <Label
                  htmlFor="star-4"
                  className="ml-2 cursor-pointer text-sm text-slate-600"
                >
                  4 Star & Up
                </Label>
              </div>
            </TabsContent>
            <TabsContent value="availability" className="flex flex-col gap-3">
              <div className="inline-flex items-center">
                <Checkbox id="in-stock" />
                <Label
                  htmlFor="in-stock"
                  className="ml-2 cursor-pointer text-sm text-slate-600"
                >
                  In Stock
                </Label>
              </div>
              <div className="inline-flex items-center">
                <Checkbox id="out-of-stock" />
                <Label
                  htmlFor="out-of-stock"
                  className="ml-2 cursor-pointer text-sm text-slate-600"
                >
                  Out of Stock
                </Label>
              </div>
              <div className="inline-flex items-center">
                <Checkbox id="3-star" />
                <Label
                  htmlFor="3-star"
                  className="ml-2 cursor-pointer text-sm text-slate-600"
                >
                  3 Star & Up
                </Label>
              </div>
              <div className="inline-flex items-center">
                <Checkbox id="pre-order" />
                <Label
                  htmlFor="pre-order"
                  className="ml-2 cursor-pointer text-sm text-slate-600"
                >
                  Pre-Order
                </Label>
              </div>
            </TabsContent>
            <TabsContent value="color" className="flex flex-col gap-3">
              <div className="inline-flex items-center">
                <Checkbox id="red" />
                <Label
                  htmlFor="red"
                  className="ml-2 cursor-pointer text-sm text-slate-600"
                >
                  Red
                </Label>
              </div>
              <div className="inline-flex items-center">
                <Checkbox id="blue" />
                <Label
                  htmlFor="blue"
                  className="ml-2 cursor-pointer text-sm text-slate-600"
                >
                  Blue
                </Label>
              </div>
              <div className="inline-flex items-center">
                <Checkbox id="green" />
                <Label
                  htmlFor="green"
                  className="ml-2 cursor-pointer text-sm text-slate-600"
                >
                  Green
                </Label>
              </div>
              <div className="inline-flex items-center">
                <Checkbox id="black" />
                <Label
                  htmlFor="black"
                  className="ml-2 cursor-pointer text-sm text-slate-600"
                >
                  Black
                </Label>
              </div>
              <div className="inline-flex items-center">
                <Checkbox id="white" />
                <Label
                  htmlFor="white"
                  className="ml-2 cursor-pointer text-sm text-slate-600"
                >
                  White
                </Label>
              </div>
            </TabsContent>
            <TabsContent value="technology" className="flex flex-col gap-3">
              <div className="inline-flex items-center">
                <Checkbox id="bluetooth" />
                <Label
                  htmlFor="bluetooth"
                  className="ml-2 cursor-pointer text-sm text-slate-600"
                >
                  Bluetooth
                </Label>
              </div>
              <div className="inline-flex items-center">
                <Checkbox id="wifi" />
                <Label
                  htmlFor="wifi"
                  className="ml-2 cursor-pointer text-sm text-slate-600"
                >
                  Wifi Enabled
                </Label>
              </div>
              <div className="inline-flex items-center">
                <Checkbox id="5g" />
                <Label
                  htmlFor="5g"
                  className="ml-2 cursor-pointer text-sm text-slate-600"
                >
                  5G Compatible
                </Label>
              </div>
              <div className="inline-flex items-center">
                <Checkbox id="smart" />
                <Label
                  htmlFor="smart"
                  className="ml-2 cursor-pointer text-sm text-slate-600"
                >
                  Smart Integration
                </Label>
              </div>
              <div className="inline-flex items-center">
                <Checkbox id="touch" />
                <Label
                  htmlFor="touch"
                  className="ml-2 cursor-pointer text-sm text-slate-600"
                >
                  Touch Screen
                </Label>
              </div>
            </TabsContent>
          </Tabs>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
