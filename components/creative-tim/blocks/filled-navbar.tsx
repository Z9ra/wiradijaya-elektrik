"use client"

import { useState } from "react"
import { File, FileText, Menu, Package, User } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function FilledNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="w-full overflow-hidden rounded-none border border-x-0 border-t-0 border-neutral-950 bg-neutral-900 p-2 py-3 shadow-lg shadow-neutral-950/25">
      <div className="container mx-auto flex items-center justify-between">
        <a href="#" className="block py-1 text-base font-bold text-white">
          Creative Tim UI
        </a>

        <div className="hidden items-center gap-x-6 lg:flex">
          <a
            href="#"
            className="flex items-center gap-x-2 text-base text-white"
          >
            <FileText className="h-5 w-5" />
            Pages
          </a>
          <a
            href="#"
            className="flex items-center gap-x-2 text-base text-white"
          >
            <User className="h-5 w-5" />
            Account
          </a>
          <a
            href="#"
            className="flex items-center gap-x-2 text-base text-white"
          >
            <Package className="h-5 w-5" />
            Blocks
          </a>
          <a
            href="#"
            className="flex items-center gap-x-2 text-base text-white"
          >
            <File className="h-5 w-5" />
            Docs
          </a>
        </div>

        <Button variant="secondary" className="hidden lg:inline-flex">
          Buy Now
        </Button>

        <Button
          variant="secondary"
          size="icon"
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } bg-neutral-900 p-4 lg:hidden`}
      >
        <a
          href="#"
          className="mb-2 flex items-center gap-x-2 text-base text-white"
        >
          <FileText className="h-5 w-5" />
          Pages
        </a>
        <a
          href="#"
          className="mb-2 flex items-center gap-x-2 text-base text-white"
        >
          <User className="h-5 w-5" />
          Account
        </a>
        <a
          href="#"
          className="mb-2 flex items-center gap-x-2 text-base text-white"
        >
          <Package className="h-5 w-5" />
          Blocks
        </a>
        <a href="#" className="flex items-center gap-x-2 text-base text-white">
          <File className="h-5 w-5" />
          Docs
        </a>
      </div>
    </nav>
  )
}
