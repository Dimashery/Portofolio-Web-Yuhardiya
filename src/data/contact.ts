import type { Contact, FaqItem } from "@/types";


export const contact: Contact = {
    phoneNumber: "081333456072",
    address: ["Informatics Asistant Laboratorium Room, Malang, Indonesia"],
    officeHours: {
        days: "Monday - Friday",
        time: "09.00 - 17.00"
    }
}

export const faqs: FaqItem[] = [
  {
    question: "Bagaimana proses kerja Anda untuk project baru?",
    answer:
      "Saya mulai dengan diskusi untuk memahami tujuan dan kebutuhan Anda. Setelah itu masuk ke perencanaan, desain, dan pengembangan, dengan update berkala di setiap tahap.",
  },
  {
    question: "Berapa lama pengerjaan sebuah project?",
    answer:
      "Tergantung skala. Landing page sederhana bisa selesai dalam beberapa hari, sedangkan aplikasi web penuh bisa memakan beberapa minggu.",
  },
  {
    question: "Apakah tersedia paket atau penawaran khusus?",
    answer:
      "Keduanya bisa. Ceritakan kebutuhan Anda lewat form kontak, lalu saya susun penawaran yang sesuai.",
  },
  {
    question: "Teknologi apa yang Anda gunakan?",
    answer:
      "Utamanya Next.js, TypeScript, dan Tailwind CSS, serta Docker untuk deployment.",
  },
];