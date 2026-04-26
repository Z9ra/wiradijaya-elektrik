"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const IMAGES = [
  "https://images.unsplash.com/photo-1574015974293-817f0ebebb74?auto=format&fit=crop&q=80&w=400&h=400",
  "https://images.unsplash.com/photo-1661327930345-9c6714b603b3?auto=format&fit=crop&q=80&w=400&h=400",
  "https://images.unsplash.com/photo-1578508637199-240a8f25eff6?auto=format&fit=crop&q=80&w=400&h=400",
  "https://images.unsplash.com/photo-1559745482-57bfa9ca5a8a?auto=format&fit=crop&q=80&w=400&h=400",
  "https://images.unsplash.com/photo-1737608734653-d1eaad541d46?auto=format&fit=crop&q=80&w=400&h=400",
  "https://images.unsplash.com/photo-1574015974293-817f0ebebb74?auto=format&fit=crop&q=80&w=400&h=400",
]

const DATA = [
  {
    label: "HTML",
    value: "html",
    images: IMAGES,
  },
  {
    label: "React",
    value: "react",
    images: IMAGES,
  },
  {
    label: "Vue",
    value: "vue",
    images: IMAGES,
  },
  {
    label: "Angular",
    value: "angular",
    images: IMAGES,
  },
  {
    label: "Svelte",
    value: "svelte",
    images: IMAGES,
  },
]

export default function GalleryWithTab() {
  return (
    <Tabs defaultValue="html" className="w-full">
      <TabsList className="w-full">
        {DATA.map(({ label, value }) => (
          <TabsTrigger key={value} value={value} className="flex-1">
            {label}
          </TabsTrigger>
        ))}
      </TabsList>
      {DATA.map(({ value, images }) => (
        <TabsContent
          key={value}
          value={value}
          className="grid grid-cols-2 gap-4 md:grid-cols-3"
        >
          {images.map((imageLink, index) => (
            <div key={index}>
              <img
                className="h-40 w-full max-w-full rounded-lg object-cover object-center"
                src={imageLink}
                alt={`image-photo-${index + 1}`}
              />
            </div>
          ))}
        </TabsContent>
      ))}
    </Tabs>
  )
}
