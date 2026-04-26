"use client"

import { useState } from "react"
import { File, FileText, Menu, Package, User } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function TransparentNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="w-full overflow-hidden rounded-none p-2 py-3">
      <div className="container mx-auto flex items-center justify-between">
        <a href="#" className="block py-1 text-base font-bold">
          Creative Tim UI
        </a>

        <div className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-x-6 lg:flex">
          <a
            href="#"
            className="flex items-center gap-x-2 text-base transition-colors hover:text-neutral-900"
          >
            <FileText className="h-5 w-5" />
            Pages
          </a>
          <a
            href="#"
            className="flex items-center gap-x-2 text-base transition-colors hover:text-neutral-900"
          >
            <User className="h-5 w-5" />
            Account
          </a>
          <a
            href="#"
            className="flex items-center gap-x-2 text-base transition-colors hover:text-neutral-900"
          >
            <Package className="h-5 w-5" />
            Blocks
          </a>
          <a
            href="#"
            className="flex items-center gap-x-2 text-base transition-colors hover:text-neutral-900"
          >
            <File className="h-5 w-5" />
            Docs
          </a>
        </div>

        <Button className="hidden bg-neutral-900 hover:bg-neutral-800 lg:inline-flex">
          Buy Now
        </Button>

        <Button
          variant="default"
          size="icon"
          className="bg-neutral-900 hover:bg-neutral-800 lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      <div className={`${isMenuOpen ? "block" : "hidden"} p-4 pl-12 lg:hidden`}>
        <a
          href="#"
          className="mb-2 flex items-center gap-x-2 text-base transition-colors hover:text-neutral-900"
        >
          <FileText className="h-5 w-5" />
          Pages
        </a>
        <a
          href="#"
          className="mb-2 flex items-center gap-x-2 text-base transition-colors hover:text-neutral-900"
        >
          <User className="h-5 w-5" />
          Account
        </a>
        <a
          href="#"
          className="mb-2 flex items-center gap-x-2 text-base transition-colors hover:text-neutral-900"
        >
          <Package className="h-5 w-5" />
          Blocks
        </a>
        <a
          href="#"
          className="flex items-center gap-x-2 text-base transition-colors hover:text-neutral-900"
        >
          <File className="h-5 w-5" />
          Docs
        </a>
      </div>
    </nav>
  )
}
