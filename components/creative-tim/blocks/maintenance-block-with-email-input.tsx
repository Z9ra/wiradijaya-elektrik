import { Bell } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function MaintenanceBlockWithEmailInput() {
  return (
    <section className="grid min-h-screen place-items-center bg-gradient-to-br from-neutral-50 to-neutral-100 px-4 dark:from-neutral-900 dark:to-neutral-950">
      <div className="container mx-auto">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="group cursor-pointer rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 px-6 py-3 shadow-xl transition-all hover:shadow-2xl dark:from-neutral-100 dark:to-neutral-200">
              <h1 className="text-2xl font-bold text-white dark:text-neutral-900">
                Creative Tim UI
              </h1>
            </div>
          </div>

          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-1.5 text-sm font-semibold text-orange-600 dark:bg-orange-950/30 dark:text-orange-400">
            <Bell className="h-3.5 w-3.5" />
            Under Maintenance
          </div>

          <h2 className="mb-4 text-3xl leading-tight font-bold md:text-4xl lg:text-5xl">
            Website Undergoing Updates
          </h2>

          <p className="text-muted-foreground mx-auto mb-12 max-w-xl text-base leading-relaxed md:text-lg">
            We're currently performing scheduled maintenance to improve your
            experience. We'll be back online shortly. Leave your email to be
            notified when we're live again.
          </p>

          <div className="mx-auto flex w-full max-w-lg flex-col gap-3 text-left md:flex-row md:items-end">
            <div className="w-full space-y-2">
              <Label
                htmlFor="email"
                className="text-foreground text-sm font-semibold"
              >
                Your Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                className="h-11 shadow-sm"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="shrink-0 shadow-lg transition-all hover:shadow-xl"
            >
              <Bell className="mr-2 h-4 w-4" />
              Notify Me
            </Button>
          </div>

          <p className="text-muted-foreground mt-8 text-sm">
            We appreciate your patience and understanding.
          </p>
        </div>
      </div>
    </section>
  )
}
