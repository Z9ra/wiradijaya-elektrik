"use client"

import * as React from "react"
import {
  File,
  FileImage,
  FileText,
  Loader2,
  Paperclip,
  Send,
  Upload,
  X,
} from "lucide-react"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

interface AttachedFile {
  id: string
  name: string
  type: "pdf" | "image" | "doc" | "other"
  size: string
}

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  attachments?: AttachedFile[]
}

const MOCK_FILES: AttachedFile[] = [
  { id: "f1", name: "Q4_Report.pdf", type: "pdf", size: "2.4 MB" },
  { id: "f2", name: "dashboard_screenshot.png", type: "image", size: "840 KB" },
  { id: "f3", name: "requirements.docx", type: "doc", size: "156 KB" },
]

const INITIAL_MESSAGES: Message[] = [
  {
    id: "1",
    role: "assistant",
    content:
      "Hello! You can attach files to your messages using the paperclip icon. I can analyze PDFs, images, and documents.",
  },
]

function FileIcon({ type }: { type: AttachedFile["type"] }) {
  if (type === "pdf") return <FileText className="h-3.5 w-3.5" />
  if (type === "image") return <FileImage className="h-3.5 w-3.5" />
  if (type === "doc") return <File className="h-3.5 w-3.5" />
  return <File className="h-3.5 w-3.5" />
}

function fileBadgeClass(type: AttachedFile["type"]) {
  if (type === "pdf")
    return "bg-red-100 text-red-700 border-red-200 dark:bg-red-900/50 dark:text-red-300 dark:border-red-800"
  if (type === "image")
    return "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/50 dark:text-blue-300 dark:border-blue-800"
  if (type === "doc")
    return "bg-gray-100 text-gray-700 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700"
  return "bg-gray-100 text-gray-700 border-gray-200"
}

const ASSISTANT_RESPONSES: Record<string, string> = {
  pdf: 'I\'ve analyzed "Q4_Report.pdf". The document shows a 23% revenue increase in Q4 compared to Q3, with strong performance in the enterprise segment. Key risks identified on page 4. Would you like a detailed summary?',
  image:
    'Looking at "dashboard_screenshot.png", I can see a metrics dashboard with 3 KPI cards. The conversion rate is highlighted in green (4.2%), suggesting above-target performance. Want me to extract specific data points?',
  doc: 'I\'ve reviewed "requirements.docx". It contains 12 functional requirements and 4 non-functional requirements. I noticed 2 potentially conflicting requirements on pages 2 and 5. Should I detail the conflicts?',
}

