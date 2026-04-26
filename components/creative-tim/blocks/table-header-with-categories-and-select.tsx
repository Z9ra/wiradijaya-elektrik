"use client"

import { Building2, CloudDownload, Grid3x3, List, Plus } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

export function TableHeaderWithCategoriesAndSelect() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-2">
        <Badge className="hover:bg-primary/90 cursor-pointer rounded-full transition-all">
          Companies
        </Badge>
        <Badge
          variant="outline"
          className="hover:bg-muted cursor-pointer rounded-full transition-all"
        >
          Projects
        </Badge>
        <Badge
          variant="outline"
          className="hover:bg-muted cursor-pointer rounded-full transition-all"
        >
          Teams
        </Badge>
        <Badge
          variant="outline"
          className="hover:bg-muted cursor-pointer rounded-full transition-all"
        >
          Members
        </Badge>
      </div>

      <Separator />

      <div className="flex flex-wrap items-center justify-between gap-6">
        <div className="flex items-start gap-3">
          <div className="bg-muted rounded-lg p-2.5">
            <Building2 className="text-muted-foreground h-5 w-5" />
          </div>
          <div className="space-y-1">
            <h3 className="text-xl font-semibold">Companies</h3>
            <p className="text-muted-foreground text-sm">
              Here you have details about the companies.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            className="hover:bg-muted gap-2 transition-all"
          >
            <CloudDownload className="h-4 w-4" />
            Download CSV
          </Button>
          <Button className="gap-2 transition-all">
            <Plus className="h-4 w-4" />
            Add New
          </Button>
        </div>
      </div>

      <Separator />

      <div className="flex flex-wrap items-center justify-between gap-6">
        <RadioGroup defaultValue="all" className="flex flex-wrap gap-6">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="all" id="all" />
            <Label htmlFor="all" className="cursor-pointer text-sm font-medium">
              All
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="files" id="files" />
            <Label
              htmlFor="files"
              className="cursor-pointer text-sm font-medium"
            >
              Files
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="payments" id="payments" />
            <Label
              htmlFor="payments"
              className="cursor-pointer text-sm font-medium"
            >
              Payments
            </Label>
          </div>
        </RadioGroup>
        <div className="flex flex-wrap items-center gap-2">
          <Select defaultValue="all-files">
            <SelectTrigger className="hover:bg-muted w-32 transition-all">
              <SelectValue placeholder="Files" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-files">All Files</SelectItem>
              <SelectItem value="documents">Documents</SelectItem>
              <SelectItem value="images">Images</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="last-24h">
            <SelectTrigger className="hover:bg-muted w-32 transition-all">
              <SelectValue placeholder="Time" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="last-24h">Last 24H</SelectItem>
              <SelectItem value="last-week">Last Week</SelectItem>
              <SelectItem value="last-month">Last Month</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="completed">
            <SelectTrigger className="hover:bg-muted w-36 transition-all">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="failed">Failed</SelectItem>
            </SelectContent>
          </Select>
          <Button
            variant="outline"
            size="icon"
            className="hover:bg-muted transition-all"
          >
            <List className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="hover:bg-muted transition-all"
          >
            <Grid3x3 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
