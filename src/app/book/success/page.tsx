import Link from "next/link";

export default function BookingSuccessPage() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-background px-6 py-20 text-center">
      <section className="max-w-2xl">
        <div className="mx-auto flex size-24 items-center justify-center border border-accent text-4xl text-accent">
          ✓
        </div>
        <h1 className="mt-10 font-display text-5xl leading-none lg:text-7xl">
          Project enquiry received.
        </h1>
        <p className="mt-8 text-lg leading-8 text-text-secondary">
          Our studio has received your brief and will contact you within two business days to
          discuss the next steps.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="bg-accent px-7 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-accent-foreground"
          >
            Return home
          </Link>
          <Link
            href="/portfolio"
            className="border border-foreground px-7 py-4 text-xs font-semibold uppercase tracking-[0.15em]"
          >
            View portfolio
          </Link>
        </div>
      </section>
    </main>
  );
}
