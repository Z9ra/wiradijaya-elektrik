"use client"

import { useState } from "react"
import {
  ChevronDown,
  CloudUpload,
  LayoutDashboard,
  Paperclip,
  Search,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export default function SidebarWithTaskManager() {
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [openTasks, setOpenTasks] = useState<{ [key: number]: boolean }>({
    1: true,
    2: true,
  })

  const toggleTask = (index: number) => {
    setOpenTasks((prev) => ({ ...prev, [index]: !prev[index] }))
  }

  return (
    <div className="bg-background h-screen w-full max-w-xs overflow-y-scroll rounded-lg border shadow-sm">
      <div className="p-6">
        <div className="mb-4 flex items-center gap-3 border-b pb-4">
          <div className="bg-muted rounded-lg p-2">
            <LayoutDashboard className="text-muted-foreground h-5 w-5" />
          </div>
          <p className="text-xl font-semibold">Creative Tim UI</p>
        </div>
        <div className="relative">
          <Search className="text-muted-foreground absolute top-1/2 left-2.5 h-5 w-5 -translate-y-1/2" />
          <Input type="search" placeholder="Search here..." className="pl-10" />
        </div>
      </div>

      <div className="space-y-4 px-6 py-2.5 pt-0 pb-6">
        <div className="flex min-w-60 flex-col gap-0.5">
          <Collapsible open={isProfileOpen} onOpenChange={setIsProfileOpen}>
            <CollapsibleTrigger className="text-muted-foreground hover:text-foreground hover:bg-secondary flex w-full items-center rounded-md px-2.5 py-2 transition-colors">
              <span className="mr-2.5 grid shrink-0 place-items-center">
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src="https://v3.material-tailwind.com/woman-profile-1.jpg"
                    alt="Brooklyn Alice"
                  />
                  <AvatarFallback>BA</AvatarFallback>
                </Avatar>
              </span>
              <span className="font-medium">Brooklyn Alice</span>
              <span className="ml-auto grid shrink-0 place-items-center pl-2.5">
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${isProfileOpen ? "rotate-180" : ""}`}
                />
              </span>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2 space-y-1">
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground hover:bg-secondary block rounded-md px-4 py-2 text-sm font-medium transition-colors"
              >
                My Profile
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground hover:bg-secondary block rounded-md px-4 py-2 text-sm font-medium transition-colors"
              >
                Settings
              </a>
            </CollapsibleContent>
          </Collapsible>
        </div>

        <Separator />

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="border-border h-auto w-full rounded-none border-b bg-transparent p-0">
            <TabsTrigger
              value="all"
              className="data-[state=active]:border-foreground flex-1 gap-2 rounded-none data-[state=active]:border-b-2 data-[state=active]:shadow-none"
            >
              All
              <Badge
                variant="secondary"
                className="bg-foreground/10 text-foreground"
              >
                14
              </Badge>
            </TabsTrigger>
            <TabsTrigger
              value="tasks"
              className="data-[state=active]:border-foreground flex-1 rounded-none data-[state=active]:border-b-2 data-[state=active]:shadow-none"
            >
              Tasks
            </TabsTrigger>
            <TabsTrigger
              value="files"
              className="data-[state=active]:border-foreground flex-1 rounded-none data-[state=active]:border-b-2 data-[state=active]:shadow-none"
            >
              Files
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-0 p-0">
            <div className="space-y-0">
              <Collapsible
                open={openTasks[0]}
                onOpenChange={() => toggleTask(0)}
              >
                <CollapsibleTrigger className="hover:bg-secondary/50 flex w-full items-center justify-between border-b py-4 text-left font-semibold">
                  <small className="text-sm">Design new website layout</small>
                  <ChevronDown
                    className={`h-4 w-4 stroke-2 transition-transform ${openTasks[0] ? "rotate-180" : ""}`}
                  />
                </CollapsibleTrigger>
                <CollapsibleContent className="text-muted-foreground border-b py-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="task-1" defaultChecked />
                    <Label htmlFor="task-1" className="cursor-pointer text-sm">
                      Conduct market research
                    </Label>
                  </div>
                </CollapsibleContent>
              </Collapsible>

              <Collapsible
                open={openTasks[1]}
                onOpenChange={() => toggleTask(1)}
              >
                <CollapsibleTrigger className="hover:bg-secondary/50 flex w-full items-center justify-between border-b py-4 text-left font-semibold">
                  <small className="text-sm">Develop marketing strategy</small>
                  <ChevronDown
                    className={`h-4 w-4 stroke-2 transition-transform ${openTasks[1] ? "rotate-180" : ""}`}
                  />
                </CollapsibleTrigger>
                <CollapsibleContent className="text-muted-foreground space-y-2 border-b py-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="task-2" defaultChecked />
                    <Label htmlFor="task-2" className="cursor-pointer text-sm">
                      Conduct market research
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="task-3" />
                    <Label htmlFor="task-3" className="cursor-pointer text-sm">
                      Define target audience
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="task-4" />
                    <Label htmlFor="task-4" className="cursor-pointer text-sm">
                      Create content calendar
                    </Label>
                  </div>
                  <label
                    htmlFor="upload"
                    className="hover:bg-secondary/50 mt-4 grid min-h-40 w-full cursor-pointer place-items-center rounded-lg border border-dashed p-6 transition-colors"
                  >
                    <input className="hidden" id="upload" type="file" />
                    <div className="mx-auto max-w-md text-center">
                      <CloudUpload className="text-muted-foreground mx-auto mb-4 h-8 w-8" />
                      <small className="mb-2 block text-sm font-semibold">
                        Drag and Drop <br />
                        or{" "}
                        <span className="underline">Choose a Local File</span>
                      </small>
                      <p className="text-muted-foreground text-xs">
                        Supported formats: .png, .jpg, .svg
                      </p>
                    </div>
                  </label>
                </CollapsibleContent>
              </Collapsible>

              <Collapsible
                open={openTasks[2]}
                onOpenChange={() => toggleTask(2)}
              >
                <CollapsibleTrigger className="hover:bg-secondary/50 flex w-full items-center justify-between border-b py-4 text-left font-semibold">
                  <small className="text-sm">Update brand guidelines</small>
                  <ChevronDown
                    className={`h-4 w-4 stroke-2 transition-transform ${openTasks[2] ? "rotate-180" : ""}`}
                  />
                </CollapsibleTrigger>
                <CollapsibleContent className="text-muted-foreground border-b py-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="task-5" defaultChecked />
                    <Label htmlFor="task-5" className="cursor-pointer text-sm">
                      Conduct market research
                    </Label>
                  </div>
                  <div className="bg-muted/50 mt-4 flex items-center gap-2 rounded-md p-2">
                    <Paperclip className="h-4 w-4 stroke-2" />
                    <small className="text-sm font-semibold">
                      new-brand.pdf{" "}
                      <span className="text-muted-foreground">140 KB</span>
                    </small>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </TabsContent>

          <TabsContent value="tasks" className="mt-4">
            <p className="text-muted-foreground text-sm">
              Tasks content goes here
            </p>
          </TabsContent>

          <TabsContent value="files" className="mt-4">
            <p className="text-muted-foreground text-sm">
              Files content goes here
            </p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
