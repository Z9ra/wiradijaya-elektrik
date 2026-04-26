export default function ImageWithCaption() {
  return (
    <figure>
      <img
        src="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&w=2000&q=85"
        alt="nature-image"
        className="h-96 w-full rounded-lg object-cover object-center"
      />
      <figcaption className="text-muted-foreground mt-2 block text-center text-sm">
        Image Caption
      </figcaption>
    </figure>
  )
}
