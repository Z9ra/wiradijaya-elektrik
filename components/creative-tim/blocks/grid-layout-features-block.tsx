"use client"

import { Card, CardContent } from "@/components/ui/card"

export default function GridLayoutFeaturesBlock() {
  return (
    <section className="py-16">
      <div className="container mx-auto mb-10 text-center lg:mb-20">
        <p className="text-primary text-lg font-semibold">Features</p>
        <h2 className="text-foreground mx-auto my-4 max-w-lg text-3xl font-bold [text-wrap:balance]">
          Discover the effortless way to keep your data in harmony
        </h2>
        <p className="text-foreground mx-auto max-w-xl text-lg [text-wrap:balance]">
          Our platform provides comprehensive analytics for businesses of all
          sizes, offering intuitive dashboards, detailed reports, and
          customizable alerts.
        </p>
      </div>
      <div className="container mx-auto space-y-8">
        <Card className="bg-surface-light grid grid-cols-1 items-center border-0 p-6 shadow-none md:grid-cols-2">
          <div className="grid place-items-center">
            <div className="space-y-16">
              <div>
                <img
                  src="https://v3.material-tailwind.com/icon/github.svg"
                  alt="github"
                  className="h-8 w-8 md:h-12 md:w-12"
                />
                <h6 className="text-foreground mt-4 mb-2 text-lg font-semibold">
                  Payment Vendor
                </h6>
                <p className="text-foreground">
                  We get insulted by others, lose trust for those We get back
                  freezes
                </p>
              </div>
              <div>
                <img
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/9ce42b82642fce91f039df10e03229ae39a46f29/material-tailwind-pro/v3/icon/google.svg"
                  alt="google"
                  className="h-8 w-8 md:h-12 md:w-12"
                />
                <h6 className="text-foreground mt-4 mb-2 text-lg font-semibold">
                  Detailed reports
                </h6>
                <p className="text-foreground">
                  We get insulted by others, lose trust for those We get back
                  freezes
                </p>
              </div>
            </div>
          </div>
          <img
            src="https://v3.material-tailwind.com/iphone-half-mockup.png"
            alt="iphone"
            className="mx-auto max-h-64 md:max-h-96"
          />
        </Card>
        <Card className="bg-surface-light grid grid-cols-1 items-center border-0 p-6 shadow-none md:grid-cols-2">
          <img
            src="https://v3.material-tailwind.com/iphone-half-mockup.png"
            alt="iphone"
            className="row-start-2 mx-auto max-h-64 md:row-start-1 md:max-h-96"
          />
          <div className="grid place-items-center md:col-start-2">
            <div className="space-y-16">
              <div>
                <img
                  src="https://raw.githubusercontent.com/creativetimofficial/public-assets/9ce42b82642fce91f039df10e03229ae39a46f29/material-tailwind-pro/v3/icon/discord.svg"
                  alt="discord"
                  className="h-8 w-8 md:h-12 md:w-12"
                />
                <h6 className="text-foreground mt-4 mb-2 text-lg font-semibold">
                  Unrestricted access
                </h6>
                <p className="text-foreground">
                  We get insulted by others, lose trust for those We get back
                  freezes
                </p>
              </div>
              <div>
                <img
                  src="https://v3.material-tailwind.com/icon/figma.svg"
                  alt="figma"
                  className="h-8 w-8 md:h-12 md:w-12"
                />
                <h6 className="text-foreground mt-4 mb-2 text-lg font-semibold">
                  Global network
                </h6>
                <p className="text-foreground">
                  We get insulted by others, lose trust for those We get back
                  freezes
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
