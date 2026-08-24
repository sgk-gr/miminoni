import React from 'react';
import { MapPin, Phone, ShieldCheck, FileText, Wallet, Users, AlertCircle, Building2, Download, RefreshCw, Mail, ExternalLink, FileCheck } from 'lucide-react';
import { getGemiCompanyData } from '@/lib/gemi';

export const revalidate = 3600; // Server-side revalidation every 1 hour

export default async function Home() {
  const gemiData = await getGemiCompanyData("195248103000");

  const company = {
    name: gemiData?.coNameEl || "MIMI AND NONI ΜΟΝΟΠΡΟΣΩΠΗ Ι.Κ.Ε.",
    nameEn: gemiData?.coNamesEn?.[0] || "MIMI AND NONI SINGLE MEMBER P.C.",
    titles: gemiData?.coTitlesEl?.[0] || "MIMI AND NONI",
    gemiNo: gemiData?.arGemi || "195248103000",
    euid: "ELGEMI.195248103000",
    afm: gemiData?.afm || "803357082",
    doy: "ΑΘΗΝΩΝ / ΑΤΤΙΚΗΣ",
    legalForm: gemiData?.legalType?.descr || "Μονοπρόσωπη Ι.Κ.Ε.",
    status: gemiData?.status?.descr || "Ενεργή",
    registrationDate: gemiData?.incorporationDate ? new Date(gemiData.incorporationDate).toLocaleDateString('el-GR') : "23/07/2026",
    streetAddress: gemiData?.street ? `${gemiData.street.trim()} ${gemiData.streetNumber || ''}`.trim() : "Αθανασίου Διάκου 1",
    fullAddress: "Αθανασίου Διάκου 1, Τ.Κ. 16772, Βούλα (Δήμος Βάρης - Βούλας - Βουλιαγμένης)",
    phone: gemiData?.phone || "6980877448",
    email1: gemiData?.email || "Kostas.Mallios@gmail.com",
    email2: "info@miminoni.com",
    capital: gemiData?.capital?.[0]?.capitalStock ? `${gemiData.capital[0].capitalStock.toLocaleString('el-GR')} €` : "100.000,00 €",
    sharesCount: gemiData?.stocks?.[0]?.amount ? gemiData.stocks[0].amount.toLocaleString('el-GR') : "100.000",
    shareValue: gemiData?.stocks?.[0]?.nominalPrice ? `${gemiData.stocks[0].nominalPrice.toLocaleString('el-GR')} €` : "1,00 €",
    manager: gemiData?.persons?.[0]?.personName?.trim() || "ΜΑΛΛΙΟΣ ΚΩΝΣΤΑΝΤΙΝΟΣ ΗΛΙΑΣ",
    managerRole: gemiData?.persons?.[0]?.role || "Μοναδικός Εταίρος και Διαχειριστής",
    activity: gemiData?.activities?.[0]?.activity?.descr || "ΕΚΜΙΣΘΩΣΗ ΚΑΙ ΔΙΑΧΕΙΡΙΣΗ ΙΔΙΟΚΤΗΤΩΝ Η ΜΙΣΘΩΜΕΝΩΝ ΑΚΙΝΗΤΩΝ",
    kadCode: gemiData?.activities?.[0]?.activity?.id || "68200000",
    chamber: gemiData?.gemiOffice?.descr || "ΕΠΑΓΓΕΛΜΑΤΙΚΟ ΕΠΙΜΕΛΗΤΗΡΙΟ ΑΘΗΝΑΣ",
    documents: gemiData?.documents || null
  };

  // Dynamic list of documents fetched live from GEMI API + Local PDF
  const publicationsFromGemi = company.documents?.publication || [];
  const decisionsFromGemi = company.documents?.decision || [];

  const gemiDocumentsList = [
    {
      id: "init-1",
      date: company.registrationDate,
      gemiNo: company.gemiNo,
      title: "Ανακοίνωση σύστασης από ΥΜΣ & Καταστατικό",
      url: "/441222.pdf",
      isExternal: false,
      badge: "Καταστατικό"
    },
    ...publicationsFromGemi.map((pub: any, idx: number) => ({
      id: `pub-${idx}`,
      date: company.registrationDate,
      gemiNo: company.gemiNo,
      title: pub.kad ? `Δημοσίευση ΓΕΜΗ (${pub.kad})` : "Πιστοποιητικό Ανακοίνωσης ΓΕΜΗ (BusinessPortal)",
      url: pub.url,
      isExternal: true,
      badge: "Live ΓΕΜΗ"
    })),
    ...decisionsFromGemi.map((dec: any, idx: number) => ({
      id: `dec-${idx}`,
      date: dec.dtFrom ? new Date(dec.dtFrom).toLocaleDateString('el-GR') : company.registrationDate,
      gemiNo: dec.kak || company.gemiNo,
      title: dec.descr || dec.title || "Εταιρική Καταχώριση / Απόφαση ΓΕΜΗ",
      url: dec.url || dec.pdfUrl || "#",
      isExternal: true,
      badge: "Δημοσίευση"
    }))
  ];

  const googleMapsUrl = `https://www.google.com/maps/search/${encodeURIComponent("Αθανασίου Διάκου 1, 16772 Βούλα")}`;

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50 text-slate-900 antialiased">
      
      {/* Header — Lyroudis Style */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 md:px-8 py-3.5 flex flex-wrap justify-between items-center gap-4">
          
          {/* Logo & Company Title */}
          <div className="flex items-center gap-3">
            <img 
              src="/logo-2.png" 
              alt="MIMI AND NONI Logo" 
              className="w-[54px] h-[54px] object-contain shrink-0 bg-white block rounded-lg border border-slate-100 p-0.5" 
            />
            <div>
              <span className="font-extrabold text-xl md:text-2xl tracking-tight text-slate-900 block leading-tight">
                MIMI AND NONI
              </span>
              <span className="text-[11px] font-semibold tracking-wider text-slate-500 uppercase block mt-0.5">
                ΜΟΝΟΠΡΟΣΩΠΗ Ι.Κ.Ε.
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <a 
              href={`tel:${company.phone}`}
              className="bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold px-4 py-2.5 rounded-md transition-colors flex items-center gap-2 shadow-sm"
            >
              <Phone size={14} /> <span>{company.phone}</span>
            </a>
          </div>

        </div>
      </header>

      {/* Sub-header Banner — Lyroudis Style */}
      <section className="bg-slate-100 border-b border-slate-200/80 py-8 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-1.5 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
            <ShieldCheck size={16} /> 
            <span>Νομική Δημοσιότητα Ι.Κ.Ε. (Άρθρο 47 Ν. 4072/2012 & Ν. 4919/2022)</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
            Εταιρική Διαφάνεια & Στοιχεία Γ.Ε.ΜΗ.
          </h1>
        </div>
      </section>

      {/* Main Body — Lyroudis Layout */}
      <main className="max-w-5xl mx-auto px-4 md:px-8 py-10 flex-grow w-full space-y-8">
        
        {/* Card 1: Βασικά Στοιχεία Επιχείρησης */}
        <div className="bg-white rounded-xl shadow-md border border-slate-200/80 overflow-hidden p-6 md:p-8">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-3 mb-4 flex items-center gap-2">
            <Building2 size={18} className="text-emerald-700" /> 
            <span>Βασικά Στοιχεία Επιχείρησης</span>
          </h2>

          <div className="divide-y divide-slate-100 text-sm md:text-base">
            
            <div className="grid grid-cols-1 md:grid-cols-12 py-3.5 gap-2 md:gap-4 items-center">
              <div className="md:col-span-4 text-slate-500 font-medium">Εταιρική Επωνυμία</div>
              <div className="md:col-span-8 font-bold text-slate-900">{company.name}</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 py-3.5 gap-2 md:gap-4 items-center">
              <div className="md:col-span-4 text-slate-500 font-medium">Επωνυμία (Λατινικά)</div>
              <div className="md:col-span-8 font-medium text-slate-800">{company.nameEn}</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 py-3.5 gap-2 md:gap-4 items-center">
              <div className="md:col-span-4 text-slate-500 font-medium">Διακριτικός Τίτλος</div>
              <div className="md:col-span-8 font-medium text-slate-800">{company.titles}</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 py-3.5 gap-2 md:gap-4 items-center">
              <div className="md:col-span-4 text-slate-500 font-medium">Αριθμός Γ.Ε.ΜΗ.</div>
              <div className="md:col-span-8 font-bold text-emerald-800">
                {company.gemiNo} <span className="font-normal text-slate-500 text-sm">(EUID: {company.euid})</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 py-3.5 gap-2 md:gap-4 items-center">
              <div className="md:col-span-4 text-slate-500 font-medium">Αρμόδια Υπηρεσία ΓΕΜΗ</div>
              <div className="md:col-span-8 font-medium text-slate-800">{company.chamber}</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 py-3.5 gap-2 md:gap-4 items-center">
              <div className="md:col-span-4 text-slate-500 font-medium">ΑΦΜ / ΔΟΥ</div>
              <div className="md:col-span-8 font-bold text-slate-900">
                {company.afm} <span className="font-normal text-slate-500 text-sm">(Αρμόδια ΔΟΥ: {company.doy})</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 py-3.5 gap-2 md:gap-4 items-center">
              <div className="md:col-span-4 text-slate-500 font-medium">Νομική Μορφή / Κατάσταση</div>
              <div className="md:col-span-8 flex items-center gap-2 font-bold text-slate-900">
                <span>{company.legalForm} /</span>
                <span className="bg-emerald-100 text-emerald-800 border border-emerald-300 text-xs font-semibold px-2.5 py-0.5 rounded-full inline-flex items-center gap-1">
                  {company.status}
                </span>
                <span className="font-normal text-slate-500 text-sm">από {company.registrationDate}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 py-3.5 gap-2 md:gap-4 items-center">
              <div className="md:col-span-4 text-slate-500 font-medium">Ημερομηνία Σύστασης & Διάρκεια</div>
              <div className="md:col-span-8 font-medium text-slate-800">
                {company.registrationDate} — <span className="text-slate-600">Αορίστου Χρόνου</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 py-3.5 gap-2 md:gap-4 items-center">
              <div className="md:col-span-4 text-slate-500 font-medium">Διεύθυνση Έδρας</div>
              <div className="md:col-span-8 font-medium text-slate-800">
                <a 
                  href={googleMapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-emerald-800 hover:underline inline-flex items-center gap-1"
                >
                  <MapPin size={15} className="text-slate-400 shrink-0" />
                  <span>{company.fullAddress}</span>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 py-3.5 gap-2 md:gap-4 items-center">
              <div className="md:col-span-4 text-slate-500 font-medium">Στοιχεία Επικοινωνίας</div>
              <div className="md:col-span-8 flex flex-wrap items-center gap-x-6 gap-y-1 text-slate-800 font-medium">
                <div>
                  <span className="text-slate-500">Τηλέφωνο: </span>
                  <a href={`tel:${company.phone}`} className="font-bold text-slate-900 hover:text-emerald-800">
                    {company.phone}
                  </a>
                </div>
                <div>
                  <span className="text-slate-500">Email: </span>
                  <a href={`mailto:${company.email1}`} className="font-bold text-slate-900 hover:text-emerald-800">
                    {company.email1}
                  </a>
                  <span className="text-slate-400 mx-1.5">,</span>
                  <a href={`mailto:${company.email2}`} className="font-bold text-slate-900 hover:text-emerald-800">
                    {company.email2}
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Grid: Capital & Management */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 2: Εταιρικό Κεφάλαιο & Μερίδια */}
          <div className="bg-white rounded-xl shadow-md border border-slate-200/80 p-6">
            <h3 className="text-base font-bold text-slate-900 border-b border-slate-200 pb-3 mb-4 flex items-center gap-2">
              <Wallet size={18} className="text-emerald-700" /> 
              <span>Εταιρικό Κεφάλαιο & Μερίδια</span>
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Συνολικό Κεφάλαιο:</span>
                <span className="font-bold text-slate-900">{company.capital}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Είδος Εισφορών:</span>
                <span className="font-medium text-slate-800">100% Κεφαλαιακές Εισφορές</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Αριθμός Μεριδίων:</span>
                <span className="font-medium text-slate-800">{company.sharesCount} μερίδια ({company.shareValue} / μερίδιο)</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-500">1η Διαχειριστική Περίοδος:</span>
                <span className="font-medium text-slate-800">Λήξη 31/12/2026</span>
              </div>
            </div>
          </div>

          {/* Card 3: Διοίκηση & Μοναδικός Εταίρος */}
          <div className="bg-white rounded-xl shadow-md border border-slate-200/80 p-6">
            <h3 className="text-base font-bold text-slate-900 border-b border-slate-200 pb-3 mb-4 flex items-center gap-2">
              <Users size={18} className="text-emerald-700" /> 
              <span>Διοίκηση & Μοναδικός Εταίρος</span>
            </h3>
            <div className="space-y-3 text-sm">
              <div className="py-1 border-b border-slate-100">
                <div className="text-slate-500 text-xs uppercase font-semibold mb-1">Μοναδικός Εταίρος & Διαχειριστής</div>
                <div className="font-bold text-slate-900 text-base">{company.manager}</div>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Ποσοστό Συμμετοχής:</span>
                <span className="font-bold text-slate-900">100% ({company.sharesCount} / {company.sharesCount} Μερίδια)</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-500">Ιδιότητα Διαχείρισης:</span>
                <span className="font-medium text-slate-800">{company.managerRole}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Card 4: Δραστηριότητες Επιχείρησης (ΚΑΔ) */}
        <div className="bg-white rounded-xl shadow-md border border-slate-200/80 p-6">
          <h3 className="text-base font-bold text-slate-900 border-b border-slate-200 pb-3 mb-4 flex items-center gap-2">
            <FileText size={18} className="text-emerald-700" /> 
            <span>Δραστηριότητες Επιχείρησης (ΚΑΔ)</span>
          </h3>
          <div className="space-y-3">
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200/80">
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold text-xs text-emerald-800 uppercase tracking-wider">
                  Κύρια Δραστηριότητα (ΚΑΔ {company.kadCode})
                </span>
                <span className="text-xs text-slate-400">Έναρξη: {company.registrationDate}</span>
              </div>
              <div className="text-slate-900 font-bold">
                {company.activity}
              </div>
            </div>
          </div>
        </div>

        {/* Card 5: Επίσημες Δημοσιεύσεις & Έγγραφα ΓΕΜΗ (PDF) */}
        <div className="bg-white rounded-xl shadow-md border border-slate-200/80 p-6">
          <h3 className="text-base font-bold text-slate-900 border-b border-slate-200 pb-3 mb-4 flex items-center gap-2">
            <FileText size={18} className="text-emerald-700" /> 
            <span>Επίσημες Δημοσιεύσεις & Έγγραφα ΓΕΜΗ (PDF)</span>
          </h3>

          <div className="overflow-x-auto mb-4">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-slate-700 font-semibold">
                  <th className="py-2.5 px-3">Ημερομηνία</th>
                  <th className="py-2.5 px-3">Αριθμός ΓΕΜΗ</th>
                  <th className="py-2.5 px-3">Τύπος Αίτησης / Περιγραφή Εγγράφου</th>
                  <th className="py-2.5 px-3 text-right">Έγγραφο</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {gemiDocumentsList.map((doc) => (
                  <tr key={doc.id} className="hover:bg-slate-50">
                    <td className="py-3 px-3 font-medium text-slate-800 whitespace-nowrap">{doc.date}</td>
                    <td className="py-3 px-3 text-slate-700 font-mono text-xs">{doc.gemiNo}</td>
                    <td className="py-3 px-3 font-semibold text-slate-900">
                      <a href={doc.url} target="_blank" rel="noopener noreferrer" className="text-emerald-800 hover:underline flex items-center gap-1.5">
                        <FileCheck size={15} className="text-emerald-700 shrink-0" />
                        <span>{doc.title}</span>
                      </a>
                    </td>
                    <td className="py-3 px-3 text-right whitespace-nowrap">
                      <a 
                        href={doc.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-semibold px-2.5 py-1 rounded-md border border-emerald-200 inline-flex items-center gap-1 transition-colors"
                      >
                        {doc.isExternal ? <ExternalLink size={13} /> : <Download size={13} />}
                        <span>ΠΡΟΒΟΛΗ / ΛΗΨΗ</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-slate-50 p-4 rounded-lg border border-dashed border-slate-300 text-slate-600 text-sm flex items-start gap-3">
            <AlertCircle size={20} className="text-slate-400 shrink-0 mt-0.5" />
            <div>
              <div className="font-semibold text-slate-800 mb-1">1η Διαχειριστική Περίοδος (2026)</div>
              <div>
                Η εταιρεία ανήκει στη χρήση 2026 (Σύσταση: {company.registrationDate}). Οι ετήσιοι ισολογισμοί & οι οικονομικές καταστάσεις θα αναρτώνται αυτόματα εδώ σε μορφή PDF αμέσως μόλις δημοσιεύονται στο ΓΕΜΗ.
              </div>
            </div>
          </div>
        </div>

      </main>

      {/* Footer — Lyroudis Style */}
      <footer className="bg-slate-900 text-slate-300 pt-10 pb-6 px-4 md:px-8 mt-auto border-t border-slate-800">
        <div className="max-w-5xl mx-auto">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-8 border-b border-slate-800 gap-6">
            <div className="flex items-center gap-3">
              <img 
                src="/logo-2.png" 
                alt="MIMI AND NONI Logo" 
                className="w-[48px] h-[48px] object-contain shrink-0 bg-white p-1 rounded-md block" 
              />
              <div>
                <div className="text-lg font-bold text-white mb-0.5">
                  {company.name}
                </div>
                <div className="text-xs text-slate-400">
                  {company.nameEn}
                </div>
              </div>
            </div>

            <div className="text-xs text-slate-400 space-y-1">
              <div><strong className="text-slate-300">Γ.Ε.ΜΗ.:</strong> {company.gemiNo}</div>
              <div><strong className="text-slate-300">EUID:</strong> {company.euid}</div>
              <div><strong className="text-slate-300">ΑΦΜ:</strong> {company.afm} (ΔΟΥ {company.doy})</div>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
            <div>
              © 2026 {company.name} — {company.streetAddress}, 16772 Βούλα
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