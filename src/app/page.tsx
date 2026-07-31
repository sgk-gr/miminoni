'use client';

import React from 'react';
import { MapPin, Phone, ShieldCheck, Building2, CheckCircle2 } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#f4f7fa] text-slate-800 antialiased">
      {/* Light & Clean Header Banner matching HighTravel structure */}
      <header className="bg-[#2b85cf] text-white pt-10 pb-16 px-4 md:px-8 rounded-b-[32px] shadow-sm">
        <div className="max-w-5xl mx-auto">
          
          {/* Top Bar / Navigation */}
          <div className="flex justify-between items-center pb-6 border-b border-white/20">
            <div className="flex items-center gap-3">
              <div className="bg-white text-[#2b85cf] w-9 h-9 rounded-lg font-extrabold text-lg flex items-center justify-center shadow-sm">
                L
              </div>
              <span className="font-bold text-lg md:text-xl tracking-tight text-white">
                LYROUDIS CONSULTING SERVICES
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="bg-white/15 text-xs px-3 py-1.5 rounded-full border border-white/30 font-medium">
                ΕΛ
              </span>
              <a 
                href="tel:6973400545" 
                className="bg-[#ff6b4a] hover:bg-[#f05a38] text-white text-xs font-semibold px-4 py-2 rounded-full transition-all shadow-sm flex items-center gap-1.5"
              >
                Επικοινωνία <Phone size={13} />
              </a>
            </div>
          </div>

          {/* Banner Title */}
          <div className="mt-8">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-2">
              Εταιρική Διαφάνεια & Στοιχεία ΓΕΜΗ
            </h1>
            <p className="text-white/80 text-sm md:text-base">
              Σύμφωνα με τον Ν. 4072/2012
            </p>
          </div>

        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-4xl mx-auto px-4 -mt-8 mb-16 flex-grow w-full">
        {/* White Clean Card Container */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden p-6 md:p-10">
          
          <div className="divide-y divide-slate-100 text-sm md:text-base">
            
            {/* Εταιρική Επωνυμία */}
            <div className="grid grid-cols-1 md:grid-cols-12 py-4 gap-2 md:gap-4 items-center">
              <div className="md:col-span-4 text-slate-500 font-medium">
                Εταιρική Επωνυμία
              </div>
              <div className="md:col-span-8 font-bold text-slate-900">
                LYROUDIS CONSULTING SERVICES ΜΟΝΟΠΡΟΣΩΠΗ Ι.Κ.Ε.
              </div>
            </div>

            {/* Επωνυμία με λατινικούς χαρακτήρες */}
            <div className="grid grid-cols-1 md:grid-cols-12 py-4 gap-2 md:gap-4 items-center">
              <div className="md:col-span-4 text-slate-500 font-medium">
                Επωνυμία με λατινικούς χαρακτήρες
              </div>
              <div className="md:col-span-8 font-medium text-slate-800">
                LYROUDIS CONSULTING SERVICES SINGLE MEMBER P.C.
              </div>
            </div>

            {/* Διακριτικοί Τίτλοι */}
            <div className="grid grid-cols-1 md:grid-cols-12 py-4 gap-2 md:gap-4 items-center">
              <div className="md:col-span-4 text-slate-500 font-medium">
                Διακριτικοί Τίτλοι
              </div>
              <div className="md:col-span-8 font-medium text-slate-800">
                LYROUDIS CONSULTING SERVICES / LYROUDIS CONSULTING SERVICES <span className="text-xs text-slate-400">(απόδοση με Λατινικούς χαρακτήρες)</span>
              </div>
            </div>

            {/* Αριθμός ΓΕΜΗ */}
            <div className="grid grid-cols-1 md:grid-cols-12 py-4 gap-2 md:gap-4 items-center">
              <div className="md:col-span-4 text-slate-500 font-medium">
                Αριθμός ΓΕΜΗ
              </div>
              <div className="md:col-span-8 font-bold text-slate-900">
                195135303000 <span className="font-normal text-slate-500 text-sm">(EUID: ELGEMI.195135303000)</span>
              </div>
            </div>

            {/* Αρμόδια Υπηρεσία ΓΕΜΗ */}
            <div className="grid grid-cols-1 md:grid-cols-12 py-4 gap-2 md:gap-4 items-center">
              <div className="md:col-span-4 text-slate-500 font-medium">
                Αρμόδια Υπηρεσία ΓΕΜΗ
              </div>
              <div className="md:col-span-8 font-medium text-slate-800">
                ΕΠΑΓΓΕΛΜΑΤΙΚΟ ΕΠΙΜΕΛΗΤΗΡΙΟ ΑΘΗΝΑΣ
              </div>
            </div>

            {/* ΑΦΜ */}
            <div className="grid grid-cols-1 md:grid-cols-12 py-4 gap-2 md:gap-4 items-center">
              <div className="md:col-span-4 text-slate-500 font-medium">
                ΑΦΜ / ΔΟΥ
              </div>
              <div className="md:col-span-8 font-bold text-slate-900">
                803351366 <span className="font-normal text-slate-500 text-sm">(ΔΟΥ: ΚΕΦΟΔΕ ΑΤΤΙΚΗΣ)</span>
              </div>
            </div>

            {/* Νομική Μορφή / Κατάσταση */}
            <div className="grid grid-cols-1 md:grid-cols-12 py-4 gap-2 md:gap-4 items-center">
              <div className="md:col-span-4 text-slate-500 font-medium">
                Νομική Μορφή / Κατάσταση
              </div>
              <div className="md:col-span-8 flex items-center gap-2 font-bold text-slate-900">
                <span>ΙΚΕ /</span>
                <span className="bg-emerald-600 text-white text-xs font-semibold px-2.5 py-0.5 rounded-full inline-flex items-center gap-1">
                  Ενεργή
                </span>
                <span className="font-normal text-slate-500 text-sm">από 16/07/2026</span>
              </div>
            </div>

            {/* Εταιρικό Κεφάλαιο */}
            <div className="grid grid-cols-1 md:grid-cols-12 py-4 gap-2 md:gap-4 items-center">
              <div className="md:col-span-4 text-slate-500 font-medium">
                Εταιρικό Κεφάλαιο
              </div>
              <div className="md:col-span-8 font-medium text-slate-800">
                1.000,00 € <span className="text-slate-500 text-sm">(Κεφαλαιακές Εισφορές)</span>
              </div>
            </div>

            {/* Έδρα / Διεύθυνση */}
            <div className="grid grid-cols-1 md:grid-cols-12 py-4 gap-2 md:gap-4 items-center">
              <div className="md:col-span-4 text-slate-500 font-medium">
                Έδρα / Διεύθυνση
              </div>
              <div className="md:col-span-8 font-medium text-slate-800">
                <a 
                  href="https://www.google.com/maps/search/%CE%9A%CE%A5%CE%A0%CE%A1%CE%99%CE%A9%CE%9D%20%CE%91%CE%93%CE%A9%CE%9D%CE%99%CE%A3%CE%A4%CE%A9%CE%9D%2068,%20%CE%91%CE%A1%CE%93%CE%A5%CE%A1%CE%9F%CE%A5%CE%A0%CE%9F%CE%9B%CE%A7,%2016451" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline inline-flex items-center gap-1"
                >
                  Κυπρίων Αγωνιστών 68, 16451 Αργυρούπολη
                </a>
              </div>
            </div>

            {/* Διαχειριστής & Εταίρος */}
            <div className="grid grid-cols-1 md:grid-cols-12 py-4 gap-2 md:gap-4 items-center">
              <div className="md:col-span-4 text-slate-500 font-medium">
                Διαχειριστής & Εταίρος
              </div>
              <div className="md:col-span-8 font-medium text-slate-800">
                Βασίλειος Λυρούδης του Χρήστου <span className="text-slate-500 text-sm">(Ποσοστό 100%)</span>
              </div>
            </div>

            {/* Δραστηριότητες (ΚΑΔ) */}
            <div className="grid grid-cols-1 md:grid-cols-12 py-4 gap-2 md:gap-4 items-start">
              <div className="md:col-span-4 text-slate-500 font-medium pt-1">
                Δραστηριότητες (ΚΑΔ)
              </div>
              <div className="md:col-span-8 space-y-2">
                <div className="text-slate-800 text-sm">
                  <span className="font-bold text-slate-900">62202000 (Κύρια):</span> ΥΠΗΡΕΣΙΕΣ ΠΑΡΟΧΗΣ ΣΥΜΒΟΥΛΩΝ ΓΙΑ ΘΕΜΑΤΑ ΣΥΣΤΗΜΑΤΩΝ ΚΑΙ ΛΟΓΙΣΜΙΚΟΥ
                </div>
                <div className="text-slate-800 text-sm">
                  <span className="font-bold text-slate-900">62101107 (Δευτερεύουσα):</span> ΥΠΗΡΕΣΙΕΣ ΣΧΕΔΙΑΣΜΟΥ, ΥΠΟΣΤΗΡΙΞΗΣ ΚΑΙ ΟΛΟΚΛΗΡΩΣΗΣ ΣΥΣΤΗΜΑΤΟΣ ΛΟΓΙΣΜΙΚΟΥ
                </div>
              </div>
            </div>

            {/* Επικοινωνία */}
            <div className="grid grid-cols-1 md:grid-cols-12 py-4 gap-2 md:gap-4 items-center">
              <div className="md:col-span-4 text-slate-500 font-medium">
                Επικοινωνία
              </div>
              <div className="md:col-span-8 text-slate-800 font-medium">
                <span>Κινητό: </span>
                <a href="tel:6973400545" className="font-bold text-slate-900 hover:text-blue-600">6973400545</a>
              </div>
            </div>

          </div>

        </div>
      </main>

      {/* Clean Coral/Orange Footer matching HighTravel exact layout */}
      <footer className="bg-[#ff6b4a] text-white pt-14 pb-8 px-4 md:px-8 rounded-t-[32px] mt-auto">
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="text-xs uppercase tracking-wider text-white/80 font-semibold mb-3">
            Στοιχεία Δημοσιότητας Ι.Κ.Ε. / ΓΕΜΗ
          </div>

          {/* Large Logo Title */}
          <div className="flex items-center justify-center gap-2 text-2xl md:text-3xl font-extrabold tracking-tight mb-8">
            <div className="w-8 h-8 bg-white text-[#ff6b4a] rounded-lg flex items-center justify-center text-lg font-black">
              L
            </div>
            LYROUDIS CONSULTING SERVICES
          </div>

          {/* Sub-footer details & credits */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/80 pt-6 border-t border-white/20">
            <div className="text-center md:text-left">
              © LYROUDIS CONSULTING SERVICES ΜΟΝΟΠΡΟΣΩΠΗ Ι.Κ.Ε. | ΓΕΜΗ: 195135303000
            </div>
            <div className="flex items-center gap-3 font-medium">
              <span>Δημιουργήθηκε από sgk.gr</span>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}
