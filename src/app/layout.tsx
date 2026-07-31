import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "greek"] });

export const metadata: Metadata = {
  title: "LYROUDIS CONSULTING SERVICES ΜΟΝΟΠΡΟΣΩΠΗ Ι.Κ.Ε. | Εταιρική Διαφάνεια & Στοιχεία ΓΕΜΗ",
  description: "Στοιχεία δημοσιότητας και εταιρικής διαφάνειας ΓΕΜΗ της εταιρείας LYROUDIS CONSULTING SERVICES ΜΟΝΟΠΡΟΣΩΠΗ Ι.Κ.Ε. σύμφωνα με το ν. 4072/2012.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el">
      <body suppressHydrationWarning className={`${inter.className} antialiased bg-gray-50 text-slate-900`}>{children}</body>
    </html>
  );
}
