import { Dribbble, Facebook, Github } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function CustomIconButton() {
  return (
    <div className="flex gap-4">
      <Button
        size="icon"
        className="border-[#24292e] bg-[#24292e] text-white hover:bg-[#24292e]/90 hover:brightness-110 focus-visible:ring-[#24292e]/20"
      >
        <Github className="h-4 w-4" />
      </Button>
      <Button
        size="icon"
        className="border-[#ea4c89] bg-[#ea4c89] text-white hover:bg-[#ea4c89]/90 hover:brightness-110 focus-visible:ring-[#ea4c89]/20"
      >
        <Dribbble className="h-4 w-4" />
      </Button>
      <Button
        size="icon"
        className="border-[#1877F2] bg-[#1877F2] text-white hover:bg-[#1877F2]/90 hover:brightness-110 focus-visible:ring-[#1877F2]/20"
      >
        <Facebook className="h-4 w-4" />
      </Button>
    </div>
  )
}
