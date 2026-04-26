"use client"

import * as React from "react"
import {
  FileText,
  Folder,
  LayoutGrid,
  List,
  MoreHorizontal,
  UploadCloud,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"

type FileItem = {
  id: string
  name: string
  size: string
  updated: string
  type: string
  owner: string
}

const FOLDERS = [
  { id: "design", name: "Design Files", count: 12 },
  { id: "contracts", name: "Contracts", count: 7 },
  { id: "marketing", name: "Marketing", count: 24 },
]

const FILES: FileItem[] = [
  {
    id: "roadmap",
    name: "Product Roadmap Q2.pdf",
    size: "2.4 MB",
    updated: "2 hours ago",
    type: "PDF",
    owner: "Emma",
  },
  {
    id: "invoice",
    name: "Invoice-1290.xlsx",
    size: "980 KB",
    updated: "Yesterday",
    type: "XLSX",
    owner: "Ryan",
  },
  {
    id: "press",
    name: "Press Kit.zip",
    size: "14.2 MB",
    updated: "Sep 12, 2025",
    type: "ZIP",
    owner: "Ava",
  },
  {
    id: "notes",
    name: "Release Notes.md",
    size: "18 KB",
    updated: "Sep 8, 2025",
    type: "Markdown",
    owner: "Ken",
  },
]

export default function FileManager() {
  const [view, setView] = React.useState<"grid" | "list">("grid")
  const [query, setQuery] = React.useState("")
  const [folders, setFolders] = React.useState(FOLDERS)
  const [files, setFiles] = React.useState<FileItem[]>(FILES)
  const [dragActive, setDragActive] = React.useState(false)
  const fileInputRef = React.useRef<HTMLInputElement | null>(null)

  const formatBytes = (bytes: number) => {
    if (!bytes) return "0 KB"
    const kb = bytes / 1024
    if (kb < 1024) return `${kb.toFixed(1)} KB`
    return `${(kb / 1024).toFixed(1)} MB`
  }

  const getType = (name: string) => {
    const ext = name.split(".").pop() || "file"
    return ext.toUpperCase()
  }

  const handleUploadFiles = (list: FileList | null) => {
    if (!list?.length) return
    const now = "Just now"
    const newFiles: FileItem[] = Array.from(list).map((file) => ({
      id: `${file.name}-${Date.now()}`,
      name: file.name,
      size: formatBytes(file.size),
      updated: now,
      type: getType(file.name),
      owner: "You",
    }))
    setFiles((prev) => [...newFiles, ...prev])
  }

  const filteredFolders = folders.filter((folder) =>
    folder.name.toLowerCase().includes(query.toLowerCase())
  )
  const filteredFiles = files.filter((file) =>
    file.name.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="mx-auto max-w-6xl p-6">
      <Card className="bg-card border p-8">
        <div className="flex flex-wrap items-start justify-between gap-4 border-b pb-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              File Manager
            </h2>
            <p className="text-muted-foreground mt-1 text-sm">
              Organize documents, folders, and shared assets.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Button
              variant="outline"
              onClick={() => {
                const name = window.prompt("Folder name")
                if (!name) return
                setFolders((prev) => [
                  {
                    id: name.toLowerCase().replace(/\s+/g, "-"),
                    name,
                    count: 0,
                  },
                  ...prev,
                ])
              }}
            >
              New Folder
            </Button>
            <Button onClick={() => fileInputRef.current?.click()}>
              <UploadCloud className="mr-2 h-4 w-4" />
              Upload Files
            </Button>
            <input
              ref={fileInputRef}
              type="file"
              className="hidden"
              multiple
              onChange={(event) => handleUploadFiles(event.target.files)}
            />
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <div className="relative w-full max-w-sm">
            <Input
              placeholder="Search files and folders..."
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
          <ToggleGroup
            type="single"
            value={view}
            onValueChange={(value) =>
              value && setView(value as "grid" | "list")
            }
            variant="outline"
          >
            <ToggleGroupItem value="grid" aria-label="Grid view">
              <LayoutGrid className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="list" aria-label="List view">
              <List className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {filteredFolders.map((folder) => (
            <Card key={folder.id} className="bg-muted/30 border p-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-lg">
                    <Folder className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold">{folder.name}</p>
                    <p className="text-muted-foreground text-xs">
                      {folder.count} files
                    </p>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button size="icon" variant="ghost">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem
                      onClick={() => {
                        const name = window.prompt("Rename folder", folder.name)
                        if (!name) return
                        setFolders((prev) =>
                          prev.map((item) =>
                            item.id === folder.id ? { ...item, name } : item
                          )
                        )
                      }}
                    >
                      Rename
                    </DropdownMenuItem>
                    <DropdownMenuItem>Share</DropdownMenuItem>
                    <DropdownMenuItem
                      variant="destructive"
                      onClick={() =>
                        setFolders((prev) =>
                          prev.filter((item) => item.id !== folder.id)
                        )
                      }
                    >
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-6">
          {view === "grid" ? (
            <div className="grid gap-4 md:grid-cols-2">
              {filteredFiles.map((file) => (
                <Card key={file.id} className="bg-muted/30 border p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-lg">
                        <FileText className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-semibold">{file.name}</p>
                        <p className="text-muted-foreground text-xs">
                          Updated {file.updated}
                        </p>
                      </div>
                    </div>
                    <Badge variant="outline">{file.type}</Badge>
                  </div>
                  <div className="text-muted-foreground mt-3 flex items-center justify-between text-xs">
                    <span>{file.size}</span>
                    <span>Owner: {file.owner}</span>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Size</TableHead>
                    <TableHead>Updated</TableHead>
                    <TableHead>Owner</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredFiles.map((file) => (
                    <TableRow key={file.id}>
                      <TableCell className="font-medium">{file.name}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{file.type}</Badge>
                      </TableCell>
                      <TableCell>{file.size}</TableCell>
                      <TableCell>{file.updated}</TableCell>
                      <TableCell>{file.owner}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          )}
        </div>

        <Card
          className={`bg-muted/30 mt-6 border border-dashed p-6 ${
            dragActive ? "border-primary/60 bg-primary/5" : ""
          }`}
          onDragOver={(event) => {
            event.preventDefault()
            setDragActive(true)
          }}
          onDragLeave={() => setDragActive(false)}
          onDrop={(event) => {
            event.preventDefault()
            setDragActive(false)
            handleUploadFiles(event.dataTransfer.files)
          }}
        >
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <div className="bg-primary/10 text-primary flex h-12 w-12 items-center justify-center rounded-full">
              <UploadCloud className="h-6 w-6" />
            </div>
            <p className="text-sm font-semibold">Drop files to upload</p>
            <p className="text-muted-foreground text-xs">
              Supported formats: PDF, ZIP, PNG, JPG
            </p>
          </div>
        </Card>
      </Card>
    </div>
  )
}
