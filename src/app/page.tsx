'use client';

import React from 'react';
import { MapPin, Phone, ShieldCheck, Mail, Building } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50 text-slate-900 antialiased">
      {/* Clean Corporate Modern Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 md:px-8 py-4 flex flex-wrap justify-between items-center gap-4">
          {/* Company Name / Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-7 bg-blue-700 rounded-full"></div>
            <div>
              <span className="font-extrabold text-xl tracking-tight text-slate-900 block leading-tight">
                LYROUDIS
              </span>
              <span className="text-[11px] font-semibold tracking-wider text-slate-500 uppercase">
                CONSULTING SERVICES I.K.E.
              </span>
            </div>
          </div>

          {/* Header Action Button */}
          <a 
            href="tel:6973400545" 
            className="bg-blue-700 hover:bg-blue-800 text-white text-xs font-semibold px-4 py-2.5 rounded-md transition-colors flex items-center gap-2 shadow-sm"
          >
            <Phone size={14} /> 6973400545
          </a>
        </div>
      </header>

      {/* Page Title Section */}
      <section className="bg-slate-100 border-b border-slate-200/80 py-10 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-1.5 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2">
            <ShieldCheck size={16} /> Νομική Δημοσιότητα Ν. 4072/2012
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
            Εταιρική Διαφάνεια & Στοιχεία Γ.Ε.ΜΗ.
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 md:px-8 py-10 flex-grow w-full">
        {/* Clean Corporate Table Card */}
        <div className="bg-white rounded-xl shadow-md border border-slate-200/80 overflow-hidden p-6 md:p-8">
          
          <div className="divide-y divide-slate-100 text-sm md:text-base">
            
            {/* Εταιρική Επωνυμία */}
            <div className="grid grid-cols-1 md:grid-cols-12 py-3.5 gap-2 md:gap-4 items-center">
              <div className="md:col-span-4 text-slate-500 font-medium">
                Εταιρική Επωνυμία
              </div>
              <div className="md:col-span-8 font-bold text-slate-900">
                LYROUDIS CONSULTING SERVICES ΜΟΝΟΠΡΟΣΩΠΗ Ι.Κ.Ε.
              </div>
            </div>

            {/* Επωνυμία με λατινικούς χαρακτήρες */}
            <div className="grid grid-cols-1 md:grid-cols-12 py-3.5 gap-2 md:gap-4 items-center">
              <div className="md:col-span-4 text-slate-500 font-medium">
                Επωνυμία (Λατινικά)
              </div>
              <div className="md:col-span-8 font-medium text-slate-800">
                LYROUDIS CONSULTING SERVICES SINGLE MEMBER P.C.
              </div>
            </div>

            {/* Διακριτικοί Τίτλοι */}
            <div className="grid grid-cols-1 md:grid-cols-12 py-3.5 gap-2 md:gap-4 items-center">
              <div className="md:col-span-4 text-slate-500 font-medium">
                Διακριτικός Τίτλος
              </div>
              <div className="md:col-span-8 font-medium text-slate-800">
                LYROUDIS CONSULTING SERVICES
              </div>
            </div>

            {/* Αριθμός ΓΕΜΗ */}
            <div className="grid grid-cols-1 md:grid-cols-12 py-3.5 gap-2 md:gap-4 items-center">
              <div className="md:col-span-4 text-slate-500 font-medium">
                Αριθμός Γ.Ε.ΜΗ.
              </div>
              <div className="md:col-span-8 font-bold text-blue-700">
                195135303000 <span className="font-normal text-slate-500 text-sm">(EUID: ELGEMI.195135303000)</span>
              </div>
            </div>

            {/* Αρμόδια Υπηρεσία ΓΕΜΗ */}
            <div className="grid grid-cols-1 md:grid-cols-12 py-3.5 gap-2 md:gap-4 items-center">
              <div className="md:col-span-4 text-slate-500 font-medium">
                Αρμόδια Υπηρεσία ΓΕΜΗ
              </div>
              <div className="md:col-span-8 font-medium text-slate-800">
                ΕΠΑΓΓΕΛΜΑΤΙΚΟ ΕΠΙΜΕΛΗΤΗΡΙΟ ΑΘΗΝΑΣ
              </div>
            </div>

            {/* ΑΦΜ */}
            <div className="grid grid-cols-1 md:grid-cols-12 py-3.5 gap-2 md:gap-4 items-center">
              <div className="md:col-span-4 text-slate-500 font-medium">
                ΑΦΜ / ΔΟΥ
              </div>
              <div className="md:col-span-8 font-bold text-slate-900">
                803351366 <span className="font-normal text-slate-500 text-sm">(Αρμόδια ΔΟΥ: ΚΕΦΟΔΕ ΑΤΤΙΚΗΣ)</span>
              </div>
            </div>

            {/* Νομική Μορφή / Κατάσταση */}
            <div className="grid grid-cols-1 md:grid-cols-12 py-3.5 gap-2 md:gap-4 items-center">
              <div className="md:col-span-4 text-slate-500 font-medium">
                Νομική Μορφή / Κατάσταση
              </div>
              <div className="md:col-span-8 flex items-center gap-2 font-bold text-slate-900">
                <span>Ι.Κ.Ε. /</span>
                <span className="bg-emerald-100 text-emerald-800 border border-emerald-300 text-xs font-semibold px-2.5 py-0.5 rounded-full inline-flex items-center gap-1">
                  Ενεργή
                </span>
                <span className="font-normal text-slate-500 text-sm">από 16/07/2026</span>
              </div>
            </div>

            {/* Εταιρικό Κεφάλαιο */}
            <div className="grid grid-cols-1 md:grid-cols-12 py-3.5 gap-2 md:gap-4 items-center">
              <div className="md:col-span-4 text-slate-500 font-medium">
                Εταιρικό Κεφάλαιο
              </div>
              <div className="md:col-span-8 font-medium text-slate-800">
                1.000,00 € <span className="text-slate-500 text-sm">(10 Εταιρικά Μερίδια x 100,00 €)</span>
              </div>
            </div>

            {/* Έδρα / Διεύθυνση */}
            <div className="grid grid-cols-1 md:grid-cols-12 py-3.5 gap-2 md:gap-4 items-center">
              <div className="md:col-span-4 text-slate-500 font-medium">
                Διεύθυνση Έδρας
              </div>
              <div className="md:col-span-8 font-medium text-slate-800">
                <a 
                  href="https://www.google.com/maps/search/%CE%9A%CE%A5%CE%A0%CE%A1%CE%99%CE%A9%CE%9D%20%CE%91%CE%93%CE%A9%CE%9D%CE%99%CE%A3%CE%A4%CE%A9%CE%9D%2068,%20%CE%91%CE%A1%CE%93%CE%A5%CE%A1%CE%9F%CE%A5%CE%A0%CE%9F%CE%9B%CE%A7,%2016451" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline inline-flex items-center gap-1"
                >
                  <MapPin size={15} className="text-slate-400 shrink-0" />
                  Κυπρίων Αγωνιστών 68, 16451 Αργυρούπολη
                </a>
              </div>
            </div>

            {/* Διαχειριστής & Εταίρος */}
            <div className="grid grid-cols-1 md:grid-cols-12 py-3.5 gap-2 md:gap-4 items-center">
              <div className="md:col-span-4 text-slate-500 font-medium">
                Διαχειριστής & Εταίρος
              </div>
              <div className="md:col-span-8 font-medium text-slate-800">
                Βασίλειος Λυρούδης του Χρήστου <span className="text-slate-500 text-sm">(Ποσοστό 100%)</span>
              </div>
            </div>

            {/* Δραστηριότητες (ΚΑΔ) */}
            <div className="grid grid-cols-1 md:grid-cols-12 py-3.5 gap-2 md:gap-4 items-start">
              <div className="md:col-span-4 text-slate-500 font-medium pt-1">
                Δραστηριότητες (ΚΑΔ)
              </div>
              <div className="md:col-span-8 space-y-2">
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-200/70">
                  <div className="font-bold text-xs text-blue-700 uppercase tracking-wider mb-0.5">Κύρια Δραστηριότητα (62202000)</div>
                  <div className="text-slate-900 font-medium">ΥΠΗΡΕΣΙΕΣ ΠΑΡΟΧΗΣ ΣΥΜΒΟΥΛΩΝ ΓΙΑ ΘΕΜΑΤΑ ΣΥΣΤΗΜΑΤΩΝ ΚΑΙ ΛΟΓΙΣΜΙΚΟΥ</div>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-200/70">
                  <div className="font-bold text-xs text-slate-500 uppercase tracking-wider mb-0.5">Δευτερεύουσα Δραστηριότητα (62101107)</div>
                  <div className="text-slate-800">ΥΠΗΡΕΣΙΕΣ ΣΧΕΔΙΑΣΜΟΥ, ΥΠΟΣΤΗΡΙΞΗΣ ΚΑΙ ΟΛΟΚΛΗΡΩΣΗΣ ΣΥΣΤΗΜΑΤΟΣ ΛΟΓΙΣΜΙΚΟΥ</div>
                </div>
              </div>
            </div>

            {/* Επικοινωνία */}
            <div className="grid grid-cols-1 md:grid-cols-12 py-3.5 gap-2 md:gap-4 items-center">
              <div className="md:col-span-4 text-slate-500 font-medium">
                Στοιχεία Επικοινωνίας
              </div>
              <div className="md:col-span-8 text-slate-800 font-medium">
                <span className="text-slate-500">Τηλέφωνο: </span>
                <a href="tel:6973400545" className="font-bold text-slate-900 hover:text-blue-700">6973400545</a>
              </div>
            </div>

          </div>

        </div>
      </main>

      {/* Clean Slate Corporate Footer */}
      <footer className="bg-slate-900 text-slate-300 pt-10 pb-6 px-4 md:px-8 mt-auto border-t border-slate-800">
        <div className="max-w-5xl mx-auto">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-8 border-b border-slate-800 gap-6">
            <div>
              <div className="text-lg font-bold text-white mb-1">
                LYROUDIS CONSULTING SERVICES ΜΟΝΟΠΡΟΣΩΠΗ Ι.Κ.Ε.
              </div>
              <div className="text-xs text-slate-400">
                LYROUDIS CONSULTING SERVICES SINGLE MEMBER P.C.
              </div>
            </div>

            <div className="text-xs text-slate-400 space-y-1">
              <div><strong className="text-slate-300">Γ.Ε.ΜΗ.:</strong> 195135303000</div>
              <div><strong className="text-slate-300">ΑΦΜ:</strong> 803351366 (ΔΟΥ ΚΕΦΟΔΕ ΑΤΤΙΚΗΣ)</div>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
            <div>
              © 2026 LYROUDIS CONSULTING SERVICES Μ.Ι.Κ.Ε. - Κυπρίων Αγωνιστών 68, 16451 Αργυρούπολη
            </div>
            <div className="text-slate-400 font-medium">
              Δημιουργήθηκε από <span className="text-slate-300">sgk.gr</span>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}
