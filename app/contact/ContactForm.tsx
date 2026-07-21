"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

const subjects = [
  "Project Inquiry",
  "Freelance Opportunity",
  "Job or Internship Opportunity",
  "Collaboration",
  "Other",
];

export function ContactForm() {
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const submitting = useRef(false);

  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  const closeSuccess = () => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = null;
    setSent(false);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitting.current) return;
    const form = event.currentTarget;
    setError("");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    if (!serviceId || !templateId || !publicKey) {
      setError("The contact form is not connected yet. Please email me directly at numanirfan595@gmail.com.");
      return;
    }

    const data = new FormData(form);
    submitting.current = true;
    setSending(true);
    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: {
            to_email: "numanirfan595@gmail.com",
            from_name: data.get("from_name"),
            reply_to: data.get("reply_to"),
            phone: data.get("phone"),
            subject: data.get("subject"),
            message: data.get("message"),
          },
        }),
      });
      if (!response.ok) throw new Error(await response.text());

      form.reset();
      setMessage("");
      setSent(true);
      timer.current = setTimeout(() => { setSent(false); timer.current = null; }, 10000);
    } catch {
      setError("Your message could not be sent right now. Please try again or email me directly.");
    } finally {
      submitting.current = false;
      setSending(false);
    }
  };

  return <section className="contact-form-section">
    <div className="wrap">
      <div className="contact-form-heading">
        <span className="eyebrow">Start a conversation</span>
        <h2>Tell me about your idea.</h2>
        <p>I usually respond within 24–48 hours. Please include enough project details so I can better understand your request.</p>
      </div>

      <div className={`contact-form-shell ${sent ? "is-sent" : ""}`}>
        <div className="contact-form-flipper">
          <form className="contact-form-card contact-form-front" onSubmit={handleSubmit}>
            <div className="contact-form-grid">
              <label><span>Name</span><input name="from_name" type="text" placeholder="Your name" required minLength={2} maxLength={80} autoComplete="name"/></label>
              <label><span>Email</span><input name="reply_to" type="email" placeholder="you@example.com" required maxLength={120} autoComplete="email"/></label>
              <label><span>Phone number</span><input name="phone" type="tel" placeholder="+92 300 1234567" required minLength={7} maxLength={20} pattern="[+]?[0-9 ()-]{7,20}" autoComplete="tel"/></label>
              <label><span>Subject</span><div className="contact-select-wrap"><select name="subject" required defaultValue=""><option value="" disabled>Select a subject</option>{subjects.map((subject) => <option key={subject} value={subject}>{subject}</option>)}</select></div></label>
              <label className="contact-message-field"><span>Message</span><textarea name="message" placeholder="Tell me more about your project, opportunity, or idea..." required minLength={10} maxLength={1000} value={message} onChange={(event) => setMessage(event.target.value)}/><small className={message.length >= 900 ? "near-limit" : ""} aria-live="polite">{message.length} / 1000 characters</small></label>
            </div>
            <div className="contact-privacy-note">
              <strong>Privacy note</strong>
              <p>The information submitted through this form will only be used to review and respond to your message. It will not be shared with third parties for marketing purposes.</p>
            </div>
            {error && <p className="contact-form-error" role="alert">{error}</p>}
            <button className="contact-submit" type="submit" disabled={sending}><span aria-hidden="true">↗</span>{sending ? "Sending message…" : "Send Message"}</button>
          </form>

          <article className="contact-form-card contact-success" aria-live="polite">
            <button className="contact-success-close" type="button" onClick={closeSuccess} aria-label="Close confirmation">×</button>
            <div className="success-mark" aria-hidden="true">✓</div>
            <span className="eyebrow">Delivered</span>
            <h2>Message Sent Successfully</h2>
            <p className="success-priority"><em>Thank you for reaching out! Responding to your message is a top priority, and I will get back to you as soon as possible.</em></p>
            <p>Please avoid submitting the same message multiple times unless you need to provide updated or additional information.</p>
            <small>This confirmation will close automatically.</small>
          </article>
        </div>
      </div>
    </div>
  </section>;
}
