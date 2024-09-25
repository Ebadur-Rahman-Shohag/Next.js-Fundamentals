import "./globals.css";
import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

/*
Metadata refers to "data about data." It provides context or additional information about a file, document, web page, or other types of data. Metadata helps describe the characteristics, structure, and purpose of the underlying data, making it easier to find, use, or manage.
*/
export const metadata: Metadata = {
  title: "Next.js Project",
  description: "A Next.js project with TypeScript and TailwindCSS.",
  keywords: "Next.js, Typescript, TailwindCSS",
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
        <main className="max-w-6xl mx-auto py-6">{children}</main>
      </body>
    </html>
  );
}

//You can use multiple fonts the same way, and the className property applies the font throughout your app.
