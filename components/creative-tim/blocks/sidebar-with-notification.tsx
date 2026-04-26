"use client"

import { useState } from "react"
import {
  Bell,
  ChevronDown,
  ChevronRight,
  Headphones,
  LayoutDashboard,
  LayoutGrid,
  LogOut,
  Package,
  ShoppingCart,
  Users,
  X,
} from "lucide-react"

import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Separator } from "@/components/ui/separator"

export default function SidebarWithNotification() {
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [isDashboardOpen, setIsDashboardOpen] = useState(false)
  const [showNotification, setShowNotification] = useState(true)

  return (
    <div className="bg-background flex h-screen w-full max-w-xs flex-col overflow-y-scroll rounded-lg border shadow-sm">
      <div className="px-6 pt-6">
        <div className="mb-4 flex items-center gap-3 border-b pb-4">
          <div className="bg-muted rounded-lg p-2">
            <LayoutDashboard className="text-muted-foreground h-5 w-5" />
          </div>
          <p className="text-xl font-semibold">Creative Tim UI</p>
        </div>

        <div className="mb-4 border-b pb-4">
          <Collapsible open={isProfileOpen} onOpenChange={setIsProfileOpen}>
            <CollapsibleTrigger className="text-muted-foreground hover:text-foreground hover:bg-secondary flex w-full items-center rounded-md px-2.5 py-2 transition-colors">
              <span className="mr-2.5 grid shrink-0 place-items-center">
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src="https://v3.material-tailwind.com/woman-profile-1.jpg"
                    alt="Brooklyn Alice"
                  />
                  <AvatarFallback>BA</AvatarFallback>
                </Avatar>
              </span>
              <span className="font-medium">Brooklyn Alice</span>
              <span className="ml-auto grid shrink-0 place-items-center pl-2.5">
                {isProfileOpen ? (
                  <ChevronDown className="h-5 w-5" />
                ) : (
                  <ChevronRight className="h-5 w-5" />
                )}
              </span>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-1 space-y-1">
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground hover:bg-secondary block rounded-md px-4 py-2 text-sm font-medium transition-colors"
              >
                My Profile
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground hover:bg-secondary block rounded-md px-4 py-2 text-sm font-medium transition-colors"
              >
                Settings
              </a>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>

      <div className="flex-1 px-6 pb-6">
        <small className="text-muted-foreground mb-3 block text-xs font-bold tracking-wide uppercase">
          Navigation
        </small>
        <nav className="mb-4 space-y-0.5 border-b pb-4">
          <Collapsible open={isDashboardOpen} onOpenChange={setIsDashboardOpen}>
            <CollapsibleTrigger className="text-muted-foreground hover:text-foreground hover:bg-secondary flex w-full items-center rounded-md px-2.5 py-2 transition-colors">
              <span className="mr-2.5 grid shrink-0 place-items-center">
                <LayoutGrid className="h-5 w-5" />
              </span>
              <span className="font-medium">Dashboard</span>
              <span className="ml-auto grid shrink-0 place-items-center pl-2.5">
                {isDashboardOpen ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </span>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-1 space-y-1">
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground hover:bg-secondary block rounded-md px-2.5 py-1.5 pl-10 text-sm font-medium transition-colors"
              >
                Analytics
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground hover:bg-secondary block rounded-md px-2.5 py-1.5 pl-10 text-sm font-medium transition-colors"
              >
                Sales
              </a>
            </CollapsibleContent>
          </Collapsible>
          <a
            href="#"
            className="text-muted-foreground hover:text-foreground hover:bg-secondary flex items-center rounded-md px-2.5 py-2 transition-colors"
          >
            <span className="mr-2.5 grid shrink-0 place-items-center">
              <Package className="h-5 w-5" />
            </span>
            <span className="font-medium">Products</span>
          </a>
          <a
            href="#"
            className="text-muted-foreground hover:text-foreground hover:bg-secondary flex items-center rounded-md px-2.5 py-2 transition-colors"
          >
            <span className="mr-2.5 grid shrink-0 place-items-center">
              <ShoppingCart className="h-5 w-5" />
            </span>
            <span className="font-medium">Orders</span>
          </a>
          <a
            href="#"
            className="text-muted-foreground hover:text-foreground hover:bg-secondary flex items-center rounded-md px-2.5 py-2 transition-colors"
          >
            <span className="mr-2.5 grid shrink-0 place-items-center">
              <Users className="h-5 w-5" />
            </span>
            <span className="font-medium">Customers</span>
          </a>
        </nav>

        <small className="text-muted-foreground mb-3 block text-xs font-bold tracking-wide uppercase">
          Support
        </small>
        <nav className="space-y-0.5">
          <a
            href="#"
            className="text-muted-foreground hover:text-foreground hover:bg-secondary flex items-center rounded-md px-2.5 py-2 transition-colors"
          >
            <span className="mr-2.5 grid shrink-0 place-items-center">
              <Headphones className="h-5 w-5" />
            </span>
            <span className="font-medium">Help and Support</span>
          </a>
          <a
            href="#"
            className="text-muted-foreground hover:text-foreground hover:bg-secondary flex items-center rounded-md px-2.5 py-2 transition-colors"
          >
            <span className="mr-2.5 grid shrink-0 place-items-center">
              <LogOut className="h-5 w-5" />
            </span>
            <span className="font-medium">Sign Out</span>
          </a>
        </nav>
      </div>

      {showNotification && (
        <div className="mt-auto p-6 pt-0">
          <Separator className="mb-6" />
          <Alert className="relative border-transparent bg-green-500/10 text-green-500">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 h-6 w-6 hover:bg-green-500/20"
              onClick={() => setShowNotification(false)}
            >
              <X className="h-3.5 w-3.5" />
            </Button>
            <div className="pr-6">
              <div className="mb-3 flex items-center gap-2">
                <div className="rounded-lg bg-green-500/20 p-1.5">
                  <Bell className="h-3.5 w-3.5" />
                </div>
                <AlertDescription className="m-0 font-semibold">
                  New Version Available
                </AlertDescription>
              </div>
              <AlertDescription className="mb-4 text-sm">
                Update your app and enjoy the new features and improvements.
              </AlertDescription>
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-auto p-0 text-sm font-semibold text-red-500 hover:bg-red-500/10 hover:text-red-600"
                  onClick={() => setShowNotification(false)}
                >
                  Dismiss
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-auto p-0 text-sm font-semibold text-green-500 hover:bg-green-500/10 hover:text-green-600"
                >
                  Upgrade Now
                </Button>
              </div>
            </div>
          </Alert>
          <Separator className="my-6" />
          <small className="text-muted-foreground block text-center text-sm">
            Creative Tim UI v3.0.0
          </small>
        </div>
      )}
    </div>
  )
}