export default function AiFileAttachment01() {
  const [messages, setMessages] = React.useState<Message[]>(INITIAL_MESSAGES)
  const [input, setInput] = React.useState("")
  const [attachedFiles, setAttachedFiles] = React.useState<AttachedFile[]>([])
  const [isDragging, setIsDragging] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)
  const scrollRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  const handleAttachMock = () => {
    const available = MOCK_FILES.filter(
      (f) => !attachedFiles.find((a) => a.id === f.id)
    )
    if (available.length > 0) {
      setAttachedFiles((prev) => [...prev, available[0]])
    }
  }

  const removeFile = (id: string) => {
    setAttachedFiles((prev) => prev.filter((f) => f.id !== id))
  }

  const handleSend = async () => {
    if (!input.trim() && attachedFiles.length === 0) return
    if (isLoading) return

    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim() || "Here are the attached files.",
      attachments: attachedFiles.length > 0 ? [...attachedFiles] : undefined,
    }

    setMessages((prev) => [...prev, userMsg])
    setInput("")
    const sentFiles = [...attachedFiles]
    setAttachedFiles([])
    setIsLoading(true)

    await new Promise((r) => setTimeout(r, 1200))

    const responseKey = sentFiles[0]?.type ?? "other"
    const responseText =
      ASSISTANT_RESPONSES[responseKey] ??
      "I've received your message. How can I help you further with this?"

    setMessages((prev) => [
      ...prev,
      {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: responseText,
      },
    ])
    setIsLoading(false)
  }

  return (
    <div className="container mx-auto py-8">
      <Card className="mx-auto max-w-2xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Paperclip className="h-5 w-5 text-orange-500" />
            AI Chat with File Attachments
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {/* Chat area with drag overlay */}
          <div
            className="relative"
            onDragOver={(e) => {
              e.preventDefault()
              setIsDragging(true)
            }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={(e) => {
              e.preventDefault()
              setIsDragging(false)
              handleAttachMock()
            }}
          >
            <ScrollArea className="h-95 rounded-md border p-4" ref={scrollRef}>
              <div className="space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    {msg.role === "assistant" && (
                      <Avatar className="h-8 w-8 shrink-0">
                        <AvatarFallback className="bg-orange-100 text-xs text-orange-700 dark:bg-orange-900 dark:text-orange-300">
                          AI
                        </AvatarFallback>
                      </Avatar>
                    )}
                    <div className="max-w-4/5 space-y-2">
                      {msg.attachments && msg.attachments.length > 0 && (
                        <div className="flex flex-wrap gap-1.5">
                          {msg.attachments.map((f) => (
                            <span
                              key={f.id}
                              className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-medium ${fileBadgeClass(f.type)}`}
                            >
                              <FileIcon type={f.type} />
                              {f.name}
                            </span>
                          ))}
                        </div>
                      )}
                      <div
                        className={`rounded-lg px-3 py-2 text-sm ${
                          msg.role === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted"
                        }`}
                      >
                        {msg.content}
                      </div>
                    </div>
                    {msg.role === "user" && (
                      <Avatar className="h-8 w-8 shrink-0">
                        <AvatarFallback className="text-xs">You</AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                ))}
                {isLoading && (
                  <div className="flex gap-3">
                    <Avatar className="h-8 w-8 shrink-0">
                      <AvatarFallback className="bg-orange-100 text-xs text-orange-700 dark:bg-orange-900 dark:text-orange-300">
                        AI
                      </AvatarFallback>
                    </Avatar>
                    <div className="bg-muted flex items-center gap-2 rounded-lg px-3 py-2 text-sm">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Analyzing...
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>

            {isDragging && (
              <div className="absolute inset-0 flex items-center justify-center rounded-md border-2 border-dashed border-orange-400 bg-orange-50/90 dark:bg-orange-950/80">
                <div className="text-center">
                  <Upload className="mx-auto mb-2 h-8 w-8 text-orange-500" />
                  <p className="text-sm font-medium text-orange-600 dark:text-orange-400">
                    Drop files here
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Attached file chips */}
          {attachedFiles.length > 0 && (
            <div className="flex flex-wrap gap-1.5 px-1">
              {attachedFiles.map((f) => (
                <span
                  key={f.id}
                  className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-medium ${fileBadgeClass(f.type)}`}
                >
                  <FileIcon type={f.type} />
                  {f.name}
                  <span className="text-muted-foreground ml-0.5">{f.size}</span>
                  <button
                    onClick={() => removeFile(f.id)}
                    className="ml-0.5 rounded-full hover:opacity-70"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </span>
              ))}
            </div>
          )}

          {/* Input bar */}
          <div className="flex gap-2">
            <Button
              size="icon"
              variant="outline"
              onClick={handleAttachMock}
              title="Attach file (mock)"
            >
              <Paperclip className="h-4 w-4" />
            </Button>
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about your files..."
              onKeyDown={(e) =>
                e.key === "Enter" && !e.shiftKey && handleSend()
              }
              disabled={isLoading}
              className="flex-1"
            />
            <Button
              onClick={handleSend}
              disabled={
                isLoading || (!input.trim() && attachedFiles.length === 0)
              }
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-muted-foreground px-1 text-xs">
            Click the paperclip to attach mock files, or drag and drop over the
            chat area.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
