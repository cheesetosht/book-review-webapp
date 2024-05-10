"use client";
import { Work_Sans } from "next/font/google";
import "./globals.css";

const work_sans = Work_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={work_sans.className}>
        <main className="">
          <header className="py-6 border-b border-gray-200">
            <div className="container gap-4 flex items-center">
              <div className="font-semibold text-lg grow">
                📚 <span className="text-purple-400">Gush</span>Books
              </div>
            </div>
          </header>
          {children}
        </main>
      </body>
    </html>
  );
}
