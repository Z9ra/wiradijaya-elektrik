"use client"

import { Avatar, AvatarImage } from "@/components/ui/avatar"

export default function BlogContentBlockWithQuotes() {
  return (
    <section className="grid min-h-screen place-items-center">
      <div className="mx-auto max-w-screen-md p-4">
        <img
          src="https://v3.material-tailwind.com/nature-3.jpg"
          alt="nature"
          className="mx-auto mb-2 h-full w-full rounded-lg"
        />
        <p className="text-primary text-sm">
          Photo by Jackson Sophat on &nbsp;
          <a href="#" className="text-sm underline">
            Unsplash
          </a>
        </p>
        <h2 className="mt-4 text-3xl leading-snug font-bold">
          Find more great partners
        </h2>
        <p className="text-foreground my-4 [text-wrap:_balance]">
          It really matters and then like it really doesn&apos;t matter. What
          matters is the people who are sparked by it. And the people who are
          like offended by it, it doesn&apos;t matter.
        </p>
        <p className="text-foreground [text-wrap:_balance]">
          We are here to make life better. And now I look and look around and
          there&apos;s so many Kanyes I&apos;ve been trying to figure out the
          bed design for the master bedroom at our Hidden Hills compound... and
          thank you for turning my personal jean jacket into a couture piece.I
          speak yell scream directly at the old guard on behalf of the future.
          daytime All respect prayers and love to Phife&apos;s family Thank you
          for so much inspiration.
        </p>
        <figure className="border-foreground/20 my-6 border-l-4 py-4 pl-4">
          <blockquote className="block text-left text-lg font-semibold [text-wrap:_balance] italic">
            &quot;And thank you for turning my personal jean jacket into a
            couture piece.&quot;
          </blockquote>
          <div className="mt-3 flex items-center gap-2">
            <Avatar className="h-6 w-6">
              <AvatarImage
                src="https://v3.material-tailwind.com/woman-profile-1.jpg"
                alt="avatar"
              />
            </Avatar>
            <p className="text-sm font-medium">— Kanye West, Producer</p>
          </div>
        </figure>
        <p className="text-foreground [text-wrap:_balance]">
          And now I look and look around and there&apos;s so many Kanyes
          I&apos;ve been trying to figure out the bed design for the master
          bedroom at our Hidden Hills compound... and thank you for turning my
          personal jean jacket into a couture piece. I love this new Ferg album!
          The Life of Pablo is now available for purchase I have a dream. Thank
          you to everybody who made The Life of Pablo the number 1 album in the
          world! I&apos;m so proud of the nr #1 song in the country. Panda! Good
          music!
        </p>
      </div>
    </section>
  )
}
