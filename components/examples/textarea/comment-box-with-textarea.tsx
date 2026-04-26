import { Paperclip } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function CommentBoxWithTextarea() {
  return (
    <form action="#" className="w-full">
      <Textarea placeholder="someone@example.com" />
      <div className="flex w-full justify-between py-3">
        <Button type="button" variant="ghost" size="sm">
          <Paperclip className="h-4 w-4" />
        </Button>
        <div className="flex gap-2">
          <Button type="button" variant="secondary" size="sm">
            Cancel
          </Button>
          <Button type="submit" size="sm">
            Post Comment
          </Button>
        </div>
      </div>
    </form>
  )
}
