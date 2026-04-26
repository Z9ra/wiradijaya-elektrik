import { Facebook, Github, Instagram, Timer } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function MaintenanceBlockWithSocialLinks() {
  return (
    <section
      className="relative grid min-h-screen place-items-center bg-cover bg-center px-4"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1573588028698-f4759befb09a?auto=format&w=2000&q=85)",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/70" />
      <div className="relative z-10 container mx-auto">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="group cursor-pointer rounded-xl bg-white/10 px-6 py-3 shadow-xl backdrop-blur-sm transition-all hover:bg-white/20 hover:shadow-2xl">
              <h1 className="text-2xl font-bold text-white">Creative Tim UI</h1>
            </div>
          </div>

          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">
            <Timer className="h-3.5 w-3.5" />
            Scheduled Maintenance
          </div>

          <h2 className="mb-6 text-4xl leading-tight font-bold text-white md:text-5xl lg:text-6xl">
            We'll Be Back Soon!
          </h2>

          <p className="mx-auto mb-4 max-w-xl text-base leading-relaxed text-white/90 md:text-lg">
            We're currently performing scheduled maintenance to enhance your
            experience. Our team is working hard to bring you exciting new
            features and improvements.
          </p>

          <p className="mx-auto mb-12 text-base text-white/80 md:text-lg">
            Thank you for your patience. We'll be back before you know it!
          </p>

          <p className="mb-6 text-base font-semibold text-white">
            Stay connected with us:
          </p>

          <div className="flex items-center justify-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="h-12 w-12 border-2 border-white/20 bg-white/10 text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/20 hover:shadow-lg"
            >
              <Facebook className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-12 w-12 border-2 border-white/20 bg-white/10 text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/20 hover:shadow-lg"
            >
              <Instagram className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-12 w-12 border-2 border-white/20 bg-white/10 text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/20 hover:shadow-lg"
            >
              <Github className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
