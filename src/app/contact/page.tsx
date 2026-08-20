// import Image from "next/image";
import { ContactForm } from "@/components/forms/ContactForm";

export default function ContactPage() {
  return (
    <main className="bg-background">
      <section className="mx-auto max-w-360 px-6 py-24 lg:px-10 lg:py-32">
        <h1 className="font-display text-5xl leading-none tracking-tight lg:text-8xl">
          Start the dialogue.
        </h1>

        <div className="mt-20 grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-accent">
              Enquiries
            </p>
            <a
              href="mailto:designstov@gmail.com"
              className="mt-4 block font-display text-3xl hover:text-accent"
            >
              designstov@gmail.com
            </a>

            <div className="mt-10 border-t border-foreground/15 pt-8">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-accent">
                Direct lines
              </p>
              <a
                href="tel:+2348074963381"
                className="mt-4 block font-display text-3xl hover:text-accent"
              >
                +234 807 496 3381
              </a>
              <a
                href="tel:+2349029367190"
                className="mt-2 block font-display text-3xl hover:text-accent"
              >
                +234 902 936 7190
              </a>
            </div>

            <a
              href="https://wa.me/2348074963381"
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-block border border-foreground px-6 py-4 text-xs font-semibold uppercase tracking-[0.15em] hover:bg-foreground hover:text-background"
            >
              Message on WhatsApp
            </a>
          </div>

          <ContactForm />
        </div>

        {/* <div className="relative mx-auto mt-24 aspect-[16/8] max-w-4xl overflow-hidden bg-surface">
          <Image
            src="/images/contact/window-detail.jpg"
            alt="A calm architectural window detail"
            fill
            className="object-cover"
          />
        </div> */}
      </section>
    </main>
  );
}
