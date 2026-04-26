"use client"

import { useState } from "react"
import Image from "next/image"
import type { Swiper as SwiperType } from "swiper"
import { FreeMode, Navigation, Thumbs } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"

export default function CarouselWithThumbnails() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)

  const images = [
    "https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/creative-ai/bg-3.jpg",
    "https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/creative-ai/bg-2.jpg",
    "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&w=2000&q=85",
  ]

  return (
    <>
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: white !important;
          width: 24px !important;
          height: 24px !important;
        }
        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 24px !important;
        }
      `}</style>
      <div className="w-full max-w-4xl space-y-4">
        <Swiper
          modules={[FreeMode, Navigation, Thumbs]}
          spaceBetween={10}
          navigation
          thumbs={{ swiper: thumbsSwiper }}
          className="rounded-lg"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <Image
                  src={image}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          onSwiper={setThumbsSwiper}
          modules={[FreeMode, Navigation, Thumbs]}
          spaceBetween={10}
          slidesPerView={3}
          freeMode
          watchSlidesProgress
          className="rounded-lg"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="cursor-pointer">
              <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <Image
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  )
}
