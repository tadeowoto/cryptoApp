export async function fetchCrypto() {
  const apiUrl =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";
  const res = await fetch(apiUrl);
  const data = await res.json();
  return data;
}
