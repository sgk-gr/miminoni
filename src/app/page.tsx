'use client';

import React from 'react';
import { ShieldAlert, Lock, AlertCircle } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-900 text-slate-100 antialiased selection:bg-amber-600 selection:text-white">
      {/* Subtle Dark Backdrop */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-slate-950 pointer-events-none -z-10" />

      {/* Minimal Header */}
      <header className="border-b border-slate-800/80 bg-slate-950/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              src="/logo.png" 
              alt="MIMI AND NONI Logo" 
              width={42} 
              height={42} 
              className="w-[42px] h-[42px] object-contain rounded-lg shadow-sm opacity-80" 
            />
            <div>
              <span className="font-extrabold text-lg tracking-tight text-slate-200 block leading-tight">
                MIMI AND NONI
              </span>
              <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase block mt-0.5">
                ΜΟΝΟΠΡΟΣΩΠΗ Ι.Κ.Ε.
              </span>
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold px-3 py-1 rounded-full">
            <Lock size={12} />
            <span>Access Suspended</span>
          </div>
        </div>
      </header>

      {/* Main Notice Section */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-6 py-20 max-w-2xl mx-auto space-y-8">
        
        {/* Warning Icon Badge */}
        <div className="w-20 h-20 bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-3xl flex items-center justify-center shadow-xl backdrop-blur-sm">
          <ShieldAlert size={40} className="text-amber-400" />
        </div>

        {/* Notice Heading & Text */}
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Προσωρινή Αναστολή Λειτουργίας
          </h1>
          <p className="text-slate-400 text-base sm:text-lg font-normal leading-relaxed max-w-lg mx-auto">
            Η πρόσβαση στην ιστοσελίδα έχει ανασταλεί προσωρινά λόγω εκκρεμοτήτων λογαριασμού ή προγραμματισμένης συντήρησης.
          </p>
        </div>

        {/* Notice Box */}
        <div className="w-full bg-slate-800/40 border border-slate-700/60 rounded-xl p-5 text-xs sm:text-sm text-slate-400 flex items-start gap-3 text-left">
          <AlertCircle size={18} className="text-amber-400 shrink-0 mt-0.5" />
          <div>
            Για την ενεργοποίηση της ιστοσελίδας και την αποκατάσταση της πρόσβασης, παρακαλούμε επικοινωνήστε με τον αρμόδιο διαχειριστή/τεχνικό ανάπτυξης.
          </div>
        </div>

      </main>

      {/* Minimal Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-950/80 py-6 text-center text-xs text-slate-500">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <div>
            © 2026 MIMI AND NONI ΜΟΝΟΠΡΟΣΩΠΗ Ι.Κ.Ε. — Status: Service Suspended
          </div>
          <div>
            Managed by <a href="https://sgk.gr" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-200 font-semibold underline transition-colors">sgk.gr</a>
          </div>
        </div>
      </footer>
    </div>
  );
}