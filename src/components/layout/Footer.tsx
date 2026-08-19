import Link from "next/link";

const services = [
  "Interior Design",
  "Renovation",
  "Custom Furniture & Décor",
  "Project Management",
  "Construction",
  "Architectural & 3D Visualization",
  "Facility Management",
];

const explore = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://instagram.com", label: "Instagram" },
  { href: "https://linkedin.com", label: "LinkedIn" },
  { href: "https://behance.net", label: "Behance" },
];

export function Footer() {
  return (
    <footer className="bg-inverted-surface text-inverted-foreground">
      <div className="border-b border-inverted-foreground/15">
        <div className="mx-auto grid max-w-360 gap-10 px-6 py-14 lg:grid-cols-[1.2fr_0.8fr] lg:px-10 lg:py-20">
          <div>
            <p className="mb-5 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-accent">
              Start a project
            </p>
            <h2 className="max-w-3xl font-display text-4xl leading-[1.04] tracking-tight sm:text-5xl lg:text-6xl">
              Bring us the sketch, the empty room, or just the idea.
            </h2>
          </div>

          <div className="flex flex-col justify-end lg:items-end">
            <p className="mb-6 max-w-md text-sm leading-6 text-inverted-foreground/65 lg:text-right">
              Tell us where you are starting. We will help you shape the next practical step.
            </p>
            <Link
              href="/book"
              className="inline-flex w-fit bg-accent px-6 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-accent-foreground transition-colors hover:bg-[#a94124]"
            >
              Book a consultation
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-360 px-6 py-12 lg:px-10 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr_0.75fr_0.9fr]">
          <div>
            <Link href="/" className="font-display text-4xl tracking-tight">
              Tov
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-6 text-inverted-foreground/65">
              Interior design, construction and facility management under one roof—from first sketch
              to long-term care.
            </p>
          </div>

          <div>
            <p className="mb-5 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-accent">
              Services
            </p>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-sm text-inverted-foreground/70">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-5 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-accent">
              Explore
            </p>
            <ul className="space-y-3">
              {explore.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-inverted-foreground/70 transition-colors hover:text-inverted-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:text-right">
            <p className="mb-5 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-accent">
              Get in touch
            </p>
            <a
              href="tel:+2348074963381"
              className="block font-display text-2xl transition-colors hover:text-accent"
            >
              0807 496 3381
            </a>
            <a
              href="tel:+2349029367190"
              className="mt-1 block font-display text-2xl transition-colors hover:text-accent"
            >
              0902 936 7190
            </a>
            <a
              href="mailto:hello@tovinteriors.com"
              className="mt-5 block text-sm text-inverted-foreground/65 transition-colors hover:text-inverted-foreground"
            >
              hello@tovinteriors.com
            </a>
            <p className="mt-2 text-sm text-inverted-foreground/50">Lagos, Nigeria</p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-inverted-foreground/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-lg">Concept to completion—and beyond.</p>

          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold uppercase tracking-[0.14em] text-inverted-foreground/60 transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </div>

          <p className="text-xs uppercase tracking-[0.14em] text-inverted-foreground/40">
            © {new Date().getFullYear()} Tov Interiors
          </p>
        </div>
      </div>
    </footer>
  );
}
