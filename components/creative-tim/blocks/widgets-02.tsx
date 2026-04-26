"use client"

import * as React from "react"
import {
  Bell,
  Box,
  Briefcase,
  Building2,
  Calendar,
  FolderKanban,
  Layers3,
  Mail,
  MoreVertical,
  Newspaper,
  Settings,
  ShoppingBag,
  User,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"

export default function Widgets02() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {/* Platform Settings Card */}
      <Card className="transition-shadow hover:shadow-lg">
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/20">
                <Settings className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold">Platform Settings</h3>
                <p className="text-muted-foreground text-sm">
                  Manage your preferences
                </p>
              </div>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  Edit Settings
                </DropdownMenuItem>
                <DropdownMenuItem>Reset to Default</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-destructive">
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="bg-muted mt-0.5 flex h-9 w-9 items-center justify-center rounded-md">
                  <Mail className="text-muted-foreground h-4 w-4" />
                </div>
                <div className="flex-1">
                  <Label htmlFor="email-switch" className="font-medium">
                    Email Notifications
                  </Label>
                  <p className="text-muted-foreground text-sm">
                    When someone follows you
                  </p>
                </div>
              </div>
              <Switch id="email-switch" defaultChecked />
            </div>

            <Separator />

            <div className="flex items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="bg-muted mt-0.5 flex h-9 w-9 items-center justify-center rounded-md">
                  <Bell className="text-muted-foreground h-4 w-4" />
                </div>
                <div className="flex-1">
                  <Label htmlFor="notification-switch" className="font-medium">
                    Push Notifications
                  </Label>
                  <p className="text-muted-foreground text-sm">
                    When someone answers your post
                  </p>
                </div>
              </div>
              <Switch id="notification-switch" />
            </div>

            <Separator />

            <div className="flex items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="bg-muted mt-0.5 flex h-9 w-9 items-center justify-center rounded-md">
                  <Newspaper className="text-muted-foreground h-4 w-4" />
                </div>
                <div className="flex-1">
                  <Label htmlFor="newsletter-switch" className="font-medium">
                    Newsletter
                  </Label>
                  <p className="text-muted-foreground text-sm">
                    Subscribe to weekly updates
                  </p>
                </div>
              </div>
              <Switch id="newsletter-switch" />
            </div>
          </div>

          <Button className="w-full">
            <Settings className="mr-2 h-4 w-4" />
            Save Settings
          </Button>
        </CardContent>
      </Card>

      {/* User Information Card */}
      <Card className="transition-shadow hover:shadow-lg">
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/20">
                <User className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="font-semibold">Client Information</h3>
                <p className="text-muted-foreground text-sm">Account details</p>
              </div>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  View Profile
                </DropdownMenuItem>
                <DropdownMenuItem>Edit Information</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-destructive">
                  Remove Client
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="bg-muted flex h-8 w-8 items-center justify-center rounded-md">
              <Building2 className="text-muted-foreground h-4 w-4" />
            </div>
            <div className="flex-1">
              <p className="text-muted-foreground text-sm">Company Name</p>
              <p className="font-semibold">GreatVibes Inc.</p>
            </div>
          </div>

          <Separator />

          <div className="flex items-center gap-3">
            <div className="bg-muted flex h-8 w-8 items-center justify-center rounded-md">
              <User className="text-muted-foreground h-4 w-4" />
            </div>
            <div className="flex-1">
              <p className="text-muted-foreground text-sm">Primary Contact</p>
              <p className="font-semibold">Emma Roberts, CEO</p>
            </div>
          </div>

          <Separator />

          <div className="flex items-center gap-3">
            <div className="bg-muted flex h-8 w-8 items-center justify-center rounded-md">
              <Briefcase className="text-muted-foreground h-4 w-4" />
            </div>
            <div className="flex-1">
              <p className="text-muted-foreground text-sm">Industry</p>
              <p className="font-semibold">Software and IT Services</p>
            </div>
          </div>

          <Separator />

          <div className="flex items-center gap-3">
            <div className="bg-muted flex h-8 w-8 items-center justify-center rounded-md">
              <Calendar className="text-muted-foreground h-4 w-4" />
            </div>
            <div className="flex-1">
              <p className="text-muted-foreground text-sm">Customer Since</p>
              <p className="font-semibold">January 2018</p>
            </div>
          </div>

          <Separator />

          <div className="flex items-center gap-3">
            <div className="bg-muted flex h-8 w-8 items-center justify-center rounded-md">
              <FolderKanban className="text-muted-foreground h-4 w-4" />
            </div>
            <div className="flex-1">
              <p className="text-muted-foreground text-sm">Latest Project</p>
              <p className="font-semibold">Resource Planning</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Campaign Cards */}
      <div className="flex flex-col gap-6">
        <Card className="transition-shadow hover:shadow-lg">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/20">
                  <Layers3 className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold">Cyber Week</h3>
                    <Badge
                      variant="secondary"
                      className="bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                    >
                      Active
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Marketing Campaign
                  </p>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex items-center justify-between">
              <p className="text-muted-foreground text-sm">Team Members</p>
              <div className="flex -space-x-2">
                <Avatar className="border-background h-8 w-8 border-2 transition-transform hover:z-10 hover:scale-110">
                  <AvatarImage
                    src="https://v3.material-tailwind.com/woman-profile-1.jpg"
                    alt="Team member"
                  />
                  <AvatarFallback className="text-xs">JD</AvatarFallback>
                </Avatar>
                <Avatar className="border-background h-8 w-8 border-2 transition-transform hover:z-10 hover:scale-110">
                  <AvatarImage
                    src="https://v3.material-tailwind.com/woman-profile-2.jpg"
                    alt="Team member"
                  />
                  <AvatarFallback className="text-xs">SM</AvatarFallback>
                </Avatar>
                <Avatar className="border-background h-8 w-8 border-2 transition-transform hover:z-10 hover:scale-110">
                  <AvatarImage
                    src="https://v3.material-tailwind.com/man-profile-1.jpg"
                    alt="Team member"
                  />
                  <AvatarFallback className="text-xs">AK</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="transition-shadow hover:shadow-lg">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-900/20">
                  <ShoppingBag className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold">Black Friday</h3>
                    <Badge
                      variant="secondary"
                      className="bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400"
                    >
                      Planning
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Sales Campaign
                  </p>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex items-center justify-between">
              <p className="text-muted-foreground text-sm">Team Members</p>
              <div className="flex -space-x-2">
                <Avatar className="border-background h-8 w-8 border-2 transition-transform hover:z-10 hover:scale-110">
                  <AvatarImage
                    src="https://v3.material-tailwind.com/man-profile-2.jpg"
                    alt="Team member"
                  />
                  <AvatarFallback className="text-xs">MJ</AvatarFallback>
                </Avatar>
                <Avatar className="border-background h-8 w-8 border-2 transition-transform hover:z-10 hover:scale-110">
                  <AvatarImage
                    src="https://v3.material-tailwind.com/woman-profile-3.jpg"
                    alt="Team member"
                  />
                  <AvatarFallback className="text-xs">LC</AvatarFallback>
                </Avatar>
                <Avatar className="border-background h-8 w-8 border-2 transition-transform hover:z-10 hover:scale-110">
                  <AvatarImage
                    src="https://v3.material-tailwind.com/woman-profile-2.jpg"
                    alt="Team member"
                  />
                  <AvatarFallback className="text-xs">SM</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="transition-shadow hover:shadow-lg">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900/20">
                  <Box className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold">New Template</h3>
                    <Badge
                      variant="secondary"
                      className="bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400"
                    >
                      In Review
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Design Project
                  </p>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex items-center justify-between">
              <p className="text-muted-foreground text-sm">Team Members</p>
              <div className="flex -space-x-2">
                <Avatar className="border-background h-8 w-8 border-2 transition-transform hover:z-10 hover:scale-110">
                  <AvatarImage
                    src="https://v3.material-tailwind.com/man-profile-1.jpg"
                    alt="Team member"
                  />
                  <AvatarFallback className="text-xs">AK</AvatarFallback>
                </Avatar>
                <Avatar className="border-background h-8 w-8 border-2 transition-transform hover:z-10 hover:scale-110">
                  <AvatarImage
                    src="https://v3.material-tailwind.com/man-profile-2.jpg"
                    alt="Team member"
                  />
                  <AvatarFallback className="text-xs">MJ</AvatarFallback>
                </Avatar>
                <Avatar className="border-background h-8 w-8 border-2 transition-transform hover:z-10 hover:scale-110">
                  <AvatarImage
                    src="https://v3.material-tailwind.com/woman-profile-3.jpg"
                    alt="Team member"
                  />
                  <AvatarFallback className="text-xs">LC</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
