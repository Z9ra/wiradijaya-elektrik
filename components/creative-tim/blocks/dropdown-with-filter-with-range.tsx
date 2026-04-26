"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"

export default function DropdownWithFilterWithRange() {
  const [rangeStart, setRangeStart] = useState([33])
  const [rangeEnd, setRangeEnd] = useState([69])

  return (
    <div className="text-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>By Range</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-80 p-4">
          <div className="mb-2 flex items-center justify-between">
            <small className="mx-2 text-sm font-semibold text-slate-600">
              Presets
            </small>
            <Button variant="ghost" size="sm" className="h-auto px-2 py-1">
              Clear All
            </Button>
          </div>
          <RadioGroup className="mt-3 flex flex-col gap-4">
            <div className="inline-flex items-center">
              <RadioGroupItem value="under-50" id="under-50" />
              <Label
                htmlFor="under-50"
                className="ml-2 cursor-pointer text-base text-slate-600"
              >
                Under $50
              </Label>
            </div>
            <div className="inline-flex items-center">
              <RadioGroupItem value="50-100" id="50-100" />
              <Label
                htmlFor="50-100"
                className="ml-2 cursor-pointer text-base text-slate-600"
              >
                $50 - $100
              </Label>
            </div>
            <div className="inline-flex items-center">
              <RadioGroupItem value="100-500" id="100-500" />
              <Label
                htmlFor="100-500"
                className="ml-2 cursor-pointer text-base text-slate-600"
              >
                $100 - $500
              </Label>
            </div>
            <div className="inline-flex items-center">
              <RadioGroupItem value="over-500" id="over-500" />
              <Label
                htmlFor="over-500"
                className="ml-2 cursor-pointer text-base text-slate-600"
              >
                Over $500
              </Label>
            </div>
          </RadioGroup>
          <div className="mb-4">
            <small className="mt-4 mb-4 block text-sm font-semibold text-slate-600">
              Custom Range
            </small>
            <div className="flex items-center gap-4">
              <Slider
                value={rangeStart}
                onValueChange={setRangeStart}
                max={100}
                step={1}
                className="w-full"
              />
              <Slider
                value={rangeEnd}
                onValueChange={setRangeEnd}
                max={100}
                step={1}
                className="w-full"
              />
            </div>
            <div className="mt-4 flex items-center justify-between gap-2">
              <div>
                <Label htmlFor="from" className="text-sm font-semibold">
                  From
                </Label>
                <Input
                  id="from"
                  placeholder="From"
                  value={rangeStart[0]}
                  className="w-full"
                />
              </div>
              <div>
                <Label htmlFor="to" className="text-sm font-semibold">
                  To
                </Label>
                <Input
                  id="to"
                  placeholder="To"
                  value={rangeEnd[0]}
                  className="w-full"
                />
              </div>
            </div>
          </div>
          <div className="mx-2 pt-4 pb-2">
            <Button variant="outline" className="w-full">
              Apply
            </Button>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
