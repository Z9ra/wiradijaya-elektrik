import { Bell, Package, Search } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function NavbarWithSearch() {
  return (
    <nav className="w-full overflow-visible rounded-lg border border-transparent p-2 shadow-transparent">
      <div className="relative flex items-center gap-8">
        <a href="#" className="block text-base leading-tight font-bold">
          Creative Tim UI
        </a>
        <div className="ml-auto flex items-center gap-2">
          <div className="relative flex w-full max-w-sm min-w-[200px] items-center">
            <Search className="absolute top-2.5 left-2.5 h-5 w-5 text-slate-600" />
            <Input className="pl-10" placeholder="Search" />
          </div>
          <Button variant="ghost" size="icon" className="hidden lg:grid">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="mr-1 hidden lg:grid">
            <Package className="h-5 w-5" />
          </Button>
          <Avatar className="h-8 w-8">
            <AvatarImage
              src="https://images.unsplash.com/photo-1716662318479-a9c0f1cd1a0e?auto=format&fit=crop&q=80&w=400&h=400"
              alt="profile-picture"
            />
            <AvatarFallback>CT</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </nav>
  )
}
