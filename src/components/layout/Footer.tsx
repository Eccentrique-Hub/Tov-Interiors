import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const services = [
  "Interior Architecture & Design",
  "Spatial Renovation & Restoration",
  "Custom Joinery & Curated Furnishings",
  "Turnkey Construction & Execution",
  "3D Visualization & Spatial Modeling",
  "Integrated Project Management",
  "Long-term Facility Management",
];

const explore = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://www.instagram.com/tov_interiors", label: "Instagram" },
  {
    href: "https://www.facebook.com/people/Tov-Interiors-and-Construction/61574288532900/",
    label: "Facebook",
  },
  { href: "https://www.tiktok.com/@tov_interiors", label: "Tik tok" },
];

export function Footer() {
  return (
    <footer className="bg-inverted-surface text-inverted-foreground">
      {/* Banner CTA */}
      <div className="border-b border-inverted-foreground/15 bg-accent">
        <div className="mx-auto grid max-w-360 gap-10 px-6 py-14 lg:grid-cols-[1.2fr_0.8fr] lg:px-10 lg:py-20">
          <div>
            <p className="mb-5 text-[0.65rem] font-semibold uppercase tracking-[0.22em]">
              Start a Conversation
            </p>
            <h2 className="max-w-3xl font-display text-4xl leading-[1.04] tracking-tight sm:text-5xl lg:text-6xl">
              From a rough sketch to an empty room, we bring spatial visions to life.
            </h2>
          </div>

          <div className="flex flex-col justify-end lg:items-end">
            <p className="mb-6 max-w-md text-sm leading-6 text-inverted-foreground/80 lg:text-right">
              Whether you are acquiring a new site or refining an existing sanctuary, we define the
              strategic next steps for your space.
            </p>
            <Link
              href="/book"
              className="inline-flex w-fit bg-background px-6 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-accent transition-colors hover:bg-accent-foreground"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="mx-auto max-w-360 px-6 py-12 lg:px-10 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.95fr_0.65fr_0.9fr]">
          <div>
            <Link href="/" className="font-display text-4xl tracking-tight">
              Tov
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-6 text-inverted-foreground/65">
              A unified studio integrating interior design, architectural execution, and facility
              management under one seamless roof.
            </p>
          </div>

          <div>
            <p className="mb-5 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-accent">
              Capabilities
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
              Navigation
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
              Direct Contact
            </p>
            <a
              href="tel:+2348074963381"
              className="block font-display text-2xl transition-colors hover:text-accent"
            >
              +234 807 496 3381
            </a>
            <a
              href="tel:+2349029367190"
              className="mt-1 block font-display text-2xl transition-colors hover:text-accent"
            >
              +234 902 936 7190
            </a>
            <a
              href="mailto:hello@tovinteriors.com"
              className="mt-5 block text-sm text-inverted-foreground/65 transition-colors hover:text-inverted-foreground"
            >
              designstov@gmail.com
            </a>
            <p className="mt-2 text-sm text-inverted-foreground/50">Ibadan & Lagos, Nigeria</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 flex flex-col gap-5 border-t border-inverted-foreground/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-lg">Conception. Realization. Preservation.</p>

          <div className="w-full sm:w-auto">
            <p className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-accent">
              Follow the studio
            </p>

            <div className="flex flex-wrap gap-2">
              {socialLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex min-w-38 items-center gap-3 border border-inverted-foreground/20 px-3 py-3 text-inverted-foreground transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground"
                >
                  <span className="text-[0.6rem] font-semibold tracking-[0.16em] opacity-50 group-hover:opacity-80">
                    0{index + 1}
                  </span>

                  <span className="flex-1 text-xs font-semibold uppercase tracking-[0.12em]">
                    {link.label}
                  </span>

                  <ArrowUpRight
                    aria-hidden="true"
                    size={14}
                    strokeWidth={1.5}
                    className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              ))}
            </div>
          </div>

          <p className="text-xs uppercase tracking-[0.14em] text-inverted-foreground/40">
            © {new Date().getFullYear()} Tov Interiors — Built by{" "}
            <a
              href="https://github.com/Eccentrique-Hub"
              target="_blank"
              rel="noreferrer"
              className="text-inverted-foreground/70 transition-colors hover:text-accent"
            >
              Eccentrique
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
