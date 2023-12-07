/*
 * Current api choice: Financial Modeling Prep
 * To authorize your requests, add &apikey=YOUR_API_KEY at the end of every request.
*/
const uri = "https://financialmodelingprep.com";
const paths = {
  list: "api/v3/symbol/NYSE?",
  search: "api/v3/search?",
  company: "api/v3/profile",
  history: "api/v3/historical-price-full"
}

const stockExchange = "NYSE"; // Only one available with fre plan
const requestMethod = "GET";

const defaultLimit = 10;

function appendApiKey(apiKey, url)
{
  // If the end of a passed url is a '?', it is the start of a query, else, add onto the query
  let finalChar = url.charAt(url.length-1)
  url = finalChar == "?" || finalChar == "/" ? url : url+"&";
  return url + `apikey=${apiKey}`;
}

const apiURLFunctions = {
  base: () => { return `${uri}/`; },
  list: (amount = defaultLimit) => { return `${uri}/${paths.list}limit=${amount}`; },
  nameSearch: (query, amount = defaultLimit) => { return `${uri}/${paths.search}query=${query}&limit=${amount}`; },
  companyProfile: (company) => { return `${uri}/${paths.company}/${company}?`; },
  companyStockHistory: (company) =>  { return `${uri}/${paths.history}/${company}?`; }
}

module.exports = { apiURLFunctions, appendApiKey };
