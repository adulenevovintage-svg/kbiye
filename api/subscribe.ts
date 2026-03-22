import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({ error: "Server configuration error" });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "KB Academy Newsletter <onboarding@resend.dev>",
      to: ["adu.kbacademy@gmail.com"],
      subject: `New Newsletter Subscription: ${email}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #0A1D37;">
          <h1 style="color: #C5A059;">New Newsletter Subscription</h1>
          <hr style="border: 1px solid #eee;" />
          <p>A new user has subscribed to the KB Academy newsletter.</p>
          <p><strong>Subscriber Email:</strong> ${email}</p>
          <p style="font-size: 12px; color: #999; margin-top: 30px;">
            This email was sent from the KB Academy website newsletter form.
          </p>
        </div>
      `,
    });

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    res.status(200).json({ message: "Subscribed successfully", id: data?.id });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
}
