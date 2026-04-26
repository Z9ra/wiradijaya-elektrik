"use client"

import * as React from "react"
import { Archive, Bell, CheckCircle2, MailOpen } from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

const NOTIFICATIONS = [
  {
    id: "1",
    title: "Security policy updated",
    description: "MFA enforcement enabled for all admins.",
    time: "2 hours ago",
    category: "Security",
    unread: true,
    archived: false,
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120",
    initials: "MC",
  },
  {
    id: "2",
    title: "Payment succeeded",
    description: "Invoice #1290 was paid successfully.",
    time: "Yesterday",
    category: "Billing",
    unread: true,
    archived: false,
    avatar:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=120&h=120",
    initials: "ER",
  },
  {
    id: "3",
    title: "New deployment",
    description: "API gateway v3.2 deployed to production.",
    time: "Yesterday",
    category: "Deployments",
    unread: false,
    archived: false,
    initials: "AL",
  },
  {
    id: "4",
    title: "Comment on ticket",
    description: "Support team replied to SUP-1290.",
    time: "2 days ago",
    category: "Support",
    unread: false,
    archived: false,
    initials: "JD",
  },
]

const CATEGORY_STYLES: Record<string, string> = {
  Security: "border-rose-500/50 bg-rose-50 text-rose-700",
  Billing: "border-emerald-500/50 bg-emerald-50 text-emerald-700",
  Deployments: "border-blue-500/50 bg-blue-50 text-blue-700",
  Support: "border-amber-500/50 bg-amber-50 text-amber-700",
}

function NotificationList({
  items,
  selectedIds,
  onToggleSelect,
}: {
  items: typeof NOTIFICATIONS
  selectedIds: string[]
  onToggleSelect: (id: string) => void
}) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <Card key={item.id} className="bg-muted/30 border p-4">
          <div className="flex items-start gap-4">
            <Checkbox
              checked={selectedIds.includes(item.id)}
              onCheckedChange={() => onToggleSelect(item.id)}
              aria-label={`Select ${item.title}`}
            />
            <Avatar className="h-10 w-10">
              {item.avatar ? (
                <AvatarImage src={item.avatar} alt={item.initials} />
              ) : (
                <AvatarFallback>{item.initials}</AvatarFallback>
              )}
            </Avatar>
            <div className="flex-1">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <p className="font-semibold">{item.title}</p>
                  {item.unread ? (
                    <Badge variant="secondary">Unread</Badge>
                  ) : null}
                </div>
                <span className="text-muted-foreground text-xs">
                  {item.time}
                </span>
              </div>
              <p className="text-muted-foreground mt-1 text-sm">
                {item.description}
              </p>
              <div className="mt-2">
                <Badge
                  variant="outline"
                  className={CATEGORY_STYLES[item.category]}
                >
                  {item.category}
                </Badge>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}

export default function NotificationInbox() {
  const [notifications, setNotifications] = React.useState(NOTIFICATIONS)
  const [selectedIds, setSelectedIds] = React.useState<string[]>([])
  const [activeTab, setActiveTab] = React.useState("all")
  const [categoryFilter, setCategoryFilter] = React.useState("all")

  const categories = Array.from(
    new Set(notifications.map((item) => item.category))
  )

  const visibleNotifications = notifications.filter((item) => {
    if (activeTab === "archived") return item.archived
    if (activeTab === "unread") return item.unread && !item.archived
    return !item.archived
  })

  const filteredNotifications =
    categoryFilter === "all"
      ? visibleNotifications
      : visibleNotifications.filter((item) => item.category === categoryFilter)

  const unreadItems = notifications.filter(
    (item) => item.unread && !item.archived
  )

  const toggleSelect = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const markRead = () => {
    const targetIds = selectedIds.length
      ? selectedIds
      : notifications.map((item) => item.id)
    setNotifications((prev) =>
      prev.map((item) =>
        targetIds.includes(item.id) ? { ...item, unread: false } : item
      )
    )
    setSelectedIds([])
  }

  const archiveSelected = () => {
    if (!selectedIds.length) return
    setNotifications((prev) =>
      prev.map((item) =>
        selectedIds.includes(item.id) ? { ...item, archived: true } : item
      )
    )
    setSelectedIds([])
  }

  return (
    <div className="mx-auto max-w-5xl p-6">
      <Card className="bg-card border p-8">
        <div className="flex flex-wrap items-start justify-between gap-4 border-b pb-6">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
              <Bell className="text-primary h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                Notification Inbox
              </h2>
              <p className="text-muted-foreground mt-1 text-sm">
                Review and triage team notifications in one place.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Button variant="outline" onClick={markRead}>
              <MailOpen className="mr-2 h-4 w-4" />
              Mark read
            </Button>
            <Button onClick={archiveSelected}>
              <Archive className="mr-2 h-4 w-4" />
              Archive
            </Button>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-full sm:w-44">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All categories</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-4">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="unread">
              Unread
              <Badge variant="secondary" className="ml-2">
                {unreadItems.length}
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="archived">Archived</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <NotificationList
              items={filteredNotifications}
              selectedIds={selectedIds}
              onToggleSelect={toggleSelect}
            />
          </TabsContent>
          <TabsContent value="unread">
            <NotificationList
              items={filteredNotifications}
              selectedIds={selectedIds}
              onToggleSelect={toggleSelect}
            />
          </TabsContent>
          <TabsContent value="archived">
            {filteredNotifications.length ? (
              <NotificationList
                items={filteredNotifications}
                selectedIds={selectedIds}
                onToggleSelect={toggleSelect}
              />
            ) : (
              <Card className="bg-muted/30 border p-6">
                <div className="text-center">
                  <CheckCircle2 className="text-primary mx-auto h-6 w-6" />
                  <p className="mt-2 text-sm font-semibold">No archives yet</p>
                  <p className="text-muted-foreground text-xs">
                    Archived notifications will show up here.
                  </p>
                </div>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  )
}
