const IMAGES = [
  "https://images.unsplash.com/photo-1574015974293-817f0ebebb74?auto=format&fit=crop&q=80&w=400&h=400",
  "https://images.unsplash.com/photo-1661327930345-9c6714b603b3?auto=format&fit=crop&q=80&w=400&h=400",
  "https://images.unsplash.com/photo-1578508637199-240a8f25eff6?auto=format&fit=crop&q=80&w=400&h=400",
  "https://images.unsplash.com/photo-1559745482-57bfa9ca5a8a?auto=format&fit=crop&q=80&w=400&h=400",
  "https://images.unsplash.com/photo-1737608734653-d1eaad541d46?auto=format&fit=crop&q=80&w=400&h=400",
  "https://images.unsplash.com/photo-1574015974293-817f0ebebb74?auto=format&fit=crop&q=80&w=400&h=400",
  "https://images.unsplash.com/photo-1661327930345-9c6714b603b3?auto=format&fit=crop&q=80&w=400&h=400",
  "https://images.unsplash.com/photo-1578508637199-240a8f25eff6?auto=format&fit=crop&q=80&w=400&h=400",
  "https://images.unsplash.com/photo-1559745482-57bfa9ca5a8a?auto=format&fit=crop&q=80&w=400&h=400",
]

export default function GalleryDemo() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {IMAGES.map((imageLink, index) => (
        <div key={index}>
          <img
            className="h-40 w-full max-w-full rounded-lg object-cover object-center"
            src={imageLink}
            alt={`gallery-photo-${index + 1}`}
          />
        </div>
      ))}
    </div>
  )
}
