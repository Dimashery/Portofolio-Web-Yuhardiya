"use client";

import type { FormEvent } from "react";

const fieldClass =
  "w-full rounded-xl bg-neutral-800/70 px-4 py-3 text-sm text-white placeholder:text-neutral-500 outline-none ring-1 ring-transparent transition focus:ring-red-500/70";

export function ContactForm({ recipient }: { recipient: string }) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = encodeURIComponent(`Pesan dari ${name}`);
    const body = encodeURIComponent(`${message}\n\n---\nNama: ${name}\nEmail: ${email}`);

    // Membuka aplikasi email pengunjung dengan isi yang sudah terisi
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="sr-only">
            Nama
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Nama Anda"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="Email"
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="sr-only">
          Pesan
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Pesan"
          className={`${fieldClass} resize-none`}
        />
      </div>

      <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-48 text-[0.65rem] leading-relaxed text-neutral-500">
          Dengan mengirim pesan, Anda menyetujui data Anda digunakan untuk membalas pesan ini.
        </p>
        <button
          type="submit"
          className="flex items-center justify-center gap-6 rounded-full border border-red-500/60 bg-red-500/10 px-7 py-3 text-xs font-medium uppercase text-red-400 transition hover:bg-red-500 hover:text-white"
        >
          Kirim
          <span aria-hidden>↗</span>
        </button>
      </div>
    </form>
  );
}