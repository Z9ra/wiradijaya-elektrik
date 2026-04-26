import { Button } from "@/components/ui/button"

export default function Error404WithEmoji() {
  return (
    <section className="grid min-h-screen place-items-center">
      <div className="container mx-auto">
        <div className="text-center">
          <h1 className="mt-8 mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
            404 😢
          </h1>
          <h2 className="mt-8 mb-6 text-2xl font-bold md:text-3xl lg:text-4xl">
            Lost in the Digital Wilderness
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-base [text-wrap:_balance] text-slate-600 md:text-lg">
            You've ventured into uncharted digital territory. The page you seek
            has eluded us. Let's guide you back to familiar paths.
          </p>
          <Button className="shadow-sm hover:shadow-md">Back to Home</Button>
        </div>
      </div>
    </section>
  )
}
