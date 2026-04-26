import { Home, Lock, MessageCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Error404WithIconLinks() {
  return (
    <section className="grid min-h-screen place-items-center">
      <div className="container mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            Error 404
          </h1>
          <h2 className="my-6 text-xl font-bold md:text-2xl lg:text-3xl">
            Sorry, We Misplaced That Page
          </h2>
          <p className="mx-auto max-w-xl text-base [text-wrap:_balance] text-slate-600 md:text-lg">
            Our digital librarian seems to have misplaced the page you
            requested. Stay with us, and we'll help you rediscover it.
          </p>
          <p className="mx-auto my-10 text-base [text-wrap:_balance] text-slate-600 md:text-lg">
            Here, instead, you'll find some useful links.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Card className="grid w-full max-w-[150px] justify-items-center p-4">
              <Home className="mb-4 h-8 w-8" />
              <Button size="sm" className="w-full shadow-sm hover:shadow">
                Home Page
              </Button>
            </Card>
            <Card className="grid w-full max-w-[150px] justify-items-center p-4">
              <Lock className="mb-4 h-8 w-8" />
              <Button size="sm" className="w-full shadow-sm hover:shadow">
                Products
              </Button>
            </Card>
            <Card className="grid w-full max-w-[150px] justify-items-center p-4">
              <MessageCircle className="mb-4 h-8 w-8" />
              <Button size="sm" className="w-full shadow-sm hover:shadow">
                Contact Us
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
