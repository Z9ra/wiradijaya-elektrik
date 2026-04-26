"use client"

import * as React from "react"
import {
  ArrowDown,
  ArrowUp,
  Columns,
  Download,
  Filter,
  MoreHorizontal,
  Pin,
  Search,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"

const DENSITY_OPTIONS = [
  { value: "compact", label: "Compact" },
  { value: "comfortable", label: "Comfortable" },
  { value: "spacious", label: "Spacious" },
]

const VIEWS = ["Default view", "Finance", "Ops"]

const ROWS = [
  {
    id: "ACC-1290",
    company: "Atlas Logistics",
    owner: "Emma Rodriguez",
    plan: "Enterprise",
    mrr: "$12,400",
    renewal: "Mar 2, 2026",
    status: "Active",
  },
  {
    id: "ACC-1184",
    company: "Northwind",
    owner: "Ken Adams",
    plan: "Growth",
    mrr: "$7,200",
    renewal: "Mar 14, 2026",
    status: "At risk",
  },
  {
    id: "ACC-1118",
    company: "Cloudline",
    owner: "Ava Chen",
    plan: "Scale",
    mrr: "$9,680",
    renewal: "Apr 8, 2026",
    status: "Active",
  },
  {
    id: "ACC-1042",
    company: "VenturePoint",
    owner: "Mia Romero",
    plan: "Growth",
    mrr: "$6,150",
    renewal: "Apr 22, 2026",
    status: "Paused",
  },
]

const STATUS_STYLES: Record<string, string> = {
  Active: "border-emerald-500/50 bg-emerald-50 text-emerald-700",
  "At risk": "border-amber-500/50 bg-amber-50 text-amber-700",
  Paused: "border-rose-500/50 bg-rose-50 text-rose-700",
}

export default function DataTableAdvanced() {
  const [density, setDensity] = React.useState("comfortable")
  const [view, setView] = React.useState(VIEWS[0])
  const [query, setQuery] = React.useState("")
  const [selectedRows, setSelectedRows] = React.useState<string[]>([])
  const [pinnedRows, setPinnedRows] = React.useState<string[]>([])
  const [visibleColumns, setVisibleColumns] = React.useState({
    company: true,
    owner: true,
    plan: true,
    mrr: true,
    renewal: true,
  })
  const [statusFilters, setStatusFilters] = React.useState({
    Active: true,
    "At risk": true,
    Paused: false,
  })

  const densityClass =
    density === "compact"
      ? "[&_td]:py-2"
      : density === "spacious"
        ? "[&_td]:py-5"
        : "[&_td]:py-3"

  const filteredRows = ROWS.filter((row) => {
    const matchesQuery =
      row.company.toLowerCase().includes(query.toLowerCase()) ||
      row.owner.toLowerCase().includes(query.toLowerCase()) ||
      row.id.toLowerCase().includes(query.toLowerCase())
    return (
      matchesQuery && statusFilters[row.status as keyof typeof statusFilters]
    )
  })

  const orderedRows = [
    ...filteredRows.filter((row) => pinnedRows.includes(row.id)),
    ...filteredRows.filter((row) => !pinnedRows.includes(row.id)),
  ]

  const toggleSelectAll = () => {
    if (selectedRows.length === filteredRows.length) {
      setSelectedRows([])
      return
    }
    setSelectedRows(filteredRows.map((row) => row.id))
  }

  const toggleRow = (id: string) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const togglePin = (id: string) => {
    setPinnedRows((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const toggleColumn = (key: keyof typeof visibleColumns) => {
    setVisibleColumns((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const toggleStatusFilter = (key: keyof typeof statusFilters) => {
    setStatusFilters((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const applyView = (value: string) => {
    setView(value)
    if (value === "Finance") {
      setVisibleColumns({
        company: true,
        owner: false,
        plan: true,
        mrr: true,
        renewal: true,
      })
      setStatusFilters({ Active: true, "At risk": true, Paused: false })
    }
    if (value === "Ops") {
      setVisibleColumns({
        company: true,
        owner: true,
        plan: false,
        mrr: false,
        renewal: true,
      })
      setStatusFilters({ Active: true, "At risk": true, Paused: true })
    }
    if (value === "Default view") {
      setVisibleColumns({
        company: true,
        owner: true,
        plan: true,
        mrr: true,
        renewal: true,
      })
      setStatusFilters({ Active: true, "At risk": true, Paused: false })
    }
  }

  return (
    <div className="mx-auto max-w-6xl p-6">
      <Card className="bg-card border p-8">
        <div className="flex flex-wrap items-start justify-between gap-4 border-b pb-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Advanced Data Table
            </h2>
            <p className="text-muted-foreground mt-1 text-sm">
              Saved views, column pinning, density, and export controls.
            </p>
          </div>
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Export CSV
          </Button>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <div className="relative w-full max-w-sm">
            <Input
              placeholder="Search accounts..."
              className="pl-9"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">{view}</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {VIEWS.map((item) => (
                  <DropdownMenuItem key={item} onClick={() => applyView(item)}>
                    {item}
                  </DropdownMenuItem>
                ))}
                <DropdownMenuItem>Save current view</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">
                  <Columns className="mr-2 h-4 w-4" />
                  Columns
                </Button>
              </PopoverTrigger>
              <PopoverContent align="end" className="w-56">
                <div className="space-y-2 text-sm">
                  <label className="flex items-center gap-2">
                    <Checkbox
                      checked={visibleColumns.company}
                      onCheckedChange={() => toggleColumn("company")}
                    />
                    Company
                  </label>
                  <label className="flex items-center gap-2">
                    <Checkbox
                      checked={visibleColumns.owner}
                      onCheckedChange={() => toggleColumn("owner")}
                    />
                    Owner
                  </label>
                  <label className="flex items-center gap-2">
                    <Checkbox
                      checked={visibleColumns.plan}
                      onCheckedChange={() => toggleColumn("plan")}
                    />
                    Plan
                  </label>
                  <label className="flex items-center gap-2">
                    <Checkbox
                      checked={visibleColumns.mrr}
                      onCheckedChange={() => toggleColumn("mrr")}
                    />
                    MRR
                  </label>
                  <label className="flex items-center gap-2">
                    <Checkbox
                      checked={visibleColumns.renewal}
                      onCheckedChange={() => toggleColumn("renewal")}
                    />
                    Renewal
                  </label>
                </div>
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">
                  <Filter className="mr-2 h-4 w-4" />
                  Filters
                </Button>
              </PopoverTrigger>
              <PopoverContent align="end" className="w-56">
                <div className="space-y-2 text-sm">
                  <label className="flex items-center gap-2">
                    <Checkbox
                      checked={statusFilters.Active}
                      onCheckedChange={() => toggleStatusFilter("Active")}
                    />
                    Active
                  </label>
                  <label className="flex items-center gap-2">
                    <Checkbox
                      checked={statusFilters["At risk"]}
                      onCheckedChange={() => toggleStatusFilter("At risk")}
                    />
                    At risk
                  </label>
                  <label className="flex items-center gap-2">
                    <Checkbox
                      checked={statusFilters.Paused}
                      onCheckedChange={() => toggleStatusFilter("Paused")}
                    />
                    Paused
                  </label>
                </div>
              </PopoverContent>
            </Popover>

            <ToggleGroup
              type="single"
              value={density}
              onValueChange={(value) => value && setDensity(value)}
              variant="outline"
            >
              {DENSITY_OPTIONS.map((option) => (
                <ToggleGroupItem key={option.value} value={option.value}>
                  {option.label}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div>
        </div>

        <Card className="mt-6 border">
          <Table className={densityClass}>
            <TableHeader>
              <TableRow>
                <TableHead>
                  <Checkbox
                    aria-label="Select all"
                    checked={
                      filteredRows.length > 0 &&
                      selectedRows.length === filteredRows.length
                    }
                    onCheckedChange={toggleSelectAll}
                  />
                </TableHead>
                {visibleColumns.company ? (
                  <TableHead className="flex items-center gap-2">
                    Company
                    <ArrowUp className="h-3 w-3" />
                  </TableHead>
                ) : null}
                {visibleColumns.owner ? <TableHead>Owner</TableHead> : null}
                {visibleColumns.plan ? <TableHead>Plan</TableHead> : null}
                {visibleColumns.mrr ? (
                  <TableHead>
                    MRR
                    <ArrowDown className="ml-1 inline h-3 w-3" />
                  </TableHead>
                ) : null}
                {visibleColumns.renewal ? <TableHead>Renewal</TableHead> : null}
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orderedRows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>
                    <Checkbox
                      aria-label={`Select ${row.company}`}
                      checked={selectedRows.includes(row.id)}
                      onCheckedChange={() => toggleRow(row.id)}
                    />
                  </TableCell>
                  {visibleColumns.company ? (
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Button
                          size="icon"
                          variant={
                            pinnedRows.includes(row.id) ? "secondary" : "ghost"
                          }
                          onClick={() => togglePin(row.id)}
                        >
                          <Pin className="h-4 w-4" />
                        </Button>
                        <div>
                          <p className="font-semibold">{row.company}</p>
                          <p className="text-muted-foreground text-xs">
                            {row.id}
                          </p>
                        </div>
                      </div>
                    </TableCell>
                  ) : null}
                  {visibleColumns.owner ? (
                    <TableCell>{row.owner}</TableCell>
                  ) : null}
                  {visibleColumns.plan ? (
                    <TableCell>
                      <Badge variant="secondary">{row.plan}</Badge>
                    </TableCell>
                  ) : null}
                  {visibleColumns.mrr ? <TableCell>{row.mrr}</TableCell> : null}
                  {visibleColumns.renewal ? (
                    <TableCell>{row.renewal}</TableCell>
                  ) : null}
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={STATUS_STYLES[row.status]}
                    >
                      {row.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button size="icon" variant="ghost">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Open account</DropdownMenuItem>
                        <DropdownMenuItem>View invoices</DropdownMenuItem>
                        <DropdownMenuItem>Adjust plan</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </Card>
    </div>
  )
}
