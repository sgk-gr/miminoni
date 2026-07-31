'use client';

import React from 'react';
import Image from 'next/image';
import { MapPin, Phone, ShieldCheck, FileText, Calendar, Wallet, Users, AlertCircle, Building2 } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50 text-slate-900 antialiased">
      {/* Clean Corporate Modern Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 md:px-8 py-3 flex flex-wrap justify-between items-center gap-4">
          {/* Company Name & Logo */}
          <div className="flex items-center gap-3">
            {/* Direct SVG Image element for 100% vector crispness */}
            <img 
              src="/logo.svg" 
              alt="Lyroudis Consulting Logo" 
              width={54} 
              height={54} 
              className="w-[54px] h-[54px] object-contain shrink-0 bg-white block" 
            />
            <div>
              <span className="font-extrabold text-xl md:text-2xl tracking-tight text-slate-900 block leading-tight">
                LYROUDIS
              </span>
              <span className="text-[11px] font-semibold tracking-wider text-slate-500 uppercase block mt-0.5">
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
      <section className="bg-slate-100 border-b border-slate-200/80 py-8 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-1.5 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2">
            <ShieldCheck size={16} /> Νομική Δημοσιότητα Ι.Κ.Ε. (Άρθρο 47 Ν. 4072/2012 & Ν. 4919/2022)
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
            Εταιρική Διαφάνεια & Στοιχεία Γ.Ε.ΜΗ.
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 md:px-8 py-10 flex-grow w-full space-y-8">
        
        {/* Main Details Table Card */}
        <div className="bg-white rounded-xl shadow-md border border-slate-200/80 overflow-hidden p-6 md:p-8">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-3 mb-4 flex items-center gap-2">
            <Building2 size={18} className="text-blue-700" /> Βασικά Στοιχεία Επιχείρησης
          </h2>

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

            {/* Αριθμός ΓΕΜΗ & EUID */}
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

            {/* ΑΦΜ / ΔΟΥ */}
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
                <span>Μονοπρόσωπη Ι.Κ.Ε. /</span>
                <span className="bg-emerald-100 text-emerald-800 border border-emerald-300 text-xs font-semibold px-2.5 py-0.5 rounded-full inline-flex items-center gap-1">
                  Ενεργή
                </span>
                <span className="font-normal text-slate-500 text-sm">από 16/07/2026</span>
              </div>
            </div>

            {/* Ημερομηνία Σύστασης & Διάρκεια */}
            <div className="grid grid-cols-1 md:grid-cols-12 py-3.5 gap-2 md:gap-4 items-center">
              <div className="md:col-span-4 text-slate-500 font-medium">
                Ημερομηνία Σύστασης & Διάρκεια
              </div>
              <div className="md:col-span-8 font-medium text-slate-800">
                16/07/2026 — <span className="text-slate-600">Αορίστου Χρόνου</span>
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
                  Κυπρίων Αγωνιστών 68, Τ.Κ. 16451, Αργυρούπολη (Δήμος Ελληνικού - Αργυρούπολης)
                </a>
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

        {/* Section 2: Capital & Governance Details (Mandatory IKE elements) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Capital & Shares */}
          <div className="bg-white rounded-xl shadow-md border border-slate-200/80 p-6">
            <h3 className="text-base font-bold text-slate-900 border-b border-slate-200 pb-3 mb-4 flex items-center gap-2">
              <Wallet size={18} className="text-blue-700" /> Εταιρικό Κεφάλαιο & Μερίδια
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Συνολικό Κεφάλαιο:</span>
                <span className="font-bold text-slate-900">1.000,00 €</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Είδος Εισφορών:</span>
                <span className="font-medium text-slate-800">100% Κεφαλαιακές Εισφορές</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Αριθμός Μεριδίων:</span>
                <span className="font-medium text-slate-800">10 μερίδια (100,00 € / μερίδιο)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Κατάσταση Καταβολής:</span>
                <span className="font-bold text-emerald-700">Ολοσχερώς Καταβεβλημένο</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-500">1η Διαχειριστική Περίοδος:</span>
                <span className="font-medium text-slate-800">Λήξη 31/12/2026</span>
              </div>
            </div>
          </div>

          {/* Governance & Sole Partner */}
          <div className="bg-white rounded-xl shadow-md border border-slate-200/80 p-6">
            <h3 className="text-base font-bold text-slate-900 border-b border-slate-200 pb-3 mb-4 flex items-center gap-2">
              <Users size={18} className="text-blue-700" /> Διοίκηση & Μοναδικός Εταίρος
            </h3>
            <div className="space-y-3 text-sm">
              <div className="py-1 border-b border-slate-100">
                <div className="text-slate-500 text-xs uppercase font-semibold mb-1">Μοναδικός Εταίρος & Διαχειριστής</div>
                <div className="font-bold text-slate-900 text-base">Βασίλειος Λυρούδης του Χρήστου</div>
                <div className="text-slate-500 text-xs mt-0.5">ΑΦΜ: 050480299</div>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Ποσοστό Συμμετοχής:</span>
                <span className="font-bold text-slate-900">100% (10 / 10 Μερίδια)</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-500">Ιδιότητα Διαχείρισης:</span>
                <span className="font-medium text-slate-800">Νόμιμος Εκπρόσωπος & Διαχειριστής</span>
              </div>
            </div>
          </div>

        </div>

        {/* Section 3: Activities (KAD) */}
        <div className="bg-white rounded-xl shadow-md border border-slate-200/80 p-6">
          <h3 className="text-base font-bold text-slate-900 border-b border-slate-200 pb-3 mb-4 flex items-center gap-2">
            <FileText size={18} className="text-blue-700" /> Δραστηριότητες Επιχείρησης (ΚΑΔ)
          </h3>

          <div className="space-y-3">
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200/80">
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold text-xs text-blue-700 uppercase tracking-wider">Κύρια Δραστηριότητα (ΚΑΔ 62202000)</span>
                <span className="text-xs text-slate-400">Έναρξη: 16/07/2026</span>
              </div>
              <div className="text-slate-900 font-bold">
                ΥΠΗΡΕΣΙΕΣ ΠΑΡΟΧΗΣ ΣΥΜΒΟΥΛΩΝ ΓΙΑ ΘΕΜΑΤΑ ΣΥΣΤΗΜΑΤΩΝ ΚΑΙ ΛΟΓΙΣΜΙΚΟΥ
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200/80">
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold text-xs text-slate-500 uppercase tracking-wider">Δευτερεύουσα Δραστηριότητα (ΚΑΔ 62101107)</span>
                <span className="text-xs text-slate-400">Έναρξη: 16/07/2026</span>
              </div>
              <div className="text-slate-800 font-semibold">
                ΥΠΗΡΕΣΙΕΣ ΣΧΕΔΙΑΣΜΟΥ, ΥΠΟΣΤΗΡΙΞΗΣ ΚΑΙ ΟΛΟΚΛΗΡΩΣΗΣ ΣΥΣΤΗΜΑΤΟΣ ΛΟΓΙΣΜΙΚΟΥ
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Financial Statements / Publications Container */}
        <div className="bg-white rounded-xl shadow-md border border-slate-200/80 p-6">
          <h3 className="text-base font-bold text-slate-900 border-b border-slate-200 pb-3 mb-4 flex items-center gap-2">
            <FileText size={18} className="text-blue-700" /> Δημοσιεύσεις & Οικονομικές Καταστάσεις (Ισολογισμοί)
          </h3>
          <div className="bg-slate-50 p-4 rounded-lg border border-dashed border-slate-300 text-slate-600 text-sm flex items-start gap-3">
            <AlertCircle size={20} className="text-slate-400 shrink-0 mt-0.5" />
            <div>
              <div className="font-semibold text-slate-800 mb-1">1η Διαχειριστική Περίοδος (2026)</div>
              <div>
                Η εταιρεία ανήκει στη χρήση 2026 (Σύσταση: 16/07/2026). Οι πρώτοι ετήσιοι ισολογισμοί & οικονομικές καταστάσεις θα αναρτηθούν μετά τη λήξη της 1ης διαχειριστικής περιόδου (31/12/2026) σύμφωνα με τις προθεσμίες του Ν. 4072/2012.
              </div>
            </div>
          </div>
        </div>

      </main>

      {/* Clean Slate Corporate Footer */}
      <footer className="bg-slate-900 text-slate-300 pt-10 pb-6 px-4 md:px-8 mt-auto border-t border-slate-800">
        <div className="max-w-5xl mx-auto">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-8 border-b border-slate-800 gap-6">
            <div className="flex items-center gap-3">
              <img 
                src="/logo.svg" 
                alt="Lyroudis Consulting Logo" 
                width={48} 
                height={48} 
                className="w-[48px] h-[48px] object-contain shrink-0 bg-white p-1 rounded-md block" 
              />
              <div>
                <div className="text-lg font-bold text-white mb-0.5">
                  LYROUDIS CONSULTING SERVICES ΜΟΝΟΠΡΟΣΩΠΗ Ι.Κ.Ε.
                </div>
                <div className="text-xs text-slate-400">
                  LYROUDIS CONSULTING SERVICES SINGLE MEMBER P.C.
                </div>
              </div>
            </div>

            <div className="text-xs text-slate-400 space-y-1">
              <div><strong className="text-slate-300">Γ.Ε.ΜΗ.:</strong> 195135303000</div>
              <div><strong className="text-slate-300">EUID:</strong> ELGEMI.195135303000</div>
              <div><strong className="text-slate-300">ΑΦΜ:</strong> 803351366 (ΔΟΥ ΚΕΦΟΔΕ ΑΤΤΙΚΗΣ)</div>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
            <div>
              © 2026 LYROUDIS CONSULTING SERVICES Μ.Ι.Κ.Ε. — Κυπρίων Αγωνιστών 68, 16451 Αργυρούπολη
            </div>
            <div className="text-slate-400 font-medium">
              Δημιουργήθηκε από <a href="https://sgk.gr" target="_blank" rel="noopener noreferrer" className="text-slate-200 hover:text-white underline transition-colors font-bold">sgk.gr</a>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}
