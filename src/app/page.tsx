import React from 'react';
import { MapPin, Phone, ShieldCheck, FileText, Wallet, Users, AlertCircle, Building2, Download, Printer, RefreshCw } from 'lucide-react';
import { getGemiCompanyData } from '@/lib/gemi';

export const revalidate = 3600; // Server-side revalidation every 1 hour

export default async function Home() {
  const gemiLiveApiData = await getGemiCompanyData("195248103000");

  // Fallback to validated static data if API upstream is updating or temporarly unreachable
  const company = {
    name: gemiLiveApiData?.companyName || "MIMI AND NONI ΜΟΝΟΠΡΟΣΩΠΗ Ι.Κ.Ε.",
    nameEn: gemiLiveApiData?.companyNameEn || "MIMI AND NONI SINGLE MEMBER P.C.",
    titles: gemiLiveApiData?.commercialTitles || "MIMI AND NONI (MIMI AND NONI με Λατινικούς χαρακτήρες)",
    gemiNo: gemiLiveApiData?.gemiNumber || "195248103000",
    euid: gemiLiveApiData?.euid || "ELGEMI.195248103000",
    afm: gemiLiveApiData?.vatNumber || "803357082",
    legalForm: gemiLiveApiData?.legalType?.descr || "ΙΚΕ",
    status: gemiLiveApiData?.companyStatus?.descr || "Ενεργή",
    registrationDate: gemiLiveApiData?.registrationDate || "23/07/2026",
    address: gemiLiveApiData?.address || "ΑΘΑΝΑΣΙΟΥ ΔΙΑΚΟΥ 1, ΒΑΡΗ, ΒΑΡΗΣ - ΒΟΥΛΑΣ - ΒΟΥΛΙΑΓΜΕΝΗΣ / ΑΝΑΤΟΛΙΚΗΣ ΑΤΤΙΚΗΣ, 16772",
    phone: gemiLiveApiData?.phone || "6980877448",
    email: gemiLiveApiData?.email || "info@miminoni.com",
    capital: gemiLiveApiData?.capital || "100.000,00 €",
    sharesCount: gemiLiveApiData?.sharesCount || "100.000",
    shareValue: gemiLiveApiData?.shareValue || "1,00 €",
    isLiveConnected: !!gemiLiveApiData
  };

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
          <div className="flex items-center gap-3">
            {company.isLiveConnected && (
              <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold px-2.5 py-1 rounded-full">
                <RefreshCw size={12} className="animate-spin text-emerald-600" />
                Live ΓΕΜΗ API Active
              </span>
            )}
            <a 
              href={`tel:${company.phone}`} 
              className="bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold px-4 py-2.5 rounded-md transition-all shadow-sm flex items-center gap-2"
            >
              <Phone size={14} /> {company.phone}
            </a>
          </div>
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
                {company.name}
              </div>
            </div>

            {/* Επωνυμία με λατινικούς χαρακτήρες */}
            <div className="grid grid-cols-1 md:grid-cols-12 py-3.5 gap-2 md:gap-4 items-center">
              <div className="md:col-span-4 text-slate-500 font-medium">
                Επωνυμία (Λατινικά)
              </div>
              <div className="md:col-span-8 font-medium text-slate-800">
                {company.nameEn}
              </div>
            </div>

            {/* Διακριτικοί Τίτλοι */}
            <div className="grid grid-cols-1 md:grid-cols-12 py-3.5 gap-2 md:gap-4 items-center">
              <div className="md:col-span-4 text-slate-500 font-medium">
                Διακριτικοί Τίτλοι
              </div>
              <div className="md:col-span-8 font-medium text-slate-800">
                {company.titles}
              </div>
            </div>

            {/* Αριθμός ΓΕΜΗ & EUID */}
            <div className="grid grid-cols-1 md:grid-cols-12 py-3.5 gap-2 md:gap-4 items-center">
              <div className="md:col-span-4 text-slate-500 font-medium">
                Αριθμός Γ.Ε.ΜΗ.
              </div>
              <div className="md:col-span-8 font-bold text-emerald-700">
                {company.gemiNo} <span className="font-normal text-slate-500 text-sm">(EUID: {company.euid})</span>
              </div>
            </div>

            {/* ΑΦΜ */}
            <div className="grid grid-cols-1 md:grid-cols-12 py-3.5 gap-2 md:gap-4 items-center">
              <div className="md:col-span-4 text-slate-500 font-medium">
                ΑΦΜ
              </div>
              <div className="md:col-span-8 font-bold text-slate-900">
                {company.afm}
              </div>
            </div>

            {/* Νομική Μορφή / Κατάσταση */}
            <div className="grid grid-cols-1 md:grid-cols-12 py-3.5 gap-2 md:gap-4 items-center">
              <div className="md:col-span-4 text-slate-500 font-medium">
                Νομική Μορφή / Κατάσταση
              </div>
              <div className="md:col-span-8 flex flex-wrap items-center gap-2 font-bold text-slate-900">
                <span>{company.legalForm} /</span>
                <span className="bg-emerald-100 text-emerald-800 border border-emerald-300 text-xs font-semibold px-2.5 py-0.5 rounded-full inline-flex items-center gap-1">
                  {company.status}
                </span>
                <span className="font-normal text-slate-500 text-sm">από {company.registrationDate}</span>
              </div>
            </div>

            {/* Ημερομηνία Σύστασης */}
            <div className="grid grid-cols-1 md:grid-cols-12 py-3.5 gap-2 md:gap-4 items-center">
              <div className="md:col-span-4 text-slate-500 font-medium">
                Ημερομηνία Σύστασης
              </div>
              <div className="md:col-span-8 font-medium text-slate-800">
                {company.registrationDate}
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
                  {company.address}
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
                  <a href={`tel:${company.phone}`} className="font-bold text-slate-900 hover:text-emerald-700">{company.phone}</a>
                </div>
                <div>
                  <span className="text-slate-500">Email: </span>
                  <a href={`mailto:${company.email}`} className="font-bold text-slate-900 hover:text-emerald-700">{company.email}</a>
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
              Κεφάλαιο <span className="text-emerald-800">{company.capital}</span>
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
                  <td className="py-3.5 px-4 text-slate-800 font-medium">{company.sharesCount}</td>
                  <td className="py-3.5 px-4 font-bold text-slate-900">{company.shareValue}</td>
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
                  <td className="py-3.5 px-4 text-slate-600">Από {company.registrationDate} έως ...</td>
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
                <tr className="hover:bg-emerald-50/40 transition-colors">
                  <td className="py-3.5 px-4 font-medium text-slate-800">{company.registrationDate}</td>
                  <td className="py-3.5 px-4 text-slate-700">{company.gemiNo}</td>
                  <td className="py-3.5 px-4 font-semibold text-slate-900">
                    <a 
                      href="/441222.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-emerald-700 hover:text-emerald-900 hover:underline flex items-center gap-1.5"
                      title="Λήψη Ανακοίνωσης Σύστασης (PDF)"
                    >
                      <FileText size={16} className="shrink-0 text-emerald-600" />
                      Ανακοίνωση σύστασης από ΥΜΣ
                    </a>
                  </td>
                  <td className="py-3.5 px-4">
                    <a 
                      href="/441222.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-semibold px-2.5 py-1 rounded-full border border-emerald-200 inline-flex items-center gap-1 transition-colors"
                      title="Λήψη PDF"
                    >
                      <Download size={13} />
                      ΚΑΤΑΧΩΡΙΣΗ / ΛΗΨΗ
                    </a>
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
                Η εταιρεία ανήκει στη χρήση 2026 (Σύσταση: {company.registrationDate}). Οι πρώτοι ετήσιοι ισολογισμοί & οικονομικές καταστάσεις θα αναρτηθούν μετά τη λήξη της 1ης διαχειριστικής περιόδου σύμφωνα με τις προθεσμίες του Ν. 4072/2012.
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
                  {company.name}
                </div>
                <div className="text-xs text-emerald-400 font-medium">
                  {company.nameEn}
                </div>
              </div>
            </div>

            <div className="text-xs text-slate-400 space-y-1">
              <div><strong className="text-slate-200">Γ.Ε.ΜΗ.:</strong> {company.gemiNo}</div>
              <div><strong className="text-slate-200">EUID:</strong> {company.euid}</div>
              <div><strong className="text-slate-200">ΑΦΜ:</strong> {company.afm}</div>
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
