import Image from "next/image";
import Link from "next/link";

const lifecycle = [
  [
    "01 / Concept",
    "Design",
    "We translate your brief into clear space plans, material selections, and a realistic budget.",
  ],
  [
    "02 / Sourcing",
    "Procurement",
    "We source all furniture, finishes, and specialist materials for durability and value.",
  ],
  [
    "03 / Build",
    "Construction",
    "Our team manages every trade on site to ensure the build matches the approved design.",
  ],
  [
    "04 / Care",
    "Management",
    "We provide ongoing maintenance and servicing long after project completion.",
  ],
];

const team = [
  ["Eddy Osugbo", "CEO & Creative Director", "/images/about/eddy-osugbo.jpg"],
  ["Elena Roberts", "Lead Architect", "/images/about/elena-roberts.jpg"],
  ["Marcus Thorne", "Director of Procurement", "/images/about/marcus-thorne.jpg"],
  ["Sarah Chen", "Artisan Liaison", "/images/about/sarah-chen.jpg"],
];

export default function AboutPage() {
  return (
    <main className="bg-background">
      <section className="mx-auto max-w-360 px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-24">
          <h1 className="max-w-3xl font-display text-5xl leading-[1.02] tracking-tight lg:text-7xl">
            Our story is written in the spaces we create.
          </h1>
          <p className="self-end text-sm leading-7 text-text-secondary">
            Tov combines interior design, construction, and facility management into one practice.
            The team that designs your space also builds it and manages it long after handover.
          </p>
        </div>
      </section>

      <section className="border-y border-foreground/15 bg-surface">
        <div className="mx-auto grid max-w-360 gap-12 px-6 py-24 lg:grid-cols-[0.7fr_1.3fr] lg:px-10 lg:py-32">
          <h2 className="font-display text-4xl">One roof, one team.</h2>

          <div className="space-y-8 text-sm leading-7 text-text-secondary">
            <p>
              Most projects get passed between separate contractors. Designers pass plans to
              builders, and builders leave once construction ends. At Tov, designers, architects,
              project managers, and tradespeople work under one roof. The team responsible for the
              initial plan is the same team executing it on site.
            </p>
            <p>
              We look at every detail together from day one, from layout and lighting to structural
              integrity and long-term upkeep. This keeps project costs predictable and prevents
              design conflicts during construction.
            </p>
            <p>
              We handle single-room residential renovations, commercial office fit-outs, and
              full-scale property developments. You have one point of contact for the entire
              duration of the project.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-foreground/15">
        <div className="mx-auto grid max-w-360 gap-12 px-6 py-24 lg:grid-cols-[0.7fr_1.3fr] lg:px-10 lg:py-32">
          <h2 className="font-display text-4xl">How a project travels.</h2>

          <div className="border-t border-foreground/15">
            {lifecycle.map(([number, title, description]) => (
              <div
                key={title}
                className="grid gap-4 border-b border-foreground/15 py-6 sm:grid-cols-[0.8fr_1fr]"
              >
                <div>
                  <p className="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-accent">
                    {number}
                  </p>
                  <h3 className="mt-2 font-display text-2xl">{title}</h3>
                </div>
                <p className="text-sm leading-6 text-text-secondary">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-360 px-6 py-24 lg:px-10 lg:py-32">
        <div className="flex items-end justify-between gap-8">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-accent">
            The team
          </p>
          <p className="max-w-sm text-right text-xs leading-5 text-text-secondary">
            Four core disciplines working directly on every active project.
          </p>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map(([name, role, image]) => (
            <article key={name}>
              <div className="relative aspect-3/4 overflow-hidden bg-surface">
                <Image
                  src={image}
                  alt={name}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
              <h2 className="mt-4 font-display text-xl">{name}</h2>
              <p className="mt-1 text-xs text-text-secondary">{role}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-surface px-6 py-24 text-center lg:px-10 lg:py-32">
        <blockquote className="mx-auto max-w-3xl font-display text-4xl leading-tight lg:text-6xl">
          “Design that is lived in, not just looked at.”
        </blockquote>
        <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-text-secondary">
          Good design shows in how a space performs years down the line. We build what we design and
          manage our properties long after initial completion.
        </p>
        <Link
          href="/book"
          className="mt-10 inline-block bg-accent px-6 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-accent-foreground"
        >
          Start a project
        </Link>
      </section>
    </main>
  );
}
