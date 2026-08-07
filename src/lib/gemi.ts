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
      console.warn(`GEMI API returned status ${companyRes.status}`);
      return null;
    }

    const companyData = await companyRes.json();
    const docsData = docsRes.ok ? await docsRes.json() : null;

    return {
      ...companyData,
      documents: docsData
    };
  } catch (error) {
    console.error("Failed to fetch GEMI live data:", error);
    return null;
  }
}
