import { homeIntro } from "@/data/home";
import { Reveal } from "@/components/ui/Reveal";

export function Section2Home() {
  const { label, statement, infoGroups, stats } = homeIntro;

  return (
    <section className="bg-white px-6 py-20 text-black md:py-48">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-12">
        {/* Kolom kiri: info pendukung */}
        <Reveal className="md:col-span-4">
          <dl className="space-y-6 text-sm">
            {infoGroups.map((group) => (
              <div key={group.label}>
                <dt className="text-base">{group.label}</dt>
                <dd className="mt-1 leading-relaxed text-neutral-500">
                  {group.items.join(" · ")}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* Kolom kanan: konten utama */}
        <div className="md:col-span-8">
          <Reveal delay={150}>
            <p className="text-3xl leading-tight tracking-tight md:text-5xl">
              <span className="mr-6 inline-flex items-center gap-2 align-middle text-sm tracking-normal md:mr-10">
                <span
                  aria-hidden
                  className="size-3 rounded-full bg-orange-500"
                />
                {label}
              </span>
              <span className="font-semibold">{statement}</span>
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-16 flex flex-col gap-4 md:mt-20 md:flex-row md:items-end md:gap-8">
              <p className="text-8xl font-light leading-none tracking-tighter md:text-[9rem]">
                {stats.value}
              </p>
              <p className="max-w-xs pb-2 text-sm font-bold leading-relaxed text-neutral-500">
                {stats.description}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}