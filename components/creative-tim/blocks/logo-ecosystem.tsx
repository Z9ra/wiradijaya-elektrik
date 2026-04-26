import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const TOP_ROW = [
  {
    src: "https://v3.material-tailwind.com/icon/binance.svg",
    alt: "binance",
    justify: "justify-start",
  },
  {
    src: "https://v3.material-tailwind.com/icon/google.svg",
    alt: "google",
    justify: "justify-center",
  },
  {
    src: "https://v3.material-tailwind.com/icon/spotify.svg",
    alt: "spotify",
    justify: "justify-end",
  },
]

const MIDDLE_ROW = [
  {
    src: "https://v3.material-tailwind.com/icon/coinbase.svg",
    alt: "coinbase",
  },
  {
    src: "https://v3.material-tailwind.com/icon/github.svg",
    alt: "github",
  },
]

const BOTTOM_ROW = [
  {
    src: "https://v3.material-tailwind.com/icon/amazon.svg",
    alt: "amazon",
    justify: "justify-start",
  },
  {
    src: "https://v3.material-tailwind.com/icon/figma.svg",
    alt: "figma",
    justify: "justify-center",
  },
  {
    src: "https://v3.material-tailwind.com/icon/discord.svg",
    alt: "discord",
    justify: "justify-end",
  },
]

export default function LogoEcosystem() {
  return (
    <section className="py-8">
      <div className="container mx-auto grid place-content-center text-center">
        <Badge
          variant="outline"
          className="mx-auto mb-6 max-w-fit rounded-full p-0.5"
        >
          <span className="mx-2.5 my-1 leading-none">Tool Ecosystem</span>
        </Badge>
        <h2 className="mt-6 mb-4 text-2xl font-bold md:text-3xl lg:text-4xl">
          Seamlessly Connected Tools
        </h2>
        <p className="mx-auto max-w-4xl text-base text-slate-600">
          Our services work in harmony with these tools, ensuring compatibility
          and smooth operation, which allows for enhanced productivity and a
          more simplified process management.
        </p>
        <div className="relative mx-auto mt-20 flex h-64 w-full max-w-3xl scale-95 flex-col justify-between sm:scale-100">
          <span className="absolute top-0 left-1/2 h-full w-0.5 -translate-x-1/2 border-l border-dashed border-slate-200"></span>
          <div className="relative grid grid-cols-3">
            <span className="absolute top-1/2 left-0 h-0.5 w-full -translate-y-1/2 border-t border-dashed border-slate-200"></span>
            {TOP_ROW.map((logo, key) => (
              <div key={key} className={`flex ${logo.justify}`}>
                <Button
                  variant="outline"
                  size="icon"
                  className="z-10 bg-white shadow-sm hover:shadow-lg"
                >
                  <img src={logo.src} alt={logo.alt} className="w-6" />
                </Button>
              </div>
            ))}
          </div>
          <div className="relative grid grid-cols-2">
            {MIDDLE_ROW.map((logo, key) => (
              <div key={key} className="flex justify-center">
                <Button
                  variant="outline"
                  size="icon"
                  className="z-10 bg-white shadow-sm hover:shadow-lg"
                >
                  <img src={logo.src} alt={logo.alt} className="w-6" />
                </Button>
              </div>
            ))}
          </div>
          <div className="relative grid grid-cols-3">
            {BOTTOM_ROW.map((logo, key) => (
              <div key={key} className={`flex ${logo.justify}`}>
                <Button
                  variant="outline"
                  size="icon"
                  className="z-10 bg-white shadow-sm hover:shadow-lg"
                >
                  <img src={logo.src} alt={logo.alt} className="w-6" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
