import type { Metadata } from "next";
import { Section1Contact } from "@/components/sections/contact/Section1Contact";
import { Section2Contact } from "@/components/sections/contact/Section2Contact";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
      <Section1Contact />
      <Section2Contact />
    </>
  );
}