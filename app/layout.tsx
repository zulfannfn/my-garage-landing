import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers/ThemeProvider";
import { LanguageProvider } from "./providers/LanguageProvider";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Garage — Your Complete Automotive Digital Garage",
  description: "Kelola kendaraan, pantau perawatan, simpan riwayat servis, dan tingkatkan pengalaman otomotif Anda dalam satu platform modern.",
  keywords: ["otomotif", "manajemen kendaraan", "servis kendaraan", "my garage", "automotive platform"],
  openGraph: {
    title: "My Garage — Your Complete Automotive Digital Garage",
    description: "Platform otomotif digital untuk mengelola kendaraan, perawatan, dan riwayat servis.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
