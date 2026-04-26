import { TriangleAlert } from "lucide-react"

export default function Minimalist500Error() {
  return (
    <section className="grid min-h-screen place-items-center">
      <div className="container mx-auto">
        <div className="text-center">
          <TriangleAlert className="mx-auto h-12 w-12 text-orange-500" />
          <h2 className="my-6 text-2xl font-bold md:text-3xl lg:text-4xl">
            Error 500
          </h2>
          <p className="text-base text-slate-600 md:text-lg">
            Server Error: Please Try Again Later
          </p>
        </div>
      </div>
    </section>
  )
}
