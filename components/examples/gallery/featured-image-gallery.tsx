"use client"

import * as React from "react"

const IMAGES = [
  "https://images.unsplash.com/photo-1574015974293-817f0ebebb74?auto=format&fit=crop&q=80&w=400&h=400",
  "https://images.unsplash.com/photo-1661327930345-9c6714b603b3?auto=format&fit=crop&q=80&w=400&h=400",
  "https://images.unsplash.com/photo-1578508637199-240a8f25eff6?auto=format&fit=crop&q=80&w=400&h=400",
  "https://images.unsplash.com/photo-1559745482-57bfa9ca5a8a?auto=format&fit=crop&q=80&w=400&h=400",
  "https://images.unsplash.com/photo-1737608734653-d1eaad541d46?auto=format&fit=crop&q=80&w=400&h=400",
]

export default function FeaturedImageGallery() {
  const [active, setActive] = React.useState(IMAGES[0])

  return (
    <div className="grid gap-4">
      <div>
        <img
          className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
          src={active}
          alt="Featured gallery image"
        />
      </div>
      <div className="grid grid-cols-5 gap-4">
        {IMAGES.map((imgelink, index) => (
          <div key={index}>
            <img
              onClick={() => setActive(imgelink)}
              src={imgelink}
              className="h-20 w-full max-w-full cursor-pointer rounded-lg object-cover object-center transition-opacity hover:opacity-80"
              alt={`gallery-image-${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
