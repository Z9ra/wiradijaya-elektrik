import { LayoutDashboard, Settings, User } from "lucide-react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TabsVerticalWithIcon() {
  return (
    <Tabs
      defaultValue="dashboard"
      orientation="vertical"
      className="flex w-full flex-row gap-4"
    >
      <TabsList className="h-fit flex-col">
        <TabsTrigger className="w-full justify-start" value="dashboard">
          <LayoutDashboard className="mr-2 h-4 w-4" />
          Dashboard
        </TabsTrigger>
        <TabsTrigger className="w-full justify-start" value="profile">
          <User className="mr-2 h-4 w-4" />
          User Profile
        </TabsTrigger>
        <TabsTrigger className="w-full justify-start" value="settings">
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </TabsTrigger>
      </TabsList>
      <div className="flex-1">
        <TabsContent value="dashboard">
          It really matters and then like it really doesn&apos;t matter. What
          matters is the people who are sparked by it. And the people who are
          like offended by it, it doesn&apos;t matter.
        </TabsContent>
        <TabsContent value="profile">
          Because it&apos;s about motivating the doers. Because I&apos;m here to
          follow my dreams and inspire other people to follow their dreams, too.
        </TabsContent>
        <TabsContent value="settings">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </TabsContent>
      </div>
    </Tabs>
  )
}
