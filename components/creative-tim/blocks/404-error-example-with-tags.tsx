import { ArrowRight, FileQuestion, Home, Mail, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Error404ExampleWithTags() {
  return (
    <section className="grid min-h-screen place-items-center bg-gradient-to-br from-neutral-50 to-neutral-100 px-4 dark:from-neutral-900 dark:to-neutral-950">
      <div className="container mx-auto">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-orange-400 to-red-400 opacity-20 blur-xl" />
              <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-red-500 shadow-xl">
                <FileQuestion
                  className="h-12 w-12 text-white"
                  strokeWidth={2}
                />
              </div>
            </div>
          </div>

          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-1.5 text-sm font-semibold text-orange-600 dark:bg-orange-950/30 dark:text-orange-400">
            Error 404
          </div>

          <h1 className="mb-4 text-5xl leading-tight font-bold md:text-6xl lg:text-7xl">
            Page Not Found
          </h1>

          <h2 className="text-muted-foreground mb-6 text-xl font-semibold md:text-2xl">
            Sorry, We Misplaced That Page
          </h2>

          <p className="text-muted-foreground mx-auto mb-4 max-w-2xl text-base leading-relaxed md:text-lg">
            Our digital librarian seems to have misplaced the page you
            requested. The page you're looking for might have been moved,
            deleted, or doesn't exist.
          </p>

          <p className="text-muted-foreground mx-auto mb-10 text-base md:text-lg">
            Try searching or explore these helpful links:
          </p>

          <div className="mx-auto mb-10 max-w-md">
            <div className="relative">
              <Search className="text-muted-foreground absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2" />
              <Input
                type="search"
                placeholder="Search for pages, content..."
                className="h-12 pr-4 pl-10 shadow-sm"
              />
            </div>
          </div>

          <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
            <Button
              size="lg"
              className="group gap-2 shadow-lg transition-all hover:shadow-xl"
            >
              <Home className="h-4 w-4" />
              Go to Homepage
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Mail className="h-4 w-4" />
              Contact Support
            </Button>
          </div>

          <div className="border-t pt-8 dark:border-neutral-800">
            <p className="text-muted-foreground mb-4 text-sm font-medium">
              Quick Links
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                className="text-orange-600 hover:bg-orange-50 hover:text-orange-700 dark:text-orange-400 dark:hover:bg-orange-950/30"
              >
                Documentation
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-orange-600 hover:bg-orange-50 hover:text-orange-700 dark:text-orange-400 dark:hover:bg-orange-950/30"
              >
                Blog
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-orange-600 hover:bg-orange-50 hover:text-orange-700 dark:text-orange-400 dark:hover:bg-orange-950/30"
              >
                Help Center
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-orange-600 hover:bg-orange-50 hover:text-orange-700 dark:text-orange-400 dark:hover:bg-orange-950/30"
              >
                Community
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
