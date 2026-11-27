import { profile } from "@/data/profile";
import { contact } from "@/data/contact";
import { ContactForm } from "./ContactForm";

/* Class animasi: jalan otomatis saat halaman dibuka */
const fromLeft =
  "animate-slide-from-left [--slide-x:12vw] motion-reduce:animate-none";
const fromRight =
  "animate-slide-from-right [--slide-x:12vw] motion-reduce:animate-none";

const delay = (ms: number) => ({ animationDelay: `${ms}ms` });

export function Section1Contact() {
  const { phoneNumber, address, officeHours } = contact;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    `Halo ${profile.name}, saya ingin berdiskusi.`,
  )}`;

  return (
    <section className="min-h-svh overflow-hidden bg-neutral-950 px-6 pb-16 pt-32 text-white md:pt-36">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-12">
        {/* ===== Kolom kiri: judul + pengantar (slide dari kiri) ===== */}
        <div className="md:col-span-7">
          <p
            className={`text-xs uppercase tracking-wider text-white/70 ${fromLeft}`}
            style={delay(100)}
          >
            (Contact Us)
          </p>

          <h1 className="mt-3 font-display text-[clamp(3.5rem,11vw,10rem)] uppercase leading-[0.95] tracking-tight text-neutral-300">
            <span className={`block ${fromLeft}`} style={delay(200)}>
              Let&rsquo;s work
            </span>
            <span className={`block ${fromLeft}`} style={delay(350)}>
              together
            </span>
          </h1>

          <p
            className={`mt-8 max-w-xs pl-6 text-sm leading-relaxed text-white/70 ${fromLeft}`}
            style={delay(550)}
          >
            Punya ide project? Saya senang mendengarnya. Mari kita buat sesuatu yang hebat,
            bersama.
          </p>
        </div>

        {/* ===== Kolom kanan: kotak form (slide dari kanan) ===== */}
        <div className="md:col-span-5">
          <div
            className={`rounded-2xl bg-neutral-900 p-5 ring-1 ring-white/10 md:p-6 ${fromRight}`}
            style={delay(400)}
          >
            <ContactForm recipient={profile.email} />
          </div>

          <p
            className={`mt-6 text-sm text-white/70 ${fromRight}`}
            style={delay(600)}
          >
            Lebih suka mengobrol langsung?{" "}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 underline-offset-4 transition hover:underline"
            >
              Hubungi via WhatsApp
            </a>
            .
          </p>

          <hr className="my-6 border-white/10" />

          <div className={fromRight} style={delay(750)}>
            <h2 className="text-xl font-medium">Visit Us</h2>

            <div className="mt-4 grid gap-6 text-sm sm:grid-cols-2">
              <div>
                <p className="text-[0.65rem] uppercase tracking-wider text-neutral-500">
                  (Alamat)
                </p>
                <address className="mt-2 leading-relaxed not-italic">
                  {address.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </div>

              <div>
                <p className="text-[0.65rem] uppercase tracking-wider text-neutral-500">
                  (Jam Kerja)
                </p>
                <p className="mt-2 leading-relaxed">
                  {officeHours.days}
                  <span className="block">{officeHours.time}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}