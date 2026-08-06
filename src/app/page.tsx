'use client';

import React from 'react';
import { Building2, Phone, Mail, MapPin, ShieldCheck, Clock } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-900 text-slate-100 antialiased selection:bg-emerald-500 selection:text-white">
      {/* Background Subtle Gradient Backdrop */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-950/40 via-slate-900 to-slate-950 pointer-events-none -z-10" />

      {/* Modern Top Header */}
      <header className="border-b border-slate-800/80 bg-slate-900/60 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              src="/logo.svg" 
              alt="MIMI AND NONI Logo" 
              width={46} 
              height={46} 
              className="w-[46px] h-[46px] object-contain rounded-lg shadow-sm" 
            />
            <div>
              <span className="font-extrabold text-lg md:text-xl tracking-tight text-white block leading-tight">
                MIMI AND NONI
              </span>
              <span className="text-[10px] font-bold tracking-widest text-emerald-400 uppercase block mt-0.5">
                ΜΟΝΟΠΡΟΣΩΠΗ Ι.Κ.Ε.
              </span>
            </div>
          </div>

          <a 
            href="mailto:info@miminoni.com" 
            className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition-all shadow-lg shadow-emerald-950/50 flex items-center gap-2 border border-emerald-500/30"
          >
            <Mail size={14} /> Επικοινωνία
          </a>
        </div>
      </header>

      {/* Hero Coming Soon Section */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-6 py-16 max-w-4xl mx-auto space-y-10">
        
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase shadow-inner">
          <Clock size={14} className="text-emerald-400 animate-pulse" />
          <span>Νέα Ιστοσελίδα υπό κατασκευή</span>
        </div>

        {/* Title & Tagline */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
            MIMI AND NONI <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500 bg-clip-text text-transparent">
              COMING SOON
            </span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
            Η επίσημη διαδικτυακή μας παρουσία ετοιμάζεται. Σύντομα θα είναι διαθέσιμη με όλες τις υπηρεσίες και πληροφορίες της εταιρείας.
          </p>
        </div>

        {/* Corporate Disclosure Mini Card (Legal Compliance) */}
        <div className="w-full bg-slate-800/60 border border-slate-700/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-2xl text-left space-y-6">
          <div className="flex items-center justify-between border-b border-slate-700/80 pb-4">
            <div className="flex items-center gap-2.5 text-white font-bold text-base sm:text-lg">
              <Building2 size={20} className="text-emerald-400" />
              <span>MIMI AND NONI SINGLE MEMBER P.C.</span>
            </div>
            <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold px-3 py-1 rounded-full">
              Ενεργή Ι.Κ.Ε.
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="space-y-1">
              <span className="text-slate-400 block text-xs font-medium">Αριθμός Γ.Ε.ΜΗ.</span>
              <span className="font-bold text-white tracking-wide">195248103000</span>
            </div>
            <div className="space-y-1">
              <span className="text-slate-400 block text-xs font-medium">ΑΦΜ</span>
              <span className="font-bold text-white tracking-wide">803357082</span>
            </div>
            <div className="space-y-1">
              <span className="text-slate-400 block text-xs font-medium">Έδρα</span>
              <span className="text-slate-200 font-medium flex items-center gap-1">
                <MapPin size={13} className="text-emerald-400 shrink-0" />
                Αθανασίου Διάκου 1, 16772 Βάρη
              </span>
            </div>
            <div className="space-y-1">
              <span className="text-slate-400 block text-xs font-medium">Τηλέφωνο Επικοινωνίας</span>
              <a href="tel:6980877448" className="text-emerald-400 hover:underline font-bold flex items-center gap-1">
                <Phone size={13} /> 6980877448
              </a>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-700/60 flex flex-wrap justify-between items-center gap-2 text-xs text-slate-400">
            <div className="flex items-center gap-1.5 text-slate-400">
              <ShieldCheck size={14} className="text-emerald-400" />
              <span>EUID: ELGEMI.195248103000</span>
            </div>
            <div>
              Email: <a href="mailto:info@miminoni.com" className="text-white hover:text-emerald-400 font-semibold underline">info@miminoni.com</a>
            </div>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-950/80 py-6 text-center text-xs text-slate-500">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <div>
            © 2026 MIMI AND NONI ΜΟΝΟΠΡΟΣΩΠΗ Ι.Κ.Ε. — Με επιφύλαξη παντός δικαιώματος.
          </div>
          <div>
            Δημιουργήθηκε από <a href="https://sgk.gr" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white font-bold underline transition-colors">sgk.gr</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
