"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const nav = [
  ["Home", "/"],
  ["About Me", "/about"],
  ["Skills", "/skills"],
  ["Projects", "/projects"],
  ["Education", "/education"],
  ["Certificates", "/certificates"],
  ["Achievements", "/achievements"],
  ["Experience", "/experience"],
  ["Contact", "/contact"],
];

const searchPages = [
  { label: "Home", href: "/", description: "Introduction, featured work, and portfolio highlights.", keywords: "welcome developer software portfolio" },
  { label: "About Me", href: "/about", description: "Biography, interests, strengths, and professional goals.", keywords: "biography profile muhammad nouman leadership teamwork" },
  { label: "Skills", href: "/skills", description: "Languages, frameworks, tools, operating systems, and concepts.", keywords: "c++ python java sfml javafx react next windows macos linux kali arch" },
  { label: "Projects", href: "/projects", description: "Games, desktop applications, and console projects.", keywords: "snake chess todo password github source code" },
  { label: "Education", href: "/education", description: "BS Computer Science studies, CGPA, and coursework.", keywords: "ucp university cgpa semester courses academics" },
  { label: "Certificates", href: "/certificates", description: "Professional courses and verified learning certificates.", keywords: "coursera google ai nvidia web development" },
  { label: "Achievements", href: "/achievements", description: "University activities, competitions, and leadership roles.", keywords: "career connect mushaira think2code ushers team iss events" },
  { label: "Experience", href: "/experience", description: "Internships and practical professional experience.", keywords: "decodelabs python internship programming" },
  { label: "Contact", href: "/contact", description: "Email, LinkedIn, GitHub, and availability.", keywords: "connect message hire internship lahore" },
];

