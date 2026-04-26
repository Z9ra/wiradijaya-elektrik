import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const LOGOS_LEFT = [
  {
    src: "https://v3.material-tailwind.com/logo/coinbase.svg",
    alt: "coinbase",
    url: "coinbase.com",
  },
  {
    src: "https://v3.material-tailwind.com/logo/amazon.svg",
    alt: "amazon",
    url: "amazon.com",
  },
]

const LOGOS_RIGHT = [
  {
    src: "https://v3.material-tailwind.com/logo/spotify.svg",
    alt: "spotify",
    url: "spotify.com",
  },
  {
    src: "https://v3.material-tailwind.com/logo/google.svg",
    alt: "google",
    url: "google.com",
  },
]

export default function LogoBlockWithCards() {
  return (
    <section className="py-16">
      <div className="container mx-auto grid place-content-center">
        <p className="mb-4 text-center text-base font-semibold md:text-lg">
          More than 50+ brands trust us
        </p>
        <h2 className="mb-4 text-center text-2xl font-bold md:text-3xl lg:text-4xl">
          Trusted by Leading Brands
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-center text-base text-slate-600 md:text-lg">
          From innovative startups to Fortune 500 companies, our client list
          spans a spectrum of sectors, each with unique challenges that
          we&apos;ve successfully navigated.
        </p>
        <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row">
          <div className="flex flex-col items-center justify-center gap-6">
            {LOGOS_LEFT.map((logo, key) => (
              <Card
                key={key}
                className="w-full overflow-hidden bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <CardContent className="h-max rounded px-8 py-4">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="mx-auto w-40 lg:w-56"
                  />
                  <small className="text-muted-foreground block text-center text-sm">
                    {logo.url}
                  </small>
                </CardContent>
              </Card>
            ))}
          </div>
          <Card className="grid w-full place-items-center overflow-hidden bg-white shadow-sm transition-shadow hover:shadow-md">
            <CardContent className="h-max rounded px-8 py-4">
              <img
                src="https://v3.material-tailwind.com/logo/netflix.svg"
                alt="netflix"
                className="mx-auto w-40"
              />
              <small className="text-muted-foreground mb-6 block text-center text-sm">
                netflix.com
              </small>
              <small className="text-muted-foreground mx-auto block text-center text-sm font-normal lg:max-w-[256px]">
                &quot;It have broadened our horizons and helped me advance my
                career. The community is incredibly supportive &quot;
              </small>
            </CardContent>
          </Card>
          <div className="flex flex-col items-center justify-center gap-6">
            {LOGOS_RIGHT.map((logo, key) => (
              <Card
                key={key}
                className="w-full overflow-hidden bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <CardContent className="h-max rounded px-8 py-4">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="mx-auto w-40 lg:w-56"
                  />
                  <small className="text-muted-foreground block text-center text-sm">
                    {logo.url}
                  </small>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Button variant="outline" className="mx-auto mt-8 flex">
        See all projects
      </Button>
    </section>
  )
}
