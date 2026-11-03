import Link from "next/link";
import { profile } from "@/data/profile";
import { navItems } from "@/data/navigation";


export function Footer() {
  return (
    <footer className="overflow-hidden bg-black px-6 pt-16 text-white md:pt-20">
      <div className="mx-auto max-w-7xl">
        {/* Bagian atas: tagline + kolom link */}
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div className="max-w-xs">
            <Link href="/home" className="text-2xl font-semibold tracking-tight">
              {profile.shortName}
            </Link>
            <p className="mt-6 text-xs uppercase leading-relaxed tracking-wider text-white/70">
              {profile.tagline}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:gap-16">
            <FooterColumn title="Menu">
              {navItems.map((item) => (
                <FooterLink key={item.href} href={item.href}>
                  {item.label}
                </FooterLink>
              ))}
            </FooterColumn>

            <FooterColumn title="Follow">
              {profile.socials.map((social) => (
                <FooterLink key={social.label} href={social.url} external>
                  {social.label}
                </FooterLink>
              ))}
            </FooterColumn>

            <FooterColumn title="Contact">
              <FooterLink href={`mailto:${profile.email}`} external>
                {profile.email}
              </FooterLink>
            </FooterColumn>
          </div>
        </div>

        {/* Nama raksasa */}
        <p
          aria-hidden
          className="mt-16 select-none text-center text-white/10 text-[clamp(4rem,22vw,18rem)] font-bold leading-none tracking-tighter md:mt-24"
        >
          {profile.shortName}
        </p>

        {/* Bagian bawah */}
        <div className="flex flex-col gap-4 py-8 text-xs uppercase tracking-wider text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © 2026 {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Komponen kecil, hanya dipakai di file ini ---------- */

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-base font-medium">{title}</h2>
      <ul className="mt-5 space-y-3 text-xs uppercase tracking-wider">
        {children}
      </ul>
    </div>
  );
}

function FooterLink({
  href,
  external = false,
  children,
}: {
  href: string;
  external?: boolean;
  children: React.ReactNode;
}) {
  const className = "text-white/70 transition hover:text-white";

  return (
    <li>
      {external ? (
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          className={className}
        >
          {children}
        </a>
      ) : (
        <Link href={href} className={className}>
          {children}
        </Link>
      )}
    </li>
  );
}