"use client"

import * as React from "react"
import { Filter, MailCheck, MoreHorizontal } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const TICKETS = [
  {
    id: "SUP-1290",
    subject: "Billing failed on renewal",
    customer: "Atlas Logistics",
    status: "Open",
    sla: "2h left",
    priority: "High",
  },
  {
    id: "SUP-1284",
    subject: "SSO connection error",
    customer: "Northwind",
    status: "Pending",
    sla: "6h left",
    priority: "Medium",
  },
  {
    id: "SUP-1279",
    subject: "Webhook delays",
    customer: "Cloudline",
    status: "Open",
    sla: "1h left",
    priority: "High",
  },
  {
    id: "SUP-1271",
    subject: "Invoice PDF missing",
    customer: "VenturePoint",
    status: "Resolved",
    sla: "Met",
    priority: "Low",
  },
]

const STATUS_STYLES: Record<string, string> = {
  Open: "border-rose-500/50 bg-rose-50 text-rose-700",
  Pending: "border-amber-500/50 bg-amber-50 text-amber-700",
  Resolved: "border-emerald-500/50 bg-emerald-50 text-emerald-700",
}

const PRIORITY_STYLES: Record<string, string> = {
  High: "border-rose-500/50 bg-rose-50 text-rose-700",
  Medium: "border-amber-500/50 bg-amber-50 text-amber-700",
  Low: "border-blue-500/50 bg-blue-50 text-blue-700",
}

export default function SupportTicketsTable() {
  const [tickets, setTickets] = React.useState(TICKETS)
  const [query, setQuery] = React.useState("")
  const [statusFilter, setStatusFilter] = React.useState("all")

  const filteredTickets = tickets.filter((ticket) => {
    const matchesQuery =
      ticket.subject.toLowerCase().includes(query.toLowerCase()) ||
      ticket.id.toLowerCase().includes(query.toLowerCase()) ||
      ticket.customer.toLowerCase().includes(query.toLowerCase())
    const matchesStatus =
      statusFilter === "all"
        ? true
        : ticket.status.toLowerCase() === statusFilter
    return matchesQuery && matchesStatus
  })

  const markResolved = (id: string) => {
    setTickets((prev) =>
      prev.map((ticket) =>
        ticket.id === id ? { ...ticket, status: "Resolved" } : ticket
      )
    )
  }

  return (
    <div className="mx-auto max-w-6xl p-6">
      <Card className="bg-card border p-8">
        <div className="flex flex-wrap items-start justify-between gap-4 border-b pb-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Support Tickets
            </h2>
            <p className="text-muted-foreground mt-1 text-sm">
              Track SLA, priority, and response workflows in one place.
            </p>
          </div>
          <Button>
            <MailCheck className="mr-2 h-4 w-4" />
            Assign tickets
          </Button>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative w-full sm:w-72">
              <Input
                placeholder="Search tickets..."
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full sm:w-44">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All status</SelectItem>
                <SelectItem value="open">Open</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="resolved">Resolved</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Advanced filters
            </Button>
          </div>
        </div>

        <div className="mt-6 rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Ticket</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>SLA</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTickets.map((ticket) => (
                <TableRow key={ticket.id}>
                  <TableCell>
                    <div>
                      <p className="font-semibold">{ticket.subject}</p>
                      <p className="text-muted-foreground text-xs">
                        {ticket.id}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>{ticket.customer}</TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={STATUS_STYLES[ticket.status]}
                    >
                      {ticket.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="text-muted-foreground">
                      {ticket.sla}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={PRIORITY_STYLES[ticket.priority]}
                    >
                      {ticket.priority}
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
                        <DropdownMenuItem>Open ticket</DropdownMenuItem>
                        <DropdownMenuItem>Assign</DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => markResolved(ticket.id)}
                        >
                          Mark resolved
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {filteredTickets.length === 0 ? (
          <Card className="bg-muted/40 mt-6 border p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold">No tickets found</p>
                <p className="text-muted-foreground text-xs">
                  Try adjusting your filters or search terms.
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setQuery("")
                  setStatusFilter("all")
                }}
              >
                Clear filters
              </Button>
            </div>
          </Card>
        ) : null}
      </Card>
    </div>
  )
}
