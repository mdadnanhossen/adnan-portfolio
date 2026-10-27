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
  title: "Md Adnan Hossen — Full-Stack Developer & CSE Student",
  description:
    "Portfolio of Md Adnan Hossen — CSE student at Northern University of Business & Technology, Khulna. Building full-stack web applications with React, Next.js, Node.js, and MongoDB.",
  keywords: [
    "Md Adnan Hossen",
    "full-stack developer",
    "React developer",
    "Next.js",
    "web developer Bangladesh",
    "CSE student portfolio",
  ],
  authors: [{ name: "Md Adnan Hossen", url: "https://github.com/mdadnanhossen" }],
  openGraph: {
    type: "website",
    title: "Md Adnan Hossen — Full-Stack Developer",
    description:
      "CSE student & aspiring software engineer building practical full-stack web applications.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Md Adnan Hossen — Full-Stack Developer",
    description:
      "CSE student & aspiring software engineer building practical full-stack web applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
