"use client"

import * as React from "react"
import {
  Check,
  Copy,
  KeyRound,
  Plus,
  RefreshCw,
  Search,
  ShieldCheck,
  Trash2,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

type ApiKeyStatus = "Active" | "Rotated" | "Revoked"

type ApiKeyEnvironment = "Live" | "Test"

type ApiKey = {
  id: string
  name: string
  key: string
  environment: ApiKeyEnvironment
  status: ApiKeyStatus
  scopes: string[]
  created: string
  lastUsed: string
}

const API_KEYS: ApiKey[] = [
  {
    id: "core",
    name: "Core API",
    key: "sk_live_4f2b...a91",
    environment: "Live",
    status: "Active",
    scopes: ["Read", "Write", "Billing"],
    created: "Jan 10, 2026",
    lastUsed: "2 hours ago",
  },
  {
    id: "analytics",
    name: "Analytics",
    key: "sk_live_3c7d...b18",
    environment: "Live",
    status: "Active",
    scopes: ["Read", "Events"],
    created: "Dec 2, 2025",
    lastUsed: "Yesterday",
  },
  {
    id: "staging",
    name: "Staging",
    key: "sk_test_9d12...c55",
    environment: "Test",
    status: "Rotated",
    scopes: ["Read", "Write"],
    created: "Nov 18, 2025",
    lastUsed: "5 days ago",
  },
  {
    id: "legacy",
    name: "Legacy Mobile",
    key: "sk_live_1a22...e09",
    environment: "Live",
    status: "Revoked",
    scopes: ["Read"],
    created: "Aug 12, 2025",
    lastUsed: "Never",
  },
]

const DEFAULT_SCOPES = ["Read", "Write", "Billing", "Webhooks", "Events"]

const STATUS_STYLES: Record<ApiKeyStatus, string> = {
  Active: "border-emerald-500/50 bg-emerald-50 text-emerald-700",
  Rotated: "border-amber-500/50 bg-amber-50 text-amber-700",
  Revoked: "border-rose-500/50 bg-rose-50 text-rose-700",
}

const ENVIRONMENT_STYLES: Record<ApiKeyEnvironment, string> = {
  Live: "border-blue-500/50 bg-blue-50 text-blue-700",
  Test: "border-amber-500/50 bg-amber-50 text-amber-700",
}

export default function ApiKeysManager() {
  const [keys, setKeys] = React.useState<ApiKey[]>(API_KEYS)
  const [query, setQuery] = React.useState("")
  const [keyName, setKeyName] = React.useState("")
  const [selectedScopes, setSelectedScopes] =
    React.useState<string[]>(DEFAULT_SCOPES)
  const [readOnly, setReadOnly] = React.useState(false)
  const [ipAllowlistEnabled, setIpAllowlistEnabled] = React.useState(true)
  const [allowlist, setAllowlist] = React.useState("52.12.11.0/24, 44.31.0.12")
  const [copiedKeyId, setCopiedKeyId] = React.useState<string | null>(null)
  const [previewKey, setPreviewKey] = React.useState<string | null>(null)
  const [error, setError] = React.useState("")

  React.useEffect(() => {
    if (!readOnly) return
    setSelectedScopes((prev) =>
      prev.filter((scope) => !["Write", "Billing"].includes(scope))
    )
  }, [readOnly])

  const filteredKeys = keys.filter((item) => {
    if (!query.trim()) return true
    const search = query.toLowerCase()
    return (
      item.name.toLowerCase().includes(search) ||
      item.key.toLowerCase().includes(search)
    )
  })

  const activeCount = keys.filter((item) => item.status === "Active").length
  const revokedCount = keys.filter((item) => item.status === "Revoked").length

  const generateKey = (environment: ApiKeyEnvironment) => {
    const prefix = environment === "Live" ? "sk_live_" : "sk_test_"
    const token = Math.random().toString(36).slice(2, 10)
    const suffix = Math.random().toString(36).slice(2, 6)
    return `${prefix}${token}...${suffix}`
  }

  const handleCopy = async (id: string, value: string) => {
    await navigator.clipboard.writeText(value)
    setCopiedKeyId(id)
    setTimeout(() => setCopiedKeyId(null), 1500)
  }

  const handleRotate = (id: string) => {
    setKeys((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              key: generateKey(item.environment),
              status: "Rotated",
              lastUsed: "Just now",
            }
          : item
      )
    )
  }

  const handleRevoke = (id: string) => {
    setKeys((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: "Revoked" } : item
      )
    )
  }

  const toggleScope = (scope: string) => {
    if (readOnly && ["Write", "Billing"].includes(scope)) return
    setSelectedScopes((prev) =>
      prev.includes(scope)
        ? prev.filter((item) => item !== scope)
        : [...prev, scope]
    )
  }

  const handlePreview = () => {
    const name = keyName.trim()
    if (!name) {
      setError("Please enter a key name to preview.")
      return
    }
    setError("")
    setPreviewKey(generateKey("Live"))
  }

  const handleCreate = () => {
    const name = keyName.trim()
    if (!name) {
      setError("Key name is required.")
      return
    }
    setError("")
    const now = new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
    const newKey: ApiKey = {
      id: `${name.toLowerCase().replace(/\s+/g, "-")}-${Date.now()}`,
      name,
      key: generateKey("Live"),
      environment: "Live",
      status: "Active",
      scopes: selectedScopes.length ? selectedScopes : ["Read"],
      created: now,
      lastUsed: "Never",
    }
    setKeys((prev) => [newKey, ...prev])
    setKeyName("")
    setPreviewKey(null)
  }

  return (
    <div className="mx-auto max-w-6xl p-6">
      <Card className="bg-card border p-8">
        <div className="flex flex-wrap items-start justify-between gap-4 border-b pb-6">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
              <KeyRound className="text-primary h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                API Keys Manager
              </h2>
              <p className="text-muted-foreground mt-1 text-sm">
                Secure and rotate access keys for every environment
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Button variant="outline">View API Docs</Button>
            <Button
              onClick={() => document.getElementById("key-name")?.focus()}
            >
              <Plus className="mr-2 h-4 w-4" />
              Create Key
            </Button>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <div className="relative w-full sm:w-72">
            <Input
              placeholder="Search keys..."
              className="pl-9"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Badge
              variant="outline"
              className="border-emerald-500/50 bg-emerald-50 text-emerald-700"
            >
              {activeCount} Active Keys
            </Badge>
            <Badge variant="outline" className="text-muted-foreground">
              {revokedCount} Revoked
            </Badge>
          </div>
        </div>

        <div className="mt-6 rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Key</TableHead>
                <TableHead>Scopes</TableHead>
                <TableHead>Activity</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredKeys.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <p className="font-semibold">{item.name}</p>
                        <Badge
                          variant="outline"
                          className={ENVIRONMENT_STYLES[item.environment]}
                        >
                          {item.environment}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <code className="bg-muted/50 rounded px-2 py-1 font-mono text-xs">
                          {item.key}
                        </code>
                        <Button
                          size="icon"
                          variant="ghost"
                          onClick={() => handleCopy(item.id, item.key)}
                        >
                          {copiedKeyId === item.id ? (
                            <Check className="h-4 w-4" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                          <span className="sr-only">Copy key</span>
                        </Button>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-2">
                      {item.scopes.map((scope) => (
                        <Badge key={scope} variant="secondary">
                          {scope}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="text-muted-foreground space-y-1 text-xs">
                      <div>Created: {item.created}</div>
                      <div>Last used: {item.lastUsed}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={STATUS_STYLES[item.status]}
                    >
                      {item.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex flex-wrap justify-end gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleRotate(item.id)}
                      >
                        <RefreshCw className="mr-2 h-4 w-4" />
                        Rotate
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => handleRevoke(item.id)}
                      >
                        <Trash2 className="mr-2 h-4 w-4" />
                        Revoke
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.4fr,1fr]">
          <Card className="bg-muted/30 border p-6">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold">Create a new key</h3>
                <p className="text-muted-foreground text-sm">
                  Set the key name and apply access restrictions.
                </p>
              </div>
              <Badge variant="outline" className="text-muted-foreground">
                Default scopes
              </Badge>
            </div>

            <div className="mt-4 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="key-name">Key name</Label>
                <Input
                  id="key-name"
                  placeholder="Marketing backend"
                  value={keyName}
                  onChange={(event) => setKeyName(event.target.value)}
                />
                {error ? (
                  <p className="text-xs text-rose-600">{error}</p>
                ) : null}
              </div>
              <div className="space-y-2">
                <Label>Scopes</Label>
                <div className="flex flex-wrap gap-2">
                  {DEFAULT_SCOPES.map((scope) => (
                    <Button
                      key={scope}
                      size="sm"
                      variant={
                        selectedScopes.includes(scope) ? "secondary" : "outline"
                      }
                      className={
                        readOnly && ["Write", "Billing"].includes(scope)
                          ? "cursor-not-allowed opacity-60"
                          : ""
                      }
                      onClick={() => toggleScope(scope)}
                    >
                      {scope}
                    </Button>
                  ))}
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-background flex items-center justify-between rounded-lg border p-3">
                  <div>
                    <p className="text-sm font-medium">Read-only key</p>
                    <p className="text-muted-foreground text-xs">
                      Prevent write and billing access.
                    </p>
                  </div>
                  <Switch
                    id="read-only"
                    checked={readOnly}
                    onCheckedChange={setReadOnly}
                  />
                </div>
                <div className="bg-background flex items-center justify-between rounded-lg border p-3">
                  <div>
                    <p className="text-sm font-medium">IP allowlist</p>
                    <p className="text-muted-foreground text-xs">
                      Require requests from approved IPs.
                    </p>
                  </div>
                  <Switch
                    id="ip-allowlist"
                    checked={ipAllowlistEnabled}
                    onCheckedChange={setIpAllowlistEnabled}
                  />
                </div>
                {ipAllowlistEnabled ? (
                  <div className="space-y-2">
                    <Label htmlFor="ip-allowlist-input">Allowed IPs</Label>
                    <Input
                      id="ip-allowlist-input"
                      value={allowlist}
                      onChange={(event) => setAllowlist(event.target.value)}
                      placeholder="Add comma separated IPs"
                    />
                  </div>
                ) : null}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-end gap-2">
              <Button variant="outline" onClick={handlePreview}>
                Preview
              </Button>
              <Button onClick={handleCreate}>
                <Plus className="mr-2 h-4 w-4" />
                Generate Key
              </Button>
            </div>
            {previewKey ? (
              <div className="bg-background mt-4 rounded-lg border p-3">
                <p className="text-sm font-medium">Preview key</p>
                <div className="mt-2 flex items-center gap-2">
                  <code className="bg-muted/50 rounded px-2 py-1 font-mono text-xs">
                    {previewKey}
                  </code>
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => handleCopy("preview", previewKey)}
                  >
                    {copiedKeyId === "preview" ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                    <span className="sr-only">Copy preview key</span>
                  </Button>
                </div>
              </div>
            ) : null}
          </Card>

          <Card className="bg-muted/30 border p-6">
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-lg">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Security guidance</h3>
                <p className="text-muted-foreground text-sm">
                  Keep production keys safe with automatic rotation and alerts.
                </p>
              </div>
            </div>

            <div className="mt-4 space-y-3">
              <div className="bg-background rounded-lg border p-3">
                <p className="text-sm font-medium">Rotation reminders</p>
                <p className="text-muted-foreground text-xs">
                  Notify owners after 60 days of usage.
                </p>
              </div>
              <div className="bg-background rounded-lg border p-3">
                <p className="text-sm font-medium">Key activity alerts</p>
                <p className="text-muted-foreground text-xs">
                  Get notified on unusual request spikes.
                </p>
              </div>
              <div className="bg-background rounded-lg border p-3">
                <p className="text-sm font-medium">Secret storage</p>
                <p className="text-muted-foreground text-xs">
                  Store keys in your vault and vault rotations.
                </p>
              </div>
            </div>

            <Button variant="outline" className="mt-4 w-full">
              Review Policies
            </Button>
          </Card>
        </div>
      </Card>
    </div>
  )
}
