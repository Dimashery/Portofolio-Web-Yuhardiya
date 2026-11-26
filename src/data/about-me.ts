import type { AboutMeHero, AboutMeDetail, Certificate } from "@/types";


export const aboutMeHero: AboutMeHero = {
  topLabel: "Digital Creator",
  availability: "Open for work",
  bigTitle: "About Me",
  greeting: "Hello, I'm",
  description:
    "Saya membangun website yang rapi dan berfokus pada pengguna, dengan perhatian pada performa dan detail kecil yang membuat perbedaan.",
  location: "Based in Malang, Indonesia",
  tagline: "Mengubah ide menjadi pengalaman digital yang nyata.",
  stats: [
    { value: "2+", label: "Tahun belajar" },
    { value: "5+", label: "Project dibuat" },
    { value: "10+", label: "Teknologi dikuasai" },
  ],
};

export const aboutMeDetail: AboutMeDetail = {
  about:
    "Halo, saya seorang frontend developer yang gemar membangun website yang rapi, cepat, dan nyaman digunakan. Saya terus belajar dari project nyata, mulai dari desain antarmuka hingga deployment dengan Docker.",
  education: [
    {
      period: "2020 - 2024",
      school: "Nama Universitas / Sekolah",
      major: "Teknik Informatika",
    },
  ],
  experience: [
    {
      period: "2024 - Sekarang",
      place: "Nama Tempat / Project",
      description: "Mengembangkan antarmuka web dengan Next.js dan TypeScript.",
    },
  ],
  languages: [
    { name: "Indonesia", level: 100 },
    { name: "English", level: 60 },
  ],
};

export const certificates: Certificate[] = [
  {
    id: "itcb-ketua-panitia",
    title: "Ketua Panitia ITCB",
    issuer: "Nama Penyelenggara",
    year: "2025",
    description: "Sertifikat atas peran sebagai ketua panitia kegiatan ITCB.",
    thumbnail: "/images/sertifikat/itcb.jpg",
    pdf: "/pdf/sertifikat-ketua-panitia-itcb.pdf",
  },
  // Duplikat sementara agar pagination bisa dicoba. Ganti dengan sertifikat asli,
  // dan hapus setelah selesai mencoba.
  ...Array.from({ length: 5 }, (_, i) => ({
    id: `contoh-${i + 2}`,
    title: `Sertifikat Contoh ${i + 2}`,
    issuer: "Nama Penyelenggara",
    year: "2025",
    description: "Deskripsi singkat sertifikat ini.",
    thumbnail: "/images/sertifikat/itcb.jpg",
    pdf: "/pdf/sertifikat-ketua-panitia-itcb.pdf",
  })),
];