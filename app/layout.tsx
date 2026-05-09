import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Appreach — Estratégia completa para apps",
  description:
    "Soluções 360º para aplicativos: aquisição de usuários, retargeting, CTV, app chat, preload e muito mais. Do primeiro install à receita.",
  openGraph: {
    title: "Appreach — Estratégia completa para apps",
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
    <html lang="pt-BR" className={`${GeistSans.variable} h-full`}>
      <head>
        {/* figma-capture-script */}
        <script src="https://mcp.figma.com/mcp/html-to-design/capture.js" async></script>
      </head>
      <body className="min-h-full flex flex-col bg-background text-body antialiased">
        {children}
      </body>
    </html>
  );
}
