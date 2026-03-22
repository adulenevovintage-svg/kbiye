import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  console.log("Received application request in Vercel Function:", req.body);
  const { studentName, parentName, email, phone, program, message } = req.body;

  if (!studentName || !parentName || !email || !phone || !program) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is missing in Vercel environment");
    return res.status(500).json({ error: "Server configuration error: API key missing" });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "KB Academy Admissions <onboarding@resend.dev>",
      to: ["adu.kbacademy@gmail.com"],
      subject: `New Admission Application: ${studentName}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #0A1D37;">
          <h1 style="color: #C5A059;">New Admission Application</h1>
          <hr style="border: 1px solid #eee;" />
          <p><strong>Student Name:</strong> ${studentName}</p>
          <p><strong>Parent Name:</strong> ${parentName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone Number:</strong> ${phone}</p>
          <p><strong>Program of Interest:</strong> ${program}</p>
          <p><strong>Message:</strong></p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 8px; border-left: 4px solid #C5A059;">
            ${message || "No additional message provided."}
          </div>
          <p style="font-size: 12px; color: #999; margin-top: 30px;">
            This email was sent from the KB Academy website admission form.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return res.status(500).json({ error: error.message });
    }

    res.status(200).json({ message: "Application submitted successfully", id: data?.id });
  } catch (err) {
    console.error("Unexpected Server Error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
}
