import { profile } from "@/data/profile";

export function Section1Home() {
  return (
    <section className="relative flex min-h-svh items-end overflow-hidden bg-black text-white">
      {/* Background image */}
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

      {/* Lapisan gelap tipis agar teks tetap terbaca */}
      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/30"
      />

      {/* Konten */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 pb-10 md:flex-row md:items-end md:justify-between">
        <h1 className="overflow-hidden text-[clamp(4rem,8vw,8rem)] font-semibold uppercase leading-[0.85] tracking-tighter">
          <span className="block animate-reveal motion-reduce:animate-none">
            {profile.shortName}

          </span>
        </h1>

        <p className="animate-fade-up max-w-sm text-lg leading-relaxed text-white/90 [animation-delay:300ms] motion-reduce:animate-none">
          {profile.summary}
        </p>

        <p className="text-2xl animate-fade-up [animation-delay:450ms] motion-reduce:animate-none">
          © 2026
        </p>
      </div>
    </section>
  );
}
