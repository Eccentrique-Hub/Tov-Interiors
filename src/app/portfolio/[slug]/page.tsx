import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/site-data";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function PortfolioProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  const gallery = [project.image, ...(project.gallery ?? [])];

  return (
    <main className="bg-background">
      <section className="mx-auto max-w-360 px-6 py-20 lg:px-10 lg:py-28">
        <Link
          href="/portfolio"
          className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-text-secondary hover:text-accent"
        >
          ← All projects
        </Link>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:gap-24">
          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-accent">
              {project.type} · {project.location}
            </p>
            <h1 className="mt-5 font-display text-5xl leading-[1.02] lg:text-7xl">
              {project.title}
            </h1>
            <p className="mt-8 max-w-xl text-sm leading-7 text-text-secondary">
              {project.overview}
            </p>
          </div>

          <div className="grid content-start gap-6 self-end border-t border-foreground/15 pt-6">
            {[
              ["Type", project.type],
              ["Location", project.location],
              ["Year", project.year],
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between gap-6">
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-text-secondary">
                  {label}
                </span>
                <span className="text-sm font-medium">{value}</span>
              </div>
            ))}

            <div>
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-text-secondary">
                Scope of work
              </span>
              <ul className="mt-3 space-y-2">
                {project.scope.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <span className="h-px w-4 shrink-0 bg-accent" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 space-y-8">
          {gallery.map((src, index) => (
            <div key={src} className="relative aspect-16/8 overflow-hidden bg-surface">
              <Image
                src={src}
                alt={`${project.title} — view ${index + 1}`}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <div className="mt-16 flex items-center justify-between border-t border-foreground/15 pt-8">
          <Link
            href="/book"
            className="inline-flex items-center gap-2 bg-accent px-6 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-accent-foreground transition-colors hover:bg-[#8f651c]"
          >
            Book a similar project <ArrowUpRight aria-hidden size={14} strokeWidth={1.5} />
          </Link>
          <Link
            href="/portfolio"
            className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-text-secondary transition-colors hover:text-accent"
          >
            Back to all projects →
          </Link>
        </div>
      </section>
    </main>
  );
}
