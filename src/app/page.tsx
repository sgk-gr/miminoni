'use client';

import React from 'react';
import { MapPin, Phone, ShieldCheck, FileText, Wallet, Users, AlertCircle, Building2, Download, Printer } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50 text-slate-900 antialiased">
      {/* Clean Corporate Light Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 md:px-8 py-3.5 flex flex-wrap justify-between items-center gap-4">
          {/* Company Name & Logo */}
          <div className="flex items-center gap-3.5">
            <img 
              src="/logo.svg" 
              alt="MIMI AND NONI Logo" 
              width={54} 
              height={54} 
              className="w-[54px] h-[54px] object-contain shrink-0 rounded-lg block" 
            />
            <div>
              <span className="font-extrabold text-xl md:text-2xl tracking-tight text-slate-900 block leading-tight">
                MIMI AND NONI
              </span>
              <span className="text-[11px] font-bold tracking-widest text-emerald-700 uppercase block mt-0.5">
                ΜΟΝΟΠΡΟΣΩΠΗ Ι.Κ.Ε.
              </span>
            </div>
          </div>

          {/* Header Action Button - Clean Emerald Accent */}
          <a 
            href="tel:6980877448" 
            className="bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold px-4 py-2.5 rounded-md transition-all shadow-sm flex items-center gap-2"
          >
            <Phone size={14} /> 6980877448
          </a>
        </div>
      </header>

      {/* Page Title Section - Light Grey & Emerald */}
      <section className="bg-slate-100 border-b border-slate-200/80 py-8 px-4 md:px-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
              <ShieldCheck size={16} /> Νομική Δημοσιότητα Ι.Κ.Ε. (Άρθρο 47 Ν. 4072/2012 & Ν. 4919/2022)
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
              Εταιρική Διαφάνεια & Στοιχεία Γ.Ε.ΜΗ.
            </h1>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <a 
              href="https://publicity.businessportal.gr/company/195248103000#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 text-xs font-semibold px-3 py-2 rounded-md transition-colors shadow-sm"
            >
              <Printer size={14} /> Εκτυπώσιμη Μορφή
            </a>
            <a 
              href="https://publicity.businessportal.gr/api/company/195248103000/vcf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 text-xs font-semibold px-3 py-2 rounded-md transition-colors shadow-sm"
            >
              <Download size={14} /> Αποθήκευση vCard
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 md:px-8 py-10 flex-grow w-full space-y-8">
        
        {/* Main Details Table Card */}
        <div className="bg-white rounded-xl shadow-md border border-slate-200/90 overflow-hidden p-6 md:p-8">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-3 mb-4 flex items-center gap-2">
            <Building2 size={18} className="text-emerald-700" /> Βασικά Στοιχεία Επιχείρησης
          </h2>

          <div className="divide-y divide-slate-100 text-sm md:text-base">
            
            {/* Εταιρική Επωνυμία */}
            <div className="grid grid-cols-1 md:grid-cols-12 py-3.5 gap-2 md:gap-4 items-center">
              <div className="md:col-span-4 text-slate-500 font-medium">
                Εταιρική Επωνυμία
              </div>
              <div className="md:col-span-8 font-bold text-slate-900">
                MIMI AND NONI ΜΟΝΟΠΡΟΣΩΠΗ Ι.Κ.Ε.
              </div>
            </div>

            {/* Επωνυμία με λατινικούς χαρακτήρες */}
            <div className="grid grid-cols-1 md:grid-cols-12 py-3.5 gap-2 md:gap-4 items-center">
              <div className="md:col-span-4 text-slate-500 font-medium">
                Επωνυμία (Λατινικά)
              </div>
              <div className="md:col-span-8 font-medium text-slate-800">
                MIMI AND NONI SINGLE MEMBER P.C.
              </div>
            </div>

            {/* Διακριτικοί Τίτλοι */}
            <div className="grid grid-cols-1 md:grid-cols-12 py-3.5 gap-2 md:gap-4 items-center">
              <div className="md:col-span-4 text-slate-500 font-medium">
                Διακριτικοί Τίτλοι
              </div>
              <div className="md:col-span-8 font-medium text-slate-800">
                MIMI AND NONI <span className="text-slate-500 text-xs md:text-sm font-normal">(MIMI AND NONI με Λατινικούς χαρακτήρες)</span>
              </div>
            </div>

            {/* Αριθμός ΓΕΜΗ & EUID */}
            <div className="grid grid-cols-1 md:grid-cols-12 py-3.5 gap-2 md:gap-4 items-center">
              <div className="md:col-span-4 text-slate-500 font-medium">
                Αριθμός Γ.Ε.ΜΗ.
              </div>
              <div className="md:col-span-8 font-bold text-emerald-700">
                195248103000 <span className="font-normal text-slate-500 text-sm">(EUID: ELGEMI.195248103000)</span>
              </div>
            </div>

            {/* ΑΦΜ */}
            <div className="grid grid-cols-1 md:grid-cols-12 py-3.5 gap-2 md:gap-4 items-center">
              <div className="md:col-span-4 text-slate-500 font-medium">
                ΑΦΜ
              </div>
              <div className="md:col-span-8 font-bold text-slate-900">
                803357082
              </div>
            </div>

            {/* Νομική Μορφή / Κατάσταση */}
            <div className="grid grid-cols-1 md:grid-cols-12 py-3.5 gap-2 md:gap-4 items-center">
              <div className="md:col-span-4 text-slate-500 font-medium">
                Νομική Μορφή / Κατάσταση
              </div>
              <div className="md:col-span-8 flex flex-wrap items-center gap-2 font-bold text-slate-900">
                <span>ΙΚΕ /</span>
                <span className="bg-emerald-100 text-emerald-800 border border-emerald-300 text-xs font-semibold px-2.5 py-0.5 rounded-full inline-flex items-center gap-1">
                  Ενεργή
                </span>
                <span className="font-normal text-slate-500 text-sm">από 23/07/2026</span>
              </div>
            </div>

            {/* Ημερομηνία Σύστασης */}
            <div className="grid grid-cols-1 md:grid-cols-12 py-3.5 gap-2 md:gap-4 items-center">
              <div className="md:col-span-4 text-slate-500 font-medium">
                Ημερομηνία Σύστασης
              </div>
              <div className="md:col-span-8 font-medium text-slate-800">
                23/07/2026
              </div>
            </div>

            {/* Έδρα / Διεύθυνση */}
            <div className="grid grid-cols-1 md:grid-cols-12 py-3.5 gap-2 md:gap-4 items-center">
              <div className="md:col-span-4 text-slate-500 font-medium">
                Διεύθυνση Έδρας
              </div>
              <div className="md:col-span-8 font-medium text-slate-800">
                <a 
                  href="https://www.google.com/maps/search/%CE%91%CE%98%CE%91%CE%9D%CE%91%CE%A3%CE%99%CE%9F%CE%A5%20%CE%94%CE%99%CE%91%CE%9A%CE%9F%CE%A5%201,%20%CE%91%CE%98%CE%97%CE%9D%CE%91,%2016772" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-emerald-700 hover:underline inline-flex items-center gap-1 font-semibold"
                >
                  <MapPin size={15} className="text-emerald-600 shrink-0" />
                  ΑΘΑΝΑΣΙΟΥ ΔΙΑΚΟΥ 1, ΒΑΡΗ, ΒΑΡΗΣ - ΒΟΥΛΑΣ - ΒΟΥΛΙΑΓΜΕΝΗΣ / ΑΝΑΤΟΛΙΚΗΣ ΑΤΤΙΚΗΣ, 16772
                </a>
              </div>
            </div>

            {/* Επικοινωνία */}
            <div className="grid grid-cols-1 md:grid-cols-12 py-3.5 gap-2 md:gap-4 items-center">
              <div className="md:col-span-4 text-slate-500 font-medium">
                Στοιχεία Επικοινωνίας
              </div>
              <div className="md:col-span-8 flex flex-wrap items-center gap-x-6 gap-y-1 text-slate-800 font-medium">
                <div>
                  <span className="text-slate-500">Τηλέφωνο: </span>
                  <a href="tel:6980877448" className="font-bold text-slate-900 hover:text-emerald-700">6980877448</a>
                </div>
                <div>
                  <span className="text-slate-500">Email: </span>
                  <a href="mailto:info@miminoni.com" className="font-bold text-slate-900 hover:text-emerald-700">info@miminoni.com</a>
                  <span className="text-slate-400 mx-1.5">|</span>
                  <a href="mailto:Kostas.Mallios@gmail.com" className="font-bold text-slate-900 hover:text-emerald-700">Kostas.Mallios@gmail.com</a>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Section 2: Capital & Shares (Στοιχεία Κεφαλαίου) */}
        <div className="bg-white rounded-xl shadow-md border border-slate-200/90 p-6 md:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200 pb-3 mb-4 gap-2">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Wallet size={18} className="text-emerald-700" /> Στοιχεία Κεφαλαίου
            </h3>
            <div className="text-slate-900 font-extrabold text-base sm:text-lg">
              Κεφάλαιο <span className="text-emerald-800">100.000,00 €</span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-slate-700 font-semibold">
                  <th className="py-3 px-4">Είδος Μετοχών</th>
                  <th className="py-3 px-4">Αριθμός Μετοχών</th>
                  <th className="py-3 px-4">Αξία</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3.5 px-4 font-semibold text-slate-900">Κεφαλαιακές</td>
                  <td className="py-3.5 px-4 text-slate-800 font-medium">100.000</td>
                  <td className="py-3.5 px-4 font-bold text-slate-900">1,00 €</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 3: Partners & Governance */}
        <div className="bg-white rounded-xl shadow-md border border-slate-200/90 p-6 md:p-8">
          <h3 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-3 mb-4 flex items-center gap-2">
            <Users size={18} className="text-emerald-700" /> Εταίροι / Διοίκηση
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-slate-700 font-semibold">
                  <th className="py-3 px-4">Όνομα / Επιχείρηση</th>
                  <th className="py-3 px-4">Κατηγορία</th>
                  <th className="py-3 px-4">Ιδιότητα</th>
                  <th className="py-3 px-4">Ποσοστό</th>
                  <th className="py-3 px-4">Θητεία</th>
                  <th className="py-3 px-4">Κατάσταση</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3.5 px-4 font-bold text-slate-900">ΜΑΛΛΙΟΣ ΚΩΝΣΤΑΝΤΙΝΟΣ</td>
                  <td className="py-3.5 px-4 text-slate-700">Εταίροι</td>
                  <td className="py-3.5 px-4 text-slate-700">Μοναδικός Εταίρος και Διαχειριστής</td>
                  <td className="py-3.5 px-4 font-bold text-emerald-700">100%</td>
                  <td className="py-3.5 px-4 text-slate-600">Από 23/07/2026 έως ...</td>
                  <td className="py-3.5 px-4">
                    <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-2.5 py-0.5 rounded-full border border-emerald-300">
                      Ενεργός
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 4: Activities (KAD) */}
        <div className="bg-white rounded-xl shadow-md border border-slate-200/90 p-6 md:p-8">
          <h3 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-3 mb-4 flex items-center gap-2">
            <FileText size={18} className="text-emerald-700" /> Σκοπός & Δραστηριότητες (ΚΑΔ)
          </h3>

          <div className="space-y-4">
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200/80">
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold text-xs text-emerald-700 uppercase tracking-wider">Κύριος ΚΑΔ — 68200000</span>
              </div>
              <div className="text-slate-900 font-bold text-base md:text-lg">
                ΕΚΜΙΣΘΩΣΗ ΚΑΙ ΔΙΑΧΕΙΡΙΣΗ ΙΔΙΟΚΤΗΤΩΝ Η ΜΙΣΘΩΜΕΝΩΝ ΑΚΙΝΗΤΩΝ
              </div>
            </div>
          </div>
        </div>

        {/* Section 5: History / Filings */}
        <div className="bg-white rounded-xl shadow-md border border-slate-200/90 p-6 md:p-8">
          <h3 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-3 mb-4 flex items-center gap-2">
            <FileText size={18} className="text-emerald-700" /> Ιστορικό Καταχωρίσεων Γ.Ε.ΜΗ.
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-slate-700 font-semibold">
                  <th className="py-3 px-4">Ημερομηνία</th>
                  <th className="py-3 px-4">Αριθμός ΚΑΚ</th>
                  <th className="py-3 px-4">Τύπος Αίτησης / Περιγραφή</th>
                  <th className="py-3 px-4">Κατάσταση</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3.5 px-4 font-medium text-slate-800">23/07/2026</td>
                  <td className="py-3.5 px-4 text-slate-700">195248103000</td>
                  <td className="py-3.5 px-4 font-semibold text-slate-900">Ανακοίνωση σύστασης από ΥΜΣ</td>
                  <td className="py-3.5 px-4">
                    <span className="bg-emerald-50 text-emerald-800 text-xs font-semibold px-2.5 py-0.5 rounded-full border border-emerald-200">
                      ΚΑΤΑΧΩΡΙΣΗ
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 6: Financial Statements / Publications Container */}
        <div className="bg-white rounded-xl shadow-md border border-slate-200/90 p-6 md:p-8">
          <h3 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-3 mb-4 flex items-center gap-2">
            <FileText size={18} className="text-emerald-700" /> Δημοσιεύσεις & Οικονομικές Καταστάσεις
          </h3>
          <div className="bg-slate-50 p-4 rounded-lg border border-dashed border-slate-300 text-slate-600 text-sm flex items-start gap-3">
            <AlertCircle size={20} className="text-slate-400 shrink-0 mt-0.5" />
            <div>
              <div className="font-semibold text-slate-800 mb-1">1η Διαχειριστική Περίοδος (2026)</div>
              <div>
                Η εταιρεία ανήκει στη χρήση 2026 (Σύσταση: 23/07/2026). Οι πρώτοι ετήσιοι ισολογισμοί & οικονομικές καταστάσεις θα αναρτηθούν μετά τη λήξη της 1ης διαχειριστικής περιόδου σύμφωνα με τις προθεσμίες του Ν. 4072/2012.
              </div>
            </div>
          </div>
        </div>

      </main>

      {/* Clean Light Corporate Footer */}
      <footer className="bg-slate-900 text-slate-300 pt-10 pb-6 px-4 md:px-8 mt-auto border-t border-slate-800">
        <div className="max-w-5xl mx-auto">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-8 border-b border-slate-800 gap-6">
            <div className="flex items-center gap-3.5">
              <img 
                src="/logo.svg" 
                alt="MIMI AND NONI Logo" 
                width={48} 
                height={48} 
                className="w-[48px] h-[48px] object-contain shrink-0 bg-white p-1 rounded-md block shadow-sm" 
              />
              <div>
                <div className="text-lg font-bold text-white mb-0.5">
                  MIMI AND NONI ΜΟΝΟΠΡΟΣΩΠΗ Ι.Κ.Ε.
                </div>
                <div className="text-xs text-emerald-400 font-medium">
                  MIMI AND NONI SINGLE MEMBER P.C.
                </div>
              </div>
            </div>

            <div className="text-xs text-slate-400 space-y-1">
              <div><strong className="text-slate-200">Γ.Ε.ΜΗ.:</strong> 195248103000</div>
              <div><strong className="text-slate-200">EUID:</strong> ELGEMI.195248103000</div>
              <div><strong className="text-slate-200">ΑΦΜ:</strong> 803357082</div>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
            <div>
              © 2026 MIMI AND NONI ΜΟΝΟΠΡΟΣΩΠΗ Ι.Κ.Ε. — ΑΘΑΝΑΣΙΟΥ ΔΙΑΚΟΥ 1, 16772 ΒΑΡΗ
            </div>
            <div className="text-slate-400 font-medium">
              Δημιουργήθηκε από <a href="https://sgk.gr" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 underline transition-colors font-bold">sgk.gr</a>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}
