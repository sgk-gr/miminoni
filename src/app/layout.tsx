import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "greek"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://miminoni.com"),
  title: "MIMI AND NONI ΜΟΝΟΠΡΟΣΩΠΗ Ι.Κ.Ε. | Εταιρική Διαφάνεια & Στοιχεία ΓΕΜΗ",
  description: "Επίσημα στοιχεία δημοσιότητας και εταιρικής διαφάνειας Γ.Ε.ΜΗ. (Αρ. ΓΕΜΗ: 195248103000, ΑΦΜ: 803357082) της εταιρείας MIMI AND NONI ΜΟΝΟΠΡΟΣΩΠΗ Ι.Κ.Ε. σύμφωνα με το ν. 4072/2012.",
  keywords: ["MIMI AND NONI", "ΜΙΜΙ AND NONI", "ΓΕΜΗ 195248103000", "ΑΦΜ 803357082", "Εταιρική Διαφάνεια", "Ι.Κ.Ε. Βούλα", "MIMI AND NONI IKE"],
  authors: [{ name: "MIMI AND NONI ΜΟΝΟΠΡΟΣΩΠΗ Ι.Κ.Ε." }],
  creator: "MIMI AND NONI ΜΟΝΟΠΡΟΣΩΠΗ Ι.Κ.Ε.",
  publisher: "MIMI AND NONI ΜΟΝΟΠΡΟΣΩΠΗ Ι.Κ.Ε.",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  icons: {
    icon: [
      { url: "/logo-2.png", type: "image/png" }
    ],
    shortcut: "/logo-2.png",
    apple: "/logo-2.png",
  },
  openGraph: {
    title: "MIMI AND NONI ΜΟΝΟΠΡΟΣΩΠΗ Ι.Κ.Ε. | Εταιρική Διαφάνεια & Στοιχεία ΓΕΜΗ",
    description: "Επίσημα στοιχεία δημοσιότητας και εταιρικής διαφάνειας Γ.Ε.ΜΗ. (Αρ. ΓΕΜΗ: 195248103000, ΑΦΜ: 803357082) της MIMI AND NONI ΜΟΝΟΠΡΟΣΩΠΗ Ι.Κ.Ε.",
    url: "https://miminoni.com",
    siteName: "MIMI AND NONI ΜΟΝΟΠΡΟΣΩΠΗ Ι.Κ.Ε.",
    locale: "el_GR",
    type: "website",
    images: [
      {
        url: "/logo-2.png",
        width: 1200,
        height: 630,
        alt: "MIMI AND NONI ΜΟΝΟΠΡΟΣΩΠΗ Ι.Κ.Ε. Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MIMI AND NONI ΜΟΝΟΠΡΟΣΩΠΗ Ι.Κ.Ε. | Εταιρική Διαφάνεια & Στοιχεία ΓΕΜΗ",
    description: "Επίσημα στοιχεία δημοσιότητας και εταιρικής διαφάνειας Γ.Ε.ΜΗ. της MIMI AND NONI ΜΟΝΟΠΡΟΣΩΠΗ Ι.Κ.Ε.",
    images: ["/logo-2.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "name": "MIMI AND NONI ΜΟΝΟΠΡΟΣΩΠΗ Ι.Κ.Ε.",
    "alternateName": ["MIMI AND NONI SINGLE MEMBER P.C.", "MIMI AND NONI"],
    "url": "https://miminoni.com",
    "logo": "https://miminoni.com/logo-2.png",
    "image": "https://miminoni.com/logo-2.png",
    "taxID": "803357082",
    "identifier": "195248103000",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Αθανασίου Διάκου 1",
      "addressLocality": "Βούλα",
      "postalCode": "16772",
      "addressCountry": "GR"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+30-6980877448",
        "contactType": "customer service",
        "email": "info@miminoni.com"
      },
      {
        "@type": "ContactPoint",
        "telephone": "+30-6980877448",
        "contactType": "executive",
        "email": "Kostas.Mallios@gmail.com"
      }
    ]
  };

  return (
    <html lang="el">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning className={`${inter.className} antialiased bg-gray-50 text-slate-900`}>
        {children}
      </body>
    </html>
  );
}