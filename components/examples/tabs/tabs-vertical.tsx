import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TabsVertical() {
  return (
    <Tabs
      defaultValue="html"
      orientation="vertical"
      className="flex w-full flex-row gap-4"
    >
      <TabsList className="h-fit flex-col">
        <TabsTrigger className="w-full" value="html">
          HTML
        </TabsTrigger>
        <TabsTrigger className="w-full" value="react">
          React
        </TabsTrigger>
        <TabsTrigger className="w-full" value="vue">
          Vue
        </TabsTrigger>
        <TabsTrigger className="w-full" value="angular">
          Angular
        </TabsTrigger>
        <TabsTrigger className="w-full" value="svelte">
          Svelte
        </TabsTrigger>
      </TabsList>
      <div className="flex-1">
        <TabsContent value="html">
          It really matters and then like it really doesn&apos;t matter. What
          matters is the people who are sparked by it. And the people who are
          like offended by it, it doesn&apos;t matter.
        </TabsContent>
        <TabsContent value="react">
          Because it&apos;s about motivating the doers. Because I&apos;m here to
          follow my dreams and inspire other people to follow their dreams, too.
        </TabsContent>
        <TabsContent value="vue">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </TabsContent>
        <TabsContent value="angular">
          Because it&apos;s about motivating the doers. Because I&apos;m here to
          follow my dreams and inspire other people to follow their dreams, too.
        </TabsContent>
        <TabsContent value="svelte">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </TabsContent>
      </div>
    </Tabs>
  )
}
