import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr. Harper Montgomery | Cardiologist",
  description:
    "Award-winning cardiologist providing expert, compassionate heart care. Book your appointment today for personalized treatment and trusted medical expertise.",
  keywords: "cardiologist, heart doctor, cardiac care, book appointment, Dr. Montgomery",
  openGraph: {
    title: "Dr. Harper Montgomery | Cardiologist",
    description: "Award-winning cardiologist - personalized care, trusted expertise.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white dark:bg-[#080808] transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
