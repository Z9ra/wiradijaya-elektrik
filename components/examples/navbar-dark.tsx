"use client"

import * as React from "react"
import { Archive, FileText, Menu, User, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible"
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
            className="flex items-center gap-x-2 p-1 text-sm text-white transition-colors hover:text-white/80"
          >
            <Icon className="h-4 w-4" />
            {title}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default function NavbarDark() {
  const [openNav, setOpenNav] = React.useState(false)

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setOpenNav(false)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <nav className="mx-auto w-full max-w-screen-xl rounded-lg border border-neutral-800 bg-black px-4 py-2 shadow-sm">
      <div className="flex items-center text-white">
        <a href="#" className="mr-2 ml-2 block py-1 text-sm font-semibold">
          Creative Tim UI
        </a>
        <Separator
          orientation="vertical"
          className="mr-1.5 ml-1 hidden h-5 bg-white/25 lg:block"
        />
        <div className="hidden lg:block">
          <NavList />
        </div>
        <Button
          size="sm"
          variant="outline"
          className="hidden border-white bg-white text-black hover:bg-white/90 hover:text-black lg:ml-auto lg:inline-flex"
        >
          Sign In
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setOpenNav(!openNav)}
          className="ml-auto text-white hover:bg-white/10 lg:hidden"
        >
          {openNav ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      </div>
      <Collapsible open={openNav}>
        <CollapsibleContent>
          <NavList />
          <Button
            size="sm"
            variant="outline"
            className="mt-4 w-full border-white bg-white text-black hover:bg-white/90 hover:text-black"
          >
            Sign In
          </Button>
        </CollapsibleContent>
      </Collapsible>
    </nav>
  )
}
