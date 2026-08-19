import Link from "next/link";
import Image from "next/image";

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
        {/* TO BE EDITED WHEN THE CORRECT LOGO FORMAT IS GOTTEN */}
        <Link href="/" className="group flex items-center gap-3" aria-label="Tov home">
          <span className="flex size-10 shrink-0 items-center justify-center bg-inverted-surface transition-transform duration-200 group-hover:scale-105">
            <Image src="/logo.jpg" alt="" width={23} height={23} className="h-auto w-9" />
          </span>

          <span>
            <span className="block font-display text-2xl leading-none tracking-tight text-accent">
              Tov
            </span>
            <span className="mt-1 block font-body text-[0.5rem] font-semibold uppercase tracking-[0.24em] text-foreground">
              Interiors + Services
            </span>
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
          className="hidden bg-accent px-5 py-3 text-xs font-semibold tracking-wide text-accent-foreground transition-colors hover:bg-[#8f651c] md:inline-flex"
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
