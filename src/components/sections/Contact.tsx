import { profile } from "@/data/profile";

export function Contact() {
  return (
    <section id="contact">
      <h2>Kontak</h2>
      <p>Tertarik bekerja sama? Hubungi saya.</p>
      <a href={`mailto:${profile.email}`}>{profile.email}</a>
      <ul>
        {profile.socials.map((social) => (
          <li key={social.label}>
            <a href={social.url} target="_blank" rel="noopener noreferrer">
              {social.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}