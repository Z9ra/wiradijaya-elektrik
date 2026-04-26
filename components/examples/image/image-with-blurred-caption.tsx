import { Card, CardContent } from "@/components/ui/card"

export default function ImageWithBlurredCaption() {
  return (
    <figure className="relative h-96 w-full">
      <img
        src="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&w=2000&q=85"
        alt="nature-image"
        className="h-full w-full rounded-xl object-cover object-center"
      />
      <Card className="bg-background/75 absolute bottom-4 left-1/2 w-[calc(100%-2rem)] -translate-x-1/2 backdrop-blur-md">
        <CardContent className="flex justify-between px-4 py-3">
          <div>
            <h6 className="font-semibold">Sara Lamalo</h6>
            <p className="text-muted-foreground mt-1 text-sm">20 July 2022</p>
          </div>
          <p className="font-bold">Growth</p>
        </CardContent>
      </Card>
    </figure>
  )
}
