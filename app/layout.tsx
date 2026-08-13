import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const siteUrl = "https://www.jvrlavagedevitres.com";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Service d’entretien J.V.R.",
  url: siteUrl,
  telephone: "+1-514-237-4066",
  email: "rbernard@hotmail.ca",
  description:
    "Service professionnel de lavage de vitres commercial et industriel, incluant le nettoyage à l’eau pure.",
  areaServed: [
    { "@type": "City", name: "Laval" },
    { "@type": "City", name: "Montréal" },
    { "@type": "AdministrativeArea", name: "Rive-Nord de Montréal" },
    { "@type": "AdministrativeArea", name: "Laurentides" },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-514-237-4066",
    contactType: "service à la clientèle",
    availableLanguage: ["fr"],
    areaServed: "CA-QC",
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Lavage de vitre commercial et industriel | J.V.R.",
    template: "%s | Service d’entretien J.V.R.",
  },
  description:
    "Lavage de vitres commercial et industriel à Laval, Montréal, sur la Rive-Nord et dans les Laurentides. Eau pure et estimation gratuite.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_CA",
    url: "/",
    siteName: "Service d’entretien J.V.R.",
    title: "Lavage de vitre commercial et industriel | J.V.R.",
    description:
      "Service professionnel de lavage de vitres à Laval, Montréal, sur la Rive-Nord et dans les Laurentides. Estimation gratuite.",
    images: [
      {
        url: "/jvr-hero-commercial-window-cleaning.png",
        alt: "Lavage professionnel de vitres commerciales par Service d’entretien J.V.R.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lavage de vitre commercial et industriel | J.V.R.",
    description:
      "Service professionnel à Laval, Montréal, sur la Rive-Nord et dans les Laurentides.",
    images: ["/jvr-hero-commercial-window-cleaning.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png", sizes: "512x512" }],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className={`${manrope.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
