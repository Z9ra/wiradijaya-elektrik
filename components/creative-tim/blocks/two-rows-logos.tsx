const LOGOS = [
  "https://rawcdn.githack.com/creativetimofficial/public-assets/d8ec9e04279740a9ddff8f2e99288f28839d4d58/material-tailwind-pro/logo/coinbase.svg",
  "https://rawcdn.githack.com/creativetimofficial/public-assets/d8ec9e04279740a9ddff8f2e99288f28839d4d58/material-tailwind-pro/logo/spotify.svg",
  "https://rawcdn.githack.com/creativetimofficial/public-assets/d8ec9e04279740a9ddff8f2e99288f28839d4d58/material-tailwind-pro/logo/pinterest.svg",
  "https://rawcdn.githack.com/creativetimofficial/public-assets/d8ec9e04279740a9ddff8f2e99288f28839d4d58/material-tailwind-pro/logo/google.svg",
  "https://rawcdn.githack.com/creativetimofficial/public-assets/d8ec9e04279740a9ddff8f2e99288f28839d4d58/material-tailwind-pro/logo/amazon.svg",
  "https://rawcdn.githack.com/creativetimofficial/public-assets/d8ec9e04279740a9ddff8f2e99288f28839d4d58/material-tailwind-pro/logo/netflix.svg",
]

export default function TwoRowsLogos() {
  return (
    <section className="py-8">
      <div className="container mx-auto grid items-center gap-8 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <p className="mb-4 text-base font-semibold md:text-lg">
            Awesome Product
          </p>
          <h2 className="mb-4 text-2xl font-bold md:text-3xl lg:text-4xl">
            Trusted by over 2,000,000+ <br />
            Web Developers
          </h2>
          <p className="mb-10 text-base text-slate-600">
            It really matters and then like it really doesn&apos;t matter. What
            matters is the people who are sparked by it. And the people who are
            like offended by it, it doesn&apos;t matter.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {LOGOS.map((logo, key) => (
            <img key={key} alt="logo" src={logo} className="h-20" />
          ))}
        </div>
      </div>
    </section>
  )
}
