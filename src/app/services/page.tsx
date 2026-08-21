import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/site-data";

export default function ServicesPage() {
  return (
    <main className="bg-background">
      <section className="mx-auto max-w-360 px-6 py-24 lg:px-10 lg:py-32">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-accent">
          Services
        </p>
        <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-24">
          <h1 className="max-w-3xl font-display text-5xl leading-[1.02] tracking-tight lg:text-7xl">
            A single standard, from first sketch to final maintenance.
          </h1>
          <p className="self-end text-sm leading-7 text-text-secondary">
            At Tov Interiors, exceptional spaces require a holistic approach. We coordinate design,
            execution and ongoing stewardship so every interior remains functional, beautiful and
            enduring.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-360 px-6 pb-24 lg:px-10 lg:pb-36">
        <div className="space-y-20 lg:space-y-32">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-20"
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="relative aspect-4/5 overflow-hidden bg-surface">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-accent">
                  {service.number}
                </p>
                <h2 className="mt-4 max-w-md font-display text-4xl leading-[1.05]">
                  {service.title}
                </h2>
                <p className="mt-6 max-w-md text-sm leading-7 text-text-secondary">
                  {service.description}
                </p>
                <ul className="mt-6 max-w-md space-y-2 border-t border-foreground/15 pt-6">
                  {service.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-center gap-3 text-xs uppercase tracking-widest text-text-secondary"
                    >
                      <span className="h-px w-4 bg-accent" aria-hidden />
                      {detail}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/book"
                  className="mt-8 inline-block border-b border-foreground pb-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] transition-colors hover:border-accent hover:text-accent"
                >
                  Book a consultation →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
