"use client"

import * as React from "react"
import {
  Archive,
  FileText,
  Globe,
  Grid3x3,
  Hash,
  HelpCircle,
  LogOut,
  Menu,
  Newspaper,
  Phone,
  Settings,
  Sun,
  User,
  Users,
  X,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
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

const MEGA_MENU_ITEMS = [
  {
    title: "Products",
    description: "Find the perfect solution for your needs.",
    icon: Grid3x3,
  },
  {
    title: "About Us",
    description: "Meet and learn about our dedication",
    icon: Users,
  },
  {
    title: "Blog",
    description: "Find the perfect solution for your needs.",
    icon: Newspaper,
  },
  {
    title: "Services",
    description: "Learn how we can help you achieve your goals.",
    icon: Sun,
  },
  {
    title: "Support",
    description: "Reach out to us for assistance or inquiries",
    icon: Globe,
  },
  {
    title: "Contact",
    description: "Find the perfect solution for your needs.",
    icon: Phone,
  },
  {
    title: "News",
    description: "Read insightful articles, tips, and expert opinions.",
    icon: Newspaper,
  },
  {
    title: "Products",
    description: "Find the perfect solution for your needs.",
    icon: Archive,
  },
  {
    title: "Special Offers",
    description: "Explore limited-time deals and bundles",
    icon: Hash,
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
  icon: Icon,
}: {
  title: string
  description: string
  icon: React.ElementType
}) {
  return (
    <a
      href="#"
      className="hover:bg-accent flex items-start gap-3 rounded-md p-3 transition-colors"
    >
      <div className="bg-muted flex items-center justify-center rounded-md p-2">
        <Icon className="h-5 w-5" />
      </div>
      <div className="flex-1">
        <p className="mb-1 text-sm leading-none font-semibold">{title}</p>
        <p className="text-muted-foreground text-xs">{description}</p>
      </div>
    </a>
  )
}

export default function NavbarWithMegaMenu() {
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
                  <div className="grid w-[800px] grid-cols-3 gap-2 p-4">
                    {MEGA_MENU_ITEMS.map((item) => (
                      <MenuItem key={item.title} {...item} />
                    ))}
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
          <div className="mt-4 grid grid-cols-1 gap-2 md:grid-cols-2">
            {MEGA_MENU_ITEMS.map((item) => (
              <MenuItem key={item.title} {...item} />
            ))}
          </div>
          <div className="mt-4 space-y-1">
            <NavList />
          </div>
        </CollapsibleContent>
      </Collapsible>
    </nav>
  )
}
