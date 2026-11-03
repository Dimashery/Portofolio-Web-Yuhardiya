import { homeIntro } from "@/data/home";

export function Section2Home() {
  const { label, statement, infoGroups, stats } = homeIntro;

  return (
    <section className="bg-white px-6 py-20 text-black md:py-48">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-12">
        {/* Kolom kiri: info pendukung */}
        <dl className="space-y-6 text-sm md:col-span-4">
          {infoGroups.map((group) => (
            <div key={group.label}>
              <dt className="text-base">{group.label}</dt>
              <dd className="mt-1 leading-relaxed text-neutral-500">
                {group.items.join(" · ")}
              </dd>
            </div>
          ))}
        </dl>

        {/* Kolom kanan: konten utama */}
        <div className="md:col-span-8">
          <p className="text-3xl leading-tight tracking-tight md:text-5xl">
            <span className="mr-6 inline-flex items-center gap-2 align-middle text-sm tracking-normal md:mr-10">
              <span
                aria-hidden
                className="size-3 rounded-full bg-orange-500"
              />
              {label}
            </span>
            <span className="font-semibold">
              {statement}
            </span>
          </p>

          <div className="mt-16 flex flex-col gap-4 md:mt-20 md:flex-row md:items-end md:gap-8">
            <p className="text-8xl font-light leading-none tracking-tighter md:text-[9rem]">
              {stats.value}
            </p>
            <p className="max-w-xs pb-2 text-sm leading-relaxed text-neutral-500 font-bold">
              {stats.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}