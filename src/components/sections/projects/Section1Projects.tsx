import { projectsHero } from "@/data/projects-page";
import { IconMarquee } from "@/components/ui/IconMarquee";
import { Reveal } from "@/components/ui/Reveal";

export function Section1Projects() {
  const { intro, services, title, aboutLabel, statement } = projectsHero;

  return (
    <>
      {/* ===== Bagian hero ===== */}
      <section className="relative flex min-h-[70svh] flex-col justify-between overflow-hidden bg-black px-6 pb-10 pt-32 text-white">
        <video
          className="absolute inset-0 size-full object-cover motion-reduce:hidden"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/hero-bg.jpg"
          aria-hidden
        >
          <source src="/videos/hero.webm" type="video/webm" />
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-bg.jpg"
          alt=""
          className="absolute inset-0 hidden size-full object-cover motion-reduce:block"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-black/30"
        />

        {/* Baris atas: teks kecil kiri, daftar layanan kanan */}
        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-6 text-xs md:flex-row md:justify-between">
          <p className="max-w-56 animate-fade-up leading-relaxed text-white/90 [animation-delay:300ms] motion-reduce:animate-none">
            {intro}
          </p>
          <ul className="animate-fade-up space-y-1 leading-relaxed text-white/90 [animation-delay:450ms] motion-reduce:animate-none md:text-right">
            {services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>

        {/* Judul raksasa */}
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <h1 className="overflow-hidden pb-[0.08em] text-[clamp(3.5rem,13vw,13rem)] font-bold uppercase leading-[0.85] tracking-tighter">
            <span className="block animate-reveal motion-reduce:animate-none">
              {title}
            </span>
          </h1>
        </div>
      </section>

      {/* ===== Bagian pernyataan (gelap) ===== */}
      <section className="bg-neutral-950 px-6 pb-4 pt-24 text-white md:pt-32">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-12">
          <Reveal className="md:col-span-3">
            <p className="text-xs font-medium uppercase">* {aboutLabel}</p>
          </Reveal>
          <Reveal delay={150} className="md:col-span-9">
            <p className="text-2xl font-semibold uppercase leading-snug tracking-tight md:text-4xl">
              {statement}
            </p>
          </Reveal>
        </div>

        {/* Marquee ikon, tanpa batas lebar agar menyentuh tepi layar */}
        <div className="-mx-6 mt-20 ">
          <IconMarquee />
        </div>
      </section>
    </>
  );
}
