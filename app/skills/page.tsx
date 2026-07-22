import type { Metadata } from "next";
import { PageHeader } from "../components/SiteChrome";
import { skills } from "../data/content";

export const metadata:Metadata={title:"Skills",description:"Programming languages, frameworks, development tools, creative tools, operating systems, and software engineering concepts."};

const skillIcons:Record<string,string>={
  "C++":"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
  Python:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  Java:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  JavaScript:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  SFML:"https://www.sfml-dev.org/download/goodies/sfml-icon-small.png",
  JavaFX:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  React:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "Next.js":"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  "Tailwind CSS":"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  Bootstrap:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
  Git:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  GitHub:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  "Visual Studio":"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-original.svg",
  "VS Code":"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
  "IntelliJ IDEA":"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg",
  Cursor:"https://ptht05hbb1ssoooe.public.blob.vercel-storage.com/assets/brand/brand-logo-1.svg",
  Figma:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
  "Adobe After Effects":"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/aftereffects/aftereffects-original.svg",
  "Adobe Premiere Pro":"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/premierepro/premierepro-original.svg",
  "Adobe Photoshop":"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg",
  "Adobe Illustrator":"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-original.svg",
  Canva:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg",
  Windows:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows11/windows11-original.svg",
  macOS:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apple/apple-original.svg",
  Linux:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
  "Kali Linux":"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kalilinux/kalilinux-original.svg",
  "Arch Linux":"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/archlinux/archlinux-original.svg",
  ChromeOS:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/chrome/chrome-original.svg",
};

const conceptIcons:Record<string,string>={
  "Dynamic Memory":"memory",
  Pointers:"pointer",
  "File Handling":"file",
  "Object-Oriented Programming":"objects",
  "Event-Driven Programming":"event",
  "Problem-Solving":"solve",
  "Data Structures":"structure",
  "Data Types & Variables":"variables",
  "Functions & Modularity":"functions",
  "Loops & Conditionals":"flow",
  "Error Handling":"errors",
};

function ConceptIcon({type,name}:{type:string;name:string}){
  return <span className={`skill-icon concept-icon concept-${type}`} aria-label={`${name} concept icon`}>
    <svg viewBox="0 0 48 48" aria-hidden="true">
      {type==="memory"&&<><rect x="10" y="11" width="24" height="9" rx="2"/><rect x="14" y="27" width="24" height="9" rx="2"/><path d="M34 15h5v16h-5M8 24h8"/></>}
      {type==="pointer"&&<><path d="m13 8 21 19-11 1-6 10z"/><circle cx="36" cy="12" r="4"/><path d="m32 15-7 7"/></>}
      {type==="file"&&<><path d="M8 15h13l4-5h15v27H8z"/><path d="M14 22h20M14 28h14"/></>}
      {type==="objects"&&<><rect x="7" y="8" width="14" height="12" rx="3"/><rect x="27" y="28" width="14" height="12" rx="3"/><path d="M21 14h8a5 5 0 0 1 5 5v9M27 34h-8a5 5 0 0 1-5-5v-9"/></>}
      {type==="event"&&<><path d="m27 5-14 22h11l-3 16 15-24H25z"/><circle cx="9" cy="10" r="3"/><circle cx="40" cy="38" r="3"/></>}
      {type==="solve"&&<><path d="M17 31c-3-2-5-6-5-10a12 12 0 0 1 24 0c0 4-2 8-5 10l-2 4H19z"/><path d="M19 40h10M19 20l4 4 7-8"/></>}
      {type==="structure"&&<><circle cx="24" cy="9" r="5"/><circle cx="10" cy="36" r="5"/><circle cx="38" cy="36" r="5"/><path d="m21 14-8 17m14-17 8 17M15 36h18"/></>}
      {type==="variables"&&<><path d="M8 13h7M8 35h7M13 13v22M40 13h-7m7 22h-7m2-22v22"/><circle cx="24" cy="18" r="5"/><rect x="19" y="28" width="10" height="7" rx="2"/></>}
      {type==="functions"&&<><path d="M9 11h8M13 11v26M9 37h8M31 11h8M35 11v26M31 37h8"/><path d="m20 29 4-10 4 10m-7-3h6"/></>}
      {type==="flow"&&<><path d="M12 16a14 14 0 0 1 23-4l3 4M36 32a14 14 0 0 1-23 4l-3-4"/><path d="m31 16h7V9M17 32h-7v7"/><path d="m24 17 6 7-6 7-6-7z"/></>}
      {type==="errors"&&<><path d="M24 6 39 12v10c0 10-6 16-15 20C15 38 9 32 9 22V12z"/><path d="M24 15v11M24 33h.01"/></>}
    </svg>
  </span>;
}

export default function Skills(){return <><PageHeader eyebrow="Skills & toolkit" title="A growing, practical toolkit." copy="Technologies I use to build, debug, and deliver desktop applications, games, and modern interfaces."/><section className="section"><div className="wrap skill-groups">{skills.map(([group,items],g)=><section className={group==="Operating Systems"?"operating-systems":""} key={group}><div className="group-number">0{g+1}</div><div><h2>{group}</h2><div className="skill-grid">{items.map(([name,desc])=><article className="skill-card" key={name}>{skillIcons[name]?<span className="skill-icon has-logo"><img src={skillIcons[name]} alt={`${name} logo`} loading="lazy"/></span>:conceptIcons[name]?<ConceptIcon type={conceptIcons[name]} name={name}/>:<span className="skill-icon">{name.slice(0,2).toUpperCase()}</span>}<div><small>{group}</small><h3>{name}</h3><p>{desc}</p></div></article>)}</div></div></section>)}</div></section></>}
