"use client"

import * as React from "react"
import { Check, Code2, Copy, Loader2, Play, Sparkles } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

interface DiffLine {
  type: "added" | "removed" | "unchanged"
  content: string
  lineNo: number
}

const EXAMPLES: Record<string, { before: DiffLine[]; after: DiffLine[] }> = {
  typescript: {
    before: [
      { type: "unchanged", lineNo: 1, content: "function fetchUser(id) {" },
      {
        type: "removed",
        lineNo: 2,
        content: "  return fetch('/api/user/' + id)",
      },
      { type: "removed", lineNo: 3, content: "    .then(res => res.json())" },
      { type: "removed", lineNo: 4, content: "    .then(data => data)" },
      {
        type: "removed",
        lineNo: 5,
        content: "    .catch(err => console.log(err))",
      },
      { type: "unchanged", lineNo: 6, content: "}" },
    ],
    after: [
      {
        type: "unchanged",
        lineNo: 1,
        content: "async function fetchUser(id: string): Promise<User> {",
      },
      { type: "added", lineNo: 2, content: "  try {" },
      {
        type: "added",
        lineNo: 3,
        content: "    const res = await fetch(`/api/user/${id}`)",
      },
      {
        type: "added",
        lineNo: 4,
        content: "    if (!res.ok) throw new Error(`HTTP ${res.status}`)",
      },
      {
        type: "added",
        lineNo: 5,
        content: "    return await res.json() as User",
      },
      { type: "added", lineNo: 6, content: "  } catch (err) {" },
      {
        type: "added",
        lineNo: 7,
        content: "    throw new Error(`Failed to fetch user: ${err}`)",
      },
      { type: "added", lineNo: 8, content: "  }" },
      { type: "unchanged", lineNo: 9, content: "}" },
    ],
  },
  python: {
    before: [
      { type: "unchanged", lineNo: 1, content: "def calculate_total(items):" },
      { type: "removed", lineNo: 2, content: "  total = 0" },
      { type: "removed", lineNo: 3, content: "  for item in items:" },
      {
        type: "removed",
        lineNo: 4,
        content: "    total = total + item['price']",
      },
      { type: "removed", lineNo: 5, content: "  return total" },
    ],
    after: [
      {
        type: "unchanged",
        lineNo: 1,
        content: "def calculate_total(items: list[dict]) -> float:",
      },
      {
        type: "added",
        lineNo: 2,
        content: '  """Calculate total price with type safety."""',
      },
      {
        type: "added",
        lineNo: 3,
        content: "  return sum(item.get('price', 0.0) for item in items)",
      },
    ],
  },
  go: {
    before: [
      { type: "unchanged", lineNo: 1, content: "func divide(a, b int) int {" },
      { type: "removed", lineNo: 2, content: "  return a / b" },
      { type: "unchanged", lineNo: 3, content: "}" },
    ],
    after: [
      {
        type: "unchanged",
        lineNo: 1,
        content: "func divide(a, b int) (int, error) {",
      },
      { type: "added", lineNo: 2, content: "  if b == 0 {" },
      {
        type: "added",
        lineNo: 3,
        content: '    return 0, errors.New("division by zero")',
      },
      { type: "added", lineNo: 4, content: "  }" },
      { type: "added", lineNo: 5, content: "  return a / b, nil" },
      { type: "unchanged", lineNo: 6, content: "}" },
    ],
  },
  rust: {
    before: [
      {
        type: "unchanged",
        lineNo: 1,
        content: "fn parse_number(s: &str) -> i32 {",
      },
      { type: "removed", lineNo: 2, content: "  s.parse().unwrap()" },
      { type: "unchanged", lineNo: 3, content: "}" },
    ],
    after: [
      {
        type: "unchanged",
        lineNo: 1,
        content: "fn parse_number(s: &str) -> Result<i32, ParseIntError> {",
      },
      { type: "added", lineNo: 2, content: "  s.trim().parse::<i32>()" },
      { type: "added", lineNo: 3, content: "    .map_err(|e| e)" },
      { type: "unchanged", lineNo: 4, content: "}" },
    ],
  },
}

