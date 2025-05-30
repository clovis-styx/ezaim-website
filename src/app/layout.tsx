// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar"; // Adjust path if needed

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EZAIM",
  description: "The EZAIM Device", // Update this
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="container mx-auto py-8 px-4">
          {children}
        </main>
        {/* Add a Footer component here later */}
      </body>
    </html>
  );
}