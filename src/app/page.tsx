'use client';

import React from 'react';
import { Mail } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50 text-slate-800 antialiased">
      
      {/* Simple Header */}
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

      {/* Elegant & Simple Coming Soon Section */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-6 py-20 max-w-2xl mx-auto space-y-6">
        
        <div className="w-16 h-16 bg-emerald-100/80 text-emerald-700 rounded-2xl flex items-center justify-center mb-2 mx-auto">
          <img 
            src="/logo.svg" 
            alt="MIMI AND NONI Emblem" 
            className="w-10 h-10 object-contain" 
          />
        </div>

        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
          Σύντομα Κοντά Σας
        </h1>

        <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed">
          Η νέα ιστοσελίδα της εταιρείας <strong className="text-slate-900">MIMI AND NONI Μ.Ι.Κ.Ε.</strong> βρίσκεται υπό κατασκευή και θα είναι σύντομα διαθέσιμη.
        </p>

        <div className="pt-4">
          <a 
            href="mailto:info@miminoni.com" 
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-emerald-900 bg-white border border-slate-200 px-5 py-2.5 rounded-lg shadow-sm hover:border-emerald-300 transition-all"
          >
            <Mail size={16} /> info@miminoni.com
          </a>
        </div>

      </main>

      {/* Clean Simple Footer */}
      <footer className="border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-500">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <div>
            © 2026 MIMI AND NONI ΜΟΝΟΠΡΟΣΩΠΗ Ι.Κ.Ε. — Με επιφύλαξη παντός δικαιώματος.
          </div>
          <div>
            Δημιουργήθηκε από <a href="https://sgk.gr" target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-slate-900 font-bold underline transition-colors">sgk.gr</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
