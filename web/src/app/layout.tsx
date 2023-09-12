import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frigobar Express",
  description: "Sistema para gerenciar a geladeira",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <main className="flex flex-col min-h-screen min-w-screen items-center">
          {children}
        </main>
      </body>
    </html>
  );
}
