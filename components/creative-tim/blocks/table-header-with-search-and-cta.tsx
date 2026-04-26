"use client"

import { Search, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

export function TableHeaderWithSearchAndCta() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-6 sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <div className="bg-muted rounded-lg p-2.5">
            <Users className="text-muted-foreground h-5 w-5" />
          </div>
          <div className="space-y-1">
            <h3 className="text-xl font-semibold">Members List</h3>
            <p className="text-muted-foreground text-sm">
              See information about all members
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative w-full sm:w-72">
            <Input
              type="text"
              placeholder="Search members..."
              className="pl-9 transition-all focus:ring-2"
            />
            <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
          </div>
          <Button className="shrink-0 transition-all">Add Member</Button>
        </div>
      </div>
      <Separator />
    </div>
  )
}
