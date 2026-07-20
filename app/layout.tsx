import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteChrome } from "./components/SiteChrome";
import "./globals.css";

const geist = Geist({ variable: "--font-sans", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://muhammad-nouman-portfolio.example"),
  title: { default: "Muhammad Nouman | Software Developer", template: "%s | Muhammad Nouman" },
  description: "Portfolio of Muhammad Nouman, a computer science student building thoughtful desktop software, games, and practical applications.",
  openGraph: { title: "Muhammad Nouman | Software Developer", description: "Computer science, software development, games, and practical problem-solving.", type: "website", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Muhammad Nouman — Computer Science and Software Development" }] },
  twitter: { card: "summary_large_image", title: "Muhammad Nouman | Software Developer", images: ["/og.png"] },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" suppressHydrationWarning><body className={`${geist.variable} ${mono.variable}`}><SiteChrome>{children}</SiteChrome></body></html>;
}
