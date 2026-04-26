"use client"

import * as React from "react"
import { Activity, Bell, CheckCircle2, Shield } from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

type FeedItem = {
  id: string
  title: string
  description: string
  time: string
  day: string
  type: "deployments" | "billing" | "team" | "security"
  unread: boolean
  avatar?: string
  initials: string
}

const FEED_ITEMS: FeedItem[] = [
  {
    id: "1",
    title: "Deployment completed",
    description: "API gateway v3.2 shipped to production.",
    time: "2:15 PM",
    day: "Today",
    type: "deployments",
    unread: true,
    avatar:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=120&h=120",
    initials: "ER",
  },
  {
    id: "2",
    title: "Invoice paid",
    description: "Invoice #1290 was paid via card ending 4231.",
    time: "12:04 PM",
    day: "Today",
    type: "billing",
    unread: true,
    avatar:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=120&h=120",
    initials: "KR",
  },
  {
    id: "3",
    title: "New teammate invited",
    description: "Mia Chen joined the workspace as Admin.",
    time: "9:40 AM",
    day: "Today",
    type: "team",
    unread: false,
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120",
    initials: "MC",
  },
  {
    id: "4",
    title: "Security policy updated",
    description: "MFA enforcement enabled for all admins.",
    time: "4:22 PM",
    day: "Yesterday",
    type: "security",
    unread: false,
    initials: "SO",
  },
  {
    id: "5",
    title: "Deployment failed",
    description: "Docs site build failed on the main branch.",
    time: "2:11 PM",
    day: "Yesterday",
    type: "deployments",
    unread: false,
    initials: "AL",
  },
  {
    id: "6",
    title: "Payment method updated",
    description: "Primary billing card was changed by finance.",
    time: "11:30 AM",
    day: "Yesterday",
    type: "billing",
    unread: false,
    initials: "JD",
  },
]

const TYPE_STYLES: Record<FeedItem["type"], string> = {
  deployments: "border-blue-500/50 bg-blue-50 text-blue-700",
  billing: "border-emerald-500/50 bg-emerald-50 text-emerald-700",
  team: "border-amber-500/50 bg-amber-50 text-amber-700",
  security: "border-rose-500/50 bg-rose-50 text-rose-700",
}

const TYPE_LABELS: Record<FeedItem["type"], string> = {
  deployments: "Deployments",
  billing: "Billing",
  team: "Team",
  security: "Security",
}

const groupByDay = (items: FeedItem[]) => {
  return items.reduce<Record<string, FeedItem[]>>((acc, item) => {
    if (!acc[item.day]) {
      acc[item.day] = []
    }
    acc[item.day].push(item)
    return acc
  }, {})
}

function ActivityGroup({
  items,
  onMarkRead,
}: {
  items: FeedItem[]
  onMarkRead: (id: string) => void
}) {
  const grouped = groupByDay(items)

  return (
    <div className="space-y-6">
      {Object.entries(grouped).map(([day, dayItems], index) => (
        <div key={day} className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold">{day}</p>
            <Badge variant="outline" className="text-muted-foreground">
              {dayItems.length} updates
            </Badge>
          </div>
          <div className="space-y-4">
            {dayItems.map((item) => (
              <div key={item.id} className="flex gap-4">
                <Avatar className="h-10 w-10">
                  {item.avatar ? (
                    <AvatarImage src={item.avatar} alt={item.initials} />
                  ) : (
                    <AvatarFallback>{item.initials}</AvatarFallback>
                  )}
                </Avatar>
                <div className="flex-1 space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="font-semibold">{item.title}</p>
                    <Badge variant="outline" className={TYPE_STYLES[item.type]}>
                      {TYPE_LABELS[item.type]}
                    </Badge>
                    {item.unread ? (
                      <Badge variant="secondary">Unread</Badge>
                    ) : null}
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 text-xs">
                    <span className="text-muted-foreground">{item.time}</span>
                    {item.unread ? (
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => onMarkRead(item.id)}
                      >
                        Mark read
                      </Button>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {index < Object.entries(grouped).length - 1 ? <Separator /> : null}
        </div>
      ))}
    </div>
  )
}

export default function ActivityFeed() {
  const [items, setItems] = React.useState(FEED_ITEMS)
  const [activeTab, setActiveTab] = React.useState("all")

  const filteredItems =
    activeTab === "all"
      ? items
      : items.filter((item) => item.type === activeTab)

  const markAllRead = () => {
    setItems((prev) => prev.map((item) => ({ ...item, unread: false })))
  }

  const markRead = (id: string) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, unread: false } : item))
    )
  }

  const unreadCount = items.filter((item) => item.unread).length

  return (
    <div className="mx-auto max-w-5xl p-6">
      <Card className="bg-card border p-8">
        <div className="flex flex-wrap items-start justify-between gap-4 border-b pb-6">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
              <Activity className="text-primary h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                Activity Feed
              </h2>
              <p className="text-muted-foreground mt-1 text-sm">
                Monitor updates across deployments, billing, and security.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Button variant="outline">
              <Bell className="mr-2 h-4 w-4" />
              Manage alerts
            </Button>
            <Button onClick={markAllRead}>
              <CheckCircle2 className="mr-2 h-4 w-4" />
              Mark all read ({unreadCount})
            </Button>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-6">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="deployments">Deployments</TabsTrigger>
            <TabsTrigger value="billing">Billing</TabsTrigger>
            <TabsTrigger value="team">Team</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <ActivityGroup items={filteredItems} onMarkRead={markRead} />
          </TabsContent>
          <TabsContent value="deployments">
            <ActivityGroup items={filteredItems} onMarkRead={markRead} />
          </TabsContent>
          <TabsContent value="billing">
            <ActivityGroup items={filteredItems} onMarkRead={markRead} />
          </TabsContent>
          <TabsContent value="team">
            <ActivityGroup items={filteredItems} onMarkRead={markRead} />
          </TabsContent>
          <TabsContent value="security">
            <ActivityGroup items={filteredItems} onMarkRead={markRead} />
          </TabsContent>
        </Tabs>

        <div className="bg-muted/40 mt-6 flex items-center gap-3 rounded-lg border p-4">
          <Shield className="text-primary h-5 w-5" />
          <p className="text-muted-foreground text-sm">
            Activity is retained for 90 days. Export logs for compliance.
          </p>
        </div>
      </Card>
    </div>
  )
}
