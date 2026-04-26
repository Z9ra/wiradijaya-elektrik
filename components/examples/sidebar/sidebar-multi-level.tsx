"use client"

import * as React from "react"
import {
  Archive,
  ChevronRight,
  FileText,
  Folder,
  Mail,
  MoreHorizontal,
  Pin,
  Send,
  Trash2,
  UserX,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

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

export default function SidebarMultiLevel() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Card className="w-full max-w-[280px]">
      <CardHeader className="px-4 pt-3 pb-0">
        <h6 className="font-semibold">Creative Tim UI</h6>
      </CardHeader>
      <CardContent className="p-3">
        <nav className="flex flex-col gap-1">
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
        </nav>
      </CardContent>
    </Card>
  )
}
