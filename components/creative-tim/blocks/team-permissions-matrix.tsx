"use client"

import * as React from "react"
import { Check, Minus, Plus, ShieldCheck, X } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Switch } from "@/components/ui/switch"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const PERMISSIONS = [
  { id: "projects", label: "Projects" },
  { id: "deployments", label: "Deployments" },
  { id: "billing", label: "Billing" },
  { id: "api", label: "API Keys" },
  { id: "team", label: "Team" },
] as const

type PermissionId = (typeof PERMISSIONS)[number]["id"]

type AccessLevel = "full" | "limited" | "none"

type Role = {
  id: string
  name: string
  description: string
  badge: "System" | "Custom"
  permissions: Record<PermissionId, AccessLevel>
}

const ROLES: Role[] = [
  {
    id: "owner",
    name: "Owner",
    description: "Full access to company data and billing.",
    badge: "System",
    permissions: {
      projects: "full",
      deployments: "full",
      billing: "full",
      api: "full",
      team: "full",
    },
  },
  {
    id: "admin",
    name: "Admin",
    description: "Manage products, releases, and team settings.",
    badge: "System",
    permissions: {
      projects: "full",
      deployments: "full",
      billing: "limited",
      api: "full",
      team: "full",
    },
  },
  {
    id: "developer",
    name: "Developer",
    description: "Build and deploy with scoped access.",
    badge: "Custom",
    permissions: {
      projects: "full",
      deployments: "full",
      billing: "none",
      api: "limited",
      team: "limited",
    },
  },
  {
    id: "viewer",
    name: "Viewer",
    description: "Read-only access for stakeholders.",
    badge: "System",
    permissions: {
      projects: "limited",
      deployments: "limited",
      billing: "none",
      api: "none",
      team: "none",
    },
  },
]

const ACCESS_STYLES: Record<
  AccessLevel,
  { icon: typeof Check; className: string }
> = {
  full: { icon: Check, className: "text-emerald-500" },
  limited: { icon: Minus, className: "text-amber-500" },
  none: { icon: X, className: "text-muted-foreground" },
}

const BADGE_STYLES: Record<Role["badge"], string> = {
  System: "border-blue-500/50 bg-blue-50 text-blue-700",
  Custom: "border-amber-500/50 bg-amber-50 text-amber-700",
}

