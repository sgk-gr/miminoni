'use client';

import React from 'react';
import { Building2, Phone, Mail, MapPin, ShieldCheck, Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50 text-slate-800 antialiased selection:bg-emerald-600 selection:text-white">
      
      {/* Light Clean Header */}
      <header className="bg-white border-b border-slate-200/80 sticky top-0 z-50 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              src="/logo.svg" 
              alt="MIMI AND NONI Logo" 
              width={48} 
              height={48} 
              className="w-[48px] h-[48px] object-contain rounded-lg" 
            />
            <div>
              <span className="font-extrabold text-xl tracking-tight text-slate-900 block leading-tight">
                MIMI AND NONI
              </span>
              <span className="text-[11px] font-bold tracking-widest text-emerald-700 uppercase block mt-0.5">
                ΜΟΝΟΠΡΟΣΩΠΗ Ι.Κ.Ε.
              </span>
            </div>
          </div>

          <a 
            href="mailto:info@miminoni.com" 
            className="bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold px-4 py-2.5 rounded-md transition-all shadow-sm flex items-center gap-2"
          >
            <Mail size={14} /> Επικοινωνία
          </a>
        </div>
      </header>

      {/* Bright & Welcoming Coming Soon Main Section */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-6 py-16 max-w-4xl mx-auto space-y-8">
        
        {/* Status Badge */}
        <div className="inline-flex items-center bg-slate-100 border border-slate-200 text-slate-700 px-3.5 py-1 rounded-md text-xs font-semibold">
          <span>Νέα ιστοσελίδα υπό κατασκευή</span>
        </div>

        {/* Big Bright Title */}
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Σύντομα Κοντά Σας
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-xl mx-auto font-normal leading-relaxed">
            Η νέα επίσημη ιστοσελίδα της εταιρείας <strong className="text-slate-900">MIMI AND NONI Μ.Ι.Κ.Ε.</strong> προετοιμάζεται και θα είναι διαθέσιμη πολύ σύντομα.
          </p>
        </div>

        {/* Clean Bright White Disclosure Card */}
        <div className="w-full bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-lg text-left space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div className="flex items-center gap-2.5 text-slate-900 font-bold text-base sm:text-lg">
              <Building2 size={20} className="text-emerald-700" />
              <span>MIMI AND NONI SINGLE MEMBER P.C.</span>
            </div>
            <span className="bg-emerald-100 text-emerald-800 border border-emerald-300 text-xs font-semibold px-3 py-1 rounded-full">
              Ενεργή Ι.Κ.Ε.
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="space-y-1">
              <span className="text-slate-500 block text-xs font-medium">Αριθμός Γ.Ε.ΜΗ.</span>
              <span className="font-bold text-slate-900 tracking-wide">195248103000</span>
            </div>
            <div className="space-y-1">
              <span className="text-slate-500 block text-xs font-medium">ΑΦΜ</span>
              <span className="font-bold text-slate-900 tracking-wide">803357082</span>
            </div>
            <div className="space-y-1">
              <span className="text-slate-500 block text-xs font-medium">Διεύθυνση Έδρας</span>
              <span className="text-slate-800 font-medium flex items-center gap-1">
                <MapPin size={14} className="text-emerald-700 shrink-0" />
                Αθανασίου Διάκου 1, 16772 Βάρη
              </span>
            </div>
            <div className="space-y-1">
              <span className="text-slate-500 block text-xs font-medium">Τηλέφωνο Επικοινωνίας</span>
              <a href="tel:6980877448" className="text-emerald-700 hover:underline font-bold flex items-center gap-1">
                <Phone size={14} /> 6980877448
              </a>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-wrap justify-between items-center gap-2 text-xs text-slate-500">
            <div className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-emerald-700" />
              <span>EUID: ELGEMI.195248103000</span>
            </div>
            <div>
              Email: <a href="mailto:info@miminoni.com" className="text-slate-900 hover:text-emerald-700 font-bold underline">info@miminoni.com</a>
            </div>
          </div>
        </div>

      </main>

      {/* Bright Footer */}
      <footer className="border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-500">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <div>
            © 2026 MIMI AND NONI ΜΟΝΟΠΡΟΣΩΠΗ Ι.Κ.Ε. — ΑΘΑΝΑΣΙΟΥ ΔΙΑΚΟΥ 1, 16772 ΒΑΡΗ
          </div>
          <div>
            Δημιουργήθηκε από <a href="https://sgk.gr" target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-slate-900 font-bold underline transition-colors">sgk.gr</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
