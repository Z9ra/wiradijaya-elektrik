"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

export default function ComplexFeaturesBlock2() {
  return (
    <section className="py-16">
      <div className="container mx-auto mb-10 text-center lg:mb-20">
        <p className="text-primary text-lg font-semibold">Features</p>
        <h2 className="text-foreground mx-auto my-4 max-w-lg text-3xl font-bold [text-wrap:balance]">
          Turn your idea into a startup
        </h2>
        <p className="text-foreground mx-auto max-w-xl text-lg [text-wrap:balance]">
          We&apos;re constantly trying to express ourselves and actualize our
          dreams. If you have the opportunity to play
        </p>
      </div>
      <div className="container mx-auto mb-8 grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:gap-x-8">
        <Card className="bg-surface-light col-span-1 overflow-hidden border-0 shadow-none">
          <div className="p-8">
            <h5 className="text-foreground mb-2 text-center text-xl font-bold">
              Mix and Match
            </h5>
            <p className="text-foreground mx-auto mb-0 max-w-xs text-center font-normal">
              We get insulted by others, lose trust for those We get back.
            </p>
          </div>
          <img
            src="https://v3.material-tailwind.com/iphone-half-mockup.png"
            alt="iphone"
            className="mx-auto max-h-96"
          />
        </Card>
        <Card className="bg-surface-light col-span-1 overflow-hidden border-0 shadow-none">
          <div className="p-8">
            <h5 className="text-foreground mb-2 text-center text-xl font-bold">
              Components
            </h5>
            <p className="text-foreground mx-auto mb-0 max-w-xs text-center font-normal">
              We get insulted by others, lose trust for those We get back.
            </p>
          </div>
          <img
            src="https://v3.material-tailwind.com/iphone-half-mockup.png"
            alt="iphone"
            className="mx-auto max-h-96"
          />
        </Card>
        <Card className="bg-surface-light col-span-1 overflow-hidden border-0 shadow-none">
          <div className="p-8">
            <h5 className="text-foreground mb-2 text-center text-xl font-bold">
              Fully Responsive
            </h5>
            <p className="text-foreground mx-auto mb-0 max-w-xs text-center font-normal">
              We get insulted by others, lose trust for those We get back.
            </p>
          </div>
          <img
            src="https://v3.material-tailwind.com/iphone-half-mockup.png"
            alt="iphone"
            className="mx-auto max-h-96"
          />
        </Card>
      </div>
      <Card className="bg-surface-light container mx-auto border-0 shadow-none">
        <CardContent className="grid items-center gap-8 p-8 lg:grid-cols-2">
          <div className="grid lg:pr-12">
            <p className="text-primary mb-2 text-lg font-semibold">
              Mobile Application
            </p>
            <h5 className="text-foreground mb-2 text-xl font-bold">
              Check the features
            </h5>
            <p className="text-foreground mb-8">
              People in this world shun people for being great. For being a
              bright color. For standing out.
            </p>
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage
                  src="https://v3.material-tailwind.com/team-1.jpg"
                  alt="user"
                />
                <AvatarFallback>TA</AvatarFallback>
              </Avatar>
              <div>
                <h6 className="text-foreground text-base font-semibold">
                  Tania Andrew
                </h6>
                <p className="text-foreground">@tania.andrew</p>
              </div>
            </div>
          </div>
          <img
            src="https://v3.material-tailwind.com/mobile-mockup.png"
            alt="iphone"
            className="max-h-96"
          />
        </CardContent>
      </Card>
    </section>
  )
}
