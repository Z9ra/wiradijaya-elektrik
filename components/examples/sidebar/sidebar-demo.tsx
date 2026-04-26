import { Archive, FileText, Mail, Pin, Send, Trash2 } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

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

export default function SidebarDemo() {
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
        </nav>
      </CardContent>
    </Card>
  )
}
