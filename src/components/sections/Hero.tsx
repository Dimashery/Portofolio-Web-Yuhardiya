import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section id="home">
      <p>Halo, saya</p>
      <h1>{profile.name}</h1>
      <p>{profile.role}</p>
      <p>{profile.summary}</p>
      <a href="#projects">Lihat Project</a>
    </section>
  );
}