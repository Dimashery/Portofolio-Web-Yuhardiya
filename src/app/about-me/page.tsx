import type { Metadata } from "next";
import { Section1AboutMe } from "@/components/sections/about-me/Section1AboutMe";
import { Section2AboutMe } from "@/components/sections/about-me/Section2AboutMe";
import { Section3AboutMe } from "@/components/sections/about-me/Section3AboutMe";

export const metadata: Metadata = {
  title: "About Me",
};

export default function AboutMePage() {
  return (
    <>
      <Section1AboutMe />
      <Section2AboutMe />
      <Section3AboutMe />
    </>
  );
}