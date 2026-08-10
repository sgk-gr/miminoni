const FALLBACK_GEMI_DATA = {
  legalType: { id: 19, descr: "ΙΚΕ" },
  zipCode: "16772",
  municipality: { id: 61235, descr: "ΒΑΡΗΣ - ΒΟΥΛΑΣ - ΒΟΥΛΙΑΓΜΕΝΗΣ / ΑΝΑΤΟΛΙΚΗΣ ΑΤΤΙΚΗΣ" },
  arGemi: "195248103000",
  city: "ΑΘΗΝΑ",
  streetNumber: "1",
  afm: "803357082",
  phone: "6980877448",
  fax: null,
  url: null,
  email: "Kostas.Mallios@gmail.com",
  isBranch: false,
  objective: "68200000 - ΕΚΜΙΣΘΩΣΗ ΚΑΙ ΔΙΑΧΕΙΡΙΣΗ ΙΔΙΟΚΤΗΤΩΝ Η ΜΙΣΘΩΜΕΝΩΝ ΑΚΙΝΗΤΩΝ",
  coNamesEn: ["MIMI AND NONI SINGLE MEMBER P.C."],
  autoRegistered: false,
  poBox: null,
  coNameEl: "MIMI AND NONI ΜΟΝΟΠΡΟΣΩΠΗ Ι.Κ.Ε.",
  lastStatusChange: "2026-07-23",
  status: { id: 3, descr: "Ενεργή" },
  prefecture: { id: 5, descr: "ΑΤΤΙΚΗΣ" },
  street: "ΑΘΑΝΑΣΙΟΥ ΔΙΑΚΟΥ ",
  gemiOffice: { id: 3, descr: "ΕΠΑΓΓΕΛΜΑΤΙΚΟ ΕΠΙΜΕΛΗΤΗΡΙΟ  ΑΘΗΝΑΣ" },
  activities: [
    {
      activity: {
        id: "68200000",
        descr: "ΕΚΜΙΣΘΩΣΗ ΚΑΙ ΔΙΑΧΕΙΡΙΣΗ ΙΔΙΟΚΤΗΤΩΝ Η ΜΙΣΘΩΜΕΝΩΝ ΑΚΙΝΗΤΩΝ",
        kadVersion: "kad_2026"
      },
      dtFrom: "2026-07-23",
      dtTo: null,
      type: "Κύρια"
    }
  ],
  coTitlesEl: ["MIMI AND NONI"],
  coTitlesEn: ["MIMI AND NONI"],
  incorporationDate: "2026-07-23",
  persons: [
    {
      personName: "ΜΑΛΛΙΟΣ ΚΩΝΣΤΑΝΤΙΝΟΣ ΗΛΙΑΣ ",
      businessName: null,
      role: "Μοναδικός Εταίρος και Διαχειριστής",
      dtFrom: "2026-07-23",
      dtTo: null,
      isRepresentativeAlone: null,
      isRepresentativeInCommon: null,
      percentage: "100%",
      category: "Εταίροι"
    }
  ],
  capital: [
    {
      capitalStock: 100000,
      currency: "Euro",
      ecsokefalaiikes: 0,
      eggiitikes: 0
    }
  ],
  stocks: [
    {
      stockTypeId: 7,
      amount: 100000,
      nominalPrice: 1,
      stockType: "Κεφαλαιικές"
    }
  ],
  branch: [],
  documents: {
    decision: [],
    publication: [
      {
        kad: null,
        url: "https://eyms.businessportal.gr/preview/066cb4882deee34abca9b1532d501110/announcement-certificate/print"
      }
    ]
  }
};

export async function getGemiCompanyData(gemiNumber: string = "195248103000") {
  const apiKey = process.env.GEMI_API_KEY || "1QV0mFBoWsaprgiphMaBKEANZL0tRCc5";
  
  try {
    const [companyRes, docsRes] = await Promise.all([
      fetch(`https://opendata-api.businessportal.gr/api/opendata/v1/companies/${gemiNumber}`, {
        headers: {
          "api_key": apiKey,
          "Accept": "application/json"
        },
        next: { revalidate: 3600 }
      }),
      fetch(`https://opendata-api.businessportal.gr/api/opendata/v1/companies/${gemiNumber}/documents`, {
        headers: {
          "api_key": apiKey,
          "Accept": "application/json"
        },
        next: { revalidate: 3600 }
      })
    ]);

    if (!companyRes.ok) {
      console.warn(`GEMI API returned status ${companyRes.status}, utilizing cached live API snapshot.`);
      return FALLBACK_GEMI_DATA;
    }

    const companyData = await companyRes.json();
    const docsData = docsRes.ok ? await docsRes.json() : null;

    return {
      ...companyData,
      documents: docsData
    };
  } catch (error) {
    console.error("Failed to fetch GEMI live data, utilizing cached snapshot:", error);
    return FALLBACK_GEMI_DATA;
  }
}
