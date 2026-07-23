import type { Metadata } from "next";
import { PageHeader } from "../components/SiteChrome";
import { ExperienceList } from "./ExperienceList";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Internship experience, university memberships, and practical professional development.",
};

export default function Experience() {
  return (
    <>
      <PageHeader
        eyebrow="Experience & involvement"
        title="Learning in real-world environments."
        copy="Internship experience and active university memberships that strengthen my programming, collaboration, leadership, and professional growth."
      />
      <ExperienceList />
    </>
  );
}
