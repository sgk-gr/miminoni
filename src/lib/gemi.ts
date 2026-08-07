export async function getGemiCompanyData(gemiNumber: string = "195248103000") {
  const apiKey = process.env.GEMI_API_KEY || "1QV0mFBoWsaprgiphMaBKEANZL0tRCc5";
  
  try {
    const res = await fetch(`https://opendata-api.businessportal.gr/api/company/${gemiNumber}`, {
      headers: {
        "api_key": apiKey,
        "Accept": "application/json"
      },
      next: { revalidate: 3600 } // Cache for 1 hour to stay safely under 8 req/min rate limit
    });

    if (!res.ok) {
      console.warn(`GEMI API returned status ${res.status}`);
      return null;
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch GEMI live data:", error);
    return null;
  }
}
