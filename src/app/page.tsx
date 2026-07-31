'use client';

import React from 'react';
import { Phone, Mail, MapPin, Globe, CheckCircle2, ShieldCheck, FileText, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#f8fafc]">
      {/* Header Banner matching reference style */}
      <header className="bg-[#2b85cf] text-white pt-10 pb-16 px-4 md:px-8 rounded-b-[40px] shadow-lg relative overflow-hidden">
        {/* Background Subtle Accent Pattern */}
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto">
          {/* Top Bar / Brand Header */}
          <div className="flex flex-wrap justify-between items-center pb-8 border-b border-white/20 gap-4">
            <div className="flex items-center space-[#0e5c9e] gap-3">
              <div className="bg-white text-[#2b85cf] p-2 rounded-xl shadow-md font-bold text-xl flex items-center justify-center w-10 h-10">
                L
              </div>
              <span className="font-extrabold text-xl tracking-tight">LYROUDIS CONSULTING SERVICES</span>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="bg-white/10 hover:bg-white/20 text-xs px-3 py-1.5 rounded-full border border-white/30 flex items-center gap-1.5 transition-all">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span> GR / ΕΛ
              </span>
              <a 
                href="#contact" 
                className="bg-[#ff6b4a] hover:bg-[#f05a38] text-white text-xs font-semibold px-4 py-2 rounded-full transition-all shadow-md flex items-center gap-1.5"
              >
                Επικοινωνία <Phone size={14} />
              </a>
            </div>
          </div>

          {/* Main Hero Header Title */}
          <div className="mt-8 text-left max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3">
              Εταιρική Διαφάνεια & Στοιχεία ΓΕΜΗ
            </h1>
            <p className="text-white/80 text-sm sm:text-base font-medium">
              Σύμφωνα με τον Ν. 4072/2012
            </p>
          </div>
        </div>
      </header>

      {/* Main Content Card Container */}
      <main className="max-w-5xl mx-auto px-4 -mt-6 mb-16 flex-grow w-full">
        {/* Main Details Table Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden p-6 md:p-10 mb-12">
          
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
              <div className="md:col-span-8 font-semibold text-slate-800">
                LYROUDIS CONSULTING SERVICES SINGLE MEMBER P.C.
              </div>
            </div>

            {/* Διακριτικοί Τίτλοι */}
            <div className="grid grid-cols-1 md:grid-cols-12 py-4 gap-2 md:gap-4 items-center">
              <div className="md:col-span-4 text-slate-500 font-medium">
                Διακριτικοί Τίτλοι
              </div>
              <div className="md:col-span-8 font-semibold text-slate-800">
                LYROUDIS CONSULTING SERVICES / LYROUDIS CONSULTING SERVICES (απόδοση με Λατινικούς χαρακτήρες)
              </div>
            </div>

            {/* Αριθμός ΓΕΜΗ */}
            <div className="grid grid-cols-1 md:grid-cols-12 py-4 gap-2 md:gap-4 items-center">
              <div className="md:col-span-4 text-slate-500 font-medium">
                Αριθμός ΓΕΜΗ
              </div>
              <div className="md:col-span-8 font-bold text-slate-900 tracking-wide">
                195135303000 <span className="font-normal text-slate-500 text-sm">(EUID: ELGEMI.195135303000)</span>
              </div>
            </div>

            {/* ΑΦΜ */}
            <div className="grid grid-cols-1 md:grid-cols-12 py-4 gap-2 md:gap-4 items-center">
              <div className="md:col-span-4 text-slate-500 font-medium">
                ΑΦΜ
              </div>
              <div className="md:col-span-8 font-bold text-slate-900">
                803351366 <span className="font-normal text-slate-500 text-sm">(ΔΟY: ΚΕΦΟΔΕ ΑΤΤΙΚΗΣ)</span>
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
              <div className="md:col-span-8 font-semibold text-slate-800">
                1.000,00 € <span className="font-normal text-slate-500 text-sm">(10 Εταιρικά Μερίδια Κεφαλαιακών Εισφορών x 100,00 €)</span>
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
                  className="text-blue-600 hover:underline flex items-center gap-1"
                >
                  <MapPin size={16} className="text-red-500 shrink-0" />
                  Κυπρίων Αγωνιστών 68, Αργυρούπολη, Τ.Κ. 16451 (Δήμος Ελληνικού - Αργυρούπολης)
                </a>
              </div>
            </div>

            {/* Διαχειριστής & Μοναδικός Εταίρος */}
            <div className="grid grid-cols-1 md:grid-cols-12 py-4 gap-2 md:gap-4 items-center">
              <div className="md:col-span-4 text-slate-500 font-medium">
                Διαχειριστής & Εταίρος
              </div>
              <div className="md:col-span-8 font-semibold text-slate-800">
                Βασίλειος Λυρούδης του Χρήστου <span className="font-normal text-slate-500 text-sm">(Ποσοστό 100%)</span>
              </div>
            </div>

            {/* Δραστηριότητες (ΚΑΔ) */}
            <div className="grid grid-cols-1 md:grid-cols-12 py-4 gap-2 md:gap-4 items-start">
              <div className="md:col-span-4 text-slate-500 font-medium pt-1">
                Σκοπός / Δραστηριότητες (ΚΑΔ)
              </div>
              <div className="md:col-span-8 space-y-2">
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-200/60">
                  <div className="font-bold text-xs text-blue-700 uppercase tracking-wider mb-1">Κύρια Δραστηριότητα (62202000)</div>
                  <div className="text-slate-800 text-sm font-medium">Υπηρεσίες παροχής συμβουλών για θέματα συστημάτων και λογισμικού</div>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg border border-slate-200/60">
                  <div className="font-bold text-xs text-slate-500 uppercase tracking-wider mb-1">Δευτερεύουσα Δραστηριότητα (62101107)</div>
                  <div className="text-slate-800 text-sm font-medium">Υπηρεσίες σχεδιασμού, υποστήριξης και ολοκλήρωσης συστήματος λογισμικού</div>
                </div>
              </div>
            </div>

            {/* Επικοινωνία */}
            <div className="grid grid-cols-1 md:grid-cols-12 py-4 gap-2 md:gap-4 items-center" id="contact">
              <div className="md:col-span-4 text-slate-500 font-medium">
                Επικοινωνία
              </div>
              <div className="md:col-span-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-slate-800 font-semibold">
                <div className="flex items-center gap-1.5">
                  <span className="text-slate-400 font-normal">Κινητό:</span>
                  <a href="tel:6973400545" className="hover:text-blue-600 transition-colors">6973400545</a>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-slate-400 font-normal">Email:</span>
                  <a href="mailto:info@lyroudis.gr" className="hover:text-blue-600 transition-colors">info@lyroudis.gr</a>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Services & About Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-md">
            <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
              <ShieldCheck size={20} />
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-2">Συμβουλευτικές Υπηρεσίες IT</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Εξειδικευμένες συμβουλευτικές υπηρεσίες για την αρχιτεκτονική, την ανάλυση και τον εκσυγχρονισμό πληροφοριακών συστημάτων και λογισμικού επιχειρήσεων.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-md">
            <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
              <FileText size={20} />
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-2">Ολοκλήρωση & Υποστήριξη</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Σχεδιασμός, ολοκλήρωση συστημάτων λογισμικού και συνεχή τεχνική υποστήριξη για την απρόσκοπτη λειτουργία της ψηφιακής σας υποδομής.
            </p>
          </div>
        </div>
      </main>

      {/* Coral / Orange Bottom Banner matching reference style */}
      <footer className="bg-[#ff6b4a] text-white pt-16 pb-10 px-4 md:px-8 rounded-t-[40px] mt-auto">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Top Newsletter / Call To Action Section */}
          <div className="max-w-2xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-3 leading-tight">
              Επικοινωνήστε μαζί μας για Συμβουλευτικές Υπηρεσίες
            </h2>
            <p className="text-white/90 text-sm sm:text-base mb-6">
              Μάθετε περισσότερα για τις λύσεις λογισμικού και τη βελτιστοποίηση των συστημάτων σας.
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Εισάγετε το email σας..." 
                className="w-full px-4 py-3 rounded-full bg-white/20 backdrop-blur-md text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm"
              />
              <button 
                type="submit" 
                className="w-full sm:w-auto bg-white text-[#ff6b4a] hover:bg-slate-100 font-bold px-6 py-3 rounded-full transition-all text-sm shrink-0 shadow-md"
              >
                Εγγραφή
              </button>
            </form>
          </div>

          <div className="border-t border-white/20 pt-8 pb-4">
            <div className="text-xs uppercase tracking-wider text-white/80 font-semibold mb-4">
              Στοιχεία Δημοσιότητας Ι.Κ.Ε. / ΓΕΜΗ
            </div>

            {/* Bottom Large Logo Header */}
            <div className="flex items-center justify-center gap-3 text-3xl sm:text-4xl font-extrabold tracking-tight mb-8">
              <div className="w-9 h-9 bg-white text-[#ff6b4a] rounded-lg flex items-center justify-center text-xl font-black shadow-inner">
                L
              </div>
              LYROUDIS CONSULTING SERVICES
            </div>

            {/* Sub-footer details & credits */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/80 pt-4 border-t border-white/10">
              <div className="text-center md:text-left leading-relaxed">
                © Lyroudis Consulting Services 2026 | Κυπρίων Αγωνιστών 68, Αργυρούπολη, Τ.Κ.: 16451 | Κινητό: 6973400545 - Email: info@lyroudis.gr | ΓΕΜΗ: 195135303000
              </div>
              <div className="flex items-center gap-4 shrink-0 font-medium">
                <span className="hover:underline opacity-90 cursor-pointer">Δημιουργήθηκε από sgk.gr</span>
                <span>•</span>
                <span className="hover:underline opacity-90 cursor-pointer">Όροι & Προϋποθέσεις</span>
                <span>•</span>
                <span className="hover:underline opacity-90 cursor-pointer">Πολιτική Απορρήτου</span>
              </div>
            </div>

          </div>

        </div>
      </footer>
    </div>
  );
}