export default function TeamPermissionsMatrix() {
  const [roles, setRoles] = React.useState<Role[]>(ROLES)
  const [saved, setSaved] = React.useState(false)
  const [billingApproval, setBillingApproval] = React.useState(true)
  const [roleApproval, setRoleApproval] = React.useState(false)
  const [mfaEnforced, setMfaEnforced] = React.useState(true)
  const [sessionTimeout, setSessionTimeout] = React.useState(false)

  const cycleAccess = (access: AccessLevel) => {
    const order: AccessLevel[] = ["none", "limited", "full"]
    const index = order.indexOf(access)
    return order[(index + 1) % order.length]
  }

  const updatePermission = (roleId: string, permission: PermissionId) => {
    setRoles((prev) =>
      prev.map((role) =>
        role.id === roleId
          ? {
              ...role,
              permissions: {
                ...role.permissions,
                [permission]: cycleAccess(role.permissions[permission]),
              },
            }
          : role
      )
    )
  }

  const applyBulk = (level: AccessLevel) => {
    setRoles((prev) =>
      prev.map((role) => ({
        ...role,
        permissions: PERMISSIONS.reduce(
          (acc, permission) => ({
            ...acc,
            [permission.id]: level,
          }),
          {} as Record<PermissionId, AccessLevel>
        ),
      }))
    )
  }

  const resetDefaults = () => {
    setRoles(ROLES)
  }

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 1500)
  }

  return (
    <div className="mx-auto max-w-6xl p-6">
      <Card className="bg-card border p-8">
        <div className="flex flex-wrap items-start justify-between gap-4 border-b pb-6">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
              <ShieldCheck className="text-primary h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                Team Permissions Matrix
              </h2>
              <p className="text-muted-foreground mt-1 text-sm">
                Define role access across billing, projects, and security.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Button variant="outline">Export Roles</Button>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Role
            </Button>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <div className="text-muted-foreground flex flex-wrap items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-emerald-500" />
              Full access
            </div>
            <div className="flex items-center gap-2">
              <Minus className="h-4 w-4 text-amber-500" />
              Limited
            </div>
            <div className="flex items-center gap-2">
              <X className="text-muted-foreground h-4 w-4" />
              No access
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Bulk actions</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => applyBulk("full")}>
                  Grant all access
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => applyBulk("limited")}>
                  Set all to limited
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => applyBulk("none")}>
                  Revoke all access
                </DropdownMenuItem>
                <DropdownMenuItem onClick={resetDefaults}>
                  Reset defaults
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="outline" onClick={handleSave}>
              {saved ? "Saved" : "Save Changes"}
            </Button>
          </div>
        </div>

        <div className="mt-4 rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[240px]">Role</TableHead>
                {PERMISSIONS.map((permission) => (
                  <TableHead key={permission.id} className="text-center">
                    {permission.label}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {roles.map((role) => (
                <TableRow key={role.id}>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <p className="font-semibold">{role.name}</p>
                        <Badge
                          variant="outline"
                          className={BADGE_STYLES[role.badge]}
                        >
                          {role.badge}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground text-xs">
                        {role.description}
                      </p>
                    </div>
                  </TableCell>
                  {PERMISSIONS.map((permission) => {
                    const access = role.permissions[permission.id]
                    const AccessIcon = ACCESS_STYLES[access].icon
                    return (
                      <TableCell
                        key={`${role.id}-${permission.id}`}
                        className="text-center"
                      >
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() =>
                            updatePermission(role.id, permission.id)
                          }
                        >
                          <AccessIcon
                            className={`h-4 w-4 ${ACCESS_STYLES[access].className}`}
                          />
                          <span className="sr-only">
                            {role.name} {permission.label}: {access}
                          </span>
                        </Button>
                      </TableCell>
                    )
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Card className="bg-muted/30 border p-4">
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-lg">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold">Approval rules</h3>
                <p className="text-muted-foreground text-sm">
                  Require confirmation for high-impact changes.
                </p>
              </div>
            </div>
            <div className="mt-4 space-y-3">
              <div className="bg-background flex items-center justify-between rounded-lg border p-3">
                <div>
                  <p className="text-sm font-medium">Billing changes</p>
                  <p className="text-muted-foreground text-xs">
                    Owner approval required.
                  </p>
                </div>
                <Switch
                  id="billing-approval"
                  checked={billingApproval}
                  onCheckedChange={setBillingApproval}
                />
              </div>
              <div className="bg-background flex items-center justify-between rounded-lg border p-3">
                <div>
                  <p className="text-sm font-medium">Role edits</p>
                  <p className="text-muted-foreground text-xs">
                    Two admins must approve.
                  </p>
                </div>
                <Switch
                  id="role-approval"
                  checked={roleApproval}
                  onCheckedChange={setRoleApproval}
                />
              </div>
            </div>
          </Card>

          <Card className="bg-muted/30 border p-4">
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-lg">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold">Security policies</h3>
                <p className="text-muted-foreground text-sm">
                  Apply workspace-wide access controls.
                </p>
              </div>
            </div>
            <div className="mt-4 space-y-3">
              <div className="bg-background flex items-center justify-between rounded-lg border p-3">
                <div>
                  <p className="text-sm font-medium">Enforce MFA</p>
                  <p className="text-muted-foreground text-xs">
                    Required for admins and owners.
                  </p>
                </div>
                <Switch
                  id="mfa-enforced"
                  checked={mfaEnforced}
                  onCheckedChange={setMfaEnforced}
                />
              </div>
              <div className="bg-background flex items-center justify-between rounded-lg border p-3">
                <div>
                  <p className="text-sm font-medium">Session timeout</p>
                  <p className="text-muted-foreground text-xs">
                    Sign out after 12 hours.
                  </p>
                </div>
                <Switch
                  id="session-timeout"
                  checked={sessionTimeout}
                  onCheckedChange={setSessionTimeout}
                />
              </div>
            </div>
          </Card>
        </div>
      </Card>
    </div>
  )
}
