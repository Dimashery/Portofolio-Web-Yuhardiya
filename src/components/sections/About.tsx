import { profile } from "@/data/profile";

export function About() {
  return (
    <section id="about">
      <h2>Tentang Saya</h2>
      <p>{profile.about}</p>
    </section>
  );
}