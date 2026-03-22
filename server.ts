import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import { Resend } from "resend";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const resend = new Resend(process.env.RESEND_API_KEY);

const app = express();

app.use(cors());
app.use(express.json());

// API Route for Admissions
app.post("/api/apply", async (req, res) => {
  console.log("Received application request:", req.body);
  const { studentName, parentName, email, phone, program, message } = req.body;

  if (!studentName || !parentName || !email || !phone || !program) {
    console.warn("Missing required fields in request");
    return res.status(400).json({ error: "Missing required fields" });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("CRITICAL: RESEND_API_KEY is missing from environment variables.");
    return res.status(500).json({ 
      error: "Server configuration error: Email API key is missing. Please set RESEND_API_KEY in your environment settings." 
    });
  }

  try {
    console.log(`Attempting to send admission email for ${studentName} to adu.kbacademy@gmail.com...`);
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
      console.error("Resend API Error Details:", JSON.stringify(error, null, 2));
      return res.status(500).json({ 
        error: `Email service error: ${error.message}. Please ensure your API key is valid and you are sending to a verified recipient.` 
      });
    }

    console.log("Email sent successfully. Resend ID:", data?.id);
    res.status(200).json({ message: "Application submitted successfully", id: data?.id });
  } catch (err) {
    console.error("Unexpected Server Error during email sending:", err);
    res.status(500).json({ error: "An unexpected server error occurred. Please try again later." });
  }
});

// Vite middleware for development
if (process.env.NODE_ENV !== "production") {
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: "spa",
  });
  app.use(vite.middlewares);
} else {
  const distPath = path.join(process.cwd(), "dist");
  app.use(express.static(distPath));
  app.get("*", (req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
  });
}

// For local development or non-Vercel environments
if (!process.env.VERCEL) {
  const PORT = 3000;
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

export default app;
