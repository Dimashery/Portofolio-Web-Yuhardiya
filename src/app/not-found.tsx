import Link from "next/link";

export default function NotFound() {
  return (
    <section>
      <h1>404 - Halaman tidak ditemukan</h1>
      <Link href="/">Kembali ke beranda</Link>
    </section>
  );
}