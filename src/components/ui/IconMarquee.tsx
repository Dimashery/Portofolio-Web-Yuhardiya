import { techIcon } from "../../data/tech-icons";

export function IconMarquee() {
  return (
    <div
      className="overflow-hidden py-10"
      aria-label="Teknologi yang saya gunakan"
    >
      <ul className="flex w-max animate-marquee items-center motion-reduce:animate-none">
        {[0, 1].map((copy) => (
          <li
            key={copy}
            className="flex shrink-0 items-center gap-16 pr-16"
            aria-hidden={copy === 1}
          >
            <ul className="flex items-center gap-16">
              {techIcon.map(({ name, Icon }) => (
                <li
                  key={name}
                  title={name}
                  className="text-4xl text-white/50 transition hover:text-white md:text-5xl"
                >
                  <Icon aria-label={name} />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
