const LOGOS = [
  "https://rawcdn.githack.com/creativetimofficial/public-assets/d8ec9e04279740a9ddff8f2e99288f28839d4d58/material-tailwind-pro/logo/coinbase.svg",
  "https://rawcdn.githack.com/creativetimofficial/public-assets/d8ec9e04279740a9ddff8f2e99288f28839d4d58/material-tailwind-pro/logo/spotify.svg",
  "https://rawcdn.githack.com/creativetimofficial/public-assets/d8ec9e04279740a9ddff8f2e99288f28839d4d58/material-tailwind-pro/logo/pinterest.svg",
  "https://rawcdn.githack.com/creativetimofficial/public-assets/d8ec9e04279740a9ddff8f2e99288f28839d4d58/material-tailwind-pro/logo/google.svg",
  "https://rawcdn.githack.com/creativetimofficial/public-assets/d8ec9e04279740a9ddff8f2e99288f28839d4d58/material-tailwind-pro/logo/amazon.svg",
  "https://rawcdn.githack.com/creativetimofficial/public-assets/d8ec9e04279740a9ddff8f2e99288f28839d4d58/material-tailwind-pro/logo/netflix.svg",
]

export default function SimpleLogoBlock() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-foreground mb-10 text-xl font-bold md:text-2xl">
          Trusted by Industry Leaders
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-10">
          {LOGOS.map((logo, key) => (
            <img
              key={key}
              alt={`Company logo ${key + 1}`}
              src={logo}
              className="h-16 opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0 md:h-20"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
