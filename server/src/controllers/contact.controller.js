import Message from "../models/Message.js";
import { sendEmail } from "../utils/sendEmail.js";

export async function submitContact(req, res, next) {
  try {
    const { name, email, subject, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({ error: "name, email and message are required" });
    }

    // Save to DB if connected
    let saved = null;
    try {
      saved = await Message.create({ name, email, subject, message });
    } catch (dbErr) {
      // Non-fatal if DB not configured
      console.warn("DB save skipped/failed:", dbErr?.message || dbErr);
    }

    // Try to send email if SMTP configured
    let emailResult = null;
    try {
      emailResult = await sendEmail({
        to: process.env.SMTP_USER,
        from: process.env.SMTP_USER,
        subject: `Portfolio Contact: ${subject || "New message"}`,
        text: `From: ${name} <${email}>\n\n${message}`,
        html: `<p><strong>From:</strong> ${name} &lt;${email}&gt;</p><p>${message.replace(/\n/g, "<br/>")}</p>`,
      });
    } catch (mailErr) {
      console.warn("Email sending skipped/failed:", mailErr?.message || mailErr);
    }

    return res.status(201).json({
      success: true,
      saved: Boolean(saved?._id),
      emailed: Boolean(emailResult?.messageId),
      message: "Thanks! Your message has been received.",
    });
  } catch (error) {
    next(error);
  }
}



