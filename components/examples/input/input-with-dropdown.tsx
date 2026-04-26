"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"

const countries = [
  { name: "United States", code: "+1", flag: "🇺🇸" },
  { name: "United Kingdom", code: "+44", flag: "🇬🇧" },
  { name: "Canada", code: "+1", flag: "🇨🇦" },
  { name: "Germany", code: "+49", flag: "🇩🇪" },
  { name: "France", code: "+33", flag: "🇫🇷" },
  { name: "Italy", code: "+39", flag: "🇮🇹" },
  { name: "Spain", code: "+34", flag: "🇪🇸" },
  { name: "Australia", code: "+61", flag: "🇦🇺" },
]

export default function InputWithDropdown() {
  const [country, setCountry] = React.useState(countries[0])

  return (
    <div className="relative flex w-full max-w-[24rem]">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="secondary"
            className="bg-secondary flex items-center gap-2 rounded-r-none border-r-0 pr-2 pl-3"
          >
            <span className="text-base">{country.flag}</span>
            {country.code}
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="h-72 max-w-[18rem] overflow-y-auto">
          {countries.map((item) => (
            <DropdownMenuItem
              key={item.name}
              onClick={() => setCountry(item)}
              className="flex items-center gap-2"
            >
              <span className="text-base">{item.flag}</span>
              {item.name}
              <span className="ml-auto">{item.code}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <Input placeholder="Mobile Number" className="rounded-l-none" />
    </div>
  )
}
