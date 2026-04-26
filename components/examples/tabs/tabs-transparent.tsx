import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TabsTransparent() {
  return (
    <Tabs defaultValue="html" className="w-full">
      <TabsList className="w-full bg-transparent">
        <TabsTrigger
          className="data-[state=active]:bg-primary/10 w-full data-[state=active]:shadow-none"
          value="html"
        >
          HTML
        </TabsTrigger>
        <TabsTrigger
          className="data-[state=active]:bg-primary/10 w-full data-[state=active]:shadow-none"
          value="react"
        >
          React
        </TabsTrigger>
        <TabsTrigger
          className="data-[state=active]:bg-primary/10 w-full data-[state=active]:shadow-none"
          value="vue"
        >
          Vue
        </TabsTrigger>
        <TabsTrigger
          className="data-[state=active]:bg-primary/10 w-full data-[state=active]:shadow-none"
          value="angular"
        >
          Angular
        </TabsTrigger>
        <TabsTrigger
          className="data-[state=active]:bg-primary/10 w-full data-[state=active]:shadow-none"
          value="svelte"
        >
          Svelte
        </TabsTrigger>
      </TabsList>
      <TabsContent value="html" className="mt-4">
        It really matters and then like it really doesn&apos;t matter. What
        matters is the people who are sparked by it. And the people who are like
        offended by it, it doesn&apos;t matter.
      </TabsContent>
      <TabsContent value="react" className="mt-4">
        Because it&apos;s about motivating the doers. Because I&apos;m here to
        follow my dreams and inspire other people to follow their dreams, too.
      </TabsContent>
      <TabsContent value="vue" className="mt-4">
        We&apos;re not always in the position that we want to be at. We&apos;re
        constantly growing. We&apos;re constantly making mistakes. We&apos;re
        constantly trying to express ourselves and actualize our dreams.
      </TabsContent>
      <TabsContent value="angular" className="mt-4">
        Because it&apos;s about motivating the doers. Because I&apos;m here to
        follow my dreams and inspire other people to follow their dreams, too.
      </TabsContent>
      <TabsContent value="svelte" className="mt-4">
        We&apos;re not always in the position that we want to be at. We&apos;re
        constantly growing. We&apos;re constantly making mistakes. We&apos;re
        constantly trying to express ourselves and actualize our dreams.
      </TabsContent>
    </Tabs>
  )
}
