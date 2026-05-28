import type { Metadata } from "next";
import { Barlow, Barlow_Condensed, Bebas_Neue } from "next/font/google";
import "@/styles/globals.css";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-bebas" });
const barlow = Barlow({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-barlow",
});
const barlowCondensed = Barlow_Condensed({
  weight: ["600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: "%s | HalıSaha",
  },
  description:
    "Arkadaşlarınla halısaha maçı organize etmenin en pratik yolu. Kadro kur, katılımı yönet, skoru takip et.",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: SITE_URL,
    siteName: "HalıSaha",
    title: SITE_NAME,
    description:
      "Arkadaşlarınla halısaha maçı organize etmenin en pratik yolu. Kadro kur, katılımı yönet, skoru takip et.",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description:
      "Arkadaşlarınla halısaha maçı organize etmenin en pratik yolu. Kadro kur, katılımı yönet, skoru takip et.",
  },
  alternates: { canonical: SITE_URL },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "HalıSaha – Maç Organize Et",
  applicationCategory: "SportsApplication",
  operatingSystem: "iOS, Android",
  offers: { "@type": "Offer", price: "0", priceCurrency: "TRY" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${bebas.variable} ${barlow.variable} ${barlowCondensed.variable}`}>
      <head>
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
