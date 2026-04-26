"use client"

import * as React from "react"
import {
  ArrowDown,
  ArrowUp,
  ArrowUpDown,
  Pencil,
  Search,
  UserPlus,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const TABS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Monitored",
    value: "monitored",
  },
  {
    label: "Unmonitored",
    value: "unmonitored",
  },
]

const TABLE_HEAD = ["Member", "Function", "Status", "Employed", ""]

const TABLE_ROWS = [
  {
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    name: "John Michael",
    email: "john@creative-tim.com",
    job: "Manager",
    org: "Organization",
    online: true,
    date: "23/04/18",
  },
  {
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    name: "Alexa Liras",
    email: "alexa@creative-tim.com",
    job: "Programator",
    org: "Developer",
    online: false,
    date: "23/04/18",
  },
  {
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    name: "Laurent Perrier",
    email: "laurent@creative-tim.com",
    job: "Executive",
    org: "Projects",
    online: false,
    date: "19/09/17",
  },
  {
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    name: "Michael Levi",
    email: "michael@creative-tim.com",
    job: "Programator",
    org: "Developer",
    online: true,
    date: "24/12/08",
  },
  {
    img: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop",
    name: "Richard Gran",
    email: "richard@creative-tim.com",
    job: "Manager",
    org: "Executive",
    online: false,
    date: "04/10/21",
  },
]

type SortKey = "name" | "job" | "status" | "date"
type SortDirection = "asc" | "desc" | null

export default function TableSortable() {
  const [sortKey, setSortKey] = React.useState<SortKey | null>(null)
  const [sortDirection, setSortDirection] = React.useState<SortDirection>(null)

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      if (sortDirection === "asc") {
        setSortDirection("desc")
      } else if (sortDirection === "desc") {
        setSortKey(null)
        setSortDirection(null)
      } else {
        setSortDirection("asc")
      }
    } else {
      setSortKey(key)
      setSortDirection("asc")
    }
  }

  const sortedRows = React.useMemo(() => {
    if (!sortKey || !sortDirection) return TABLE_ROWS

    return [...TABLE_ROWS].sort((a, b) => {
      let aValue: string | boolean
      let bValue: string | boolean

      if (sortKey === "name") {
        aValue = a.name
        bValue = b.name
      } else if (sortKey === "job") {
        aValue = a.job
        bValue = b.job
      } else if (sortKey === "status") {
        aValue = a.online
        bValue = b.online
      } else {
        aValue = a.date
        bValue = b.date
      }

      if (typeof aValue === "boolean" && typeof bValue === "boolean") {
        return sortDirection === "asc"
          ? (aValue ? 1 : 0) - (bValue ? 1 : 0)
          : (bValue ? 1 : 0) - (aValue ? 1 : 0)
      }

      if (typeof aValue === "string" && typeof bValue === "string") {
        return sortDirection === "asc"
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue)
      }

      return 0
    })
  }, [sortKey, sortDirection])

  const getSortIcon = (columnKey: SortKey) => {
    if (sortKey !== columnKey) {
      return <ArrowUpDown className="h-4 w-4" />
    }
    if (sortDirection === "asc") {
      return <ArrowUp className="h-4 w-4" />
    }
    return <ArrowDown className="h-4 w-4" />
  }
  return (
    <div className="w-full">
      <div className="mb-8 flex items-center justify-between gap-8">
        <div>
          <h6 className="text-base font-semibold">Members list</h6>
          <p className="text-muted-foreground mt-1 text-sm">
            See information about all members
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
          <Button variant="outline" size="sm">
            View all
          </Button>
          <Button size="sm">
            <UserPlus className="mr-2 h-4 w-4" />
            Add member
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <Tabs defaultValue="all" className="w-full md:w-max">
          <TabsList>
            {TABS.map(({ label, value }) => (
              <TabsTrigger key={value} value={value}>
                {label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        <div className="relative w-full md:w-72">
          <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
          <Input placeholder="Search" className="pl-9" />
        </div>
      </div>

      <div className="border-border mt-4 w-full overflow-hidden rounded-lg border">
        <table className="w-full">
          <thead className="border-border bg-muted border-b text-sm font-medium">
            <tr>
              {TABLE_HEAD.map((head, index) => {
                const sortKeys: (SortKey | null)[] = [
                  "name",
                  "job",
                  "status",
                  "date",
                  null,
                ]
                const key = sortKeys[index]

                return (
                  <th
                    key={head}
                    className={`px-2.5 py-2 text-start font-medium ${key ? "hover:bg-muted/80 cursor-pointer" : ""}`}
                    onClick={() => key && handleSort(key)}
                  >
                    <div className="text-muted-foreground flex items-center justify-between gap-2">
                      {head}
                      {key && getSortIcon(key)}
                    </div>
                  </th>
                )
              })}
            </tr>
          </thead>
          <tbody className="text-sm">
            {sortedRows.map(
              ({ img, name, email, job, org, online, date }, index) => {
                return (
                  <tr
                    key={name}
                    className="border-border border-b last:border-0"
                  >
                    <td className="p-3">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-9 w-9">
                          <AvatarImage src={img} alt={name} />
                          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                          <span className="text-sm font-medium">{name}</span>
                          <span className="text-muted-foreground text-xs">
                            {email}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="p-3">
                      <div className="flex flex-col">
                        <span className="text-sm font-medium">{job}</span>
                        <span className="text-muted-foreground text-xs">
                          {org}
                        </span>
                      </div>
                    </td>
                    <td className="p-3">
                      <Badge variant={online ? "default" : "secondary"}>
                        {online ? "Online" : "Offline"}
                      </Badge>
                    </td>
                    <td className="p-3">
                      <span className="text-sm">{date}</span>
                    </td>
                    <td className="p-3">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <Pencil className="h-4 w-4" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Edit User</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </td>
                  </tr>
                )
              }
            )}
          </tbody>
        </table>
      </div>
      <div className="border-border flex items-center justify-between border-t py-4">
        <span className="text-muted-foreground text-sm">Page 1 of 10</span>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            Previous
          </Button>
          <Button variant="outline" size="sm">
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
