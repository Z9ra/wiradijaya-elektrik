import { ArrowRight, Home, RefreshCw } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Error500WithCta() {
  return (
    <section className="grid min-h-screen place-items-center bg-gradient-to-br from-neutral-50 to-neutral-100 px-4 dark:from-neutral-900 dark:to-neutral-950">
      <div className="container mx-auto">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="group relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600 to-red-600 opacity-30 blur transition-all group-hover:opacity-50" />
              <div className="relative rounded-xl bg-white p-4 shadow-xl transition-all group-hover:shadow-2xl dark:bg-neutral-800">
                <img
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/9ce42b82642fce91f039df10e03229ae39a46f29/material-tailwind-pro/logo/google.svg"
                  alt="Google logo"
                  className="h-12 w-12 object-contain"
                />
              </div>
            </div>
          </div>

          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-1.5 text-sm font-semibold text-red-600 dark:bg-red-950/30 dark:text-red-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
            </span>
            Error 500
          </div>

          <h2 className="mb-4 text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">
            Internal Server Error
          </h2>

          <p className="text-muted-foreground mb-10 text-lg leading-relaxed">
            We're experiencing technical difficulties on our end. Our team has
            been notified and is working hard to resolve this issue. Please try
            again in a few moments.
          </p>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              className="w-full gap-2 sm:w-auto"
              variant="default"
            >
              <RefreshCw className="h-4 w-4" />
              Try Again
            </Button>
            <Button
              size="lg"
              className="w-full gap-2 sm:w-auto"
              variant="outline"
            >
              <Home className="h-4 w-4" />
              Go to Homepage
            </Button>
          </div>

          <div className="mt-12 border-t pt-8 dark:border-neutral-800">
            <p className="text-muted-foreground mb-4 text-sm">
              Need immediate assistance?
            </p>
            <Button variant="ghost" className="group gap-2">
              Contact Support Team
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
