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

export default function FooterDemo() {
  return (
    <footer className="border-border flex w-full flex-row flex-wrap items-center justify-center gap-x-12 gap-y-3 border-t py-4 text-center md:justify-between">
      <p>&copy; {YEAR} Creative Tim UI</p>
      <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
        {LINKS.map(({ title, href }, key) => (
          <li key={key}>
            <a href={href} className="hover:text-primary transition-colors">
              {title}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  )
}