function CodePanel({
  title,
  lines,
  variant,
}: {
  title: string
  lines: DiffLine[]
  variant: "before" | "after"
}) {
  const [copied, setCopied] = React.useState(false)

  const handleCopy = () => {
    const code = lines.map((l) => l.content).join("\n")
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex-1 overflow-hidden rounded-lg border">
      <div className="bg-muted/40 flex items-center justify-between border-b px-3 py-2">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">{title}</span>
          <Badge
            variant="outline"
            className={`text-xs ${variant === "before" ? "border-red-200 text-red-600 dark:border-red-800 dark:text-red-400" : "border-green-200 text-green-600 dark:border-green-800 dark:text-green-400"}`}
          >
            {variant === "before"
              ? `-${lines.filter((l) => l.type === "removed").length}`
              : `+${lines.filter((l) => l.type === "added").length}`}
          </Badge>
        </div>
        <div className="flex gap-1">
          <Button
            size="sm"
            variant="ghost"
            className="h-7 px-2 text-xs"
            onClick={handleCopy}
          >
            {copied ? (
              <Check className="h-3.5 w-3.5" />
            ) : (
              <Copy className="h-3.5 w-3.5" />
            )}
          </Button>
          <Button size="sm" variant="ghost" className="h-7 px-2 text-xs">
            Apply
          </Button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <tbody>
            {lines.map((line, i) => (
              <tr
                key={i}
                className={
                  line.type === "added"
                    ? "bg-green-50 dark:bg-green-950/40"
                    : line.type === "removed"
                      ? "bg-red-50 dark:bg-red-950/40"
                      : ""
                }
              >
                <td className="text-muted-foreground w-8 px-2 py-0.5 text-right font-mono select-none">
                  {line.lineNo}
                </td>
                <td
                  className={`px-2 py-0.5 font-mono whitespace-pre ${
                    line.type === "added"
                      ? "text-green-700 dark:text-green-400"
                      : line.type === "removed"
                        ? "text-red-700 dark:text-red-400"
                        : "text-foreground"
                  }`}
                >
                  <span className="mr-1 select-none">
                    {line.type === "added"
                      ? "+"
                      : line.type === "removed"
                        ? "-"
                        : " "}
                  </span>
                  {line.content}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default function AiCodeAssistant01() {
  const [language, setLanguage] = React.useState("typescript")
  const [prompt, setPrompt] = React.useState(
    "Refactor this function to use async/await with proper error handling and TypeScript types."
  )
  const [isGenerating, setIsGenerating] = React.useState(false)
  const [showDiff, setShowDiff] = React.useState(false)

  const handleGenerate = async () => {
    setIsGenerating(true)
    setShowDiff(false)
    await new Promise((r) => setTimeout(r, 1500))
    setIsGenerating(false)
    setShowDiff(true)
  }

  const example = EXAMPLES[language] ?? EXAMPLES.typescript

  return (
    <div className="container mx-auto py-8">
      <Card className="mx-auto max-w-4xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code2 className="h-5 w-5 text-orange-500" />
            AI Code Assistant
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-3">
            <div className="flex-1 space-y-2">
              <Label>Prompt</Label>
              <Textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe what you want to do with the code..."
                rows={2}
                className="resize-none"
              />
            </div>
            <div className="w-40 space-y-2">
              <Label>Language</Label>
              <Select
                value={language}
                onValueChange={(v) => {
                  setLanguage(v)
                  setShowDiff(false)
                }}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="typescript">TypeScript</SelectItem>
                  <SelectItem value="python">Python</SelectItem>
                  <SelectItem value="go">Go</SelectItem>
                  <SelectItem value="rust">Rust</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button
            onClick={handleGenerate}
            disabled={isGenerating || !prompt.trim()}
          >
            {isGenerating ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-4 w-4" />
                Generate Diff
              </>
            )}
          </Button>

          {showDiff && (
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs">
                  Diff view
                </Badge>
                <span className="text-muted-foreground text-sm">
                  Review changes before applying
                </span>
              </div>
              <div className="flex gap-3">
                <CodePanel
                  title="Before"
                  lines={example.before}
                  variant="before"
                />
                <CodePanel
                  title="After"
                  lines={example.after}
                  variant="after"
                />
              </div>
            </div>
          )}

          {!showDiff && !isGenerating && (
            <div className="bg-muted/40 flex items-center justify-center rounded-lg border border-dashed py-12 text-sm">
              <div className="text-center">
                <Play className="text-muted-foreground mx-auto mb-2 h-6 w-6" />
                <p className="text-muted-foreground">
                  Enter a prompt and click Generate Diff
                </p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
