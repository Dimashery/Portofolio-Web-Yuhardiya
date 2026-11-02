import type { Metadata } from "next";
import { Section1Home } from "@/components/sections/home/Section1Home";
import { Section2Home } from "@/components/sections/home/Section2Home";

export const metadata: Metadata = {
  title: "Home",
};

export default function HomePage() {
  return (
    <>
      <Section1Home />
      <Section2Home />
    </>
  );
}