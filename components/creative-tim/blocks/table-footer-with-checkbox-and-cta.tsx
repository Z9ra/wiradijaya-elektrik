"use client"

import { ChevronLeft, ChevronRight, FileText } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

export function TableFooterWithCheckboxAndCta() {
  return (
    <div className="space-y-4">
      <Separator />
      <div className="bg-muted/20 flex flex-wrap items-center justify-between gap-6 rounded-lg p-4">
        <div className="flex items-center gap-3">
          <Checkbox id="rows" defaultChecked />
          <Label htmlFor="rows" className="cursor-pointer text-sm font-medium">
            4 of 10 Row(s) selected
          </Label>
          <Badge variant="secondary" className="ml-2">
            4 Selected
          </Badge>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="icon"
              className="hover:bg-background transition-all"
            >
              <ChevronLeft className="h-4 w-4 stroke-2" />
            </Button>
            <p className="flex items-center gap-1 text-sm font-medium">
              Page <span className="text-foreground font-semibold">2</span> of{" "}
              <span className="text-foreground font-semibold">10</span>
            </p>
            <Button
              variant="outline"
              size="icon"
              className="hover:bg-background transition-all"
            >
              <ChevronRight className="h-4 w-4 stroke-2" />
            </Button>
          </div>
          <Separator orientation="vertical" className="h-8" />
          <Button
            variant="outline"
            size="default"
            className="hover:bg-background gap-2 transition-all"
          >
            <FileText className="h-4 w-4" />
            View Reports
          </Button>
        </div>
      </div>
    </div>
  )
}
