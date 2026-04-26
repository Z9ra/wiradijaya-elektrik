"use client"

import { Briefcase, Plus, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TableHeaderWithTabsAndSearch() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col flex-wrap gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <div className="bg-muted rounded-lg p-2.5">
            <Briefcase className="text-muted-foreground h-5 w-5" />
          </div>
          <div className="space-y-1">
            <h3 className="text-xl font-semibold">Company Projects</h3>
            <p className="text-muted-foreground text-sm">
              Here you have details about the projects.
            </p>
          </div>
        </div>
        <Button className="w-full gap-2 transition-all sm:w-auto">
          <Plus className="h-4 w-4" />
          New Project
        </Button>
      </div>

      <Separator />

      <div className="flex flex-col flex-wrap items-center justify-between gap-6 sm:flex-row">
        <Tabs defaultValue="all" className="w-full sm:w-max">
          <TabsList className="bg-muted/50 w-full">
            <TabsTrigger value="all" className="w-full sm:w-auto">
              All Projects
            </TabsTrigger>
            <TabsTrigger value="sprint1" className="w-full sm:w-auto">
              Sprint 1
            </TabsTrigger>
            <TabsTrigger value="sprint2" className="w-full sm:w-auto">
              Sprint 2
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="flex w-full flex-col items-center gap-2 sm:w-max sm:flex-row">
          <Select defaultValue="sort">
            <SelectTrigger className="hover:bg-muted w-full transition-all sm:w-max">
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sort">Sort By</SelectItem>
              <SelectItem value="date">Date</SelectItem>
              <SelectItem value="priority">Priority</SelectItem>
              <SelectItem value="status">Status</SelectItem>
            </SelectContent>
          </Select>
          <div className="relative w-full">
            <Input
              type="text"
              placeholder="Search projects..."
              className="pl-9 transition-all focus:ring-2"
            />
            <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
          </div>
        </div>
      </div>
    </div>
  )
}
