const LOGOS = [
  "https://rawcdn.githack.com/creativetimofficial/public-assets/d8ec9e04279740a9ddff8f2e99288f28839d4d58/material-tailwind-pro/logo/coinbase.svg",
  "https://rawcdn.githack.com/creativetimofficial/public-assets/d8ec9e04279740a9ddff8f2e99288f28839d4d58/material-tailwind-pro/logo/spotify.svg",
  "https://rawcdn.githack.com/creativetimofficial/public-assets/d8ec9e04279740a9ddff8f2e99288f28839d4d58/material-tailwind-pro/logo/pinterest.svg",
  "https://rawcdn.githack.com/creativetimofficial/public-assets/d8ec9e04279740a9ddff8f2e99288f28839d4d58/material-tailwind-pro/logo/google.svg",
  "https://rawcdn.githack.com/creativetimofficial/public-assets/d8ec9e04279740a9ddff8f2e99288f28839d4d58/material-tailwind-pro/logo/amazon.svg",
  "https://rawcdn.githack.com/creativetimofficial/public-assets/d8ec9e04279740a9ddff8f2e99288f28839d4d58/material-tailwind-pro/logo/netflix.svg",
]

export default function MinimalistLogoBlock() {
  return (
    <section className="py-8">
      <div className="container mx-auto text-center">
        <p className="mb-4 text-base font-semibold text-orange-500 md:text-lg">
          Awesome Product
        </p>
        <h2 className="mb-8 text-2xl font-bold md:text-3xl lg:text-4xl">
          Trusted by over 2,000,000+ <br />
          Web Developers
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {LOGOS.map((logo, key) => (
            <img
              key={key}
              alt="logo"
              src={logo}
              className="h-20 opacity-70 grayscale"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
