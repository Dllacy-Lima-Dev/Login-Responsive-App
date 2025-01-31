import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";

// Configuração da fonte Quicksand
const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

export const metadata: Metadata = {
  title: "Login Next App",
  description: "Tela de login responsiva e moderna com Next JS - 2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${quicksand.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}