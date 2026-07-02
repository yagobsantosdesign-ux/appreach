import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Appreach: Estratégia completa para apps",
  description:
    "Soluções 360º para aplicativos: aquisição de usuários, retargeting, CTV, app chat, preload e muito mais. Do primeiro install à receita.",
  icons: {
    icon: [
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-symbol.png", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Appreach: Estratégia completa para apps",
    description:
      "Soluções 360º para aplicativos: aquisição de usuários, retargeting, CTV, app chat, preload e muito mais.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${GeistMono.variable} ${inter.variable} h-full`}>
      <head>
        {/* figma-capture-script */}
        <script src="https://mcp.figma.com/mcp/html-to-design/capture.js" async></script>
      </head>
      <body className="min-h-full flex flex-col bg-background text-body antialiased">
        <SmoothScroll />
        <div style={{ overflowX: "clip", width: "100%" }}>
          {children}
        </div>
      </body>
    </html>
  );
}
