"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/site-data";

const categories = ["All", ...Array.from(new Set(projects.map((project) => project.type)))];

export default function PortfolioPage() {
  const [active, setActive] = useState("All");

  const visibleProjects =
    active === "All" ? projects : projects.filter((project) => project.type === active);

  return (
    <main className="bg-background">
      <section className="mx-auto max-w-360 px-6 py-24 lg:px-10 lg:py-32">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-accent">
          Portfolio
        </p>

        <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-24">
          <h1 className="max-w-3xl font-display text-5xl leading-[1.02] tracking-tight lg:text-7xl">
            A collection of architectural narratives.
          </h1>
          <p className="self-end text-sm leading-7 text-text-secondary">
            Showcasing Tov&rsquo;s integrated approach to design and build: careful planning,
            rigorous material selection and an unwavering commitment to enduring quality. Select a
            project to read its full story.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-360 px-6 pb-24 lg:px-10 lg:pb-36">
        <div className="mb-12 flex flex-wrap gap-x-6 gap-y-3 border-y border-foreground/15 py-5 text-[0.65rem] font-semibold uppercase tracking-[0.16em]">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              aria-pressed={active === category}
              className={`cursor-pointer ${
                active === category
                  ? "text-accent"
                  : "text-text-secondary transition-colors hover:text-accent"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-x-8 gap-y-16 lg:grid-cols-2">
          {visibleProjects.map((project, index) => (
            <article key={project.slug} className={index === 0 ? "lg:col-span-2" : ""}>
              <Link href={`/portfolio/${project.slug}`} className="group block">
                <div
                  className={`relative overflow-hidden bg-surface ${
                    index === 0 ? "aspect-16/8" : "aspect-4/3"
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 1024px) 85vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <span className="absolute right-4 top-4 flex items-center gap-2 bg-accent px-3 py-2 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-accent-foreground">
                    View project <ArrowUpRight aria-hidden size={14} strokeWidth={1.5} />
                  </span>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-[0.8fr_1.2fr]">
                  <div>
                    <h2 className="font-display text-2xl group-hover:text-accent">
                      {project.title}
                    </h2>
                    <p className="mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-text-secondary">
                      {project.type} · {project.location} · {project.year}
                    </p>
                  </div>
                  <p className="text-sm leading-6 text-text-secondary">{project.description}</p>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {visibleProjects.length === 0 && (
          <p className="mt-16 border-t border-foreground/15 pt-8 text-center text-sm text-text-secondary">
            No projects in this category yet.
          </p>
        )}
      </section>
    </main>
  );
}
