import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { profile } from "@/data/profile";
import { Geist, Geist_Mono, Anton, Dancing_Script, Noto_Sans, Playfair_Display } from "next/font/google";
import { cn } from "@/lib/utils";

const playfairDisplayHeading = Playfair_Display({subsets:['latin'],variable:'--font-heading'});

const notoSans = Noto_Sans({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const anton = Anton({
  variable: "--font-anton",
  subsets: ['latin'],
  weight: "400"
});

const dancing = Dancing_Script({
  variable: "--font-dancing",
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: `${profile.name} | ${profile.role}`,
    template: `%s | ${profile.name}`,
  },
  description: `Portofolio ${profile.name}, ${profile.role}.`,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={cn("font-sans", notoSans.variable, playfairDisplayHeading.variable)}>
      <body
        id="top"
        className={`${geistSans.variable} ${geistMono.variable} ${anton.variable} ${dancing.variable} flex min-h-svh flex-col antialiased`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}