import { Bell, Home, Package, Search } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function NavbarExampleWithBreadcrumbs() {
  return (
    <nav className="w-full overflow-visible rounded-lg border border-transparent p-2 shadow-transparent">
      <div className="relative flex items-center gap-8">
        <div>
          <nav className="flex flex-wrap items-center gap-1 p-1">
            <a
              href="#"
              className="hover:text-primary dark:hover:text-primary inline-flex items-center gap-1.5 text-sm transition-colors duration-300 ease-in"
            >
              <Home className="h-[18px] w-[18px]" />
            </a>
            <span className="pointer-events-none mx-1 inline-block text-sm opacity-50 select-none">
              /
            </span>
            <a
              href="#"
              className="hover:text-primary dark:hover:text-primary inline-flex items-center gap-1.5 text-sm transition-colors duration-300 ease-in"
            >
              <span className="inline-block md:hidden">...</span>
              <span className="hidden md:inline-block">Dashboard</span>
            </a>
            <span className="pointer-events-none mx-1 inline-block text-sm opacity-50 select-none">
              /
            </span>
            <a
              href="#"
              className="hover:text-primary dark:hover:text-primary inline-flex items-center gap-1.5 text-sm transition-colors duration-300 ease-in"
            >
              Projects
            </a>
          </nav>
          <p className="mt-1 ml-1 text-base font-semibold">Development</p>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <div className="relative hidden w-full max-w-sm min-w-[200px] items-center md:block">
            <Search className="absolute top-2.5 left-2.5 h-5 w-5 text-slate-600" />
            <Input className="pl-10" placeholder="Search" />
          </div>
          <Button variant="ghost" size="icon" className="grid md:hidden">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hidden lg:grid">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="mr-1 hidden lg:grid">
            <Package className="h-5 w-5" />
          </Button>
          <Avatar className="h-8 w-8">
            <AvatarImage
              src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/ct-assets/team-4.jpg"
              alt="profile-picture"
            />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </nav>
  )
}
