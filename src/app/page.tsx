import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/site-data";

const projects = [
  {
    title: "Ikoyi Residence",
    category: "Full home — design & build",
    location: "Lagos",
    image: "/images/home/ikoyi-residence.jpg",
    className: "lg:col-span-5 lg:pt-36",
  },
  {
    title: "The Adeniyi Hotel",
    category: "Hospitality interior",
    location: "Abuja",
    image: "/images/home/adeniyi-hotel.jpg",
    className: "lg:col-span-7",
  },
  {
    title: "Banana Island Apartment",
    category: "Renovation & furnishing",
    location: "Lagos",
    image: "/images/home/banana-island.jpg",
    className: "lg:col-span-5",
  },
  {
    title: "Meridian Workspace",
    category: "Commercial fit-out",
    location: "Lekki",
    image: "/images/home/meridian-workspace.jpg",
    className: "lg:col-span-7 lg:pt-20",
  },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-6 flex items-center gap-3 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-accent">
      <span className="h-px w-6 bg-accent" />
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden">
      <section className="relative isolate min-h-180 overflow-hidden bg-inverted-surface text-inverted-foreground lg:min-h-[calc(100svh-80px)]">
        <Image
          src="/images/home/hero-living.jpg"
          alt="Warm contemporary living room designed by Tov"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-r from-[#24160f]/85 via-[#24160f]/55 to-[#24160f]/15" />

        <div className="relative mx-auto flex min-h-180 max-w-360 items-end px-6 py-16 lg:min-h-[calc(100svh-80px)] lg:px-10 lg:py-20">
          <div className="max-w-3xl">
            <p className="mb-7 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-inverted-foreground/75">
              Interior design · Construction · Facility management
            </p>

            <h1 className="font-display text-5xl leading-[0.98] tracking-tight sm:text-6xl lg:text-8xl">
              From concept to completion, and everything after.
            </h1>

            <p className="mt-8 max-w-xl text-sm leading-7 text-inverted-foreground/80 sm:text-base">
              Tov carries a space from first sketch through construction to the everyday running of
              the finished result. One team, one standard, held from the first meeting to well past
              handover.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/book"
                className="bg-accent px-6 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-accent-foreground transition-colors hover:bg-[#8f651c]"
              >
                Book a consultation
              </Link>

              <Link
                href="/portfolio"
                className="border border-inverted-foreground/60 px-6 py-4 text-xs font-semibold uppercase tracking-[0.14em] transition-colors hover:bg-inverted-foreground hover:text-inverted-surface"
              >
                See our work
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-24 lg:py-36">
        <div className="mx-auto grid max-w-360 gap-14 px-6 lg:grid-cols-2 lg:items-center lg:gap-24 lg:px-10">
          <div>
            <Eyebrow>One roof</Eyebrow>

            <h2 className="max-w-2xl font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl">
              Most studios hand you a drawing and a phone number for a contractor. We keep design,
              build and the running of the space on one team.
            </h2>

            <p className="mt-8 max-w-xl text-sm leading-7 text-text-secondary">
              No finger-pointing between designer and builder, no gap between the render and
              reality. The people who imagine your space are accountable for delivering and
              maintaining it.
            </p>
          </div>

          <figure>
            <div className="relative aspect-4/5 overflow-hidden">
              <Image
                src="/images/home/studio-desk.jpg"
                alt="Materials, plans and samples on a design studio table"
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-text-secondary">
              The desk — where drawings, materials and budgets meet
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="bg-surface py-24 lg:py-36">
        <div className="mx-auto grid max-w-360 gap-14 px-6 lg:grid-cols-[0.75fr_1.5fr] lg:gap-24 lg:px-10">
          <div>
            <Eyebrow>What we do</Eyebrow>
            <h2 className="font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl">
              Seven services, one continuous team.
            </h2>
            <p className="mt-7 max-w-sm text-sm leading-7 text-text-secondary">
              Engage us for the whole journey or a single stage. The standard doesn&apos;t change
              either way.
            </p>
          </div>

          <div className="border-t border-foreground/15">
            {services.map((service) => (
              <div
                key={service.title}
                className="grid gap-4 border-b border-foreground/15 py-6 sm:grid-cols-[0.9fr_1fr] sm:gap-8"
              >
                <h3 className="font-display text-2xl leading-tight">
                  {service.titleShort ?? service.title}
                </h3>
                <p className="text-sm leading-6 text-text-secondary">
                  {service.homeDescription ?? service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-24 lg:py-36">
        <div className="mx-auto max-w-360 px-6 lg:px-10">
          <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
            <div>
              <Eyebrow>Selected work</Eyebrow>
              <h2 className="max-w-xl font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl">
                Rooms we imagined, then built.
              </h2>
            </div>

            <Link
              href="/portfolio"
              className="text-xs font-semibold uppercase tracking-[0.14em] transition-colors hover:text-accent"
            >
              View full portfolio →
            </Link>
          </div>

          <div className="mt-16 grid gap-x-6 gap-y-14 lg:grid-cols-12">
            {projects.map((project) => (
              <article key={project.title} className={project.className}>
                <Link href="/portfolio" className="group block">
                  <div className="relative aspect-4/3 overflow-hidden bg-surface">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="mt-4 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-2xl">{project.title}</h3>
                      <p className="mt-1 text-sm text-text-secondary">{project.category}</p>
                    </div>
                    <p className="pt-1 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-text-secondary">
                      {project.location}
                    </p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-24 lg:py-36">
        <div className="mx-auto grid max-w-360 gap-14 px-6 lg:grid-cols-2 lg:items-center lg:gap-24 lg:px-10">
          <figure>
            <div className="relative aspect-4/5 overflow-hidden">
              <Image
                src="/images/home/eddy-osugbo.jpg"
                alt="Eddy Osugbo, CEO and Creative Director"
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-4 flex items-center justify-between gap-4">
              <span className="font-display text-xl">Eddy Osugbo</span>
              <span className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-text-secondary">
                CEO & Creative Director
              </span>
            </figcaption>
          </figure>

          <div>
            <Eyebrow>The practice</Eyebrow>
            <h2 className="font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl">
              A small, senior team that stays with your project.
            </h2>

            <p className="mt-7 max-w-xl text-sm leading-7 text-text-secondary">
              Led by Eddy Osugbo, Tov brings design, project management and hands-on craft together
              under one name. The same people who shape the concept see it through the build and
              beyond.
            </p>

            <div className="mt-10 grid grid-cols-2 border-t border-foreground/15">
              {[
                ["Eddy Osugbo", "CEO & Creative Director"],
                ["Designer / Architect", "Design & visualization"],
                ["Project Manager", "Delivery & budget"],
                ["Lead Craftsman", "Workshop & build"],
              ].map(([role, detail]) => (
                <div key={role} className="border-b border-foreground/15 py-5">
                  <p className="font-display text-lg">{role}</p>
                  <p className="mt-1 text-xs text-text-secondary">{detail}</p>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="mt-9 inline-block text-xs font-semibold uppercase tracking-[0.14em] transition-colors hover:text-accent"
            >
              More about Tov →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-background py-24 lg:py-36">
        <div className="mx-auto max-w-360 px-6 lg:px-10">
          <div className="max-w-2xl">
            <Eyebrow>How we work</Eyebrow>
            <h2 className="font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl">
              You’ll always know exactly where your project stands.
            </h2>
            <p className="mt-7 text-sm leading-7 text-text-secondary">
              We don&apos;t think trust needs a slogan. Here is how we actually keep a project
              transparent.
            </p>
          </div>

          <div className="mt-14 grid border border-foreground/15 md:grid-cols-3">
            {[
              [
                "A single point of contact",
                "One team owns the whole project, so you always know who to ask, and they always have the answer.",
              ],
              [
                "Costs on the table",
                "Budgets are itemised and agreed before work begins. Changes are priced and approved by you.",
              ],
              [
                "Progress you can see",
                "Regular updates and honest timelines. If something shifts, you hear it from us first.",
              ],
            ].map(([title, description]) => (
              <div
                key={title}
                className="border-b border-foreground/15 p-7 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
              >
                <h3 className="font-display text-xl">{title}</h3>
                <p className="mt-4 text-sm leading-6 text-text-secondary">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
