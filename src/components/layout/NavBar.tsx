import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function NavBar() {
  return (
    <header className="sticky top-0 z-50 text-accent-foreground bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-360 items-center justify-between px-5 py-5 lg:px-10">
        <Link
          href="/"
          className="font-display text-2xl leading-none tracking-tight text-accent"
          aria-label="Tov home"
        >
          Tov
          <span className="mt-1 block font-body text-[0.5rem] font-semibold uppercase tracking-[0.24em]">
            Interiors + Services
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-semibold tracking-wide text-foreground transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/book"
          className="hidden bg-accent px-5 py-3 text-xs font-semibold tracking-wide text-accent-foreground transition-colors hover:bg-[#a94124] md:inline-flex"
        >
          Book a consultation
        </Link>

        <details className="relative md:hidden">
          <summary className="cursor-pointer list-none border border-accent px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            Menu
          </summary>

          <nav
            className="absolute right-0 mt-3 flex w-52 flex-col border border-accent-foreground/15 bg-inverted-surface p-3 text-inverted-foreground shadow-2xl"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-3 text-sm transition-colors hover:bg-inverted-foreground/10"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/book"
              className="mt-2 bg-accent px-3 py-3 text-center text-sm font-semibold text-accent-foreground"
            >
              Book a consultation
            </Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
