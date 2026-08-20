import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center bg-background px-6 py-20">
      <div className="mx-auto grid w-full max-w-360 gap-10 lg:grid-cols-2 lg:items-center lg:gap-20">
        <p className="font-display text-[10rem] leading-none text-inverted-surface sm:text-[16rem]">
          404
        </p>

        <div className="border-l border-foreground/20 pl-8">
          <h1 className="font-display text-5xl leading-none lg:text-7xl">Page not found.</h1>
          <p className="mt-6 max-w-lg text-lg leading-8 text-text-secondary">
            This space is currently undefined. The page you are looking for has not been built.
          </p>
          <Link
            href="/"
            className="mt-9 inline-block border border-foreground px-7 py-4 text-xs font-semibold uppercase tracking-[0.15em] hover:bg-foreground hover:text-background"
          >
            Return to homepage
          </Link>
        </div>
      </div>
    </main>
  );
}
