import Link from "next/link";
import { profile } from "@/data/profile";
import { navItems } from "@/data/navigation";
import { NavLinks } from "./NavLinks";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full bg-neutral-900/70 px-6 py-3 text-white backdrop-blur-md">
        <Link href="/home" className="text-lg font-semibold tracking-tight">
          {profile.shortName}
        </Link>

        <NavLinks items={navItems} />

        <Link
          href="/contact"
          className="flex items-center gap-2 rounded-full bg-white py-1.5 pl-4 pr-1.5 text-xs font-medium uppercase text-black transition hover:bg-neutral-200"
        >
          Hubungi Saya
          <span
            aria-hidden
            className="grid size-6 place-items-center rounded-full bg-black text-white"
          >
            ↗
          </span>
        </Link>
      </div>
    </header>
  );
}