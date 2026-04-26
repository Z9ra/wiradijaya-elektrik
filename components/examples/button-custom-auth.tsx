import { Bitcoin, Chrome, Facebook } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function ButtonCustomAuth() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <Button className="border-[#F7931A] bg-[#F7931A] text-white hover:bg-[#F7931A]/90">
        <Bitcoin className="mr-2 h-4 w-4" /> Connect Wallet
      </Button>
      <Button
        variant="outline"
        className="border-gray-300 bg-white text-gray-900 shadow-sm hover:bg-gray-50"
      >
        <Chrome className="mr-2 h-4 w-4" /> Continue with Google
      </Button>
      <Button className="border-[#1877F2] bg-[#1877F2] text-white hover:bg-[#1877F2]/90">
        <Facebook className="mr-2 h-4 w-4" /> Continue with Facebook
      </Button>
    </div>
  )
}
