"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

const services = [
  "Interior Design",
  "Renovation",
  "Custom Furniture",
  "Project Management",
  "Construction",
  "Facility Management",
];

type BookingData = {
  projectName: string;
  location: string;
  budget: string;
  timeline: string;
  name: string;
  email: string;
  phone: string;
  message: string;
};

const initialData: BookingData = {
  projectName: "",
  location: "",
  budget: "",
  timeline: "",
  name: "",
  email: "",
  phone: "",
  message: "",
};

const inputClass =
  "w-full border-b border-foreground/30 bg-transparent px-0 py-3 text-sm outline-none focus:border-accent";

export default function BookingPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [sector, setSector] = useState("Residential");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [formData, setFormData] = useState<BookingData>(initialData);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  function updateField(field: keyof BookingData, value: string) {
    setFormData((current) => ({ ...current, [field]: value }));
  }

  function toggleService(service: string) {
    setSelectedServices((current) =>
      current.includes(service)
        ? current.filter((item) => item !== service)
        : [...current, service],
    );
  }

  function goToProjectDetails() {
    if (!selectedServices.length) {
      setError("Select at least one required service.");
      return;
    }

    setError("");
    setStep(2);
  }

  function goToContactDetails() {
    const requiredFields = [
      formData.projectName,
      formData.location,
      formData.budget,
      formData.timeline,
    ];

    if (requiredFields.some((value) => !value.trim())) {
      setError("Complete all project-detail fields before continuing.");
      return;
    }

    setError("");
    setStep(3);
  }

  async function submitBooking(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      setError("Complete your name, email address and phone number.");
      return;
    }

    setSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/consultations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sector,
          services: selectedServices,
          ...formData,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        setError(result.error ?? "We could not send your enquiry. Please try again.");
        return;
      }

      router.push("/book/success");
    } catch {
      setError("Unable to connect. Please check your internet connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="bg-background">
      <form
        onSubmit={submitBooking}
        className="mx-auto grid max-w-360 gap-16 px-6 py-20 lg:grid-cols-[0.6fr_1.4fr] lg:px-10 lg:py-28"
      >
        <aside>
          <h1 className="font-display text-5xl leading-[1.02] lg:text-7xl">Book a consultation</h1>

          <p className="mt-7 max-w-sm text-sm leading-7 text-text-secondary">
            Begin the dialogue for your next interior, construction or facility-management project.
          </p>

          <ol className="mt-14 space-y-6 text-[0.65rem] font-semibold uppercase tracking-[0.18em]">
            {["Project type", "Project details", "Contact details"].map((label, index) => (
              <li
                key={label}
                className={step === index + 1 ? "text-foreground" : "text-text-secondary"}
              >
                <button type="button" onClick={() => setStep(index + 1)}>
                  0{index + 1} — {label}
                </button>
              </li>
            ))}
          </ol>
        </aside>

        <div>
          {step === 1 && (
            <>
              <h2 className="font-display text-4xl">I. Project classification</h2>

              <p className="mt-10 text-[0.65rem] font-semibold uppercase tracking-[0.18em]">
                Sector
              </p>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {["Residential", "Commercial", "Developer"].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setSector(item)}
                    className={`border p-6 text-left text-xs font-semibold uppercase tracking-[0.14em] ${
                      sector === item
                        ? "border-inverted-surface bg-inverted-surface text-inverted-foreground"
                        : "border-foreground/40"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <p className="mt-10 text-[0.65rem] font-semibold uppercase tracking-[0.18em]">
                Required services
              </p>

              <div className="mt-4 border-y border-foreground/15">
                {services.map((service) => (
                  <label
                    key={service}
                    className="flex cursor-pointer items-center gap-4 border-b border-foreground/15 py-5 last:border-0"
                  >
                    <input
                      type="checkbox"
                      checked={selectedServices.includes(service)}
                      onChange={() => toggleService(service)}
                      className="size-5 accent-[#b8872d]"
                    />
                    <span className="text-sm">{service}</span>
                  </label>
                ))}
              </div>

              <button
                type="button"
                onClick={goToProjectDetails}
                className="mt-10 bg-accent px-7 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-accent-foreground"
              >
                Next step
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <h2 className="font-display text-4xl">II. Project details</h2>

              <div className="mt-10 grid gap-7">
                <label>
                  Project name
                  <input
                    required
                    value={formData.projectName}
                    onChange={(event) => updateField("projectName", event.target.value)}
                    className={inputClass}
                  />
                </label>

                <label>
                  Location
                  <input
                    required
                    value={formData.location}
                    onChange={(event) => updateField("location", event.target.value)}
                    className={inputClass}
                  />
                </label>

                <label>
                  Estimated budget
                  <input
                    required
                    value={formData.budget}
                    onChange={(event) => updateField("budget", event.target.value)}
                    className={inputClass}
                    placeholder="e.g. ₦20m–₦30m"
                  />
                </label>

                <label>
                  Preferred timeline
                  <input
                    required
                    value={formData.timeline}
                    onChange={(event) => updateField("timeline", event.target.value)}
                    className={inputClass}
                    placeholder="e.g. September 2026"
                  />
                </label>
              </div>

              <button
                type="button"
                onClick={goToContactDetails}
                className="mt-10 bg-accent px-7 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-accent-foreground"
              >
                Next step
              </button>
            </>
          )}

          {step === 3 && (
            <>
              <h2 className="font-display text-4xl">III. Contact details</h2>

              <div className="mt-10 grid gap-7">
                <label>
                  Full name
                  <input
                    required
                    value={formData.name}
                    onChange={(event) => updateField("name", event.target.value)}
                    className={inputClass}
                  />
                </label>

                <label>
                  Email address
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(event) => updateField("email", event.target.value)}
                    className={inputClass}
                  />
                </label>

                <label>
                  Phone number
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(event) => updateField("phone", event.target.value)}
                    className={inputClass}
                  />
                </label>

                <label>
                  Tell us more
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(event) => updateField("message", event.target.value)}
                    className={`${inputClass} resize-none`}
                  />
                </label>
              </div>

              {error && <p className="mt-6 text-sm text-red-700">{error}</p>}

              <button
                type="submit"
                disabled={submitting}
                className="mt-10 bg-accent px-7 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-accent-foreground disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? "Sending…" : "Submit enquiry"}
              </button>
            </>
          )}

          {error && step !== 3 && <p className="mt-6 text-sm text-red-700">{error}</p>}
        </div>
      </form>
    </main>
  );
}
