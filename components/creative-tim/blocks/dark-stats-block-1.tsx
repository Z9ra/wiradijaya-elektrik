"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide, useSwiper } from "swiper/react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const STATS = [
  {
    count: "1,200+",
    title: "Projects",
    desc: "Of 'high-performing' level are led by a certified manager",
  },
  {
    count: "500+",
    title: "Sections",
    desc: "That meets quality standards required by our users",
  },
  {
    count: "24/7",
    title: "Support",
    desc: "Actively engage team members that finishes on time",
  },
]

function CustomNavigation() {
  const swiper = useSwiper()

  return (
    <>
      <Button
        size="icon"
        variant="ghost"
        onClick={() => swiper.slidePrev()}
        className="!absolute top-1/2 left-2 z-10 hidden -translate-y-1/2 rounded-full text-white sm:grid"
      >
        <ChevronLeft className="h-7 w-7 -translate-x-0.5 stroke-2" />
      </Button>
      <Button
        size="icon"
        variant="ghost"
        onClick={() => swiper.slideNext()}
        className="!absolute top-1/2 right-2 z-10 hidden -translate-y-1/2 rounded-full text-white sm:grid"
      >
        <ChevronRight className="h-7 w-7 translate-x-px stroke-2" />
      </Button>
    </>
  )
}

function customPagination(_: unknown, className: string) {
  return `<span class="${className} w-4 h-4 [&.swiper-pagination-bullet-active]:!opacity-100 [&.swiper-pagination-bullet-active]:[background:rgb(var(--color-background))] !opacity-50 ![background:rgb(var(--color-background))]"></span>`
}

export default function DarkStatsBlock1() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <Card className="relative rounded-xl bg-[url('/dark-bg-pattern.jpg')] bg-cover bg-center p-4">
          <span className="absolute inset-0 h-full w-full bg-black/75" />
          <Swiper
            autoplay
            pagination={{
              enabled: true,
              clickable: true,
              renderBullet: customPagination,
            }}
            modules={[Navigation, Pagination, Autoplay]}
            className="relative h-full w-full"
          >
            {STATS.map(({ count, title, desc }, index) => (
              <SwiperSlide key={index}>
                <Card className="border-0 bg-transparent pb-20 text-center md:pt-12">
                  <CardContent className="pt-6">
                    <h1 className="text-secondary text-5xl font-bold">
                      {count}
                    </h1>
                    <h6 className="text-secondary mt-6 mb-4 text-lg font-semibold">
                      {title}
                    </h6>
                    <p className="mx-auto max-w-sm [text-wrap:_balance] text-white">
                      {desc}
                    </p>
                    <Button variant="ghost" className="mt-8 text-white">
                      See all products
                    </Button>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
            <CustomNavigation />
          </Swiper>
        </Card>
      </div>
    </section>
  )
}
