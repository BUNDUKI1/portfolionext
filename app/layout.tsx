import type { Metadata } from "next";
import { Anek_Telugu, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const AnekTelugu = Anek_Telugu({subsets:["latin"]});

export const metadata: Metadata = {
  title: "Go Innove SEO - PortFolio",
  description: "Generated by Go-Innove | a Next-js Developper, Innove Bunduki",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(geistSans.variable, AnekTelugu, geistMono, "font-sans h-full bg-background text-foreground")}
      >
        {children}
      </body>
    </html>
  );
}
