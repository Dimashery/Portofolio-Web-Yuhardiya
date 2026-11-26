import { certificates } from "@/data/about-me";
import { InViewSection } from "@/components/ui/InViewSection";
import { CertificateGallery } from "./CertificateGallery";

const fadeUp =
  "opacity-0 group-data-[visible=true]:animate-fade-up motion-reduce:animate-none motion-reduce:opacity-100";

export function Section3AboutMe() {
  return (
    <InViewSection
      threshold={0.1}
      className="overflow-hidden bg-white px-6 py-20 text-black md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2
            className={`font-display text-4xl uppercase tracking-wide md:text-6xl ${fadeUp}`}
          >
            Certificates
          </h2>
          <p
            className={`mt-3 text-sm text-neutral-500 [animation-delay:150ms] ${fadeUp}`}
          >
            Sertifikat dan pencapaian yang telah saya peroleh.
          </p>
        </div>

        <CertificateGallery items={certificates} />
      </div>
    </InViewSection>
  );
}