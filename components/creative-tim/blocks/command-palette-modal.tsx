"use client"

import * as React from "react"
import {
  Calendar,
  CreditCard,
  FileText,
  LayoutGrid,
  Search,
  Settings,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"

const RECENT_ITEMS = [
  { label: "Open Analytics", shortcut: "G A", icon: LayoutGrid },
  { label: "Invoice #1290", shortcut: "G I", icon: FileText },
  { label: "Team Settings", shortcut: "G T", icon: Users },
]

const NAV_ITEMS = [
  { label: "Dashboard", shortcut: "D", icon: LayoutGrid },
  { label: "Billing", shortcut: "B", icon: CreditCard },
  { label: "Calendar", shortcut: "C", icon: Calendar },
  { label: "Settings", shortcut: ",", icon: Settings },
]

const ACTION_ITEMS = [
  { label: "Create new project", shortcut: "N", icon: LayoutGrid },
  { label: "Invite teammates", shortcut: "I", icon: Users },
  { label: "Search docs", shortcut: "S", icon: Search },
]

export default function CommandPaletteModal() {
  const [open, setOpen] = React.useState(false)
  const [recent, setRecent] = React.useState(RECENT_ITEMS)
  const [lastAction, setLastAction] = React.useState<string | null>(null)

  React.useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const isCommand = event.metaKey || event.ctrlKey
      if ((isCommand && event.key.toLowerCase() === "k") || event.key === "/") {
        event.preventDefault()
        setOpen(true)
      }
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  const handleSelect = (label: string) => {
    setLastAction(label)
    setRecent((prev) => {
      const next = prev.filter((item) => item.label !== label)
      return [{ label, shortcut: "↵", icon: FileText }, ...next].slice(0, 4)
    })
    setOpen(false)
  }

  return (
    <div className="mx-auto flex max-w-4xl items-center justify-center p-6">
      <Card className="bg-card border p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Command Palette
            </h2>
            <p className="text-muted-foreground mt-1 text-sm">
              Quick navigation with keyboard shortcuts and recent actions.
            </p>
          </div>
          <Button onClick={() => setOpen(true)}>Open Palette</Button>
        </div>
        <div className="text-muted-foreground mt-4 flex flex-wrap gap-3 text-sm">
          <span className="rounded-md border px-2 py-1">Cmd + K</span>
          <span className="rounded-md border px-2 py-1">Ctrl + K</span>
          <span className="rounded-md border px-2 py-1">/</span>
        </div>
        {lastAction ? (
          <p className="text-muted-foreground mt-3 text-sm">
            Last action: <span className="font-medium">{lastAction}</span>
          </p>
        ) : null}

        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder="Search for actions, pages, or docs..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Recent">
              {recent.map((item) => (
                <CommandItem
                  key={item.label}
                  onSelect={() => handleSelect(item.label)}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                  <CommandShortcut>{item.shortcut}</CommandShortcut>
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Navigation">
              {NAV_ITEMS.map((item) => (
                <CommandItem
                  key={item.label}
                  onSelect={() => handleSelect(item.label)}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                  <CommandShortcut>{item.shortcut}</CommandShortcut>
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Actions">
              {ACTION_ITEMS.map((item) => (
                <CommandItem
                  key={item.label}
                  onSelect={() => handleSelect(item.label)}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                  <CommandShortcut>{item.shortcut}</CommandShortcut>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </Card>
    </div>
  )
}
