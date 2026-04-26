"use client"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Label } from "@/components/ui/label"

export default function DropdownWithFilterWithCheckbox() {
  return (
    <div className="text-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>By Category</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-auto p-4">
          <div className="flex flex-col gap-3">
            <div className="inline-flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="marketing" />
                <Label
                  htmlFor="marketing"
                  className="flex-1 cursor-pointer text-sm text-slate-600"
                >
                  Marketing
                </Label>
              </div>
              <span className="ml-6 text-sm text-slate-600">23</span>
            </div>
            <div className="inline-flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="sales" />
                <Label
                  htmlFor="sales"
                  className="flex-1 cursor-pointer text-sm text-slate-600"
                >
                  Sales
                </Label>
              </div>
              <span className="ml-6 text-sm text-slate-600">15</span>
            </div>
            <div className="inline-flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="support" />
                <Label
                  htmlFor="support"
                  className="flex-1 cursor-pointer text-sm text-slate-600"
                >
                  Support
                </Label>
              </div>
              <span className="ml-6 text-sm text-slate-600">8</span>
            </div>
            <div className="inline-flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="finance" />
                <Label
                  htmlFor="finance"
                  className="flex-1 cursor-pointer text-sm text-slate-600"
                >
                  Finance
                </Label>
              </div>
              <span className="ml-6 text-sm text-slate-600">19</span>
            </div>
            <div className="inline-flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="hr" />
                <Label
                  htmlFor="hr"
                  className="flex-1 cursor-pointer text-sm text-slate-600"
                >
                  HR
                </Label>
              </div>
              <span className="ml-6 text-sm text-slate-600">12</span>
            </div>
            <Button variant="ghost" className="w-full justify-start text-sm">
              Show 10 More
            </Button>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
