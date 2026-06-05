import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Saadya IT Services - Professional IT Solutions & Security",
  description:
    "Saadya IT Services provides robust, cutting-edge IT outsourcing, database migration, product development, and enterprise solutions for businesses globally. Secure your IT needs with our expert team.",
  keywords: [
    "Saadya IT Services",
    "IT security",
    "Software Outsourcing",
    "Product Development",
    "Enterprise Solutions",
    "Database Migration",
    "Maintenance Services",
  ],
  authors: [{ name: "Saadya IT Services Team" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} scroll-smooth antialiased`}
    >
      <body className="font-sans min-h-screen bg-white text-dark-navy flex flex-col">
        {children}
      </body>
    </html>
  );
}