function FooterIcon({ name }: { name: "email" | "github" | "linkedin" | "location" }) {
  const paths = {
    email: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
    github: <><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.3 4 5 5 0 0 0 19.1.5S17.9.1 15 2a13.4 13.4 0 0 0-7 0C5.1.1 3.9.5 3.9.5A5 5 0 0 0 3.7 4a5.4 5.4 0 0 0-1.5 3.7c0 5.3 3.5 6.5 6.8 6.9A4.8 4.8 0 0 0 8 18v4"/><path d="M8 19c-3 .9-3-1.5-4-2"/></>,
    linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z"/><path d="M2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></>,
    location: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
  };
  return <svg aria-hidden="true" viewBox="0 0 24 24">{paths[name]}</svg>;
}

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const value = saved ? saved === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(value);
    document.documentElement.dataset.theme = value ? "dark" : "light";
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(scrollY > 24);
    addEventListener("scroll", handleScroll, { passive: true });
    return () => removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setSearchOpen(true);
        setOpen(false);
      }
      if (event.key === "Escape") setSearchOpen(false);
    };
    addEventListener("keydown", handleKeydown);
    return () => removeEventListener("keydown", handleKeydown);
  }, []);

  useEffect(() => {
    if (!searchOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previous; };
  }, [searchOpen]);

  const toggle = () => {
    const value = !dark;
    setDark(value);
    document.documentElement.dataset.theme = value ? "dark" : "light";
    localStorage.setItem("theme", value ? "dark" : "light");
  };
  const closeSearch = () => { setSearchOpen(false); setQuery(""); };
  const normalized = query.trim().toLowerCase();
  const results = searchPages.filter((item) => `${item.label} ${item.description} ${item.keywords}`.toLowerCase().includes(normalized));

  return <>
    <header className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
      <div className="nav-inner">
        <Link className="brand" href="/" onClick={() => setOpen(false)}>
          <span className="brand-photo"><img src="/nouman-profile.png" alt="Muhammad Nouman"/></span>
          <strong>Muhammad Nouman</strong>
        </Link>
        <nav aria-label="Main navigation" className={open ? "nav-links open" : "nav-links"}>
          {nav.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)} className={path === href ? "active" : ""}>{label}</Link>)}
        </nav>
        <div className="nav-actions">
          <button className="icon-btn search-trigger" onClick={() => { setSearchOpen(true); setOpen(false); }} aria-label="Search portfolio">
            <span aria-hidden="true">⌕</span>
          </button>
          <button className="icon-btn" onClick={toggle} aria-label={`Switch to ${dark ? "light" : "dark"} mode`}>{dark ? "☀" : "☾"}</button>
          <button className="icon-btn menu" aria-expanded={open} aria-label="Toggle navigation" onClick={() => setOpen(!open)}>{open ? "×" : "≡"}</button>
        </div>
      </div>
    </header>

    {searchOpen && <div className="search-overlay" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) closeSearch(); }}>
      <section className="search-dialog" role="dialog" aria-modal="true" aria-labelledby="search-title">
        <div className="search-heading">
          <div><span className="eyebrow">Quick navigation</span><h2 id="search-title">Search the portfolio</h2></div>
          <button className="search-close" onClick={closeSearch} aria-label="Close search">×</button>
        </div>
        <label className="search-box">
          <span aria-hidden="true">⌕</span>
          <input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search pages, skills, projects..." aria-label="Search pages"/>
          <kbd>ESC</kbd>
        </label>
        <div className="search-meta">
          <span>{normalized ? `${results.length} result${results.length === 1 ? "" : "s"}` : "Explore every page"}</span>
        </div>
        <div className="search-results">
          {results.map((item, index) => <Link key={item.href} href={item.href} onClick={closeSearch} className={path === item.href ? "current" : ""}>
            <span className="search-index">{String(index + 1).padStart(2, "0")}</span>
            <span><strong>{item.label}</strong><small>{item.description}</small></span>
            <b aria-hidden="true">→</b>
          </Link>)}
          {results.length === 0 && <div className="search-empty"><span>⌕</span><h3>No matching page</h3><p>Try searching for skills, projects, certificates, or contact.</p></div>}
        </div>
      </section>
    </div>}

    <main>{children}</main>
    <footer className="site-footer">
      <div className="footer-stars" aria-hidden="true"/>
      <div className="footer-content">
        <section className="footer-intro">
          <Link className="footer-identity" href="/"><span className="footer-avatar"><img src="/nouman-profile.png" alt="Muhammad Nouman"/></span><strong>Muhammad Nouman</strong></Link>
          <p>Building practical software by day, solving meaningful problems with code.</p>
        </section>
        <nav className="footer-explore" aria-label="Footer navigation"><h2>Explore</h2><div>{nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</div></nav>
        <section className="footer-connect">
          <h2>Connect</h2>
          <a href="mailto:numanirfan595@gmail.com"><FooterIcon name="email"/><span>numanirfan595@gmail.com</span></a>
          <a href="https://github.com/Nouman-Irfan" target="_blank" rel="noreferrer"><FooterIcon name="github"/><span>GitHub</span><b aria-hidden="true">↗</b></a>
          <a href="https://www.linkedin.com/in/nouman-irfan01" target="_blank" rel="noreferrer"><FooterIcon name="linkedin"/><span>LinkedIn</span><b aria-hidden="true">↗</b></a>
          <p><FooterIcon name="location"/><span>Lahore, Pakistan</span></p>
        </section>
        <small>© {new Date().getFullYear()} Muhammad Nouman. All rights reserved.</small>
      </div>
    </footer>
  </>;
}

export function PageHeader({ eyebrow, title, copy, className = "" }: { eyebrow: string; title: string; copy: string; className?: string }) {
  return <section className={`page-head ${className}`.trim()}><div className="wrap"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{copy}</p></div></section>;
}

export function SocialLinks() {
  return <div className="social-row"><a className="button primary" href="https://github.com/Nouman-Irfan" target="_blank" rel="noreferrer">GitHub ↗</a><a className="button secondary" href="https://www.linkedin.com/in/nouman-irfan01" target="_blank" rel="noreferrer">LinkedIn ↗</a><a className="button ghost" href="mailto:numanirfan595@gmail.com">Email me</a></div>;
}
