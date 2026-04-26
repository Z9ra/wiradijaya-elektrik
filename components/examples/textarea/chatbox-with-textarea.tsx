import { File, Image as ImageIcon, Send, Smile } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function ChatboxWithTextarea() {
  return (
    <form action="#" className="flex w-full items-center gap-4">
      <div className="flex items-center gap-1">
        <Button type="button" variant="ghost" size="icon">
          <ImageIcon className="h-5 w-5" />
        </Button>
        <Button type="button" variant="ghost" size="icon">
          <File className="h-5 w-5" />
        </Button>
        <Button type="button" variant="ghost" size="icon">
          <Smile className="h-5 w-5" />
        </Button>
      </div>
      <Textarea placeholder="Send a new message" rows={1} className="flex-1" />
      <Button type="button" variant="ghost" size="icon">
        <Send className="h-5 w-5" />
      </Button>
    </form>
  )
}
