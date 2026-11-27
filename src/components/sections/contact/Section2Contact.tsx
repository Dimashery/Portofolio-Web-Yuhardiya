import Link from "next/link";
import { LuPlus, LuMinus } from "react-icons/lu";
import { faqs } from "@/data/contact";
import { InViewSection } from "@/components/ui/InViewSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/* Tersembunyi dulu, jalan setelah section terlihat */
const fromLeft =
  "opacity-0 [--slide-x:12vw] group-data-[visible=true]:animate-slide-from-left motion-reduce:animate-none motion-reduce:opacity-100";
const fromRight =
  "opacity-0 [--slide-x:12vw] group-data-[visible=true]:animate-slide-from-right motion-reduce:animate-none motion-reduce:opacity-100";

const delay = (ms: number) => ({ animationDelay: `${ms}ms` });

export function Section2Contact() {
  return (
    <InViewSection
      threshold={0.2}
      className="overflow-hidden bg-neutral-950 px-6 py-20 text-white md:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-12">
        {/* ===== Kiri: judul (slide dari kiri) ===== */}
        <div className="md:col-span-5">
          <h2
            className={`font-display text-7xl uppercase leading-none tracking-tight text-neutral-300 md:text-9xl ${fromLeft}`}
            style={delay(100)}
          >
            FAQ
          </h2>

          <p
            className={`mt-6 text-xs leading-relaxed text-white/70 ${fromLeft}`}
            style={delay(300)}
          >
            Ada pertanyaan lain?
            <Link
              href="/contact"
              className="mt-1 block text-red-400 underline-offset-4 hover:underline"
            >
              Hubungi saya
            </Link>
          </p>
        </div>

        {/* ===== Kanan: accordion (slide dari kanan, satu per satu) ===== */}
        <div className="md:col-span-7">
          <Accordion defaultValue={["item-0"]} className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className={fromRight}
                style={delay(300 + index * 150)}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="rounded-xl border border-white/10 bg-neutral-900/60 px-5 data-open:bg-neutral-900"
                >
                  <AccordionTrigger className="py-5 text-left text-lg font-medium hover:no-underline md:text-2xl [&>svg]:hidden">
                    <span className="pr-6">{faq.question}</span>
                    <span aria-hidden className="shrink-0 text-red-400">
                      <LuPlus className="size-5 group-aria-expanded/accordion-trigger:hidden" />
                      <LuMinus className="hidden size-5 group-aria-expanded/accordion-trigger:block" />
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-sm leading-relaxed text-white/70">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </div>
            ))}
          </Accordion>
        </div>
      </div>
    </InViewSection>
  );
}