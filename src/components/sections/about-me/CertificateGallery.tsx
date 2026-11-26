"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { IoIosArrowDropright } from "react-icons/io";
import type { Certificate } from "@/types";

const PER_PAGE = 4;

/* Tersembunyi dulu, naik dari bawah setelah section terlihat */
const slideUp =
  "opacity-0 group-data-[visible=true]:animate-slide-up motion-reduce:animate-none motion-reduce:opacity-100";

const delay = (ms: number) => ({ animationDelay: `${ms}ms` });

export function CertificateGallery({ items }: { items: Certificate[] }) {
  const topRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(items.length / PER_PAGE);
  const current = items.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  const goTo = (next: number) => {
    const clamped = Math.min(Math.max(next, 0), totalPages - 1);
    if (clamped === page) return;
    setPage(clamped);
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div ref={topRef} className="scroll-mt-24">
      {/* key={page}: saat halaman berganti, grid dibuat ulang sehingga animasi berjalan lagi */}
      <div key={page} className="grid gap-4 md:grid-cols-2">
        {current.map((item, index) => (
          <article key={item.id}>
            <a
              href={item.pdf}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Buka sertifikat ${item.title} (PDF)`}
              className="group/card relative block aspect-4/3 overflow-hidden bg-neutral-100"
            >
              {/* Preview PDF: naik dari bawah */}
              <div
                className={`absolute inset-0 ${slideUp}`}
                style={delay(index * 150)}
              >
                <div className="relative size-full transition-transform duration-700 group-hover/card:scale-105">
                  <Image
                    src={item.thumbnail}
                    alt={`Preview sertifikat ${item.title}`}
                    fill
                    sizes="(min-width: 768px) 45vw, 95vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>

              {/* Kotak putih: naik dari bawah, lebih lambat dari gambar */}
              <div
                className={`absolute inset-x-4 bottom-4 bg-white p-5 text-black md:inset-x-5 md:bottom-5 ${slideUp}`}
                style={delay(index * 150 + 500)}
              >
                <h3 className="text-lg font-medium uppercase leading-tight md:text-xl">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-neutral-500">
                  {item.issuer} · {item.year}
                </p>
                <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-neutral-500">
                  {item.description}
                </p>
                <p className="mt-4 flex items-center gap-2 text-xs font-medium">
                  Lihat Sertifikat
                  <span
                    aria-hidden
                    className="transition-transform duration-300 group-hover/card:translate-x-1"
                  >
                    →
                  </span>
                </p>
              </div>
            </a>
          </article>
        ))}
      </div>

      {/* Pagination: hanya muncul jika lebih dari satu halaman */}
      {totalPages > 1 && (
        <nav
          aria-label="Halaman sertifikat"
          className="mt-10 flex items-center justify-center gap-2"
        >
          <button
            type="button"
            aria-label="Halaman sebelumnya"
            disabled={page === 0}
            onClick={() => goTo(page - 1)}
            className="rotate-180 text-4xl transition hover:scale-110 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:scale-100"
          >
            <IoIosArrowDropright />
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Halaman ${i + 1}`}
              aria-current={i === page ? "page" : undefined}
              onClick={() => goTo(i)}
              className={`size-9 rounded-full text-sm tabular-nums transition ${
                i === page
                  ? "bg-black text-white"
                  : "text-neutral-500 hover:bg-neutral-100 hover:text-black"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            type="button"
            aria-label="Halaman berikutnya"
            disabled={page === totalPages - 1}
            onClick={() => goTo(page + 1)}
            className="text-4xl transition hover:scale-110 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:scale-100"
          >
            <IoIosArrowDropright />
          </button>
        </nav>
      )}
    </div>
  );
}