import Link from "next/link";
import { profile } from "@/data/profile";

export function Section2Home() {
  return (
    <section className="bg-white px-6 py-24 text-black md:py-40">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-10 text-center">
        <p className="text-xl leading-snug md:text-3xl">{profile.about}</p>

        <Link
          href="/about"
          className="rounded-full border border-black/60 px-6 py-3 text-xs font-medium uppercase transition hover:bg-black hover:text-white"
        >
          Selengkapnya tentang saya
        </Link>
      </div>
    </section>
  );
}