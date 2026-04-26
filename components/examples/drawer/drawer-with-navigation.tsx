"use client"

import * as React from "react"
import {
  Archive,
  ChevronRight,
  FileText,
  Folder,
  LayoutDashboard,
  LogOut,
  Mail,
  MoreHorizontal,
  Pin,
  Search,
  Send,
  Trash2,
  UserX,
  X,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Collapse, CollapseContent } from "@/components/ui/collapse"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import {
  List,
  ListItem,
  ListItemEnd,
  ListItemStart,
} from "@/components/ui/list"
import { Separator } from "@/components/ui/separator"

const Links = [
  {
    icon: Mail,
    title: "Inbox",
    href: "#",
    badge: 14,
  },
  {
    icon: Send,
    title: "Sent",
    href: "#",
  },
  {
    icon: FileText,
    title: "Drafts",
    href: "#",
  },
  {
    icon: Pin,
    title: "Pins",
    href: "#",
  },
  {
    icon: Archive,
    title: "Archive",
    href: "#",
  },
  {
    icon: Trash2,
    title: "Trash",
    href: "#",
  },
]

export default function DrawerWithNavigation() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Drawer direction="left">
      <DrawerTrigger asChild>
        <Button>Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent className="p-0">
        <DrawerClose asChild>
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 z-10 h-8 w-8 rounded-full"
          >
            <X className="h-5 w-5" />
          </Button>
        </DrawerClose>
        <Card className="border-none shadow-none">
          <CardHeader className="m-0 flex h-max items-center gap-2 px-3 pt-4 pb-3">
            <Avatar className="h-6 w-6">
              <AvatarImage
                src="https://www.creative-tim.com/ui/apple-touch-icon-square.jpg"
                alt="brand"
              />
              <AvatarFallback>CT</AvatarFallback>
            </Avatar>
            <DrawerTitle>Creative Tim UI</DrawerTitle>
          </CardHeader>
          <CardContent className="p-3">
            <div className="relative">
              <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
              <Input
                type="search"
                placeholder="Search here..."
                className="pl-9"
              />
            </div>
            <List className="mt-3">
              {Links.map(({ icon: Icon, title, href, badge }) => (
                <ListItem key={title} asChild>
                  <a href={href} className="flex items-center">
                    <ListItemStart>
                      <Icon className="h-[18px] w-[18px]" />
                    </ListItemStart>
                    {title}
                    {badge && (
                      <ListItemEnd>
                        <Badge variant="secondary" className="text-xs">
                          {badge}
                        </Badge>
                      </ListItemEnd>
                    )}
                  </a>
                </ListItem>
              ))}
              <Separator className="my-3" />
              <ListItem
                onClick={() => setIsOpen((cur) => !cur)}
                className="cursor-pointer"
              >
                <ListItemStart>
                  <MoreHorizontal className="h-[18px] w-[18px]" />
                </ListItemStart>
                More
                <ListItemEnd>
                  <ChevronRight
                    className={cn(
                      "h-4 w-4 transition-transform",
                      isOpen && "rotate-90"
                    )}
                  />
                </ListItemEnd>
              </ListItem>
              <Collapse open={isOpen}>
                <CollapseContent>
                  <List>
                    <ListItem asChild>
                      <a href="#" className="flex items-center">
                        <ListItemStart>
                          <Folder className="h-[18px] w-[18px]" />
                        </ListItemStart>
                        Spam
                      </a>
                    </ListItem>
                    <ListItem asChild>
                      <a href="#" className="flex items-center">
                        <ListItemStart>
                          <UserX className="h-[18px] w-[18px]" />
                        </ListItemStart>
                        Blocked
                      </a>
                    </ListItem>
                    <ListItem asChild>
                      <a href="#" className="flex items-center">
                        <ListItemStart>
                          <Folder className="h-[18px] w-[18px]" />
                        </ListItemStart>
                        Important
                      </a>
                    </ListItem>
                  </List>
                </CollapseContent>
              </Collapse>
              <Separator className="my-3" />
              <ListItem
                className="text-destructive hover:bg-destructive/10 hover:text-destructive focus:bg-destructive/10 focus:text-destructive cursor-pointer"
                asChild
              >
                <a href="#" className="flex items-center">
                  <ListItemStart>
                    <LogOut className="h-[18px] w-[18px]" />
                  </ListItemStart>
                  Logout
                </a>
              </ListItem>
            </List>
          </CardContent>
          <CardFooter className="p-3">
            <Card className="bg-primary shadow-none">
              <CardHeader className="m-3">
                <LayoutDashboard className="text-primary-foreground h-10 w-10" />
              </CardHeader>
              <CardContent>
                <h6 className="mb-1 text-white">Upgrade to PRO</h6>
                <p className="text-sm text-white/80">
                  Upgrade to Creative Tim UI PRO and get even more components,
                  plugins, advanced features and premium.
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  size="sm"
                  asChild
                  className="border-white bg-white text-black hover:border-white hover:bg-white hover:text-black"
                >
                  <a href="#">Upgrade Now</a>
                </Button>
              </CardFooter>
            </Card>
          </CardFooter>
        </Card>
      </DrawerContent>
    </Drawer>
  )
}
