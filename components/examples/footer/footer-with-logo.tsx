const YEAR = new Date().getFullYear()

const LINKS = [
  {
    title: "About Us",
    href: "#",
  },
  {
    title: "License",
    href: "#",
  },
  {
    title: "Contribute",
    href: "#",
  },
  {
    title: "Contact Us",
    href: "#",
  },
]

export default function FooterWithLogo() {
  return (
    <footer className="w-full">
      <div className="flex w-full flex-row flex-wrap items-center justify-center gap-x-12 gap-y-3 text-center md:justify-between">
        <img
          src="https://www.creative-tim.com/ui/apple-touch-icon-square.jpg"
          alt="Creative Tim UI"
          className="w-8"
        />
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {LINKS.map(({ title, href }, key) => (
            <li key={key}>
              <a href={href} className="hover:text-primary transition-colors">
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <hr className="border-border my-4" />
      <p className="text-center">&copy; {YEAR} Creative Tim UI</p>
    </footer>
  )
}
