import type { Metadata } from "next";
import { Section1Projects } from "@/components/sections/projects/Section1Projects";
import { Section2Projects } from "@/components/sections/projects/Section2Projects";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <>
      <Section1Projects/>
      <Section2Projects/>
    </>
  )
}