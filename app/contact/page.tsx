import type { Metadata } from "next";
import { PageHeader } from "../components/SiteChrome";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Muhammad Nouman through the portfolio contact form, email, LinkedIn, or GitHub.",
};

const contacts = [
  { icon: "https://cdn.jsdelivr.net/npm/lucide-static@0.468.0/icons/mail.svg", label: "Email", value: "numanirfan595@gmail.com", copy: "Best for internship opportunities and direct conversations.", href: "mailto:numanirfan595@gmail.com", cta: "Send an email" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg", label: "LinkedIn", value: "nouman-irfan01", copy: "Connect with me professionally and follow my academic journey.", href: "https://www.linkedin.com/in/nouman-irfan01", cta: "Connect on LinkedIn" },
  { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", label: "GitHub", value: "Nouman-Irfan", copy: "Explore source code, programming exercises, and complete projects.", href: "https://github.com/Nouman-Irfan", cta: "View my GitHub" },
];

export default function Contact() {
  return <>
    <PageHeader className="contact-page-head" eyebrow="Get in touch" title="Let’s build something meaningful." copy="I’m open to internship opportunities, collaborative projects, and conversations about software development."/>
    <section className="section">
      <div className="wrap contact-grid">
        {contacts.map((contact) => <article key={contact.label}>
          <span className="contact-icon"><img src={contact.icon} alt={`${contact.label} logo`}/></span>
          <small>{contact.label}</small>
          <h2>{contact.value}</h2>
          <p>{contact.copy}</p>
          <a className="button primary" href={contact.href} target={contact.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{contact.cta} ↗</a>
        </article>)}
      </div>
      <div className="wrap availability"><i/><div><strong>Available for internship opportunities</strong><span>Interested in software engineering, desktop development, and game development roles.</span></div></div>
    </section>
    <ContactForm/>
  </>;
}
