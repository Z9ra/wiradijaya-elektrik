import { Heart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function OnboardingWelcomeBlock() {
  return (
    <div className="grid min-h-screen place-items-center p-4 sm:p-6">
      <Card className="mx-auto w-full max-w-lg overflow-hidden shadow-xl">
        <div className="m-0 h-max w-full px-6 pt-8 pb-4 sm:px-8 sm:pt-10 md:px-12 md:pt-12 lg:px-14 lg:pt-14">
          <div className="mb-6 inline-flex items-center justify-center rounded-full bg-neutral-900 p-4">
            <Heart className="h-10 w-10 fill-white text-white sm:h-12 sm:w-12" />
          </div>
          <h2 className="mb-3 text-2xl font-bold sm:text-3xl lg:text-4xl">
            Welcome to our community!
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Let's get you started on an amazing journey
          </p>
        </div>
        <div className="h-max w-full space-y-4 px-6 py-4 sm:px-8 md:px-12 lg:px-14">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-neutral-900 text-xs font-bold text-white">
                1
              </div>
              <div>
                <h3 className="mb-1 text-sm font-semibold sm:text-base">
                  Complete your profile
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm">
                  Add your details to personalize your experience
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-neutral-900 text-xs font-bold text-white">
                2
              </div>
              <div>
                <h3 className="mb-1 text-sm font-semibold sm:text-base">
                  Explore features
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm">
                  Discover all the tools and resources available
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-neutral-900 text-xs font-bold text-white">
                3
              </div>
              <div>
                <h3 className="mb-1 text-sm font-semibold sm:text-base">
                  Connect with others
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm">
                  Join a vibrant community of like-minded people
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col gap-3 px-6 pt-6 pb-8 sm:flex-row sm:gap-3 sm:px-8 md:px-12 lg:px-14 lg:pb-14">
          <Button variant="outline" className="w-full sm:w-1/2" size="lg">
            Skip for now
          </Button>
          <Button className="w-full sm:w-1/2" size="lg">
            Get Started
          </Button>
        </div>
      </Card>
    </div>
  )
}
