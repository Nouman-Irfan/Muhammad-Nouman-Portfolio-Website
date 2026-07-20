"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const nav = [["Home","/"],["About Me","/about"],["Skills","/skills"],["Projects","/projects"],["Education","/education"],["Certificates","/certificates"],["Achievements","/achievements"],["Experience","/experience"],["Contact","/contact"]];

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const path = usePathname(); const [dark,setDark]=useState(false); const [open,setOpen]=useState(false); const [scrolled,setScrolled]=useState(false);
  useEffect(()=>{ const saved=localStorage.getItem("theme"); const value=saved?saved==="dark":matchMedia("(prefers-color-scheme: dark)").matches; setDark(value); document.documentElement.dataset.theme=value?"dark":"light"; },[]);
  useEffect(()=>{ const fn=()=>setScrolled(scrollY>24); addEventListener("scroll",fn,{passive:true}); return()=>removeEventListener("scroll",fn); },[]);
  const toggle=()=>{ const value=!dark; setDark(value); document.documentElement.dataset.theme=value?"dark":"light"; localStorage.setItem("theme",value?"dark":"light"); };
  return <><header className={`nav ${scrolled?"nav-scrolled":""}`}><div className="nav-inner"><Link className="brand" href="/" onClick={()=>setOpen(false)}><span className="brand-photo"><img src="/nouman-profile.png" alt="Muhammad Nouman"/></span><strong>Muhammad Nouman</strong></Link><nav aria-label="Main navigation" className={open?"nav-links open":"nav-links"}>{nav.map(([label,href])=><Link key={href} href={href} onClick={()=>setOpen(false)} className={path===href?"active":""}>{label}</Link>)}</nav><div className="nav-actions"><button className="icon-btn" onClick={toggle} aria-label={`Switch to ${dark?"light":"dark"} mode`}>{dark?"☀":"☾"}</button><button className="icon-btn menu" aria-expanded={open} aria-label="Toggle navigation" onClick={()=>setOpen(!open)}>{open?"×":"≡"}</button></div></div></header><main>{children}</main><footer><div><Link className="brand footer-brand" href="/"><span className="brand-photo footer-photo"><img src="/nouman-profile.png" alt="Muhammad Nouman"/></span><strong>Muhammad Nouman</strong></Link><p>Building practical software with clarity, curiosity, and care.</p></div><div className="footer-links"><a href="mailto:numanirfan595@gmail.com">Email</a><a href="https://github.com/Nouman-Irfan" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/nouman-irfan01" target="_blank" rel="noreferrer">LinkedIn</a></div><small>© {new Date().getFullYear()} Muhammad Nouman</small></footer></>;
}

export function PageHeader({eyebrow,title,copy}:{eyebrow:string;title:string;copy:string}){return <section className="page-head"><div className="wrap"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{copy}</p></div></section>}
export function SocialLinks(){return <div className="social-row"><a className="button primary" href="https://github.com/Nouman-Irfan" target="_blank" rel="noreferrer">GitHub ↗</a><a className="button secondary" href="https://www.linkedin.com/in/nouman-irfan01" target="_blank" rel="noreferrer">LinkedIn ↗</a><a className="button ghost" href="mailto:numanirfan595@gmail.com">Email me</a></div>}
