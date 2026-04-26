import { Button } from "@/components/ui/button"

const LOGOS = [
  {
    src: "https://v3.material-tailwind.com/icon/google.svg",
    alt: "google",
    position: "top-32 left-36",
  },
  {
    src: "https://v3.material-tailwind.com/icon/spotify.svg",
    alt: "spotify",
    position: "top-14 right-0",
  },
  {
    src: "https://v3.material-tailwind.com/icon/github.svg",
    alt: "github",
    position: "bottom-14 right-0",
  },
  {
    src: "https://v3.material-tailwind.com/icon/figma.svg",
    alt: "figma",
    position: "top-1 left-36",
  },
  {
    src: "https://v3.material-tailwind.com/icon/discord.svg",
    alt: "discord",
    position: "top-14 left-5",
  },
  {
    src: "https://v3.material-tailwind.com/icon/coinbase.svg",
    alt: "coinbase",
    position: "bottom-0 left-36",
  },
  {
    src: "https://v3.material-tailwind.com/icon/amazon.svg",
    alt: "amazon",
    position: "bottom-14 left-5",
  },
]

export default function CircleLogosBlock() {
  return (
    <section className="py-8">
      <div className="container mx-auto grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
        <div className="text-left">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl lg:text-4xl">
            Work with us
          </h2>
          <p className="mb-10 max-w-lg text-base text-slate-600">
            Whatever your qualification is - we got you! <br />
            <br />
            Take up one idea. Make that one idea your life - think of it, dream
            of it, live on that idea. Let the brain, muscles, nerves, every part
            of your body, be full of that idea, and just leave every other idea
            alone. This is the way to success. A single rose can be my garden...
            a single friend, my world.
          </p>
        </div>
        <div className="flex h-80 flex-wrap items-center justify-center gap-6">
          <div className="relative h-full w-full max-w-xs">
            {LOGOS.map((logo, key) => (
              <Button
                key={key}
                variant="outline"
                size="icon"
                className={`absolute ${logo.position} shadow-sm hover:shadow-lg`}
              >
                <img src={logo.src} alt={logo.alt} className="w-5" />
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
