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

async function startServer() {
  const app = express();
  const PORT = 3000;

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
      console.error("RESEND_API_KEY is not set in environment variables");
      return res.status(500).json({ error: "Server configuration error: API key missing" });
    }

    try {
      console.log("Attempting to send email via Resend...");
      const { data, error } = await resend.emails.send({
        from: "KB Academy Admissions <onboarding@resend.dev>",
        to: ["adu.kbacademy@gmail.com"],
        subject: `New Admission Application: ${studentName}`,
        html: `
          <h1>New Admission Application</h1>
          <p><strong>Student Name:</strong> ${studentName}</p>
          <p><strong>Parent Name:</strong> ${parentName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone Number:</strong> ${phone}</p>
          <p><strong>Program of Interest:</strong> ${program}</p>
          <p><strong>Message:</strong> ${message || "N/A"}</p>
        `,
      });

      if (error) {
        console.error("Resend API Error:", error);
        return res.status(500).json({ error: error.message });
      }

      console.log("Email sent successfully:", data);
      res.status(200).json({ message: "Application submitted successfully", data });
    } catch (err) {
      console.error("Unexpected Server Error:", err);
      res.status(500).json({ error: "Internal server error" });
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

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
