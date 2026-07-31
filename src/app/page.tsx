'use client';

import React from 'react';
import { Phone, Mail, MapPin, Globe, CheckCircle2, ShieldCheck, FileText, ArrowRight, Building2, Code2, Server } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-900 text-slate-100">
      {/* Header Banner - Executive Navy Blue & Slate Theme */}
      <header className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-b border-slate-800 text-white pt-10 pb-16 px-4 md:px-8 shadow-2xl relative overflow-hidden">
        {/* Subtle executive ambient light gradient */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-10 w-72 h-72 bg-emerald-600/5 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Top Bar / Brand Header */}
          <div className="flex flex-wrap justify-between items-center pb-8 border-b border-slate-800/80 gap-4">
            <div className="flex items-center gap-3.5">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-2.5 rounded-xl shadow-lg shadow-blue-900/30 font-bold text-xl flex items-center justify-center w-11 h-11 border border-blue-400/20">
                L
              </div>
              <div>
                <span className="font-bold text-lg md:text-xl tracking-tight text-slate-100 block">LYROUDIS CONSULTING SERVICES</span>
                <span className="text-xs text-slate-400 font-mono tracking-wider">IT & SOFTWARE SOLUTIONS</span>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="bg-slate-800/80 text-slate-300 text-xs px-3 py-1.5 rounded-md border border-slate-700/60 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> EL / GR
              </span>
              <a 
                href="#contact" 
                className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition-all shadow-lg shadow-blue-600/20 border border-blue-400/30 flex items-center gap-2"
              >
                <Phone size={14} /> Επικοινωνία
              </a>
            </div>
          </div>

          {/* Main Hero Header Title */}
          <div className="mt-10 text-left max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/50 text-blue-400 text-xs font-medium mb-4">
              <ShieldCheck size={14} /> Επίσημα Στοιχεία Δημοσιότητας Ι.Κ.Ε.
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3 leading-tight">
              Εταιρική Διαφάνεια & Στοιχεία ΓΕΜΗ
            </h1>
            <p className="text-slate-400 text-sm sm:text-base font-normal">
              Σύμφωνα με τις διατάξεις του Ν. 4072/2012
            </p>
          </div>
        </div>
      </header>

      {/* Main Content Card Container */}
      <main className="max-w-5xl mx-auto px-4 -mt-8 mb-16 flex-grow w-full relative z-20">
        {/* Main Details Table Card */}
        <div className="bg-slate-950/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-800 p-6 md:p-10 mb-12">
          
          <div className="divide-y divide-slate-800/80 text-sm md:text-base">
            
            {/* Εταιρική Επωνυμία */}
            <div className="grid grid-cols-1 md:grid-cols-12 py-4 gap-2 md:gap-4 items-center">
              <div className="md:col-span-4 text-slate-400 font-medium">
                Εταιρική Επωνυμία
              </div>
              <div className="md:col-span-8 font-bold text-white tracking-wide">
                LYROUDIS CONSULTING SERVICES ΜΟΝΟΠΡΟΣΩΠΗ Ι.Κ.Ε.
              </div>
            </div>

            {/* Επωνυμία με λατινικούς χαρακτήρες */}
            <div className="grid grid-cols-1 md:grid-cols-12 py-4 gap-2 md:gap-4 items-center">
              <div className="md:col-span-4 text-slate-400 font-medium">
                Επωνυμία (Λατινικά)
              </div>
              <div className="md:col-span-8 font-semibold text-slate-200">
                LYROUDIS CONSULTING SERVICES SINGLE MEMBER P.C.
              </div>
            </div>

            {/* Διακριτικοί Τίτλοι */}
            <div className="grid grid-cols-1 md:grid-cols-12 py-4 gap-2 md:gap-4 items-center">
              <div className="md:col-span-4 text-slate-400 font-medium">
                Διακριτικός Τίτλος
              </div>
              <div className="md:col-span-8 font-semibold text-slate-200">
                LYROUDIS CONSULTING SERVICES
              </div>
            </div>

            {/* Αριθμός ΓΕΜΗ */}
            <div className="grid grid-cols-1 md:grid-cols-12 py-4 gap-2 md:gap-4 items-center">
              <div className="md:col-span-4 text-slate-400 font-medium">
                Αριθμός ΓΕΜΗ
              </div>
              <div className="md:col-span-8 font-bold text-blue-400 font-mono tracking-wider text-base md:text-lg">
                195135303000 <span className="font-normal text-slate-400 text-xs md:text-sm font-sans">(EUID: ELGEMI.195135303000)</span>
              </div>
            </div>

            {/* ΑΦΜ */}
            <div className="grid grid-cols-1 md:grid-cols-12 py-4 gap-2 md:gap-4 items-center">
              <div className="md:col-span-4 text-slate-400 font-medium">
                ΑΦΜ / ΔΟΥ
              </div>
              <div className="md:col-span-8 font-semibold text-slate-200">
                <span className="font-bold text-white font-mono">803351366</span> <span className="text-slate-400 text-sm">(Αρμόδια ΔΟΥ: ΚΕΦΟΔΕ ΑΤΤΙΚΗΣ)</span>
              </div>
            </div>

            {/* Νομική Μορφή / Κατάσταση */}
            <div className="grid grid-cols-1 md:grid-cols-12 py-4 gap-2 md:gap-4 items-center">
              <div className="md:col-span-4 text-slate-400 font-medium">
                Νομική Μορφή / Κατάσταση
              </div>
              <div className="md:col-span-8 flex items-center gap-2.5 font-bold text-slate-100">
                <span>Ι.Κ.Ε. /</span>
                <span className="bg-emerald-950 text-emerald-400 border border-emerald-800/60 text-xs font-semibold px-3 py-1 rounded-md inline-flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Ενεργή
                </span>
                <span className="font-normal text-slate-400 text-sm">από 16/07/2026</span>
              </div>
            </div>

            {/* Εταιρικό Κεφάλαιο */}
            <div className="grid grid-cols-1 md:grid-cols-12 py-4 gap-2 md:gap-4 items-center">
              <div className="md:col-span-4 text-slate-400 font-medium">
                Εταιρικό Κεφάλαιο
              </div>
              <div className="md:col-span-8 font-semibold text-slate-200">
                1.000,00 € <span className="font-normal text-slate-400 text-sm">(10 Εταιρικά Μερίδια Κεφαλαιακών Εισφορών x 100,00 €)</span>
              </div>
            </div>

            {/* Έδρα / Διεύθυνση */}
            <div className="grid grid-cols-1 md:grid-cols-12 py-4 gap-2 md:gap-4 items-center">
              <div className="md:col-span-4 text-slate-400 font-medium">
                Έδρα / Διεύθυνση
              </div>
              <div className="md:col-span-8 font-medium text-slate-200">
                <a 
                  href="https://www.google.com/maps/search/%CE%9A%CE%A5%CE%A0%CE%A1%CE%99%CE%A9%CE%9D%20%CE%91%CE%93%CE%A9%CE%9D%CE%99%CE%A3%CE%A4%CE%A9%CE%9D%2068,%20%CE%91%CE%A1%CE%93%CE%A5%CE%A1%CE%9F%CE%A5%CE%A0%CE%9F%CE%9B%CE%A7,%2016451" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 hover:underline inline-flex items-center gap-1.5 transition-colors"
                >
                  <MapPin size={16} className="text-blue-400 shrink-0" />
                  Κυπρίων Αγωνιστών 68, Αργυρούπολη, Τ.Κ. 16451 (Δήμος Ελληνικού - Αργυρούπολης)
                </a>
              </div>
            </div>

            {/* Διαχειριστής & Εταίρος */}
            <div className="grid grid-cols-1 md:grid-cols-12 py-4 gap-2 md:gap-4 items-center">
              <div className="md:col-span-4 text-slate-400 font-medium">
                Διαχειριστής & Εταίρος
              </div>
              <div className="md:col-span-8 font-semibold text-slate-100">
                Βασίλειος Λυρούδης του Χρήστου <span className="font-normal text-slate-400 text-sm">(Μοναδικός Εταίρος - Ποσοστό 100%)</span>
              </div>
            </div>

            {/* Δραστηριότητες (ΚΑΔ) */}
            <div className="grid grid-cols-1 md:grid-cols-12 py-4 gap-2 md:gap-4 items-start">
              <div className="md:col-span-4 text-slate-400 font-medium pt-1">
                Σκοπός & ΚΑΔ
              </div>
              <div className="md:col-span-8 space-y-2.5">
                <div className="bg-slate-900/90 p-3.5 rounded-xl border border-slate-800">
                  <div className="font-bold text-xs text-blue-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Code2 size={14} /> Κύρια Δραστηριότητα (ΚΑΔ: 62202000)
                  </div>
                  <div className="text-slate-200 text-sm font-medium">Υπηρεσίες παροχής συμβουλών για θέματα συστημάτων και λογισμικού</div>
                </div>
                <div className="bg-slate-900/90 p-3.5 rounded-xl border border-slate-800">
                  <div className="font-bold text-xs text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Server size={14} /> Δευτερεύουσα Δραστηριότητα (ΚΑΔ: 62101107)
                  </div>
                  <div className="text-slate-200 text-sm font-medium">Υπηρεσίες σχεδιασμού, υποστήριξης και ολοκλήρωσης συστήματος λογισμικού</div>
                </div>
              </div>
            </div>

            {/* Επικοινωνία */}
            <div className="grid grid-cols-1 md:grid-cols-12 py-4 gap-2 md:gap-4 items-center" id="contact">
              <div className="md:col-span-4 text-slate-400 font-medium">
                Στοιχεία Επικοινωνίας
              </div>
              <div className="md:col-span-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-slate-200 font-semibold">
                <div className="flex items-center gap-2">
                  <Phone size={15} className="text-slate-400" />
                  <span className="text-slate-400 font-normal">Κινητό:</span>
                  <a href="tel:6973400545" className="hover:text-blue-400 transition-colors font-mono">6973400545</a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={15} className="text-slate-400" />
                  <span className="text-slate-400 font-normal">Email:</span>
                  <a href="mailto:info@lyroudis.gr" className="hover:text-blue-400 transition-colors">info@lyroudis.gr</a>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Executive Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-slate-950/80 p-6 rounded-2xl border border-slate-800 shadow-xl">
            <div className="w-11 h-11 bg-blue-950/80 text-blue-400 rounded-xl border border-blue-800/40 flex items-center justify-center mb-4">
              <ShieldCheck size={22} />
            </div>
            <h3 className="font-bold text-white text-lg mb-2">Συμβουλευτική IT & Αρχιτεκτονική</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Εξειδικευμένη παροχή συμβουλών για τον σχεδιασμό, την αξιολόγηση και τη βελτιστοποίηση πληροφοριακών συστημάτων και εταιρικού λογισμικού υψηλών απαιτήσεων.
            </p>
          </div>

          <div className="bg-slate-950/80 p-6 rounded-2xl border border-slate-800 shadow-xl">
            <div className="w-11 h-11 bg-blue-950/80 text-blue-400 rounded-xl border border-blue-800/40 flex items-center justify-center mb-4">
              <FileText size={22} />
            </div>
            <h3 className="font-bold text-white text-lg mb-2">Ολοκλήρωση & Υποστήριξη Συστημάτων</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Υπηρεσίες σχεδιασμού, ενοποίησης και διαρκούς τεχνικής υποστήριξης συστημάτων λογισμικού, εξασφαλίζοντας την επιχειρησιακή συνέχεια.
            </p>
          </div>
        </div>
      </main>

      {/* Elegant Dark Executive Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 text-slate-300 pt-12 pb-8 px-4 md:px-8 mt-auto">
        <div className="max-w-5xl mx-auto text-center">
          
          <div className="mb-10 pb-8 border-b border-slate-800/80">
            <div className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-3">
              Εταιρική Δημοσιότητα Ι.Κ.Ε. / ΓΕΜΗ
            </div>

            <div className="flex items-center justify-center gap-3 text-2xl md:text-3xl font-extrabold tracking-tight text-white mb-2">
              <div className="w-9 h-9 bg-blue-600 text-white rounded-lg flex items-center justify-center text-xl font-bold shadow-lg shadow-blue-600/30">
                L
              </div>
              LYROUDIS CONSULTING SERVICES
            </div>
            <div className="text-xs font-mono text-slate-400">
              LYROUDIS CONSULTING SERVICES SINGLE MEMBER P.C.
            </div>
          </div>

          {/* Sub-footer details & credits */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div className="text-center md:text-left leading-relaxed">
              © 2026 Lyroudis Consulting Services Μονοπρόσωπη Ι.Κ.Ε. | ΓΕΜΗ: 195135303000 | ΑΦΜ: 803351366
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <span className="text-slate-400">Δημιουργήθηκε από sgk.gr</span>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}
