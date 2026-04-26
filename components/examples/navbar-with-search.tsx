"use client"

import * as React from "react"
import { Archive, FileText, Menu, Search, User, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

const LINKS = [
  {
    icon: FileText,
    title: "Pages",
    href: "#",
  },
  {
    icon: User,
    title: "Account",
    href: "#",
  },
  {
    icon: Archive,
    title: "Blocks",
    href: "#",
  },
  {
    icon: Archive,
    title: "Docs",
    href: "#",
  },
]

function NavList() {
  return (
    <ul className="mt-4 flex flex-col gap-x-3 gap-y-1.5 lg:mt-0 lg:flex-row lg:items-center">
      {LINKS.map(({ icon: Icon, title, href }) => (
        <li key={title}>
          <a
            href={href}
            className="hover:text-primary flex items-center gap-x-2 p-1 text-sm transition-colors"
          >
            <Icon className="h-4 w-4" />
            {title}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default function NavbarWithSearch() {
  const [openNav, setOpenNav] = React.useState(false)

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setOpenNav(false)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <nav className="bg-card mx-auto w-full max-w-screen-xl rounded-lg border px-4 py-2 shadow-sm">
      <div className="flex items-center">
        <a href="#" className="mr-2 ml-2 block py-1 text-sm font-semibold">
          Creative Tim UI
        </a>
        <Separator
          orientation="vertical"
          className="mr-1.5 ml-1 hidden h-5 lg:block"
        />
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="relative ml-auto w-40">
          <Search className="text-muted-foreground absolute top-1/2 left-2 h-4 w-4 -translate-y-1/2" />
          <Input
            type="search"
            placeholder="Search here..."
            className="h-8 pl-8 text-sm"
          />
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setOpenNav(!openNav)}
          className="ml-1 lg:hidden"
        >
          {openNav ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      </div>
      <Collapsible open={openNav}>
        <CollapsibleContent>
          <NavList />
        </CollapsibleContent>
      </Collapsible>
    </nav>
  )
}
