"use client"

import * as React from "react"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible"

const LINKS = [
  {
    title: "Pages",
    href: "#",
  },
  {
    title: "Account",
    href: "#",
  },
  {
    title: "Blocks",
    href: "#",
  },
  {
    title: "Docs",
    href: "#",
  },
]

function NavList() {
  return (
    <ul className="m-2 flex flex-col gap-x-3 gap-y-1 lg:m-0 lg:flex-row lg:items-center">
      {LINKS.map(({ title, href }) => (
        <li key={title}>
          <a
            href={href}
            className="hover:text-primary p-1 text-sm transition-colors"
          >
            {title}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default function NavbarSimple() {
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
        <a href="#" className="mx-2 block py-1 text-sm font-semibold">
          Creative Tim UI
        </a>
        <div className="hidden lg:mr-2 lg:ml-auto lg:block">
          <NavList />
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setOpenNav(!openNav)}
          className="ml-auto lg:hidden"
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
