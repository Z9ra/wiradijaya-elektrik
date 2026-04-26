"use client"

import { useState } from "react"
import { File, FileText, Menu, Package, User } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function BlurredNavbarExample() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&w=2000&q=85&fit=max')] bg-cover bg-center p-4">
      <nav className="container mx-auto w-full overflow-hidden rounded-lg border border-white/50 bg-white/70 p-2 py-3 shadow-lg shadow-slate-950/5 backdrop-blur backdrop-saturate-200">
        <div className="relative flex items-center">
          <a href="#" className="block py-1 text-base font-bold">
            Creative Tim UI
          </a>
          <div className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
            <ul className="mt-4 flex flex-col gap-x-6 gap-y-1.5 lg:mt-0 lg:flex-row lg:items-center">
              <li>
                <a href="#" className="flex items-center gap-x-2 p-1 text-base">
                  <FileText className="h-5 w-5" />
                  Pages
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-x-2 p-1 text-base">
                  <User className="h-5 w-5" />
                  Account
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-x-2 p-1 text-base">
                  <Package className="h-5 w-5" />
                  Blocks
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-x-2 p-1 text-base">
                  <File className="h-5 w-5" />
                  Docs
                </a>
              </li>
            </ul>
          </div>
          <Button className="ml-auto hidden bg-neutral-900 hover:bg-neutral-800 lg:inline-block">
            Buy Now
          </Button>
          <Button
            variant="default"
            size="icon"
            className="ml-auto grid bg-neutral-900 shadow-sm hover:bg-neutral-800 hover:shadow-md lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
        <div className={`${isMenuOpen ? "block" : "hidden"} mt-4 lg:hidden`}>
          <ul className="flex flex-col gap-y-4 p-4 pl-0">
            <li>
              <a href="#" className="flex items-center gap-x-2 text-base">
                <FileText className="h-5 w-5" />
                Pages
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-x-2 text-base">
                <User className="h-5 w-5" />
                Account
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-x-2 text-base">
                <Package className="h-5 w-5" />
                Blocks
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-x-2 text-base">
                <File className="h-5 w-5" />
                Docs
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
