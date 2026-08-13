import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Service d’entretien J.V.R. | Lavage de vitres commercial et industriel",
  description: "Service professionnel de lavage de vitres commercial et industriel à Laval, Montréal, sur la Rive-Nord et dans les Laurentides.",
  other: { "codex-preview": "development" },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png", sizes: "512x512" }],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className={`${manrope.variable} antialiased`}>{children}</body>
    </html>
  );
}
