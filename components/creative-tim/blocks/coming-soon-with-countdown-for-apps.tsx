"use client"

import { Smartphone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const AppleLogo = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-6 w-6"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
  </svg>
)

const AndroidLogo = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-6 w-6"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.523 15.341l-.003.002c-.518 0-.937-.42-.937-.938s.42-.938.937-.938c.518 0 .937.42.937.938s-.419.938-.934.938zm-10.99 0c-.518 0-.938-.42-.938-.938s.42-.938.938-.938.938.42.938.938-.42.938-.938.938zM13.465 4.527l1.223-2.043c.094-.158.047-.361-.104-.458-.152-.095-.355-.049-.453.104l-1.238 2.07c-1.012-.434-2.152-.676-3.349-.676-1.198 0-2.337.242-3.348.676L4.957 2.13c-.098-.153-.301-.199-.453-.104-.151.097-.198.3-.104.458l1.223 2.043C3.473 5.681 2 7.785 2 10.212V11h19.544v-.788c0-2.427-1.473-4.531-3.623-5.685h.544zm-8.93 4.027c-.414 0-.75-.335-.75-.75 0-.414.336-.75.75-.75s.75.336.75.75c0 .415-.336.75-.75.75zm10.887 0c-.414 0-.75-.335-.75-.75 0-.414.336-.75.75-.75s.75.336.75.75c0 .415-.336.75-.75.75zM2.461 12.542v4.84c0 .793.645 1.438 1.438 1.438h.856v3.246c0 .836.68 1.516 1.516 1.516s1.516-.68 1.516-1.516v-3.246h3.971v3.246c0 .836.68 1.516 1.516 1.516s1.516-.68 1.516-1.516v-3.246h.856c.793 0 1.438-.645 1.438-1.438v-4.84H2.461z" />
  </svg>
)

export default function ComingSoonWithCountdownForApps() {
  return (
    <section className="px-6">
      <div className="grid h-full min-h-[calc(100vh-48px)] grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div className="hidden h-[calc(100vh-3rem)] w-full items-center justify-center lg:flex">
          <img
            src="https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/creative-ai/mockup-iphone.png"
            alt="iPhone App Mockup"
            className="h-full w-auto object-contain"
          />
        </div>

        <div className="mx-auto grid min-h-screen max-w-lg place-items-center py-12">
          <div className="w-full">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-700 p-3">
                <Smartphone className="h-6 w-6 text-white" />
              </div>
              <span className="text-lg font-bold">Creative Tim UI</span>
            </div>

            <h1 className="mb-4 text-3xl !leading-tight font-bold [text-wrap:balance] md:text-4xl lg:text-5xl">
              Your New Favorite App is Coming Soon!
            </h1>

            <p className="text-muted-foreground mb-8 max-w-xl text-base [text-wrap:balance] md:text-lg">
              Experience the future of mobile development. We're crafting an
              innovative app that will transform the way you work and create.
              Join the waitlist for exclusive early access.
            </p>

            <form className="mb-8 space-y-4">
              <div className="flex w-full flex-col gap-3 sm:flex-row">
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  className="h-12 flex-1 border-2 transition-all focus:border-neutral-900"
                />
                <Button
                  type="submit"
                  className="h-12 shrink-0 bg-neutral-900 px-8 text-base font-semibold transition-all hover:bg-neutral-800 sm:w-auto"
                >
                  Get Early Access
                </Button>
              </div>
            </form>

            <div className="space-y-4">
              <p className="text-muted-foreground text-sm font-semibold tracking-wide uppercase">
                Available On
              </p>

              <div className="flex flex-wrap gap-3">
                <Button
                  variant="outline"
                  className="h-12 gap-3 border-2 px-6 transition-all hover:border-neutral-900 hover:bg-neutral-900 hover:text-white"
                >
                  <AppleLogo />
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </Button>

                <Button
                  variant="outline"
                  className="h-12 gap-3 border-2 px-6 transition-all hover:border-neutral-900 hover:bg-neutral-900 hover:text-white"
                >
                  <AndroidLogo />
                  <div className="text-left">
                    <div className="text-xs">Get it on</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </Button>
              </div>
            </div>

            <p className="text-muted-foreground mt-8 text-xs">
              By signing up, you agree to receive updates about our app launch.
              Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
