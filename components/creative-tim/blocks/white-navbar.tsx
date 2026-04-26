"use client"

import { useState } from "react"
import { File, FileText, Menu, Package, User } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function WhiteNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="relative w-full overflow-hidden rounded-none border border-x-0 border-t-0 border-slate-200 bg-white p-2 py-3 shadow-lg shadow-slate-950/5">
      <div className="container mx-auto flex items-center justify-between">
        <a href="#" className="block py-1 text-base font-bold">
          Creative Tim UI
        </a>

        <div className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-x-6 lg:flex">
          <a href="#" className="flex items-center gap-x-2 text-base">
            <FileText className="h-5 w-5" />
            Pages
          </a>
          <a href="#" className="flex items-center gap-x-2 text-base">
            <User className="h-5 w-5" />
            Account
          </a>
          <a href="#" className="flex items-center gap-x-2 text-base">
            <Package className="h-5 w-5" />
            Blocks
          </a>
          <a href="#" className="flex items-center gap-x-2 text-base">
            <File className="h-5 w-5" />
            Docs
          </a>
        </div>

        <Button className="hidden bg-neutral-900 hover:bg-neutral-800 lg:inline-flex">
          Buy Now
        </Button>

        <Button
          size="icon"
          className="bg-neutral-900 hover:bg-neutral-800 lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } bg-white p-4 pl-12 lg:hidden`}
      >
        <a href="#" className="mb-2 flex items-center gap-x-2 text-base">
          <FileText className="h-5 w-5" />
          Pages
        </a>
        <a href="#" className="mb-2 flex items-center gap-x-2 text-base">
          <User className="h-5 w-5" />
          Account
        </a>
        <a href="#" className="mb-2 flex items-center gap-x-2 text-base">
          <Package className="h-5 w-5" />
          Blocks
        </a>
        <a href="#" className="flex items-center gap-x-2 text-base">
          <File className="h-5 w-5" />
          Docs
        </a>
      </div>
    </nav>
  )
}
