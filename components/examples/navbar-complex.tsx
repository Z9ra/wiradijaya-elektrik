"use client"

import * as React from "react"
import {
  Archive,
  ChevronDown,
  FileText,
  HelpCircle,
  LogOut,
  Menu,
  Rocket,
  Settings,
  User,
  X,
} from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Separator } from "@/components/ui/separator"

const LINKS = [
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

const PAGES_ITEMS = [
  {
    title: "Components",
    description:
      "Learn how to use Creative Tim UI, packed with rich components and widgets.",
  },
  {
    title: "Blocks",
    description:
      "Learn how to use Creative Tim UI, packed with rich components for React.",
  },
  {
    title: "Creative Tim UI PRO",
    description:
      "A complete set of UI Elements for building faster websites in less time.",
  },
]

function NavList() {
  return (
    <>
      {LINKS.map(({ icon: Icon, title, href }) => (
        <a
          key={title}
          href={href}
          className="hover:bg-accent hover:text-accent-foreground flex items-center gap-2 rounded-md px-3 py-2 text-sm"
        >
          <Icon className="h-4 w-4" />
          {title}
        </a>
      ))}
    </>
  )
}

function ProfileMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="border-primary h-8 w-8 cursor-pointer border-2">
          <AvatarImage
            src="https://images.unsplash.com/photo-1716662318479-a9c0f1cd1a0e?auto=format&fit=crop&q=80&w=400&h=400"
            alt="Profile"
          />
          <AvatarFallback>CT</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <User className="mr-2 h-4 w-4" />
          My Profile
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings className="mr-2 h-4 w-4" />
          Edit Profile
        </DropdownMenuItem>
        <DropdownMenuItem>
          <HelpCircle className="mr-2 h-4 w-4" />
          Support
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-destructive focus:text-destructive">
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function MenuItem({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="flex flex-col items-start p-2">
      <p className="text-sm font-semibold">{title}</p>
      <p className="text-muted-foreground text-xs">{description}</p>
    </div>
  )
}

export default function NavbarComplex() {
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
          className="mx-1 hidden h-5 lg:block"
        />
        <div className="hidden lg:flex lg:items-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="h-auto px-3 py-2">
                  <FileText className="mr-2 h-4 w-4" />
                  Pages
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[600px] grid-cols-5 gap-1 p-2">
                    <Card className="bg-primary text-primary-foreground col-span-2 flex items-center justify-center p-4">
                      <div className="text-center">
                        <Rocket className="mx-auto h-12 w-12" />
                        <h6 className="mt-4 text-sm font-semibold">
                          Creative Tim UI
                        </h6>
                      </div>
                    </Card>
                    <div className="col-span-3 space-y-1">
                      {PAGES_ITEMS.map((item) => (
                        <MenuItem key={item.title} {...item} />
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <NavList />
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setOpenNav(!openNav)}
          className="mr-2 ml-auto lg:hidden"
        >
          {openNav ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
        <div className="hidden lg:ml-auto lg:block">
          <ProfileMenu />
        </div>
        <div className="lg:hidden">
          <ProfileMenu />
        </div>
      </div>
      <Collapsible open={openNav}>
        <CollapsibleContent>
          <Accordion type="single" collapsible className="mt-2">
            <AccordionItem value="pages" className="border-none">
              <AccordionTrigger className="p-0 hover:no-underline">
                <div className="hover:bg-accent flex w-full items-center gap-2 rounded-md px-3 py-2">
                  <FileText className="h-4 w-4" />
                  <span className="text-sm">Pages</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-0">
                <div className="space-y-1">
                  {PAGES_ITEMS.map((item) => (
                    <MenuItem key={item.title} {...item} />
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="mt-2 space-y-1">
            <NavList />
          </div>
        </CollapsibleContent>
      </Collapsible>
    </nav>
  )
}
