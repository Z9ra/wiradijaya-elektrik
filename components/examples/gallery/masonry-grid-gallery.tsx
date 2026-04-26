const IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1574015974293-817f0ebebb74?auto=format&fit=crop&q=80&w=400&h=400",
    height: "h-64",
  },
  {
    src: "https://images.unsplash.com/photo-1661327930345-9c6714b603b3?auto=format&fit=crop&q=80&w=400&h=400",
    height: "h-48",
  },
  {
    src: "https://images.unsplash.com/photo-1578508637199-240a8f25eff6?auto=format&fit=crop&q=80&w=400&h=400",
    height: "h-72",
  },
  {
    src: "https://images.unsplash.com/photo-1559745482-57bfa9ca5a8a?auto=format&fit=crop&q=80&w=400&h=400",
    height: "h-56",
  },
  {
    src: "https://images.unsplash.com/photo-1737608734653-d1eaad541d46?auto=format&fit=crop&q=80&w=400&h=400",
    height: "h-52",
  },
  {
    src: "https://images.unsplash.com/photo-1571028634586-ae87c1a42432?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBhbmQlMjB3aGl0ZXxlbnwwfHwwfHx8MA%3D%3D",
    height: "h-60",
  },
  {
    src: "https://images.unsplash.com/photo-1499428665502-503f6c608263?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    height: "h-80",
  },
  {
    src: "https://images.unsplash.com/photo-1532517308734-0565178471d2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    height: "h-44",
  },
  {
    src: "https://images.unsplash.com/photo-1574015974293-817f0ebebb74?auto=format&fit=crop&q=80&w=400&h=400",
    height: "h-68",
  },
  {
    src: "https://images.unsplash.com/photo-1661327930345-9c6714b603b3?auto=format&fit=crop&q=80&w=400&h=400",
    height: "h-56",
  },
  {
    src: "https://images.unsplash.com/photo-1578508637199-240a8f25eff6?auto=format&fit=crop&q=80&w=400&h=400",
    height: "h-64",
  },
  {
    src: "https://images.unsplash.com/photo-1559745482-57bfa9ca5a8a?auto=format&fit=crop&q=80&w=400&h=400",
    height: "h-52",
  },
]

export default function MasonryGridGallery() {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
      <div className="grid gap-3 md:gap-4">
        {IMAGES.slice(0, 3).map((image, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
          >
            <img
              className={`${image.height} h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-110`}
              src={image.src}
              alt={`gallery-photo-${index + 1}`}
            />
            <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
          </div>
        ))}
      </div>
      <div className="grid gap-3 md:gap-4">
        {IMAGES.slice(3, 6).map((image, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
          >
            <img
              className={`${image.height} h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-110`}
              src={image.src}
              alt={`gallery-photo-${index + 3}`}
            />
            <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
          </div>
        ))}
      </div>
      <div className="grid gap-3 md:gap-4">
        {IMAGES.slice(6, 9).map((image, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
          >
            <img
              className={`${image.height} h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-110`}
              src={image.src}
              alt={`gallery-photo-${index + 6}`}
            />
            <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
          </div>
        ))}
      </div>
      <div className="grid gap-3 md:gap-4">
        {IMAGES.slice(9, 12).map((image, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
          >
            <img
              className={`${image.height} h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-110`}
              src={image.src}
              alt={`gallery-photo-${index + 9}`}
            />
            <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
          </div>
        ))}
      </div>
    </div>
  )
}
