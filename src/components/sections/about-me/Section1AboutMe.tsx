import Image from "next/image";
import { FaGlobe } from "react-icons/fa";
import { profile } from "@/data/profile";
import { aboutMeHero } from "@/data/about-me";

export function Section1AboutMe() {
  const {
    topLabel,
    availability,
    bigTitle,
    greeting,
    description,
    location,
    tagline,
    stats,
  } = aboutMeHero;

  return (
    <section className="relative min-h-svh overflow-hidden bg-black text-white">
      {/* ===== Lapisan 0: cahaya merah di bagian atas ===== */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(153,27,27,0.55),transparent_65%)]"
      />

      {/* ===== Lapisan 1: teks raksasa (masuk dari kiri) ===== */}
      <div className="absolute inset-x-0 top-[14%] z-0 flex justify-center">
        <h1
          className="animate-slide-from-left select-none whitespace-nowrap bg-linear-to-b from-red-600 to-red-950 bg-clip-text font-display text-[clamp(5rem,24vw,26rem)] uppercase leading-none tracking-tight text-transparent [--slide-x:30vw] [animation-delay:150ms] motion-reduce:animate-none"
        >
          {bigTitle}
        </h1>
      </div>

      {/* ===== Lapisan 2: foto (masuk dari kanan) ===== */}
      <div className="absolute inset-x-0 bottom-0 top-24 z-10 flex justify-center">
        <div className="relative h-full w-full max-w-5xl animate-slide-from-right [--slide-x:25vw] motion-reduce:animate-none">
          <Image
            src="/images/person.png"
            alt={`Foto ${profile.name}`}
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-contain object-bottom"
          />
        </div>
      </div>

      {/* ===== Lapisan 3: gradasi gelap di bawah ===== */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 z-20 h-2/5 bg-linear-to-t from-black via-black/60 to-transparent"
      />

      {/* ===== Lapisan 4: konten ===== */}
      <div className="relative z-30 mx-auto flex min-h-svh max-w-7xl flex-col justify-between px-6 pb-10 pt-28">
        {/* Baris atas */}
        <div className="flex items-start justify-between border-b border-white/10 pb-4 text-[0.65rem] uppercase tracking-wider">
          <div className="animate-slide-from-left [animation-delay:600ms] motion-reduce:animate-none">
            <p className="text-red-500">{profile.role}</p>
            <p className="text-white/80">{topLabel}</p>
          </div>
          <p className="flex animate-slide-from-right items-center gap-2 text-white/80 [animation-delay:600ms] motion-reduce:animate-none">
            {availability}
            <span aria-hidden className="text-red-500">✦</span>
          </p>
        </div>

        {/* Baris bawah: kiri (identitas) dan kanan (tagline + statistik) */}
        <div className="grid items-end gap-10 md:grid-cols-12">
          {/* Kiri */}
          <div className="md:col-span-5">
            <p className="animate-slide-from-left font-script text-3xl text-white/90 [animation-delay:700ms] motion-reduce:animate-none">
              {greeting}
            </p>

            <h2 className="mt-2 max-w-xs animate-slide-from-left font-display text-5xl uppercase leading-[0.95] tracking-tight [animation-delay:850ms] motion-reduce:animate-none md:text-7xl">
              {profile.name}
            </h2>

            <p className="mt-4 animate-slide-from-left text-sm font-semibold uppercase tracking-wide text-red-500 [animation-delay:1000ms] motion-reduce:animate-none">
              {profile.role}
            </p>

            <p className="mt-4 max-w-sm animate-slide-from-left text-sm leading-relaxed text-white/70 [animation-delay:1150ms] motion-reduce:animate-none">
              {description}
            </p>

            <p className="mt-5 flex animate-slide-from-left items-center gap-2 text-[0.65rem] uppercase tracking-wider text-white/70 [animation-delay:1300ms] motion-reduce:animate-none">
              <FaGlobe aria-hidden className="text-red-500" />
              {location}
            </p>
          </div>

          {/* Kanan */}
          <div className="md:col-span-3 md:col-start-10">
            <div className="flex animate-slide-from-right items-center gap-3 text-xs text-white/80 [animation-delay:1000ms] motion-reduce:animate-none">
              <span
                aria-hidden
                className="grid size-10 shrink-0 place-items-center rounded-full border border-red-500/60 text-red-500"
              >
                ✦
              </span>
              <p className="max-w-40 leading-snug">{tagline}</p>
            </div>

            <dl className="mt-8 animate-slide-from-right divide-y divide-white/10 [animation-delay:1150ms] motion-reduce:animate-none">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center justify-between py-3">
                  <dd className="font-display text-4xl text-red-500">{stat.value}</dd>
                  <dt className="text-[0.65rem] uppercase tracking-wider text-white/70">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}