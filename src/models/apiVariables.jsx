/*
 * Current api choice: Financial Modeling Prep
 * To authorize your requests, add &apikey=YOUR_API_KEY at the end of every request.
*/
const uri = "https://financialmodelingprep.com";
const apiKey = "api";
const paths = {
  list: "api/v3/available-traded/list?",
  search: "api/v3/search?",
  company: "api/v3/profile"
}

const stockExchange = "NASDAQ";
const requestMethod = "GET";

const defaultLimit = 10;

function apiRequest(url)
{
  // If the end of a passed url is a '?', it is the start of a query, else, add onto the query
  url = url.charAt(url.length-1) == "?" ? url : url+"&";
  return url + `apiKay=${apiKey}/`;
}

const apiURLFunctions = {
  base: () => { return apiRequest(`${uri}/`); },
  list: (amount = defaultLimit) => { return apiRequest(`${uri}/${paths.list}limit=${amount}`); },
  nameSearch: (query, amount = defaultLimit) => { return apiRequest(`${uri}/${paths.search}query=${query}&limit=${amount}`); },
  companyProfile: (company) => { return apiRequest(`${uri}/${paths.company}/${company}/`)},
  companyHistory: (company, from, to) => { return null; }
}

module.exports = { apiURLFunctions };