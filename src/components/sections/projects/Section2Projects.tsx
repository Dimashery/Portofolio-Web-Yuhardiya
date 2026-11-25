"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowDropright } from "react-icons/io";
import { projects } from "@/data/project";

const EASE = "ease-[cubic-bezier(0.22,1,0.36,1)]";

const pad = (n: number) => String(n).padStart(2, "0");

export function Section2Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  const [inView, setInView] = useState(false);
  const [visibleCount, setVisibleCount] = useState(4); // jumlah panel per layar
  const [startIndex, setStartIndex] = useState(0); // panel paling kiri
  const [activeIndex, setActiveIndex] = useState(0); // panel yang gambarnya tampil
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  /* ---------- Nilai turunan ---------- */
  const total = projects.length;
  const maxStart = Math.max(0, total - visibleCount);
  const start = Math.min(startIndex, maxStart);
  const itemWidth = 100 / visibleCount;
  const isExpanded = expandedIndex !== null;
  const canSlide = total > visibleCount;

  // Jika panel aktif tidak sedang terlihat, pakai panel paling kiri
  const shownIndex =
    activeIndex >= start && activeIndex < start + visibleCount
      ? activeIndex
      : start;

  /* ---------- Efek ---------- */

  // 1. Deteksi section masuk layar (sekali saja)
  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  // 2. Jumlah panel: 4 di desktop, 2 di layar kecil
  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const update = () => setVisibleCount(media.matches ? 4 : 2);

    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  // 3. Tombol Escape menutup detail
  useEffect(() => {
    if (!isExpanded) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setExpandedIndex(null);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isExpanded]);

  /* ---------- Aksi ---------- */

  const slideTo = (next: number) => {
    const clamped = Math.min(Math.max(next, 0), maxStart);
    setStartIndex(clamped);
    setActiveIndex(clamped);
  };

  const openDetail = (index: number) => {
    setActiveIndex(index);
    setExpandedIndex(index);
  };

  /* ---------- Tampilan ---------- */

  return (
    <section ref={sectionRef} className="bg-white py-16 text-black md:py-24">
      {/* Baris judul + panah slider */}
      <div className="mx-auto mb-8 flex max-w-6xl items-end justify-between px-6">
        <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">
          Selected Projects
        </h2>

        {canSlide && (
          <div className="flex items-center gap-3">
            <span className="mr-2 text-sm tabular-nums text-neutral-500">
              {pad(start + 1)} / {pad(total)}
            </span>
            <button
              type="button"
              aria-label="Project sebelumnya"
              disabled={start === 0 || isExpanded}
              onClick={() => slideTo(start - 1)}
              className="rotate-180 text-4xl transition hover:scale-110 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:scale-100"
            >
              <IoIosArrowDropright />
            </button>
            <button
              type="button"
              aria-label="Project berikutnya"
              disabled={start >= maxStart || isExpanded}
              onClick={() => slideTo(start + 1)}
              className="text-4xl transition hover:scale-110 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:scale-100"
            >
              <IoIosArrowDropright />
            </button>
          </div>
        )}
      </div>

      {/* Jendela: memotong apa pun yang keluar dari kotak */}
      <div className="h-120 overflow-hidden border-y border-black/10 md:h-175">
        {/* Rel (track): digeser ke kiri-kanan saat slider dipakai */}
        <div
          className={`flex h-full w-full transition-transform duration-700 ${EASE} motion-reduce:transition-none`}
          style={{
            transform: `translateX(-${isExpanded ? 0 : start * itemWidth}%)`,
          }}
        >
          {projects.map((project, index) => {
            const isOpen = expandedIndex === index;
            const isActive = shownIndex === index;
            const imageVisible = inView && (isOpen || (!isExpanded && isActive));

            return (
              <div
                key={project.id}
                onMouseEnter={() => {
                  if (!isExpanded) setActiveIndex(index);
                }}
                style={{
                  width: isExpanded
                    ? isOpen
                      ? "100%"
                      : "0%"
                    : `${itemWidth}%`,
                }}
                className={`relative h-full shrink-0 overflow-hidden transition-[width] duration-700 ${EASE} motion-reduce:transition-none ${
                  isExpanded ? "" : "border-l border-black/10"
                }`}
              >
                {/* Lapisan gambar: naik dari bawah saat aktif */}
                <div
                  aria-hidden={!imageVisible}
                  className={`absolute inset-0 transition-transform duration-1000 ${EASE} motion-reduce:transition-none ${
                    imageVisible ? "translate-y-0" : "translate-y-full"
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                  <div
                    aria-hidden
                    className={`absolute inset-0 bg-linear-to-t via-black/10 to-black/20 ${
                      isOpen ? "from-black/80" : "from-black/60"
                    }`}
                  />
                </div>

                {/* Mode biasa: seluruh panel bisa diklik untuk membuka detail */}
                {!isExpanded && (
                  <button
                    type="button"
                    aria-label={`Buka detail ${project.title}`}
                    onClick={() => openDetail(index)}
                    onFocus={() => setActiveIndex(index)}
                    className="absolute inset-0 z-20 flex cursor-pointer flex-col justify-between p-5 text-left"
                  >
                    <span className="flex w-full items-center justify-between">
                      <span
                        className={`text-xs tabular-nums transition-colors duration-700 ${
                          imageVisible ? "text-white/80" : "text-neutral-500"
                        }`}
                      >
                        {pad(index + 1)}
                      </span>
                      <IoIosArrowDropright
                        aria-hidden
                        className={`text-3xl text-white transition-opacity duration-500 ${
                          imageVisible ? "opacity-100" : "opacity-0"
                        }`}
                      />
                    </span>
                    <span
                      className={`text-xl uppercase leading-tight transition-colors duration-700 md:text-2xl ${
                        imageVisible ? "text-white" : "text-black"
                      }`}
                    >
                      {project.title}
                    </span>
                  </button>
                )}

                {/* Mode detail: muncul setelah panel selesai melebar */}
                {isOpen && (
                  <div className="absolute inset-0 z-30 flex flex-col justify-between p-6 text-white md:p-15">
                    <div className="flex justify-end animate-fade-up [animation-delay:800ms] motion-reduce:animate-none">
                      <button
                        type="button"
                        onClick={() => setExpandedIndex(null)}
                        className="rounded-full border border-white/60 px-5 py-2 text-xs uppercase transition hover:bg-white hover:text-black"
                      >
                        Tutup ✕
                      </button>
                    </div>

                    <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                      <h3 className="animate-fade-up text-4xl uppercase leading-none tracking-tight [animation-delay:600ms] motion-reduce:animate-none md:text-7xl">
                        {project.title}
                      </h3>

                      <div className="max-w-md animate-fade-up space-y-5 [animation-delay:700ms] motion-reduce:animate-none">
                        <p className="text-sm leading-relaxed text-white/90">
                          {project.description}
                        </p>

                        <ul className="flex flex-wrap gap-2">
                          {project.techStack.map((tech) => (
                            <li
                              key={tech}
                              className="rounded-full border border-white/40 px-3 py-1 text-xs"
                            >
                              {tech}
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-4 text-xs uppercase">
                          {project.repoUrl && (
                            <a
                              href={project.repoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline underline-offset-4 transition hover:text-white/70"
                            >
                              Source Code ↗
                            </a>
                          )}
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline underline-offset-4 transition hover:text-white/70"
                            >
                              Live Demo ↗
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}