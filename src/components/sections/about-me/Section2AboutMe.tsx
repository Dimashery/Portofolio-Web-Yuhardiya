import Image from "next/image";
import { profile } from "@/data/profile";
import { aboutMeDetail } from "@/data/about-me";
import { techIcon } from "@/data/tech-icons";
import { InViewSection } from "@/components/ui/InViewSection";

/* Class animasi: tersembunyi dulu, jalan setelah section terlihat */
const fromRight =
  "opacity-0 [--slide-x:12vw] group-data-[visible=true]:animate-slide-from-right motion-reduce:animate-none motion-reduce:opacity-100";
const fromLeft =
  "opacity-0 [--slide-x:30vw] group-data-[visible=true]:animate-slide-from-left motion-reduce:animate-none motion-reduce:opacity-100";

const delay = (ms: number) => ({ animationDelay: `${ms}ms` });

const headingClass = "font-display text-2xl uppercase tracking-wide md:text-3xl";

export function Section2AboutMe() {
  const { about, education, experience, languages } = aboutMeDetail;

  return (
    <InViewSection className="overflow-hidden bg-neutral-950 px-6 py-20 text-white md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-12">
        {/* ===== Kolom kiri: foto (slide dari kiri) ===== */}
        <div className="md:col-span-5">
          <div className={fromLeft}>
            <p className="mb-4 text-center text-xs uppercase tracking-widest text-white/70">
              Hello, I am
              <span className="mt-1 block font-display text-2xl tracking-wide text-white">
                {profile.name}
              </span>
            </p>

            <div className="relative mx-auto aspect-3/4 w-full max-w-md overflow-hidden rounded-2xl">
              <Image
                src="/images/person2.png"
                alt={`Foto ${profile.name}`}
                fill
                sizes="(min-width: 768px) 40vw, 90vw"
                className="object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-linear-to-t from-neutral-950/60 via-transparent to-transparent"
              />
            </div>
          </div>
        </div>

        {/* ===== Kolom kanan: teks (slide satu per satu) ===== */}
        <div className="space-y-10 md:col-span-7">
          {/* About */}
          <div>
            <h2 className={`${headingClass} ${fromRight}`} style={delay(300)}>
              About Me
            </h2>
            <p
              className={`mt-3 max-w-xl text-sm leading-relaxed text-white/70 ${fromRight}`}
              style={delay(450)}
            >
              {about}
            </p>
          </div>

          {/* Software skills */}
          <div>
            <h2 className={`${headingClass} ${fromRight}`} style={delay(600)}>
              Software Skills
            </h2>
            <ul className={`mt-4 flex flex-wrap gap-3 ${fromRight}`} style={delay(750)}>
              {techIcon.map(({ name, Icon }) => (
                <li
                  key={name}
                  title={name}
                  className="grid size-11 place-items-center rounded-xl bg-white/10 text-xl text-white/80 transition hover:bg-white hover:text-black"
                >
                  <Icon aria-label={name} />
                </li>
              ))}
            </ul>
          </div>

          {/* Education + Experience */}
          <div className="grid gap-10 sm:grid-cols-2">
            <div className={fromRight} style={delay(900)}>
              <h2 className={headingClass}>Education</h2>
              <ul className="mt-3 space-y-4 text-sm">
                {education.map((item) => (
                  <li key={item.school} className="flex gap-3">
                    <span aria-hidden className="mt-1.5 size-2 shrink-0 rounded-full bg-white/60" />
                    <div>
                      <p className="text-white/70">{item.period}</p>
                      <p className="uppercase">{item.school}</p>
                      <p className="text-white/70">{item.major}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className={fromRight} style={delay(1050)}>
              <h2 className={headingClass}>Experience</h2>
              <ul className="mt-3 space-y-4 text-sm">
                {experience.map((item) => (
                  <li key={item.place}>
                    <p className="text-white/70">{item.period}</p>
                    <p className="uppercase">{item.place}</p>
                    <p className="text-white/70">{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Language */}
          <div className={fromRight} style={delay(1200)}>
            <h2 className={headingClass}>Language</h2>
            <ul className="mt-3 max-w-sm space-y-3 text-sm">
              {languages.map((lang) => (
                <li key={lang.name}>
                  <div className="flex justify-between uppercase">
                    <span>{lang.name}</span>
                    <span className="text-white/70">{lang.level}%</span>
                  </div>
                  <div className="mt-1 h-1 rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-white/80"
                      style={{ width: `${lang.level}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </InViewSection>
  );
}