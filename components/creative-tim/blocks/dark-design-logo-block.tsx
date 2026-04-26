import { Sparkles } from "lucide-react"

const LOGOS = [
  "https://rawcdn.githack.com/creativetimofficial/public-assets/844f9fdea4f1d84c405eaf9a328f044287d593d9/material-tailwind-pro/fade-logo/google.png",
  "https://rawcdn.githack.com/creativetimofficial/public-assets/844f9fdea4f1d84c405eaf9a328f044287d593d9/material-tailwind-pro/fade-logo/amazon.png",
  "https://rawcdn.githack.com/creativetimofficial/public-assets/844f9fdea4f1d84c405eaf9a328f044287d593d9/material-tailwind-pro/fade-logo/spotify.png",
  "https://rawcdn.githack.com/creativetimofficial/public-assets/844f9fdea4f1d84c405eaf9a328f044287d593d9/material-tailwind-pro/fade-logo/pinterest.png",
  "https://rawcdn.githack.com/creativetimofficial/public-assets/844f9fdea4f1d84c405eaf9a328f044287d593d9/material-tailwind-pro/fade-logo/coinbase.png",
  "https://rawcdn.githack.com/creativetimofficial/public-assets/844f9fdea4f1d84c405eaf9a328f044287d593d9/material-tailwind-pro/fade-logo/netflix.png",
]

export default function DarkDesignLogoBlock() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-950 to-black py-20 md:py-28">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-sm">
          <Sparkles className="h-3.5 w-3.5" />
          Industry Leading
        </div>

        <h2 className="mx-auto mb-4 max-w-4xl text-4xl leading-tight font-bold text-white md:text-5xl lg:text-6xl">
          Trusted by over 2,000,000+
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Web Developers
          </span>
        </h2>

        <p className="mx-auto mb-16 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
          Join the world's leading companies and developers who build with our
          platform every day.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {LOGOS.map((logo, key) => (
            <div
              key={key}
              className="group relative transition-transform hover:scale-110"
            >
              <div className="absolute -inset-2 rounded-lg bg-gradient-to-r from-blue-600/0 to-purple-600/0 opacity-0 blur transition-all group-hover:from-blue-600/20 group-hover:to-purple-600/20 group-hover:opacity-100" />
              <img
                alt={`Company logo ${key + 1}`}
                src={logo}
                className="relative h-auto w-32 brightness-0 invert transition-all group-hover:brightness-100 group-hover:invert-0 md:w-40"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
