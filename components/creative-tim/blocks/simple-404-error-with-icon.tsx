import { ShoppingBag } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Simple404ErrorWithIcon() {
  return (
    <section className="grid min-h-screen place-items-center">
      <div className="container mx-auto">
        <div className="text-center">
          <ShoppingBag className="mx-auto h-20 w-20 text-slate-800" />
          <h2 className="mt-8 mb-6 text-2xl font-bold md:text-3xl lg:text-4xl">
            Error 404 <br /> It looks like something went wrong.
          </h2>
          <p className="mx-auto mb-12 max-w-xl text-base [text-wrap:_balance] text-slate-600 md:text-lg">
            Don't worry, our team is already on it. Please try refreshing the
            page or come back later.
          </p>
          <Button className="shadow-sm hover:shadow-md">Back to Home</Button>
        </div>
      </div>
    </section>
  )
}
