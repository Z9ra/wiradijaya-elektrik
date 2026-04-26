"use client"

import { Badge } from "@/components/ui/badge"

export default function ContentBlockWithImages() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <Badge>Co-Working</Badge>
          <h2 className="my-4 text-3xl font-bold">
            Explore our places in London
          </h2>
          <p className="text-foreground mx-auto max-w-3xl text-lg [text-wrap:_balance]">
            If you can&apos;t decide, the answer is no. If two equally difficult
            paths, choose the one more painful in the short term (pain avoidance
            is creating an illusion of equality).
          </p>
        </div>
        <div className="mb-6 grid grid-cols-2 gap-6 md:grid-cols-12">
          <div className="col-span-2 h-[140px] sm:h-[150px] md:col-span-4">
            <img
              src="https://v3.material-tailwind.com/3d-obj-1.jpg"
              alt="photos"
              className="h-full w-full rounded-lg object-cover object-center shadow-md"
            />
          </div>
          <div className="col-span-1 h-[100px] sm:h-[150px] md:col-span-3">
            <img
              src="https://v3.material-tailwind.com/3d-obj-2.jpg"
              alt="photos"
              className="h-full w-full rounded-lg object-cover object-center shadow-md"
            />
          </div>
          <div className="col-span-1 h-[100px] sm:h-[150px] md:col-span-5">
            <img
              src="https://v3.material-tailwind.com/3d-obj-3.jpg"
              alt="photos"
              className="h-full w-full rounded-lg object-cover shadow-md"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-12">
          <div className="col-span-2 h-[140px] sm:h-[150px] md:col-span-3">
            <img
              src="https://v3.material-tailwind.com/3d-obj-4.jpg"
              alt="photos"
              className="h-full w-full rounded-lg object-cover shadow-md"
            />
          </div>
          <div className="col-span-1 h-[100px] sm:h-[150px] md:col-span-5">
            <img
              src="https://v3.material-tailwind.com/3d-obj-5.jpg"
              alt="photos"
              className="h-full w-full rounded-lg object-cover shadow-md"
            />
          </div>
          <div className="col-span-1 h-[100px] sm:h-[150px] md:col-span-4">
            <img
              src="https://v3.material-tailwind.com/3d-obj-6.jpg"
              alt="photos"
              className="h-full w-full rounded-lg object-cover shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
