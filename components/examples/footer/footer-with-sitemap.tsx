import { Dribbble, Facebook, Github, Instagram, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"

const LINKS = [
  {
    title: "Company",
    items: [
      {
        title: "About us",
        href: "#",
      },
      {
        title: "Careers",
        href: "#",
      },
      {
        title: "Press",
        href: "#",
      },
      {
        title: "News",
        href: "#",
      },
    ],
  },
  {
    title: "Help Center",
    items: [
      {
        title: "Discord",
        href: "#",
      },
      {
        title: "Twitter",
        href: "#",
      },
      {
        title: "GitHub",
        href: "#",
      },
      {
        title: "Contact Us",
        href: "#",
      },
    ],
  },
  {
    title: "Resources",
    items: [
      {
        title: "Blog",
        href: "#",
      },
      {
        title: "Newsletter",
        href: "#",
      },
      {
        title: "Free Products",
        href: "#",
      },
      {
        title: "Affiliate Program",
        href: "#",
      },
    ],
  },
  {
    title: "Products",
    items: [
      {
        title: "Templates",
        href: "#",
      },
      {
        title: "UI Kits",
        href: "#",
      },
      {
        title: "Icons",
        href: "#",
      },
      {
        title: "Mockups",
        href: "#",
      },
    ],
  },
]

const YEAR = new Date().getFullYear()

export default function FooterWithSitemap() {
  return (
    <footer className="relative w-full">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="mx-auto grid w-full grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
          {LINKS.map(({ title, items }) => (
            <ul key={title}>
              <p className="mb-2 font-semibold opacity-50">{title}</p>
              {items.map(({ title, href }) => (
                <li key={title}>
                  <a
                    href={href}
                    className="hover:text-primary block py-1 transition-colors"
                  >
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div className="border-border mt-10 flex w-full flex-col items-center justify-center gap-4 border-t py-4 md:flex-row md:justify-between">
          <p className="text-center text-sm">
            &copy; {YEAR}{" "}
            <a
              href="https://www.creative-tim.com/"
              className="hover:text-primary"
            >
              Creative Tim UI
            </a>
            . All Rights Reserved.
          </p>
          <div className="flex gap-1 sm:justify-center">
            <Button variant="ghost" size="icon" asChild>
              <a href="#">
                <Facebook className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="#">
                <Instagram className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="#">
                <Twitter className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="#">
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="#">
                <Dribbble className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
