import { Resend } from "resend";
import { z } from "zod";

export const runtime = "nodejs";

const consultationSchema = z.object({
  sector: z.enum(["Residential", "Commercial", "Developer"]),
  services: z.array(z.string()).min(1, "Select at least one service."),
  projectName: z.string().trim().min(2).max(120),
  location: z.string().trim().min(2).max(120),
  budget: z.string().trim().min(1).max(80),
  timeline: z.string().trim().min(1).max(80),
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email(),
  phone: z.string().trim().min(7).max(40),
  message: z.string().trim().max(4000).optional(),
});

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.RESEND_TO_EMAIL;

  if (!apiKey || !from || !to) {
    console.error("Resend configuration is incomplete.");

    return Response.json({ error: "The enquiry service is not configured yet." }, { status: 500 });
  }

  try {
    const body = await request.json();
    const payload = consultationSchema.safeParse(body);

    if (!payload.success) {
      return Response.json(
        { error: "Please complete every required field correctly." },
        { status: 400 },
      );
    }

    const { data } = payload;
    const resend = new Resend(apiKey);

    const { data: email, error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: data.email,
      subject: `New consultation: ${data.projectName}`,
      text: [
        "NEW TOV CONSULTATION ENQUIRY",
        "",
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone}`,
        `Sector: ${data.sector}`,
        `Project: ${data.projectName}`,
        `Location: ${data.location}`,
        `Budget: ${data.budget}`,
        `Timeline: ${data.timeline}`,
        `Services: ${data.services.join(", ")}`,
        "",
        `Message: ${data.message || "No additional message provided."}`,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend rejected the enquiry:", error);

      return Response.json(
        { error: "Email delivery could not be completed. Please try again shortly." },
        { status: 502 },
      );
    }

    console.info("Consultation email sent:", email?.id);

    return Response.json({ success: true });
  } catch (error) {
    console.error("Consultation API failed:", error);

    return Response.json(
      { error: "Unable to process your enquiry. Please try again." },
      { status: 500 },
    );
  }
}
