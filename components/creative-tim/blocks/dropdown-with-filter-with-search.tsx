"use client"

import { useState } from "react"
import { ChevronDown, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function DropdownWithFilterWithSearch() {
  const [openMarketing, setOpenMarketing] = useState(false)
  const [openProductDev, setOpenProductDev] = useState(false)
  const [openCustomerSupport, setOpenCustomerSupport] = useState(false)

  return (
    <div className="text-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>By Category</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-72 p-2">
          <div className="mb-2 flex items-center justify-between">
            <small className="mx-2 text-sm font-semibold text-slate-600">
              Filter
            </small>
            <Button variant="ghost" size="sm" className="h-auto px-2 py-1">
              Clear All
            </Button>
          </div>
          <div className="relative w-full">
            <Input placeholder="Search" className="pr-9" />
            <span className="pointer-events-none absolute top-1/2 right-2.5 h-5 w-5 -translate-y-1/2 text-slate-600/70">
              <Search className="h-full w-full" />
            </span>
          </div>
          <div className="p-3">
            <Collapsible open={openMarketing} onOpenChange={setOpenMarketing}>
              <CollapsibleTrigger className="flex w-full items-center justify-between py-2 text-sm text-slate-600">
                Marketing
                <ChevronDown
                  className={`size-4 transition-transform duration-300 ${openMarketing ? "rotate-180" : ""}`}
                />
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-3 text-sm text-slate-500">
                <div className="my-2 flex flex-col gap-3">
                  <div className="inline-flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Checkbox id="social-media" />
                      <Label
                        htmlFor="social-media"
                        className="flex-1 cursor-pointer text-sm text-slate-600"
                      >
                        Social Media Campaigns
                      </Label>
                    </div>
                    <span className="ml-6 text-sm text-slate-600">23</span>
                  </div>
                  <div className="inline-flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Checkbox id="seo" />
                      <Label
                        htmlFor="seo"
                        className="flex-1 cursor-pointer text-sm text-slate-600"
                      >
                        SEO Optimization
                      </Label>
                    </div>
                    <span className="ml-6 text-sm text-slate-600">15</span>
                  </div>
                  <div className="inline-flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Checkbox id="content-strategy" />
                      <Label
                        htmlFor="content-strategy"
                        className="flex-1 cursor-pointer text-sm text-slate-600"
                      >
                        Content Strategy
                      </Label>
                    </div>
                    <span className="ml-6 text-sm text-slate-600">8</span>
                  </div>
                  <div className="inline-flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Checkbox id="email-marketing" />
                      <Label
                        htmlFor="email-marketing"
                        className="flex-1 cursor-pointer text-sm text-slate-600"
                      >
                        Email Marketing
                      </Label>
                    </div>
                    <span className="ml-6 text-sm text-slate-600">19</span>
                  </div>
                  <div className="inline-flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Checkbox id="brand-management" />
                      <Label
                        htmlFor="brand-management"
                        className="flex-1 cursor-pointer text-sm text-slate-600"
                      >
                        Brand Management
                      </Label>
                    </div>
                    <span className="ml-6 text-sm text-slate-600">12</span>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>

            <Collapsible open={openProductDev} onOpenChange={setOpenProductDev}>
              <CollapsibleTrigger className="flex w-full items-center justify-between py-2 text-sm text-slate-600">
                Product Development
                <ChevronDown
                  className={`size-4 transition-transform duration-300 ${openProductDev ? "rotate-180" : ""}`}
                />
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-3 text-sm text-slate-500">
                <div className="my-2 inline-flex w-full items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Checkbox id="marketing-product" />
                    <Label
                      htmlFor="marketing-product"
                      className="flex-1 cursor-pointer text-sm text-slate-600"
                    >
                      Marketing
                    </Label>
                  </div>
                  <span className="ml-6 text-sm text-slate-600">12</span>
                </div>
              </CollapsibleContent>
            </Collapsible>

            <Collapsible
              open={openCustomerSupport}
              onOpenChange={setOpenCustomerSupport}
            >
              <CollapsibleTrigger className="flex w-full items-center justify-between py-2 text-sm text-slate-600">
                Customer Support
                <ChevronDown
                  className={`size-4 transition-transform duration-300 ${openCustomerSupport ? "rotate-180" : ""}`}
                />
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-3 text-sm text-slate-500">
                <div className="my-2 inline-flex w-full items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Checkbox id="marketing-support" />
                    <Label
                      htmlFor="marketing-support"
                      className="flex-1 cursor-pointer text-sm text-slate-600"
                    >
                      Marketing
                    </Label>
                  </div>
                  <span className="ml-6 text-sm text-slate-600">12</span>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
