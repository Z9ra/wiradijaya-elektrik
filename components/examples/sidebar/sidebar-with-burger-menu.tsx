"use client"

import * as React from "react"
import {
  Archive,
  ChevronRight,
  FileText,
  Folder,
  LogOut,
  Mail,
  Menu,
  MoreHorizontal,
  Pin,
  Search,
  Send,
  Sparkles,
  Trash2,
  UserX,
  X,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

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

export default function SidebarWithBurgerMenu() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu className="h-4 w-4" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[280px] p-0 sm:w-[280px]">
        <SheetClose className="ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-2 right-2 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:pointer-events-none">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </SheetClose>

        <div className="flex h-full flex-col">
          <div className="flex-1 overflow-auto">
            <div className="flex items-center gap-2 px-3 pt-3 pb-0">
              <Avatar className="h-7 w-7">
                <AvatarImage
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/ct-assets/logo.png"
                  alt="brand"
                />
                <AvatarFallback>CT</AvatarFallback>
              </Avatar>
              <h6 className="font-semibold">Creative Tim UI</h6>
            </div>

            <div className="p-3">
              <div className="relative">
                <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
                <Input
                  type="search"
                  placeholder="Search here..."
                  className="pl-9"
                />
              </div>

              <nav className="mt-3 flex flex-col gap-1">
                {Links.map(({ icon: Icon, title, href, badge }) => (
                  <a
                    key={title}
                    href={href}
                    className="hover:bg-muted flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors"
                  >
                    <Icon className="h-[18px] w-[18px]" />
                    <span className="flex-1">{title}</span>
                    {badge && (
                      <Badge variant="secondary" className="ml-auto">
                        {badge}
                      </Badge>
                    )}
                  </a>
                ))}

                <Separator className="my-3" />

                <Collapsible open={isOpen} onOpenChange={setIsOpen}>
                  <CollapsibleTrigger className="hover:bg-muted flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors">
                    <MoreHorizontal className="h-[18px] w-[18px]" />
                    <span className="flex-1">More</span>
                    <ChevronRight
                      className={`h-4 w-4 transition-transform ${isOpen ? "rotate-90" : ""}`}
                    />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="ml-3 flex flex-col gap-1 border-l pt-1 pl-3">
                      <a
                        href="#"
                        className="hover:bg-muted flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors"
                      >
                        <Folder className="h-[18px] w-[18px]" />
                        <span>Spam</span>
                      </a>
                      <a
                        href="#"
                        className="hover:bg-muted flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors"
                      >
                        <UserX className="h-[18px] w-[18px]" />
                        <span>Blocked</span>
                      </a>
                      <a
                        href="#"
                        className="hover:bg-muted flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors"
                      >
                        <Folder className="h-[18px] w-[18px]" />
                        <span>Important</span>
                      </a>
                    </div>
                  </CollapsibleContent>
                </Collapsible>

                <Separator className="my-3" />

                <a
                  href="#"
                  className="text-destructive hover:bg-destructive/10 flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors"
                >
                  <LogOut className="h-[18px] w-[18px]" />
                  <span>Logout</span>
                </a>
              </nav>
            </div>
          </div>

          <div className="mt-auto">
            <Card className="bg-primary m-3 border-none shadow-none">
              <CardHeader className="p-3">
                <Sparkles className="text-primary-foreground h-10 w-10" />
              </CardHeader>
              <CardContent className="p-3 pt-0">
                <h6 className="text-primary-foreground mb-1 text-base font-semibold">
                  Upgrade to PRO
                </h6>
                <p className="text-primary-foreground/80 text-sm">
                  Upgrade to Creative Tim UI PRO and get even more components,
                  plugins, advanced features and premium.
                </p>
              </CardContent>
              <CardFooter className="p-3 pt-0">
                <Button
                  size="sm"
                  variant="secondary"
                  className="w-full"
                  asChild
                >
                  <a href="#">Upgrade Now</a>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
