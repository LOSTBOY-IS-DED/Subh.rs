import type { Metadata } from "next";
import "./globals.css";
import {Archivo} from "next/font/google"

const archivo = Archivo({
  display : "swap",
  weight :"variable",
  subsets : ["latin"],
  variable : "--font-archive"
})

export const metadata: Metadata = {
  title: "Portfolio Website",
  description: "A perfect portfolio website that showcases your skills , minimal and smooth micro-interactions, perfect for freelancers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${archivo.variable} bg-stone-200 text-stone-900`}>{children}</body>
    </html>
  );
}
